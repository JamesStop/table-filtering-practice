import './App.css';
import { Route, Routes } from 'react-router';
import Table from './components/table/Table';
import Filter from './components/filters/Filter';
import { PlantDataContextProvider } from './contexts/plantData';
import { PlantData2ContextProvider } from './contexts/plantData2';
import { useState } from 'react';



const compose = (providers) => 
  providers.reduce((Prev, Curr) => ({children}) => (
    <Prev>
      <Curr>{children}</Curr>
    </Prev>
  ))

const Provider = compose([
  PlantDataContextProvider,
  PlantData2ContextProvider
])

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
          <Route path='/' element={<Provider><Table trueFilter={trueFilter} /></Provider>} />
          <Route path='/:id' element={<Provider><Table trueFilter={trueFilter}/></Provider>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
