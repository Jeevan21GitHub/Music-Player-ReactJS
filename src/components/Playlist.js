import React, { useState } from "react";
import { playlistData } from "../data/data";
import { useSelector } from "react-redux";
import Songs from "./Songs";
import { useDispatch } from "react-redux";
import { changePlayList } from "../redux/reducers/listSlice";
import { GiExitDoor } from "react-icons/gi";

const Playlist = () => {
  const [isPlaylist, setIsPlaylist] = useState(true);
  const [playlist, setPlaylist] = useState({});
  const songList = useSelector((state) => state.list.value);
  const dispatch = useDispatch();
  return (
    <section>
      {isPlaylist ? (
        <div>
          {playlistData.map((item, index) => (
            <div key={index} className="my-5">
              <div
              
                className="flex flex-wrap justify-center text-center md:flex-col"
              >
                <div className="flex justify-center">
                  <img
                    src={item.coverUrl}
                    alt="img"
                    className="w-1/2 rounded cursor-pointer md:w-3/12"
                    onClick={() => {
                      setIsPlaylist(false);
                      setPlaylist(item);
                      dispatch(changePlayList(item.songs));
                    }}
                  />
                </div>
                <div>
                  <p>{item.title}</p>
                  <p>Artist: {item.artist}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="sticky z-10 flex items-center justify-center py-5 mx-1 my-5 bg-white top-32">
            <div className="w-4/12 text-5xl ">
              <GiExitDoor
                className="w-full cursor-pointer"
                onClick={() => setIsPlaylist(true)}
              />
            </div>
            <div className="flex justify-center w-4/12">
              <img src={playlist.coverUrl} alt="img" className="w-40 rounded-full md:w-52" />
            </div>
            <div className="w-4/12">
              <p className="w-full text-2xl font-bold text-center">
                {playlist.title}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 overflow-hidden md:grid-cols-4">
            {songList.map((item, index) => (
              <div key={index}>
                <Songs {...item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Playlist;
