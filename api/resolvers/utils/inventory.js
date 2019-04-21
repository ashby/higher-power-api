const getPaths = require( '../utils/path' );
const { upperCase } = require( './' );
const { PATHS } = require( '../constants/paths' );

const getInventory = async () => {
    const pathPromises = PATHS.map( async ( path ) => {
        const name = upperCase( path.singular );
        const feelings = await getPaths[ `get${name}` ]();
        return feelings;
    } );
    const paths = await Promise.all( pathPromises );
    const shelf = [];
    paths.map( path => path )
        .filter( feelings => !!feelings )
        .map( feelings => Object.keys( feelings )
        .map( feeling => !!feeling && shelf.push( feelings[ feeling ] ) ) );
    const inventory = [];
    shelf.map( feelings => feelings.map( feeling => 
        !inventory.find( f => f.id === feeling.id ) && inventory.push( feeling ) ) );
    return inventory;
};

module.exports = {
    getInventory
};
