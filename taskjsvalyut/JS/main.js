async function convertToDollars() {
  const inp = document.getElementById("inp").value;
  const Key = "4cc43c9591f08a993e37d3de55e50a72";
  const apiUrl = `https://api.apilayer.com/bank_data/iban_validate?iban_number=DE89370400440532013000&base=AZN&access_key=${Key}`;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const exchangeRate = data.USD;
    const dollarAmount = inp * exchangeRate;
    document.getElementById("result").textContent = `${manatAmount} AZN = ${dollarAmount.toFixed(2)} USD`;
  } catch (errmsg) {
    document.getElementById("result").textContent = "Valyuta məlumatlarını yükləmədə səhv baş verdi.";
  }
}
 