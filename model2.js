//helpdesk
const model = {
    app: {
        currentPage: "home"    //service
    },
    data: {
        categories: [
            {
                name: "Teknisk support",
                // img: "",
                underKategorier: [
                    "Programvarefeil", 
                    "Maskinvarefeil", 
                    "Feil i nettverkstilkobling"
                ]
                
            },
            {
                name: "Databaseservice",
                underKategorier: ["Databaseoptimalisering", "Sikkerhetskopiering", "Feilsøking av databasefeil"]
            },
            {   
                name: "Cloud Computing",
                underKategorier: ["Migrering til skyen", "Skylagring", "Skytjenester"]
            },
            {
                name: "Nettverksadministrasjon",
                underKategorier: ["IP-konfigurasjon", "Trådløst nettverk", "Feilsøking av nettverksproblemer"]
            },
            {
                name: "Serveradministrasjon",
                underKategorier: ["Servervedlikehold", "Serveroppsett", "Overvåking av servere"]
            },
            {
                name: "Webutvikling",
                underKategorier: ["Webdesign", "Nettsideoptimalisering", "Feilsøking av nettsider"]
            }, 
        ]
    }
}
    

for(let i = 0; i < model.data.categories.length; i++){
    console.log(`<option value="${model.data.categories[i].name}">${model.data.categories[i].name}</option>`)
}

model.users = [
    { username: "admin", password: "1234", role: "admin" },
    { username: "bruker", password: "pass", role: "user" }
];
model.loggedInUser = null;