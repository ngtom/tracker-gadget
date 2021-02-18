import Task from "./Task";

const Tasks = ({ tasks, onDelTask, onToggle }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelTask={onDelTask}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
