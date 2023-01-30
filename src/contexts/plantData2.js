import React, { createContext } from 'react';

const PlantData2Context = createContext();

function PlantData2ContextProvider({children}) {

    

    const DEFAULT_DATA = [
        {
            name: 'woof',
            type: 'fruit',
            color: 'orange',
            flavor: 'sweet'
        },
        {
            name: 'woof',
            type: 'fruit',
            color: 'red',
            flavor: 'sweet'
        },
        {
            name: 'woof',
            type: 'fruit',
            color: 'yellow',
            flavor: 'sour'
        },
        {
            name: 'meow',
            type: 'fruit',
            color: 'orange',
            flavor: 'sour'
        },
        {
            name: 'meow',
            type: 'fruit',
            color: 'yellow',
            flavor: 'sweet'
        },
        {
            name: 'meow',
            type: 'fruit',
            color: 'green',
            flavor: 'sour'
        },
        {
            name: 'meow',
            type: 'fruit',
            color: 'red',
            flavor: 'sweet'
        },
        {
            name: 'meow',
            type: 'fruit',
            color: 'purple',
            flavor: 'sweet'
        },
        {
            name: 'meow',
            type: 'fruit',
            color: 'brown',
            flavor: 'sweet'
        },
        {
            name: 'woof',
            type: 'vegetable',
            color: 'orange',
            flavor: 'sweet'
        },
        {
            name: 'woof',
            type: 'vegetable',
            color: 'green',
            flavor: 'bitter'
        },
        {
            name: 'woof',
            type: 'vegetable',
            color: 'yellow',
            flavor: 'sweet'
        },
        {
            name: 'meow',
            type: 'vegetable',
            color: 'red',
            flavor: 'sweet'
        },
        {
            name: 'meow',
            type: 'vegetable',
            color: 'green',
            flavor: 'bitter'
        },
        {
            name: 'meow',
            type: 'vegetable',
            color: 'red',
            flavor: 'spicy'
        },
    ]

    return (
        <PlantData2Context.Provider value={DEFAULT_DATA}>
			{children}
		</PlantData2Context.Provider>
    );
}

export { PlantData2Context, PlantData2ContextProvider };