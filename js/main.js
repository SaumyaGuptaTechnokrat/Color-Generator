var typed = new Typed('#text', {
    strings: ['Hex', 'Color', 'Generator'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});
// var colorChanged = document.getElementById("colorChanged");



function colorGenerator() {
    console.log("Color Picked");

    // Get the value return by color picker
    var colorChanged = document.getElementById("colorChanged");

    var color = document.getElementById('colorPicker').value;
    // Set the color as background
    colorChanged.style.backgroundColor = color;
   document.getElementById('colorHexCode').innerText = color;
     //colorChanged.style.color="#050505";

    // Take the hex code
    document.getElementById('box').value = color;
    // if(colorChanged.style.backgroundColor=="#ffffff"){
//     colorChanged.style.color="black";
//     console.log("Color White");
// }
// else if(colorChanged .style.backgroundColor=="black"){
//     colorChanged.style.color = "white";
// }
}
// When user clicks over color picker,
// myColor() function is called
document.getElementById('colorPicker')
    .addEventListener('input', colorGenerator);
    function colorcode(){
        var colorChanged = document.getElementById("colorChanged");
        var colorCode = document.getElementById('box').value;
        document.getElementById('colorHexCode').innerText = colorCode;

        document.getElementById("colorChanged").style.backgroundColor = colorCode;
        // if(colorCode === '#000'){
        //     document.getElementById('mainBox').style.backgroundColor = white;
        // }
      
        if(colorChanged.style.backgroundColor=="white"){
            colorChanged.style.color="black";
        }
        else if(colorChanged .style.backgroundColor=="black"){
            colorChanged.style.color = "white";
        }
    }
