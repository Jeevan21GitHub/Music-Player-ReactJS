import React, { useState } from "react";
import Menu from "../components/Menu";

import Songs from "../components/Songs";
import Playlist from "../components/Playlist";
import Player from "../components/Player";
import Upload from "../components/Upload";
import { useSelector } from "react-redux";

const Home = () => {
  const [isSong, setIsSong] = useState(true);
  const [isUpload, isSetUpload] = useState(false);
  const songData=useSelector((state)=>state.list.value)
  return (
    <section>
      <div className="sticky top-0 z-10 bg-white">
        <div>
          <h1 className="py-3 text-2xl font-bold text-center text-purple-900">
            Music Player
          </h1>
        </div>
        <div>
          <Menu
            isSong={isSong}
            setIsSong={setIsSong}
            isUpload={isUpload}
            isSetUpload={isSetUpload}
          />
        </div>
      </div>
      <div className="mt-4">
        {
            isUpload?<Upload/>:
            isSong? (
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  {songData.map((item, index) => (
                    <Songs key={index} {...item} />
                  ))}
                </div>
              ) : (
                <div>
                  <Playlist />
                </div>
              )
        }
      </div>
      <div className={`${!isUpload?"block":"hidden"} sticky bottom-0`}>
        <Player />
      </div>
    </section>
  );
};

export default Home;
