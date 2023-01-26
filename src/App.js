import './App.css';
import { Route, Routes } from 'react-router';
import Table from './components/table/Table';
import Filter from './components/filters/Filter';
import { DataContextProvider } from './contexts/Data';
import { useState } from 'react';

function App() {

  const [trueFilter, setTrueFilter] = useState({
    type: [],
    color: [],
    flavor: [],
  })

  return (
    <div className='main-display'>
      <nav>
        <Filter trueFilter={trueFilter} setTrueFilter={setTrueFilter}/>
      </nav>
      <div className="table-display">
        <Routes>
          <Route path='/' element={<DataContextProvider><Table trueFilter={trueFilter} /></DataContextProvider>} />
          <Route path='/:id' element={<DataContextProvider><Table trueFilter={trueFilter}/></DataContextProvider>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
