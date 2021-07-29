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

