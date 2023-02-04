import { Avatar, Button, List, Skeleton } from 'antd'
import { useEffect, useState } from 'react'
import style from './cardList.module.css'

const count = 3
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`

export default function CardList() {
  const [initLoading, setInitLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [list, setList] = useState([])
  const itemArray = [
    { name: 'Boba House', rating: 5.0, description: 'business description' },
    { name: 'ShareTea', rating: 3.5, description: 'business description' },
    { name: 'Boba Place', rating: 4.0, description: 'business description' },
    { name: 'Milk Tea', rating: 4.6, description: 'business description' },
  ]

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false)
        setData(res.results)
        setList(res.results)
      })
  }, [])
  function onLoadMore() {
    setLoading(true)
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    )
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results)
        setData(newData)
        setList(newData)
        setLoading(false)
        window.dispatchEvent(new Event('resize'))
      })
  }
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null
  return (
    <List
      className={style.demoLoadMoreList}
      itemLayout='horizontal'
      loadMore={loadMore}
      dataSource={itemArray}
      renderItem={(item) => (
        <List.Item
          actions={[
            <a key='list-loadmore-edit'>edit</a>,
            <a key='list-loadmore-more'>more</a>,
          ]}
        >
          <Skeleton avatar title={false} active>
            <List.Item.Meta
              title={<a href='https://ant.design'>{item.name}</a>}
              description='Ant Design, a design language for background applications, is refined by Ant UED Team'
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    />
  )
}
