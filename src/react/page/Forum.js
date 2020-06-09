import React, {Component} from 'react';
import ForumForm from "../AppForms/ForumForm";

class Forum extends Component {
    render() {
        return (
            <div id="content" className="content">
                <h1> Forum page</h1>
                <div className="forum">
                    <div>
                        <div>
                            <h2> Forum listing</h2>
                        </div>
                        <ForumForm
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Forum;
