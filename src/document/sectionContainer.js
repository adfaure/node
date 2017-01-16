import React from 'react';
import {SectionComponent} from './sectionComponent'

class SectionContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<SectionComponent documentSection={this.props.documentSection}/>)
  }
}

module.exports.SectionContainer = SectionContainer;
