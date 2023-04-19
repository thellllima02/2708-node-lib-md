import fs from 'fs';
import chalk from 'chalk';


function tratarErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code, "Não há arquivos no diretorio"));
}

function pegaArquivo(cominhoDoArquivo){
    const encoding = 'utf-8';
    fs.promises
      .readFile(cominhoDoArquivo, encoding)
      .then((texto) => console.log(chalk.green(texto)))
      .catch(tratarErro)
}

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = "utf-8";
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto)=>{
//         if(erro){
//             tratarErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }

pegaArquivo('./arquivos/texto.md');
//console.log(chalk.yellow("Olá, Mundo!"));