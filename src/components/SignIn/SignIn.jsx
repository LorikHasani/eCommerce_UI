import { Link } from "react-router-dom";
import { logo } from "../../assets/img";
import Input from "../Utilities/Input";
import Logo from "../Logo/Logo";

function SignIn() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo className={"mx-auto h-10 w-auto"} />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <Input label={"Email address"} inputId={"email"} type={"email"} />
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-fontMain font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-fontMain">
                  <Link
                    to="/forgot-password"
                    className="font-semibold text-primaryBlack hover:text-secondaryColor"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="indent-[11px] outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryBlack sm:text-fontMain sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primaryBlack px-3 py-1.5 text-fontMain font-semibold leading-6 text-white shadow-sm hover:bg-secondaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-fontMain text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="font-semibold leading-6 text-primaryBlack hover:text-secondaryColor"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignIn;
