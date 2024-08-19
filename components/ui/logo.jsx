import Link from 'next/link';

const Logo = () => {
  return (
    <Link
    href="/"
    className="flex items-center space-x-3 rtl:space-x-reverse"
  >
    <span className="self-center text-2xl  whitespace-nowrap dark:text-gray-50 max-lg:text-xl">
      WebCraft<span className="text-primary  text-[1.7rem]">.</span>AI
    </span>
  </Link>
  )
}

export default Logo;