import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import './searchBar.css'

export default function SearchBar() {
  return (
    <div className='searchBarInput'>
      <Input
        className='searchBar'
        prefix={<SearchOutlined />}
        placeholder={'Search for a place'}
      />
    </div>
  )
}
