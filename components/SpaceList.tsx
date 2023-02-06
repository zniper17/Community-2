import { Listbox, Transition } from "@headlessui/react";
import React from "react";
import Select from "react-select";

interface IOption {
  value: string;
  label: string;
}

const languageOptions: IOption[] = [
  { value: "julia", label: "Julia" },
  { value: "haskell", label: "Haskell" },
  { value: "csharp", label: "C#" },
  { value: "go", label: "Go" },
  { value: "javascript", label: "JavaScript(NodeJS)" },
  { value: "scala", label: "Scala" },
  { value: "swift", label: "Swift" },
  { value: "perl", label: "Perl" },
  { value: "lua", label: "Lua" },
  { value: "clisp", label: "Clisp" },
  { value: "objectivec", label: "ObjectiveC" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "bash", label: "Bash" },
  { value: "clojure", label: "Clojure" },
  { value: "rust", label: "Rust" },
  { value: "C", label: "C" },
  { value: "cpp", label: "C++" },
  { value: "cpp14", label: "C++14" },
  { value: "java7", label: "Java 7" },
  { value: "java8", label: "Java 8" },
  { value: "python2", label: "Python 2" },
  { value: "python3", label: "Python 3" },
  { value: "r", label: "R" },
  { value: "fsharp", label: "F#" },
  { value: "kotlin", label: "Kotlin" },
];

function SpaceList() {
  const [selectedFruit, setSelectedFruit] = React.useState("");
  return (
    <div className="w-1/3 bg-white mt-5">
      <Select className="tw-text-sm" options={languageOptions} />
    </div>
  );
}

export default SpaceList;
