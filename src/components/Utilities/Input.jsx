const Input = ({ label, inputId, name, type }) => {
  return (
    <>
      <div>
        <label
          htmlFor={inputId}
          className="block font-medium leading-6 text-gray-900 text-fontMain"
        >
          {label}
        </label>
        <div className="mt-2">
          <input
            id={inputId}
            name={name}
            type={type}
            required
            className="indent-[11px] outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryBlack sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </>
  );
};

export default Input;
