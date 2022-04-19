import { React, useState, useEffect } from "react";
import style from "./index.module.css";

function Main({ activeIndex, setActiveIndex, menuItems }) {
  const [topics, setTopics] = useState([]);
  const feedUrl = "https://medium.com/feed/@stanrutelimited";
  const options = {
    method: "GET",
  };

  useEffect(() => {
    fetch(`https://stanrute-blog.herokuapp.com/${feedUrl}`, options)
      .then((res) => res.text())
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((dom) => {
        let domItems = dom.querySelectorAll("item");
        let result = { items: [] };
        domItems.forEach((item) => {
          let title = item.querySelector("title").textContent;
          let pubDate = item.querySelector("pubDate").textContent;
          let content = item
            .getElementsByTagNameNS("*", "encoded")
            .item(0).textContent;

          // Magic numbers to get thumbnail
          let thumbnail = content.slice(
            content.indexOf("src=") + 5,
            content.indexOf("png") + 3
          );

          result.items.push({
            title,
            pubDate,
            content,
            thumbnail,
          });
        });
        let items = [];
        result.items.forEach((item, i) => {
          items.push({
            title: item.title,
            image: item.thumbnail,
            index: i,
            content: item.content,
          });
        });

        setTopics(items);
      });
  }, []);

  return (
    <main className={style.article}>
      {topics[activeIndex] && (
        <>
          <h1 className={style.title}>{topics[activeIndex].title}</h1>
          <section
            dangerouslySetInnerHTML={{ __html: topics[activeIndex].content }}
          ></section>
          <section className={style.btn_group}>
            <a href="https://stanrute.com/academy" className={style.btn}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.7068 5.29303C12.8943 5.48056 12.9996 5.73487 12.9996 6.00003C12.9996 6.26519 12.8943 6.5195 12.7068 6.70703L9.41379 10L12.7068 13.293C12.8889 13.4816 12.9897 13.7342 12.9875 13.9964C12.9852 14.2586 12.88 14.5094 12.6946 14.6948C12.5092 14.8803 12.2584 14.9854 11.9962 14.9877C11.734 14.99 11.4814 14.8892 11.2928 14.707L7.29279 10.707C7.10532 10.5195 7 10.2652 7 10C7 9.73487 7.10532 9.48056 7.29279 9.29303L11.2928 5.29303C11.4803 5.10556 11.7346 5.00024 11.9998 5.00024C12.265 5.00024 12.5193 5.10556 12.7068 5.29303V5.29303Z"
                  fill="#009153"
                />
              </svg>
              Go Back
            </a>
            {menuItems.length > 1 && (
              <button className={style.btn}>
                {menuItems[activeIndex + 1].name}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.29279 14.707C7.10532 14.5195 7 14.2652 7 14C7 13.7349 7.10532 13.4806 7.29279 13.293L10.5858 10L7.29279 6.70704C7.11063 6.51844 7.00983 6.26584 7.01211 6.00364C7.01439 5.74144 7.11956 5.49063 7.30497 5.30522C7.49038 5.11981 7.74119 5.01465 8.00339 5.01237C8.26558 5.01009 8.51818 5.11088 8.70679 5.29304L12.7068 9.29304C12.8943 9.48057 12.9996 9.73488 12.9996 10C12.9996 10.2652 12.8943 10.5195 12.7068 10.707L8.70679 14.707C8.51926 14.8945 8.26495 14.9998 7.99979 14.9998C7.73462 14.9998 7.48031 14.8945 7.29279 14.707Z"
                    fill="#009153"
                  />
                </svg>
              </button>
            )}
          </section>
        </>
      )}
    </main>
  );
}

export default Main;
