//helpdesk
const model = {
    app: {
        currentPage: "FAQ"    //service
    },
    inputs: {
        helpdesk: {
            name: "",
            tlf: "",
            email: "",
            selectedCategory: "",
            underKategorier: "",
            description: "",
            kontaktmetode: "",
        }
        
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
            {
                name: "Brukerstøtte",
                underKategorier:["Fjernsupport", "Telefon- og chatstøtte", "Programvarefeilsøking", "Maskinvarefeilsøking", "Oppsett og installasjon", "Brukeropplæring", "Feilrapportering og oppfølging", "Dokumentasjon og veiledning"]
            }
        ]
    }
}
    

// for(let i = 0; i < model.data.categories.length; i++){
//     console.log(`<option value="${model.data.categories[i].name}">${model.data.categories[i].name}</option>`)
// }

model.users = [
    { username: "admin", password: "1234", role: "admin" },
    { username: "bruker", password: "pass", role: "user" }
];
model.loggedInUser = null;

let questions = [
    {
        question: "Hva er SFH Dataservice?",
        answer: "SFH Dataservice er et profesjonelt IT-tjenesteselskap som spesialiserer seg på teknisk support, nettverksadministrasjon, og cloud computing."
    },
    {
        question: "2",
        answer: ""
    },
    {
        question: "3",
        answer: ""
    },
    {
        question: "4",
        answer: ""
    },
    {
        question: "5",
        answer: ""
    },
    {
        question: "6",
        answer: ""
    },
    {
        question: "7",
        answer: ""
    },
]

for(let i = 0; i < questions.length; i++){  // putte i funksjoner som skriver ut
    console.log(`<div class="faq-item">
                    <h3>${questions[i].question}</h3>
                    <p>${questions[i].answer}</p>
                </div>`)
} // evt. return