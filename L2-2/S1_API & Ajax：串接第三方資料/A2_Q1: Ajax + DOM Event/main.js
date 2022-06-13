const randomUserBtn = document.querySelector("button");
const userDatas = document.querySelector(".showUserDatas");

randomUserBtn.addEventListener("click", () => {
  for (let i = 0; i < 3; i++) {
    addUser();
  }
});

function addUser() {
  axios
    .get("https://randomuser.me/api/")
    .then((response) => {
      // handle success
      let newUser = document.createElement("div");

      let data = response.data.results[0];
      let gender = data.gender;
      let name = `${data.name["first"]}  ${data.name["last"]}`;
      let avatar = data.picture.large;
      let email = data.email;

      if (gender === "female") {
        newUser.innerHTML += `
          <h1 class="user-name">${name}</h1>
          <div class="avatar">
            <img src="${avatar}" alt="avatar">
          </div>
          <div class="email">${email}</div>`;

        userDatas.appendChild(newUser);
      } else {
        addUser();
      }
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}
