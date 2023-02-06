import React from "react";
import PostType from "./PostType";
import TextArea from "./TextArea";

const PostForm = () => {
  return (
    <div className="flex flex-col space-y-5 mt-5 bg-white rounded-md">
      <PostType />
      {/* <TextArea /> */}
    </div>
  );
};

export default PostForm;
