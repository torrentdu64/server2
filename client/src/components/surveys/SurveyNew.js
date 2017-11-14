import React, { Component} from 'react';
import SurveyForm from './SurveyForm';
import SuveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {

  state = { showFormReview: false };

  renderContent(){
    if (this.state.showFormReview){
      return <SuveyFormReview />;
    }
    return <SurveyForm  onSurveySubmit = {() => this.setState({ showFormReview: true })} />;
  }

  render(){
    return (
      <div>
      new
      { this.renderContent() }
      </div>
      );
  }
}

export default SurveyNew;
