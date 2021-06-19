const getAllBooks = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM book', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}




module.exports = { getAllBooks }