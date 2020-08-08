/*# Manejo de Variables
Realizar un algotimo que solicite 2 números `a` y `b`.
a. El número mayor ingresado ()
b. La `suma` del `a` con el `b`
c. la `resta` del `b` con el `a`
c. Si el `a` es par
d. Si el `b` es impar
e. La potencia de `b` elevado a la `a`
f. La raíz `b` de `a`
`Nota:` Ambos números solicitados deben ser `enteros`, `positivos`*/

const formulario = document.querySelector(".form");

function sum(a, b) {
    return `El resultado de la suma de ${a} + ${b} es ${a+b}`
}

function rest(a, b){
    return`El resultado de la resta de ${b} - ${a} es ${b-a}`
}

function even(a){
    if( a % 2 === 0) {
        return `${a} es un número par.`
    }else {
        return `${a} no es un número par `
    }
}

function odd(b) {
    if(b % 2 !== 0){
        return `${b} es un número impar`
        
    }else {
        return `${b} no es un número impar`
    }
}

function pow(b, a) {
    const pow = Math.pow(b, a);
    return `El resultado de b elevando a la potencia de a es ${pow}`;
}

function root(a, b){
    const root = a ** (1/b);
    return `El resultado de la raiz ${b} de ${a} es ${root}`
}

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(formulario);
    const a = parseInt(data.get('a'));   
    const b = parseInt(data.get('b'));

    const results = document.querySelector('.results');

    results.innerHTML = `
        <h3>Los resultados son:</h3>
        <ul> 
            <li><p>${sum(a, b)}</p>  </li>
            <li><p>${rest(b, a)}</p> </li> 
            <li><p>${even(a)}</p> </li> 
            <li><p>${odd(b)}</p>  </li>
            <li><p>${pow(b, a)}</p> </li> 
            <li><p>${root(a, b)}</p>  </li>
        </ul>`
})




 
