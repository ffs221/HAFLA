import { useEffect, useState } from "react";

function Counter({ initCount }) {
    const [count, setCount] = useState(initCount)

    function increaseCountBy1() {
        setCount(currCount => currCount + 1)
    }

    useEffect(() => {

    }, [count])

    return (
        <div>
            <span> {count} </span>
            <br></br>
            <button onClick={increaseCountBy1}>
                <span> 1 </span>
            </button>
        </div>
    )
}

export default Counter