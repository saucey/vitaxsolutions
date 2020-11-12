import { actionRow } from "aws-amplify"

const initState = {
  userLoggedIn: null,
  listSectors: [],
  epic: null,
  modalOpen: false
}

const Reducer = (state = initState, action) => {

  console.log(state, 'state in reducer')
  console.log(action, 'action in reducer')

  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userLoggedIn: {...action.userLoggedIn, loggedIn: true}
      }

    case 'LOGOUT':
      return {
        ...state,
        userLoggedIn: action.userLoggedIn
      }
    
    case 'INSERT_SECTORS':
      return {
        ...state,
        listSectors: [...action.listSectors]
      }
    
    case 'INSERT_SECTOR':
      return {
        ...state,
        listSectors: [...state.listSectors, action.listSectors]
      }
    
    case 'CLOSE_MODAL':
      return {
        ...state,
        modalOpen: action.modalOpen
      }

      // you can have as many case statements as you need

    default:
      return state
  }
}

export default Reducer
