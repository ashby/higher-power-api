const { prisma } = require( '../../../../../generated/prisma-client' );

const mutatePath = async data => {
    if ( data.path ) {
        const pathKey = `${data.path}-${data.userId}`;
        const feelingKey = `${data.path}-${data.feeling}-${data.userId}`;
        const hasPath = await prisma.path( { key: pathKey } );
        if ( !hasPath ) {
            const path = {
                key: pathKey,
                title: data.path,
                feelings: { set: [ feelingKey ] },
                userId: data.userId
            };
            await prisma.createPath( path );
        } else {
            let { updatedAt, id, createdAt, ...path } = hasPath;
            const hasFeelingKey = path.feelings.find( feeling => feeling === feelingKey );
            if ( !hasFeelingKey ) {
                path.feelings.push( feelingKey );
            };
            path = {
                ...path,
                feelings: { set: path.feelings }
            };
            return prisma.updatePath( {
                data: path,
                where: { id: hasPath.id }
            } );
        }
    } else {
        return data;
    }
};

module.exports = mutatePath;