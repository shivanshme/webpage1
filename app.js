// // // fetch('https://api.cryptonator.com/api/ticker/btc-usd')    //based on promises
// // //     .then(res => {
// // //         console.log("response,waiting to parse", res);
// // //         return res.json()
// // //     })
// // //     .then(data => {
// // //         console.log("data parsed");
// // //         console.log(data.ticker.price);
// // //     })
// // //     .catch(e => {
// // //         console.log("error", e);
// // //     })

// // const fetchBitcoinPrice = async () => {
// //     try {
// //         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
// //         const data = await res.json();
// //         console.log(data.ticker.price);
// //     }
// //     catch{
// //         console.log("Something went wrong");
// //     }

// // }



// //USING AXIOS LIBRARY

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//       console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("Error", err);
//     })
  

// Using more axios

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button')


const addNewJoke =async () => {
    const joketext = await getDadJoke();
    console.log(joketext);
    const newLI = document.createElement('LI');
    newLI.append(joketext);
    jokes.append(newLI);
}
const getDadJoke = async () => {
    const config={headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/',config)
    return res.data.joke;
}

button.addEventListener('click',addNewJoke);