const { prisma } = require( '../../../../generated/prisma-client' );
const mutateOnThought = require( './mutate/on-thought' );
const getUserId = require( '../../utils/get-user-id' );
const { AUTH_ERROR } = require( '../../constants/errors' );

const query = () => ( {
    thoughts: () => prisma.thoughts(),
    thought: ( _, { id } ) => prisma.thought( { id } )
} );

const mutateThought = async ( data, ctx ) => {
    const userId = getUserId( ctx );
    if ( userId === data.userId ) {
        if ( !data.id ) {
            data = await prisma.createThought( data );
            await mutateOnThought( data );
            return data;
        }
        data = await prisma.updateThought( {
            data,
            where: { id: data.id }
        } );
        await mutateOnThought( data );
        return data;
    } else {
        throw new Error( AUTH_ERROR );
    }
};

const mutate = () => ( { 
    mutateThought: async ( parent, { data }, ctx ) => await mutateThought( data, ctx )
} );

const registerThought = register => register( query(), mutate() );

module.exports = registerThought; 