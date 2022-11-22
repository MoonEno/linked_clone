import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default NextAuth ({
    // configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // add more providers here! kakao, naver, facebook ETC...
    ],
    // use JWT
    secret: process.env.JWT_SECRET,
    // use DB adapter
    adapter: MongoDBAdapter(clientPromise),
    // after url Auth Login & Logout
    pages: {
        signIn : "/home"
    },
    // session managed two-ways, jwt or database 
    // default > adapter(database)
    session: {
        strategy: "jwt",
    },
    debug: true
});