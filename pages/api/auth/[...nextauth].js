import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";


/**
 * Next인증 설정
 */
export default NextAuth ({
    /**
     * 소셜로그인 제공관련 설정파일
     */
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