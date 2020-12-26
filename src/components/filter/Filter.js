import React from 'react'
import Inputs from './inputs/Inputs'
import Button from './buttons/Button'
import { Link } from 'react-router-dom'

const Filter = ({ state, searchQuery, dispatch }) => {
  return (
    <>
      <Inputs
        inputs={state.inputs}
        dispatch={dispatch}
      />
      <Link to={`/search`}>
        <Button
          className="btn-success"
          text="Поиск"
          click={searchQuery}
        />
      </Link>
    </>
  )
}

export default Filter