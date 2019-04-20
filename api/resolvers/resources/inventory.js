const { getPaths } = require( '../utils/path' );
const { getHas } = require( '../utils/has' );
const { upperCase } = require( '../utils' );
const { PATHS } = require( '../utils/constants' );

module.exports = ( register ) => register( {
    inventory: async ( _, data ) => {
        const has = await getHas();
        const paths = {};
        const pathPromises = PATHS.map( async ( path ) => {
            if ( has[ path ] ) {
                const name = upperCase( path );
                paths[ path ] = await getPaths[ `get${name}` ]( has );
            }
        } );
        await Promise.all( pathPromises );
        return {
            has,
            ...paths
        }
    }
} );