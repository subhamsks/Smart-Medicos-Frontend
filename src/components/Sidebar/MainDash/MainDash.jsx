import React from 'react'
import Cards from '../Cards/Cards'
import Cards1 from '../Cards/Cards1'
import { CardsData } from '../../../Data/Data'
import './MainDash.css'
import axios from 'axios'
import { useEffect,useState } from 'react'
import LoadingSpinner from '../../UI/LoadingSpinner'
import MetaTags from "react-meta-tags"
// import Cards1 from '../Cards/Cards1'
const MainDash = () => {
  const [data,setData] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const [isError,setIsError] = useState(null);
  const [displayData,setDisplayData] = useState([...CardsData]);
  useEffect(()=>{
    const sendRequest = async ()=>{
      setIsError(null);
      setIsLoading(true);
      try{
        
        const resData = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=BzlC7I1b3UD2mL1H2Fh9zq2fcLDCsL2-EqGsKQhCo0-XHFSUftILKzIr-FjA0yziJ0KSK8Qhr04LoqPWO7SVIRcDTmDR__icm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOT2oeR1Jp_MVioCj0VP8vYZHysEWQc4mKm-_ZJCnnavLADiX-DVXHDxAVyUQU8lTMrFaCmhe2OVcocySND4dK7JsXYH5kettA&lib=MsC7ZZil05ZHS7UsbaYnlM9WuohBMP6x1");
        // console.log(resData);
        
        const systolicArr = resData.data.data.map((value)=>{
          
          
          return value.systolic;
        })
        const diastolicArr = resData.data.data.map((value)=>{
          return value.diastolic;
        })
        const tempArr = resData.data.data.map((value)=>{
          return value.temperature
        })
        setDisplayData((prev)=>{
          // console.log(prev);
          const curr = [...prev];
         
          console.log(curr);
          curr[0].series.data = [...systolicArr];
          return curr;
        })

        const dataObj = resData.data.data[resData.data.data.length-1];
        
        const dataArr = Object.values(dataObj);
        setIsLoading(false);
        setData(dataArr);
        // console.log(dataArr);
      
console.log(typeof(dataArr[3]))
    }catch(err)
    {
      setIsLoading(false);
      setIsError(err.message);
    }
    }
    sendRequest();

  },[]);
  return (
    <>
    <MetaTags>
        <title>Dashboard | HealthLine</title>
        <meta id="meta-description" name="description" content="Join Us !Keep track of all your attendance" />
        </MetaTags>
    <div className="MainDash">

        <h1>Dashboard</h1>
      {isLoading && <LoadingSpinner /> }
      {!isLoading && isError && <p className='error'>{isError}</p>}
      { data && !isError && !isLoading  && <Cards data={data} CardsData={displayData}/> } 
      { data && !isError && !isLoading  && <Cards1 data={data} CardsData={displayData}/> } 
      <h1>Results</h1>
      {data && !isError && !isLoading && <h3> {((data[2]>=90 && data[2]<=140) && (data[3]>=60 && data[3]<=96) && (data[4]>=85 && data[4]<=98)) ? <span style={{color:"green"}}>You are Normal 👍👍</span> : <span style={{color: "red"}}>Please consult doctor 😢😢</span> }</h3>}
      {/* <h3>Diastolic: {data[1]>=80 && data[1]<=95 ? <span style={{color:"green"}}>Normal</span> : <span style={{color: "red"}}>Please consult doctor</span> }</h3>
      <h3>Temperature: {data[2]>=87 && data[2]<=99 ? <span style={{color:"green"}}>Normal</span> : <span style={{color: "red"}}>Please consult doctor</span> }</h3>  */}
      {/* {data && !isError && !isLoading &&  <Cards1 data={data}/>}   */}
      {/* <Cards />
      <Cards /> */}

        
    </div>
    </>
  )
}

export default MainDash