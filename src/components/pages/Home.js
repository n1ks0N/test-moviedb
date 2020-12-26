import React from 'react'
import Filter from '../filter/Filter'
import Button from '../filter/buttons/Button'
import { Link } from 'react-router-dom'

const Home = ({ state, state: { inputs }, dispatch }) => {
  const searchQuery = () => {
    dispatch({
      type: 'SEARCH',
      title: inputs.title,
      genres: inputs.genres.value,
      rates: inputs.rates.value,
      year: inputs.year
    })
  }
  const searchList = () => {
    dispatch({
      type: 'SEARCH-LIST',
    })
  }
  return (
    <>
      <Filter
        state={state}
        dispatch={dispatch}
        searchQuery={searchQuery}
      />
      <Link to="/search">
        <Button
          className="btn-link btn-sm"
          text="Список фильмов"
          click={searchList}
        />
      </Link>
    </>
  )
}

export default Home