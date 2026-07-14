import { useMessages, useTranslations } from "next-intl"
import { Project } from "../types/projects"


export default function AllProjects() {
  const t = useTranslations("Projects")
  const projects = t.raw("list")
  console.log(projects)
  console.log("sdasd")
  return (
    <div>
      {projects.map((project: Project) => {

        return (
          <div className="bg-zinc-600 p-2 border-2 border-yellow-950/50 rounded-3xl ">
            {
              project.url &&
              <div >
                <iframe className="mx-auto" src={project.url} width={"80%"} height={"200px"}></iframe>
              </div>
            }
            <div>
              <ul>
                <li>{project.name}</li>
                <li>
                  <ul className="list-disc ps-5">
                    {project.description
                      .split("\n")
                      .filter(Boolean)
                      .map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                </li>
                <li>{ }</li>
                <li>{ }</li>
              </ul>
            </div>


          </div>
        )
      })}

    </div>
  )
}