import mysql from "mysql";
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api'
})
connection.connect((err)=>{
    if(err){
        console.error(`Erro ao conectar no mysql ${err}`)
    }console.log('conexão mysql bem sucedida!!!')
})

export default connection;