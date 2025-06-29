import React from "react";

const Modal = ({ id, project }) => {
  if (!project) return null;
  return (
    <dialog id={id} className="modal">
      <div className="modal-box bg-base-300 rounded-3xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 text-xl">
            ✕
          </button>
        </form>
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="py-2">{project.description}</p>
        <div className="mb-2">
          <span className="font-semibold">Tech Stack:</span>
          <div className="mt-1 flex flex-wrap gap-2">
            {project.techStack?.map((tech, idx) =>
              typeof tech === "object" ? (
                <span
                  key={idx}
                  className="badge bg-base-300 inline-flex items-center gap-1"
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </span>
              ) : (
                <span key={idx} className="badge bg-base-300">
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-xl">Features:</span>
          <ul className="list-inside list-disc">
            {project.features?.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
