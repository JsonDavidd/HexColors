const root = document.getElementById('root')

const button = document.getElementById('button')
const currentColor = document.getElementById('currentColor')
const color = document.getElementById('color')

const randomIntRange = range => 
	Math.floor(Math.random() * range)

const intToHex = int => {
	return int.toString(16)
}

const applyStyleSheet = (target, style) => {
	for(i in style){
		target.style[i] = style[i]
	}
}

const colorChanger = () => {
	const hexColor = '#' + intToHex(randomIntRange(16777215))
	currentColor.textContent = hexColor
	color.style.backgroundColor = hexColor
}

colorChanger()

button.addEventListener('click', () => 
	colorChanger())
