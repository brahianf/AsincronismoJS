const  doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => (
                resolve('Do SomeThing Async')
                ), 3000)
            : reject(new Error('Text Error'))
    });
}

const doSomething = async () => {
    // Esperar a que promesa suceda
    const something = await  doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After')

// Funcion asincrona y se espera que resuelva la promesa
// > node src/async/index.js

// Before
// After
// Do SomeThing Async


const anotherFunction = async () => {
    try {
        const something = await  doSomethingAsync();
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1')
