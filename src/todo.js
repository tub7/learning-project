import React from "react";
import { ACTIONS } from "./App.js";

export default function Todo({ todo, dispatch, complete }) {
    return (
        <>
            <li key={todo.id} style={{ color: complete ? "#CCC" : "#000" }}>
                {todo.name}
            </li>
            <button
                onClick={() => {
                    dispatch({
                        type: ACTIONS.DELETE,
                        payload: { id: todo.id },
                    });
                }}
            >
                del
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: ACTIONS.CHECK,
                        payload: { id: todo.id },
                    });
                    console.log(complete);
                }}
            >
                check
            </button>
        </>
    );
}
