import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  const [bulletsLocal, setBulletsLocal] = React.useState(bullets);

  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="w-3/5">
        <h2 className="text-lg font-bold">{position}</h2>
        <div className="text-lg w-2/5">
          <h2>{dates}</h2>
          <h3 className="text-sm opacity-50">{type}</h3>
        </div>
        {bulletsLocal && bulletsLocal.length > 0 && (
          <ul className="list-disc pl-8"> {/* Added pl-4 class for indentation */}
            {bulletsLocal.map((bullet, index) => (
              <li key={index} className="text-sm my-1 opacity-70">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
