const axios = window.axios;
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitButton = document.getElementById("submitButton");
const api_url = "http://localhost:9000";
const api_url2 = "https://resistest.herokuapp.com";

submitButton.addEventListener("click", async function () {
  const user = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  const response = await axios.post(`${api_url2}/user`, { ...user });
  console.log(response.data);
  name.value = null;
  email.value = null;
  password.value = null;
});
