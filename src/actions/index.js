import {ADD_TASK_MODAL,ADD_TASK} from './actionTypes'

export function toggleModal(val){
    return{
      type:ADD_TASK_MODAL,
      val
    }
  }

export function addNewTask(item){
return{
    type:ADD_TASK,
    item
}
}