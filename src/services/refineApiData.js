
const axios = require('axios')

let endpoint = 'http://localhost:3000/'

// options eg a filter or sort object
// define structure later TODO::

async function getTransportItems(options) {

  return await axios.get(`${endpoint}api/transport/`)


}

// should return a transport item given it's id
// and also a list of other related items
// TODO:: refine list of related items
async function getTransportItem(id) {

  // return the item the id belongs too
  const { data: item } = await axios.get(`${endpoint}api/transport/${id}`)
  const { data: relatedItems } = await axios.get(`${endpoint}api/transport/`)

  return { item, relatedItems }

  // TODO from item api above, return the item plus related
  // instead of making two requests to the server for the same

}


module.exports = {
  getTransportItems,
  getTransportItem
}
