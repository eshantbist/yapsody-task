const initialState = {
  isModalOpen:false,
  tasks:[    
        {
            taskName:"Test task 1",
            taskDescription:"Test task description",
        },
        {
            taskName:"Test task 2",
            taskDescription:"Test task description",
        },
        {
            taskName:"Test task 3",
            taskDescription:"Test task description",
        },
    ]
}

const TestReducer=(state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TASK_MODAL':
      return {
        ...state,
        isModalOpen:action.val,
      }
    
    case 'ADD_TASK':
        return{
            ...state,
            tasks: state.tasks.concat(action.item)
        }

    default:
      return state
  }
}

export default TestReducer;
