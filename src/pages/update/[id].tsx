/* eslint-disable @next/next/no-img-element */
import { Todo } from "@/models";
import { TodoUpdateForm } from "@/ui-components";
import DetailNavBar from "@/ui-components/DetailNavBar";
import {
  Authenticator,
  Flex,
  FileUploader,
  Heading,
} from "@aws-amplify/ui-react";
import { DataStore, Storage } from "aws-amplify";
import Head from "next/head";
import { useRouter } from "next/router";
import { useStorageURL } from "@aws-amplify/ui-react/internal";
import { useEffect, useState } from "react";

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
      <ImageLayout id={id as string} />
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
  }, [id]);
  const onSuccess = ({ key }: { key: string }) => {
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
  };

  return (
    <Flex direction="column">
      <Heading level={3}>Upload Image</Heading>
      <FileUploader
        acceptedFileTypes={["image/*"]}
        hasMultipleFiles={false}
        maxSize={500000}
        accessLevel="private"
        onSuccess={onSuccess}
      />
      {todo?.image && <S3Image imageKey={todo.image} />}
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
