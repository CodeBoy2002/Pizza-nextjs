import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import * as mongoose from 'mongoose'
import { User } from "../../../models/User"
import bcrypt from 'bcrypt'

const handler = NextAuth({
    secret: process.env.SECRET,
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          id: 'credentials',
          credentials: {
            email: { label: "Email", type: "text", placeholder: "test@example.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            // console.log(credentials);
            const email = credentials?.email
            const password = credentials?.password

            mongoose.connect(process.env.MONGO_URL)
            const user = await User.findOne({email})
            const passwordOk = user && bcrypt.compareSync(password, user.password)

            if(passwordOk) {
              return user
            }

            return null
          }
        })
      ]
})

export { handler as GET, handler as POST }