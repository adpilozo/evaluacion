// frontend/src/App.js
import React from 'react';
import CreateEvaluation from './components/CreateEvaluation';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'red' }}>Sistema de Evaluación Estudiantil</h1>
      <CreateEvaluation />
    </div>
  );
}


export default App;
