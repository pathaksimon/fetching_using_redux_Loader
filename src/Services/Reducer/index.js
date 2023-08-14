const initialState = {
  loading: false,
  Data: [],
  error: '',
  LatuData: [],
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fetching':
      return {
        ...state,
        loading: true,
      }
    case 'sucess':
      return {
        ...state,
        loading: false,
        Data: action.payload,
        error: '',
      }
    case 'Latestsucess':
      return {
        ...state,
        loading: false,
        LatuData: action.payload,
        error: '',
      }
    case 'failure':
      return {
        loading: false,
        Data: {},
        error: action.payload,
      }
    default:
      return state
  }
}

export default Reducer
