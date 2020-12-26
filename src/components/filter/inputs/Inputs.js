import React from 'react'
import Input from './types/Input'
import Select from './types/Select'

const Inputs = ({ dispatch, inputs: { title, year, genres, rates } }) => {
  const changeInput = ({ name, value }) => {
    dispatch({
      type: 'CHANGE-INPUT',
      name: name,
      value: value
    })
  }
  return (
    <>
      <Input
        type="text"
        name="title"
        text="Название фильма"
        placeholder="Побег из Шоушенка"
        value={title}
        event={changeInput}
      />
      <Select
        name="genres"
        text="Жанры"
        defaultValue={genres.value}
        value={genres.select}
        event={changeInput}
      />
      <Select
        name="rates"
        text="Рейтинг"
        defaultValue={rates.value}
        value={rates.select}
        event={changeInput}
      />
      <Input
        type="number"
        name="year"
        text="Год"
        placeholder="2020"
        value={year}
        event={changeInput}
      />
    </>
  )
}

export default Inputs