function checkCashRegister(price, cash, cid) {
    const currencyUnit = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];

    let changeDue = cash - price;
    let totalCid = cid.reduce((sum, curr) => sum + curr[1], 0).toFixed(2);
    
    if (totalCid < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    
    if (totalCid == changeDue) {
        return { status: "CLOSED", change: cid };
    }

    let change = [];
    cid = cid.reverse();

    for (let [unit, unitValue] of currencyUnit.reverse()) {
        let amountAvailable = cid.find(el => el[0] === unit)[1];
        let amountToGive = 0;

        while (changeDue >= unitValue && amountAvailable > 0) {
            changeDue = (changeDue - unitValue).toFixed(2);
            amountAvailable -= unitValue;
            amountToGive += unitValue;
        }

        if (amountToGive > 0) {
            change.push([unit, amountToGive]);
        }
    }

    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change };
}