import React from 'react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { ChevronDownIcon, BellIcon } from '@heroicons/react/24/solid';
import { GlobeAltIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

function LanguageMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-start">
      <MenuHandler>
        <button className="flex items-center px-2 py-1 bg-white hover:bg-gray-100 rounded-md border-none text-sm font-medium">
          <GlobeAltIcon className="h-4 w-4 mr-1" />
          EN
          <ChevronDownIcon className="h-4 w-4 ml-1" />
        </button>
      </MenuHandler>
      <MenuList className="p-1 text-sm">
        <MenuItem onClick={closeMenu}>EN</MenuItem>
        <MenuItem onClick={closeMenu}>FR</MenuItem>
        <MenuItem onClick={closeMenu}>DE</MenuItem>
      </MenuList>
    </Menu>
  );
}

function NavbarSimple() {
  return (
    <div className="w-full bg-white flex justify-end items-center gap-2 px-6 py-3 text-sm" style={{ border: 'none' }}>
      {/* Black circle with icon inside */}
      <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4.001H5v14a2 2 0 0 0 2 2h8m1-5l3-3m0 0l-3-3m3 3H9"/></svg>
      </div>

      {/* Language menu */}
      <LanguageMenu />

      {/* Notification */}
      <div className="relative">
        <IconButton variant="text" className="p-1">
          <BellIcon className="h-5 w-5 text-gray-700" />
        </IconButton>
        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
      </div>

      {/* Profile */}
      <div className="flex text-center justify-center items-center gap-2 rounded-full  p-2">
        <Avatar
          size="sm"
          variant="circular"
          alt="Theresa Webb"
          src="https://randomuser.me/api/portraits/women/44.jpg"  
          className="!border-none !shadow-none rounded-full"
        />
        <Typography className="text-sm font-medium text-center text-gray-800">
          Theresa Webb
        </Typography>
      </div>
    </div>
  );
}

export default NavbarSimple;
