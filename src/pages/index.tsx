import { Todo } from "@/models";
import { ItemCardCollection, PageContent } from "@/ui-components";
import NavBar from "@/ui-components/NavBar";
import { Authenticator, Flex } from "@aws-amplify/ui-react";
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
        <Authenticator>{({ user, signOut }) => <Page />}</Authenticator>
      </main>
    </>
  );
}

const Page = () => {
  return (
    <Flex direction="column">
      <NavBar
        overrides={{
          NavBar: {
            width: "100%",
          },
        }}
      />
      <PageContent
        overrides={{
          PageContent: {
            width: "100%",
            maxWidth: "1440px",
            margin: "0 auto",
            children: (
              <ItemCardCollection
                overrideItems={() => ({
                  width: "100%",
                  maxWidth: "500px",
                  margin: "0 auto",
                  overrides: {
                    TextContent: {
                      className: "card-text",
                    },
                  },
                })}
              />
            ),
          },
        }}
      />
    </Flex>
  );
};
