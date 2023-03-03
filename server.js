const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')

app.use('/static', express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(router)

app.listen(port, () => {
    console.log(`Success run on ${port}`)
})