const { prisma } = require( '../../../generated/prisma-client' );
const config = require( '../../config' );
const { HAS } = require( './constants' );

const handleHas =  async ( key, path ) => {
    if ( config.ENABLE_HAS ) {
        let has;
        has = prisma.has();
        const shouldUpdateHas = !!has && has.id && ( !has[ key ] || !has[ path ] );
        if ( shouldUpdateHas ) {
            has[ key ] = true;
            if ( path ) {  has[ path ] = true; }
            const { id, ...data } = has;
            await prisma.updateHas( {
                data,
                where: { id: has.id }
            } );
        } else if ( !has ) {
            HAS.id = 'has';
            HAS[ key ] = true;
            if ( path ) {  HAS[ path ] = true; }
            await prisma.createHas( HAS );
        }
    }
};

const getHas = async () => {
    let has;
    has = await prisma.has( { id: 'has' } );
    if ( !has ) {
        has = await prisma.createHas( { id: 'has' } );
    };
    return has;
}

module.exports = {
    HAS,
    handleHas,
    getHas
};