import prisma from '@/lib/prismadb';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: 'zainul123',
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'mail', placeholder: 'user@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user = {
          id: '1',
          name: 'Zainul',
          email: 'admin@gmail.com',
          role: 'administrator',
        };
        if (email == 'admin@gmail.com' && password == '123456') {
          console.log('kucing 1', user);

          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account?.provider == 'credentials') {
        token.name = user?.name;
        token.email = user?.email;
        token.role = user?.role;
      }
      console.log('kucing 2', token);
      return token;
    },
    async session({ session, token }: any) {
      if ('name' in token) {
        session.user.name = token.name;
      } else if ('email' in token) {
        session.user.email = token.email;
      } else if ('role' in token) {
        session.user.role = token.role;
      }
      console.log('kucing 3', session);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
