/*eslint-disable*/
const express = require('express');

const router = express.Router();
const postController= require('../../controllers/postController')
const commentController= require('../../controllers/commentsController');
router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);
router.get('/:id', postController.getAllPosts);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

//comments
router.post('/:id/comment', commentController.createComment);
router.get('/:id/comment', commentController.getComments);
router.put('/comments/:commentId', commentController.updateComments);
router.delete('/comments/:commentId', commentController.deleteComments);


module.exports = router;