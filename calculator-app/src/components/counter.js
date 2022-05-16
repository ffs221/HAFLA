import { useEffect, useState } from "react";

function Counter({ initCount }) {
    const [count, setCount] = useState(initCount); //display
    const [counter, setCounter] = useState(initCount); //counter calculation
    const [isReset, setReset] = useState(false);
    const [isAddition, setIsAddition] = useState(false);

    let numbers = [...Array(9).keys()];

    function setFinalized(e) {
        e.preventDefault();
        setCount(counter);
        setReset(true);
    }

    function setCounterSeries(value, e) {
        e.preventDefault();
        let displayValue = null;
        setCount(currCount => {
            if (currCount == 0 || isAddition) {
                return value
            } else if (isReset) {
                setReset(false);
                return value

            }

            displayValue = currCount.toString() + value
            return displayValue
        })

        setCounter(currCounter => {
            if (count == 0 || isAddition) {
                setIsAddition(false)
                return currCounter + value
            }
            else if (isReset) {
                setReset(false);
                return value
            }
            return parseInt(displayValue)
        })
    }

    useEffect(() => {
        console.log(count, isAddition, counter, isReset)
    }, [count, isAddition, counter, isReset])

    return (
        <div>
            <span> {count} </span>
            <br></br>
            {
                numbers.map(el =>
                    <button onClick={(e) => setCounterSeries(el, e)}>
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