import { useNavigate } from "react-router-dom";
import backgroundImg from "../assets/contact-us-customer-service-sketch-doodle-icons-seamless-pattern-vector-illustration-2JB18KT 1.png";
import imageSrc from "../assets/Group 1.png";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center relative">
      <div
        className="absolute inset-0 bg-repeat bg-center w-full h-full"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>
      <div className="absolute left-0 top-0 h-full w-1/2 overflow-hidden">
        <div className="absolute h-full w-full bg-primary rounded-r-full"></div>
      </div>
      <div className="absolute left-10 top-0 h-full w-1/2 flex items-center justify-center">
        <div className="relative w-full p-8">
          <p className="font-futura text-[50px] leading-[73px] font-bold text-white">
            Hi there,
          </p>
          <p className="font-futura text-[35px] leading-[55px] font-regular text-white">
            Welcome to our <br></br>contacts portal
          </p>
          <form className="mt-11">
            <div className="mb-[38px]">
              <input
                type="email"
                id="email"
                name="email"
                className="w-1/2 min-w-1/2 px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500 placeholder:font-futura placeholder:text-primary placeholder:font-[25px] placeholder:leading-[50px] placeholder:pl-4"
                placeholder="e-mail"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                className="w-1/2 min-w-1/2 px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500 placeholder:font-futura placeholder:text-primary placeholder:font-[25px] placeholder:leading-[50px] placeholder:pl-4"
                placeholder="password"
              />
            </div>
            <div className="flex justify-start items-center mt-11 align-middle">
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-full border-white px-6 border-2 hover:bg-blue-600 transition duration-200 font-futura text-[25px] leading-[50px] font-regular"
              >
                login
              </button>
              <span className="h-full mx-4 font-futura text-[25px] leading-[50px] font-regular text-white">
                or
              </span>
              <button
                type="button"
                onClick={() => {
                  navigate("/register");
                }}
                className="pl-6 bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 transition duration-200 font-futura text-[25px] leading-[50px] font-regular underline"
              >
                Click here to Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute top-1/2 left-[60%] transform -translate-y-1/2">
        <img src={imageSrc} alt="Your Image" className="w-64 h-auto" />
      </div>
    </div>
  );
}

export default LoginPage;
