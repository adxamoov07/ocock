function updateTime() {
    var now = new Date();
  
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = hours + ":" + minutes + ":" + seconds;
  
    var date = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var dateString = date + " : " + month + " : " + year;
    var weeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][now.getDay()];
    var temperature = "40°C"; // Replace with your temperature data
  
    document.getElementById("time").textContent = timeString;
    document.getElementById("date").textContent = dateString;
    document.getElementById("temperature").textContent = "TEMP: " + temperature;
    document.getElementById("week").textContent = weeek;
    setTimeout(updateTime, 1000);
  }
  
  updateTime();
  