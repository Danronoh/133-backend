import React, {Component} from 'react';
import TransportForm from "../AppForms/TransportForm";

class AddItem extends Component {
    render() {
        return (
            <div id="content" className="content">
                <h1> Add item page </h1>
                <TransportForm
                />
            </div>
        );
    }
}

export default AddItem;
