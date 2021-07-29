const EventEmitter = require('events')


class MyEvents extends EventEmitter {}

const jonBullion = new MyEvents()

jonBullion.on('new album', () => {
	console.log('this album is lit 🔥🔥🔥🔥')
})

jonBullion.on('brag', () => {
	console.log('Man you are a big 🤡')
})

jonBullion.emit('new album')
jonBullion.emit('new album')
jonBullion.emit('new album')
jonBullion.emit('brag')

process.on('exit', (code) => {
	console.log("Node is done with file execution. Goodbye...", code)
})
process.on('beforeExit', (code) => {
	console.log("Almost done...", code)
})
process.on('Error', (code) => {
	console.log("e don happen, I don tell am...", code)
})

