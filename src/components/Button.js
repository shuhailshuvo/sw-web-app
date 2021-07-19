
const Button = (props) => {
  const { className, onClick, children} = props;

  return(
    <button
      className={className}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
