let express = require('express')
let bodyParser = require('body-parser')
let jwt = require('jwt-simple')
let cors = require('cors')
let session = require('express-session')
let MongoStore = require('connenct-mongo')(session)

let app = express()
app.use(cors({
  
  credentials: true,  // 是否携带cookie
  allowedHeaders: 'Content-Type, Authorization', // 允许跨域头
  methods: 'GET,POST,DELETE,OPTIONS,PUT,PATCH' // 跨域方法
}))
app.use(session({
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
  })
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(4000)