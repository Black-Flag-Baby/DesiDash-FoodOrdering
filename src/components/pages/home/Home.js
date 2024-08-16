import React,{useState} from 'react'
import Header from '../Header/Header'
import { ExploreMenu } from '../ExploreMenu/ExploreMenu';
import FoodDisplay from '../../FoodDisplay/FoodDisplay';
import AppDownload from '../../AppDownload/AppDownload';

export const Home = () => {

  const [category, setcategory] = useState("all");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory} />
      <FoodDisplay category={category}/>
      <AppDownload />

      
    </div>
  )
}
export default Home;