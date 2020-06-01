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
describe('Posts',()=>{
   
        beforeEach((done) => { //Before each test we empty the database
            Post.remove({}, (err) => { 
               done();           
            });        
        });});

describe('CRUD operations',()=>{

    let posts= [{
        
       "title":"Apples",
       "article":"There are many types of apples..",
       "imageUrl":"http:apples.com",
       "author":"purity",
       "category":"food"
      
    },
    {   
        "title":"Cows",
       "article":"There are many types  of cows..",
       "imageUrl":"http:cows.com",
       "author":"jj",
       "category":"livestock"
       
    }];
    it('Should add posts in db',(done)=>{
        for(post in posts){
            chai.request(server)
            .post('/api/posts/')
            .send(posts[post])
            .end((end,res)=>{
                res.should.have.status(201);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                

                console.log("Response Body:", res.body);
                
            })
        }
        done();
       
    })

it('Should get all the posts',(done)=>{
    chai.request(server)
    .get('/api/posts/')
    .end((err,result)=>{
        result.should.have.status(200);
        console.log('Got', result.body.length,"docs");

        
    })
    done();
})
it('Should get a particular post',(done)=>{
    let post= new Post({
        "title":"Cows",
        "article":"There are many types of cows..",
        "imageUrl":"http:cows.com",
        "author":"jj",
        "category":"livestock"
        
    });
    post.save((err,post)=>{
        chai.request(server)
            .get('/api/posts/' + post.id)
            .send(book)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('title');
                  res.body.should.have.property('article');
                  res.body.should.have.property('imageUrl');
                  res.body.should.have.property('author');
                  res.body.should.have.property('category');
               
                  res.body.should.have.property('_id').eql(post.id);
              
            });
    })
    done();
})

 it('should update a particular post',(done)=>{

    let post= new Post({
        "title":"Cows",
        "article":"There are many types of cows..",
        "imageUrl":"http:cows.com",
        "author":"jj",
        "category":"livestock"
        
    });
    post.save((err, post) => {
        chai.request(server)
        .put('/api/posts/' + post.id)
        .send({"title":"Cows",
        "article":"There are many types of dairy cows and many farmers..",
        "imageUrl":"http:cows.com",
        "author":"jj",
        "category":"livestock"
        })
        .end((err, res) => {
              res.should.have.status(201);
              res.body.should.be.a('object');
              res.body.should.have.property('message').eql('Post updated successfully!');
              res.body.book.should.have.property('article').eql('There are many types of dairy cows and many farmers..');
         
        });
    })
        done();
  });
    
    

it('should check for data updated in db',(done)=>{
    chai.request(server)
    .get('/api/posts/'+ posts[1].id)
    .end((err,result)=>{
        result.should.have.status(200)
        //result.body.data.description.should.equal('I should call the vet doctor');
        
    })
    done();
}) 
it('should delete a particular post',(done)=>{

    let post= new Post({
        "title":"Cows",
        "article":"There are many types of cows..",
        "imageUrl":"http:cows.com",
        "author":"jj",
        "category":"livestock",
        
    });
    post.save((err, post) => {
        chai.request(server)
        .delete('/api/posts/' + post.id)
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('message').eql('Deleted the post!');
              res.body.result.should.have.property('ok').eql(1);
              res.body.result.should.have.property('n').eql(1);
     
        });
        
  });
  done();
})
});



    