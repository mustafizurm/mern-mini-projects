import { useState } from "react";

const Register = () => {


  // const [formData, setFormData] = useState({name: "", email: "", password: "", gender: ""})

  // const inputHandler = (event) => {
  //   const {name, value} = event.target;

  //   setFormData((formData)=> ({
  //     ...formData,
  //     [name]: value
  //   }))
  // }

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   // console.log(formData)

  // }


// const [name,setName] = useState()
// const [email,setEmail] = useState()
// const [password,setPassword] = useState()
// const [gender,setGender] = useState()
const [user, setUser] = useState({name: "", email: "", password: "", gender: ""})

const {name, email, password, gender} = user

    const submitHandler = (e) => {
    e.preventDefault();
    console.log(user)
    }

    const nameHandel = (e) =>{
      setUser({name: e.target.value, [user.email]: [user.email], [user.password]: [user.password], [user.gender]: [user.gender]})
    }
    const emailHandel = (e) =>{
      setUser({name, email:e.target.value, password, gender})

    }
    const passwordHandel = (e) =>{
      setUser({name, email, password:e.target.value, gender})
    }
    const genderHandel = (e) =>{
      setUser({name, email, password, gender:e.target.value,})

    }



  return (
    <div className="mt-[20px]">
      <form onSubmit={submitHandler} className="w-[85%] md:w-[700px] sm:w-[500px] m-auto flex flex-col gap-5" action="">
          <div className="flex gap-[100px]">
            <label htmlFor="">Name</label>
            <input onChange={nameHandel} value={user.name} className="border-gray-400 border rounded-md w-[100%] py-[3px] px-[7px] outline-none" type="text" />
          </div>
          <div className="flex gap-[105px]">
            <label htmlFor="">Email</label>
            <input onChange={emailHandel} value={user.email}  className="border-gray-400 border rounded-md w-[100%] py-[3px] px-[7px] outline-none" type="text" />
          </div>
          <div className="flex gap-[76px]">
            <label htmlFor="">Password</label>
            <input onChange={passwordHandel} value={user.password}  className="border-gray-400 border rounded-md w-[100%] py-[3px] px-[7px] outline-none" type="password" />
          </div>
          <div className="flex gap-[90px]">
            <label htmlFor="">Gender</label>
            <select onChange={genderHandel} value={user.gender} id="" className="border-gray-400 border rounded-md w-[100%] py-[3px] px-[7px] outline-none">
              <option value="All">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="flex gap-6 mt-5 ml-[20%]">
            <button className="py-[6px] px-[20px] bg-red-500 text-white rounded-md" >Cancel</button>
            <button className="py-[6px] px-[20px] bg-blue-500 text-white rounded-md">Submit</button>
          </div>
      </form>
    </div>
  );
}

export default Register;
