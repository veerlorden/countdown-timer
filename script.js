const startCountdown = (targetDate) => {
  const $days = document.getElementById('days')
  const $hours = document.getElementById('hours')
  const $minutes = document.getElementById('minutes')
  const $seconds = document.getElementById('seconds')

  function formatDate(time) {
    return `${time < 10 ? '0' + time : time}`
  }

  return function () {
    const currentDate = new Date()
    const diff = new Date(targetDate) - currentDate

    if (diff < 0) {
      clearInterval(intervalID)
      const tag = document.createElement('h1')
      const app = document.getElementById('app')
      tag.textContent = 'Новый год уже наступил! Пожалуйста, введите новую дату'
      app.textContent = ''
      app.insertAdjacentElement('afterbegin', tag)
    }

    const secondsRemain = diff / 1000

    const days = Math.floor(secondsRemain / 60 / 60 / 24)
    const hours = Math.floor(secondsRemain / 60 / 60 % 24)
    const minutes = Math.floor(secondsRemain / 60 % 60)
    const seconds = Math.floor(secondsRemain % 60)

    $days.textContent = days.toString()
    $hours.textContent = formatDate(hours)
    $minutes.textContent = formatDate(minutes)
    $seconds.textContent = formatDate(seconds)
  }
}

const countdown = startCountdown('1 Jan 2022')

const intervalID = setInterval(countdown, 1000)
