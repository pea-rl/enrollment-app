const Router = require('koa-router');

const router = new Router({
  prefix: '/students'
});

//let id = 1;
let students = [
  {name: "Sumicad", course: "BSIT", year: "4", section: "A", edit: false},
  {name: "Delos Reyes", course: "BSIT", year: "4", section: "A", edit: false},
  {name: "Matthews", course: "BSIT", year: "4", section: "A", edit: false}
];

router.get('/', (ctx, next) => {
  ctx.body = students;
  next();
});

router.post('/create', (ctx, next) => {
  console.log(ctx.request.body);
  if(!ctx.request.body.name || !ctx.request.body.course || !ctx.request.body.year || !ctx.request.body.section) {
    ctx.response.status = 404;
    ctx.body = "Missing Field";
    console.log("Missing Field");
  }
  else {
    students.push({name: ctx.request.body.name, course: ctx.request.body.course, year: ctx.request.body.year, section: ctx.request.body.section, edit: false});
    ctx.response.status = 201;
    ctx.body = "Succesfully Added User";
    console.log("Successfully Added User");
  }
  next();
});

router.post('/delete', (ctx,next) => {
  console.log(ctx.request.body);
  if(!ctx.request.body.name) {
    ctx.response.status = 404;
    ctx.body = ("Missing Fields");
    console.log("Missing Fields");
  }
  else {
    var index = users.findINdex(x => x.name == ctx.request.body.name);
    console.log(index)
    ctx.response.status = 201;
    ctx.body = "item deleted";
    console.log("Item Deleted");
  }
  next();

});

  router.post('/update', (ctx,next) => {
    if(!ctx.request.body.name || !ctx.request.body.course) {
      ctx.response.status = 404;
      ctx.body = "Missing Fields";
      console.log("Missing Fields");
    }
    else {
      ctx.response.status = 201;
      ctx.body = "item deleted";
      var index = users.findIndex(x => x.name == ctx.request.body.name);
      students[index].name = ctx.request.body.name;
      students[index].course = ctx.request.course;
      console.log("Item Updated");
    }
    next();
});

module.exports = router;