const { getProcesses } = require( './process' );
const { upperCase } = require( './' );
const { CHARACTERS } = require( './constants' );

const getCharacters = async () => {
    const characterPromises = CHARACTERS.map( async ( character ) => {
        const name = upperCase( character.singular );
        const feelings = await getProcesses[ `get${name}` ]();
        return feelings;
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
