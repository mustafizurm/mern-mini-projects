import { useEffect, useState } from "react";

const Home = () => {

  // onChange

  // data
  const [data, setData] = useState("");

  // status
  const [status,setStatus] = useState("All")


  // search
  const [search, setSearch] = useState("")

  // gender
  const [gender, setGender] = useState("all")

  // pagination
  const perPage = 4;
  const [totalPage, setTotalPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  console.log('totalPage '+ totalPage)
  console.log('currentPage '+ currentPage)

  // useEffect
  useEffect(()=> {
    getData()
  }, [status, search, gender, currentPage, totalPage])


  const getData = async () => {
    fetch(`http://localhost:5000/api/v1/admin/all_users?${status === "All"? ``:`status=${status}`}&search=${search}${gender == "all"? ``: `&gender=${gender}`}&limit=${perPage}&skip=${(currentPage - 1) * perPage }`)
    .then((res)=> res.json())
    .then((data)=> {
      console.log(data)
      setData(data.users)
      setTotalPage(Math.ceil(data.totalUsers / perPage))
    })
  }


  // query for status
  const checkStatus = async (e) => {
    setStatus(e)
    setCurrentPage(1)
  }


  // searchInput

  const searchInput = (e,) => {
    // if(status){
    //   setStatus("")
    //   setSearch(e.target.value)
    // }
    setSearch(e.target.value)
  }

  const checkGender = (e) => {
    setGender(e)
    setCurrentPage(1)
  }

  // const handelCurrentPage = async (index) => {
  //   setCurrentPage(index + 1)
  // }
  // console.log("current-page-"+currentPage)
  // console.log("total-page-"+totalPages)




  const restFunck = async () => {
    setStatus("All")
    setSearch("")
    setGender("all")
  }



  return (
    <div>
      <div className="flex justify-center py-[10px]">
        <input className="py-[3px] text-sm w-[170px] px-[6px] border-2 border-spacing-4 outline-none text-gray-500" placeholder="Search Name...." type="text" name="" id="" value={search} onChange={(e)=>{searchInput(e)}} />
        <button className="bg-black text-white p-[2px] px-[25px]"  >Search</button>
        <button className="bg-indigo-600 text-white p-[2px] px-[25px] ml-[5px]" onClick={()=> {restFunck()}}>Reset</button>
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
              <th>Gender</th>
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
                <td>{d.gender}</td>
                <td>{d.address}</td>
                <td>{d.status}</td>
              </tr>               
              ))):(``)}
          </tbody>
        </table>
        {/* <div className="flex justify-center items-center mt-[32px]">
          <button className="py-[1px] px-[23px] bg-blue-600 text-white">Prev</button>
          <div className="p-[10px]">2</div>
          <button  className="py-[1px] px-[23px] bg-blue-600 text-white">Next</button>
        </div> */}
        <div className={`flex gap-2 m-[30px]`}>
          {/* {Array.from({length: totalPages}, (_, index)=> {
           return <button onClick={()=> {handelCurrentPage(index)}} className="py-[1px] px-[25px] bg-blue-500 text-white" key={index}>{index + 1}</button>
          })} */}
          {Array.from({length: totalPage}, (_,index)=> {
            return <button  onClick={()=> setCurrentPage(index + 1)} className={`py-[2px] px-[37px] bg-slate-500 rounded-md text-black ${currentPage === index + 1 ? `bg-red-500`: `bg-slate-500`}`} key={index}>{index + 1}</button>
          })}
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
          <h2>Filter By Gender</h2>
          <form action="" className="flex gap-4">
          <label htmlFor="">
            <input checked ={gender == "all"} type="radio" onClick={()=> {checkGender("all")}} name="gender"/>
            <span>All</span>
          </label>
          <label htmlFor="">
            <input checked ={gender == "male"} type="radio" name="gender" onClick={()=> {checkGender("male")}}/>
            <span>Male</span>
          </label>
          <label htmlFor="">
            <input checked ={gender == "female"} type="radio" name="gender" onClick={()=> {checkGender("female")}}/>
            <span className="text-1xl">Female</span>
          </label>
          </form>
        </div>
        <div>
          <h3 className="p-[5px]">Filter By Status</h3>
          <div className="flex gap-1">
          <button className="py-[1px] px-[23px] bg-indigo-900 text-white" onClick={()=> {checkStatus(`All`)}}>ALL</button>
          <button className="py-[1px] px-[23px] bg-green-600 text-white" onClick={()=> {checkStatus(`Active`)}}>ACTIVE</button>
          <button className="py-[1px] px-[23px] bg-red-600 text-white" onClick={()=> {checkStatus(`Inactive`)}}>INACTIVE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
