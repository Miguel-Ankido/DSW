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
        '%. Que descontou o equivalente de R$' + valorDesconto.toFixed(2) + 
        ' e o valor final da compra é de R$' + valorFinal.toFixed(2));
}); // teste: http://localhost:5010/nivel3/compra?cliente=Miguel&compra=250&desconto=30

endpoints.post('/nivel3/kart', (req, resp) => {

    let tamanhoPista = Number(req.body.tamanho); //Em metros
    let qtdVoltas = Number(req.body.voltas);
    let tempoVolta = Number(req.body.tempo); //Em segundos

    let distanciaTotal = (tamanhoPista * qtdVoltas)/1000; //Retorna o tamanho total da pista em km
    let previsao = Math.ceil((tempoVolta * qtdVoltas)/60); //Retorna a previsão de terminar em minutos

    resp.send(`A pista tem o tamanho de ${distanciaTotal.toFixed(2)} km, e a previsão de terminar a corrida é de ${previsao.toFixed(2)} minutos`);
});
/**
 * BODY PARA TESTE DO ENDPOINT http://localhost:5010/nivel3/kart{
            {
            "tamanho": 800,
            "voltas":48,
            "tempo": 32

} 

 */



endpoints.post('/nivel3/metapessoal', (req, resp) => {

    let meta = req.body.meta;
    let valorMeta = Number(req.body.valorMeta);
    let salarioLiquido = Number(req.body.salarioLiquido);
    let saldespesasMensais = Number(req.body.saldespesasMensais);


    let economiaFixa = (salarioLiquido - saldespesasMensais)*0.3;
    let valorSobra = salarioLiquido - saldespesasMensais - economiaFixa;
    let reservaMeta = valorSobra;
    let prazo = Math.ceil((valorMeta / reservaMeta));

    resp.send(`Para alcançar a meta de comprar ${meta} no valor de R$${valorMeta.toFixed(2)}, \n
     com um salário líquido de R$${salarioLiquido.toFixed(2)} e despesas mensais de R$${saldespesasMensais.toFixed(2)}, \n
      é necessário economizar R$${economiaFixa.toFixed(2)} por mês. \n
       Com isso, sobrará R$${valorSobra.toFixed(2)} para contribuir para a meta, e o prazo estimado para alcançar a meta \n
       é de ${prazo} meses.`);
});  
/**
 * BODY PARA TESTE DO ENDPOINT http://localhost:5010/nivel3/metapessoal{
            "meta": "Iate",
            "valorMeta": 5700,
            "salarioLiquido": 1600,
            "saldespesasMensais": 600

} 
 */



export default endpoints;