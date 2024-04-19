// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import foobat from "../assets/football.svg";
import bas from "../assets/basketball.svg";
import live from "../assets/livescore.svg";
import playIcon from "../assets/playIcon.svg";
import axios from "axios";
import "./index.css";
import logomTeam from "../assets/logoTeam.webp";
import ModalPlayVideo from "../components/ModalPlayVideo";

const options = {
  method: "GET",
  url: "https://free-football-soccer-videos.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "51d63796d6msh92dc679277b0245p15b696jsn5c3bfc243238",
    "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
  },
};
const HomePage = () => {
  const [video, setVideo] = useState();
  const [open, setOpen] = useState(false);
  const [htmlString, setHtmlString] = useState("");
  useEffect(() => {
    const get = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setVideo(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    get();
  }, []);

  return (
    <div>
      <Header />
      <div className="mx-auto  max-w-7xl">
        <h1
          className="text-3xl rounded-lg p-2 text-white mt-10 text-center font-bold"
          style={{
            background: `linear-gradient(142deg, #BB5014 0%, #8B0000 100%)`,
          }}
        >
          {" "}
          Link Trực Tiếp Bóng Đá siêu nét, Xem Bóng Đá Trực Tuyến tốc độ cao
        </h1>
      </div>
      <div className=" mx-auto max-w-[1500px] mt-9">
        <div className=" text-white text-[24px] flex  bg-gray-800 p-4">
          <div className=" ">
            <div className="flex bg-green-500 p-2 rounded-md">
              <img src={foobat} width={16} height={16} />
              <div className="ml-3"> Bóng đá</div>
            </div>
          </div>
          <div className="flex  p-2 rounded-md mx-2">
            <img src={bas} width={16} height={16} />
            <div className="ml-3"> Bóng Rổ</div>
          </div>
          <div className="flex  p-2 rounded-md">
            <img src={live} width={20} height={20} />
            <div className="ml-3"> liveScore</div>
          </div>
        </div>
        <div className="mx-auto max-w-[1300px] flex font-bold mt-6 justify-center text-[20px]">
          <p className="text-blue-300">Trận Hot</p>
          <p className="text-pink-300 mx-3">Đang đá</p>
          <p className="text-orange-300 mr-3">Hôm nay</p>
          <p className="text-red-400">Ngày mai </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-white mt-3">
          {Array.from({ length: 12 }).map((item) => (
            <div className="card_match" key={item}>
              {/* header */}
              <div className="flex justify-between">
                <p>OFC champoship Cup</p>
                <div className="p-1 bg-red-500 text-center rounded-sm">
                  9:00 19/04
                </div>
              </div>
              {/* content */}
              <div className="flex justify-between mt-3 mx-5">
                <div className="text-center">
                  <img src={logomTeam} width={64} height={64} />
                  <p>Team 1</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-500 rounded-sm p-2">
                    Đang điễn ra
                  </div>
                  <h1 className="text-[30px] font-bold">VS</h1>
                </div>
                <div className="text-center">
                  <img src={logomTeam} width={64} height={64} />
                  <p>Team 2</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="rounded-md bg-orange-500 text-center p-3 text-[14px] w-fit">
            {" "}
            VIDEO BÓNG ĐÁ
          </div>
          <div className="flex gap-9 mt-5 flex-wrap justify-center">
            {video?.length > 0 &&
              video?.map((item) => (
                <div
                  className="w-[300px] h-[300px] cursor-pointer card_video"
                  key={item?.title}
                  onClick={() => {
                    setOpen(true);
                    setHtmlString(item?.embed);
                  }}
                >
                  <img src={item.thumbnail} />
                  <img src={playIcon} className="play_icon" />
                  <div className="bg-gray-600 p-5 text-center text-white">
                    {" "}
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {open && htmlString && (
        <ModalPlayVideo open={open} setOpen={setOpen} htmlString={htmlString} />
      )}
    </div>
  );
};

export default HomePage;
