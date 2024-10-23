// Exercício 1: Esperando um valor com atraso

// Crie uma função que retorne uma Promise que resolve após 2 segundos.
// Use await para esperar a resolução dessa Promise antes de exibir uma mensagem no console.

function bancoD(msg) {
  return new Promise((resolve, reject) => {
    if (typeof msg != "string") reject("Erro Papai");
    setTimeout(() => {
      resolve(msg);
      console.log(msg);
    }, 2000);
  });
}

async function teste() {
  const teste1 = await bancoD("test1");
  const teste2 = await bancoD("test2");
  const teste3 = await bancoD("test3");
}
teste()

// Exercício 2: Função assíncrona com erro
// Crie uma função que retorne uma Promise.
// Caso o valor passado para a função seja maior que 10, a Promise deve resolver. Caso contrário, deve ser rejeitada com um erro.
// Use try/catch para capturar e tratar o erro.

function numeross(numero) {
  return new Promise((resolve, reject) => {
    if (numero < 10) reject(`Erro Você escolheu um Número Menor do que 10 que foi : ${numero}`,);
    else resolve(numero);
    console.log(`Você escolheu o número : ${numero}`);
  });
}
async function testn() {
  try {
    const numeros1 = await numeross(12);
    const numeros2 = await numeross(10);
    const numeros3 = await numeross(5);
  } catch (e) {
    console.log(e);
  }
}
testn();
