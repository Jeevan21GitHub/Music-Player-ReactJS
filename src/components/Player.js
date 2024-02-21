import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import "./Player.css";
import { changeSong } from "../redux/reducers/songSlice";

const Player = () => {
  const song = useSelector((state) => state.song.value);
  const songList = useSelector((state) => state.list.value);
  const dispatch = useDispatch();

  const index = songList.findIndex(
    (item) => song && item.id === Number(song.id)
  );

  const isPrev = () => index > 0 && songList.length > 1;

  const isNext = () => index < songList.length - 1 && songList.length > 1;

  useEffect(() => {
    
    const storedSongData = localStorage.getItem("lastSong");
    const startTime = localStorage.getItem("startTime");

    if (storedSongData) {
      const player = document.getElementById("audio");
      dispatch(changeSong(JSON.parse(storedSongData)));
      try {
        player.currentTime = startTime;
      } catch (err) {
        console.log(err.message);
      }
    }
  }, [dispatch,]);

  const reloadSong =() => {
    const player = document.getElementById("audio");
    localStorage.setItem("startTime", player.currentTime);
    localStorage.setItem("lastSong", JSON.stringify(song));

    var playPromise = player.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          console.log('success');
        })
        .catch((error) => {
          // Auto-play was prevented
          // Show paused UI.
          console.log(error.message);
        });
    }

    try {
      player.load();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section className="py-3 bg-white">
      <div className="flex flex-col justify-center md:flex-row">
        <div className="flex items-center justify-center py-1">
          <img
            src={song?.thumbUrl}
            alt="img"
            className="w-20 h-20 rounded-full animate-spin-slow"
          />
          <p className="ml-1 font-semibold">{song?.title}</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-2xl">
            <MdSkipPrevious
              className={`${
                isPrev() ? "text-black" : "text-gray-300"
              } cursor-pointer`}
              onClick={() => {
                if (isPrev()) {
                  dispatch(changeSong(songList[index - 1]));
                  reloadSong();
                  
                }
              }}
            />
          </div>
          <div>
            <audio id="audio" controls>
              <source src={song?.audio} />
            </audio>
          </div>
          <div className="text-2xl">
            <MdSkipNext
              className={`${
                isNext() ? "text-black" : "text-gray-300"
              } cursor-pointer`}
              onClick={() => {
                if (isNext()) {
                  dispatch(changeSong(songList[index + 1]));
                  reloadSong();
                  
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Player;
