// =============================================================
// Gujarati months — card data
// Each month renders as one HTML card (see renderMonthCard in script.js).
//
// Month shape:
//   monthName         Gujarati name, shown on the green band
//   englishMonthName  Transliteration (viewer counter + accessibility label)
//   festivals[]       Rows on the card, stacked top to bottom
//     dates           Italic line above the name, e.g. "Sud - Chauth"
//     name            Bold festival name
//     image           File name inside FESTIVAL_IMAGE_DIR (optional)
// =============================================================

// Folder that all festival images live in (swap freely)
const FESTIVAL_IMAGE_DIR = 'images/';

// Months are listed in Gujarati calendar order (Kartak -> Aaso).
// Reorder the array to change slide order.
const GUJARATI_MONTHS = [
    { monthName: "કારતક",   englishMonthName: "Kartak",   festivals: [
        {
            dates: "Sud Ekam",
            name: "Saalmubarak",
            image: "Saalmubarak.png"
        },
        {
            dates: "Sud Satam",
            name: "Jalaram Jayanti",
            image: "JalaramJayanti.png"
        },
        {
            dates: "Sud Ekadashi",
            name: "Dev Uthi Ekadashi",
            image: "DevUthiEkadashi.png"
        },
        {
            dates: "Poonam",
            name: "Dev Diwali / Tulsi Vivah",
            image: "DevDiwali.png"
        },

    ] },
    { monthName: "માગશર",   englishMonthName: "Magshar",  festivals: [
        {
            dates: "Poonam",
            name: "Dattatrey Jayanti",
            image: "DattatreyJayanti.png"
        }
    ] },
    { monthName: "પોષ",     englishMonthName: "Posh",     festivals: [] },
    { monthName: "મહા",     englishMonthName: "Maha",     festivals: [
        {
            dates: "vad - chaudas",
            name: "Mahashivratri",
            image: "MahaShivratri.png"
        }
    ] },
    { monthName: "ફાગણ",    englishMonthName: "Fagan",    festivals: [
        {
            dates: "Poonam",
            name: "Holi",
            image: "Holi.png"
        },
        {
            dates: "Vad - Ekam",
            name: "Dulheti",
            image: ""
        }
    ] },
    { monthName: "ચૈત્ર",   englishMonthName: "Chaitra",  festivals: [
         {
            dates: "Sud - Ekam",
            name: "Gudi Padvo",
            image: "GudiPadva.png"
        },
         {
            dates: "Poonam",
            name: "Chaitri Purnima",
            image: ""
        },
         {
            dates: "Sud Ekam to Nom",
            name: "Chaitri Navratri",
            image: "Navratri.png"
        },
         {
            dates: "Sud - Nom",
            name: "Ram Navmi",
            image: "RamNavmi.png"
        }
    ] },
    { monthName: "વૈશાખ",   englishMonthName: "Vaishakh", festivals: [
        {
            dates: "Sud - treej",
            name: "Akha treej",
            image: "AkhaTreej.png"
        },
        {
            dates: "Poonam",
            name: "Buddha Purnima",
            image: "BuddhaPurnima.png"
        }
    ] },
    { monthName: "જેઠ",     englishMonthName: "Jeth",     festivals: [
        {
            dates: "Sud - Ekadashi",
            name: "Bhim Ekadashi",
            image: "BhimEkadashi.png"
        },
        {
            dates: "Poonam",
            name: "Vad Savitri",
            image: "VadSavitiri.png"
        }
    ] },
    { monthName: "અષાઢ",    englishMonthName: "Ashadh",   festivals: [
        {
            dates: "Sud - Ekam",
            name: "Kutchi New Year",
            image: ""
        },
        {
            dates: "Poonam",
            name: "Guru Purnima",
            image: "GuruPurnima.png"
        }
    ] },
    { monthName: "શ્રાવણ",   englishMonthName: "Shravan",  festivals: [
        {
            dates: "Poonam",
            name: "Rakshabandhan",
            image: "Rakshabandhan.png"
        },
        {
            dates: "Vad - Ashhtami",
            name: "Janmashtami",
            image: "Janmashtami.png"
        },
        {
            dates: "Vad - Baras",
            name: "Paryushan begins",
            image: "Paryushan.png"
        }
    ] },
    {
        monthName: "ભાદરવો",
        englishMonthName: "Bhadarvo",
        festivals: [
            {
                dates: "Sud - Chauth",
                name: "Ganesh Chaturthi",
                image: "ganesh_chaturthi.png"
            },
            {
                dates: "Poonam to Amaas",
                name: "Shraad",
                image: "shraad.png"
            }
        ]
    },
    { monthName: "આસો",     englishMonthName: "Aaso",     festivals: [
        {
            dates: "Sud Ekam to Nom",
            name: "Navratri",
            image: "Navratri.png"
        },
        {
            dates: "Sud Dasam",
            name: "Dusshera",
            image: "Dusshera.png"
        },
        {
            dates: "Poonam",
            name: "Sharad Purnima",
            image: "SharadPoonam.png"
        },
        {
            dates: "Amas",
            name: "Diwali",
            image: "Diwali.png"
        }
    ] }
];

