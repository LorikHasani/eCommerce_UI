function ButtonOutline({ onClick, children, className }) {
  return (
    <button onClick={onClick} type="submit" className={className}>
      {children}
    </button>
  );
}

export default ButtonOutline;
