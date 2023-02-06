import React from "react";

export interface IProps {
  noPadding: boolean;
  children: React.ReactNode;
}

export default function Card(props: IProps) {
  const { noPadding, children } = props;
  let classes = "bg-white shadow-md shadow-gray-300 rounded-md mb-5";
  if (!noPadding) {
    classes += " p-4";
  }
  return <div className={classes}>{children}</div>;
}
