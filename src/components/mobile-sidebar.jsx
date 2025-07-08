import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BiCategoryAlt, BiWorld } from 'react-icons/bi';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { TiMessages } from "react-icons/ti";
import { MdOutlineContactSupport } from 'react-icons/md';
import { TbInfoSquare } from 'react-icons/tb';
import { RxCross2 } from 'react-icons/rx';
import {  useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const MobileSidebar = ({ isOpen, setIsOpen }) => {

  const { token, setToken, userData } = useContext(AppContext);
  console.log({ token, userData });

  const navigate = useNavigate();
  
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setIsOpen(false);
    navigate("/");
    toast.success("Logged out successfully");
  };

  const handleLogin = () => {
    navigate("/login");
  }

  return (
    <>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar Drawer */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-gray-100 shadow-md z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='flex justify-between items-center p-4 border-b'>
          <div className="flex items-center gap-2">
            {userData && userData.image ? (<img src={userData.image} alt={userData.name} className='w-6 h-6 rounded-full' />)
              : (<CgProfile className='text-2xl text-gray-500' />)}

            {token ?
              (<span onClick={handleLogout} className='text-gray-700 text-[20px]'>Log out</span>)
              :
              (<span onClick={handleLogin} className='text-gray-700 text-[20px]'>Sign in | Register</span>)}
          </div>
          <RxCross2 className='text-xl cursor-pointer' onClick={() => setIsOpen(false)} />
        </div>

        <div className='p-4 flex flex-col gap-6'>
          <SidebarItem icon={<AiOutlineHome />} path="/" label="Home" navigate={navigate} setIsOpen={setIsOpen} />
          <SidebarItem icon={<BiCategoryAlt />} path="/" label="Categories" navigate={navigate} setIsOpen={setIsOpen} />
          <SidebarItem icon={<TiMessages />} path="/my-messages" label="Messages" navigate={navigate} setIsOpen={setIsOpen} />
          <SidebarItem icon={<HiOutlineClipboardList />} path="/my-orders" label="My Orders" navigate={navigate} setIsOpen={setIsOpen} />

          <hr />

          <SidebarItem icon={<BiWorld />} path="" label="English | USD" />
          <SidebarItem icon={<MdOutlineContactSupport />} path="/contact" label="Contact Us" navigate={navigate} setIsOpen={setIsOpen} />
          <SidebarItem icon={<TbInfoSquare />} path="/about" label="About" navigate={navigate} setIsOpen={setIsOpen} />

          <hr />

          <SidebarItem label="User Agreement" />
          <SidebarItem label="Partnership" />
          <SidebarItem label="Privacy Policy" />
        </div>
      </div>
    </>
  );
};

const SidebarItem = ({ icon, label, path, navigate, setIsOpen }) => (
  <div
    onClick={() => {
      if (path && navigate && setIsOpen) {
        navigate(`${path}`);
        setIsOpen(false);
      }
    }}
    className='flex items-center gap-3 text-gray-600 text-[20px] cursor-pointer hover:text-blue-500'
  >
    {icon && <span className='text-[20px]'>{icon}</span>}
    <span className='text-[20px]'>{label}</span>
  </div>
);


export default MobileSidebar;
