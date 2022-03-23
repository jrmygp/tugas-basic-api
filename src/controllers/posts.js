const { postsDB } = require("../database")

const postControllers = {
    getAllPosts: (req, res) => {
        if (!postsDB.length) {
          res.status(404).json({
            message: "No post found",
          });
          return;
        }
        res.status(200).json({
          message: "Post found",
          result: postsDB,
        });
      }
}

module.exports = postControllers
