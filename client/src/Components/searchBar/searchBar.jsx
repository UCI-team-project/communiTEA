import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import style from './searchBar.module.css'

export default function SearchBar() {
  return (
    <div>
      <Input
        className={style.searchBar}
        prefix={<SearchOutlined />}
        placeholder={'Search for a place'}
      />
    </div>
  )
}
