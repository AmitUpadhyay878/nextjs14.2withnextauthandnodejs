'use client'

import React, { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'


const Dashboard = () => {
  const { data: session } = useSession()

  const [isVisible, setIsVisible] = useState(false);

  const handleAvatarClick = () => {
    setIsVisible((pre)=>!pre);
  };


  console.log(session, 'session')

  return (
    <>
      <div className=''>
        {session ? (
            <>
            <div className='flex items-center justify-center relative '>
          <h3>{session?.user?.name!}</h3>
         <Image src={session?.user?.image! as string} className="m-1 mr-2 w-12 h-12  flex justify-center items-center rounded-full bg-gray-500 text-xl text-white uppercase" alt="user-avatar"  height={32} width={32} onClick={handleAvatarClick} />
         <div className="p-4 bg-gray-200 rounded">
          <button
              className='border border-black rounded-md px-5'
              onClick={() => signOut()}
            >
              Logout
            </button>
        </div>
        </div>
            </>
        ) : (
          <>
          <p>hello user</p>
            {/* <div className='flex space-x-2'> 
            <button
              className='border border-black rounded-md px-5'
              onClick={() => signIn('google')}
            >
              Signin with Google
            </button> 
            <button
              className='border border-black rounded-md px-5'
              onClick={() => signIn('github')}
            >
              Signin with Github
            </button> 
            </div>*/}
          </>
        )}
      </div>
    </>
  )
}

export default Dashboard
