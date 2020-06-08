// receives form submissions and calls  the relevant
// endpoints and returns

// TODO:: all these should connect to an endpoint and document the object it returns.. check refineApiData.js in this folder for hints
function loginService(data) {

    return {
        message: 'No backend service connected yet for login form!!.',
        username: data.username
    }

}

function registerService(data) {

    return {
        message: 'No backend service connected yet for Registration form!!.',
        name: data.name,
        username: data.username
    }
}

// can receive create or update request
function transportService(data) {

    //console.log(data)

    return {
        message: 'No backend service connected yet!!.',
        title: data.title,
        description: data.description
    }
}

function createForumService(data) {
    return {
        message: 'No backend service connected for Forum form yet!!.',
        title: data.title,
        article: data.article
    }
}


module.exports = {
    loginService,
    registerService,
    transportService,
    createForumService
}
