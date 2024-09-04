
// set up text to print, each item in array is new line

var aText = new Array(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod finibus velit eget convallis. Duis ut vestibulum metus. Nullam vehicula dui eros, at pharetra nisl dapibus at. Aliquam eget elementum orci. Curabitur et quam quis felis ornare auctor. Maecenas ac eleifend nibh. Maecenas at nisi id urna eleifend hendrerit. Integer condimentum arcu eu faucibus suscipit. Suspendisse malesuada magna et diam fermentum posuere. Ut fermentum cursus feugiat. Suspendisse potenti. Etiam dolor metus, pulvinar at lacus eu, fermentum interdum mi. Nulla consequat dictum sagittis"
    );
    var iSpeed = 20; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + '<span class="cursor">&block;</span>';
    
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
     
    }
    
    typewriter();
