import React from 'react';
import PetDetailPage from './PetDetailPage';

function App(props) {
  return (
   <PetDetailPage pet={props.pet} />
  );
}

export default App;
