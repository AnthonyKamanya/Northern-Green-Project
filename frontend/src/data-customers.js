let getDataCustomers;
export default getDataCustomers = async (root) => {

  const table = root.querySelector(".table-refresh__table");
  const response = await fetch(root.dataset.url);
  const data = await response.json();

  /* Clear holding html in the table */
  table.querySelector("thead tr").innerHTML = "";
  table.querySelector("tbody").innerHTML = "";

  console.log(data);

  table.querySelector("thead tr").insertAdjacentHTML("beforeend", `
    <th>Customer_ID</th>
    <th>First_name</th>
    <th>Last_name</th>
    <th>Email</th>
    <th>order_count</th>
  `);

  /* Populate Headers */
  for (const r of data) {

    let d = new Date(Date.parse(r.most_recent)).toLocaleString("en-GB");

    table.querySelector("tbody").insertAdjacentHTML("beforeend", `
      <td>${r.Customer_ID}</td>
      <td>${r.First_name}</td>
      <td>${r.Last_name}</td>
      <td>${r.Email}</td>
      <td>${r.order_count}</td>
    `
    );
  }
};