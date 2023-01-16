import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { DataContext } from '../contexts/Data';
import './Table.css'

function Table(props) {

    const { id } = useParams();
    // const [filter, setFilter] = useState({})
    const data = useContext(DataContext);
    const [tableData, setTableData] = useState(data)


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
                    {tableData.map((plant, index) => {
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