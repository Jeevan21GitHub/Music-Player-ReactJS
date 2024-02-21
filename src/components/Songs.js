import React, { useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeSong } from "../redux/reducers/songSlice";
const Songs = (props) => {
  const song = useSelector((state) => state.song.value);
  const dispatch = useDispatch();
  const onChangeLocalStorage = () => {
    const player = document.getElementById("audio");
    localStorage.setItem("lastSong", JSON.stringify(song));
    localStorage.setItem("startTime", player.currentTime);
  };
  useEffect(() => {
    const lastSong = localStorage.getItem("lastSong");
    const startTime = localStorage.getItem("startTime");
    dispatch(changeSong(JSON.parse(lastSong)));
    setTimeout(() => {
      const player = document.getElementById("audio");
      try {
        if (player.currentTime > 0) {
          player.currentTime = startTime;
        }
      } catch (err) {
        console.log(err.message);
      }
    });
  }, [dispatch]);
  return (
    <section>
      <div className="flex flex-col justify-center text-center ">
        <div
          className="relative flex justify-center "
          onClick={() => {
            dispatch(changeSong(props));
            onChangeLocalStorage();
            setTimeout(() => {
              if (song?.id !== props?.id) {
                const player = document.getElementById("audio");
                player.addEventListener("loadeddata", () => {
                  player.play();
                });
                try {
                  player.load();
                } catch (err) {
                  console.log(err.message);
                }
              }
            });
          }}
        >
          <img
            src={props?.thumbUrl}
            alt="img"
            className="rounded cursor-pointer"
          />
          {props?.id === song?.id ? (
            <div className="absolute text-center cursor-pointer mt-7 text-8xl opacity-45">
              <FaPause />
            </div>
          ) : (
            <div className="absolute text-center cursor-pointer mt-7 text-8xl opacity-45">
              <FaPlay />
            </div>
          )}
        </div>
        <div>
          <p>{props.title}</p>
          <p>Artist: {props.artist}</p>
        </div>
      </div>
    </section>
  );
};

export default Songs;
