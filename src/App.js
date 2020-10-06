import React from 'react';
import './style/style.css';
import Header from './components/Header';
import Siderbar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import Login from './components/Login'
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="app">
      {!user ? 
      <Login /> 
      : (
        <>
        <Header />
      <div className="app__body">
        <Siderbar />
        <Feed />
        <Widgets /> 
      </div>
        </>
      )}
      
        
    </div>
  );
}

export default App;
