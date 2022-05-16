import { useEffect, useState } from "react";

function Counter({ initCount }) {
    const [count, setCount] = useState(initCount);
    const [isAddition, setIsAddition] = useState(false);

    let numbers = [...Array(9).keys()];

    function increaseCount(currCount, value) {
        setCount(parseInt(currCount) + value)
        setIsAddition(false)
    }

    function setAddition(){
        setIsAddition(true)
    }

    function setCounterSeries(value) {
        setCount(currCount => {
            if(isAddition) {
                increaseCount(currCount, value)
                return
            } else {
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
        </div>
    )
}

export default Counter