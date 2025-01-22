
// import { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const Products = () => {
//   const [category, setSelectedCategory] = useState("All");
//   const [color, setColor] = useState("All");
//   const [price, setPrice] = useState("All");
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Function to fetch data based on category and color
//   const getData = async (category, color) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/v1/products?category=${category}&color=${color}`);
//       const data = await response.json();
//       setProducts(data);
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     // Get category and color from the URL query parameters
//     const urlParams = new URLSearchParams(location.search);
//     const categoryFromUrl = urlParams.get('category') || "All";
//     const colorFromUrl = urlParams.get('color') || "All";

//     setSelectedCategory(categoryFromUrl);
//     setColor(colorFromUrl);

//     getData(categoryFromUrl, colorFromUrl); // Fetch data on initial load
//   }, [location.search]); // Depend on location.search to refetch when query params change

//   // Handle category change
//   const handleCategoryChange = (newCategory) => {
//     setSelectedCategory(newCategory);

//     if(newCategory !== "All"){
//       navigate(`/products?category=${newCategory}${color === "All"? ``:`&color=${color}`}`)
//     } else{
//       navigate(`/products?${color === "All"? ``: `color=${color}`}`)
//     }
    
//   };

//   // Handle color change
//   const handleColorChange = (newColor) => {
//     setColor(newColor);
//          if(newColor !== "All"){
//           navigate(`/products?${category !== "All"? `category=${category}&` : ``}color=${newColor}`)
//          } else{
//           navigate(`/products?${category==="All"? ``:`category=${category}`}`)
//          }
//   };

//   const handelPriceChange = (newPrice) => {
//     setPrice(newPrice)
//     if(newPrice !== "All"){
//       navigate(`/products?${category !== "All"? `category=${category}`:``}${color!=="All"? `&color=${color}`:``}&price=${newPrice}`)
//     } else{
//       navigate(`/products?${category !== "All"? `category=${category}` : ``}${color!=="All"? `&color=${color}`:``}`)
//     }
//   }

//   return (
//     <div>
//       <div className="category-selector">
//         <h2>Category</h2>
//         <label className="flex">
//           <input
//             type="radio"
//             name="category"
//             checked={category === "All"}
//             onChange={() => handleCategoryChange("All")}
//           />
//           <span>All</span>
//         </label>
//         <label className="flex">
//           <input
//             type="radio"
//             name="category"
//             checked={category === "Sneakers"}
//             onChange={() => handleCategoryChange("Sneakers")}
//           />
//           <span>Sneakers</span>
//         </label>
//         <label className="flex">
//           <input
//             type="radio"
//             name="category"
//             checked={category === "Flats"}
//             onChange={() => handleCategoryChange("Flats")}
//           />
//           <span>Flats</span>
//         </label>
//         <label className="flex">
//           <input
//             type="radio"
//             name="category"
//             checked={category === "Heels"}
//             onChange={() => handleCategoryChange("Heels")}
//           />
//           <span>Heels</span>
//         </label>
//       </div>
//       <div className='mt-[15px]'>
//         <h2>Color</h2>
//         <label className='flex'>
//           <input
//             type="radio"
//             name="color"
//             checked={color === "All"}
//             onChange={() => handleColorChange("All")}
//           />
//           <span>All</span>
//         </label>
//         <label className='flex'>
//           <input
//             type="radio"
//             name="color"
//             checked={color === "Green"}
//             onChange={() => handleColorChange("Green")}
//           />
//           <span>Green</span>
//         </label>
//         <label className='flex'>
//           <input
//             type="radio"
//             name="color"
//             checked={color === "Red"}
//             onChange={() => handleColorChange("Red")}
//           />
//           <span>Red</span>
//         </label>
//         <label className='flex'>
//           <input
//             type="radio"
//             name="color"
//             checked={color === "Blue"}
//             onChange={() => handleColorChange("Blue")}
//           />
//           <span>Blue</span>
//         </label>
//       </div>
//       <div className=''>
//         <h2 className=''>Price</h2>
//         <label htmlFor="" className='flex'>
//           <input type="radio" name='price' onChange={()=> {handelPriceChange('All')}}/>
//           <span>All</span>
//         </label>
//         <label htmlFor="" className='flex'>
//           <input type="radio" name='price' onChange={()=> {handelPriceChange('300')}}/>
//           <span>300</span>
//         </label>
//         <label htmlFor="" className='flex'>
//           <input type="radio" name='price' onChange={()=> {handelPriceChange('400')}}/>
//           <span>400</span>
//         </label>
//         <label htmlFor="" className='flex'>
//           <input type="radio" name='price' onChange={()=> {handelPriceChange('500')}}/>
//           <span>500</span>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Products;








// import { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const Products = () => {
//   const [category, setSelectedCategory] = useState("");
//   const [color, setColor] = useState("")
//   // const [color, setColor] = useState("All");
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Function to fetch data based on category and color

//   useEffect(() => {

//     // setSelectedCategory(category);
//     // setColor(color);

//     const urlParams = new URLSearchParams(location.search);
//     const category = urlParams.get('category');
//     const color = urlParams.get('color');

//     setSelectedCategory(category)
//     setColor(color)

//     fetch(`http://localhost:5000/api/v1/products?category=${category}&color=${color}`)
//     .then((res)=> res.json())
//     .then((data)=> {
//       console.log(data.product)
//     })
//   }, [location.search]); // Depend on location.search to refetch when query params change

//   // Handle category change
//   const handleCategoryChange = (newCategory) => {
//     // setSelectedCategory(newCategory);  
//     navigate(`/products?category=${newCategory}${color === null? ``:`&color=${color}`}`)  
//   };

//   const colorChangeHandler = (newColor) => {
//     navigate(`/products?${category === null? ``:`category=${category}&`}color=${newColor}`)
//   }

//   return (
//     <div>
//       <div className="category-selector">
//         <h2>Category</h2>
//         {/* <label className="flex">
//           <input
//             type="radio"
//             name="category"
//             checked={category === "All"}
//             onChange={() => handleCategoryChange("All")}
//           />
//           <span>All</span>
//         </label> */}
//         <label className="flex">
//           <input
//             type="radio"
//             name="category"
//             checked={category === "Sneakers"}
//             onChange={() => handleCategoryChange("Sneakers")}
//           />
//           <span>Sneakers</span>
//         </label>
//         <label className="flex">
//           <input
//             type="radio"
//             name="category"
//             checked={category === "Flats"}
//             onChange={() => handleCategoryChange("Flats")}
//           />
//           <span>Flats</span>
//         </label>
//         <label className="flex">
//           <input
//             type="radio"
//             name="category"
//             checked={category === "Heels"}
//             onChange={() => handleCategoryChange("Heels")}
//           />
//           <span>Heels</span>
//         </label>
//       </div>
//       {/* <div className='mt-[15px]'>
//         <h2>Color</h2>
//         <label className='flex'>
//           <input
//             type="radio"
//             name="color"
//             checked={color === "All"}
//             onChange={() => handleColorChange("All")}
//           />
//           <span>All</span>
//         </label>
//         <label className='flex'>
//           <input
//             type="radio"
//             name="color"
//             checked={color === "Green"}
//             onChange={() => handleColorChange("Green")}
//           />
//           <span>Green</span>
//         </label>
//         <label className='flex'>
//           <input
//             type="radio"
//             name="color"
//             checked={color === "Red"}
//             onChange={() => handleColorChange("Red")}
//           />
//           <span>Red</span>
//         </label>
//         <label className='flex'>
//           <input
//             type="radio"
//             name="color"
//             checked={color === "Blue"}
//             onChange={() => handleColorChange("Blue")}
//           />
//           <span>Blue</span>
//         </label>
//       </div> */}
//       <div className=''>
//         <h1 className='text-2xl'>Color</h1>
//         <label className='flex' htmlFor="">
//           <input type="radio" checked={color === "red"} name='color' onChange={()=> {colorChangeHandler('red')}} />
//           <span>Red</span>
//         </label>
//         <label className='flex' htmlFor="">
//           <input type="radio" name='color' checked={color === "blue"} onChange={()=> {colorChangeHandler('blue')}} />
//           <span>blue</span>
//         </label>
//         <label className='flex' htmlFor="">
//           <input type="radio" name='color' checked={color === "green"} onChange={()=> {colorChangeHandler('green')}} />
//           <span>green</span>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Products;





    // if(newCategory !== "All"){
    //   navigate(`/products?category=${newCategory}${color === "All"? ``:`&color=${color}`}`)
    // } else{
    //   navigate(`/products?${color === "All"? ``: `color=${color}`}`)
    // }


        // Get category and color from the URL query parameters
    // const urlParams = new URLSearchParams(location.search);
    // const category = urlParams.get('category') || "All";
    // const color = urlParams.get('color') || "All";







    // import React, { useState } from 'react';
    // import {useNavigate} from 'react-router-dom'
    
    
    // const CheckboxWithSubmitAndFetch = () => {
    //   // State to store checkbox values
    //   const [checkboxValues, setCheckboxValues] = useState([]);
    
    //   const navigate = useNavigate()
    //   // Function to handle checkbox state change
    //   const handleCheckboxChange = (event) => {
    //     const {value, checked} = event.target
    //     if(checked){
    //       setCheckboxValues([...checkboxValues, value])
    //       checkboxValues.push(event.target.value)
    //       console.log(checkboxValues)
    //     } else{
    //       setCheckboxValues(checkboxValues.filter((e)=> (e !== value)))
    //     }
    //   };
    //   return (
    //     <div>
    //       <h1>Select Features</h1>
    //       <label>
    //         <input
    //           type="checkbox"
    //           name="feature1"
    //           value="feature1"
    //           onChange={handleCheckboxChange}
    //         />
    //         Feature 1
    //       </label>
    //       <br />
    //       <label>
    //         <input
    //           type="checkbox"
    //           name="feature2"
    //            value="feature2"
    //           onChange={handleCheckboxChange}
    //         />
    //         Feature 2
    //       </label>
    //       <br />
    //       <label>
    //         <input
    //           type="checkbox"
    //           name="feature3"
    //            value="feature3"
    //           onChange={handleCheckboxChange}
    //         />
    //         Feature 3
    //       </label>
    //       <br />
    //       <button>Submit</button>
    //     </div>
    //   );
    // };
    
    // export default CheckboxWithSubmitAndFetch;
    