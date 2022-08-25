import "./counter.css";
const Counter = ({ count }) => {
  return (
    <p title="count" role="paragraph" className="count">
      {count} {count !== 1 ? "clicks" : "click"}
    </p>
  );
};

export default Counter;
