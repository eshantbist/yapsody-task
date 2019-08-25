const initialState = {
  tasks:{},
}

const TestReducer=(state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TASKS':
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default TestReducer;
