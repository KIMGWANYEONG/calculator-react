const Button = ({ name, onClickButton }) => {
  return (
    <button
      className={`w-16 h-8 border-b-2 border-r-2 border-black rounded-full flex justify-center items-center bg-white ${
        name === "+" && "bg-red-500"
      }`}
      onClick={onClickButton}
    >
      {name}
    </button>
  );
};

export default Button;
