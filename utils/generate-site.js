const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // error
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'index created'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // error
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'style copied'
            });
        });
    });
};

module.exports = { writeFile, copyFile };