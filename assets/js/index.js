const num = document.querySelector('.num')
const generate = document.querySelector('.generate')

const generateNumber = () => {
  const randomNumber = Math.floor(Math.random() * 1000)
  num.innerHTML = randomNumber
}
generate.addEventListener('click', generateNumber)
generateNumber()
