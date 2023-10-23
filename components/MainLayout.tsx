import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[80rem] mx-auto m-4 rounded-md shadow-lg">
      {children}
    </div>
  );
}

export default MainLayout;
