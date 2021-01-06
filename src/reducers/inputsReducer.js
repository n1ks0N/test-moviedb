import { inputsValue } from '../constants/inputsValue';
const initialState = {
	title: '',
	year: '',
	genres: {
		select: [
			{
				id: 0,
				value: 'любой'
			},
			{
				id: 28,
				value: 'боевик'
			},
			{
				id: 12,
				value: 'приключения'
			},
			{
				id: 16,
				value: 'мультфильм'
			},
			{
				id: 35,
				value: 'комедия'
			},
			{
				id: 80,
				value: 'криминал'
			},
			{
				id: 99,
				value: 'документальный'
			},
			{
				id: 18,
				value: 'драма'
			},
			{
				id: 10751,
				value: 'семейный'
			},
			{
				id: 14,
				value: 'фэнтези'
			},
			{
				id: 36,
				value: 'история'
			},
			{
				id: 27,
				value: 'ужасы'
			},
			{
				id: 10402,
				value: 'музыка'
			},
			{
				id: 9648,
				value: 'детектив'
			},
			{
				id: 10749,
				value: 'мелодрама'
			},
			{
				id: 878,
				value: 'фантастика'
			},
			{
				id: 10770,
				value: 'телевизионный фильм'
			},
			{
				id: 53,
				value: 'триллер'
			},
			{
				id: 10752,
				value: 'военный'
			},
			{
				id: 37,
				value: 'вестерн'
			}
		],
		value: {
			id: 0,
			name: 'любые'
		}
	},
	rates: {
		select: [
			{
				id: 8,
				value: '8.0+'
			},
			{
				id: 6,
				value: '6.0+'
			},
			{
				id: 4,
				value: '4.0+'
			},
			{
				id: 2,
				value: '2.0+'
			},
			{
				id: 0,
				value: '0.0+'
			}
		],
		value: {
			id: 0,
			value: '0.0+'
		}
	}
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_INPUT':
			if (state[action.name].value) {
				// лежат ли внутри свойства, другие свойства (проверка на содержание внутри свойства value)
				const val = state[action.name].select.filter((data) => {
					if (data.value === action.value) {
						return data;
					} else {
						return 0;
					}
				})[0]; // поиск по данному массиву из state; так как filter возвращает массив, берём первый элемент (он всегда один)
				return {
					...state,
					[action.name]: {
						...state[action.name],
						value: val
					}
				};
			} else {
				if (action.name === 'year') {
					if (action.value.length <= 4) { // год содержит не более 4 цифр
						return {
							...state,
							[action.name]: action.value
						};
					}
				} else {
					return {
						...state,
						[action.name]: action.value
					};
				}
			}
			return state;
		case 'RESET':
			return inputsValue;
		default:
			return state;
	}
};

export const changeActionCreator = (name, value) => ({
	type: 'CHANGE_INPUT',
	name: name,
	value: value
});

export const resetActionCreator = () => ({
	type: 'RESET'
});

export default searchReducer;
