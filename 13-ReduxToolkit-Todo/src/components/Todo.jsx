import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const [editId, setEditId] = useState(null);
    const [newText, setNewText] = useState("");

    const handleEdit = (todo) => {
        setEditId(todo.id);
        setNewText(todo.text);
    };

    const handleUpdate = () => {
        dispatch(updateTodo({ id: editId, text: newText }));
        setEditId(null);
        setNewText("");
    };

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded" key={todo.id}>
                        <div className="text-white">
                            {editId === todo.id ? (
                                // If editId matches the current todo’s ID, an input field and "Save" button are displayed:Otherwise, just display the todo.text.
                                <>
                                    <input
                                        type="text"
                                        value={newText}
                                        onChange={(e) => setNewText(e.target.value)}
                                        className="mr-2 px-2 py-1 rounded bg-gray-700 text-white border border-gray-600"
                                    />
                                    <button
                                        onClick={handleUpdate}
                                        className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                                    >
                                        Save
                                    </button>
                                </>
                            ) : (
                                todo.text
                            )}
                        </div>
                        <div className="flex space-x-4">
                            {editId === todo.id ? (
                                <button
                                    onClick={() => setEditId(null)}
                                    className="text-white bg-gray-500 border-0 py-1 px-4 focus:outline-none hover:bg-gray-600 rounded text-md"
                                >
                                    Cancel
                                </button>
                            ) : (
                                <>
                                    <button
                                        onClick={() => dispatch(removeTodo(todo.id))}
                                        className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md flex items-center"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleEdit(todo)}
                                        className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md flex items-center"
                                    >
                                        Update
                                    </button>
                                </>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
