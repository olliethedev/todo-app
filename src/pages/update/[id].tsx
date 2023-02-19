/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { DataStore, Storage } from "aws-amplify";
import { Todo } from "@/models";
import {
  Authenticator,
  Flex,
  FileUploader,
  Heading,
  Divider,
  Text,
} from "@aws-amplify/ui-react";
import { PageContent, TodoUpdateForm, DetailNavBar } from "@/ui-components";

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
              <>
                <TodoUpdateForm
                  id={id as string}
                  overrides={{
                    TodoUpdateForm: {
                      width: "100%",
                    },
                  }}
                  onSuccess={() => {
                    window.location.href = "/";
                  }}
                />

                {id && <ImageLayout id={id as string} />}
              </>
            ),
          },
        }}
      />
    </Flex>
  );
};

const ImageLayout = ({ id }: { id: string }) => {
  const [todo, setTodo] = useState<Todo>();
  useEffect(() => {
    const call = async () => {
      const todo = await DataStore.query(Todo, id);
      setTodo(todo);
    };
    call();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSuccess = useCallback(
    ({ key }: { key: string }) => {
      const call = async () => {
        if (todo) {
          const updatedTodo = await DataStore.save(
            Todo.copyOf(todo, (updated) => {
              updated.image = key;
            })
          );
          setTodo(updatedTodo);
        }
      };
      call();
    },
    [todo]
  );

  return (
    <Flex direction="column" grow={1} width="100%">
      {todo && (
        <>
          <Divider label="OR" />
          <Heading level={3} textAlign="center">
            Upload Image
          </Heading>
          <FileUploader
            acceptedFileTypes={["image/*"]}
            hasMultipleFiles={false}
            maxSize={500000}
            accessLevel="private"
            onSuccess={onSuccess}
          />
          {todo?.image ? (
            <S3Image imageKey={todo.image} />
          ) : (
            <Text>No Image</Text>
          )}
        </>
      )}
    </Flex>
  );
};

const S3Image = ({ imageKey }: { imageKey: string }) => {
  const [url, setUrl] = useState<string>();
  useEffect(() => {
    const call = async () => {
      const urlResp = await Storage.get(imageKey, { level: "private" });
      setUrl(urlResp);
    };
    call();
  }, [imageKey]);
  return <img src={url} alt="image" />;
};
