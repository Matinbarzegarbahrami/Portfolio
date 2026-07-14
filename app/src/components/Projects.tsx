import { useTranslations } from "next-intl";
import { Project } from "../types/projects";


export default function AllProjects() {
  const t = useTranslations("Projects");
  const projects = t.raw("list");

  return (
    <div className="flex flex-col gap-4">
      {projects.map((project: Project) => {
        return (
          <div className="bg-zinc-600 w-full lg:w-5/6 mx-auto p-2 border-2 border-yellow-950/50 rounded-3xl ">
            {
              project.url &&
              <div >
                <iframe className="mx-auto border-2 border-amber-400 rounded-3xl w-full sm:w-2/3 md:w-3/5 lg:w-4/5 h-[calc(100vh-200px)] lg:h-[calc(80lvh-99px)]" src={project.url} width={"100%"} height={"100%"}></iframe>
              </div>
            }
            <div className="mt-5">
              <ul>
                <li className="text-2xl font-bold mb-4">{project.name}</li>
                <li className="mx-4 leading-8">
                  <ul className="list-disc ps-5">
                    {project.description
                      .split("\n")
                      .filter(Boolean)
                      .map((item, index) => (
                        <li key={index}>- {item}</li>
                      ))}
                  </ul>
                </li>
                {project.url && (
                  <li className="my-6">
                    <a
                      href={project.url}
                      target="_blank"
                      className="bg-yellow-600 px-4 py-3 rounded mx-5"
                    >
                      {project.viewProject}
                    </a>
                  </li>
                )}
                {project.note && <li className="bg-red-800 w-max py-2 px-3 rounded mt-4 mx-4">{project.note}</li>}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}