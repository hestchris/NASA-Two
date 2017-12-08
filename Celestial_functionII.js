




$(document).ready(function() {
var nasa = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-17&end_date=2017-10-24&api_key=0hZcmQI7mmHNYinB8NPxsYJqqaxomP1qEwZ3zooN"

  $.get(nasa, function (gotData) {
    console.log(gotData)
    console.log(gotData.near_earth_objects);
    for (var day in gotData.near_earth_objects) {
      // console.log(gotData.near_earth_objects[day]);
      getInfo(gotData.near_earth_objects[day]);
    }

  })


  function getInfo(dayArr) {
    console.log('dayArr', dayArr);

    dayArr.forEach(function(element) {
      // console.log(element)
      // console.log(element.name, element.estimated_diameter.feet);
      // console.log(element.close_approach_data[0].miss_distance.miles, 'miles from earth');
      // console.log(element.close_approach_data[0].relative_velocity.miles_per_hour, 'MPH');
  
        
      $('.tech_data_table').append (`
        <p class='tech_item'>Name: ${element.name}</p>
        <p class='tech_item'>Max Diameter (ft) ${element.estimated_diameter.feet.estimated_diameter_max}</p>
        <p class='tech_item'>Distance from Earth ${element.close_approach_data[0].miss_distance.miles}
        <p class='tech_item'>Velocity (mph) ${element.close_approach_data[0].relative_velocity.miles_per_hour}</p><br>`);
         
    })
  }

})



// function setText(el, s) {
//   if (typeof el.textContent == 'string') {
//     el.textContent = s;
//   } else if (typeof el.innerText == 'string') {
//     el.innerText = s;
//   }
// }
// function update(id, text) {
//   var el = document.getElementById(id);
//   if (el) {
//     setText(el, text);
//   }
// }
