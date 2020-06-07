/*eslint-disable*/
const Produce= require('../database/models/produce');
const fs= require('fs');



let error=(error) => {
    res.status(400).json({
      error: error
    });
  }

exports.createProduce=(req,res,next)=>{
    //req.body.produce= JSON.parse(req.body.produce);
    const url= req.protocol + '://' + req.get('host');
    const produce= new Produce({
        owner: req.body.owner,
        product:req.body.product,
        description:req.body.description,
        weight:req.body.weight,
        unitPrice:req.body.unitPrice,
        imageUrl: url+ '/images/'+ req.file.filename,
        location: req.body.location
    });
    produce.save().then(()=>{
        res.status(201).json({
            message:'Produce posted successfully!'
        });
    }).catch(error);

};


exports.getProduce=(req,res,next)=>{

    Produce.find().then(
        (produces) => {
          res.status(200).json(produces);
        }
      ).catch(error)
        
};
exports.getOneProduce=(req,res,next)=>{
    Produce.findOne({
        _id: req.params.id
      }).then(
        (produce) => {
          res.status(200).json(produce);
        }
      ).catch(
        error
      );

};
exports.modifyProduce=(req,res,next)=>{

    let produce= new Produce({_id:req.params._id});
    if(req.file){
        const url = req.protocol + '://'+ req.get('host');
       // req.body.produce= JSON.parse(req.body.produce);

        produce=  {
            _id:req.params.id,
            owner: req.body.owner,
            product:req.body.product,
            description:req.body.description,
            weight:req.body.weight,
            unitPrice:req.body.unitPrice,
            imageUrl: url+ '/images/'+ req.file.filename,
            location: req.body.location
        };

    } else {
        produce=  {
            _id:req.params.id,
            owner: req.body.owner,
            product:req.body.product,
            description:req.body.description,
            weight:req.body.weight,
            unitPrice:req.body.unitPrice,
            imageUrl: req.body.imageUrl,
            location: req.body.location
        };
    }
    Produce.updateOne({_id:req.params.id},produce).then(()=>{
        res.status(201).json({
            message:'Produce updated successfully'
        });
    }).catch(error);
    

};
exports.deleteProduce=(req,res,next)=>{
 Produce.findOne({_id:req.params.id}).then((produce)=>{
     const filename = produce.imageUrl.split('/images/')[1];
     fs.unlink('images/'+ filename,()=>{
         Produce.deleteOne({_id:req.params.id}).then(()=>{
             res.status(200).json({
                 message:'Deleted produce'
             });
         }).catch(error)
     })
 })
};