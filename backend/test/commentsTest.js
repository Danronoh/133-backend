/*eslint-disable*/

//during the test the env var is set to test
process.env.NODE_ENV='test';
let mongoose= require('mongoose');
let Post= require('../database/models/posts');
let Comment= require('../database/models/comments');
let server= require('../server');
//require the dev dependencies
let chai= require('chai');
let chaiHttp= require('chai-http');
let should= chai.should();
let assert= require('assert');
const { expect}= chai;

chai.use(chaiHttp);

//parent block
describe('Comments',()=>{
   
    beforeEach((done) => { //Before each test we empty the database
        Comment.remove({}, (err) => { 
           done();           
        });        
    });});

    describe('Comments CRUD operations',()=>{
        
let comment= new Comment({
    "text":"i love cows"
});
let post= new Post({
    "title":"Cows",
    "article":"There are many types of cows..",
    "imageUrl":"http:cows.com",
    "author":"jj",
    "category":"livestock"
    
});
it('Should post a  comment',(done)=>{
chai.request(server)
.post('/api/posts/'+post.id+'/comment')
.send(comment)
.end((end,res)=>{
    res.should.have.status(200);
    expect(res).to.be.json;
    expect(res.body).to.be.an('object');
    res.body.should.have.property('text');
    

    console.log("Response Body:", res.body);
    
})

done();
        });
 
 it('Should get a particular comment',(done)=>{
    let comment= new Comment({
        "text":"i love cows"
    });
    let post= new Post({
        "title":"Cows",
        "article":"There are many types of cows..",
        "imageUrl":"http:cows.com",
        "author":"jj",
        "category":"livestock"
        
    });
            comment.save((err,comment)=>{
                chai.request(server)
                    .get('/api/posts/' + post.id +'/comment')
                    .send(comment)
                    .end((err, res) => {
                          res.should.have.status(200);
                          res.body.should.be.a('object');
                          res.body.should.have.property('text');
                         
              
                        
            
                      
                    });
            })
            done();
        });
        
/*
it('should update a particular comment',(done)=>{
            let comment= new Comment({
              
                "text":"i love cows"
            });
            comment.save((err, comment) => {
                chai.request(server)
                .put('/api/posts/comments/'+ comment.commentId)
                .send({
                    "text":"i love cows and goats"
                })
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                     res.body.book.should.have.property('text').eql('i love cows and goats');
                 
                });
                
            })
            done();   
          });
          it('should delete a particular comment',(done)=>{
            let comment= new Comment({
                
                "text":"i love cows"
            });
        
                    comment.save((err, comment) => {
                        const commentId= comment.commentId;
                        chai.request(server)
                        .delete('/api/posts/comments/' + commentId)
                        .end((err, res) => {
        
                              res.should.have.status(200);
                              res.body.should.be.a('object');
                              res.body.should.have.property('message').eql('Deleted the comment!');
                              res.body.result.should.have.property('ok').eql(1);
                              res.body.result.should.have.property('n').eql(1);
                     
                        });
                        
                  })
                  done()   
        
            })
        
        */
          
 }); 
 