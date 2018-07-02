import React from 'react';
import globalStyle from '../styles/common.scss';

export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: globalStyle }} />
    <p>Hello World!</p>
  </div>
)