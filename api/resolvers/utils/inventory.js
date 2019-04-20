const { getPaths } = require( '../utils/path' );
const { upperCase } = require( './utils' );
const { PATHS } = require( './constants' );
const { getHas } = require( 'has' );

const getInventory = async ( has ) => {
    if ( !has ) {
        has = await getHas();
    }
    const feelings = [];
    const pathPromises = PATHS.map( async ( path ) => {
        if ( has[ path ] ) {
            const name = upperCase( path );
            return await getPaths[ `get${name}` ]( has );
        }
    } );
    const paths = await Promise.all( pathPromises );
    await Object.keys( paths ).map( async ( key, value ) => 
        feelings.push( value ) );
    return feelings;
};

module.exports = {
    getInventory
}
