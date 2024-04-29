import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname + 'index.html')

const Registro = {
    regNome: req.body.regNome,
    regEmail: req.body.regEmail,
    regPassword: req.body.regPassword
}
connection.query(`INSERT INTO USUARIOS VALUES (NULL, "${Registro.regNome}", "${Registro.regEmail}", "${Registro.regPassword}"`, (err)=>{
    if(err){
        console.log(`Erro no Registro: ${err}`)
        
    }else{console.log('Registro bem sucedido')}
} )