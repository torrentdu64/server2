import _ from 'lodash';
import React, { Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';



const FIELDS = [
{label="survey title " , name="title" },
{ label="subject title ", name="subject "},
{ label="email body ", name="email" },
{ label="email list " , name="emails" }
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
      <button type="submit">Submit</button>
      </form>
      </div>
      );
  }
}

export default reduxForm({
  form: 'surveyForm'

})(SurveyForm);
