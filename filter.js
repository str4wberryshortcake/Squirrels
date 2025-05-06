let data, data1;

function get(id) {
  return document.getElementById(id);
}

function fillDropDown(key) {
  let list = [];
  let build = ""
  for (let i = 0; i < data.length; i++) {
    let data_field = data[i];
    if (!list.includes(data_field[key])) {
      list.push(data_field[key]);
    }
  }
  list.sort();
  for (let field of list) {
    build += `<option>${field}</option>`;
  }
  return build;
}

function showLocation(lat, lon) {
  mapKey = "xXjwGA2gQlqU1Or9cHnKBPkleRPXVgiW";

  let map = `https://www.mapquestapi.com/staticmap/v5/map?center=${lat},${lon}&zoom=14&size=250,210&key=${mapKey}`;
  return `<img class="map" src="${map}">`;
}

function init() {
  $.ajaxSetup({ async: false });
  data = $.getJSON("https://data.cityofnewyork.us/resource/vfnx-vebw.json").responseJSON;
  data1 = $.getJSON("https://data.cityofnewyork.us/resource/gfqj-f768.json").responseJSON;
  
  get("furColor").innerHTML = fillDropDown("primary_fur_color");
  get("hectare").innerHTML = fillDropDown("hectare");
  get("hectare2").innerHTML = fillDropDown("hectare");
  get("furColor1").innerHTML = fillDropDown("primary_fur_color");
  get("location2").innerHTML = fillDropDown("location");
  get("furColor2").innerHTML = fillDropDown("primary_fur_color");
  cards(data, "output1");
  cards1(data1, "output2");
}

function filter(squirrels, key, value) {
  let list = [];
  for (let i = 0; i < squirrels.length; i++) {
    let squirrel = squirrels[i];
    if (squirrel[key] == value) {
      list.push(squirrels[i]);
    }
  }
  return list;
}

function getSquirrels() {
  get("output1").innerHTML = "";
  let furColor = get("furColor").value;
  subdata = filter(data, "primary_fur_color", furColor);
  cards(subdata, "output1");
}

function getSquirrels1() {
  get("output2").innerHTML = "";
  let hectare = get("hectare").value;
  subdata = filter(data1, "hectare", hectare);
  cards1(subdata, "output2");
}

function card(squirrel) { 
  let build = "";
  build += `<div class="fitted card" data-aos="flip-up">`;
  build += `     <h3>Fur Color: ${squirrel.primary_fur_color}</h3>`;
  build += `     <p>Age: ${squirrel.age}</p>`;
  build += `     <p>Location: ${squirrel.location}</p>`;
  build += `     <p>Specific Location: ${squirrel.specific_location}</p>`;
  build += `     <p>Fur Color: ${squirrel.primary_fur_color}</p>`;
  build += `     <p>Hectare Squirrel Number: ${squirrel.hectare_squirrel_number}</p>`;
  build += `</div>`;
  build += `<br>`;
  return build;
}

function cards(squirrels, idE) {
  get("output1").innerHTML = "";

  let build = "";

  for (let i = 0; i < 15; i++) {
    let squirrel = squirrels[i]
    let front = card(squirrel);
    let back = showLocation(squirrel.y, squirrel.x);
    let flipcard = new FlipCard(front, back);
    flipcard.render(idE);
  }
}

function radio(value, dataT, key, id) {
  console.log(dataT);
  get(id).innerHTML = "";
  console.log(value);
  subdata = filter(dataT, key, value);
  cards(subdata, id);
}


function radio1(value, dataT, key, id) {
  get(id).innerHTML = "";
  console.log(value);
  subdata = filter(dataT, key, value);
  cards1(subdata, id);
}


function card1(squirrel) { 
  let build = "";
  build += `<div class="fitted card" data-aos="flip-up">`;
  build += `     <h3>Hectare: ${squirrel.hectare}</h3>`;
  build += `     <p>Time: ${squirrel.shift}</p>`;
  build += `     <p>${squirrel.note_squirrel_park_stories}</p>`;
  build += `</div>`;
  build += `<br>`;
  return build;
}

function cards1(squirrels, idE) {
  get("output2").innerHTML = "";

  let build = "";

  for (let i = 0; i < 15; i++) {
    let squirrel = squirrels[i]
    let front = card1(squirrel);
    let back = '';
    let flipcard = new FlipCard1(front, back);
    flipcard.render(idE);
  }
}

// function function1(value){
//   if(value == "Gray"){
//     return "images/gray-squirrel.png";
//   } else if(value == "Black"){
//     return "images/black-squirrel.png";
//   } else if(value == "Cinnamon"){
//     return "images/cinnamon-squirrel.png"
//   }
// }


function getHectareAndTime(){
  let time = get("time-text").value;
  let hectare = get("hectare2").value;
  subdata = filter(data1, "shift", time );
  subdata = filter(subdata, "hectare", hectare )   ;
  cards1(subdata, "output2");
}

function getAgeAndFurColor(){
  let age = get("age1").value;
  let fur_color = get("furColor1").value;
  subdata = filter(data, "age", age );
  subdata = filter(subdata, "primary_fur_color", fur_color)   ;
  cards(subdata, "output1");
}

function getLocationAndAge(){
  let location = get("location2").value;
  let age = get("age2").value;
  subdata = filter(data, "age", age);
  subdata = filter( subdata, "location", location)   ;
  cards(subdata, "output1");
}

function getFurColorAndLocation(){
  let furColor = get("furColor2").value;
  let location = get("location3").value;
  subdata = filter(data, "location", location);
  subdata = filter( subdata, "primary_fur_color", furColor)   ;
  cards(subdata, "output1");
}