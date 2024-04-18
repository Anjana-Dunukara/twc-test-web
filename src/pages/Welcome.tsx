import { useNavigate } from "react-router-dom";
import backgroundImg from "../assets/contact-us-customer-service-sketch-doodle-icons-seamless-pattern-vector-illustration-2JB18KT 1.png";
import { BiLogOutCircle } from "react-icons/bi";
import imageSrc from "../assets/Group 3.png";

function Welcome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center relative">
      <div
        className="absolute inset-0 bg-repeat bg-center w-full h-full"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>
      <div className="absolute mx-auto top-0 h-full w-full overflow-hidden">
        <div className="absolute h-full w-full bg-primary rounded-bl-full rounded-tr-full"></div>
      </div>
      <div className="absolute pt-14 top- h-full w-1/2 flex-col items-center justify-center">
        <div className="">
          <img
            src={imageSrc}
            alt="Your Image"
            className="w-auto h-auto mb-40"
          />
        </div>
        <div className="w-full">
          <p className="font-futura text-[50px] leading-[73px] font-bold text-white">
            Welcome,
          </p>
          <p className="font-futura text-[35px] leading-[55px] font-regular text-white mb-14">
            This is where your contacts will live. Click the button below to add
            a new contact.
          </p>
          <button
            onClick={() => navigate("/NewContact")}
            className="bg-blue-500 text-white rounded-full border-white px-6 border-2 hover:bg-blue-600 transition duration-200 font-futura text-[25px] leading-[50px] font-regular mr-4"
          >
            add your first contact
          </button>
          <div className="absolute bottom-5 -right-[12.5rem] flex justify-end align-middle items-center gap-2">
            <BiLogOutCircle className="font-futura text-[25px] leading-[50px] font-regular underline text-white" />
            <button
              type="button"
              onClick={handleLogout}
              className="bg-blue-500 text-white py-2 hover:bg-blue-600 transition duration-200 font-futura text-[25px] leading-[50px] font-regular underline"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
