const key = "QBNJS6guG6tmG0hcwXxNYDoATMG16jET";

const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const reponse = await fetch(base + query);
  const data = await reponse.json();

  return data[0];
};


const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const reponse = await fetch(base + query);

  const data = await reponse.json();
  return data[0];
};

// getCity("bharuch")
//   .then((data) => {
//     return getWeather(data.Key);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
