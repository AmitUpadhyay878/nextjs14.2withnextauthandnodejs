import NextAuth from 'next-auth/next'
import {authOptions} from '@/lib/authOptions'

const handle= NextAuth(authOptions)

export {handle as GET, handle as POST}