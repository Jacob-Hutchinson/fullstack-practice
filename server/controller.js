require("dotenv").config();
const Sequelize = require('sequelize')


const { default: axios } = require("axios");

const {CONNECTION_STRING} = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    addPerson: (req,res) => {
        console.log(req.body)
        const {name, age, job, color} = req.body
        sequelize.query(`
        insert into person_practice(name, age, job, color)
        values('${name}', ${+age}, '${job}', '${color}');

        select * from person_practice
        `)
        .then(dbres => {
            // console.log(dbres[0])
            res.send(dbres[0])
        })
    }, 
    getpersons: (req, res) => {
        sequelize.query(`
        select * from person_practice
        `)
        .then(dbres => {
            // console.log(dbres[0])
            res.send(dbres[0])
        })
    },
    deletePerson: (req, res) => {
        console.log('hit the back end')
        console.log(req)
        sequelize.query(`
        delete from person_practice
        where id = '${req.params.id}';

        select * from person_practice
        `)
        .then(dbres => {
            console.log(dbres[0])
            res.send(dbres[0])
        })
    }
}