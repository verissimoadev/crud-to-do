//import { v4 as uuidv4 } from "uuid";
//import { users } from "../../database/users.js";

const {v4:uuidv4} = require("uuid")
const users = require("../../database/users.js");
const connect = require("./bd.js");
//acumolo de responsabilidades no controller
async function insertUser(req, res) {
    const { name, age } = req.body;


    if (!name || !age) {
        return res.status(404).json({message: "Erro 404"})
    }

    const user = {
        id: uuidv4(),
        name,
        age
    }

    const conn = await connect()
    const sql = 'INSERT INTO users (name, age) VALUES ($1, $2)'
    const values = [name, age]

    const resposnse = await conn.query(sql,values)

    users.push(user)
    delete user.id
    res.status(200).json(user)
}

function selectUsers(req, res) {

    const { initial_age, final_age } = req.query
    let usersFilted = users

    if (initial_age && final_age) {
        usersFilted = users.filter(user => user.age >= initial_age && user.age <= final_age)
    }
    
    return res.status(200).json(usersFilted)
}

function deleteUser(req, res) {
    
}

function updateUser(req, res) {
    
}

module.exports ={
    insertUser,
    selectUsers,
    deleteUser,
    updateUser
}