// const { createApp } = Vue;

// const App = {
//   data() {
//     return {
//       name: "Gregg",
//     };
//   },
// };

// createApp(App).mount("#app");

colors = [
  "firebrick",
  "seagreen",
  "lightcoral",
  "darkolivegreen",
  "lightseagreen",
  "lightskyblue",
  "thistle",
  "orange",
  "darkkhaki",
];

document.body.onload = function () {
  document.body.style.background =
    colors[Math.floor(Math.random() * colors.length)];
};

function changeColour(value) {
  console.log("hello", value);
  document.body.style.backgroundColor = value;
  // document.querySelector('body').style.color(value)
}
