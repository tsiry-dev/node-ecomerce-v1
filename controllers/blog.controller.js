// import Blog from "../models/blog.js"

// const blog = new Blog();   

// export const findAllBlog = (req, res, next) => {
//    blog.findAll()
//         .then(([data, fieldData]) =>  {
//              res.render('blog/index', {
//                 blogs: data,
//                 path: '/blog',
//                 docTitle: 'Bogger'
//              });
//         })
//         .catch(err => console.log(err))
// }

// export const createBlog = (req, res, next) => {

//     res.render('blog/create', {
//         path: 'blog/create',
//         docTitle: 'New blog'
//     })
// }