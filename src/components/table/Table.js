import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { DataContext } from '../../contexts/Data';
import './Table.css'

function Table({trueFilter}) {

    const { id } = useParams();
    // const [filter, setFilter] = useState({})
    const data = useContext(DataContext);
    const [tableData, setTableData] = useState(data)
    const filterCategories = ['type', 'color', 'flavor']

    useEffect (() => {
        if (id) {
            console.log(id)
        }
    }, []);

    return (
        <div className='table-center'>
            <table>
                <thead>
                    <tr className='table-headers'>
                        <th className='header-name'>NAME</th>
                        <th className='header-type'>TYPE</th>
                        <th className='header-color'>COLOR</th>
                        <th className='header-flavor'>FLAVOR</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData
                        .filter(plant => { 
                            if (trueFilter.type.length > 0) {
                                return trueFilter.type.includes(plant.type)
                            } else {
                                return plant
                            }
                        })
                        .filter(plant => {
                            if (trueFilter.color.length > 0) {
                                return trueFilter.color.includes(plant.color)
                            } else {
                                return plant
                            }
                        })
                        .filter(plant => {
                            if (trueFilter.flavor.length > 0) {
                                return trueFilter.flavor.includes(plant.flavor)
                            } else {
                                return plant
                            }
                        })
                        .map((plant, index) => {
                            return (
                            <tr key={index} className='table-rows'>
                                <td>{plant.name}</td>
                                <td>{plant.type}</td>
                                <td>{plant.color}</td>
                                <td>{plant.flavor}</td>
                            </tr>
                            ) 
                        })}
                </tbody>
                
            </table>
        </div>
    );
}

export default Table;