export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '9de97b821amsh38ce1f3cefc701cp108705jsnb7a38958b37d',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '9de97b821amsh38ce1f3cefc701cp108705jsnb7a38958b37d',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
