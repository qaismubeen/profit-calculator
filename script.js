function calculate() {

    // Read inputs
    let principalStr = document.getElementById("principal").value;
    let rateStr = document.getElementById("rate").value;
    let taxRate = Number(document.getElementById("taxType").value);

    // Remove commas from principal
    let pa = Number(principalStr.replace(/,/g, ""));
    let pr = Number(rateStr);

    // Validation (same idea as cin.fail() and < 0)
    if (isNaN(pa) || pa < 0) {
        alert("Invalid Principal Amount");
        return;
    }

    if (isNaN(pr) || pr < 0) {
        alert("Invalid Profit Rate");
        return;
    }

    // ===== SAME CALCULATIONS AS YOUR C++ =====

    // Without WHT
    let pv_year = pa * pr / 100;
    let pv_month = pv_year / 12;

    // WHT deduction (15% or 30%)
    let wht_tax = pv_year * taxRate / 100;

    // Net profit
    let net_year = pv_year - wht_tax;
    let net_month = net_year / 12;

    let total_month = pa + net_month;
    let total_year = pa + net_year;

    // ===== OUTPUT =====
    document.getElementById("result").innerHTML = `
        <b>Principal Amount:</b> Rs ${pa.toLocaleString()} <br>
        <b>Profit Rate:</b> ${pr}% <br><br>

        <b>Profit (Per Year, No Tax):</b> Rs ${pv_year.toLocaleString()} <br>
        <b>Profit (Per Month, No Tax):</b> Rs ${pv_month.toLocaleString()} <br><br>

        <b>WHT Tax (${taxRate}%):</b> Rs ${wht_tax.toLocaleString()} <br><br>

        <b>Net Profit (Per Year):</b> Rs ${net_year.toLocaleString()} <br>
        <b>Net Profit (Per Month):</b> Rs ${net_month.toLocaleString()} <br><br>

        <b>Total After 1 Month:</b> Rs ${total_month.toLocaleString()} <br>
        <b>Total After 1 Year:</b> Rs ${total_year.toLocaleString()}
    `;
}
