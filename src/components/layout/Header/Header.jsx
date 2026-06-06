import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { MdOutlineSettings, MdMenu, MdClose } from "react-icons/md"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CiLight, CiDark } from 'react-icons/ci'


function Header() {
  const changeTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
    // Chế độ System (Theo hệ điều hành)
      localStorage.removeItem('theme')
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }


  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system')

  useEffect(() => {
    // Khởi tạo theme khi load trang
    const initialTheme = localStorage.getItem('theme') || 'system'
    changeTheme(initialTheme)
  }, [])

  const getThemeIcon = (t) => {
    const lower = t.toLowerCase()
    if (lower === 'dark') return <CiDark />
    if (lower === 'light') return <CiLight />
    return <MdOutlineSettings />
  }

  const getThemeLabel = (t) => {
    const lower = t.toLowerCase()
    if (lower === 'dark') return 'Dark'
    if (lower === 'light') return 'Light'
    return 'System'
  }

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-1 font-body-md text-body-md transition-all active:scale-95 ${isActive
      ? 'text-primary font-semibold bg-[#D4D3DE]'
      : 'text-on-surface-variant hover:text-primary transition-colors duration-200'
    }`

  const mobileLinkClass = ({ isActive }) =>
    `block w-full py-3 px-4 rounded-lg text-left font-body-md text-body-md transition-all ${
      isActive
        ? 'text-primary font-semibold bg-[#D4D3DE]'
        : 'text-on-surface-variant hover:text-primary hover:bg-[#F3F4F6] transition-colors duration-200'
    }`

  return (
    <header className="bg-white fixed top-0 w-full z-50 bg-surface shadow-sm px-6 md:px-10 py-4 flex flex-col justify-center max-w-container-max mx-auto left-0 right-0 rounded-b-lg dark:bg-slate-900 dark:text-white">
      <div className="flex justify-between items-center w-full ">
        <Link
          className="text-headline-md font-headline-md text-primary font-bold cursor-pointer text-2xl"
          to="/"
          onClick={() => setIsOpen(false)}
        >
          Dev Portfolio
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <NavLink className={linkClass} to="/">Home</NavLink>
          <NavLink className={linkClass} to="/resume">Resume</NavLink>
          <NavLink className={linkClass} to="/skills">Skills</NavLink>
          <NavLink className={linkClass} to="/projects">Projects</NavLink>
          <NavLink className={linkClass} to="/contact">Contact</NavLink>
        </div>
        <div className="flex items-center gap-4">
          <Menu>
            <MenuButton className="text-md cursor-pointer flex items-center gap-2 border border-primary rounded-md p-2 ">
              {getThemeIcon(theme)} {getThemeLabel(theme)}
            </MenuButton>
            <MenuItems anchor="bottom" className="mt-4 border border-primary rounded-md p-2 bg-white dark:bg-slate-900 dark:text-white flex flex-col gap-2 w-25">
              <MenuItem onClick={() => {
                changeTheme('system')
                setTheme('system')
              }}>
                <div className="flex items-center justify-center gap-2 cursor-pointer hover:bg-primary rounded-md "><MdOutlineSettings /> System</div>
              </MenuItem>
              <MenuItem onClick={() => {
                changeTheme('light')
                setTheme('light')
              }}>
                <div className="flex items-center justify-center gap-2 cursor-pointer hover:bg-primary border-t rounded-md"> <CiLight /> Light</div>
              </MenuItem>
              <MenuItem onClick={() => {
                changeTheme('dark')
                setTheme('dark')
              }}>
                <div className="flex items-center justify-center gap-2 cursor-pointer hover:bg-primary border-t rounded-md">
                  <CiDark /> Dark</div>
              </MenuItem>
            </MenuItems>
          </Menu>

          <button
            className="md:hidden text-2xl cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-2 mt-4 pt-4 border-t border-outline-variant">
          <NavLink className={mobileLinkClass} to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink className={mobileLinkClass} to="/resume" onClick={() => setIsOpen(false)}>Resume</NavLink>
          <NavLink className={mobileLinkClass} to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
          <NavLink className={mobileLinkClass} to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink className={mobileLinkClass} to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </header>
  )
}

export default Header