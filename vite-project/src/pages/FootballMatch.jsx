// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import * as API from "../api/footballMatchApi";
import Header from "../components/Header";

const FootballMatch = () => {
  const [GetListFootballMatch, setGetListFootballMatch] = useState([]);

  useEffect(() => {
    const get2 = async () => {
      try {
        const res = await API.getList({
          fields: ["$all", { team_a: ["$all"] }, { team_b: ["$all"] }],
        });
        console.log("🚀 ~ get2 ~ res:", res);
        setGetListFootballMatch(res?.rows);
      } catch (error) {
        console.error(error);
      }
    };

    get2();
  }, []);
  return (
    <div>
      {" "}
      <Header />
      <div className=" mx-auto max-w-[1500px] text-white">
        {GetListFootballMatch.map((item) => (
          <div className="card_match" key={item}>
            {/* header */}
            <div className="flex justify-between">
              <div className="p-1 bg-red-500 text-center rounded-sm">
                {item?.start_time || "9:00 19/04"}
              </div>
            </div>
            {/* content */}
            <div className="flex justify-between mt-3 mx-5">
              <div className="text-center">
                <img src={item?.team_a?.link_logo} width={64} height={64} />
                <p>{item?.team_a?.name}</p>
              </div>
              <div className="text-center">
                <h1 className="text-[30px] font-bold">VS</h1>
              </div>
              <div className="text-center">
                <img src={item?.team_b?.link_logo} width={64} height={64} />
                <p>{item?.team_b?.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FootballMatch;
