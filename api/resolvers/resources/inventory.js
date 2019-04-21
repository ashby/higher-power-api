const getPaths = require( '../utils/path' );
const { upperCase } = require( '../utils' );
const { PATHS } = require( '../constants/paths' );

module.exports = ( register ) => register( {
    inventory: async ( _, data ) => {
        const paths = {};
        const pathPromises = PATHS.map( async ( path ) => {
            const name = upperCase( path.singular );
            paths[ path.singular ] = await getPaths[ `get${name}` ]();
        } );
        await Promise.all( pathPromises );
        return {
            ...paths
        }
    }
} );