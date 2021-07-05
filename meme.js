let form = document.getElementById("form");
let addMemeImage = document.getElementById("add-meme-image");
let addTopText = document.getElementById("add-top-text");
let addBottomText = document.getElementById("add-bottom-text");
let submitButton = document.getElementById("submit-meme");
let whiteBoard = document.getElementById("second");

submitButton.addEventListener("click", submitButtonHandler);

function submitButtonHandler(event){
    event.preventDefault();
    const url = addMemeImage.value;
    const text1 = addTopText.value;
    const text2 = addBottomText.value;

    createMemeContainer(url, text1, text2);
    form.reset();
}

function createMemeContainer(url, text1, text2){
    let memeContainer = document.createElement("div");
    memeContainer.className = "meme-container";
    let image = document.createElement("img");
    image.className = "meme-img";
    image.src = url;
    let topText = document.createElement("p");
    topText.className = "meme-top";
    topText.textContent = text1;

    let bottomText = document.createElement("p");
    bottomText.className = "meme-bottom";
    bottomText.textContent = text2;

    let deleteButton = document.createElement("button");
    deleteButton.className = "meme-delete";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteButtonHandler);

    memeContainer.appendChild(image);
    memeContainer.appendChild(topText);
    memeContainer.appendChild(bottomText);
    memeContainer.appendChild(deleteButton);
    whiteBoard.appendChild(memeContainer);

    console.log("created");
}

function deleteButtonHandler(event) {
    const memeContainer = event.target.parentElement;
    whiteBoard.removeChild(memeContainer);
}