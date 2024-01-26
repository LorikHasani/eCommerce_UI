import { Link } from "react-router-dom";
import { logo } from "../../assets/img";

function Logo({ width, height, className, onClick }) {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="logo"
        width={width}
        height={height}
        className={className}
        onClick={onClick}
      />
    </Link>
  );
}

export default Logo;
