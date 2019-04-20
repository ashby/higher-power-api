const { prisma } = require( '../../../../generated/prisma-client' );
const { upperCase } = require( '../../utils' );

const mutateSource = async ( source, data ) => {
    const sourceName = upperCase( source );
    const subpath = await prisma[ data.subpath.name ]( data.subpath.id );
    if ( !data.id ) {
        sourceData = {
            id: source,
            subpaths: [ subpath ]
        }
        return await prisma[ `create${sourceName}` ]( brain );
    }
    return prisma[ `update${sourceName}` ]( {
        data: data.subpaths.push( subpath ),
        where: { id }
    } );
};

module.exports = {
    mutateSource
}