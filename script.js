function calculate() {
    let p = Number(document.getElementById("principal").value.replace(/,/g,""));
    let r = Number(document.getElementById("rate").value);
    let tax = Number(document.getElementById("taxType").value);

    let profit = p * r / 100;
    let net = profit - (profit * tax / 100);

    document.getElementById("result").innerHTML =
        "Net Profit (Year): Rs " + net.toLocaleString();
}
