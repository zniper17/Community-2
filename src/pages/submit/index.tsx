import PostForm from "components/PostForm";
import SpaceList from "components/SpaceList";

import React from "react";

const Index = () => {
  return (
    <div className="w-full max-w-full sm:max-w-3xl mx-auto mt-10 p-4">
      {" "}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div>
          <h1 className="font-semibold">Create a Post</h1>
        </div>
        <button className="py-2 px-4 rounded-full hover:bg-gray-500 uppercase text-xs text-blue-400">
          Drafts <span>0</span>{" "}
        </button>
      </div>
      <SpaceList />
      <PostForm />
    </div>
  );
};

export default Index;
