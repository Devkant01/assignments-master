import { useState, useMemo } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    // m-1
    // var expensiveValue = 1;
    // useMemo(() => {
    //     for (let i = 1; i <= input; i++){
    //         expensiveValue = expensiveValue * i;
    //     }
    // },[input])
    
    // m-2
    function factorial(n) {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    const expensiveValue = useMemo(() => factorial(input), [input]);
    // console.log(expensiveValue); //getting JSON.parse error because of this console 😅
    // Your solution ends here

    return (
        <div>
            <input 
                {
                
                }
                type="number" 
                value={input}
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue ?? 0}</p>
        </div>
    );
}