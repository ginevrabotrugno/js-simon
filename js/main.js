// Visualizzare in pagina 5 numeri casuali.
// seleziono il contenitore
const container = document.querySelector(".container");

// genero 5 numeri casuali da 1 a 100
const numbers = generateRandomNumbersArray(1,100,5);
console.log(numbers);

// stampo i 5 numeri in pagina
container.append(numbers);


// Da lì parte un timer di 30 secondi.
setTimeout(function(){
    // Dopo 30 secondi i numeri scompaiono
    container.classList.add("hidden");
}, 3000);

setTimeout(function () {
    // // e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

    const inputArr = [];

    for (let i = 0; i < 5; i++) {
        
        const inputNum = parseInt(prompt("inserisci qui il numero"));
        inputArr.push(inputNum);
        
    }

    console.log(inputArr);

}, 4000)


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

