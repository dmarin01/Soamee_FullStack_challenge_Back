const getByIdBook = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM soamee_bbdd.book WHERE id = ?', [id], (err, row) => {
            if (err) reject(err);
            resolve(row[0]);
        })
    });
};

const createBook = ({ name, isbn, fk_author }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO book (name, isbn, fk_author) VALUES (?,?,?);', [name, isbn, fk_author], (err, row) => {
            if (err) reject(err);
            resolve(row)
        })
    });
};

const updateBook = (id, { name, isbn, fk_author }) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE book SET name = ?, isbn = ?, fk_author = ? WHERE id = ?;', [name, isbn, fk_author, id], (err, row) => {
            if (err) reject(err);
            resolve(row)
        })
    });
};



module.exports = { getByIdBook, createBook, updateBook }