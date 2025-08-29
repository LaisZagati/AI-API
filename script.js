function showAnswer(response) {
  console.log(response);
  alert(response.data.answer);
}

let apiKey = "f093ocaff400a6043tff45112437b840";
let context = "please provide a detailed answer";
let prompt = "When was IA first created?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Fetching data from API...");
axios.get(apiUrl).then(showAnswer);
