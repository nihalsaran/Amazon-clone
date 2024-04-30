// App.jsx
import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Components/Home';

function App() {

  
  return (
    <div>
      <Navbar />
      <div className="main-content">
      <Home />
        {/* Your main content goes here */}
        <h1>Welcome to My Amazon Navbar</h1>
        <p>This is just a demo application.</p>
      </div>
    </div>
  );
}

export default App;