import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";
import axios from "axios";

interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface TaskContextType {
  tasks: Task[];
  users: User[];
  loading: boolean;
}

interface TaskProviderProps {
  children: ReactNode;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get<Task[]>(
          "https://nextjs-boilerplate-five-plum-29.vercel.app/api/tasks"
        );
        const completedTasks = response.data.filter((task) => task.completed);
        setTasks(response.data);

        const userIds = Array.from(
          new Set(completedTasks.map((task) => task.id))
        );
        const userResponses = await Promise.all(
          userIds.map((id) =>
            axios.get<User>(
              `https://nextjs-boilerplate-five-plum-29.vercel.app/api/users/${id}`
            )
          )
        );
        setUsers(userResponses.map((res) => res.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, users, loading }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
