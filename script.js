//VETORES_OBJETOS_MANIPULANDO OBJETOS
alert("Tudo certo por aqui cabeção!")
let array = ['string', 1, true, ['array1'],
    ['array2'],
    ['array3']
];
//array é um tipo de lista, ou matriz de variáveis

//forEach, trará o indice a frente dos itens colocados na array
array.forEach(function(item, index) { console.log(item, index) });

//array push tras um dado novo para dentro doarray
array.push('novo item');

//array.pop remove ultimo item colocado, ou seja, apagou 'novo item' adicionado por array.push
array.pop()

//array shift remove um item no inicio da lista, no caso removeu o item 'string'
array.shift();

//array unshift adicona um item no inicio da lista
array.unshift('adicionando um item no inicio');

//idexOf; console.log(indexOf(valor que queremos o indice)) mostra o indice de algum dos valores da lista

//splice remove ou substitui um item pelo indice, no caso aqui foi removido o array3
array.splice(5);

//slice retorna uma parte e um array
//let novoArray = array.slice(0, 3);

console.log(array);

let object = { string: 'string object', number: 1, boolean: true, array: ["array"], objectInterno: { objectInterno: 'objeto interno' } };
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

//outra forma de desistruturar é
//var { string, number,  boolean, objectInterno} = object;
//console.log(string, number, boolean, objectInterno);


console.log(object);