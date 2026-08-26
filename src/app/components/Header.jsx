"use client"; 

import { useState } from 'react';
import React from 'react'
import Image from 'next/image'
import shiftweb_logo from "../assets/shiftweb-logo.png"
import menu_bar from "../assets/menu-bar.png"
import Link from 'next/link'

const Header = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
    <header className='sticky top-0 z-40 backdrop-blur-lg bg-cream/80 border-b border-divider border-[#64748B]'>
        <div className='mx-auto w-full px-6 md:px-10 max-w-6xl flex items-center justify-between h-[72px] py-4'>
        <a className="flex items-center gap-2.5 font-display text-2xl tracking-tight leading-none">
            <Image src={shiftweb_logo} alt='header-logo' loading='eager' width={84}/>
        </a>
        <nav className="navbar-desk hidden md:flex">
            <ul className='flex items-center gap-8 text-[#64748B] text-[14px]'>
                <li>
                  <Link href="/" className="hover:text-gray-500 transition-colors">Our services</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-500 transition-colors">Our work</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-gray-500 transition-colors">How we work</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-gray-500 transition-colors">Team</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-gray-500 transition-colors">About</Link>
                </li>
                <button className='bg-[#233DFF] text-white w-[136px] h-[40px] cursor-pointer transition-colors'>
                    Start a project
                </button>
            </ul>
        </nav>
        <nav 
            className="navbar-mob flex md:hidden cursor-pointer" 
            onClick={toggleSidebar}
          >
            <Image src={menu_bar} alt='menu-bar' loading='eager' width={32} />
          </nav>
        </div>
      </header>

      {/* --- New Mobile Sidebar Elements Below --- */}

      {/* Background Overlay: closes sidebar when clicked outside */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden transition-opacity"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Container */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-cream/95 backdrop-blur-md shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6 h-[72px] items-center">
          <button onClick={toggleSidebar} aria-label="Close menu" className="text-gray-600 hover:text-black">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col gap-6 px-8 py-4">
          <ul className='flex flex-col gap-6 text-[#64748B] text-[16px] font-medium'>
            <li>
              <Link href="/" onClick={toggleSidebar} className="hover:text-gray-900 transition-colors block">Our services</Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleSidebar} className="hover:text-gray-900 transition-colors block">Our work</Link>
            </li>
            <li>
              <Link href="/services" onClick={toggleSidebar} className="hover:text-gray-900 transition-colors block">How we work</Link>
            </li>
            <li>
              <Link href="/services" onClick={toggleSidebar} className="hover:text-gray-900 transition-colors block">Team</Link>
            </li>
            <li>
              <Link href="/services" onClick={toggleSidebar} className="hover:text-gray-900 transition-colors block">About</Link>
            </li>
            <button className='bg-[#233DFF] text-white w-full h-[48px] mt-4 cursor-pointer transition-colors shadow-md'>
              Start a project
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header
