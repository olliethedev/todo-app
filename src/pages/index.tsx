import { Authenticator } from "@aws-amplify/ui-react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="AWS Amplify Todo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Authenticator>
          {({ user, signOut }) => (
            <div>
              <h1>Todo App</h1>
              <p>Hello {user?.username}</p>
              <button onClick={signOut}>Sign Out</button>
            </div>
          )}
        </Authenticator>
      </main>
    </>
  );
}
