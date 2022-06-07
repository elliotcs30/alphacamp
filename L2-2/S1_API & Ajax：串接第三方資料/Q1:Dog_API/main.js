let img = document.querySelector("img");

axios
  .get("https://dog.ceo/api/breeds/image/random")
  .then((response) => {
    // handle success
    img.src = response.data.message;
    console.log(response);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });
// .then(() => {
//   // always executed
// })
