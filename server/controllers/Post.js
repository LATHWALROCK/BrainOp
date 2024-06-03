const Post = require("../models/Post")

exports.createPost = async(req,res) => {
    try {
        const {
            title,
            body
        } = req.body

        if (
            !title ||
            !body
        ) {
            return res.status(403).send({
              success: false,
              message: "All Fields are required",
            })
        }

        const post = await Post.create({
            title,
            body
        })

        return res.status(200).json({
            success: true,
            post,
            message: "Post created successfully",
        })
    }
    catch(error) {
        console.error(error)
        return res.status(500).json({
        success: false,
        message: "Post cannot be created. Please try again.",
    })
    }
}

exports.getPost = async (req,res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json(
            {
                success: true,
                data: posts,
                message: 'All posts data are fetched'
            }
        )
    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success: false,
                error: err.message,
                message: 'Server error'
            }
        )
    }
}