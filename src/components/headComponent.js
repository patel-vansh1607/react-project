import {useState} from "react"


function CounterComponent(){
    let [count, setCount] = useState(1)
    const addCounter = () => {
        setCount(count+=1)
    }

    const resetCounter = ()=>{
        setCount(0)
    }
    const tencounter = ()=> {
        setCount(count+10)
    }
    const minuscounter = () =>{
        if ( count ===0) {
            setCount(0)
        } else {
            setCount (count  -=1)
        }

    }   
    const minustencounter = () =>{
        if ( count ===0) {
            setCount(0)
        } else {
            setCount (count -=10)
        }
    }



    return(
        <div>
            <HeaderComponent/>
            <ParagraphComponent/>
            <h4>{count}</h4>
            <button onClick={addCounter}>Add Counter</button>
            <button onClick={resetCounter}> Reset Counter</button>
           < button onClick={tencounter}> Add 10 Points </button>
           <button onClick={minuscounter}> Minus 1 point</button>
           <button onClick={minustencounter}> Minus 10 point</button>
        </div>
    )
}


function HeaderComponent(){
    return (
        <h1>My First React Project </h1>
    )
}



function ParagraphComponent(){
    return(
        <h1>Click the button to increase the counter</h1>
    )
}


export default CounterComponent