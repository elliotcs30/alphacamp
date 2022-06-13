const randomUserBtn = document.querySelector("button");
const name = document.querySelector(".user-name");
const avatar = document.querySelector("img");
const email = document.querySelector(".email");

randomUserBtn.addEventListener("click", () => {
  axios
    .get("https://randomuser.me/api/")
    .then((response) => {
      // handle success
      let data = response.data.results[0];

      name.innerHTML = `${data.name["first"]} ${data.name["last"]}`;
      avatar.src = data.picture["large"];
      email.innerHTML = data.email;

      console.log(data, avatar);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
    // .then(() => {
    //   // always executed
    //   console.log("done");
    // });
});
