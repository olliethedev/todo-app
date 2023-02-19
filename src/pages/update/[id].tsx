import { TodoUpdateForm } from "@/ui-components";
import DetailNavBar from "@/ui-components/DetailNavBar";
import TodoCreateForm from "@/ui-components/TodoCreateForm";
import { Authenticator, Flex } from "@aws-amplify/ui-react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Update() {
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
  const id = useRouter().query.id;
  return (
    <Flex direction="column">
      <DetailNavBar
        overrides={{
          DetailNavBar: {
            width: "100%",
          },
          Heading: {
            children: "Updage Todo",
          },
        }}
      />
      <TodoUpdateForm id={id as string} />
    </Flex>
  );
};
