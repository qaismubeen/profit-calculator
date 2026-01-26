function calculateProfit() {
    let pa = parseFloat(document.getElementById("principal").value);
    let pr = parseFloat(document.getElementById("rate").value);

    // Input validation (same as cin.fail() and pa < 0)
    if (isNaN(pa) || pa < 0) {
        alert("Invalid Principal Amount");
        return;
    }

    if (isNaN(pr) || pr < 0) {
        alert("Invalid Profit Rate");
        return;
    }

    // Without WHT Tax
    let pv_year = pa * pr / 100;
    let pv_month = pv_year / 12;

    // WHT Tax (15%)
    let wht_tax = pv_year * 15 / 100;

    // Net Profit after tax
    let net_year = pv_year - wht_tax;
    let net_month = net_year / 12;

    let total_after_month = pa + net_month;
    let total_after_year = pa + net_year;

    document.getElementById("result").innerHTML = `
        <h3>Results</h3>
        <p>Principal Amount: Rs. ${pa}</p>
        <p>Profit Rate: ${pr}%</p>
        <p><strong>Without WHT Tax</strong></p>
        <p>Profit per Year: Rs. ${pv_year.toFixed(2)}</p>
        <p>Profit per Month: Rs. ${pv_month.toFixed(2)}</p>
        <p><strong>WHT Tax (15%)</strong>: Rs. ${wht_tax.toFixed(2)}</p>
        <p><strong>Net Profit per Year</strong>: Rs. ${net_year.toFixed(2)}</p>
        <p><strong>Net Profit per Month</strong>: Rs. ${net_month.toFixed(2)}</p>
        <p>Total Amount after 1 Month: Rs. ${total_after_month.toFixed(2)}</p>
        <p>Total Amount after 1 Year: Rs. ${total_after_year.toFixed(2)}</p>
    `;
}
