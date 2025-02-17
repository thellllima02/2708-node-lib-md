import fs from 'fs';
import chalk from 'chalk';
import { error } from 'console';

console.log(chalk.blue("Hello World"));

function trataErro(erro){
    //Mostrar qual o erro
    console.log(erro);
    //lançar,mostrar           todo erro tem um código
    throw new Error(chalk.red(erro.code , 'não há arquivo no diretório'));
}
// async/await

async function pegaArquivo(caminhoDoArquivo){
   try{
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.green(texto));
   }catch(erro){
    trataErro(erro)
   }
}








//Código assíngrono tipo then()
//function pegaArquivo(caminhoDoArquivo){
//    const encoding = 'utf-8';
//    fs.promises
//     .readFile(caminhoDoArquivo, encoding )
//     .then((texto)=>console.log(chalk.green(texto)))
//     .catch(trataErro)
//}

//Código síncrono 
// function pegaArquivo (caminhoDoArquivo){
//     const encoding = 'utf-8';
//     //Ler um arquivo,buscar um arquivo
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto)=>{
//         if(erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }

pegaArquivo('./arquivos/texto.md');
