import React from 'react';
import './style/style.css';
import Header from './components/Header';
import Siderbar from './components/Sidebar'
import Feed from './components/Feed'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Siderbar />
        <Feed />
        {/* Feed */}
        {/* Widgets */}
      </div>
        
    </div>
  );
}

export default App;
