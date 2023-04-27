import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      {session.user ? 
        <div>
            <p>Signed in as {session.user ? session.user.email : "no name"} </p>
            <div className="max-w-xl">
                <img src={session.user?.image || ""} alt="user profile picture" /> <br />
            </div>
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