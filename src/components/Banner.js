import React,{useState  } from 'react'
import '../css/banner.css'
import {Button} from '@material-ui/core'
import Search from './Search'
import { useHistory } from "react-router-dom";

const Banner = () => {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false)
    return (
        <div className='banner'>
            <div className="banner__search">
                {showSearch && <Search />}
           
                <Button onClick={() => setShowSearch(!showSearch)}
                variant='outlined' className='banner__searchButton'>{showSearch ? "Hide" : "Search Dates"}</Button>
                
            </div>
           <div className="banner_info">
               <h1>Get out and stretch your imagination</h1>
               <h5>Plan a different kind of getwaway to uncover the hidden gems near you</h5>
               <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
           </div>
        </div>
    )
}

export default Banner
