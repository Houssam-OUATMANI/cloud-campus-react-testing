import './button.css'
const Buttons = ({increment, decrement, count}) => {
    return(
        // eslint-disable-next-line jsx-a11y/aria-role
        <div role="button-wrapper">
        <button onClick={increment} className="increment">Increment</button>
        <button style={count === 0 ? {display : "none"} : {}} className="decrement" onClick={decrement}>Decrement</button>
      </div>
    )
}

export default Buttons