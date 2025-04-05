const Model = {
    categories: {
        'teknisk-support': [
            'Programvarefeil',
            'Maskinvarefeil',
            'Feil i nettverkstilkobling'
        ],
        'databaseservice': [
            'Databaseoptimalisering',
            'Sikkerhetskopiering',
            'Feilsøking av databasefeil'
        ],
        'cloud-computing': [
            'Migrering til skyen',
            'Skylagring',
            'Skytjenester'
        ],
        'nettverksadministrasjon': [
            'IP-konfigurasjon',
            'Trådløst nettverk',
            'Feilsøking av nettverksproblemer'
        ],
        'serveradministrasjon': [
            'Servervedlikehold',
            'Serveroppsett',
            'Overvåkning av servere'
        ],
        'webutvikling': [
            'Webdesign',
            'Nettsideoptimalisering',
            'Feilsøking av nettsider'
        ]
    },

    getSubcategories: function (category) {
        return this.categories[category] || [];
    }
};


