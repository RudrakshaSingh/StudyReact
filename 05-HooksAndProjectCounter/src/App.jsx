import "./App.css";
import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(10);

    //we are giving reference of add value as we want to execute on pressing
    //addValue() will directly execute it
    const addValue = () => {
        if (counter >= 20) {
            return;
        }
        setCounter(counter + 1);
        setCounter((prevCounter) => prevCounter + 1);
    };
    const removeValue = () => {
        if (counter == 0) {
            return;
        }
        setCounter(counter - 1);
    };
    return (
        <>
            <h1>rudy {counter}</h1>
            <h1>Counter value: {counter}</h1>

            <button onClick={addValue}>Add value</button>
            <br />
            <button onClick={removeValue}>remove value</button>
        </>
    );
}

export default App;
