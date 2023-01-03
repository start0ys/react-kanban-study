import React from 'react';
import './App.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Kanban from './components/Kanban';


function App() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Kanban/>
      </DndProvider>
    </div>
  );
}

export default App;
