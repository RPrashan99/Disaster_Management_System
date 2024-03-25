// components/FileUpload.tsx
import React, { useRef, useState } from "react";
import classNames from "classnames";
export const DragDrop = ({onChange,value}) => {
  const [fileList, setFileList] = useState<File[] | null>(null);
  const [shouldHighlight, setShouldHighlight] = useState(false);
  const preventDefaultHandler = (e: React.DragEvent<File>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };
  const getFileType = (filename: string): string => {
    const regex = /\.(mp4|mp3|jpg|jpeg|png)$/;
    const match = filename.match(regex);

    return match ? match[1] : ''; // Returns the matched file extension or an empty string
  };
  return (
    <div
      className={classNames({
        "mb-3":true,
        "relative":true,
        "p-4 grid place-content-center cursor-pointer": true,
        "text-[#3d3d3d] rounded-lg": true,
        "border-4 border-dashed ": true,
        "transition-colors": true,
        "border-[gray] bg-[#e6e4e4]": !shouldHighlight,
        "border-ControllerSec bg-white": shouldHighlight,
        "hover:text-[purple]": true,

      })}
      onDragOver={(e) => {
        preventDefaultHandler(e);
        setShouldHighlight(true);
      }}
      onDragEnter={(e) => {
        preventDefaultHandler(e);
        setShouldHighlight(true);
      }}
      onDragLeave={(e) => {
        preventDefaultHandler(e);
        setShouldHighlight(false);
      }}
      onDrop={(e) => {
        preventDefaultHandler(e);
        const files = Array.from(e.dataTransfer.files);
        setFileList(files);
        setShouldHighlight(false);
      }}
    >
        <div className="flex flex-col relative justify-center items-center">
            <img src="/controller/Upload icon.png" alt="" className="w-8 h-8"/>
            <h1 className="font-sans ml:text-[20px] md:text-[16px] ms:text-[14px]  font-bold m-1">Drag & Drop files or Browse</h1>
        </div>  
        <div className="grid md:grid-cols-1 w-full h-full items-center justify-center">
        {!fileList ? (
            <>
                <div className="grid grid-cols-1 rounded-lg  bg-[#f7f5f5]">
                    <input
                        className="rounded-xl  placeholder:bg-[#883f3f] mx-5 my-10  border-[black] border-[1px]"
                        title="Browse"
                        placeholder="Browse"
                        value={value}
                        type="file"
                        id="profile_pic"
                        name="profile_pic"
                        accept=".jpg, .jpeg, .png, .mp4, .mp3"
                        onChange={handleFileChange}
                        multiple
                    />
                    {file && (
                    <>
                        {getFileType(file) === 'mp4' ? (
                            <video
                                controls
                                className="mt-4 rounded border border-gray-300"
                                style={{ maxWidth: '20%', maxHeight: '20%' }}
                                >
                                <source src={file} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            ) : getFileType(file) === 'mp3' ? (
                            <audio
                                controls
                                className="mt-4"
                                style={{ maxWidth: '20%' }}
                                >
                                <source src={file} type="audio/mp3" />
                                Your browser does not support the audio tag.
                            </audio>
                            ) : (
                            <img
                                src={file}
                                alt="Preview"
                                className="mt-4 rounded border border-gray-300"
                                style={{ maxWidth: '10%', maxHeight: '10%' }}
                            />
                        )}
                    </>
                    )}
                </div>
            </>
            ) : (
                <>
                    <div className="flex relative flex-col">
                        <div className="flex relative items-center text-[#3f3f3f] hover:text-[black] text-[1.2rem] justify-center ">
                            <h2>Files to Upload</h2>
                        </div>
                        {fileList.map((file, i) => {
                        return <span key={i} className="flex justify-center">{file.name}</span>;
                        })}
                        <div className="flex flx-col justify-center relative gap-2 mt-2">
                            <button className="bg-ControllerSec text-white px-2 py-1 rounded-md hover:bg-[#3d3d3d]">
                                Upload
                            </button>
                        <button
                            className="border border-ControllerSec bg-opacity-10 text-[#000000] px-2 py-1 rounded-md hover:bg-[#ffffff]"
                            onClick={() => {
                            setFileList(null);
                            }}
                        >
                            Clear
                        </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    </div>
  );
}
