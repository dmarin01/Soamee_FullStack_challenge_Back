const getByIdBook = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM soamee_bbdd.book WHERE id = ?', [id], (err, row) => {
            if (err) reject(err);
            resolve(row[0]);
        })
    })
}



module.exports = { getByIdBook }