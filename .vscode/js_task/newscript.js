//Getting a resource store in localstorage
const getting = function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      window.localStorage.setItem("data", JSON.stringify(json));
    });
};
//fetching data from api and store in localstorage
getting();

///posting new data to API
let arr = [];
const updation = function (data) {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    console.log(response); //here i need to test condition as if status is 201 only move to next else .
    response.json().then((json) => {
      //json argument returns the POSTED data to API post only post the data to api if suceed return the data as (json)
      console.log(json);
      //   let arr = [];
      arr = JSON.parse(window.localStorage.getItem("data"));
      //above we fetched and sotored datain localstorage .we appending the suceed data
      arr.push(json);
      window.localStorage.setItem("data", JSON.stringify(arr));
      //   if data is repeted we can toggle using toggle class in JS
      arr.forEach((element, index) => {
        const markup = `<li class="list_${index}">${element.username}</li>`;
        // console.log(markup);
        document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
      });
    });
  });
};
//patching an data
const patch = function (data) {
  fetch("https://jsonplaceholder.typicode.com/users/11", {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      response.json();
      console.log(response);
    })
    .then((json) => {
      console.log(json);
    });
};
//deleting an resource
fetch("https://jsonplaceholder.typicode.com/users/11", {
  method: "DELETE",
});

////*********////
let newdata = {
  address: {
    city: "hyderabad",
    geo: { lat: "-37.3159", lng: "81.1496" },
    street: "Kulas Light",
    suite: "Apt. 556",
    zipcode: "5000833",
  },
  company: {
    bs: "harness real-time e-markets",
    catchPhrase: "Multi-layered client-server neural-net",
    name: "Romaguera-Crona",
  },
  email: "abc@sdfghj.com",
  id: 11,
  name: "karthik 124",
  phone: "0987654321",
  username: "KARTHEEK",
  website: "hildegard.org",
};

let newdata2 = {
  address: {
    city: "vizag",
    geo: { lat: "-37.3159", lng: "81.1496" },
    street: "Kulas Light",
    suite: "Apt. 556",
    zipcode: "5000833",
  },
  company: {
    bs: "harness real-time e-markets",
    catchPhrase: "Multi-layered client-server neural-net",
    name: "Romaguera-Crona",
  },
  email: "abc@sdfghj.com",
  id: 11,
  name: "karthik 124",
  phone: "0987654321",
  username: "KARTHEEK CATALOG",
  website: "hildegard.org",
};

//data for patch
const patchdata = {
  phone: "1234568858",
};
//calling the POST
updation(newdata);
//updation(newdata2);
//calling the patch function
patch(patchdata);
