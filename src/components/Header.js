import React from 'react'
// using rafce snippet from ES7 library
import PropTypes from 'prop-types'
import Button from './Button'

// using function based component 

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1> {title} </h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'Add'} onClick={onAdd} />    {/* Assigning click as a prop */}
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}

Header.prototype = {
    title: PropTypes.string,
}

export default Header
