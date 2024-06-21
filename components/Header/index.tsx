import Link from 'next/link'
import React  from 'react'
import { Navmenu } from '@/utils/StaticArrays/NavMenu'
import Dashboard from '../Dashboard'

// import { usePathname, useRouter } from 'next/navigation'
// import { getSesison } from '@/actions/action'

const Header= async() => {


 
// const session = true;

  return (
    <div className="grid min-h-[70px] w-full overflow-x-scroll rounded-lg lg:overflow-hidden">
      <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
        <nav
          className="sticky top-5 z-10 block w-full max-w-full px-4 py-2 text-gray-950 bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Link href="/"
              className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
              Nextjs14.2 With NextAuth with Nodejs
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden mr-4 lg:block">
                <ul className="flex flex-col gap-2 mt-0 mb-0 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                  {
                    Navmenu?.map(page=>{
                      return(
                        <li key={page?.activeUrl} className={`block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900`}>
                          <Link href={page?.url} className="flex items-center">
                            {page?.title}
                          </Link>
                        </li>      
                      )
                    })
                  }
                </ul>
              </div>
              <div className="flex items-center gap-x-1">
                {/* {
                  !session ? (
                    <>
                    <Link
                    href="/register"
                    className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                   >
                    Register
                  </Link>
                  <Link
                  href="/signin"
                    className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">
                  SignIn
                  </Link> 
                    </>
                  ):(
                    <>
                     <Link href="/my-profile"className='mr-4 font-bold hover:text-red-500 hover:cursor-pointer '>hello</Link>
                    <button
                    className="hidden select-none rounded-lg bg-gradient-to-tr from-red-900 to-red-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                    type="button"
                    // onClick={()=>setCurrentUser(false)}
                   >
                    <span>Logout </span>
                  </button> 
                    </>
                  )
                } */}
              <Dashboard />
                
              </div>
              <button
                className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                type="button">
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor"
                    strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
