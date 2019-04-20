const { prisma } = require( '../../../generated/prisma-client' );

const handleFeeling = async ( type, data ) => {
    let feelingId;
    switch ( type ) {
        case 'path':
            feelingId = `${data.path}-${data.feeling}`;
            break;
        case 'source':
            feelingId = `${data.source}-${data.feeling}`;
            break;
    }
    const hasFeeling = await prisma.feeling( { id: feelingId } );
    if ( !hasFeeling ) {
        const feeling = {
            id: feelingId,
            title: data.feeling,
            thoughts: { set: [ data.id ] }
        };
        await prisma.createFeeling( feeling );

    } else {
        let { updatedAt, id, createdAt, ...feeling } = hasFeeling;
        feeling = {
            ...feeling,
            thoughts: {
                set: [ ...feeling.thoughts, data.id ]
            }
        };
        return prisma.updateFeeling( {
            data: feeling,
            where: { id: feelingId }
        } );
    }
};

const handlePath = async data => {
    if ( data.path ) {
        const pathId = data.path;
        const feelingId = `${pathId}-${data.feeling}`;
        const hasPath = await prisma.path( { id: pathId } );
        if ( !hasPath ) {
            const path = {
                id: pathId,
                title: data.path,
                feelings: { set: [ feelingId ] }
            };
            await prisma.createPath( path );
        } else {
            let { updatedAt, id, createdAt, ...path } = hasPath;
            const hasFeelingId = path.feelings.find( feeling => feeling === feelingId );
            if ( !hasFeelingId ) {
                path.feelings.push( feelingId );
            };
            path = {
                ...path,
                feelings: { set: path.feelings }
            };
            return prisma.updatePath( {
                data: path,
                where: { id: pathId }
            } );
        }
    } else {
        return data;
    }
};

const handleSource = async data => {
    if ( data.source ) {
        const sourceId = data.source;
        const feelingId = `${sourceId}-${data.feeling}`; 
        const hasSource = await prisma.source( { id: sourceId } );
        if ( !hasSource ) {
            const source = {
                id: sourceId,
                title: data.source,
                feelings: { set: [ feelingId ] }
            };
            await prisma.createSource( source );
        } else {
            let { updatedAt, id, createdAt, ...source } = hasSource;
            const hasFeelingId = source.feelings.find( feeling => feeling === feelingId );
            if ( !hasFeelingId ) {
                source.feelings.push( feelingId );
            }
            source = {
                ...source,
                feelings: { set: source.feelings }
            };
            return prisma.updateSource( {
                data: source,
                where: { id: sourceId }
            } );
        }
    } else {
        return data;
    }
};

const handleProcess = async data => {
    if ( data.process ) {
        const processId = data.process.toLowerCase();
        const sourceId = data.source.toLowerCase();
        const hasProcess = await prisma.process( { id: processId } );
        if ( !hasProcess ) {
            const process = {
                id: processId,
                title: data.process,
                sources: { set: [ sourceId ] }
            };
            await prisma.createProcess( process );
        } 
    } else {
        return data;
    }
};

module.exports = {
    handleFeeling,
    handlePath,
    handleSource,
    handleProcess,
};