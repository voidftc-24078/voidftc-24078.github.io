
    var iSpeed = 20; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
    var iD = "typedtext";
    var iLineDelay = 20;

function typewriter()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById(iD);
    
    while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + '<span class="cursor">&block;</span>';

    if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    
    if ( iIndex != aText.length ) {
    iArrLength = aText[iIndex].length;
    setTimeout("typewriter()", iLineDelay);
    }
    } else {
    setTimeout("typewriter()", iSpeed);
    }
    
}

typewriter();