import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css';

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      // console.log("re")
      try{
        const response = await axios.get("https://s3.amazonaws.com/open-to-cors/assignment.json");
        console.log(response?.data)
        setData(response?.data?.products);
      }catch(e) {
        console.error(e)
      }
    }
    fetchdata();
  }, [])

  console.log(data)

  return (
    <>
    <table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    {data && Object.values(data).map((single) => (
      <tr key={single.title}>
        <td>{single.title}</td>
        <td>{single?.price}</td>
      </tr>
    ))}
  </tbody>
</table>


    </>
  )
}

export default App
