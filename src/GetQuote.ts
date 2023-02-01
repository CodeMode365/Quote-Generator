const apiKey = "F+N8cgwANtLlSyFyYszajg==2IhM8EBLLspCWw5w";
const endpoint = "https://api.api-ninjas.com/v1/quotes";

//   const request = require('request');

const GetQuote = fetch(`api.api-ninjas.com/v1/quotes`, {
    method: 'GET',
    headers: { '​X-Api-Key': 'F+N8cgwANtLlSyFyYszajg==2IhM8EBLLspCWw5w' }
})
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

export default GetQuote
