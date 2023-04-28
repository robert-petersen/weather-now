import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { CgSearch, CgSearchLoading } from "react-icons/cg";
import axios from "axios";

const Search = ({ setResults }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
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
      .get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`)
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

  const onChangeCity = (evt) => {
      setFormData({...formData, city: evt.target.value});
  }

  const onChangeRegion = (evt) => {
      setFormData({...formData, region: evt.target.value});
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    getSearchData(formData.region.length > 0
      ? `${formData.city}, ${formData.region}`
      : formData.city
    );
  }

  useEffect(() => {
    formData.city.length > 0 
      ? setFormData({...formData, disabled: false}) 
      : setFormData({...formData, disabled: true})
  }, [formData.city]);

  return (
    <form onSubmit={onSubmit}>
      <input 
        name="city"
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={onChangeCity}
      />
      <input 
        name="region"
        type="text"
        placeholder="Region (Not Required)"
        value={formData.region}
        onChange={onChangeRegion}
      />
      <button type="submit" disabled={formData.disabled}>
        {formData.isFetching ? <CgSearchLoading /> : <CgSearch />}
      </button>
    </form>
  )
}

export default Search;