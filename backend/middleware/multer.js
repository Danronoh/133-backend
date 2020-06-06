/*eslint-disable*/
const multer = require('multer');



const MIME_TYPES ={
    'image/jpg':'jpg',
    'image/jpeg':'jpg',
    'image/png':'png'
};
const storage= multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./backend/images');
    },
    filename:(req,file,next)=>{
        
        //set the file fieldname to a unique name containing the original name, current datetime and the extension.
        next(null, file.originalname); }
});
module.exports = multer({ storage:storage}).single('imageUrl');
