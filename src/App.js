import './App.css';
import { Route, Routes } from 'react-router';
import Table from './components/Table';
import { DataContextProvider } from './contexts/Data';

function App() {
  return (
    <div className='main-display'>
      <nav>

      </nav>
      <div className="table-display">
        <Routes>
          <Route path='/' element={<DataContextProvider><Table /></DataContextProvider>} />
          <Route path='/:id' element={<DataContextProvider><Table /></DataContextProvider>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
