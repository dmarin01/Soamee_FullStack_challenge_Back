
const getAllAuthors = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM author', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}




module.exports = { getAllAuthors }