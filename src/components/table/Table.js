import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { PlantDataContext } from '../../contexts/plantData';
import { PlantData2Context } from '../../contexts/plantData2';
import { NonsenseDataContext } from '../../contexts/nonsenseData';
import './Table.css'


function Table({trueFilter, currentData}) {

    const { id } = useParams();
    // const [filter, setFilter] = useState({})
    const plantData = useContext(PlantDataContext);
    const plant2Data = useContext(PlantData2Context)
    const nonsenseData = useContext(NonsenseDataContext)
    const [tableData, setTableData] = useState(plantData)
    const [filterCategories, setFilterCategories] = useState([])

    useEffect(() => {
        if (trueFilter.usingData == 'Plant') {
            setTableData(plantData)
        } else if (trueFilter.usingData == 'Plant2') {
            setTableData(plant2Data)
        } else if (trueFilter.usingData == 'Nonsense') {
            setTableData(nonsenseData)
        }
    }, [trueFilter.usingData])

    useEffect(() => {
        setFilterCategories(Object.keys(trueFilter.filters))
    }, [trueFilter])


    if (Object.keys(trueFilter.filters).length) {
        return (
            <div className='table-center'>
                <table>
                    <thead>
                        <tr className='table-headers'>
                            {Object.keys(tableData[0]).map(key => {
                                return (
                                <th key={key} style={{width: `${100/(Object.keys(tableData[0]).length)}%`}}>{key.toUpperCase()}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData
                            .filter(data => { 
                                const filterSet = {}
                                filterCategories.forEach((filter) => {
                                    if (trueFilter.filters[filter].length > 0) {
                                            filterSet[filter] = trueFilter.filters[filter].includes(data[filter])
                                    } else {
                                        filterSet[filter] = true
                                    }
                                })
                                let filtered = false
                                let index = 0
                                while (filtered == false && index < filterCategories.length) {
                                    if (!filterSet[filterCategories[index]]) {
                                        filtered = true
                                    }
                                    index ++
                                }
                                if (filtered ==  true) {
                                    return false
                                } else {
                                    return true
                                }
                            })
                            .map((data, index) => {                            
                                return (
                                <tr key={index} className='table-rows'>
                                    {Object.keys(data).map(key => {
                                        return (
                                        <td key={key}  style={{width: `${100/(Object.keys(tableData[0]).length)}%`}}>{data[key]}</td>
                                        )
                                    })}
                                </tr>
                                ) 
                            })}
                    </tbody>
                    
                </table>
            </div>
        );
    }
    
}

export default Table;