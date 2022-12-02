const koa = require('koa');
const {koaBody} = require('koa-body');
const cors = require('@koa/cors');

const app =  new koa();

app.use(koaBody());
app.use(cors());

let students = require('./student.js');

app.use(students.routes());

app.listen(3001, function() {
  console.log("Server at http://localhost:3001/students")
});