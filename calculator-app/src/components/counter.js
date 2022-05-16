import { useEffect, useState } from "react";

function Counter({ initCount }) {
    const [count, setCount] = useState(initCount); //display
    const [counter, setCounter] = useState(0); //counter calculation
    const [processedNumber, setProcessedNumber] = useState(0);
    const [isReset, setReset] = useState(false);
    const [isAddition, setIsAddition] = useState(false);

    let numbers = [...Array(9).keys()];

    function setFinalized(e) {
        e.preventDefault();

        //Handle edge case scenario: 52+10+=,
        if(isAddition) {
            setCount(counter);
        } else {
            setCount(counter + processedNumber);
            setCounter(currCounter => currCounter + processedNumber)
        }
        setProcessedNumber(0)
        
        setReset(true);
    }

    function setAddition() {
        setCounter(currCounter => {
            if (isReset) {
                setReset(false);
                return currCounter
            }
            return currCounter + processedNumber
        })
        setProcessedNumber(0)
        setIsAddition(true);

    }

    function setCounterSeries(value, e) {
        e.preventDefault();
        let displayValue = value
        setCount(currCount => {
            if (currCount == 0 || currCount == '0' || isAddition) {
                setIsAddition(false)
                setProcessedNumber(parseInt(displayValue))
                return value
            } else if (isReset) {
                setCounter(0);
                setReset(false);
                return value
            }

            displayValue = currCount.toString() + value
            setProcessedNumber(parseInt(displayValue))
            return displayValue
        })
        
    }

    useEffect(() => {
        //debugging purposes [displayCount, addition in operation, counter, equal is clicked, current process written]
        console.log(count, isAddition, counter, isReset, processedNumber)
    }, [count, isAddition, counter, isReset, processedNumber])

    return (
        <div>
            <span> {count} </span>
            <br></br>
            {
                numbers.map(el =>
                    <button key={el} onClick={(e) => setCounterSeries(el, e)}>
                        <span> {el} </span>
                    </button>)
            }
            <button onClick={() => setAddition()}>
                +
            </button>
            <button onClick={setFinalized}>
                =
            </button>
        </div>
    )
}

export default Counter