import axios from 'axios';  

const url = "https://data.covid19india.org/data.json"
const key = "<Your KEY>" 
export const getArticles = () => {
    const resp = axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${key}`    
    )
    return resp
}

export const getCasesData = async () => {
  const resp = await fetch(url).then((data)=>data.json())
  return resp
}       
