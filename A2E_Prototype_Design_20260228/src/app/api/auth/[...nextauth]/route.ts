import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "demo@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Mock authentication: allow any login for prototype purposes, 
                // as long as both fields are provided (or specific hardcoded ones).
                if (credentials?.email && credentials?.password) {
                    // You could restrict to specific mock users here
                    const user = { id: "1", name: "Demo User", email: credentials.email }
                    return user
                }
                return null
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: '/login',
    }
})

export { handler as GET, handler as POST }
