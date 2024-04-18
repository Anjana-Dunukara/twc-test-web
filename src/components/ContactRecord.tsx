import maleAvatar from "../assets/male.png";
import femaleAvatar from "../assets/female.png";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Contact {
  id: number;
  fullName: string;
  gender: string;
  email: string;
  phoneNumber: string;
}

function ContactRecord({ contact }: { contact: Contact }) {
  const { fullName, gender, email, phoneNumber } = contact;

  const handleEdit = () => {};

  const handleDelete = () => {};

  const avatarSrc = gender === "Male" ? maleAvatar : femaleAvatar;

  return (
    <tr className="bg-white">
      <td className="px-6 py-4 whitespace-nowrap">
        <img
          src={avatarSrc}
          alt={fullName}
          className="h-10 w-10 rounded-full"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-primary font-bold">
        {fullName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-primary font-bold">
        {gender}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-primary font-bold">
        {email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-primary font-bold">
        {phoneNumber}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-left flex gap-3">
        <MdModeEdit
          className="text-primary text-2xl hover:cursor-pointer"
          onClick={handleEdit}
        />
        <RiDeleteBin6Line
          className="text-primary text-2xl hover:cursor-pointer"
          onClick={handleDelete}
        />
      </td>
    </tr>
  );
}

export default ContactRecord;
