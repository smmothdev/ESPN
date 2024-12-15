import { useState } from "react";

interface MultiFileUploadProps {
  maxFiles?: number; // Optional prop to set maximum file count
  onFilesChange?: (files: File[]) => void; // Add this prop to notify parent about file changes
}

const MultiFileUpload: React.FC<MultiFileUploadProps> = ({
  maxFiles = 4,
  onFilesChange,
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      if (files.length + newFiles.length > maxFiles) {
        alert(`You can only upload up to ${maxFiles} files.`);
        return;
      }
      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);

      // Notify parent component if onFilesChange is provided
      if (onFilesChange) {
        onFilesChange(updatedFiles);
      }
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);

    // Notify parent component if onFilesChange is provided
    if (onFilesChange) {
      onFilesChange(updatedFiles);
    }
  };

  return (
    <div className="w-full">
      {/* Drag & Drop Section */}
      <div className="relative border-dashed border-2 border-gray-300 p-6 rounded-lg text-center cursor-pointer hover:bg-gray-50">
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="flex flex-row justify-center items-center gap-2">
            <img src="/assets/images/upload.svg" alt="upload" />
            <p className="text-gray-500 text-2xl text-center font-albert">
              Drag & Drop Files Here
            </p>
          </div>
          <input
            id="file-upload"
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        {/* File Count and Uploaded Files */}
        <div className="absolute bottom-2 right-2 text-gray-500 text-sm text-center font-albert align-bottom self-end">
          {files.length}/{maxFiles} files
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-4">
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded text-gray-600 text-sm"
              >
                <span>{file.name}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveFile(index)}
                  className="text-red-500 text-sm font-bold"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-2 text-black text-sm text-center flex items-center justify-center gap-1">
        Drag and drop or browse to upload your file(s)
        <img src="/assets/images/warning.svg" alt="warning" />
      </p>
    </div>
  );
};

export default MultiFileUpload;
