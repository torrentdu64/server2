import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {

    const reviewFlieds = _.map(formFields , ({name, label}) => {
        return (
            <div key={name}>
              <label>{label}</label>
              <div>
              {formValues[name]}
              </div>
            </div>
          );
    });

  return(
    <div>
        <h3>etes vous sur du mail ??</h3>
          {reviewFlieds}
        <button className="yellow darken-3 btn-flat"
        onClick={onCancel} >
        Back
        </button >
        <button
        onClick={ () =>submitSurvey(formValues)}
        className="btn-flat green right white-text">
        send email
        <i className="material-icons right">email</i>
        </button>
    </div>
    );
};

function mapStateToProps(state){
    return {
              formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
