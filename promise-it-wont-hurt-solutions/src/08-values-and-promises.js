function attachTitle(cb) {
	return 'DR.'+ ' ' + cb
}

Promise.resolve('MANHATTAN')
.then(attachTitle)
.then(console.log)