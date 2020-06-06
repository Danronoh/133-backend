/*eslint-disable*/

//during the test the env var is set to test
process.env.NODE_ENV='test';
let mongoose= require('mongoose');
let Produce= require('../database/models/produce');

let server= require('../server');

const path = require('path');
let fs = require('fs');

//require the dev dependencies
let chai= require('chai');
let chaiHttp= require('chai-http');
let should= chai.should();
let assert= require('assert');
const { expect}= chai;

chai.use(chaiHttp);


//parent block
describe('Produce',()=>{
   
        beforeEach((done) => { //Before each test we empty the database
            Post.remove({}, (err) => { 
               done();           
            });        
        });});

        describe(' Produce CRUD operations',()=>{

            let produce= new Produce({
                "owner":"james",
                "product":"beans",
                "description":"Yellow beans",
                "weight":"39 bags",
                "unitPrice":400,
                'imageUrl':"fs.createReadStream(`${__dirname}/img/festival.jpg`",
                "location":"Nairobi"
            });


            it('should add produce in db',(done)=>{
                chai.request(server)
                .post('/api/produce/')
                .type('form')
                .field('owner','James')
                .field('product','beans')
                .field('description','Red beans')
                .field('weight','10 kg')
                .field('unitPrice',100)
                .attach('imageUrl',fs.createReadStream(`${__dirname}/img/festival.jpg`))
                .field('location','Limuru')
                .end((end,res)=>{
                    res.should.have.status(201);
                    expect(res).to.be.json;
                    expect(res.body).to.be.an('object');
                    
    
                    console.log("Response Body:", res.body);
                   
                    
                })
            
            done();
           
            });
            it('Should get all produce',(done)=>{
                chai.request(server)
                .get('/api/produce/')
                .end((err,result)=>{
                  result.should.have.status(200);
                console.log('Got', result.body.length,"docs");

        
    })
    done();
            })

            it('Should get a particular produce',(done)=>{
                let produce= new Produce({
                    "owner":"james",
                    "product":"beans",
                    "description":"Yellow beans",
                    "weight":"39 bags",
                    "unitPrice":400,
                    'imageUrl':"fs.createReadStream(`${__dirname}/img/festival.jpg`",
                    "location":"Nairobi"
                });
                produce.save((err,produce)=>{
                    chai.request(server)
                        .get('/api/produce/' + produce.id)
                        .send(produce)
                        .end((err, res) => {
                              res.should.have.status(200);
                              res.body.should.be.a('object');
                              res.body.should.have.property('owner');
                              res.body.should.have.property('product');
                              res.body.should.have.property('imageUrl');
                              res.body.should.have.property('weight');
                              res.body.should.have.property('unitPrice');
                              res.body.should.have.property('description');
                              res.body.should.have.property('location');
                           
                              res.body.should.have.property('_id').eql(produce.id);
                          
                        });
                })
                done();
            })


            it('should update a particular produce',(done)=>{

               
                produce.save((err, produce) => {
                    chai.request(server)
                    .put('/api/produce/' + produce.id)
                    .type('form')
                    .field('owner','James')
                .field('product','beans')
                .field('description','Red beans')
                .field('weight','10 kg')
                .field('unitPrice',100)
                .attach('imageUrl',fs.createReadStream(`${__dirname}/img/festival.jpg`))
                .field('location','Limuru')
                    .end((err, res) => {
                          res.should.have.status(201);
                          res.body.should.be.a('object');
                          res.body.should.have.property('message').eql('Produce updated successfully!');
                          res.body.book.should.have.property('description').eql('Red beans');
                     
                    })
                })
                    done();
              });
              it('should check for produce updated in db',(done)=>{
                chai.request(server)
                .get('/api/produce/'+ produce.id)
                .end((err,result)=>{
                    result.should.have.status(200)
                    //result.body.data.description.should.equal('I should call the vet doctor');
                    
                })
                done();
            })   

              it("Should delete a particular produce",(done)=>{
                let produce= new Produce({
                    "owner":"james",
                    "product":"beans",
                    "description":"Yellow beans",
                    "weight":"39 bags",
                    "unitPrice":400,
                    'imageUrl':"fs.createReadStream(`${__dirname}/img/festival.jpg`",
                    "location":"Nairobi"
                });
                produce.save((err, produce) => {
                    chai.request(server)
                    .delete('/api/produce/' + produce.id)
                    .end((err, res) => {
                          res.should.have.status(200);
                          res.body.should.be.a('object');
                          res.body.should.have.property('message').eql('Deleted produce');
                          res.body.result.should.have.property('ok').eql(1);
                          res.body.result.should.have.property('n').eql(1);
                 
                    });
                    
              });
              done();
            })
              
        });