"use client"
import React, { useState } from 'react';
import useDialogState from '@/hooks/use-dialog-state';
import { Blog } from '@/features/blogs/blog-schema';

type BlogDialogType = 'invite' | 'add' | 'edit' | 'delete';

interface UsersContextType {
  open: BlogDialogType | null;
  setOpen: (str: BlogDialogType | null) => void;
  currentRow: Blog | null;
  setCurrentRow: React.Dispatch<React.SetStateAction<Blog | null>>;
}

const BlogsContext = React.createContext<UsersContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function BlogsProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<BlogDialogType>(null);
  const [currentRow, setCurrentRow] = useState<Blog | null>(null);

  return (
    <BlogsContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </BlogsContext>
  );
}

export const useBlogs = () => {
  const blogsContext = React.useContext(BlogsContext);

  if (!blogsContext) {
    throw new Error('useUsers has to be used within <UsersContext>');
  }

  return blogsContext;
};
