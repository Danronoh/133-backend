import React, {Component} from 'react';
import Input from "./Input";

class Form extends Component {

    state = {
        data: {},
        errors: {}
    }

    // TODO implement validation here and error state update

    handleSubmit = e => {
        e.preventDefault()

        this.doSubmit()
    }

    handleChange = ({ currentTarget: input }) => {
        const data  = { ...this.state.data }
        data[input.name] = input.value
        this.setState({
            data
        })

    }

    renderInput = (name, label, type) => {
        const { data } = this.state
        return(
            <Input
                name={name}
                type={type}
                value={data[name]}
                onChange={this.handleChange}
                label={label}
            />
        )
    }

    renderSubmit = label => {
        return (
            <button className="btn btn-primary">{label}</button>
        )
    }
}

export default Form;
