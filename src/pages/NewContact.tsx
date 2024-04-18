import { useNavigate } from "react-router-dom";
import backgroundImg from "../assets/contact-us-customer-service-sketch-doodle-icons-seamless-pattern-vector-illustration-2JB18KT 1.png";
import { BiLogOutCircle } from "react-icons/bi";
import imageSrc from "../assets/Group 3.png";

function NewContact() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  const handleSubmit = () => {
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
          <p className="font-futura text-[50px] leading-[73px] font-bold text-white mb-10">
            New Contact,
          </p>
          <form>
            <div className="flex justify-between">
              <div className="mb-8 min-w-[50%]">
                <input
                  type="fullname"
                  id="fullname"
                  name="fullname"
                  className="px-4 w-[75%] py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500 placeholder:font-futura placeholder:text-primary placeholder:font-[25px] placeholder:leading-[50px] placeholder:pl-4"
                  placeholder="full name"
                />
              </div>
              <div className="mb-8  min-w-[50%] mx-auto">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="px-4 w-[75%] py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500 placeholder:font-futura placeholder:text-primary placeholder:font-[25px] placeholder:leading-[50px] placeholder:pl-4"
                  placeholder="e-mail"
                />
              </div>
            </div>
            <div className="flex justify-between mb-8">
              <div className="mb-4 min-w-[50%]">
                <input
                  type="phonenumber"
                  id="phonenumber"
                  name="phonenumber"
                  className="w-[75%] px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500 placeholder:font-futura placeholder:text-primary placeholder:font-[25px] placeholder:leading-[50px] placeholder:pl-4"
                  placeholder="phone number"
                />
              </div>
              <div className="mb-4 min-w-[50%]">
                <div className="mb-4 min-w-[50%] flex items-center">
                  <span className="mr-16 font-futura text-[20px] leading-[50px] font-thin text-white">
                    gender:
                  </span>
                  <label
                    htmlFor="male"
                    className="mr-10 font-futura text-[20px] leading-[50px] font-regular text-white"
                  >
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      className="mr-1 accent-primary"
                    />
                    male
                  </label>
                  <label
                    htmlFor="female"
                    className="font-futura text-[20px] leading-[50px] font-regular text-white"
                  >
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      className="mr-1  accent-primary bg-primary"
                    />
                    female
                  </label>
                </div>
              </div>
            </div>
            <button
              onSubmit={handleSubmit}
              className="bg-blue-500 text-white rounded-full border-white px-6 border-2 hover:bg-blue-600 transition duration-200 font-futura text-[25px] leading-[50px] font-regular mr-4"
            >
              add your first contact
            </button>
          </form>
          <div className="absolute bottom-5 -right-[12.5rem] flex justify-end align-middle items-center gap-2">
            <BiLogOutCircle className="font-futura text-[32.25px] leading-[50px] font-bold underline text-white" />
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

export default NewContact;
