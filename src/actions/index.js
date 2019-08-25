import {ADD_TASK_MODAL} from './actionTypes'

export function toggleModal(val){
    return{
      type:ADD_TASK_MODAL,
      val
    }
  }