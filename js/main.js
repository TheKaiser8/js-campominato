"use strict";

// Consegna
// 1. Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
//    Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe 
//    non potranno esserci due numeri uguali.
// 2. In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo 
//    calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si 
//    colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// 3. La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile 
//    di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// 4. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha 
//    cliccato su una cella che non era una bomba.

// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

/*------------------
    FUNCTIONS
--------------------*/
/*------------------
    MAIN
--------------------*/
// seleziono il container in cui si trovano i numeri
const boardContainer = document.querySelector('.board');
boardContainer.innerHTML = '';
let cellsNumber = 100;
const bombsNumber = 16;

createBoardGame( boardContainer, cellsNumber )
// Creo funzione per creare griglia di gioco
function createBoardGame( boardElement, cells ) {
    // creo un ciclo FOR che mi permetta di generare 100 celle numerate da 1 a 100
    for (let i = 1; i <= cells; i++) {
        const boardCell = document.createElement('div');
        boardCell.innerHTML = i;
        boardCell.classList.add('board__number');
        // aggiungo evento click che colora di azzurro ogni cella del numero cliccato
        boardCell.addEventListener('click', function() {
            console.log(this.innerHTML);
            this.classList.add('board__number--clicked')
        });
        boardElement.append(boardCell);
    }
}
