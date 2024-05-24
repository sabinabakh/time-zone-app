import axios from 'axios';

export async function fetchTimeZoneData(q: string) {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/timezone.json',
    params: {
      q: q // Use the user-provided value for q
    },
    headers: {
      'x-rapidapi-key': '734dc17e84msh6ed1bf29aa3a1f3p195b29jsnec34dc1cf50b', // Replace with your RapidAPI key
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch weather data');
  }
}
