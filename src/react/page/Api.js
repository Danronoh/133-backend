import React, { Component } from 'react';
import _ from 'lodash'
import JSONPretty from 'react-json-prettify';
import Collapsible from 'react-collapsible';
import { agate } from 'react-json-prettify/dist/themes';

// service
const docsServices = require('../../services/docsServices')

class Api extends Component {

  state = {
    data: {},
    docs: {}
  }

  componentDidMount() {

    const data = docsServices.docs

    this.setState({
      data
    })
  }


  setDocs = (docs ) => {

    this.setState({
      docs
    })
  }

  // TODO:: do better here
  renderDocs = ( ) => {
    const { docs } = this.state

    //console.log(docs)

    if (!_.isEmpty(docs)){

      if (docs.api) { // render links with documentation
        return (
            <div className="doc-item">
              <JSONPretty json={{endpoint: docs.api}} theme={agate} />
                <p> <strong>Description : </strong>{ docs.description } </p>
            </div>
        )
      } else { // render the object with proposed fields

        return (
            <div className="doc-item">
              <h2> Object structure. </h2>
              <JSONPretty json={{ object: docs }} theme={agate} />
            </div>
        )
      }
    } else {

      return (
          <div className="doc-item">
            <h1>Click on a category to reveal details.</h1>
          </div>
      )
    }
  }

  renderSources = () => {
      const { data } = this.state

    if (!_.isEmpty(data)) {

      const sources = Object.keys(data)

      return (
          <div>
            <ul >
              {
                // all high level endpoints eg user, transport etc
                sources.map(source => {

                  let object = data[source].object
                  let subLinks = []

                  if (data[source].items) subLinks = Object.keys(data[source].items)

                  // console.log(data[source].object)

                  return (
                      <li className="source-list" key={source}>

                        <Collapsible className="source" transitionTime={400} easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'} trigger={source} open={true} >
                          <ul>
                            <li onClick={() => this.setDocs( data[source].object)} key="object"> Object </li>
                            {
                              // low level api endpoint end user/delete, user/update, user/create etc
                              subLinks.map(link => {
                                let item = data[source].items[link] // docs to display
                                return (
                                    <li onClick={() => this.setDocs( item)} key={link}>{link}</li>
                                )
                              })
                            }
                          </ul>
                        </Collapsible>
                      </li>
                  )
                })
              }
            </ul>
          </div>
      )
    } else return null


    /*for (let [key, value] of Object.entries(data)) {
      console.log(`${key}: ${value}`);
    }*/


  }

  render() {

    return (
      <div id="content" className="content">
        <div className="documentation">
          { this.renderSources() }
          { this.renderDocs()}
        </div>
      </div>
    );
  }
}

export default Api;
