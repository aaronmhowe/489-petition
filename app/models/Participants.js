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
                State VARCHAR(255) NOT NULL
            )
        `);
    }
});

const Participants = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM Participants', [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    },
    add: (Participant) => {
        return new Promise((resolve, reject) => {
            const { Name, Email, City, State } = Participant;
            db.run(
                'INSERT INTO Participants (Name, Email, City, State) VALUES (?, ?, ?, ?)',
                [Name, Email, City, State],
                function(err) {
                    if (err) {
                        reject(err);
                    } else {
                        db.get('SELECT * FROM Participants WHERE id = ?', [this.lastID], (err, row) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(row);
                            }
                        });
                    }
                }
            );
        });
    }
};

module.exports = Participants;