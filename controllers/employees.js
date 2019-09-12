const Employee = require('../models/employee');

module.exports = {
    getEmployees: (req, res, next) => {
        const {
            user,
            query
        } = req;
        const filter = {};
        Employee.find(filter)
            .exec((err, employees) => {
                if (err) return next(err);
                return res.json(employees);
            });
    }, 
    getEmployeesById: (req, res, next) => {
        const {
            params: {
                id
            }
        } = req;
        Employee.findById(id)
            .exec((err, employee) => {
                if(err) return next(err);
                return res.json(employee);
            })
    },
    saveEmployee: (req, res, next) => {
        const {
            body
        } = req;
        Employee.create(body, (err, employee) => {
                if(err) return next(err);
                return res.json(employee);
            })
    },
    updateEmployee: (req, res, next) => {
        const {
            params: {
                id
            },
            body,
        } = req;
        console.log('update masuk');
        Employee.findByIdAndUpdate(id, body, {new: true})
            .exec((err, employee) => {
                if(err) return next(err);
                return res.json(employee);
            }) 
    },
    deleteEmployee: (req, res, next) => {
        const {
            params: {
                id
            },
        } = req;
        Employee.findByIdAndDelete(id)
            .exec((err, employee) => {
                if(err) return next(err);
                return res.json(employee);
            })
    }
}