import React from 'react';
import { Field , reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

    renderError = ({ error , touched}) =>{
        if (touched && error) {
            return <div>{error}</div>
        }
    }

    renderInput = ({input , label , meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input type="text" {...input}/>
                {this.renderError(meta)}
            </div>
        )
    }

    onFormSubmit = (formValues) =>{
    
    }


    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className='ui form error'>
                <Field name="title" component={this.renderInput} label="Enter title" />
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
    
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title){
        errors.title = 'You must enter a title'
    }

    if (!formValues.description) {
        errors.description = 'you must enter a description'
    }

    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);