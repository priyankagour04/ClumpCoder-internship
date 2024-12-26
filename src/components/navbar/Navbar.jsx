import { FaSearch } from 'react-icons/fa';
import { AiOutlineMessage, AiOutlineBell } from 'react-icons/ai';
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
  return (
    <div className="flex items-center justify-end bg-white text-white p-4 rounded-md shadow-lg">
     

      {/* Right Side: Icons and Profile */}
      <div className="flex items-center gap-10 ml-4">
       <div className='flex gap-6'> <AiOutlineMessage className="text-gray-700 text-xl cursor-pointer hover:text-gray-400" />
       <AiOutlineBell className="text-gray-700 text-xl cursor-pointer hover:text-gray-400" /></div>
        
        {/* Profile */}
        <div className="flex items-center gap-6 me-6">
        <div className="text-sm">
            <div className="font-semibold text-black">Thomas Anree</div>
            <div className="text-gray-500"> UX Designer</div>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s"
            alt="Profile"
            className="rounded-full w-10 h-10"
          />
         <IoIosArrowDown className='text-gray-900' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
