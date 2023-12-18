import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type UploadFileProps = {
  setFile: (file: File) => void;
};

const UploadFile = ({ setFile }: UploadFileProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFile(acceptedFiles[0]);
    },
    [setFile]
  );
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="grid w-full gap-2.5 p-4 text-sm text-center border rounded-md place-items-center select-none cursor-pointer"
    >
      <input {...getInputProps()} />

      <div className="grid p-2 bg-gray-200 rounded-full ring ring-gray-100 w-fit place-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path
            d="M6.6665 13.3333L9.99984 10M9.99984 10L13.3332 13.3333M9.99984 10V17.5M16.6665 13.9524C17.6844 13.1117 18.3332 11.8399 18.3332 10.4167C18.3332 7.88536 16.2811 5.83333 13.7498 5.83333C13.5677 5.83333 13.3974 5.73833 13.3049 5.58145C12.2182 3.73736 10.2119 2.5 7.9165 2.5C4.46472 2.5 1.6665 5.29822 1.6665 8.75C1.6665 10.4718 2.36271 12.0309 3.48896 13.1613"
            stroke="#737373"
            stroke-width="1.78571"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      {acceptedFiles.length > 0 ? (
        <p>{acceptedFiles?.[0]?.name}</p>
      ) : (
        <p className="text-gray-500">
          Перетащите сюда несколько файлов или щелкните, чтобы выбрать файлы. (Принимаются файлы .xlsx)
        </p>
      )}
    </div>
  );
};

export { UploadFile };
