import axios from "axios";
import React, { useEffect, useReducer } from "react";
const initialState = {
  loading: true,
  post: {},

  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "fetch":
      return {
        loading: false,
        post: action.datas,
        error: "",
      };
    case "error":
      return {
        loading: false,
        post: {},
        error: "something went wrong",
      };
    default:
      return state;
  }
};
function UseReducerDataFetching() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => {
        dispatch({ type: "fetch", datas: response.data });
      })
      .catch((err) => {
        dispatch({ type: "error" });
      });
  });
  return (
    <div>
      {state.loading ? "loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default UseReducerDataFetching;
