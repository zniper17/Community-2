import React from "react";
import { PostIcon } from "./icons";
import { WysiwygEditor } from "@remirror/react-editors/wysiwyg";
import dynamic from "next/dynamic";
import Editor from "./Editor";

interface IProps {
  color: string;
}

const tabs = [
  {
    name: "Post",
    icon: <PostIcon />,
  },
  {
    name: "Image & Video",
    icon: <PostIcon />,
  },
  {
    name: "Link",
    icon: <PostIcon />,
  },
  {
    name: "Poll",
    icon: <PostIcon />,
  },
];

const TextEditor = dynamic(() => import("../components/Editor"), {
  ssr: false,
});

const Tabs = (props: IProps) => {
  const [openTab, setOpenTab] = React.useState(1);
  const title = React.useRef<HTMLInputElement | null>(null);
  const [oldPosts, setOldPosts] = React.useState<any>([]);
  const { color } = props;

  React.useEffect(() => {
    let oldPostsFromLocal = localStorage.getItem("post-created");
    if (oldPostsFromLocal) {
      oldPostsFromLocal = JSON.parse(oldPostsFromLocal);
    }

    if (!!oldPostsFromLocal) {
      setOldPosts(oldPostsFromLocal);
    }
  }, []);

  function handlePostCreation(data: any) {
    const newPost = {
      title: title.current?.value,
      editorData: data,
    };

    const newPosts = [...oldPosts, newPost];
    setOldPosts(newPosts);
    saveFavtoLocalStorage(newPosts);
  }

  const saveFavtoLocalStorage = (post: any) => {
    localStorage.setItem("post-created", JSON.stringify(post));
  };

  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pb-4 flex-row"
            role="tablist"
          >
            {tabs.map((tab, index) => {
              return (
                <li
                  className={
                    "flex-auto text-md px-5 py-3 rounded-sm font-bold " +
                    (openTab === index
                      ? "text-blue-500 bg-blue-200"
                      : "text-gray-500 bg-white")
                  }
                  key={index}
                >
                  <a
                    className={
                      "flex space-x-2 items-center leading-normal justify-center"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(index);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    <span>{tab.icon}</span>
                    <span className="">{tab.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="px-4 py-5">
              <div>
                <input
                  type="text"
                  className="mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-md"
                  placeholder="Title"
                  ref={title}
                />
              </div>
              <div>
                <TextEditor handlePostCreation={handlePostCreation} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="pink" />
    </>
  );
}
