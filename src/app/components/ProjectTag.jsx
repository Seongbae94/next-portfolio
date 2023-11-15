import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonSyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonSyles}`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
