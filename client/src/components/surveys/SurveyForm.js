import _ from 'lodash';
import React, { Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmail from '../../utils/validateEmail';



const FIELDS = [
{label:"survey title " , name:"title" },
{ label:"subject title ", name:"subject "},
{ label:"email body ", name:"body" },
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
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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

  errors.emails = validateEmail(values.emails || '');

  _.each(FIELDS, ({name}) => {
      if(!values[name]){
        errors[name] = 'votre contenue est vide '
      }
  });



  return errors;

}

export default reduxForm({
  validate,
  form: 'surveyForm'

})(SurveyForm);
