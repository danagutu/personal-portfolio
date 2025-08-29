import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  console.log('App component is rendering...');
  
  return (
    <Router>
      <div className="App" style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
        <h1 style={{ color: '#333' }}>Test - Portfolio is working!</h1>
        <p style={{ color: '#666' }}>If you can see this, the basic React setup is working.</p>
        <p style={{ color: '#666' }}>Current time: {new Date().toLocaleString()}</p>
        <p style={{ color: '#666' }}>Deployment: {new Date().toISOString()}</p>
      </div>
    </Router>
  );
};

export default App;
