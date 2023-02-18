const mongo = require('mongoose')//npm i mongoose
const Employee = require('./Employee')
const { esname, elname, salary, department, designation, manager, project } = require('./helper')

mongo.set('strictQuery', false)
mongo.connect(`mongodb://127.0.0.1:27017/Company`)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

const e = 111
const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Employee.deleteMany({});
    for (let i = 0; i < 25; i++) {
        let projects = []
        let n = Math.floor(Math.random() * 2 + 1)
        for (let j = 0; j < n; j++) {
            projects.push(sample(project))
        }
        const emp = new Employee({
            eno: `${e + i}`,
            ename: `${sample(esname)} ${sample(elname)}`,
            salary: `${sample(salary)}`,
            dept: sample(department),
            designation: `${sample(designation)}`,
            manager: sample(manager),
            project: projects
        })
        await emp.save()
        console.log(emp)
    }
}
seedDB()

