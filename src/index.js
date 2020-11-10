import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

(async () => {
  const url = 'https://polar-beach-08187.herokuapp.com/api/pets/2';
  const response = await fetch(url);
  if (response.ok) {
    const pet = await response.json();
    console.log(pet);

    ReactDOM.render(
      <React.StrictMode>
        <App pet={pet} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
})();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
