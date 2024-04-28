const express = require("express");
const app = express();

// Primeira rota ( introdutoria )

app.get("/", function(req,res){
    res.send("<h1>Bem vindo a IBL Tecnologias!<h1/>");
})

// Segundo rota (Lista de peças disponiveis)
app.get("/Pecas", function(req,res){
    res.send("<h3>Lista de Peças disponiveis!</h3>" + "Placa Mãe H310M - 599,90" 
+ " /// " +" Placa de video RTX 4060 TI - 2399,90")
})

// Terceira rota utilizando query program

app.get("/cadastro/", function(req,res){
    var nome = req.query["nome"];
    res.send("retorno do cadastro: nome = " + nome);
})



app.listen(8092, function(erro){
    if (erro){
        console.log("Erro ao iniciar");
    }else{
        console.log("Servidor iniciado")
    }
})