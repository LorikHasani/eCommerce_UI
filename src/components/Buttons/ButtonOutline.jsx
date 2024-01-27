function ButtonOutline({ onClick, children, className }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`flex  py-4 px-14 justify-center rounded-md bg-transparent font-semibold border-2 leading-6 hover:bg-secondaryColor ${className}`}
    >
      {children}
    </button>
  );
}

export default ButtonOutline;
