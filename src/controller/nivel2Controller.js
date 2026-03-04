import { Router } from "express";
const endpoints = Router();

endpoints.get('/nivel2/ping', (req, resp) => {
    resp.send('pong nivel2');
});


endpoints.get('/nivel2/tabuada/:numero', (req, resp) => {
    let numero = Number (req.params.numero);
    let tabuada = [];
  for (let i = 0; i <= 10; i++) {
    tabuada.push( numero * i)
  }
 resp.send('Tabuada do Número ' + numero + ": " + tabuada);
});




endpoints.post('/nivel2/analiseNotas', (req, resp) => {
    let notasAlunos = req.body;
    let mediasAlunos = [];

    for (let aluno of notasAlunos) {
        let media = (aluno.notas.n1 + aluno.notas.n2 + aluno.notas.n3) / 3;
        let situacao = media >= 6 ? 'Aprovado' : 'Reprovado';

        mediasAlunos.push({
            nome: aluno.nome,
            media: media,
            situacao: situacao
        });
    }
    resp.send(mediasAlunos);
});

endpoints.get('/nivel2/candidato', (req, resp) => {

    let nota = Number(req.query.notaCandidato); 
    let corte = Number(req.query.notaCorte);
    let minima = Number(req.query.notaMinima);
    
    let situacao = '';

   
    if (nota < corte) {
        situacao = 'Reprovado';
    } 
    else if (nota >= corte && nota < minima) {
        situacao = 'Lista de Espera';
    } 
    else if (nota >= minima) {
        situacao = 'Aprovado';
    }

    resp.send("A situação do candidato é: " + situacao);
}); //http://localhost:5010/nivel2/candidato?notaCandidato=8&notaMinima=7&notaCorte=7


endpoints.post('/nivel2/ordenacao', (req, resp) => {
    
    let numeros = req.body.numeros; 
    let ordem = '';
    let crescente = true;
    let decrescente = true;

    
    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] < numeros[i+1]) {
            decrescente = false; 
        }
        if (numeros[i] > numeros[i+1]) {
            crescente = false; 
        }
    }

    if (crescente) {
        ordem = 'Crescente';
    } else if (decrescente) {
        ordem = 'Decrescente';
    } else {
        ordem = 'Desordenados';
    }

    resp.send({
        ordem: ordem
    });
    //http://localhost:5010/nivel2/ordenacao
    /**BODY: {
            "numeros": [30, 20, 10]
}                       **/




});


export default endpoints;