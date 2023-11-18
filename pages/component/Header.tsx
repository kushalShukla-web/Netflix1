import {
  SearchIcon,
  MenuIcon,
  BellIcon
} from "@heroicons/react/outline";
import {useState,useEffect} from "react"
import Link from "next/link";
function Header() {
  const [isScrolled,setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
   console.log("HEy")
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={`${isScrolled && 'bg-red-500'}`} >
    <div className="flex items-center space-x-2 md:space-x-10">
       <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
    <ul className='space-x-4 md:flex hidden'>
        <li className="headerLink">Home</li>
        <li className="headerLink">Tv show</li>
        <li className="headerLink">Movies</li>
        <li className="headerLink">New & popular</li>
        <li className="headerLink">My List</li>
    </ul>
    </div>
    <div className="flex items-center space-x-4 text-sm font-light">
           <SearchIcon className="hidden h-6 w-6 sm:inline"/>
          <p className="hidden lg:inline">kids</p>
          <BellIcon className="h-6 w-6"/>
          <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
          </Link>
    </div>
    </header>
  )
}

export default Header

