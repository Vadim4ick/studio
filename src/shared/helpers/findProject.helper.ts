import { mockProjects } from "../const/mockProjects.const"

export function findProject(id: string | number) {
  return mockProjects.find((project) => +project.id === +id)
}
