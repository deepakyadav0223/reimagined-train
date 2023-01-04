import React , {useState} from 'react'
import ShowData from '../Components/ShowData'
import ButtonsGrid from '../Components/ButtonsGrid'

const PageLayout = () => {
   const [id ,setid] = useState(-1);

   function handleChange(newValue) {
    setid(newValue);
   }

  return (
    <>
     <div style={{height:'50vh',backgroundColor:'#e2e2e2'}} className="showingdata">
               <ShowData id ={id}/>
     </div>

     <div style={{backgroundColor:"#bcbcbc"}} className="buttonsGrid">
            <ButtonsGrid onChange={handleChange}/>

     </div>


    
    </>
  )
}

export default PageLayout