
const getByIdAuthor = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM soamee_bbdd.author WHERE id = ?', [id], (err, row) => {
            if (err) reject(err);
            resolve(row[0]);
        })
    })
}


const createAuthor = ({ first_name, last_name }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO author (first_name, last_name) VALUES (?,?);', [first_name, last_name], (err, row) => {
            if (err) reject(err);
            resolve(row)
        })
    })
}



module.exports = { getByIdAuthor, createAuthor }