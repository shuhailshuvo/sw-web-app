
const Link = (props) => {
  const { className,  onClick, children, inline=true } = props;

  return(
    <>
      {
        inline
          ? <span
              className={className}
              onClick={onClick}
            >
              {children}
            </span>
          : <div
              className={className}
              onClick={onClick}
            >
              {children}
            </div>
      }
    </>
  );
};

export default Link;
