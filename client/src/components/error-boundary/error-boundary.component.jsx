import React from 'react';
import brokenImage from '../../assets/error-image.png';

import {ErrorImageContainer, ErrorImageOverlay, ErrorImageText} from './error-boundary.styles'
class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    }
  }
  static getDerivedStateFromError() {
    return {hasErrored: true}
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl={brokenImage} />
        <ErrorImageText>Sorry this page is broken</ErrorImageText>
      </ErrorImageOverlay>
      );
    }
    else {
      return this.props.children;
    } 
  }

}

export default ErrorBoundary;