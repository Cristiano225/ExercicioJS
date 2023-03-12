let number1 = prompt("Digite o primeiro número");
let number2 = prompt("Digite o segundo número");

number1 = Number(number1);
number2 = Number(number2);

let sum = number1 + number2;
let sub = number1 - number2;
let multi = number1 * number2;
let div = number1 / number2;
let restDiv = number1 % number2;

alert('A soma dos dois números é ' + sum);
alert('A subtração dos dois números é ' + sub);
alert('A multiplicação dos dois números é ' + multi);
alert('A divisão dos dois números é ' + div);
alert('O resto da divisão dos dois números é ' + restDiv);

if (sum % 2 === 0) {
  alert('O resultado da soma é par e é: ' + sum);
} else {
  alert('O resultado da soma é impar e é: ' + sum);
}

if (number1 == number2) {
  alert('Os números são iguais!');
} else {
  alert('Os números digitados são diferentes!');
}
