import './App.css';
import CreateComponent from '../src/Component/create';
import ReadComponent  from '../src/Component/read';
import EditComponent from './Component/edit';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateComponent/>}/>
        <Route path='/read' element={<ReadComponent/>}/>
        <Route path='/edit' element={<EditComponent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
