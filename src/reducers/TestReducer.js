const initialState = {
  isModalOpen:false,
}

const TestReducer=(state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TASK_MODAL':
      return {
        ...state,
        isModalOpen:action.val,
      }

    default:
      return state
  }
}

export default TestReducer;
