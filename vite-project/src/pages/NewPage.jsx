// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import news from "../assets/news.png";
import * as API from "../api/newsApi";
import { useNavigate } from "react-router-dom";

const NewPage = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const getList = async () => {
    try {
      const res = await API.getList({
        fields: ["$all"],
      });
      console.log("🚀 ~ getList ~ res:", res);
      setList(res?.rows);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      {" "}
      <Header />
      <div className=" mx-auto max-w-[1500px] text-white">
        <h1 className="text-[30px] font-bold mt-4">Tin tức mới nhất</h1>
        <div className="mt-4">
          {list?.length > 0 &&
            list?.map((item) => (
              <div
                className="border-t-4 border-indigo-500 flex p-5 justify-between max-w-[1200px]"
                key={item?.id}
              >
                <img src={item?.link_url || news} width={300} height={250} />
                <div className="ml-4">
                  <p
                    className="text-green-500 font-bold text-[18px] cursor-pointer"
                    onClick={() => navigate(`/news/${item?.id}`)}
                  >
                    {item?.title}
                  </p>
                  <p className="text-[#b0b0b0]">21/04/2024</p>
                  <p className="text-[#7777]">{item?.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewPage;
