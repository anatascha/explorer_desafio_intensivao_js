// 1. Exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World!')

// 2. Declare duas variáveis e exiba o resultado da soma entre elas.
const FirstNumber = 6
const SecondNumber = 30

const sum = FirstNumber + SecondNumber

alert(sum)

//3. Declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso não, exiba a mensagem "Não é um número".
const isNumber = 10

if (typeof isNumber == 'number') {
  alert('É um número')
} else {
  alert('Não é um número')
}

//4. Declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso não, exiba a mensagem "Não é uma string".
const isString = 'Isso é uma string'

if (typeof isString == 'string') {
  alert('É uma string')
} else {
  alert('Não é uma string')
}

// 5. Declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso não, exiba a mensagem "Não é um booleano".
const isBoolean = true

if (typeof isBoolean == 'boolean') {
  alert('É um booleano')
} else {
  alert('Não é um booleano')
}

// 6. Declare duas variáveis e exiba o resultado da subtração entre elas. - Variáveis declarada no exercício 1
const sub = FirstNumber - SecondNumber

alert(sub)

// 7. Declare duas variáveis e exiba o resultado da multiplicação entre elas.
const mult = FirstNumber * SecondNumber

alert(mult)

// 8. Declare duas variáveis e exiba o resultado da divisão entre elas.
const div = FirstNumber / SecondNumber

alert(div)

// 9. Declare uma variável e verifique se o seu valor é um número par. 
//Se for, exiba a mensagem "É um número par", caso não, exiba a mensagem "Não é um número par".
const isEvenNumber = 6

if (isEvenNumber % 2 == 0) {
  alert('É um número par')
} else {
  alert('Não é um número par')
}

// 10. Declare uma variável e verifique se o seu valor é um número ímpar. 
//Se for, exiba a mensagem "É um número ímpar", caso não, exiba a mensagem "Não é um número ímpar".
const isOddNumber = 5

if (isOddNumber % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}