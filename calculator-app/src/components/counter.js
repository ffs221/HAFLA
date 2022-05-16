import { useEffect, useState } from "react";

function Counter({ initCount }) {
    const [count, setCount] = useState(initCount); //display
    const [counter, setCounter] = useState(initCount); //counter calculation
    const [isAddition, setIsAddition] = useState(false);

    let numbers = [...Array(9).keys()];

    function increaseCount(currCount, value) {
        setCounter(parseInt(currCount) + value)
        setIsAddition(false)
    }

    function setAddition(){
        setIsAddition(true)
    }

    function setFinalized(){
        setCount(counter)
    }

    function setCounterSeries(value) {
        setCount(currCount => {
            if(isAddition) {
                increaseCount(currCount, value)
                return value
            } else {
                if(currCount == 0) {
                    return value
                }
                return currCount.toString() + value
            }
        })
    }

    useEffect(() => {
        console.log(count, isAddition)
    }, [count,isAddition])

    return (
        <div>
            <span> {count} </span>
            <br></br>
            {
                numbers.map(el => 
                <button onClick={() => setCounterSeries(el)}>
                <span> {el} </span>
                </button>)
            }
            <button onClick={setAddition}> 
                +   
            </button>
            <button onClick={setFinalized}> 
                =
            </button>
        </div>
    )
}

export default Counter