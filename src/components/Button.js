const Button = ({ btnText, btnHandler }) => {
  return <button onClick={btnHandler}>{btnText}</button>;
};

export default Button;
