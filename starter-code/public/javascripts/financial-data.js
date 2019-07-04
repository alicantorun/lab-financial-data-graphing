document.getElementById("search-btn").onclick = () => {
  // const query = document.getElementById("movie-input").value;

  //   document.getElementById("valueBeginning").oninput = () => {
  event.preventDefault();
  const beginningQueryValue = document.getElementById("valueBeginning").value;
  console.log(beginningQueryValue);
  //   };

  //   document.getElementById("valueEnding").oninput = () => {
  // event.preventDefault();
  const endingValueQuery = document.getElementById("valueEnding").value;
  console.log(endingValueQuery);
  //   };

  const url = `https://api.coindesk.com/v1/bpi/currentprice.json`;
  const closingDataUrl = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${beginningQueryValue}&end=${endingValueQuery}`;

  //   fetch(url)
  //     .then(response => {
  //       return response.json();
  //     })
  axios
    .get(closingDataUrl)
    .then(response => {
      const data = response.data;
      //   const time = data.time;
      //   const rate = data.bpi.USD.rate;
      console.log(data.bpi);
      //   console.log(data.time);
      //   console.log(data.bpi.USD.rate);

      const datesSelected = Object.keys(data.bpi);
      const pricesSelected = Object.values(data.bpi);

      console.log(datesSelected);
      console.log(pricesSelected);

      const ctx = document.getElementById("myChart").getContext("2d");

      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: datesSelected,
          datasets: [
            {
              label: "Bitcoin price",
              data: pricesSelected,
              backgroundColor: "rgba(255, 99, 132, 0.2)"
            }
          ]
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// document.getElementById("valueBeginning").oninput = () => {
//   event.preventDefault();
//   const beginningQueryValue = document.getElementById("valueBeginning").value;
//   console.log(beginningQueryValue);
// };

// document.getElementById("valueEnding").oninput = () => {
//   event.preventDefault();
//   const endingValueQuery = document.getElementById("valueEnding").value;
//   console.log(endingValueQuery);
// };
