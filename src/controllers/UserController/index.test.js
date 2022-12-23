//import app from "../../server.js";
const app = require('../../server')
//import request from 'supertest'
const request = require('supertest')
const { user1, user2, listusers } = require('./mocks')

describe("Rota de cadastro de usuário", () =>{
test('Cadastrar usuário 1', async () => { 
    const response = await request(app).post("/insertUser").send(user1)
    
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(user1)
 })

 test('Cadastrar usuário 2', async () => { 
    const response = await request(app).post("/insertUser").send(user2)
    
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(user2)
 })    
})

describe("Rota de listagem de usuários", () => {
    test('Testando listagem de usuários ...', async () => { 
        const response = await request(app).get("/users")

        expect(response.body).toEqual(listusers)
    })    
})







