const { getPaths } = require( '../utils/path' );
const { upperCase } = require( './' );
const { PATHS } = require( './constants' );
const { getHas } = require( 'has' );

const getInventory = async ( has ) => {
    console.log( 'heeeeeeeere' );
    if ( !has ) {
        has = await getHas();
    }
    let shelf = [];
    let inventory = [];
    const pathPromises = PATHS.map( async ( path ) => {
        if ( has[ path ] ) {
            const name = upperCase( path );
            const feelings = await getPaths[ `get${name}` ]( has );
            return feelings;
        }
    } );
    const paths = await Promise.all( pathPromises );

    paths.map( path => path )
        .filter( feelings => !!feelings )
        .map( feelings => Object.keys( feelings )
        .map( feeling => !!feeling && shelf.push( feelings[ feeling ] ) ) );

    shelf.map( feelings => feelings.map( feeling => inventory.push( feeling ) ) );

    return inventory;
};

module.exports = {
    getInventory
}
