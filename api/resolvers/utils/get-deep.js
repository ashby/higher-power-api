const { prisma } = require( '../../../generated/prisma-client' );

const getDeepPaths = async userId => {
    const paths = await prisma.paths( { userId } );
    const deepPaths = paths.map( async path => {
        const feelings = await getDeepFeelings( path.feelings, userId );
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
        const process = await getDeepProcesses( character.process, userId );
        return {
            ...character,
            process
        };
    } );
    return Promise.all( deepCharacters );
}

const getDeepProcesses = async ( type, userId ) => {
    const process = await prisma.process( { type, userId } );
    const sources = process ? await getDeepSources( process.sources, userId ) : [];
    return {
        ...process,
        sources
    };
};

const getDeepSources = async ( sources, userId ) => {
    const deepSources = sources.map( async type => {
        const source = await prisma.source( { type, userId } );
        const feelings = source ? await getDeepFeelings( source.feelings, userId ) : [];
        return {
            ...source,
            feelings
        };
    } );
    return Promise.all( deepSources );
};

const getDeepFeelings = async ( feelings, userId ) => {
    feelings = feelings.map( async type => { 
        const feeling = await prisma.feeling( { type, userId } );
        const thoughts = feeling ? await getDeepThoughts( feeling.thoughts, userId ): [];
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
    thoughts = thoughts.map( async id => await prisma.thought( { id, userId } ) );
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