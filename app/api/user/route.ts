import connect from '@/lib/db'
import User from '@/models/user'
import { Types } from 'mongoose'
import { NextResponse } from 'next/server'

const ObjectId= require("mongoose").Types.ObjectId

export const GET = async () => {
    try {
        await connect()
        const users = await User.find()

        return new NextResponse(JSON.stringify(users), { status: 200 })
    } catch (error: any) {
        return new NextResponse("Error in fetching Users" + error.message, { status: 500 })
    }
}

export const POST = async (request:Request) => {
    try {
        const body = await request.json()
        await connect();

        const newuser = new User({
            email:body.email,
            username:body.username,
            password:body.password
        })
        await newuser.save()
     return new NextResponse(JSON.stringify({
        message:"user Added Successfully !!",
        user:newuser
     }),
        {status:200}
    )
       
    } catch (error: any) {
        return new NextResponse("Error to Crreatinga new user" + error.message, { status: 500 })
    }
}

export const PATCH = async (request:Request) => {
    try {
        const body = await request.json()
       
        const {userId, newusername} = body;
        await connect();

        if(!userId || !newusername){
            return new NextResponse(JSON.stringify({message:"User Id or user name not Provided"}),{status:400})
        }

        if(!Types.ObjectId.isValid(userId)){
            return new NextResponse(JSON.stringify({message:"User Id not found"}),{status:400})
        }

        const updateUser = await User.findOneAndUpdate(
            {_id: new ObjectId(userId)},
            {username: newusername},
            {new :true}
        )

        if(!updateUser){
            return new NextResponse(JSON.stringify({message:"User not Found"}),{status:400})
        }

        return new NextResponse(JSON.stringify({message:"User updated sucessfully !!",user:updateUser}),{status:200})

    } catch (error: any) {
        return new NextResponse("Error to Crreatinga new user" + error.message, { status: 500 })
    }
}