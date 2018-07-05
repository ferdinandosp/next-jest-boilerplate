import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import globalStyle from 'styles/common.scss';

export const Home = ({ home }) => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: globalStyle }} />
    <p className="mdc-ripple-surface mdc-ripple-surface--primary">
      {home}
    </p>
  </div>
);

Home.propTypes = {
  home: string.isRequired
};

const mapStateToProps = state => ({
  home: state.MainReducer.home
});

export default connect(mapStateToProps)(Home);
