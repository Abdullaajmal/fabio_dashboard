import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleItemClick = () => {
    if (window.innerWidth < 768) setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);   // Desktop: open
      } else {
        setIsOpen(false);  // Mobile: closed
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { icon: 'bi-grid-fill', path: '/overview' },
    { icon: 'bi-truck', path: '/available-loads' },
    { icon: 'bi-graph-up', path: '/earnings' },
    { icon: 'bi-file-earmark', path: '/documents' },
    { icon: 'bi-geo-alt', path: '/gps-tracking' },
    { icon: 'bi-fuel-pump', path: '/fuel-card-savings' },
    { icon: 'bi-cash-stack', path: '/settlements' },
    { icon: 'bi-bell', path: '/notifications' },
    { icon: 'bi-shield-check', path: '/compliance' },
    { icon: 'bi-question-circle', path: '/help-center' },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-30 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-lg"
      >
        <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'} text-xl`}></i>
      </button>

      {/* Sidebar */}
      <div
        className={`h-screen  text-white transition-all duration-300 ease-in-out
          fixed top-0 left-0 z-20 flex flex-col justify-between
          ${isOpen ? 'w-[100px]' : 'w-0'}
          md:w-[100px]
          overflow-hidden
          rounded-tr-[20px] rounded-br-[20px]`} style={{ backgroundColor: '#033C3B', borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}
      >
        <div className="p-4 flex flex-col flex-grow relative">
          {/* Arrow Toggle Button (only for desktop) */}
          {/* <div className="absolute top-1/2 left-full transform -translate-y-1/2 -translate-x-1/2 z-30 hidden md:block">
            <button
              onClick={toggleSidebar}
              className="w-8 h-8 rounded-full bg-white text-black shadow flex items-center justify-center"
            >
              <i className={`bi ${isOpen ? 'bi-chevron-left' : 'bi-chevron-right'} text-sm`}></i>
            </button>
          </div> */}

          {/* Menu Items */}
          <div className="space-y-4 flex-grow overflow-auto flex flex-col justify-center">
            {menuItems.map(({ icon, text, path }) => (
              <MenuItem
                key={path}
                icon={icon}
                text={text}
                path={path}
                isOpen={isOpen}
                active={location.pathname === path}
                onClick={handleItemClick}
              />
            ))}
          </div>

          <hr className="border-gray-700 my-0" />
        </div>
      </div>
    </>
  );
};

const MenuItem = ({ icon, text, path, isOpen, active, onClick }) => (
  <div>
    <Link
      to={path}
      onClick={onClick}
      className={`flex items-center justify-center gap-3 px-4 py-2 rounded-md transition-all
        ${active ? 'bg-white text-black' : 'hover:bg-gray-700 text-white '}
        no-underline hover:no-underline justify-center rounded-md`}
    >
      <i className={`bi ${icon} text-xl ${active ? 'text-gray-200 text-black' : 'text-white'}`}></i>
      {/* No text even when sidebar is open */}
    </Link>
  </div>
);

export default Sidebar;
