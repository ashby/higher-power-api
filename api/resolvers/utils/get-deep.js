const { prisma } = require( '../../../generated/prisma-client' );

const getDeepPaths = async () => {
    const paths = await prisma.paths();
    const deepPaths = paths.map( async path => {
        const feelings = await getDeepFeelings( path.feelings );
        return {
            ...path,
            feelings
        };
    } );
    return Promise.all( deepPaths );
};

const getDeepCharacters = async () => {
    const characters = await prisma.characters();
    const deepCharacters = characters.map( async character => {
        const process = await getDeepProcesses( character.process );
        return {
            ...character,
            process
        };
    } );
    return Promise.all( deepCharacters );
}

const getDeepProcesses = async id => {
    const process = await prisma.process( { id } );
    const sources = process ? await getDeepSources( process.sources ) : [];
    return {
        ...process,
        sources
    };
};

const getDeepSources = async sources => {
    const deepSources = sources.map( async id => {
        const source = await prisma.source( { id } );
        const feelings = source ? await getDeepFeelings( source.feelings ) : [];
        return {
            ...source,
            feelings
        };
    } );
    return Promise.all( deepSources );
};

const getDeepFeelings = async feelings => {
    feelings = feelings.map( async id => { 
        const feeling = await prisma.feeling( { id } );
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

const getDeepThoughts = async thoughts => {
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