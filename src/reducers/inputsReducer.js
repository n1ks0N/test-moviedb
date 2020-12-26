const initialState = {
  title: '',
  year: '',
  genres: {
    select: ['Любые', 'Lorem', 'Ipsum'],
    value: 'Любые'
  },
  rates: {
    select: ['8.0+', '6.0+', '4.0+', '2.0+', '0.0+'],
    value: '0.0+'
  },
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE-INPUT':
      if (action.name === 'genres' || action.name === 'rates') {
        return {
          ...state,
          [action.name]: {
            ...state[action.name],
            value: action.value
          }
        }
      } else {
        return {
          ...state,
          [action.name]: action.value
        }
      }
    default:
      return state
  }
}

export const changeActionCreator = (name, value) => ({ type: 'CHANGE-INPUT', name: name, value: value })

export default searchReducer