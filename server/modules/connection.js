// process.env for Heroku DB authentication
if (process.env.DATABASE_URL != undefined) {
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/B1-66-ER';
}

module.exports = connectionString;
