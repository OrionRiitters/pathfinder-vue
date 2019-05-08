module.exports = (sequelize, Datatypes) => {

    var Trail = sequelize.define('Trail', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: Datatypes.STRING
        },
        location: {
            type: Datatypes.STRING
        },
        summary: {
            type: Datatypes.STRING
        },
        difficulty: {
            type: Datatypes.STRING
        },
        stars: {
            type: Datatypes.DOUBLE
        },
        latitude: {
            type: Datatypes.DOUBLE
        },
        longitude: {
            type: Datatypes.DOUBLE
        },
        length: {
            type: Datatypes.DOUBLE
        },
        hasHiked: {
            type: Datatypes.BOOLEAN
        }
    });

    Trail.sync({force: true}).then( () => {
        console.log('synced trail table');
    });

    return Trail;
}; 
