/*eslint-disable*/
const Post= require('../database/models/posts');

exports.createPost= (req,res, next)=>{

    const post= new Post({
        title: req.body.title,
        article: req.body.article,
        imageUrl: req.body.imageUrl,
        author: req.body.author,
        category: req.body.category,
        
    });
    post.save().then(
        () => {
          res.status(201).json({
            message: 'Post saved successfully!',
            data: post
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );

};

exports.getAllPosts= (req,res,next)=>{

    Post.find().then(
        (posts) => {
          res.status(200).json(posts);
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
};

exports.getOnePost=(req,res,next)=>{
    Post.findOne({
        _id: req.params.id
      }).then(
        (post) => {
          res.status(200).json(post);
        }
      ).catch(
        (error) => {
          res.status(404).json({
            error: error
          });
        }
      );
};
exports.updatePost=(req,res,next)=>{
    const post= new Post({
         _id:req.params.id,
        title: req.body.title,
        article: req.body.article,
        imageUrl: req.body.imageUrl,
        author: req.body.author,
        category: req.body.category,
        
    });
    Post.updateOne({_id: req.params.id}, post).then(
        () => {
          res.status(201).json({
            message: 'Post updated successfully!'
          });
        }, {
          new:true,
          runValidators:true
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
};

exports.deletePost= (req,res,next)=>{
    Post.deleteOne({_id: req.params.id}).then(
        () => {
          res.status(200).json({
            message: 'Deleted the post!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
}