// Assuming you have an HTML input element with the id "inputKeyword" and a paragraph element with the id "outputParagraph"
const keyword = "das";
const inputElement = document.getElementById("article");
const outputParagraph = document.getElementById("word");

// CSV file URL
const csvFileUrl = "../words/words.csv";

// Helper function to fetch the CSV file
async function fetchCsvFile() {
  const response = await fetch(csvFileUrl);
  const csvData = await response.text();
  return csvData;
}

// Helper function to parse the CSV data
function parseCsvData(csvData) {
  const lines = csvData.split("\n");
  const entries = lines.map(line => line.split(","));
  return entries;
}

// Helper function to get a random entry from the second column
function getRandomEntry(entries) {
  const columnTwoEntries = entries.map(entry => entry[1]);
  const randomIndex = Math.floor(Math.random() * columnTwoEntries.length);
  return columnTwoEntries[randomIndex];
}

inputElement.addEventListener("input", async function() {
  const inputValue = inputElement.value.toLowerCase();

  if (inputValue === keyword) {
    const csvData = await fetchCsvFile();
    const csvEntries = parseCsvData(csvData);
    const randomEntry = getRandomEntry(csvEntries);

    outputParagraph.textContent = randomEntry;
  } else {
    outputParagraph.textContent = "";
  }
});
