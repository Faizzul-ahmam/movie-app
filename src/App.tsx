import React from 'react';
import './style/App.scss';
import Component from './components';;

function App() {
  return (
    <div>
      <Component.Nav/>
      <Component.MovieList/>
    </div>
  );
}

export default App;
