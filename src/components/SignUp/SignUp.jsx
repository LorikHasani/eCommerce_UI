import { Link } from "react-router-dom";
import { logo } from "../../assets/img";
import Input from "../Utilities/Input";

function SignUp() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Logo" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <Input label={"Username"} inputId={"username"} type={"text"} />

            <Input label={"Email"} inputId={"email"} type={"email"} />

            <Input label={"Password"} inputId={"password"} type={"password"} />
            <Input
              label={"Confirm password"}
              inputId={"confirmPassword"}
              type={"password"}
            />
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primaryBlack px-3 py-1.5 text-fontMain font-semibold leading-6 text-white shadow-sm hover:bg-secondaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-fontMain text-gray-500">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="font-semibold leading-6 text-primaryBlack hover:text-secondaryColor"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
