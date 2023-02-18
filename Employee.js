const mongo = require('mongoose')
 //npm i mongoose
const empSchema = new mongo.Schema({
    eno: Number,
    ename: String,
    salary: Number,
    dept: {
        deptno: Number,
        deptname: String,
        deptloc: String
    },
    designation: String,
    manager: {
        mgrno: Number,
        mgrname: String,
    },
    project: [
        {
            projname: String,
            projhr: Number,
        }
    ]
})

const Employee = mongo.model('Employee', empSchema)
module.exports = Employee