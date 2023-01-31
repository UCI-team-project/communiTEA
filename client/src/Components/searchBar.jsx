import { Input } from 'antd'
import './searchBar.css'

export default function SearchBar() {
  return (
    <div className='searchBarInput'>
      <Input className='searchBar' placeholder={'Search for a place'} />
    </div>
  )
}
