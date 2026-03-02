import { Router } from "express";
const endpoints = Router();

endpoints.get('/nivel3/ping', (req, resp) => {
    resp.send('pong nivel3');
});

endpoints.get('/nivel3/compra', (req, resp) => {
    let cliente = req.query.cliente;
    let compra = Number(req.query.compra); 
    let cupomDesconto = Number(req.query.desconto);
    let valorFinal = cupomDesconto > 0 ? compra - (compra * cupomDesconto / 100) : compra;
    let valorDesconto = compra * (cupomDesconto / 100);

    
    resp.send('O Cliente: ' + cliente + ' realizou uma compra de R$' + 
        compra.toFixed(2) + ' com cupom de desconto de ' + cupomDesconto +
        '%. Que descontou o evalente de R$' + valorDesconto.toFixed(2) + 
        ' e o valor final da compra é de R$' + valorFinal.toFixed(2));
});





export default endpoints;