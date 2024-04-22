import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import path from 'path';
import connection from "./DATABASE/dbConnection.js";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const upload = multer();
const Porta = 3333;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload.array())
app.use(express.static(__dirname + '/assets'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/perfil', (req,res)=>{
    const user = {
        email: req.body.email,
        password: req.body.password
    }

    connection.query(`SELECT EMAIL, PASSWORD FROM USUARIOS WHERE EMAIL = "${user.email}" AND PASSWORD = "${user.password}" `, (err, results) =>{
        if(results.length > 0){
            res.send('seja bem vindo!!!')
        }else{
            res.send('falha ao logar')
        }
    })

})
app.post('/registro', (req,res)=>{
    const Registro = {
        regNome: req.body.regNome,
        regEmail: req.body.regEmail,
        regPass: req.body.regPass
    };
    connection.query(`INSERT INTO USUARIOS VALUES (NULL, "${Registro.regNome}", "${Registro.regEmail}", "${Registro.regPass}") `, (err)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.send('registro bem sucedido')
            console.log('registro bem sucedido')
        }
    }) })


app.listen(Porta, ()=>{console.log(`servidor rodando na Porta:${Porta}`)})