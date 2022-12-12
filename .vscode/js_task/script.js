// // api url
// const api_url = "https://employeedetails.free.beeceptor.com/my/api/path";

// // Defining async function
// async function getapi(url) {
//   // Storing response
//   const response = await fetch(url);

//   // Storing data in form of JSON
//   var data = await response.json();
//   console.log(data);
//   if (response) {
//     hideloader();
//   }
//   show(data);
// }
// // Calling that async function
// getapi(api_url);

// // Function to hide the loader
// function hideloader() {
//   document.getElementById("loading").style.display = "none";
// }
// // Function to define innerHTML for HTML table
// function show(data) {
//   let tab = `<tr>
// 		<th>Name</th>
// 		<th>Office</th>
// 		<th>Position</th>
// 		<th>Salary</th>
// 		</tr>`;

//   // Loop to access all rows
//   for (let r of data.list) {
//     tab += `<tr>
// 	<td>${r.name} </td>
// 	<td>${r.office}</td>
// 	<td>${r.position}</td>
// 	<td>${r.salary}</td>
// </tr>`;
//   }
//   // Setting innerHTML as tab variable
//   document.getElementById("employees").innerHTML = tab;
// }

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    window.localStorage.setItem("data", JSON.stringify(data));
  });
//   .then((err) => console.log(err));
//console.log(localStorage);

// const data = { username: 'example' };

// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('Success:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
// const newdata = {
//   title: "karthik",
//   body: "bar",
//   userId: 1,
// };
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
  username: "catalog",
  website: "hildegard.org",
};
const updation = function (data) {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    console.log(response);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("res0", data);
      });
    // const res = response.json();
    // console.log(res);
    // response
    //   .forEach((ele, i) => {
    //     const value = Object.keys(ele);
    //     console.log(value);
    //   })
    //   .then((result) => {
    //     console.log(value);
    //   });
  });
};

updation(newdata);

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify({
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
    name: "karthik 1234567",
    phone: "0987654321",
    username: " karthik catalog",
    website: "hildegard.org",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
}).then((response) => {
  response.json().then((json) => {
    console.log(json);
    let arr = [];
    arr = JSON.parse(window.localStorage.getItem("data"));
    arr.push(json);
    window.localStorage.setItem("data", JSON.stringify(arr));
    arr.forEach((element, index) => {
      //   window.localStorage.setItem("element", JSON.stringify(element));
      const markup = `<li class="list_${index}">${element.username}</li>`;
      console.log(markup);
      document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
    });
  });
});

//patching an username

// let data = JSON.parse(localStorage.getItem("data"));
// data.forEach((element, index) => {
//   //   window.localStorage.setItem("element", JSON.stringify(element));
//   const markup = `<li class="list_${index}">${element.username}</li>`;
//   console.log(markup);
//   document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
// });

//

//{
//   if (Response.status === 201) {
//     window.localStorage.setItem("data", data);
//   } else {
//     console.log("response rejected");
//   }
// }
