const getPaths = require( '../utils/path' );
const { getHas } = require( '../utils/has' );
const { upperCase } = require( '../utils' );
const { prisma } = require( '../../../generated/prisma-client' );
const { PATHS } = require( '../utils/constants' );

module.exports = ( register ) => register( {
    inventory: async ( _, data ) => {
        has = await prisma.has( { id: 'has' }  );
        if ( !has ) {
            has = await prisma.createHas( { id: 'has' } );
        };
        const paths = {};
        const pathPromises = PATHS.map( async ( path ) => {
            if ( has[ path.singular ] ) {
                const name = upperCase( path.singuler );
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