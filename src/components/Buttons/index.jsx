import './button.css'
const Buttons = ({increment, decrement, count}) => {
    return(
        <div role="button-wrapper">
        <button onClick={increment} className="increment">Increment</button>
        <button style={count === 0 ? {display : "none"} : {}} onClick={decrement}>Decrement</button>
      </div>
    )
}

export default Buttons