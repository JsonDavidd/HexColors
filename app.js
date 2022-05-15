const root = document.getElementById('root')

const button = document.getElementById('button')
const currentColor = document.getElementById('currentColor')
const color = document.getElementById('color')

const randomInt = (i) => Math.floor(Math.random() * i)

const getRandomHex = (len, random = randomInt) =>
	Array.from({length: len}, () => random(16).toString(16)).join('')

const changeColor = () => {
	const hexColor = '#' + getRandomHex(6)
	currentColor.textContent = hexColor
	color.style.backgroundColor = hexColor
}

window.onload = changeColor

button.addEventListener('click', () => 
	changeColor())
