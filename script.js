function calculateProfit() {
    let pa = parseFloat(document.getElementById("principal").value);
    let pr = parseFloat(document.getElementById("rate").value);
    let taxRate = parseFloat(document.getElementById("taxType").value);

    if (isNaN(pa) || pa < 0) {
        alert("Please enter a valid Principal Amount");
        return;
    }

    if (isNaN(pr) || pr < 0) {
        alert("Please enter a valid Profit Rate");
        return;
    }

    // Without Tax
    let profitYear = pa * pr / 100;
    let profitMonth = profitYear / 12;

    // WHT Tax
    let whtTax = profitYear * taxRate / 100;

    // Net Profit
    let netYear = profitYear - whtTax;
    let netMonth = netYear / 12;

    let totalMonth = pa + netMonth;
    let totalYear = pa + netYear;

    document.getElementById("result").innerHTML = `
        <h2>📊 Calculation Results</h2>

        <div class="result-grid">
            <div><span>Principal Amount</span><strong>Rs. ${pa.toFixed(2)}</strong></div>
            <div><span>Profit Rate</span><strong>${pr}%</strong></div>
            <div><span>WHT Category</span><strong>${taxRate}%</strong></div>

            <div><span>Profit / Year (No Tax)</span><strong>Rs. ${profitYear.toFixed(2)}</strong></div>
            <div><span>Profit / Month (No Tax)</span><strong>Rs. ${profitMonth.toFixed(2)}</strong></div>

            <div><span>WHT Tax Deduction</span><strong>Rs. ${whtTax.toFixed(2)}</strong></div>

            <div><span>Net Profit / Year</span><strong>Rs. ${netYear.toFixed(2)}</strong></div>
            <div><span>Net Profit / Month</span><strong>Rs. ${netMonth.toFixed(2)}</strong></div>

            <div><span>Total After 1 Month</span><strong>Rs. ${totalMonth.toFixed(2)}</strong></div>
            <div><span>Total After 1 Year</span><strong>Rs. ${totalYear.toFixed(2)}</strong></div>
        </div>
    `;
}
