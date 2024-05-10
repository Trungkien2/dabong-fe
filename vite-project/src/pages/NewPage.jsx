// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as API from "../api/newsApi";
import Header from "../components/Header";

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
          <div className="grid xl:grid-cols-4 xl:gap-4 md:grid-cols-2 md:gap-6 sm:grid-cols-1 sm:gap-6">
            {list?.length > 0 &&
              list?.map((item) => (
                <article
                  key={item.id}
                  className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out "
                >
                  <img
                    src={item?.link_url}
                    alt="Apartment Planned at 715 Main"
                    className="h-56 w-full object-cover shadow-md rounded-t-lg"
                  />
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1 flex flex-col p-5 ">
                      <h2 className="font-bold font-serif text-black ">
                        {item?.title}
                      </h2>
                      <section className="mt-2 flex-1">
                        <p className="text-xs line-clamp-3 text-blackO">
                          {item?.description}
                        </p>
                      </section>
                      <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
                        <p>buffalorising</p>
                        <p>
                          <time
                            dateTime="2024-05-09T04:10:51.000Z"
                            title="2024-05-09T04:10:51Z"
                          >
                            21 hours ago
                          </time>
                        </p>
                      </footer>
                    </div>
                    <button
                      className="bg-orange-400 h-10 rounded-b-lg text-black font-bold hover:bg-orange-500"
                      onClick={() => navigate(`/news/${item?.id}`)}
                    >
                      Read More
                    </button>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
