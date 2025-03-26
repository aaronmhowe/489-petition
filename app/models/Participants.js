const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3.Database(path.join(__dirname, '../database/petition.db'), (err) => {
    if (err) {
        console.error('Database Connection Failed: ', err.message);
    } else {
        console.log('Database Connection Success.');
        db.run(`
            CREATE TABLE IF NOT EXISTS Participants (
            ID INTEGER PRIMARY KEY,
            Name VARCHAR(255) NOT NULL,
            Email VARCHAR(255) NOT NULL UNIQUE,
            City VARCHAR(255) NOT NULL,
            State VARCHAR(255) NOT NULL,
            )
        `);
    }
});

const Participant = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM Participants', [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(err);
                }
            });
        });
    }
}