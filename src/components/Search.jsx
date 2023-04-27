import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const Search = ({ setResults }) => {
  const initialValues = {
    city: "",
    region: "",
    isFetching: false,
    disabled: true,
    error: "",
  }

  const [formData , setFormData] = useState(initialValues);
  const navigate = useNavigate();

  const getSearchData = (location) => {
    setFormData({...formData, error: "", isFetching: true});
    axios
      .get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${location}&days=3&aqi=no&alerts=no`)
      .then((res) => {
        console.log(res.data); //delete this
        setResults(res.data);
        setFormData({...formData, isFetching: false, searchValue: ""});
        navigate("/results");
      })
      .catch((err) => {
        console.log("error:", err);
        setFormData({...formData, isFetching: false, error: `Couldn't find any results. Make sure you entered things correctly.`});
    });
  }

  return (
    <form>
      <input 
        name="city"
        type="text"
        placeholder="City"
      />
      <input 
        name="region"
        type="text"
        placeholder="Region"
      />
      <button type="submit" disabled=""><FaSearch /></button>
    </form>
  )
}

export default Search;

// Search field for finding weather data