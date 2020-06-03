
import React, { Component, useState, useRef } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import Pagination from '../component/common/Pagination'


const refineApiData = require('../../services/refineApiData')

class TransportDetails extends Component {

  state = {
    item: [],
    relatedItems: [],
    relatedView: { currentPage: 1 },
    pageSize: 4,
  }

  paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber -1) * pageSize
    return _(items).slice(startIndex).take(pageSize).value()
  }

  loadData = async () => {
    const { pageSize, relatedView } = this.state
    const { id } = this.props.match.params
    const { item, relatedItems } = await refineApiData.getTransportItem(id)
    const data = this.paginate(relatedItems, relatedView.currentPage, pageSize)

    this.setState({
      item,
      relatedItems,
      relatedView: { currentPage: 1, data },
    })
  }

  componentDidMount() {
    this.loadData()
      .then(() => {

        //require('../AppSlider') // load slider
      })
  }

  // when slider item is clicked// reload
  reloadItemContent = async (id) => {
    //const { id } = this.props.match.params
    const { item, relatedItems } = await refineApiData.getTransportItem(id)

    this.setState({
      item,
      relatedItems
    })

    //console.log(id)

  }

  // update items on the related view
  handlePagination = page => {
    const { item, relatedItems, pageSize, relatedView } = this.state


    // paginate data here


    const data = this.paginate(relatedItems, page, pageSize)

    let args = {
      currentPage: page,
      data
    }

    this.setState({
      relatedView: args
    })
    console.log(data)
  }

  // items related to item in url
  relatedDiv = () => {
    const { relatedView } = this.state
    if (!_.isEmpty(relatedView.data)){

      return (
        <div>
          {
            relatedView.data.map((item, index) => {

              return (
                <div className="related " key={item._id}>
                  <div>
                    <img className="item-image thumb" alt={item.title}/>
                    <small> {item.details}</small>
                    <br/>
                    <Link to={`/transport/${item._id}`} onClick={ () => this.reloadItemContent(item._id)}> Read More..</Link>
                  </div>
                </div>
              )
            })

          }

        </div>
      )

    } else return null
  }

  // renders/returns entire page div for
  // this item
  renderDiv = () => {

    const { item, relatedItems, pageSize, relatedView } = this.state

    return (
      <React.Fragment>
        <div className="article">
          <div>
            <h1>{item.title}</h1>
            <span className="published_by">Seller : {item.owner}</span>
            <p> {item.description}</p>
            <p> {item.details}</p>
            <h2> Images/Files div: TODO </h2>
            <h2> rating:.... </h2>
          </div>
          <hr/>
          <div className="related_items">
            <h2> Related items.</h2>
            {this.relatedDiv()}
            <Pagination
              total={relatedItems.length}
              pageSize={pageSize}
              relatedView={relatedView}
              handlePagination={this.handlePagination}
            />
          </div>

        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div id="content" className="content">
        {this.renderDiv()}
      </div>
    );
  }
}

export default TransportDetails;
