import React, {useEffect, useState, useContext} from 'react';
import { useParams, useNavigate } from 'react-router';
import { PlantDataContext } from '../../contexts/plantData';
import { PlantData2Context } from '../../contexts/plantData2';
import SingleOption from './SingleOption';
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
            setNewFilter(trueFilter.filters)
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
        if (!id) {
            setTrueFilter({usingData: trueFilter.usingData, filters: newFilter})
        }
    }, [Object.keys(newFilter).length])
    
    useEffect(() => {
        if (id && Object.keys(trueFilter.filters).length > 0) {
            setNewFilter(trueFilter.filters)
        }
    }, [newFilter])

    const handleSubmit = (event) => {
        event.preventDefault();
        setTrueFilter({usingData: trueFilter.usingData, filters: newFilter})
        let url = JSON.stringify(trueFilter)
        navigate(`/${url}`)
    }

    

    if (filtersOptions.length > 0 && filtersOptionsOptions.length > 0 && trueFilter.filters) {
        return (
            <form className='filter-form' onSubmit={handleSubmit}>
                <h1>Table Filter</h1>
                <section className='filter-options'>
                    {filtersOptions.map((options, index) => {
                        if (filtersOptionsOptions[index] && trueFilter.filters[options]) {
                            const optionsArray = Object.keys(filtersOptionsOptions[index])
                            return (
                                <fieldset key={`${options}field`} className='filter'>
                                    <legend>{options.toUpperCase()}</legend>
                                    {optionsArray.map((optionSingle) => {
                                        return (
                                            <SingleOption key={optionSingle} optionSingle={optionSingle} options={options} newFilter={newFilter} setNewFilter={setNewFilter} trueFilter={trueFilter}/>
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