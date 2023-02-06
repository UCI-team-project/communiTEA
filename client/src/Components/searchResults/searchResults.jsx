import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { List, Space } from "antd";
import { Link } from "react-router-dom";

import style from "./searchResults.module.css";

export default function SearchResults({ storesData }) {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 2,
      }}
      dataSource={storesData.businesses}
      footer={<div></div>}
      renderItem={(item) => (
        <List.Item
          key={item?.name}
          actions={[
            <IconText
              icon={StarOutlined}
              text={item.rating}
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text={`reviews count: ${item.review_count}`}
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />,
          ]}
          extra={
            <div className={style.imageContainer}>
              <img
                width={272}
                alt="logo"
                className={style.storeImg}
                src={item.image_url}
              />
            </div>
          }
        >
          <List.Item.Meta
            title={
              // eslint-disable-next-line react/jsx-no-target-blank
              <Link to={`/store/${item.id}`}>{item.name}</Link>
            }
            description={
              <section className={style.storeListItem}>
                <article>
                  <div className={style.categoryContainer}>
                    {item.categories.map((category, key) => (
                      <p key={key}>{category.alias}</p>
                    ))}
                  </div>
                  <p>{item?.location.display_address[0]}</p>
                  <p>{item?.location.display_address[1]}</p>
                  <p>price: {item?.price}</p>
                  <p>{item?.display_phone}</p>
                </article>
                <>
                  <Link to={`/store/${item.id}`}>
                    <button className={style.moreInfoBtn}>More info</button>
                  </Link>
                </>
                <article></article>
              </section>
            }
          />
        </List.Item>
      )}
    />
  );
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
