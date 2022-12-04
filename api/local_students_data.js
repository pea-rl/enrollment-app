const Router = require('koa-router');

const router = new Router({
    prefix: "/local_student_data"
});
let id = 1000;
let student = [
    {id: id++, name: "Irish Pearl Sumicad", course: "BSIT", year: "4", section: "A", edit: false},
    {id: id++, name: "Angelien Domex", course: "BSIT", year: "4", section: "A", edit: false},
    {id: id++, name: "Kimberly Baga", course: "BSIT", year: "4", section: "A", edit: false},
];

router.get(('/'), (ctx, next) => {
    ctx.body = student;
    console.log("Get All Student Data");
    next();
});

router.post('/insert', (ctx, next) => {
    if(!ctx.request.body.name || !ctx.request.body.course || !ctx.request.body.year || !ctx.request.body.section)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
        console.log("Missing Fields");
    }
    else
    {
        student.push({id: id++, name: ctx.request.body.name, course: ctx.request.body.course, year: ctx.request.body.year, section: ctx.request.body.section, edit: false});
        ctx.response.status = 200;
        ctx.body = "Successfully Inserted Student Data to Record";
        console.log("Successfully Inserted Student Data to Record");
    }
    next();
});

router.post('/delete', (ctx, next) => {
    if(!ctx.request.body.id)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
        console.log("Missing Fields");
    }
    else
    {
        var index = student.findIndex(x => x.id == ctx.request.body.id);
        student.splice(index, 1);
        ctx.response.status = 200;
        ctx.body = "Successfully Deleted Student Data From Record";
        console.log("Successfully Deleted Student Data From Record");
    }
    next();
});

router.post('/update', (ctx, next) => {
    if(!ctx.request.body.id || !ctx.request.body.name || !ctx.request.body.course || !ctx.request.body.year || !ctx.request.body.section)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
        console.log("Missing Fields");
    }
    else
    {
        var index = student.findIndex(x => x.id == ctx.request.body.id);
        student[index].name = ctx.request.body.name;
        student[index].course = ctx.request.body.course;
        student[index].year = ctx.request.body.year;
        student[index].section = ctx.request.body.section;
        ctx.response.status = 200;
        ctx.body = "Successfully Updated Student Data On Record";
        console.log("Successfully Updated Student Data On Record");
    }
})

module.exports = router;