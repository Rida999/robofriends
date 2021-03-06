import React from 'react'

export default function SearchBox({onSearchChange}) {
    return (
        <div className='pa2 grow'>
            <input
            type='search'
            placeholder='search robots' 
            className='pa3 ba b--green bg-lightest-blue'
            onChange={onSearchChange} />
        </div>
    )
}
