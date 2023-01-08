const Koa = require('koa');
const {koaBody} = require('koa-body');
const cors = require('@koa/cors');
const parser = require('koa-bodyparser');

const app = new Koa();

// Set up body parsing middleware
app.use(koaBody())
app.use(cors());

// Require the Router we defined in books.js
let ldata = require('./local_students_data.js');

// Use the Router on the sub route /books
app.use(ldata.routes()).use(ldata.allowedMethods);

app.listen(3001, ()=>{
    console.log("http://localhost:3001/local_student_data")
});

const mongo = new Koa();

mongo.use(cors());
mongo.use(parser());

let cdata = require('./cloud_students_data.js');

mongo.use(cdata.routes()).use(cdata.allowedMethods);

mongo.listen(3002, () => console.log('http://localhost:3002/cloud_student_data'));