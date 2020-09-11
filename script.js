const startCountdown = (targetDate) => {
  const $days = document.getElementById('days')
  const $hours = document.getElementById('hours')
  const $mins = document.getElementById('mins')
  const $seconds = document.getElementById('seconds')

  function formatDate(time) {
    return `${time < 10 ? '0' + time : time}`
  }

  return function () {
    const currentDate = new Date()
    const diff = new Date(targetDate) - currentDate

    const secondsRemain = diff / 1000

    const days = Math.floor(secondsRemain / 60 / 60 / 24)
    const hours = Math.floor(secondsRemain / 60 / 60 % 24)
    const mins = Math.floor(secondsRemain / 60 % 60)
    const seconds = Math.floor(secondsRemain % 60)

    $days.textContent = days
    $hours.textContent = formatDate(hours)
    $mins.textContent = formatDate(mins)
    $seconds.textContent = formatDate(seconds)
  }
}

const countdown = startCountdown('1 Jan 2021')

setInterval(countdown, 1000)
