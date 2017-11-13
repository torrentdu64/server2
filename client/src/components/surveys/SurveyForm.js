import _ from 'lodash';
import React, { Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';



const FIELDS = [
{label:"survey title " , name:"title" },
{ label:"subject title ", name:"subject "},
{ label:"email body ", name:"email" },
{ label:"email list " , name:"emails" }
];

class SurveyForm extends Component {

  renderFields(){
    return (
      _.map(FIELDS, ({label, name}) => {
        return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
      })

      );
  }
  render(){
    return (
      <div>
      <form onSubmit={this.props.handleSubmit(value => console.log(value))}>
      {this.renderFields()}
      <Link to="/surveys" className="btn-flat red white-text">
      cancel
      </Link>
      <button type="submit" className="teal btn-flat right white-text">
      Next
      <i className="material-icons right">done</i>
      </button>
      </form>
      </div>
      );
  }
}

function validate(values){
  const errors = {};

  if(!values.title){
    errors.title = 'entrer un titre !!';
  }

  return errors;

}

export default reduxForm({
  validate,
  form: 'surveyForm'

})(SurveyForm);
