import React, {useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router';
import { PlantDataContext } from '../../contexts/plantData';
import { PlantData2Context } from '../../contexts/plantData2';
import './Filter.css'


function Filter({trueFilter, setTrueFilter, currentData}) {

    const { id } = useParams()
    let data = useContext(PlantDataContext)

    const [filtersOptions, setFiltersOptions] = useState([])
    const [filtersOptionsOptions, setFiltersOptionsOptions] = useState([])
    const [newFilter, setNewFilter] = useState({})
    
    useEffect (() => {
        if (id) {
            console.log(id)
        }
    }, []);

    useEffect(() => {
        if (data.length && data.length > 0) {
            const allOptions = Object.keys(data[0])
            let confirmedOptions = []
            let confirmedOptionOptions = []
            let confirmedFilter = {}
            allOptions.map((option) => {
                let currentOptionOptions = {}
                data.map((data) => {
                    if (currentOptionOptions[data[option]]) {
                        currentOptionOptions[data[option]] += 1
                    } else {
                        currentOptionOptions[data[option]] = 1
                    }
                })
                if (Object.keys(currentOptionOptions).length != data.length && Object.keys(currentOptionOptions).length != 1) {
                    confirmedOptions = [...confirmedOptions, option]
                    confirmedFilter = {...confirmedFilter, [option]: []}
                    confirmedOptionOptions = [...confirmedOptionOptions, currentOptionOptions]
                }
            })
            setNewFilter(confirmedFilter)
            setFiltersOptions(confirmedOptions)
            setFiltersOptionsOptions(confirmedOptionOptions)
        }
        
        
    }, [])

    

    const handleSubmit = async(event) => {
        event.preventDefault();
        setTrueFilter(newFilter)
    }

    const handleChange = (event) => {
        const filterToChange = newFilter[event.target.name]
        if (filterToChange.includes(event.target.value)) {
            const index = filterToChange.indexOf(event.target.value)
            filterToChange.splice(index, 1)
        } else {
            filterToChange.push(event.target.value)
        }
        setNewFilter({ ...newFilter, [event.target.name]: filterToChange})
    }

    if (filtersOptions.length > 0 && filtersOptionsOptions.length > 0) {
        return (
            <form className='filter-form' onSubmit={handleSubmit}>
                <h1>Table Filter</h1>
                <section className='filter-options'>
                    {filtersOptions.map((options, index) => {
                        if (filtersOptionsOptions[index]) {
                            const optionsArray = Object.keys(filtersOptionsOptions[index])
                            return (
                                <fieldset key={`${options}field`} className='type-filter'>
                                    <legend>{options.toUpperCase()}</legend>
                                    {optionsArray.map((optionSingle) => {
                                        return (
                                            <label key={optionSingle} htmlFor={optionSingle}>
                                                <input type="checkbox" id={optionSingle} name={options} value={optionSingle} onChange={handleChange}/>
                                                {optionSingle}
                                            </label>
                                    )
                                    })}
                                </fieldset>
                            )
                        }
                    })}
                </section>
                <button className='filter-submit' type="submit">Submit</button>
            </form>
        );
    }
    
}

export default Filter;