import Head from "next/head";
import { DataStore } from "aws-amplify";
import { Authenticator, Flex } from "@aws-amplify/ui-react";
import { Todo } from "@/models";
import {
  EmptyListPlaceholder,
  ItemCardCollection,
  PageContent,
  NavBar,
} from "@/ui-components";

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
              <ItemCardCollection
                gap={10}
                overrides={{
                  ItemCardCollection: {
                    searchNoResultsFound: <EmptyListPlaceholder width="100%" />,
                  },
                }}
                overrideItems={({ item }: { item: Todo }) => ({
                  width: "100%",
                  overrides: {
                    TextContent: {
                      className: "card-text",
                    },
                    SwitchField: {
                      defaultChecked: item.completed ?? false,
                      onChange: async (e) => {
                        await DataStore.save(
                          Todo.copyOf(item, (updated) => {
                            updated.completed = (e.target as any).checked;
                          })
                        );
                      },
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
