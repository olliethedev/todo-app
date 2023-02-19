import Head from "next/head";
import { Authenticator, Flex } from "@aws-amplify/ui-react";
import { DetailNavBar, TodoCreateForm, PageContent } from "@/ui-components";

export default function Create() {
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
      <DetailNavBar
        overrides={{
          DetailNavBar: {
            width: "100%",
          },
          Heading: {
            children: "Create Todo",
          },
          Content: {
            maxWidth: "1440px",
            margin: "0 auto",
          },
        }}
      />
      <PageContent
        overrides={{
          PageContent: {
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto",
            children: (
              <TodoCreateForm
                overrides={{
                  TodoCreateForm: {
                    width: "100%",
                  },
                }}
                onSuccess={() => {
                  window.location.href = "/";
                }}
              />
            ),
          },
        }}
      />
    </Flex>
  );
};
