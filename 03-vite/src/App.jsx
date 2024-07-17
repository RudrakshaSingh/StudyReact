import Chai from "./chai";

//how to insert variable-using curly braises directly
//we write an evaluated expression-final outcome of js evaluated
//we cannot write if else directly on return expression
//you can do it before /outside return
function App() {
    const username = "chai aur code";

    return (
        <>
            <Chai />
            <h1>chai aur react {username}</h1>
            <p>test para</p>
        </>
    );
}

export default App;
