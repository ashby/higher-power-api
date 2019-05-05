const { prisma } = require( '../../../generated/prisma-client' );

const getDeepPaths = async userId => {
    const paths = await prisma.paths( { userId } );
    const deepPaths = paths.map( async path => {
        const feelings = await getDeepFeelings( path.feelings );
        return {
            ...path,
            feelings
        };
    } );
    return Promise.all( deepPaths );
};

const getDeepCharacters = async userId => {
    const characters = await prisma.characters( { userId } );
    const deepCharacters = characters.map( async character => {
        const process = await getDeepProcesses( character.process );
        return {
            ...character,
            process
        };
    } );
    return Promise.all( deepCharacters );
}

const getDeepProcesses = async ( type ) => {
    const process = await prisma.process( { type } );
    const sources = process ? await getDeepSources( process.sources ) : [];
    return {
        ...process,
        sources
    };
};

const getDeepSources = async ( sources ) => {
    const deepSources = sources.map( async type => {
        const source = await prisma.source( { type } );
        const feelings = source ? await getDeepFeelings( source.feelings ) : [];
        return {
            ...source,
            feelings
        };
    } );
    return Promise.all( deepSources );
};

const getDeepFeelings = async ( feelings ) => {
    feelings = feelings.map( async type => { 
        const feeling = await prisma.feeling( { type } );
        const thoughts = feeling ? await getDeepThoughts( feeling.thoughts ): [];
        if ( feeling ) {
            return {
                ...feeling,
                thoughts 
            };
        }
    } );
    return Promise.all( feelings );
};

const getDeepThoughts = async ( thoughts, userId ) => {
    thoughts = thoughts.map( async id => await prisma.thought( { id } ) );
    return Promise.all( thoughts );
};

module.exports = {
    getDeepPaths,
    getDeepFeelings,
    getDeepCharacters,
    getDeepProcesses,
    getDeepSources,
    getDeepThoughts
};