import { Button } from "../components/ui/button";
import { CheckCircle2, Circle, Trash2, Pencil } from "lucide-react";
import { Input } from "../components/ui/input";

interface TodoItem {
  id: number;
  todoText: string;
  completed: boolean;
}

interface TaskListProps {
  todos: TodoItem[];
  editingId: number | null;
  editText: string;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
  startEditing: (id: number, text: string) => void;
  setEditText: (value: string) => void;
  saveEdit: () => void;
  setEditingId: (value: number | null) => void;
}

export function TaskList({
  todos,
  editingId,
  editText,
  handleToggleTodo,
  handleDeleteTodo,
  startEditing,
  setEditText,
  saveEdit,
  setEditingId,
}: TaskListProps) {
  return (
    <div className="space-y-3">
      {todos.length === 0 ? (
        <p className="text-center text-muted-foreground py-4">
          No tasks yet. Add one above!
        </p>
      ) : (
        todos.map((todo: TodoItem) => (
          <div
            key={todo.id}
            className="flex items-center justify-between rounded-lg border p-3 text-sm"
          >
            <div className="flex items-center space-x-3 flex-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => handleToggleTodo(todo.id)}
              >
                {todo.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                ) : (
                  <Circle className="h-5 w-5" />
                )}
                <span className="sr-only">
                  {todo.completed ? "Mark as incomplete" : "Mark as complete"}
                </span>
              </Button>

              {editingId === todo.id ? (
                <div className="flex-1 flex space-x-2">
                  <Input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveEdit();
                      if (e.key === "Escape") setEditingId(null);
                    }}
                    autoFocus
                    className="h-7"
                  />
                  <Button size="sm" onClick={saveEdit}>
                    Save
                  </Button>
                </div>
              ) : (
                <span
                  className={
                    todo.completed ? "line-through text-muted-foreground" : ""
                  }
                >
                  {todo.todoText}
                </span>
              )}
            </div>

            {editingId !== todo.id && (
              <div className="flex space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-muted-foreground hover:text-primary"
                  onClick={() => startEditing(todo.id, todo.todoText)}
                >
                  <Pencil className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-muted-foreground hover:text-destructive"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
