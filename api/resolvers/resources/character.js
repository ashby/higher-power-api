const { prisma } = require( '../../../generated/prisma-client' );

const query = () => ( {
    characters: ( _, { userId } ) => prisma.characters( { where: { userId } } ),
    character: ( _, { key } ) => prisma.character( { key } )
} );

const mutateCharacter = async ( data ) => {
    const characterId = data.title.toLowerCase();
    if ( !data.id ) {
        data.id = characterId

        const processId = process;
        const process = await prisma.process( { id: data.process } );
        if ( !process ) {
            await prisma.createProcess( { id: data.process, title: data.process } );
        }

        const sourceIds = [];
        const sourcePromises = data.sources.set.map( async source => {
            const sourceId = source;
            const hasSource = await prisma.source( { id: sourceId } );
            if ( !hasSource ) {
                sourceIds.push( sourceId );
                return await prisma.createSource( { id: sourceId, title: source } );
            } else {
                return Promise.resolve( hasSource );
            }
        } );
        await Promise.all( sourcePromises );

        const feelingIds = [];
        const feelingsPromises = data.feelings.set.map( async feeling => {
            const feelingId = feeling; 
            const hasFeeling = await prisma.feeling( { id: feelingId } );
            if ( !hasFeeling ) {
                feelingIds.push( feelingId );
                return await prisma.createFeeling( { id: feelingId, title: feeling } );
            } else {
                return Promise.resolve( hasFeeling );
            }
        } );
        await Promise.all( feelingsPromises );

        const character = {
            ...data,
            process: processId,
            sources: { set: sourceIds },
            feelings: { set: feelingIds }
        };

        return await prisma.createCharacter( character );
    }
    const { id, ...character } = data;
    return prisma.updateCharacter( {
        data: character,
        where: { id: data.id }
    } );
};

const mutate = () => ( { 
    mutateCharacter: async ( parent, { data } ) => await mutateCharacter( data )
} );

const registerCharacter = register => register( query(), mutate() );

module.exports = registerCharacter;