// ----------------------
// YOUR FIREBASE CONFIG
// ----------------------
const firebaseConfig = {
  apiKey: "AIza....",
  authDomain: "smart-investment.firebaseapp.com",
  databaseURL: "https://smart-investment-default-rtdb.firebaseio.com",
  projectId: "smart-investment",
  storageBucket: "smart-investment.appspot.com",
  messagingSenderId: "739329999",
  appId: "1:739329999:web:9abacbcd12345"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database();

// Save Data
function saveData() {
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    let risk = document.getElementById("risk").value;

    db.ref("investors").push({
        name: name,
        amount: amount,
        risk: risk
    });

    alert("Data Saved Successfully!");
}

// Load Data
db.ref("investors").on("value", function(snapshot) {
    let table = document.getElementById("dataTable");
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Risk</th>
        </tr>
    `;

    snapshot.forEach(function(child) {
        let data = child.val();
        let row = `
            <tr>
                <td>${data.name}</td>
                <td>${data.amount}</td>
                <td>${data.risk}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
});
