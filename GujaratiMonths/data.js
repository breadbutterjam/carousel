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
    { monthName: "કારતક",   englishMonthName: "Kartak",   festivals: [] },
    { monthName: "માગશર",   englishMonthName: "Magshar",  festivals: [] },
    { monthName: "પોષ",     englishMonthName: "Posh",     festivals: [] },
    { monthName: "મહા",     englishMonthName: "Maha",     festivals: [] },
    { monthName: "ફાગણ",    englishMonthName: "Fagan",    festivals: [] },
    { monthName: "ચૈત્ર",   englishMonthName: "Chaitra",  festivals: [] },
    { monthName: "વૈશાખ",   englishMonthName: "Vaishakh", festivals: [] },
    { monthName: "જેઠ",     englishMonthName: "Jeth",     festivals: [] },
    { monthName: "અષાઢ",    englishMonthName: "Ashadh",   festivals: [] },
    { monthName: "શ્રાવણ",   englishMonthName: "Shravan",  festivals: [] },
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
    { monthName: "આસો",     englishMonthName: "Aaso",     festivals: [] }
];
