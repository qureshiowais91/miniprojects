// const search = document.querySelector(".search");

// search.addEventListener("keypress", (term) => {
//     if(term.key=="Enter"){

//     }
// });

const form = document.querySelector(".searchMe");
const card = document.querySelector(".card");
const time = document.querySelector(".time");
const icon = document.querySelector(".icon");
const details = document.querySelector(".details");


const updateUi = (data) => {
  const citydets = data.cityK;
  const ciitweather = data.weather;

  details.innerHTML = `<h4> 
            <span  >${citydets.EnglishName}</span> 
            <span  > ${ciitweather.Temperature.Metric.Value}  &deg;C </span> 
                      </h4>`;

  const iconSrc = `icons/${ciitweather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeImg = null;
  if (ciitweather.IsDayTime) {
    timeImg = "/img/day.svg";
  } else {
    timeImg = "/img/night.svg";
  }

  time.setAttribute("src", timeImg);

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const cityinfo = async (cityname) => {
  const cityK = await getCity(cityname);
  const weather = await getWeather(cityK.Key);

  return { cityK, weather };
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityname = form.city.value;
  form.reset();

  cityinfo(cityname)
    .then((data) => {
      updateUi(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
