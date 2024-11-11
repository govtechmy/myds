import React, { FunctionComponent, ReactNode } from "react";

interface PreviewProps {
  children: ReactNode;
}
const Preview: FunctionComponent<PreviewProps> = ({ children }) => {
  return (
    <div className="bg-bg-washed flex items-center justify-center rounded-lg border py-6">
      {children}
    </div>
  );
};

export default Preview;
