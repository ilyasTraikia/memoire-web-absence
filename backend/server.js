const express = require('express')
const app = express()
const cors = require('cors')
const accountRouter = require('./Routers/accountRouter')
const adminRouter = require('./Routers/adminRouter')
const chefDepRouter = require('./Routers/chefDepRouter')
require('dotenv').config()













//App configuration
app.use(express.json())
app.use(cors())
app.use('/accounts', accountRouter)
app.use('/admin', adminRouter)
app.use('/chefDep', chefDepRouter)
app.get('/', (req, res) => res.send('Hello world!'))








app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}`))