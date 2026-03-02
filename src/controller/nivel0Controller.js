import { Router } from "express";
const endpoints = Router();


endpoints.get('/hello', (req, resp) => {
  resp.send('hello word!')  
})


endpoints.get('/suave/:nome', (req, resp) => {
    let nome = req.params.nome;
    resp.send('Suave ' + nome + '?')
})

endpoints.get('/tranquilo', (req, resp) => {
    let nome = req.query.nome;
    resp.send('Tranquilo ' + nome + '?')
})

endpoints.get('/dobro', (req, resp) => {
    let numero = Number(req.query.numero);
    let dobro = numero * 2;
    resp.send('O dobro é ' + dobro);
})
endpoints.get('/somar' , (req,resp) =>{
    let numero1 = Number(req.query.numero1);
    let numero2 = Number(req.query.numero2);
    let somar = numero1 + numero2;
    resp.send ('A soma de ambos é: ' + somar);
})

//endpoints.get('/media/:nota1/:nota2/:nota3', (req, resp) => {
  //  let nota1 = Number (req.params.nota1);
//     let nota2 = Number (req.params.nota2);
//    let nota3 = Number(req.params.nota3);
//    let media = Number (nota1 + nota2 + nota3)/3;
//   let situacao = media >= 6 ? 'Aprovado' : 'Reprovado';
    
//   resp.send('Média: ' + media + '.Situação: ' + situacao)
//})
//_______________________________________________________.._______________________________________________________________________
endpoints.get('/calculadora/somar/:num1/:num2', (req, resp) => {
    let n1 = Number(req.params.num1);
    let n2 = Number(req.params.num2);
    let s = n1+n2;
    resp.send({
            soma: s
    });
}) //http://localhost:5010/calculadora/somar/7/5



endpoints.get('/calculadora/subtrair', (req, resp) => {
    let n1 = Number(req.query.num1);
    let n2 = Number(req.query.num2);
    let sub = n1 - n2;
    resp.send({
            subtracao: sub
    });
}) //http://localhost:5010/calculadora/subtrair?num1=10&num2=4


endpoints.post('/calculadora/multiplicar', (req, resp) => {
    let dados = req.body;
    let mult = dados.n1 * dados.n2;
    resp.send({
            multiplicacao: mult
    }) //http://localhost:5010/calculadora/multiplicar
})
//opcao 2 
// let n1 = Number(req.body.n1);
// let n2 = Number(req.body.n2);
// let mult = n1 * n2;

//opcao 3 
//let (n1, n2) = req.body;
// let mult = n1 * n2;

endpoints.get('/media1/:nota1/:nota2/:nota3', (req, resp) => {
 let nota1 = Number (req.params.nota1);
 let nota2 = Number (req.params.nota2);
 let nota3 = Number(req.params.nota3);
let media = Number (nota1 + nota2 + nota3)/3;
let situacao = media >= 6 ? 'Aprovado' : 'Reprovado';

resp.send('Média: ' + media + 'situação: ' + situacao)
}) //http://localhost:5010/media/10/4/6

endpoints.get('/media2' , (req,resp) =>{
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);
    let media = (n1 + n2)/2;
    resp.send ('Média:' + media);
})// http://localhost:5010/media2?n1=7&n2=10

endpoints.post('/media3', (req, resp) => {

    let media3 = (req.body.n1 + req.body.n2 + req.body.n3)/3;
    let situacao = media3 >= 6 ? 'Aprovado' : 'Reprovado';
    resp.send({
        media: media3,
        situacao: situacao
    })//http://localhost:5010/media3
})

endpoints.post ('/media4/:n1', (req, resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.query.n2);

    let dados = req.body;
    let n3 = Number(dados.n3);
    let media =(n1 + n2 + n3)/3;
    let situacao = media >= 6 ? 'Aprovado' : 'Reprovado';
    resp.send({
        media: media,
        situacao: situacao})
    })//http://localhost:5010/media4/5?n2=8


    endpoints.post('/media/alunos/relatorio', (req, resp) => {
        let listaAlunos = req.body.alunos;
        let relatorio = listaAlunos.map(aluno => {
            let soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
            let media = soma / aluno.notas.length;
        
            return {
                nome: aluno.nome,
                media: Number(media.toFixed(1)),
                situacao: media >= 6 ? 'Aprovado' : 'Reprovado'
            };
        });
    
        resp.send(relatorio);



    });
    export default endpoints;
