const express = require('express')
const app = express()
const port = process.env.PORT || 8081
app.listen(port, () => {
	console.log(`app listening at PORT ${port}`)
})

filename = 'data.txt'

app.get('/', (req, res) => {
	const file = `${__dirname}/${filename}`;
	// const file = `C:/Users/Ankur Parihar/Desktop/file.txt`; <---- to provide full path do it like this
	res.download(file)
})