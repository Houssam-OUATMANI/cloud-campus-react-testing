import './form.css'
const Form = () => {
  return (
    <form className="form">
      <textarea placeholder="enter your message" required={true}></textarea>
      <button type="send">Send</button>
    </form>
  );
};

export default Form;
