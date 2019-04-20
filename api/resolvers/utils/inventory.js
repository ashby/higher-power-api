const getPaths = require( '../utils/path' );
const { upperCase } = require( './' );
const { PATHS } = require( './constants' );
const { getHas } = require( './has' );

const getInventory = async ( has ) => {
    const pathPromises = PATHS.map( async ( path ) => {
        if ( has[ path.singular ] ) {
            const name = upperCase( path.singular );
            const feelings = await getPaths[ `get${name}` ]( has );
            return feelings;
        }
    } );
    const paths = await Promise.all( pathPromises );
    const shelf = [];
    paths.map( path => path )
        .filter( feelings => !!feelings )
        .map( feelings => Object.keys( feelings )
        .map( feeling => !!feeling && shelf.push( feelings[ feeling ] ) ) );
    const inventory = [];
    shelf.map( feelings => feelings.map( feeling => inventory.push( feeling ) ) );
    return inventory;
};

module.exports = {
    getInventory
};
