import React from 'react';
import './App.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Kanban from './components/Kanban';
import ModalTest from './components/ModalTest';


function App() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <ModalTest/>
      </DndProvider>
    </div>
  );
}

export default App;
