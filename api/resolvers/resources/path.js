const { prisma } = require( '../../../generated/prisma-client' );

const query = () => ( {
    paths: () => prisma.paths(),
    path: ( _, { id } ) => prisma.path( { id } )
} );

const mutatePath = async ( data ) => {
    if ( !data.id ) {
        data = await prisma.createPath( data );
        return data;
    }
    const { id, ...path } = data;
    return prisma.updatePath( {
        data: path,
        where: { id: data.id }
    } );
};

const mutate = () => ( { 
    mutatePath: async ( parent, { data } ) => await mutatePath( data )
} );

const registerPath = register => register( query(), mutate() );

module.exports = registerPath;