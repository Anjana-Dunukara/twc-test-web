import { useNavigate } from "react-router-dom";
import backgroundImg from "../assets/contact-us-customer-service-sketch-doodle-icons-seamless-pattern-vector-illustration-2JB18KT 1.png";
import { BiLogOutCircle } from "react-icons/bi";
import imageSrc from "../assets/Group 3.png";
import ContactRecord from "../components/ContactRecord"; // Assuming ContactRecord is your custom component for each contact record

function Contacts() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  // Sample data for contacts
  const contacts = [
    {
      id: 1,
      fullName: "John Doe",
      gender: "Male",
      email: "john@example.com",
      phoneNumber: "1234567890",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      gender: "Female",
      email: "jane@example.com",
      phoneNumber: "9876543210",
    },
    // Add more contact objects as needed
  ];

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center relative">
      {/* Your existing content */}
      <div
        className="absolute inset-0 bg-repeat bg-center w-full h-full"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>
      <div className="absolute mx-auto top-0 h-full w-full overflow-hidden">
        <div className="absolute h-full w-full bg-primary rounded-bl-full rounded-tr-full"></div>
      </div>
      <div className="absolute pt-14 top- h-full w-1/2 flex-col items-center justify-center">
        {/* Your existing content */}
        <div className="">
          <img
            src={imageSrc}
            alt="Your Image"
            className="w-auto h-auto mb-40"
          />
        </div>
        <div className="w-full">
          {/* Your existing content */}
          <div className="flex justify-between">
            <p className="font-futura text-[50px] leading-[73px] font-bold text-white">
              Contacts
            </p>
            <button
              onClick={() => navigate("/NewContact")}
              className="bg-blue-500 text-white rounded-full border-white px-6 border-2 hover:bg-blue-600 transition duration-200 font-futura text-[20px] leading-[50px] font-regular"
            >
              add your first contact
            </button>
          </div>
          {/* Render the table */}
          <div className="mt-8 rounded-3xl overflow-hidden border border-gray-300">
            <table className="w-full">
              <thead className="bg-white">
                <tr>
                  <th className="px-6 py-3 text-left text-primary text-lg font-bold"></th>
                  <th className="px-6 py-3 text-left text-primary text-lg font-bold">
                    full name
                  </th>
                  <th className="px-6 py-3 text-left text-primary text-lg font-bold">
                    gender
                  </th>
                  <th className="px-6 py-3 text-left text-primary text-lg font-bold">
                    email
                  </th>
                  <th className="px-6 py-3 text-left text-primary text-lg font-bold">
                    phone number
                  </th>
                  <th className="px-6 py-3 text-left text-primary text-lg font-bold"></th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <ContactRecord key={contact.id} contact={contact} />
                ))}
              </tbody>
            </table>
          </div>
          {/* Your existing content */}
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

export default Contacts;
