const transactionHistory = document.getElementById("transaction-history");
// const withdrawHeading = document.querySelector("withdraw-heading");
// const depositHeading = document.querySelector("deposit-heading");

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //console.log("clicked");
    //update deposit
    const depositInput = document.getElementById("deposit-input");
    const inputDepositStr = depositInput.value;
    const inputDepositAmount = parseFloat(inputDepositStr);
    if (!inputDepositAmount || inputDepositAmount < 0) {
      alert("Not a valid digit or negative number");
      depositInput.value = "";
      return;
    }

    let div = document.createElement("div");
    div.classList.add("deposit-list");
    transactionHistory.appendChild(div);

    let depoHead = document.createElement("h4");
    depoHead.classList.add("deposit-heading");
    depoHead.innerHTML = "Deposit  Money ";
    div.appendChild(depoHead);

    let depoPara = document.createElement("p");
    depoPara.classList.add("depo-para");
    depoPara.innerHTML = "$" + inputDepositStr;
    div.appendChild(depoPara);

    // let time=document.createElement("p");
    // const t = new Date();
    // const hour = t.getHours();
    // const minute = t.getMinutes();
    // const second = t.getSeconds();
    // const formattedTime = `${hour}:${minute}:${second}`;
    // time.innerHTML = formattedTime;
    // div.appendChild(time);

    let date = document.createElement("p");
    const t = new Date();
    const day = t.getDate();
    const month = t.getMonth() + 1;
    const year = t.getFullYear();
    const formattedDate = day + "/" + month + "/" + year;
    date.innerHTML = formattedDate;
    div.appendChild(date);

    const depositTotal = document.getElementById("deposit-total");
    const totalDepositStr = depositTotal.innerText;
    const DepositAmount = parseFloat(totalDepositStr);

    const finalDepositTotal = DepositAmount + inputDepositAmount;

    depositTotal.innerText = finalDepositTotal;

    depositInput.value = "";

    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalStr = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalStr);

    const finalBalanceTotal = previousBalanceTotal + finalDepositTotal;
    balanceTotal.innerText = finalBalanceTotal;
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalStr = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalStr);

    // Update withdraw
    const withdrawInput = document.getElementById("withdraw-input");
    const inputWithdrawStr = withdrawInput.value;
    const inputWithdrawAmount = parseFloat(inputWithdrawStr);

    // Validate input amount
    if (!inputWithdrawAmount || inputWithdrawAmount <= 0) {
      alert("Not a valid amount");
      withdrawInput.value = "";
      return;
    }
    if (previousBalanceTotal < inputWithdrawAmount) {
      alert("Insufficient balance");
      withdrawInput.value = "";
    } else {
      let div = document.createElement("div");
      div.classList.add("withdraw-list");
      transactionHistory.appendChild(div);

      let withHead = document.createElement("h4");
      withHead.classList.add("withdraw-heading");
      withHead.innerHTML = "Withdraw Money";
      div.appendChild(withHead);

      let withPara = document.createElement("p");
      withPara.classList.add("withdraw-para");
      withPara.innerHTML = "$" + inputWithdrawStr;
      div.appendChild(withPara);

      // let time=document.createElement("p");
      // const t = new Date();
      // const hour = t.getHours();
      // const minute = t.getMinutes();
      // const second = t.getSeconds();
      // const formattedTime = `${hour}:${minute}:${second}`;
      // time.innerHTML = formattedTime;
      // div.appendChild(time);

      let date = document.createElement("p");
      const t = new Date();
      const day = t.getDate();
      const month = t.getMonth() + 1;
      const year = t.getFullYear();
      const formattedDate = day + "/" + month + "/" + year;
      date.innerHTML = formattedDate;
      div.appendChild(date);

      const withdrawTotal = document.getElementById("withdraw-total");
      const totalWithdrawStr = withdrawTotal.innerText;
      const withdrawAmount = parseFloat(totalWithdrawStr);

      const finalWithdrawTotal = withdrawAmount + inputWithdrawAmount;

      // Update withdraw total
      withdrawTotal.innerText = finalWithdrawTotal;

      withdrawInput.value = "";

      const finalBalanceTotal = previousBalanceTotal - inputWithdrawAmount;
      balanceTotal.innerText = finalBalanceTotal;
    }
  });
