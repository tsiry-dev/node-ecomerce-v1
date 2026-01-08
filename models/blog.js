import db from '../utils/database.js';

export default class Blog{
   findAll() {
      return db.execute('SELECT * FROM blogs');
   }
}