const Router = require('koa-router');
const student = require('./MongoCon').db('Enrollment').collection('Student'); // Change or Not the Database and Collection Name

const router = new Router({
    prefix: '/cloud_student_data'
});

//Get All Documens from Account Collection
const GetAllStudent = async () => {
    const cursor = await student.find();
    return cursor.toArray();
};

//Insert New Document
const InsertStudent =  async (id, name, course, year, section) => {
    return await student.insertOne({id: id, name: name, course: course, year: year, section: section, edit: false});
};

//Update Document
const UpdateStudent = async (id, name, course, year, section) => {
    return await student.updateOne({id: parseInt(id)}, {$set: {
        name: name,
        course: course,
        year: year,
        section: section
    }});
};

//Delete a Document
const DeleteStudent =  async (id) => {
    return await student.deleteOne({id: parseInt(id)});
};

module.exports = {GetAllStudent, InsertStudent, UpdateStudent, DeleteStudent};