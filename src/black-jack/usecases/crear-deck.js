// Importa todo el módulo underscore
import _ from 'underscore';

/**
 * Esta Funcion crea un nuevo deck (mazo)
 * @param {Array<String>} tiposDeCartas Ejemplo :  ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo:['A','J','Q','K']
 * @returns {Array<String>}
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if (!tiposDeCartas || tiposDeCartas.length === 0) {
        throw new Error('TiposDeCartas es obligatorio como un arreglo de String ');
    }
    if (!tiposEspeciales || tiposEspeciales.length === 0) {
        throw new Error('TiposEspeciales es obligatorio como un arreglo de String ');
    }

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCartas) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCartas) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }

    // Usa la función shuffle de underscore para mezclar el deck
    deck = _.shuffle(deck);

    return deck;
}
