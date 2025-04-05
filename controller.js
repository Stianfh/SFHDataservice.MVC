const controller = {
    init: function () {
        document.body.insertAdjacentHTML("afterend", view.navbar);
        this.changePage(model.app.currentPage);
    },
    changePage: function (page) {
        model.app.currentPage = page;
        document.getElementById("content").innerHTML = view.pages[page];
    }
};

function changePage(page) {
    model.app.currentPage = page;
    console.log(model.app.currentPage)
    backgroundPage()
}
// document.addEventListener("DOMContentLoaded", controller.init);

// function login () {
//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;

//     let user = model.user.find(u => u.username === username && u.password ==== password);

//     if (!user) {
//         document.loggedInUser = user;
//         updateView();
//     }
// }