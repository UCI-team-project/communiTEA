import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'
import { Avatar, List, Space } from 'antd'
import React from 'react'
import style from './searchResults.module.css'

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)
const SearchResults = ({ storesData }) => {
  return (
    <List
      itemLayout='vertical'
      size='large'
      pagination={{
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 3,
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
              key='list-vertical-star-o'
            />,
            <IconText
              icon={LikeOutlined}
              text='156'
              key='list-vertical-like-o'
            />,
            <IconText
              icon={MessageOutlined}
              text='2'
              key='list-vertical-message'
            />,
          ]}
          extra={
            <div className={style.imageContainer}>
              <img
                width={272}
                alt='logo'
                className={style.storeImg}
                src={item.image_url}
              />
            </div>
          }
        >
          <List.Item.Meta
            // avatar={<Avatar src={item.avatar} />}
            title={<a href={item.url}>{item.name}</a>}
            description={
              <section>
                <article>
                  <div className={style.categoryContainer}>
                    {item.categories.map((category) => (
                      <p>{category.alias}</p>
                    ))}
                  </div>
                  <p>{item?.location.display_address[0]}</p>
                  <p>{item?.location.display_address[1]}</p>
                  <p>price: {item?.price}</p>
                  <p>{item?.display_phone}</p>
                </article>
                <article></article>
              </section>
            }
          />
        </List.Item>
      )}
    />
  )
}
export default SearchResults
