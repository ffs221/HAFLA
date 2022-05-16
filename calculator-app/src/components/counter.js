import { useEffect, useState } from "react";

function Counter({ initCount }) {
    const [count, setCount] = useState(initCount); //display
    const [counter, setCounter] = useState(initCount); //counter calculation
    const [isAddition, setIsAddition] = useState(false);

    let numbers = [...Array(9).keys()];

    function setFinalized(e) {
        e.preventDefault();
        setCount(counter)
    }

    function setCounterSeries(value, e) {
        e.preventDefault();
        setCount(currCount => {
            if (currCount == 0 || isAddition) {
                return value
            }
            return currCount.toString() + value
        })

        setCounter(currCounter => {
            if (count == 0 || isAddition) {
                setIsAddition(false)
                return currCounter + value
            }
            return currCounter
        })
    }

    useEffect(() => {
        console.log(count, isAddition, counter)
    }, [count, isAddition, counter])

    return (
        <div>
            <span> {count} </span>
            <br></br>
            {
                numbers.map(el =>
                    <button onClick={(e) => setCounterSeries(el,e)}>
                        <span> {el} </span>
                    </button>)
            }
            <button onClick={() => setIsAddition(true)}>
                +
            </button>
            <button onClick={setFinalized}>
                =
            </button>
        </div>
    )
}

export default Counter