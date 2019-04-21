const { prisma } = require( '../../../generated/prisma-client' );

const getSources = async ( sources = {} ) => {
    const sourcePromises = Object.keys( sources ).map( async source => {
        console.log( source );
    } );
    const values = {};
    const sourcesPromises = sources.map( async source => {
        const value = await prisma[ source ]();
        values[ source ] = value;
    } );
    await Promise.all( sourcesPromises );
    return values;
};

module.exports = {
    getSources
};