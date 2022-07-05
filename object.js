var carro = new Object();

carro.modelo='Uno';
carro.ano= 1999;
carro.transmissao= 'CVT';

//Exibe o objeto com todos os atributos e valores,
//Ex:{ modelo: 'Uno', ano: 1999, transmissao: 'CVT' }
console.log(carro)

//Lista todos os nomes dos atributos do objeto
console.log(Object.keys(carro));

//Lista todos os valores dos atributos do objeto
console.log(Object.values(carro));

