import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import expressLayouts from 'express-ejs-layouts';


const app = express();
// const bodyParser = require('body-parser');
const PORT = 3000;

// const adminData = require('./routes/admin');
// import db from './utils/database.js';
import sequelize from './utils/database.js';

import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
// import blogRoutes from './routes/blog.js';
import * as errorController from './controllers/error.controller.js';

import Product from "./models/product.js";
import Blog from './models/blog.js';

// db.execute("SELECT * FROM products")
//   .then(result => {
//        console.log(result[0]);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const shopRoutes = require('./routes/shop');
// const blogRoutes = require('./routes/blog');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(expressLayouts);
app.set('layout', 'layouts/main-layout.ejs'),

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')));
// app.use(express.static(path.join(__dirname, 'public')));



app.use('/admin', adminRoutes);
app.use(shopRoutes);
// app.use('/blog', blogRoutes);
// app.use('/blog', blogRoutes.routes);


app.use(errorController.error404);

// app.use((req, res, next) => {
//     res.status(404).render('404', {
//         path: '/404',
//         docTitle: 'Page Not found'
//     });
// });

sequelize
  .sync({ alter: true }) // force la création
  .then((result) => {
    console.log(result);
    app.listen(PORT, () =>
      console.log(`Serveur lancé sur le port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("Erreur Sequelize :", err);
  });

// const server = http.createServer(app);

// server.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });