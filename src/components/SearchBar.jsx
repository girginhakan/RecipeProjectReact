import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import '../assets/style/search.scss'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    const{setSearch}=useContext(DataContext);
  return (
    <div className='search-bar'>
        <input onChange={(e)=>setSearch(e.target.value)} className='search-input' type='text' placeholder='Tarif ara...'/>
      <FaSearch className="search-icon" size={16} />
    </div>
    
  )
}

export default SearchBar