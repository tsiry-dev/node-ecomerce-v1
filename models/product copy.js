import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import db from '../utils/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, '..', 'data', 'products.json');

const getproductFromFile = (cb) => {
    fs.readFile(dataPath, 'utf8', (err, fileContent) => {
        if (err || fileContent.trim().length === 0) {
            return cb([]);
        }

        try {
            cb(JSON.parse(fileContent));
        } catch (error) {
            console.error('Invalid JSON in products.json');
            cb([]);
        }
    });
}

export default class Product {
    // constructor(title, description, price, imageUrl) {
    //     this.title = title,
    //     this.description = description,
    //     this.price = price
    //     this.imageUrl = imageUrl
    // }

    save(title, description, price, imageUrl) {
       return db.execute(`INSERT INTO products(title, description, price, imageUrl)
                  VALUES(?,?,?,?)`, [
                     title,
                     description,
                     price,
                     imageUrl
                  ]);
        
    }

    static fetchAll() {
        return db.execute("SELECT * FROM products");
    }
}