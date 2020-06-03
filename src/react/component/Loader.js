import React, {useState} from 'react';

const Loader = () => {
  return (
    <React.Fragment>
      <div id="page_loader">
        <div className="loading_body">
        <h1> Loading.... </h1>
        <div className="loading">
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
    </div>
    </React.Fragment>
  );
};

export default Loader;
