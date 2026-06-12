export interface Assignee {
  id: string;
  name: string;
  avatar: string;
}

export interface Attachment {
  url: string;
  name?: string;
  locked?: boolean;
}

export interface Comment {
  author: string;
  avatar: string;
  text: string;
  date: string;
}

export interface Subtask {
  title: string;
  isCompleted: boolean;
}

export interface Task {
  id: string | number;
  taskTitle: string;
  taskImage?: string;
  taskText?: string;
  dueDate?: string;
  labels?: string[];
  priority: string;
  assignedTo: Assignee[];
  attachments?: Attachment[];
  comments?: Comment[];
  subtasks?: Subtask[];
}

export interface TodoCategory {
  id: string | number;
  name: string;
  child: Task[];
}
