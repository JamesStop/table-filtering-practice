import './App.css';
import { Route, Routes, useNavigate } from 'react-router';
import Table from './components/table/Table';
import Filter from './components/filters/Filter';
import { PlantDataContextProvider } from './contexts/plantData';
import { PlantData2ContextProvider } from './contexts/plantData2';
import { useState } from 'react';
import { useEffect } from 'react';
import { NonsenseDataContextProvider } from './contexts/nonsenseData';




const compose = (providers) => 
  providers.reduce((Prev, Curr) => ({children}) => (
    <Prev>
      <Curr>{children}</Curr>
    </Prev>
  ))

const Provider = compose([
  PlantDataContextProvider,
  PlantData2ContextProvider, 
  NonsenseDataContextProvider
])

function App() {

  const navigate = useNavigate()
  const [trueFilter, setTrueFilter] = useState({
    usingData: 'Plant',
    filters: {}
  })

  const handleDataChange = (event) => {
    if (trueFilter.usingData != event.target.value) {
      setTrueFilter({usingData: event.target.value, filters: []})
      navigate('/')
    }
  }


  useEffect(() => {
    document.querySelector(`#${trueFilter.usingData}`).checked = true
  }, [trueFilter.usingData])

  

  return (
    <div className='main-display'>
      <nav className="filter-table">
        <Routes>
          <Route path='/' element={
            <Provider>
              <Filter trueFilter={trueFilter} setTrueFilter={setTrueFilter}/>
            </Provider>}
          />
          <Route path='/:id' element={
            <Provider>
              <Filter trueFilter={trueFilter} setTrueFilter={setTrueFilter}/>
            </Provider>}
          />
        </Routes>
      </nav>
      <nav className="data-selectors">
        <form action="" className="data-selector-form">
          <fieldset>
            <label htmlFor="Plant">
              <input type="radio" id="Plant" name="data" value="Plant" onClick={handleDataChange}/>
              Plant 1
            </label>
            <label htmlFor="Plant2">
              <input type="radio" id="Plant2" name="data" value="Plant2" onClick={handleDataChange}/>
              Plant 2
            </label>
            <label htmlFor="Nonsense">
              <input type="radio" id="Nonsense" name="data" value="Nonsense" onClick={handleDataChange}/>
              Nonsense
            </label>
          </fieldset>
        </form>
      </nav>
      <div className="table-display">
        <Provider>
          <Table trueFilter={trueFilter} />
        </Provider>
      </div>
    </div>
  );
}

export default App;
