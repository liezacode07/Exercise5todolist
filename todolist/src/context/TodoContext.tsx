import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Todo {
  id: number;
  text: string;
  complete?: boolean;
}

interface TodoContextType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodoList = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodoList must be used within a TodoContextProvider');
  }
  return context;
};

export { TodoContextProvider, useTodoList };
