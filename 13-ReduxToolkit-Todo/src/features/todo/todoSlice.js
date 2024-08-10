import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid is for generating unique id

const initialState = {
    todos: [{ id: 1, text: "Hello World" }],
};

//the name todo is the name of the property itself
//second thing is the initial state of slice
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo); //updating state
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload;
            });
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            state.todos = state.todos.map((todo) => {
                return todo.id === id ? { ...todo, text } : todo;
            });
        },
    },
});
//we give property and function in reducers

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;
//exported individual functionality

export default todoSlice.reducer;
