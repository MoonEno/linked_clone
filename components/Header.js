import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import HeaderLink from './HeaderLink';
import { SearchRounded } from '@mui/icons-material';
import { HomeRounded } from '@mui/icons-material';
import { Group } from'@mui/icons-material';
import { BusinessCenter } from '@mui/icons-material';
import { Chat } from '@mui/icons-material';
import { Notifications } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { AppsOutlined } from '@mui/icons-material';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useSession } from "next-auth/react";

const spring = {
    type : "spring",
    stiffness: 700,
    damping: 30,
}


function Header() {

    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme, theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

  return (
    <header className='sticky top-0 bg-white dark:bg-[#1D2226] flex items-center justify-around py-1.5 px-3 focus-within:shadow-lg'>
        {/* Left */}
        <div className='flex items-center space-x-2 w-full max-w-xs'>
            { mounted && (
                <>
                {resolvedTheme === 'dark' ? (
                    <Image src="https://rb.gy/bizvqj" width={45} height={55} />        
                ) : (
                    <Image src="https://rb.gy/dpmd9s" width={45} height={55} />
                )}
                </>
            )}

            <div className='flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded w-full'>
                <SearchRounded />
                <input type="text" placeholder="Search" className="hidden md:inline-flex bg-transparent text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow" />
            </div>
        </div>
        {/* Right */}
        <div className='flex items-center space-x-6'>
            <HeaderLink Icon={HomeRounded} text="Home" feed active />
            <HeaderLink Icon={Group} text="My Network" feed  />
            <HeaderLink Icon={BusinessCenter} text="Jobs" feed hidden />
            <HeaderLink Icon={Chat} text="Messaging" feed  />
            <HeaderLink Icon={Notifications} text="Notifications" feed />
            <HeaderLink Icon={Avatar} text="Me" feed avatar hidden />
            <HeaderLink Icon={AppsOutlined} text="Work" feed hidden />

            {/* Dark Mode Toggle */}
            { mounted && (
                <div className={` ${resolvedTheme === 'dark' ? 'bg-gray-600' : 'bg-yellow-300'} flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${resolvedTheme === 'dark' ? 'justify-end' : 'justify-start'}`}
                     onClick= {() => setTheme(resolvedTheme === 'dark' ? "light" : "dark")}
                >
                    <span className='absolute left-0'>????</span>
                    <motion.div className='w-5 h-5 bg-white rounded-full z-40' layout transition={spring}/>
                    <span className='absolute right-0.5'>????</span>
                </div>
            )}
            
        </div>

    </header>
  )
}

export default Header;