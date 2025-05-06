let data, output;
function init(){
  $.ajaxSetup({async: false});
  data = $.getJSON("https://data.cityofnewyork.us/resource/vfnx-vebw.json").responseJSON;
}

function get(id){
  return document.getElementById(id);
}

function displayChart(data, id, type) {
  let chart = c3.generate({
    bindto: '#' + id,
    data: {
      columns: data,
      type:type
      
    }
  });
}

// function stepChart(){
//   var chart = c3.generate({
//       data: {
//         columns: [
//             ['data1', 300, 350, 300, 0, 0, 100],
//             ['data2', 130, 100, 140, 200, 150, 50]
//         ],
//         types: {
//             data1: 'step',
//             data2: 'area-step'
//         }
//       }
//   });
// }

function SquirrelActivites(){
  let r = 0, ch = 0, cl = 0, e = 0, f = 0, o = 0;
  for(let i = 0; i < data.length; i++){
    let activities = data[i];
    console.log(activities.running);
    if(activities.running == true){
      r++;  
    }else if(activities.chasing == true){
      ch++;
    }else if(activities.climbing == true){
      cl++;
    }else if(activities.eating == true){
      e++;
    }else if(activities.foraging == true){
      f++;
    }else{
      o++;
    }
  }

  let chartData = [
    ["Running",r],
    ["Chasing ",ch],
    ["Climbing",cl],
    ["Eating",e],
    ["Foraging",f],
    ["Other",o],
  ]
  let chartType = document.getElementById("chartType").value;

  displayChart(chartData, "output", chartType);
}

function squirrelFurColor(){
  let gray = 0, cinnamon = 0, black = 0, other = 0;
  for(let i = 0; i < data.length; i++){
    let furColor = data[i];
    if(furColor.primary_fur_color == "Gray"){
      gray++;  
    }else if(furColor.primary_fur_color == "Cinnamon"){
      cinnamon++; 
    }else if(furColor.primary_fur_color == "Black"){
      black++;
    }else{
      other++;
    }
  }

  let chartData1 = [
    ["Gray", gray],
    ["Black", black],
    ["Cinnamon", cinnamon],
    ["Other", other]
  ]

  let chartType1 = document.getElementById("chartType1").value;

  displayChart(chartData1, "output1", chartType1);
  
}


