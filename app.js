function updateView(){
    let currentPage = model.app.currentPage;
    console.log("Updating view for page: ", currentPage); 
    if(currentPage == "home"){
        return homePageView()
    } else if (currentPage == "tjenester") {
        return tjenester()
    } else if(currentPage == "helpdesk"){
        return helpdeskView ()
    } else if (currentPage == "admin"){
        return adminView () 
    } else if (currentPage == "personvern"){
        return personView ()
    } else if (currentPage == "vilkar"){
        return vilView ()
    } else if (currentPage == "FAQ") {
        return FAQView()
    }
}
// updateView()

// function changePage(page){
//     model.app.currentPage = page;
//     updateView()
// }
