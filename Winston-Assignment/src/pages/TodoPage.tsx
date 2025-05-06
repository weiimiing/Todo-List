import { SidebarTrigger } from "@/components/ui/sidebar";
import { useGlobalState } from "@/GlobalState";
import { useState } from "react";
import TaskInput from "@/components/task-input";
import { TaskList } from "@/components/task-list";
import { Separator } from "@/components/ui/separator";

interface TodoItem {
  id: number;
  todoText: string;
  completed: boolean;
}
export default function TodoPage() {
  const [newTodo, setNewTodo] = useState("");
  const {
    todos,
    addTodoItem,
    editTodoItem,
    toggleTodoItemStatus,
    deleteTodoItem,
  } = useGlobalState();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  function handleAddTodo() {
    if (newTodo.trim() !== "") {
      addTodoItem(newTodo);
      setNewTodo("");
    }
  }

  function handleToggleTodo(id: number) {
    toggleTodoItemStatus(id);
  }

  function handleDeleteTodo(id : number) {
    deleteTodoItem(id);
  }

  function startEditing(id: number, text: string) {
    setEditingId(id);
    setEditText(text);
  }

  function saveEdit() {
    if (editingId && editText.trim() !== "") {
      editTodoItem(editingId, editText);
      setEditingId(null);
      setEditText("");
    }
  }

  return (
    <div className="flex flex-col h-full bg-slate-50 ">
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b px-4 lg:h-[60px]">
        <SidebarTrigger className=""/>
        <div className="flex flex-1 items-center justify-between">
          <h1 className="text-xl font-semibold text-slate-800">Todo List</h1>
        </div>
      </header>

      <div className="flex-1 flex flex-col p-4 md:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-slate-800" >My Tasks</h2>
          <p className="text-muted-foreground">Manage your tasks efficiently</p>
        </div>

          <TaskInput
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            handleAddTodo={handleAddTodo}
          />

          <div className="flex justify-between text-sm text-muted-foreground mb-2 px-2">
            <span>Task</span>
            <span>Actions</span>
          </div>

          <Separator className="mb-4" />

          <TaskList
            todos={todos}
            editingId={editingId}
            editText={editText}
            handleToggleTodo={handleToggleTodo}
            handleDeleteTodo={handleDeleteTodo}
            startEditing={startEditing}
            setEditText={setEditText}
            saveEdit={saveEdit}
            setEditingId={setEditingId}
          />
        

        {todos.length > 0 && (
          <div className="mt-4 text-sm text-muted-foreground text-center">
            {todos.filter((t: TodoItem) => t.completed).length} of{" "}
            {todos.length} tasks completed
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
