import { AiOutlineHome, AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BiCategoryAlt, BiWorld } from 'react-icons/bi';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { MdOutlineContactSupport } from 'react-icons/md';
import { TbInfoSquare } from 'react-icons/tb';
import { RxCross2 } from 'react-icons/rx';

const MobileSidebar = ({isOpen,setIsOpen}) => {
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
            <CgProfile className='text-2xl text-gray-500' />
            <span className='text-gray-700 text-[20px]'>Sign in | Register</span>
          </div>
          <RxCross2 className='text-xl cursor-pointer' onClick={() => setIsOpen(false)} />
        </div>

        <div className='p-4 flex flex-col gap-6'>
          <SidebarItem icon={<AiOutlineHome />} label="Home" />
          <SidebarItem icon={<BiCategoryAlt />} label="Categories" />
          <SidebarItem icon={<AiOutlineHeart />} label="Favorites" />
          <SidebarItem icon={<HiOutlineClipboardList />} label="My Orders" />

          <hr />

          <SidebarItem icon={<BiWorld />} label="English | USD" />
          <SidebarItem icon={<MdOutlineContactSupport />} label="Contact Us" />
          <SidebarItem icon={<TbInfoSquare />} label="About" />

          <hr />

          <SidebarItem label="User Agreement" />
          <SidebarItem label="Partnership" />
          <SidebarItem label="Privacy Policy" />
        </div>
      </div>
    </>
  );
};

const SidebarItem = ({ icon, label }) => (
  <div className='flex items-center gap-3 text-gray-600 text-[20px] cursor-pointer hover:text-blue-500'>
    {icon && <span className='text-[20px]'>{icon}</span>}
    <span className='text-[20px]'>{label}</span>
  </div>
);

export default MobileSidebar;
