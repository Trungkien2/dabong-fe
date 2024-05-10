// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from "../api/newsApi";
import Header from "../components/Header";

const NewPageDetail = () => {
  const { id } = useParams();
  const [list, setList] = useState({});

  const getList = async () => {
    try {
      const res = await API.getOne(id, {
        fields: ["$all"],
      });
      console.log("🚀 ~ getList ~ res:", res);
      setList(res);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    if (id) {
      getList();
    }
  }, [id]);
  return (
    <div>
      {" "}
      <Header />
      <div className=" mx-auto max-w-[1500px] text-white">
        <div className="mt-[50px]">
          <div className="max-w-6xl mx-auto bg">
            <article>
              <section className="flex flex-col lg:flex-row px-0 lg:px-10">
                <img
                  src={list?.link_url}
                  alt="article.title"
                  className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl   object-cover object-center rounded-lg shadow-lg   "
                />
                <div className="px-10">
                  <h1 className="Title px-0  pb-2">{list?.title}</h1>
                  <div className="flex divide-x-2 space-x-4">
                    <h2 className="font-bold">By: Buffalo Rising</h2>
                    <h2 className="font-bold pl-4">Source: buffalorising</h2>
                    <p className="pl-4">
                      <time
                        dateTime="2024-05-09T04:10:51.000Z"
                        title="2024-05-09T04:10:51Z"
                      >
                        21 hours ago
                      </time>
                    </p>
                  </div>
                  <p className="pt-4">{list?.description}</p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPageDetail;
