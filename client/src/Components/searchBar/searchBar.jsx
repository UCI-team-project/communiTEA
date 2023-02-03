import { useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import style from './searchBar.module.css'

export default function SearchBar({ text, setSearchQuery, setLocation }) {
  const [data, setData] = useState('')
  console.log(data)
  return (
    <Input
      className={style.searchBar}
      prefix={<SearchOutlined />}
      placeholder={text}
      value={data}
      onChange={(e) => setData(e.target.value)}
    />
  )
}
