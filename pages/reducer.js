import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 10;
    case "subtract":
      return state - 10;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

export default function reducer() {
  const [state, func] = useReducer(reducer, initialState);

  return (
    <div>
      <h2 style={{fontSize: state}}>{state}</h2>
      <button onClick={() => func("add")}>
        add
      </button>
      <button onClick={() => func("subtract")}>
        subtract
      </button>
      <button onClick={() => func("reset")}>
        reset
      </button>
    </div>
  );
};
