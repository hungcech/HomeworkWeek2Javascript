function upDate(previewPic) {
    console.log("Mouse over event triggered");
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);

    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
}

function unDo() {
    console.log("Mouse out event triggered");

    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = "Hover over an image below to display here.";
    imageDiv.style.backgroundImage = '';
}
