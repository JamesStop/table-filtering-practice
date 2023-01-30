import React, {useEffect, useState, useContext} from 'react';
import { useParams, useNavigate } from 'react-router';
import { PlantDataContext } from '../../contexts/plantData';
import { PlantData2Context } from '../../contexts/plantData2';
import useToString from '../../hooks/toString';
import './Filter.css'



function Filter({trueFilter, setTrueFilter, currentData}) {

    const { id } = useParams()
    let plantData = useContext(PlantDataContext)
    let plant2Data = useContext(PlantData2Context)
    const [data, setData] = useState(plantData)
    const [filtersOptions, setFiltersOptions] = useState([])
    const [filtersOptionsOptions, setFiltersOptionsOptions] = useState([])
    const [newFilter, setNewFilter] = useState({})
    
    const navigate = useNavigate()
    
    useEffect (() => {
        if (id) {
            setTrueFilter(JSON.parse(id))
        }
    }, []);

    useEffect(() => {
        if (trueFilter.usingData == 'Plant') {
            setData(plantData)
        } else if (trueFilter.usingData == 'Plant2') {
            setData(plant2Data)
        }
    }, [trueFilter.usingData])

    useEffect(() => {
        setFiltersOptions([])
        setFiltersOptionsOptions([])
        setNewFilter({})
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
            setFiltersOptions(confirmedOptions)
            setFiltersOptionsOptions(confirmedOptionOptions)
            setNewFilter(confirmedFilter)      
        }

    }, [data])

    useEffect(() => {
        setTrueFilter({usingData: trueFilter.usingData, filters: newFilter})
        if (id) {
            setTrueFilter(JSON.parse(id))
            setNewFilter(trueFilter.filters)
        }
    }, [Object.keys(newFilter).length])
    

    useEffect(() => {
        
    }, [trueFilter])

    const handleSubmit = (event) => {
        event.preventDefault();
        setTrueFilter({usingData: trueFilter.usingData, filters: newFilter})
        let url = JSON.stringify(trueFilter)
        navigate(`/${url}`)
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