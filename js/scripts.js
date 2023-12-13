/*Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.*/



const startGame = alert('Clicca OK qui per avviare il tuo gioco!')


const containerGrid = document.querySelector ('.container-grid')


for(let i = 1; i <= 100; i++){
    const cell = document.createElement ('div');
    cell.classList.add('cell');
    cell.innerHTML = i;
    containerGrid.append(cell);

    cell.addEventListener('click', function(){
        cell.classList.toggle('click-active');
        console.log(this); 
        cell.classList.toggle ('active');
        console.log(cell.innerHTML); 
    })
    
}