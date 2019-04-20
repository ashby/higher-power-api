const { prisma } = require( '../../../generated/prisma-client' );
const {
    handleFeeling,
    handlePath,
    handleSource
} = require( '../utils/handle' );

const query = () => ( {
    thoughts: () => prisma.thoughts(),
    thought: ( _, { id } ) => prisma.thought( { id } )
} );

const mutateThought = async ( data ) => {
    if ( !data.id ) {
        data = await prisma.createThought( data );
        await handleThought( data );
        return data;
    }
    data = await prisma.updateThought( {
        data,
        where: { id: data.id }
    } );
    await handleThought( data );
    return data;
};

const handleThought = async ( data ) => {
    const path = await handlePath( data );
    const source = await handleSource( data );
    const sourceFeeling = await handleFeeling( 'source', data );
    const pathFeeling = await handleFeeling( 'path', data );
    return Promise.all( [ path, source, sourceFeeling, pathFeeling ] );
}

const mutate = () => ( { 
    mutateThought: async ( parent, { data } ) => await mutateThought( data )
} );

const registerThought = register => register( query(), mutate() );

module.exports = registerThought; 