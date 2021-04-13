// services/reportGenerator.js

import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call


// define a generatePDF function that accepts a tickets argument
export function generatePDF(tickets) {
    // initialize jsPDF
    const doc = new jsPDF();

    // define the columns we want and their titles
    const tableColumn = ["Id", "Question", "Answers", "Recomdation"];
    // define an empty array of rows
    const tableRows = [];
    console.log("data ticket" + JSON.stringify(tickets))

    tickets.forEach(data => {
        const dataFix = [
            data.id,
            data.question,
            data.answers,
            data.recomendation
        ];


        tableRows.push(dataFix);    // case 1 data only so push exec
    });


    // startY is basically margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    const date = Date().split(" ");
    // we use a date string to generate our filename.
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    // ticket title. and margin-top + margin-left
    doc.text("Report Questions Job Seeker ", 14, 15);
    // we define the name of our PDF file.
    doc.save(`report_${dateStr}.pdf`);
}
