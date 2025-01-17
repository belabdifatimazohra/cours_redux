// Import constants actions
import {ADD,DELETE,EDIT} from '../Constants/ActionTypes';
// Initialise the state to an empty array
const initialState = {todos: []};

const TodoReducer = (state = initialState, action) =>{
    // Used to update the state each time the action change
    let newState ;
    // Change the state  according to the action CAPITAL LETTRES
    switch (action.type){
        // Add to the list the new todo
        case ADD:
            return { todos: [...state.todos, action.payload] };
        case EDIT:
            newState = [...state.todos];
            // Find the index of the item to edit
            const index = newState.findIndex((elem) => elem.id === action.payload.id);
            newState[index] = action.payload;
            return{todos: newState}
        case DELETE:
            // Filter the list # to the one deleted and return it as the new state of the todo list
            newState = state.todos.filter((todo) => todo.id != action.payload.id);
            return {todos: newState};
       
        default:
            return state;
    }
}
export default TodoReducer;