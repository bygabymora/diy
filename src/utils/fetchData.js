export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
      'X-RapidAPI-Key': '17d46e9d50msh5b0aefa71807ba9p1d1e9ejsnf09fa622a902',
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
  
  