const path = require('path')
const express = require('express');
// const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000
const cors = require('cors')
// const {errorHandler} = require('./middleware/errorMiddleware')

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.use('/api/data', require('./routes/data'))
app.use('/', (req, res) => {
    res.send({"hello": "world"})
})
// connectDB()

// app.use(errorHandler)

app.listen(PORT, () => { console.log("Server running on "+`${PORT}`) })