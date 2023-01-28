import React, { createContext } from 'react';

const PlantDataContext = createContext();

function PlantDataContextProvider({children}) {

    

    const DEFAULT_DATA = [
        {
            name: 'orange',
            type: 'fruit',
            color: 'orange',
            flavor: 'sweet'
        },
        {
            name: 'apple',
            type: 'fruit',
            color: 'red',
            flavor: 'sweet'
        },
        {
            name: 'lemon',
            type: 'fruit',
            color: 'yellow',
            flavor: 'sour'
        },
        {
            name: 'grapefruit',
            type: 'fruit',
            color: 'orange',
            flavor: 'sour'
        },
        {
            name: 'banana',
            type: 'fruit',
            color: 'yellow',
            flavor: 'sweet'
        },
        {
            name: 'lime',
            type: 'fruit',
            color: 'green',
            flavor: 'sour'
        },
        {
            name: 'cherry',
            type: 'fruit',
            color: 'red',
            flavor: 'sweet'
        },
        {
            name: 'grapes',
            type: 'fruit',
            color: 'purple',
            flavor: 'sweet'
        },
        {
            name: 'kiwi',
            type: 'fruit',
            color: 'brown',
            flavor: 'sweet'
        },
        {
            name: 'carrot',
            type: 'vegetable',
            color: 'orange',
            flavor: 'sweet'
        },
        {
            name: 'broccoli',
            type: 'vegetable',
            color: 'green',
            flavor: 'bitter'
        },
        {
            name: 'corn',
            type: 'vegetable',
            color: 'yellow',
            flavor: 'sweet'
        },
        {
            name: 'red pepper',
            type: 'vegetable',
            color: 'red',
            flavor: 'sweet'
        },
        {
            name: 'green pepper',
            type: 'vegetable',
            color: 'green',
            flavor: 'bitter'
        },
        {
            name: 'chili pepper',
            type: 'vegetable',
            color: 'red',
            flavor: 'spicy'
        },
    ]

    return (
        <PlantDataContext.Provider value={DEFAULT_DATA}>
			{children}
		</PlantDataContext.Provider>
    );
}

export { PlantDataContext, PlantDataContextProvider };