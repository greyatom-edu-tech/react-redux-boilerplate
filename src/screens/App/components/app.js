import React from 'react';

import Header from './header';

const Main = (props) => {
  const { children } = props;
  return (
    <div className="app">
      <Header />
      <div>
        { children }
      </div>
    </div>
  );
};

Main.propTypes = {
  children: React.PropTypes.node,
};

export default Main;
