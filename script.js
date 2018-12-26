$(document).ready(function(){
    $("#reset").click(function(){
        location.reload();
    });
    $("#submit").click(function(){
        var city = $("#city").val();
        if (city != ""){
            $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial"+"&appid=8f236e524e673e139b0f6739b81a6eb4",
            type: "get",
            dataType: "json",
            success:function(data){
                console.log(data);
                var widget= show(data);
                $("#show").html(widget);
            }
        });
        } else {
            $("#show").html("<h4>City name error</h4>")
        }
    });
});
function show(data){
    return (
        "<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'/>"+
        "<h4>Weather: "+data.weather[0].main+"</h5>"+
        "<h4>Description: "+data.weather[0].description+"</h4>"+
        "<h4>Temperature: "+data.main.temp+"&#8457</h4>"+
        "<h4>Pressure: "+data.main.pressure+"hPa</h4>"+
        "<h4>Humidity: "+data.main.humidity+"%</h4>"+
        "<h4>Temp Max: "+data.main.temp_max+"&#8457</h4>"+
        "<h4>Temp Min: "+data.main.temp_min+"&#8457</h4>"+
        "<h4>Wind speed: "+data.wind.speed+"mile/hr</h4>"+
        "<h4>Wind direction: "+data.wind.deg+"&#176</h4>"+
        "<h4>[ City: "+data.name+", "+data.sys.country+" ]"+"<h4>"
        );
    };
