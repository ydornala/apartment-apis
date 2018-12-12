/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
        useMongoClient: true,
        uri: process.env.MONGODB_URI || 'mongodb://admin:admin123@ds053958.mlab.com:53958/apartment'
    },

    // Seed database on startup
    seedDB: true,
};
