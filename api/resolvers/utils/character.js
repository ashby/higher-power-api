const { getProcesses } = require( './process' );
const { upperCase } = require( './' );
const { CHARACTERS } = require( './constants' );
const { getHas } = require( 'has' );

const getCharacters = async ( has ) => {
    if ( !has ) {
        has = await getHas();
    }
    const characterPromises = CHARACTERS.map( async ( character ) => {
        if ( has[ character.singular ] ) {
            const name = upperCase( character.singular );
            const feelings = await getProcesses[ `get${name}` ]( has );
            return feelings;
        }
    } );
    const characters = await Promise.all( characterPromises );
    // const shelf = [];
    // paths.map( path => path )
    //     .filter( feelings => !!feelings )
    //     .map( feelings => Object.keys( feelings )
    //     .map( feeling => !!feeling && shelf.push( feelings[ feeling ] ) ) );
    // const inventory = [];
    // shelf.map( feelings => feelings.map( feeling => inventory.push( feeling ) ) );
    // return inventory;
};

module.exports = {
    getCharacters
};
