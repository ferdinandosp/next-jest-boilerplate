import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

export const Home = ({ home }) => (
  <div>
    <div>
      { home }
    </div>
    <div className="grid-x">
      <div className="cell">
        full width cell
      </div>
      <div className="cell">
        full width cell
      </div>
    </div>
    <div className="grid-x">
      <div className="cell small-6">
        6 cells
      </div>
      <div className="cell small-6">
        6 cells
      </div>
    </div>
    <div className="grid-x">
      <div className="cell medium-6 large-4">
        12/6/4 cells
      </div>
      <div className="cell medium-6 large-8">
        12/6/8 cells
      </div>
    </div>
  </div>
);

Home.propTypes = {
  home: string.isRequired
};

const mapStateToProps = state => ({
  home: state.MainReducer.home
});

export default connect(mapStateToProps)(Home);
