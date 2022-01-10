// const {
//   findAllBlogs,
//   createBlogDocument,
//   deleteBlogDocument,
//   updateBlogDocument,
//   findBlogByTitleOrAuthor,
// } = require("../services/blogs.service");

// const getAllBlogs = async (req, res) => {
//   try {
//     const blogs = await findAllBlogs();
//     res.json(blogs);
//   } catch (error) {
//     res.status(404).json({ message: "Could Not Fetch Blogs from DB", error });
//   }
// };

// const createNewBlog = async (req, res) => {
//   try {
//     const body = req.body;
//     const newBlog = await createBlogDocument(body);
//     res.json(newBlog);
//   } catch (error) {
//     res.status(500).json({
//       message: "Couldn't create new blog post. Please try again",
//       error,
//     });
//   }
// };

// const deleteBlogWithId = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await deleteBlogDocument(id);
//     res.json(result);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Couldn't delete blog post. Please try again", error });
//   }
// };

// const updateBlogsWithId = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const update = req.body; //updates to be perfomed

//     const result = await updateBlogDocument(id, update);
//     res.json(result);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Couldn't save blog post. Please try again", error });
//   }
// };

// // const searchBlogs = async (req, res) => {
// //   const { title, author } = req.query;
// //   try {
// //     console.log(req.query);
// //     const result = await Blogs.find({
// //       $or: [
// //         { title },
// //         { author: { $elemMatch: { email: author} } },
// //       ],
// //     });
// //     res.json(result);
// //   } catch (error) {
// //     res
// //       .status(500)
// //       .json({ message: "Couldn't fetch blog posts. Please try again", error });
// //   }
// // };

// // const searchBlogs = async (req, res) => {
// //   const { title, author } = req.query;
// //   try {
// //     console.log(req.query);
// //     const result = await Blogs.find({
// //       $or: [{ title }, { author: { $elemMatch: { email: author } } }],
// //     });
// //     res.json(result);
// //   } catch (error) {
// //     res
// //       .status(500)
// //       .json({ message: "Couldn't fetch blog posts. Please try again", error });
// //   }
// // };

// const searchBlogs = async (req, res) => {
//   const { title, author } = req.query;
//   try {
//     const result = await findBlogByTitleOrAuthor({ title, author });
//     res.json(result);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Couldn't fetch blog posts. Please try again", error });
//   }
// };

// module.exports = {
//   getAllBlogs,
//   createNewBlog,
//   deleteBlogWithId,
//   updateBlogsWithId,
//   searchBlogs,
// };

const BlogService = require("../services/blogs.service");
const BlogServiceInstance = new BlogService();

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogServiceInstance.findAllBlogs();
    res.json(blogs);
  } catch (error) {
    res.status(404).json({ message: "Could Not Fetch Blogs from DB", error });
  }
};

const createNewBlog = async (req, res) => {
  try {
    const body = req.body;
    const newBlog = await BlogServiceInstance.createBlogDocument(body);
    res.json(newBlog);
  } catch (error) {
    res.status(500).json({
      message: "Couldn't create new blog post. Please try again",
      error,
    });
  }
};

const deleteBlogWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await BlogServiceInstance.deleteBlogDocument(id);
    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Couldn't delete blog post. Please try again", error });
  }
};

const updateBlogsWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body; //updates to be perfomed

    const result = await BlogServiceInstance.updateBlogDocument(id, update);
    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Couldn't save blog post. Please try again", error });
  }
};

// const searchBlogs = async (req, res) => {
//   const { title, author } = req.query;
//   try {
//     console.log(req.query);
//     const result = await Blogs.find({
//       $or: [
//         { title },
//         { author: { $elemMatch: { email: author} } },
//       ],
//     });
//     res.json(result);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Couldn't fetch blog posts. Please try again", error });
//   }
// };

// const searchBlogs = async (req, res) => {
//   const { title, author } = req.query;
//   try {
//     console.log(req.query);
//     const result = await Blogs.find({
//       $or: [{ title }, { author: { $elemMatch: { email: author } } }],
//     });
//     res.json(result);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Couldn't fetch blog posts. Please try again", error });
//   }
// };

const searchBlogs = async (req, res) => {
  const { title, author } = req.query;
  try {
    const result = await BlogServiceInstance.findBlogByTitleOrAuthor({
      title,
      author,
    });
    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Couldn't fetch blog posts. Please try again", error });
  }
};

module.exports = {
  getAllBlogs,
  createNewBlog,
  deleteBlogWithId,
  updateBlogsWithId,
  searchBlogs,
};
