function makeBlue() {
    document.body.style.backgroundColor = 'powderblue';
}

//handle event getelementby make bg red
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const blueButton = document.getElementById('make-red-button');
blueButton.onclick = makeRed;  //just function name likhte hbe call kora jabe na  

//handle event using annonymous function
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// handle by using addEventListener
const goldenButton = document.getElementById('make-golden-button');
goldenButton.addEventListener('click', makeGoldenButton);
function makeGoldenButton() {
    document.body.style.backgroundColor = 'goldenrod';
}

// add eventlistener
const pinkButton = document.getElementById('make-pink-button')
pinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
});

// shortcut
document.getElementById('make-salmon-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'salmon';
});

// get paragraph
function handleOnlyFunctionClick() {
    const p = document.getElementById('clicking-method');
    p.innerText = 'pick a boo, are you surprised!!!!!';
}

// direct handle event
document.getElementById('direct-event-handle').addEventListener('click', function () {
    const p = document.getElementById('clicking-method');
    p.innerText = 'pick a boo, are you surprised again!!!!!';
});

// update an input
document.getElementById('update-name').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    const p = document.getElementById('clicking-method');
    p.innerText = textField.value;
    textField.value = ''; //update hoye field blank hoye jabe 
});

// create comment
// add button event handler
document.getElementById('submit-comment');
addEventListener('click', function () {
    // get user comment
    const commentBox = document.getElementById('new-comment');
    // const userComment = commentBox.value;

    // create comment paragraph
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;
    const commentContainer = document.getElementById('comment-container');
    commentContainer.append(newComment);
    commentBox.value = '';
});

// more events
// delete element
document.getElementById('delete-button').addEventListener('click',function () {
    document.getElementById('secret-info').style.display = 'none';
});

// focus on input field
document.getElementById('delete-confirm').addEventListener('focus', function () {
    document.body.style.backgroundColor = 'red';
});

// blur input field er baire click korle color change hoye jabe
document.getElementById('delete-confirm').addEventListener('blur', function () {
    document.body.style.backgroundColor = 'limegreen';
});

// keydown from keyboard
// document.getElementById('delete-confirm').addEventListener('keydown', function () {
//     const deleteField = document.getElementById('delete-confirm');
//     console.log(deleteField.value);
// });
// // keypress from keyboard
// document.getElementById('delete-confirm').addEventListener('keypress', function () {
//     const deleteField = document.getElementById('delete-confirm');
//     console.log(deleteField.value);
// });
// keyup from keyboard
document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
    const deleteButton = document.getElementById('delete-button');
    if (event.target.value =='delete') {
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled',true)
    }
});
// change something
document.getElementById('delete-confirm').addEventListener('change', function () {
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value);
});