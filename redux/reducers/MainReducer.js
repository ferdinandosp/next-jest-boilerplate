import store from '../stores/MainStore';

export default function reducer(state = store, action) {
  switch (action.type) {
    case 'SET_HOMETEXT':
      return {
        ...state,
        home: action.value
      };
    default:
      return state;
  }
}
