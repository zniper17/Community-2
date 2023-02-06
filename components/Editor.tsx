import { useCallback, useState } from "react";
import type { RemirrorJSON } from "remirror";
import { OnChangeJSON } from "@remirror/react";
import { WysiwygEditor } from "@remirror/react-editors/wysiwyg";

const STORAGE_KEY = "remirror-editor-content";

// const App: React.FC = (props: any) => {};
function App(props: any) {
  const [initialContent, setinitialContent] = useState<
    RemirrorJSON | undefined
  >();

  const handleEditorChange = useCallback((json: RemirrorJSON) => {
    // Store the JSON in localStorage
    // window.localStorage.setItem(STORAGE_KEY, JSON.stringify(json));

    setinitialContent(json);
  }, []);

  const handleClick = useCallback(() => {
    console.log("json", initialContent);

    props.handlePostCreation(initialContent);
  }, []);

  return (
    <MyEditor
      onChange={handleEditorChange}
      initialContent={initialContent}
      handleClick={handleClick}
    />
  );
}

interface MyEditorProps {
  onChange: (json: RemirrorJSON) => void;
  initialContent?: RemirrorJSON;
  handleClick: () => void;
}

const MyEditor: React.FC<MyEditorProps> = ({
  onChange,
  initialContent,
  handleClick,
}) => {
  return (
    <>
      <WysiwygEditor
        placeholder="Enter text..."
        initialContent={initialContent}
      >
        <OnChangeJSON onChange={onChange} />
      </WysiwygEditor>
      <div className="float-right mt-5">
        <button
          id="button"
          type="submit"
          className="bg-indigo-600 shadow-xl hover:bg-indigo-500 text-white font-bold rounded-full px-4 py-2"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default App;
