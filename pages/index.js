import React, { Component } from 'react';
import globalStyle from '../styles/common.scss';
import { connect } from 'react-redux';

export class Home extends Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: globalStyle }} />
        <p>{this.props.home}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  home: state.MainReducer.home
});

export default connect(mapStateToProps)(Home);
