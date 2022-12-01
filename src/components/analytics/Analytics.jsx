import React, {useEffect,useState} from 'react'
import DataTable from "react-data-table-component"
import axios from 'axios';
import LoadingSpinner from '../UI/LoadingSpinner';
const Analytics = () => {
    const [health, setHealth] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [isError,setIsError] = useState(null);
    const getHelth = async () => {
        setIsError(null);
        setIsLoading(true);
        try {
          const response = await axios.get(
            "https://script.googleusercontent.com/macros/echo?user_content_key=d9ZxR5Y-O68F-E2z53hryJ0sCqZ67dRPqa_kv6wt8lBc-iLgJp3UcZbSYfDC3j-z_CdCHsc3u1mBZ99-akByyRGKXpxI8v9sm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnK4wQZPKcIrp4NExiBy5aqBHGftEn_upquI5zwyI8E_4sj687My4XWNwdF5AlNJD__kV1vdyEEhvcLogsIpS68PKHsAHUz57dg&lib=MsC7ZZil05ZHS7UsbaYnlM9WuohBMP6x1"
          );
          setIsLoading(false);
                    console.log(response);
          setHealth(response.data.data.reverse());
        } catch (error) {
            setIsError(error.message);
            setIsLoading(false);
          console.log(error)
        }
      };

      const columns = [
        {
          name: "id",
          selector: (row) => row.id,
        },
        {
         name: "timestamp",
         selector: (row) => row.timestamp,
       },
       {
         name: "BP(systolic)",
         selector: (row) => row.systolic,
       },
       {
         name: "BP(diastolic)",
         selector: (row) => row.diastolic,
       },
       {
         name: "temperature",
         selector: (row) => row.temperature,
       },
     ]
   
    useEffect(() => {
       getHelth();
    }, [])

  return (
  <>
  {isLoading && <LoadingSpinner />}
  {!isLoading && isError && <p style={{color: "red"}}>{isError}</p> }
{!isLoading && !isError && health &&  <DataTable
  title="Health Data" 
  columns={columns} 
  data={health} 
  pagination
  fixedHeader
  selectableRows
  selectableRowsHighlight
  highlightOnHover

  />}
  </>
  )
}

export default Analytics