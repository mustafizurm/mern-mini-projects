import { useEffect, useState } from "react";

const Home = () => {

  // data
  const [data, setData] = useState("");

  // status
  const [status,setStatus] = useState("")


  // search
  const [search, setSearch] = useState("")





  // useEffect
  useEffect(()=> {
    getData()
  }, [status, search])


  const getData = async () => {
    fetch(`http://localhost:5000/api/v1/admin/all_users?status=${status}&search=${search}`)
    .then((res)=> res.json())
    .then((data)=> {
      setData(data.users)
    })
  }

 
  // query for status
  const checkStatus = async (e) => {
    setStatus(e)
  }

  // searchInput

  const searchInput = (e) => {
    setSearch(e.target.value)
  }



  return (
    <div>
      <div className="flex justify-center py-[10px]">
        <input className="py-[3px] text-sm w-[170px] px-[6px] border-2 border-spacing-4 outline-none text-gray-500" placeholder="Search Name...." type="text" name="" id="" onChange={(e)=>{searchInput(e)}} />
        <button className="bg-black text-white p-[2px] px-[25px]"  >Search</button>
        <button className="bg-indigo-600 text-white p-[2px] px-[25px] ml-[5px]">Reset</button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl mt-[20px]">Search, Filter, Sort and Pagination using Json fake rest API</h2>
        <table className="w-[1300px] mt-[20px]">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-[4px]">No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>1</td>
              <td>Tony</td>
              <td>tonygmail.com</td>
              <td>734675345</td>
              <td>US</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Tony</td>
              <td>tonygmail.com</td>
              <td>734675345</td>
              <td>US</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Tony</td>
              <td>tonygmail.com</td>
              <td>734675345</td>
              <td>US</td>
              <td>Active</td>
            </tr> */}
            {data.length > 0 ? (data.map((d,index)=> (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.address}</td>
                <td>{d.status}</td>
              </tr>               
              ))):(``)}
          </tbody>
        </table>
        <div className="flex justify-center items-center mt-[32px]">
          <button className="py-[1px] px-[23px] bg-blue-600 text-white">Prev</button>
          <div className="p-[10px]">2</div>
          <button  className="py-[1px] px-[23px] bg-blue-600 text-white">Next</button>
        </div>
      </div>
      <div className="flex justify-between w-[1000px] m-auto mt-[24px]">
        <div>
          <h4>Sort By:</h4>
          <select name="" id="" className="w-[400px] border-2 mt-[5px]">
            <option value="Status">Status</option>
            <option value="Name">Name</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="Address">Address</option>
          </select>
        </div>
        <div>
          <h3 className="p-[5px]">Filter By Status</h3>
          <button className="py-[1px] px-[23px] bg-green-600 text-white" onClick={()=> {checkStatus(`Active`)}}>ACTIVE</button>
          <button className="py-[1px] px-[23px] bg-red-600 text-white" onClick={()=> {checkStatus(`Inactive`)}}>INACTIVE</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
