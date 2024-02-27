//Spread Operator.


//let primeiros = [1, 2, 3];

//let numeros = [...primeiros, 4, 5, 10];

//console.log(numeros);

 /*let pessoa = {
  nome:"Nicholas",
  idade: 45,
  cargo:"RH"
}

let novaPessoa = {
  ...pessoa,
  status: "ATIVO",
  cidade: "Sao Paulo / SP"
};

console.log(novaPessoa);*/

/*function novoUsuario(info){
  let dados = {
    ...info,
    status: "ATIVO",
    inico:"03/03/1994",
    codigo: "123123"
  };

  console.log(dados);
}


novoUsuario({nome:"Jose", sobrenome:"Silva", cargo:"Dev"});
*/


//Rest Operator

/*
function convidados(...nomes){
  console.log("SEJA BEM VINDOS CONVIDADOS")
  console.log(nomes);


}

convidados("Nicholas", "Naruto", "Sasuke", " Jiraya")*/

function sorteador(...numeros){
  console.log(numeros);



  const numeroGerado = Math.floor(Math.random() * numeros.length);
  console.log("Numero gerado foi:"+ numeros[numeroGerado])
}
sorteador(1, 4, 12, 58, 55, 96, 85, 2, 8)
 
