About This File
---------------
* Introduction
* Getting Started
* 

INTRODUCTION
------------
Please check readme on the root of this repo to learn more about the project.

GETTING STARTED
---------------
* After installing project dependencies, some commands have changed and include;
    `yarn dev` to run the dev server(compiler) for front end and `yarn build` to build
    a production bundle.
    `yarn start`, starts our api endpoints(backend) and also loads the compiled static files from
    above on the home page.
* index.js file located on the root of the project folder instantiates the server(backend) located in
the backend folder.

IGNORE BELOW INFO FOR NOW
-------------------------

#Proposed workflow(data) for ___ app

FEATURES
---------------------

 * User module
 * Content module
 * Extras (TODO:: add more)
 
 ## User module should contain:
 * A user table/model/entity
 * Login/Register form, user profile page
 * A role or roles related to each user
 * A way to approve user account(email/phone #)
 
 ## Content module should contain:
 * A content table/model,
 * A content form
 * Content should belong to a content category eg farm inputs/farm output(produce)
 * A comment form/comment view(listing) related to each product Content
 * Each content category should have it's own listing page (inputs/produce etc)
 * Search/filters on content listing page(s)
 
 ## Extras
  * Rating on content/user(when users have transacted/done business)
  * Search for both users/products/items
  * Show a users history/activity
  * Show honest reviews/Comments on best performers(earns trust)
 
 
 PROPOSED DATA STRUCTURES
 ------------------------
 
 * User Object
 
```json5
{
	"id":1,
	"uuid":"cduu-dsj1-144da-sddf",
	"userName": "MyUser_name",
	"email": "email@example.com",
	"phone": 0000000000,
	"password": "sf!@~@@~@#$",
	"firstName": "My First Name",
	"lastName": "Last name",
	"roles":['admin', 'farmer', 'or role_id']
}
```

 * Roles
 
```json5
{
	"id":1,
	"uuid":"vbh8-fgrth-klpk-dfdg",
	"name":"ADMIN",
	"description":"The boss",
}
```

 * Categories
 
```json5
{
	"id":1,
	"uuid":"vbh8-fgrth-klpk-dfdg",
	"name":"Cereal",
	"description":"The Cereals category",
	"belongsTo":[],
	"subCategories":[],
}
```


 * Content (includes products/Fertilizers)
 
```json5
{
	"id":1,
	"uuid":"vbh8-fgrth-klpk-dfdg",
	"price": 2500,
	"units": "2500 Kgs",
	"name": "Tomatoes",
	"categories": ["Fruits", "Vegetables", "Category Id/Name"],
	"description":"Very ripe and colorful",
}
```
