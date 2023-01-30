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

  let currentData = 'Plant'

  const [trueFilter, setTrueFilter] = useState({
    type: [],
    color: [],
    flavor: [],
  })




  return (
    <div className='main-display'>
      <nav>
        <Routes>
          <Route path='/' element={
            <Provider>
              <Filter trueFilter={trueFilter} currentData={currentData} setTrueFilter={setTrueFilter}/>
            </Provider>}
          />
          <Route path='/:id' element={
            <Provider>
              <Filter trueFilter={trueFilter} currentData={currentData} setTrueFilter={setTrueFilter}/>
            </Provider>}
          />
        </Routes>
        
      </nav>
      <div className="table-display">
        <Provider>
          <Table trueFilter={trueFilter} currentData={currentData}/>
        </Provider>
      </div>
    </div>
  );
}

export default App;
