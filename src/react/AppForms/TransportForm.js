import React, {Component} from 'react';
import Form from "../component/common/Form";
import _ from'lodash'


// service
const formSubmissions = require('../../services/formSubmissions')

class TransportForm extends Form {

    state = {
        data: { title: '', owner: '', description: '', details: ''/* , images: '', categories: '' */ },
        newItem: {}
    }

    doSubmit = () => {
        const { data } = this.state

        // call server
        const newItem = formSubmissions.transportService(data)

        // console.log(newItem)

        this.setState({
            data: { title: '', owner: '', description: '', details: ''/* , images: '', categories: '' */ },
            newItem
        }) // or redirect
    }

    renderResults = () => {
        const { newItem } = this.state

        if (!_.isEmpty(newItem)) {
            //console.log(newItem)
            return (
                <div className="info">
                    <p className="message"> { newItem.message } </p>
                    <h1> { newItem.title } </h1>
                    <p> { newItem.description } </p>
                </div>
            )
        } return null

    }


    render() {
        return (
            <div>
                <h1> Transport form</h1>
                { this.renderResults() }

                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title', 'text')}
                    {this.renderInput('owner', 'Owner', 'text')}
                    {this.renderInput('description', 'Description', 'text')}
                    {this.renderInput('details', 'Details', 'text')}
                    {/*this.renderInput('images', 'images', 'text')*/}
                    {/*this.renderInput('categories', 'Categories', 'text')*/}
                    {this.renderSubmit('Save')}
                </form>
            </div>
        );
    }
}

export default TransportForm;
