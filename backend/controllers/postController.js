/*eslint-disable*/
const Post= require('../database/models/posts');
const fs= require('fs');



let error=(error) => {
  res.status(400).json({
    error: error
  });
}

exports.createPost= (req,res, next)=>{

  //req.body.post= JSON.parse(req.body.post);
    const url= req.protocol + '://' + req.get('host');
    const post= new Post({
      title: req.body.title,
        article: req.body.article,
        imageUrl: url+ '/images/'+ req.file.filename,
        author: req.body.author,
        category: req.body.category,
        
    });
    post.save().then(()=>{
        res.status(201).json({
            message:'Post saved successfully!'
        });
    }).catch(error);

    

};

exports.getAllPosts= (req,res,next)=>{

    Post.find().then(
        (posts) => {
          res.status(200).json(posts);
        }
      ).catch(
        error
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
        error
      );
};
exports.updatePost=(req,res,next)=>{
  let post= new Post({_id:req.params._id});
  if(req.file){
      const url = req.protocol + '://'+ req.get('host');
      //req.body.post= JSON.parse(req.body.post);

      post=  {
          _id:req.params.id,
          title: req.body.title,
          article: req.body.article,
          imageUrl: url+ '/images/'+ req.file.filename,
          author: req.body.author,
          category: req.body.category
         
      };

  } else {
    post= {
      _id:req.params.id,
     title: req.body.title,
     article: req.body.article,
     imageUrl: req.body.imageUrl,
     author: req.body.author,
     category: req.body.category,
     
 }
  }
  Post.updateOne({_id:req.params.id},post).then(()=>{
      res.status(201).json({
          message:'Post updated successfully'
      });
  }, {
    new:true,
    runValidators:true
  }).catch(error);
  

   
};

exports.deletePost= (req,res,next)=>{
  Post.findOne({_id:req.params.id}).then((post)=>{
    const filename = post.imageUrl.split('/images/')[1];
    fs.unlink('images/'+ filename,()=>{
        Post.deleteOne({_id:req.params.id}).then(()=>{
            res.status(200).json({
                message:'Deleted post'
            });
        }).catch(error)
    })
})
}