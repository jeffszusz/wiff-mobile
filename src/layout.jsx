import React from 'react';

import List from './list.jsx';

import filmJSON from './wiff.json';

class Layout extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>WIFF</h1>
        <h2>Schedule</h2>
        <List filmList={filmJSON} />
        <footer>Copyright &copy; Bull Rush Studios Inc.</footer>
      </div>
    )
  }
}

export default Layout;
