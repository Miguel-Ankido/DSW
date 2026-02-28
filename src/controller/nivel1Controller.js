import { Router } from "express";
const endpoints = Router();

endpoints.get('/nivel1/ping', (req, resp) => {
    resp.send('pong nivel1');
});

endpoints.get('/nivel1/media/:aluno/:n1/:n2/:n3', (req, resp) => {
    let aluno = req.params.aluno;
    let n1 = Number (req.params.n1);
    let n2 = Number (req.params.n2);
    let n3 = Number(req.params.n3);
    let media = Number (n1 + n2 + n3)/3;
    if (media <0){resp.send('Média inválida') 
        console.error("Média inválida")};
    
    let situacao = media >= 6 ? 'Aprovado' : 'DP';


    resp.send('Média das notas: ' + media + " Situação do " + aluno + ": " + situacao);
}); //http://localhost:5010/nivel1/media/Miguel/4/7/6


endpoints.post('/nivel1/leituraLivro', (req, resp) => {
    let nome = req.body.nome;
    let totalPaginas = Number (req.body.totalPaginas);
    let segundosPagina = Number (req.body.segundosPagina);
    let finalDoLivro = Number ((segundosPagina*totalPaginas)/3600);


    resp.send('Tempo em Horas para terminar o livro inteiro: ' + finalDoLivro);
}); //http://localhost:5010/nivel1/leituraLivro

endpoints.get('/nivel1/combinacaoCores', (req, resp) => {
    let cor1 = req.query.cor1;
    let cor2 = req.query.cor2;
    let corResultante = '';
//Vermelhodsadasdsdsadas
//Azul
//Amarelo
    if ((cor1 === 'vermelho' && cor2 === 'azul') || (cor1 === 'azul' && cor2 === 'vermelho')) {
        corResultante = 'roxo';
    } else if ((cor1 === 'vermelho' && cor2 === 'amarelo') || (cor1 === 'amarelo' && cor2 === 'vermelho')) {
        corResultante = 'laranja';
    } else if ((cor1 === 'azul' && cor2 === 'amarelo') || (cor1 === 'amarelo' && cor2 === 'azul')) {
        corResultante = 'verde';
    } else {
        corResultante = 'Combinação de cores inválida';
    }
    resp.send("A combinação de: " + cor1 + " e " + cor2  + " é: " + corResultante);
});
//http://localhost:5010/nivel1/combinacaoCores/amarelo/azul

endpoints.post('/nivel1/validacao', (req, resp) => {
let idadePessoa1 = req.body.idadePessoa1;
let idadePessoa2 = req.body.idadePessoa2;
let podemAssistir = false;
let classificacao = req.body.classificacao;
// Livre, 12, 14, 16, 18
 if (classificacao === 'Livre') {
    podemAssistir = true;
 } else if (classificacao === '12') {
    podemAssistir = (idadePessoa1 >= 12 && idadePessoa2 >= 12);
 } else if (classificacao === '14') {
    podemAssistir = (idadePessoa1 >= 14 && idadePessoa2 >= 14);
 } else if (classificacao === '16') {
    podemAssistir = (idadePessoa1 >= 16 && idadePessoa2 >= 16);
 } else if (classificacao === '18') {
    podemAssistir = (idadePessoa1 >= 18 && idadePessoa2 >= 18);
 } else if (idadePessoa1 < 0 || idadePessoa2 < 0) {
    resp.send('Idade inválida');
 }
resp.send('As pessoas podem assistir ao filme? ' + (podemAssistir ? 'Sim' : 'Não'));
}); /**
POST: http://localhost:5010/nivel1/validacao
 BODY: {"idadePessoa1" : -7,
"idadePessoa2" : -1,
"classificacao"  : "18"
}
*/


export default endpoints;