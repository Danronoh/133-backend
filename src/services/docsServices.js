// Should contain a doc object
// with the item an endpoint returns/processes and endpoint with descriptions of each


// endpoints included: auth, file, forum, transport
const docs = {

    // 1. auth api
    auth: {

        object: {
            name: 'Name',
            email: 'test@test.com'
        },

        // api list items
        items: {
            login: {
                api: '/api/user/login',
                description: 'User login endpoint'
            }
        }
    },

    // 2. File and image api
    file: {

    },

    // 3. Forum api
    forum: {

    },

    // 4. Transport api
    transport: {

        object: {
            title: 'The title of the transport object.',
            owner: 'owner_id/user_id',
            categories: ['category_id1', 'category_id2'],
            description: 'Description about the item.',
            details: 'Additional details about the item',
            images: ['imgId1', 'imgId2'],
            isPublished: true
        },

        // api list items
        items: {

            itemList: {
                api: '/api/transport/',
                description: 'a GET request to this api endpoint returns a list of all \n'
                    + 'available transport items, will soon be searchable and filterable. '
            },

            item: {
                api: '/api/transport/5eb3079df907b8323cc22d7c',
                description: 'a GET request to this endpoint with a transport item id as \n'
                    + ' the param returns the relevant fields of the transport item, if available. '
            },

            create: {
                api: '/api/transport/',
                description: 'a POST request to this endpoint creates a transport item, \n'
                    + 'please see recommended item data structure above on how to structure the \n'
                    + 'object you send to this endpoint. NOTE: this is the same structure to pass to \n'
                    + 'the update endpoint below.'
            },

            update: {
                api: '/api/transport/5eb3079df907b8323cc22d7c',
                description: 'a PUT request to this endpoint, updates the item, one supplies as a \n'
                    + 'param in the url(id), with the item body described above (Transport object/item)'
            },

            delete: {
                api: '/api/transport/5eb3079df907b8323cc22d7c',
                description: 'a DELETE request to this url, will delete the transport item \n'
                    + 'whose id is the param in the url '
            }

        }

    }
}

// TODO:: refine this and call items (api list items) per api on request instead
module.exports = {
    docs
}
