function ButtonOutline({ onClick, children, className }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`flex  py-4 px-14 justify-center rounded-md  font-semibold border leading-6 hover:bg-secondaryColor ${className}`}
    >
      {children}
    </button>
  );
}

export default ButtonOutline;
