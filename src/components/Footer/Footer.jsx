import Logo from "../Logo/Logo";

function Footer() {
  return (
    <footer className="flex items-end w-full text-textFooter bg-primaryBlack body-font">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a className="flex items-center justify-center font-medium text-textFooter title-font md:justify-start">
            <Logo />
          </a>
          <p className="mt-2 text-sm text-textFooter">Design, Code and Ship!</p>
          <div className="mt-4">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a className="text-textFooter cursor-pointer hover:text-textFooter">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-textFooter cursor-pointer hover:text-textFooter">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-textFooter cursor-pointer hover:text-textFooter">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-textFooter cursor-pointer hover:text-textFooter">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-textFooter uppercase title-font">
              About
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-textFooter cursor-pointer hover:text-textFooter">
                  Company
                </a>
              </li>
              <li className="mt-3">
                <a className="text-textFooter cursor-pointer hover:text-textFooter">
                  Careers
                </a>
              </li>
              <li className="mt-3">
                <a className="text-textFooter cursor-pointer hover:text-textFooter">
                  Blog
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-textFooter uppercase title-font">
              Support
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-textFooter cursor-pointer hover:text-textFooter">
                  Contact Support
                </a>
              </li>
              <li className="mt-3">
                <a className="text-textFooter cursor-pointer hover:text-textFooter">
                  Help Resources
                </a>
              </li>
              <li className="mt-3">
                <a className="text-textFooter cursor-pointer hover:text-textFooter">
                  Release Updates
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-textFooter uppercase title-font">
              Platform
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-textFooter cursor-pointer hover:text-textFooter">
                  Terms &amp; Privacy
                </a>
              </li>
              <li className="mt-3">
                <a className="text-textFooter cursor-pointer hover:text-textFooter">
                  Pricing
                </a>
              </li>
              <li className="mt-3">
                <a className="text-textFooter cursor-pointer hover:text-textFooter">
                  FAQ
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-textFooter uppercase title-font">
              Contact
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-textFooter cursor-pointer hover:text-textFooter">
                  Send a Message
                </a>
              </li>
              <li className="mt-3">
                <a className="text-textFooter cursor-pointer hover:text-textFooter">
                  Request a Quote
                </a>
              </li>
              <li className="mt-3">
                <a className="text-textFooter cursor-pointer hover:text-textFooter">
                  +123-456-7890
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;