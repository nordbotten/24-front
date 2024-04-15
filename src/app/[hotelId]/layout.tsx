import React from "react";

type Props = {
  children: React.ReactNode;
};

const SingleLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="mx-auto max-w-3xl mt-4 mb-5">
        <a href="/">&laquo; Back to hotel list</a>
      </div>
      <div className="mx-auto max-w-3xl bg-white mb-10 shadow-lg rounded-lg">
        {children}
      </div>
    </>
  );
};
export default SingleLayout;
