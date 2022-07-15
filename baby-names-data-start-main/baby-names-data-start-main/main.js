// Baby Names Data (Top 50 Boy/Girl 2022)
// Baby Center (babycenter.com)
// https://www.babycenter.com/baby-names/most-popular/top-baby-names#popularNameList

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("name-count");

// Initialize Array of Character Objects from json file
let babyData = [];
fetch("baby-names-data.json")
  .then((res) => res.json())
  .then((data) => (babyData = data));

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "gender") {
    searchGender();
  } else if (selection === "rank") {
    searchRank();
  } else if (selection === "starting-letter") {
    searchStartingLetter();
  } else if (selection === "length") {
    searchLength();
  }
}

// Display All Baby Names
function displayAll() {
  let count = 0
  let htmlstr = ""
  for (let i =0; i <babyData.length;i++) {
    htmlstr += characterHTMLStr(babyData[i])
    count++;
  }
  nameCountSpan.innerHTML = count;
  container.innerHTML = htmlstr;
}


// Display Names by Gender
function searchGender() {
  let searchgender = prompt("PLease enter gender(Boy/Girl):");
  let count = 0
  let htmlStr = "";
  for (let i =0; i <babyData.length;i++) {
     if (babyData[i].gender === searchgender) {
        htmlStr += characterHTMLStr(babyData[i])
        count++
  }
}
  container.innerHTML = htmlStr
  nameCountSpan.innerHTML = count;
}

// Display Names within a Range of Ranks
function searchRank() {
  let count = 0
  let minrank = prompt("PLease enter minimum rank:")
  let maxrank= prompt("Please eneter maximum rank:")
  let htmlStr = "" 
  for (let i =0; i < babyData.length;i++) {
    if (babyData[i].rank >=minrank && babyData[i].rank <= maxrank ) {
    htmlStr += characterHTMLStr(babyData[i])
    count++;
    }
  }
  nameCountSpan.innerHTML = count;
  container.innerHTML = htmlStr
}


// Display Names with Starting Letter
function searchStartingLetter() {
   let wordsearch = prompt("Please enter starting letter:")
   let htmlStr = ""
   let count = 0
   for (let i = 0; i < babyData.length;i++) {
        let namesearch = babyData[i].name
        
     if (namesearch.startsWith(wordsearch)){
        htmlStr += characterHTMLStr(babyData[i])
        count++;
     }
   }
   container.innerHTML = htmlStr
   nameCountSpan.innerHTML = count;
 }

// Display Names with a Specific Length
function searchLength() {
  let lengthofname = prompt("Please enter name length:")
  let htmlStr = ""
  let count = 0
  for (let i = 0; i < babyData.length; i++) {
      let lengthofword = babyData[i].name
    if (lengthofword.length == lengthofname) {
        htmlStr += characterHTMLStr(babyData[i])
        count++;
    }
  }
  container.innerHTML = htmlStr;
  nameCountSpan.innerHTML = count;
}


//return html string to displayall functio
function characterHTMLStr(babychar) {
  return `
    <div>
      
      <h3>${babychar.name} (rank : ${babychar.rank}, gender: ${babychar.gender})</h3>
      
    </div>`;
}