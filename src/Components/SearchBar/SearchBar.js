import React, {useState , useEffect} from 'react'
import axios from 'axios'
import {BaseUrl , key} from '../Constants/constants'
import './SearchBar.css'

function SearchBar() {

    const api = BaseUrl + key ;

const [value , setValue] = useState('')
const [results , setResults] = useState([])

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value)
}

const searchResult = async () => {
    const response = await axios.get (api);
    console.log(setResults(response.data))
}


useEffect(() => {
searchResult()
} , [])

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="ui raised very padded text container segment">
        <div className="ui fluid category search">
  <div className="ui icon input">
    <input className="prompt" 
    type="text" 
    placeholder="Search Videos..." 
    value={value}
    onChange={(e) => setValue(e.target.value)} />
    <button className="ui button blue">Search</button>
  </div>
  <div className="results"></div>
</div>
</div>
</form>
</>
  )
}

export default SearchBar