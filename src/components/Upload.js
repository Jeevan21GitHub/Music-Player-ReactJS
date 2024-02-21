import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../redux/reducers/listSlice";


const Upload = () => {
  const dispatch = useDispatch();
  const songList = useSelector((state) => state.list.value);

  const [newFile, setNewFile] = useState({});
  const [inputCleared, setInputCleared] = useState(false);

  const onChangeFile = (event) => {
    const file = event.target.files[0];
    const newTrack = {
      title: file.name,
      artist: "uploaded File",
      coverUrl:
        "https://media.wired.com/photos/5926df59f3e2356fd800ab80/master/w_2560%2Cc_limit/GettyImages-543338600-S2.jpg",
      thumbUrl:
        "https://www.slidekit.com/wp-content/uploads/2023/03/Free-Music-Theme-Background-for-PowerPoint-150x150.webp",
      audio: URL.createObjectURL(file),
      palette: "null",
      id: Number(songList.length + 1),
    };
    setNewFile(newTrack);
    setInputCleared(false);
  };

  const handleSubmit = () => {
    if (newFile&&newFile.title&&newFile.title.length>0) {
      dispatch(addSong(newFile));
      setInputCleared(true);
     alert("Uploaded Successfully")
    } else {
      alert("Please Upload File");
    }
  };
  return (
    <section>
      <div>
        <p className="text-2xl font-bold text-center">Upload Song</p>
      </div>
      <div className="flex justify-center my-5">
        <div className="flex flex-col items-center">
          <input
            type="file"
            accept=".mp3"
            onChange={onChangeFile}
            className={`${inputCleared ? "cleared" : " "} `}
          />
          <input
            type="submit"
            value="Upload"
            className="w-24 py-2 my-3 font-semibold text-white bg-green-900 rounded cursor-pointer hover:bg-green-700"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default Upload;
