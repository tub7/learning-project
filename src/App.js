import React, { useReducer, useState } from "react";
import Funcomp from "./funcomp.js";
import ThemeProvider from "./ThemeContext.js";
import Todo from "./todo.js";

export const ACTIONS = {
    ADD: "ADD",
    CHECK: "CHECK",
    DELETE: "DELETE",
};

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD:
            return [...todos, newTodo(action.payload.name)];
        case ACTIONS.CHECK:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        case ACTIONS.DELETE:
            return todos.filter((todo) => todo.id !== action.payload.id);
        default:
            return todos;
    }
}
function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
}

function App() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (name !== "") {
            dispatch({ type: ACTIONS.ADD, payload: { name: name } });
            setName("");
        } else return;
    }

    return (
        <>
            <div>
                <ThemeProvider>
                    <Funcomp />
                </ThemeProvider>
            </div>
            <div>
                <ul>
                    {todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            dispatch={dispatch}
                            complete={todo.complete}
                        />
                    ))}
                </ul>
                <form onSubmit={handleSubmit}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </form>
                {/* <button onClick={inc}>+</button>
                <span>{state.count}</span>
                <button onClick={dec}>-</button> */}
            </div>
        </>
    );
}

export default App;
