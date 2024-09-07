import { crearCartaHtml, pedirCarta,valorCarta } from "./";


// turno de la computadora

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar;
 * @param {HTMLElement} elemento HTML para mostrar lo puntos
 * @param {Array<String>} deck 
 */




 export const turnoComputadora = ( puntosMinimos ,puntosHTML,divCartasComputadora, deck=[]) => {
    if(!puntosMinimos ) throw new Error('Puntos minimo es necesario');
    if(!puntosHTML ) throw new Error('PuntosHtml  es necesario');

    let puntosComputadora = 0;



    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
       const imgCarta = crearCartaHtml(carta);
       divCartasComputadora.append(imgCarta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}




