import { getServerSession } from "next-auth/next";
import { useSession, signIn, signOut } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";
import { Session } from "next-auth";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
      {session.user ? 
        <div>
            <p>Signed in as {session.user ? session.user.email : "no name"} </p>
            <div className="max-w-xl">
                <img src={session.user?.image || ""} alt="user profile picture" /> <br />
            </div>
            <p>{session.user.name}</p>
        </div> :
        <div>no user info available</div>
      }
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export async function getServerSideProps(context: { req: any; res: any; }) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}