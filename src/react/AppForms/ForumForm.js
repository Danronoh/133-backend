import React, {Component} from 'react';
import Form from "../component/common/Form";
import _ from "lodash";

// service
const formSubmissions = require('../../services/formSubmissions')

class ForumForm extends Form {

    state = {
        data: { title: '', article: '', author: '', category: ''/*, comments: '', imageUrl: '' */},
        newItem: {}
    }


    doSubmit = () => {
        const { data } = this.state

        // call server
        const newItem = formSubmissions.createForumService(data)
        //console.log(response)
        this.setState({
            data: { title: '', article: '', author: '', category: ''/*, comments: '', imageUrl: '' */},
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
                    <p> { newItem.article } </p>
                </div>
            )
        } return null

    }

    render() {

        return (
            <div>
                { this.renderResults() }
                <h1> Create post </h1>
                <h6> Use the form below to ask questions and get help from farmers, suppliers, etc</h6>

                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title', 'text')}
                    {this.renderInput('article', 'Article', 'text')}
                    {this.renderInput('author', 'Author', 'text')}
                    {this.renderInput('category', 'Category', 'text')}
                    {this.renderSubmit('Post')}
                </form>
            </div>
        );
    }
}

export default ForumForm;
