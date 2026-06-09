import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CloudUpload } from "lucide-react";
import { useDropzone } from "react-dropzone";

const mainVariant = {
  initial: { x: 0, y: 0 },
  animate: { x: 20, y: -20, opacity: 0.9 },
};

const secondaryVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

interface FileUploadProps {
  onChange?: (files: File[]) => void;
}

export const FileUploadStruc: React.FC<FileUploadProps> = ({ onChange }) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles]);
    onChange?.(newFiles);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: console.error,
  });

  const formatFileSize = (size: number) => (size / (1024 * 1024)).toFixed(2);

  const formatDate = (timestamp: number) =>
    new Date(timestamp).toLocaleDateString();

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        whileHover="animate"
        className="p-6 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden"
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />
        <div className="flex flex-col items-center justify-center">
          <p className="relative z-20 font-bold text-dark dark:text-neutral-300 text-xl">
            Upload file
          </p>
          <p className="relative z-20 font-normal text-neutral-400 dark:text-neutral-400 text-base mt-2">
            Drag or drop your files here or click to upload
          </p>
          <div className="relative w-full mt-10 max-w-xl mx-auto">
            {files.length > 0 ? (
              files.map((file, idx) => (
                <FileItem
                  key={file.name + idx}
                  file={file}
                  formatFileSize={formatFileSize}
                  formatDate={formatDate}
                  isFirst={idx === 0}
                />
              ))
            ) : (
              <EmptyState isDragActive={isDragActive} />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// File Item Component
interface FileItemProps {
  file: File;
  formatFileSize: (size: number) => string;
  formatDate: (timestamp: number) => string;
  isFirst: boolean;
}
const FileItem: React.FC<FileItemProps> = ({
  file,
  formatFileSize,
  formatDate,
  isFirst,
}) => (
  <motion.div
    layoutId={isFirst ? "file-upload" : `file-upload-${file.name}`}
    className={cn(
      "relative overflow-hidden z-40 bg-white dark:bg-white/10 flex flex-col items-start justify-start md:h-24 p-4 mt-4 w-full mx-auto rounded-md shadow-sm",
    )}
  >
    <div className="flex justify-between w-full items-center gap-4">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layout
        className="text-sm font-medium text-neutral-700 dark:text-neutral-300 truncate max-w-xs"
      >
        {file.name}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layout
        className="rounded-lg px-2 py-1 w-fit shrink-0 text-xs font-medium text-neutral-600 dark:bg-white/20 dark:text-white shadow-input"
      >
        {formatFileSize(file.size)} MB
      </motion.p>
    </div>
    <div className="flex text-sm md:flex-row flex-col items-start md:items-center w-full mt-2 justify-between text-neutral-600 dark:text-neutral-400">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layout
        className="px-3 py-1 rounded-md bg-gray-100 dark:bg-white/20 text-xs"
      >
        {file.type}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layout
        className="text-sm"
      >
        modified {formatDate(file.lastModified)}
      </motion.p>
    </div>
  </motion.div>
);

// Empty State Component
interface EmptyStateProps {
  isDragActive: boolean;
}
const EmptyState: React.FC<EmptyStateProps> = ({ isDragActive }) => (
  <>
    <motion.div
      layoutId="file-upload"
      variants={mainVariant}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={cn(
        "relative group-hover/file:shadow-2xl z-40 bg-card dark:bg-white/10 flex items-center justify-center h-28 mt-4 w-full max-w-32 mx-auto rounded-md shadow-[0px_10px_50px_rgba(0,0,0,0.1)]",
      )}
    >
      {isDragActive ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-neutral-600 flex flex-col items-center"
        >
          Drop it
          <CloudUpload className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
        </motion.p>
      ) : (
        <CloudUpload className="h-6 w-6 text-neutral-600 dark:text-neutral-300" />
      )}
    </motion.div>
    <motion.div
      variants={secondaryVariant}
      className="absolute opacity-0 border border-dashed border-primary inset-0 z-30 bg-transparent flex items-center justify-center h-28 mt-4 w-full max-w-32 mx-auto rounded-md"
    />
  </>
);

export default function FileUploadMotion() {
  const [file, setFile] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFile(files);
    console.log(file);
  };
  return (
    <>
      <div className="w-full mx-auto min-h-72 border border-dashed bg-card  border-border rounded-lg">
        <FileUploadStruc onChange={handleFileUpload} />
      </div>
    </>
  );
}
