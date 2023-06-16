// Random.js
import React, { useEffect,useState } from "react";
import axios from "axios";
import { Spinner } from "./Spinner";
const REACT_APP_GIPHY_API_KEY = "XwhWiqUuVYskOnSfNly6G9tBavPevNqR";

//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const Random = () => {
  const [gif, setGif] = useState("");
  const [loader , setLoader] = useState('false');

  async function fetchData() {
    setLoader(true);// because til the time the gif is coming we want the spinner to show on the screen
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${REACT_APP_GIPHY_API_KEY}`;

    const output = await axios.get(url); //axios is used to fetch the data by the get method and we are calling that url inside it.
    console.log(output);
    console.log(output.data.data.images.downsized_large.url );
    const gifurl= output.data.data.images.downsized_large.url;
   setGif(gifurl)
   setLoader(false);// after the network call has been made we want the loader to go away from the screen

  }

  useEffect(() => {
    fetchData();
    
  }, []);

  function SubmitHandler(event) {
   fetchData();
  }



    loader ? (<Spinner/>) : (<img src={gif} width={450} alt="a" />)


  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Generate Gif</h1>
      <img src={gif}width={450} alt="a" />
      <button className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]" onClick={SubmitHandler}>Generate Gif</button>
    </div>
  );
};
