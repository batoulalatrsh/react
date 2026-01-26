import { use } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        taskId: Math.random(),
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        tasks: prevProject.tasks.filter((task) => task.taskId !== id),
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: undefined,
        projects: prevProject.projects.filter((project) => project.id !== id),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId,
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onClicked={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onClicked={handleStartAddProject}
        projects={projectState.projects}
        onSelect={handleSelectedProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
