function updateView(){
    let currentPage = model.app.currentPage;

    if(currentPage == "home"){
        return homePageView()
    } else if (currentPage == "tjenester") {
        return tjenester()
    } else if(currentPage == "helpdesk"){
        return helpdeskView ()
    } else if (currentPage == "admin"){
        return adminView () 
    }
}
// updateView()

// function changePage(page){
//     model.app.currentPage = page;
//     updateView()
// }
