module.exports = (sequelize, Datatypes) => {

    var Trail = sequelize.define('Trail', {
        trail_id: {
            type: Datatypes.Integer,
            primaryKey: true
        },
        name: {
            type: Datatypes.String
        },
        location: {
            type: Datatypes.String
        },
        summary: {
            type: Datatypes.String
        },
        difficulty: {
            type: Datatypes.String
        },
        stars: {
            type: Datatypes.Double
        },
        latitude: {
            type: Datatypes.Double
        },
        longitude: {
            type: Datatypes.Double
        },
        length: {
            type: Datatypes.Double
        },
        hasHiked: {
            type: Datatypes.Boolean
        }
    });

    Trail.sync({force: false}).then( () => {
        console.log('synced trail table');
    });

    return Trail;
}; 
