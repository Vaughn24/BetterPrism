function handleSubmit(evt) {
    evt.preventDefault()


    let cb_name = evt.target[0].value
    let cb_contact = evt.target[1].value
    let cb_message = evt.target[2].value

    const feedbackNode = document.getElementById("feedback")
    feedbackNode.innerHTML = '';

    pushLocalStorage({
        name: cb_name,
        contact: cb_contact,
        message: cb_message
    })

    showComments()

}

function pushLocalStorage(value){
    let pls = window.localStorage.getItem("comments")
    let arr = pls ? JSON.parse(pls) : []
    window.localStorage.setItem("comments", JSON.stringify([...arr,value]))

}

function showComments(){
    let pls = window.localStorage.getItem("comments")
    let arr = pls ? JSON.parse(pls) : []
    

    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        let node = document.createElement("h4");

        let commentDate = new Date();
        let m = commentDate.getMonth() + 1;
        let d = commentDate.getDate();
        let y = commentDate.getFullYear();

        let hours = commentDate.getHours()
        let minutes = commentDate.getMinutes()
        let meridiem = ""
        if (minutes < 10){
        minutes = "0" + minutes
        }
        if(hours > 11){
        meridian = "PM"
        } else{
            meridian = "AM"
        }


        let today = m + "/" + d + "/" + y + ", " + hours + ":" + minutes + " " + meridiem;


        node.innerHTML = 
        ` <div class="comment-card">
        <div class="comment-card-header">
        <img src="assets/img/comment-icon.png">
        <h1 class="comment-name"> ${element.name}</h1> <i>•</i> <span class="comment-date"> ${today} </span> 
        </div>
        <p> ${element.message} </p>
        </div>
        `
        ;

        document.getElementById("feedback").appendChild(node);

    }
}

function pushLocalStorage(value){
    let pls = window.localStorage.getItem("comments")
    let arr = pls ? JSON.parse(pls) : []
    window.localStorage.setItem("comments", JSON.stringify([...arr,value]))

}

showComments()
document.getElementById("comment-box").addEventListener("submit", handleSubmit)

// Hamburger Menu for Mobile Thingy
let hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
let mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
let menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
let header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	let scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});