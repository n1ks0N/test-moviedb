import React from 'react'
import Filter from '../filter/Filter'
import List from '../list/List'

const Movies = ({ state, dispatch }) => {
  return (
    <>
      {/* <Filter
        state={state}
        dispatch={dispatch}
      />
      <List/> */}
      <h1>MOVIES</h1>
      <ul>
        {/* {state.search.result ! state.search.result.map(data => <li>{data.vote_count}</li>)} */}
      </ul>
    </>
  )
}

export default Movies