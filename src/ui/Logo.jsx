import { Link } from "react-router";
import { logoSvg } from "../assets";

export default function Logo() {
  return (
    <div>
      <Link to="/home">
        <div className="flex items-center gap-2">
          <img
            className="h-12 w-12 rounded-full"
            src={logoSvg}
            alt="egy railway logo"
          />
          <span className="mb-1 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-xl font-bold text-transparent">
            EgyRailway
          </span>
        </div>
      </Link>
    </div>
  );
}
