function formatNumber(num) {
    return num.toLocaleString('en-PK', { maximumFractionDigits: 2 });
}

function getNumber(value) {
    return parseFloat(value.replace(/,/g, ''));
}

document.getElementById("principal").addEventListener("input", function () {
    let value = this.value.replace(/,/g, '');
    if (!isNaN(value) && value !== "") {
        this.value = formatNumber(Number(value));
    }
});

function calculateProfit() {
    let paInput = document.getElementById("principal").value;
    let prInput = document.getElementById("rate").value;
    let taxRate = parseFloat(document.getElementById("taxType").value);

    let pa = getNumber(paInput);
    let pr = parseFloat(prInput);

    if (isNaN(pa) || pa <= 0) {
        alert("Please enter a valid Principal Amount");
        return;
    }

    if (isNaN(pr) || pr <= 0) {
        alert("Please enter a valid Profit Rate");
        return;
    }

    let profitYear = pa * pr / 100;
    let profitMonth = profitYear / 12;

    let tax = profitYear * taxRate / 100;
    let netYear = profitYear - tax;
    let netMonth = netYear / 12;

    let totalMonth = pa + netMonth;
    let totalYear = pa + netYear;

    document.getElementById("result").innerHTML = `
        <div class="grid">
            <div><span>Profit / Year</span><strong>Rs ${formatNumber(profitYear)}</strong></div>
            <div><span>Profit / Month</span><strong>Rs ${formatNumber(profitMonth)}</strong></div>

            <div><span>WHT Deduction (${taxRate}%)</span><strong>Rs ${formatNumber(tax)}</strong></div>
            <div><span>Net Profit / Year</span><strong>Rs ${formatNumber(netYear)}</strong></div>

            <div><span>Total After 1 Month</span><strong>Rs ${formatNumber(totalMonth)}</strong></div>
            <div><span>Total After 1 Year</span><strong>Rs ${formatNumber(totalYear)}</strong></div>
        </div>
    `;
}
