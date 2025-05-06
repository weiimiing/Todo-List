import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface TaskInputProps {
  newTodo: string;
  setNewTodo: (value: string) => void;
  handleAddTodo: () => void;
}

export default function TaskInput({
  newTodo,
  setNewTodo,
  handleAddTodo,
}: TaskInputProps) {
  return (
    <div className="flex space-x-2 mb-8">
      <Input
        placeholder="Add a new task..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
        className="flex-1"
      />
      <Button onClick={handleAddTodo} size="sm" className="bg-slate-700">
        <Plus className="h-4 w-4 mr-1" />
        Add
      </Button>
    </div>
  );
}
