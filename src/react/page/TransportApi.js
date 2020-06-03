import React, { Component } from 'react';
import JSONPretty from 'react-json-prettify';
import { agate } from 'react-json-prettify/dist/themes';

class Home extends Component {
  render() {
    const transportObj = {
      title: 'Test this transport object',
      owner: 'owner_id/user_id',
      categories: ['One', 'Two'],
      description: 'Very descriptive..',
      details: 'andress',
      images: ['imgId1', 'imgId2'],
      isPublished: true
    };

    const items = {
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
    };
    return (
      <div id="content" className="content">
        <h1> TEAM #133...............</h1>
        <section className="feature-description">
          <div className="item">
            <h3> Transport Object (item). </h3>
            <JSONPretty json={transportObj} theme={agate} />
          </div>
          <div className="item">
            <h3> Transport (item) Feature api endpoints. </h3>
            <h4>NB:: /5eb3079df907b8323cc22d7c == /:id as url param</h4>
            <JSONPretty json={items} theme={agate} />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
