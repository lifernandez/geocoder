// TODO: Call the Weather API when the form is submitted
console.log("connected");
// TODO: Create a function to get the weather info
// const getWeatherInfo = () => {
// TODO: Replace the following line with the correct url
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGlmZXJuYW5kZXoiLCJhIjoiY2xob3Bwbnl2MGw3eDNkcGUzZWdlNTFtMyJ9.1sikco-h98D01cr0Ay4yYw';

fetch(url)
  .then(response => response.json())
  .then((data) => {
    console.log(data.features[0].center);
    const longitude = data.features[0].center[0];
    const latitude = data.features[0].center[1];
    // TODO: Insert the weather info in the DOM (description, date, temperature...)
    // isolate the p tag
    const ptag = document.querySelectorAll("p");
    ptag.forEach((item) => {
      console.log(item.innerText);
    });
  });
// };

// TODO: Add an event listener to the form

// TODO: On submit, in the callback, call the getWeatherInfo function

// getWeatherInfo();
