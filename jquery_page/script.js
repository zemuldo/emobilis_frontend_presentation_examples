function populateDate(){
    var months = ["January","February","March","April","May", "June","July","August","September","October","November","December"]
    $("#month").text(months[new Date().getMonth()]);
    $("#day").text(new Date().getDate());
    $("#year").text(new Date().getFullYear());
    $("#hour").text(new Date().getHours());
    $("#minute").text(new Date().getMinutes());
    $("#seconds").text(new Date().getSeconds());
}
populateDate();

$("#refresh").click(function(){
    populateDate();
});