import React, { useState, useReducer } from "react";

//useReducer adds a lot more code and complexity. It's not really usefull for small projects but this is an example of it's use.
//useReducer is useful when the project is more complex and the state logic starts to get in the way of reading the render logic.

// useReducer callback function is defined outside the main app rendering function.
// This allows us to take state logic away from the rendering code.
// It has 2 parameters. The 1st is the current state. The 2nd is an action passed into dispatch.
// When dispatch is called, whatever is passed in will be assigned to the action variable and current state will be assigned to the state variable.
// reducer() will then return the updated state.

// SCREAMING_SNAKE_CASE is a convention from other languages to denote a constant.
// JavaScript doesn't have a constant as a primitive data type like other languages but I'm using the convention here as it's still useful and for the sake of the tutorial.
// This variable stores a list of the possible actios that can be passed to reducer()
// Storing actions as strings in the ACTION object makes it available to auto-complete reduces the chances oftypos in the strings

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',

}
 
function reducer(state, action) {
  // Use control logic to select which action is to be executed
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };

    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };

    // This default case just returns the state passed in if there is no action to perform.
    default:
      return state;
  }
}

export default function App() {
  // State variables
  // useReducer takes 2 parameters. 1st is a function to perform on state and 2nd is an intial value.
  // It returns an array with 2 elements. the 1st is the state and the 2nd is a function.
  // dispatch is a reference to the reducer() function and is used to update the state.

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const [count, setCount] = useState(0)

  function increment() {
    // This would setCount(prevCount => prevCount + 1) with useState()
    // Calling dispatch calls reducer()
    // The 1st argument passed into dispatch() is then passed as the action parameter in reducer()
    // We pass an object with a property of .type which is used to select control logic in reducer()
    // This way we can just call state logic from outside the rendering function.
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  // Render

  return (
    <>
      <button onClick={decrement}>-</button>
      {/* state is an object with a .count property */}
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}
 