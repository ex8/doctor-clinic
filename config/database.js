// PostgreSQL database driver
// http://vitaly-t.github.io/pg-promise/index.html
const opts = {
    connect(client, dc, useCount) {
        const cp = client.connectionParameters;
        console.log(`Connection successful on DB: ${cp.database}`);
    }
};
const pgp = require('pg-promise')(opts);
const db = pgp('postgres://postgres@localhost:5432/csc675');

module.exports = db;