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

}

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
   
   
    function getRandomHexColor() {
        const ch = document.getElementById('box').value;
        return ch.toString(16);
      }
    
      function changeColor() {
        const colorChanged = document.getElementById('colorChanged');
        const button = document.getElementById('colorChanger');
    
        const randomColor = getRandomHexColor(); // Generate a random color
    
        // colorChanged.style.backgroundColor = randomColor;
    
        const r = parseInt(randomColor.substr(1, 2), 16);
        const g = parseInt(randomColor.substr(3, 2), 16);
        const b = parseInt(randomColor.substr(5, 2), 16);
        const perceivedLightness = (r * 299 + g * 587 + b * 114) / 1000;
    
        const textColor = perceivedLightness > 128 ? '#000' : '#fff';
        button.style.color = textColor;
        button.style.backgroundColor = randomColor;
      }
    
      const colorChanger = document.getElementById('colorChanger');
      colorChanger.addEventListener('mouseover', changeColor);
