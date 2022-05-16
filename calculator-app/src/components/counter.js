import { useEffect, useState } from "react";

function Counter({ initCount }) {
    const [count, setCount] = useState(initCount);
    let numbers = [...Array(9).keys()];

    function increaseCountBy1() {
        setCount(currCount => currCount + 1)
    }

    function setCounter(value) {
        console.log(value)
        setCount(value)
    }

    useEffect(() => {

    }, [count])

    return (
        <div>
            <span> {count} </span>
            <br></br>
            {
                numbers.map(el => 
                <button onClick={() => setCounter(el)}>
                <span> {el} </span>
                </button>)
            }
        </div>
    )
}

export default Counter