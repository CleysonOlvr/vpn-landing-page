import Image from "next/image";
import logo from "../../public/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="flex flex-row justify-between items-center">
        <Image src={logo} alt="SmartVPN Logo" width={146} height={36} />
        <div className="font-normal text-base text-gray-600 flex flex-row space-between gap-10">
          <a href="/">About</a>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Testemonials</a>
          <a href="/">Help</a>
        </div>
        <div className="">
          <a href="/" className="font-medium text-medium text-slate-900 mr-7">
            Sign In
          </a>
          <a
            href="/"
            className="font-medium text-base text-rose-500 border border-rose-500 rounded-full px-11 py-3 hover:brightness-200 transition duration-300 ease-in-out"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
