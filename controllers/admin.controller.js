import { validationResult } from 'express-validator';

export const createProduct = (req, res, next) => {
  res.render('admin/add-product', {
    docTitle: 'New product',
    path: '/admin/add-product',
    errors: {},
    oldInput: {
      title: '',
      description: '',
      price: '',
      imageUrl: ''
    }                                                                                                    
  });
};

export const storeProduct = async (req, res, next) => {
  // const errors = validationResult(req);

  // console.log(errors);
  

  // const { title, description, price, imageUrl } = req.body;

  // if (!errors.isEmpty()) {
  //   const errorMap = {};
    
  //   errors.array().forEach(err => {
  //     errorMap[err.path] = err.msg;
  //   });
  //   console.log(errorMap);


  //   return res.status(422).render('admin/add-product', {
  //     docTitle: 'New product',
  //     path: '/admin/add-product',
  //     errors: errorMap,
  //     oldInput: { title, description, price, imageUrl }
  //   });
  // }

  // try {
  //   const product = new Product();
  //   await product.save(title, description, price, imageUrl);
  //   return res.redirect('/');
  // } catch (err) {
  //   console.error(err);
  //   return res.redirect('/admin/add-product');
  // }
};
