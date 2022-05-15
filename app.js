// @ts-check

const root = document.getElementById('root')

const button = document.getElementById('button')
const input = document.getElementById('input')
const color = document.getElementById('color')

const randomInt = (i) => Math.floor(Math.random() * i)

const getRandomHex = (len, random = randomInt) =>
	Array.from({length: len}, () => random(16).toString(16)).join('')

const changeColor = (hex = getRandomHex(6)) => {
	const hexColor = '#' + hex
	input.placeholder = hex
	input.value = ''
	color.style.backgroundColor = hexColor
}

window.onload = () => changeColor()

button.addEventListener('click', () => {
	changeColor(input.value || undefined)
})
