import {useState, useEffect} from "react";

function Hello() {
    function hiFunction() {
        console.log("hi");
        return byeFunction;
    }

    function byeFunction() {
        console.log("bye");
    }

    useEffect(hiFunction, []);
    return <h1>Hello</h1>;
}

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue(counter + 1);
    const onChange = (event) => {setKeyword(event.target.value)};

    const [showing, setShowing] = useState(false);
    const onShow = () => setShowing((prev) => !prev);

    useEffect(() => {
        console.log("I Run only Once");
    }, []);
    useEffect(() => {
        console.log("I run when 'keyword' changes");
    }, [keyword]);
    useEffect(() => {
        console.log("I run when 'counter' changes");
    }, [counter]);

    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onShow}>{showing ? "Hide" : "Show"}</button>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search Here" />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;
