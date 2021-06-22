require("dotenv").load();

module.exports = {
    development: {
        client: 'postgresql',
        connection: "postgres:///teams-and-athletes"
    },
    production: {
        client: 'postgresql',
        connection: `${process.env.DATABASE_URL}?ssl=true`
    }
};
