var tweeps = ['@mozilla', '@wired', '@fzero'];

var faces = {
    smiley: function () {
        return ' :) ';
    },
    sadley: function () {
        return ' :( ';
    },
    winket
}

function addFaces (arr, whichFace) {

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i] + whichFace());
    }

}

addFaces (tweeps, faces.smiley);
