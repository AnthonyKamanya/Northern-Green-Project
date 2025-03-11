let getDataProducts;
export default getDataProducts = async (root) => {

  const table = root.querySelector(".table-refresh__table");
  const response = await fetch(root.dataset.url);
  const data = await response.json();

  /* Clear holding html in the table */
  table.querySelector("thead tr").innerHTML = "";
  table.querySelector("tbody").innerHTML = "";

  //console.log(data);

  table.querySelector("thead tr").insertAdjacentHTML("beforeend", `
    <th>Product_ID</th>
    <th>Product_name</th>
    <th>Product_origin</th>
    <th>Product_price</th>
    <th>Product_stock</th>
  `);

  /* Populate Headers */
  for (const r of data) {

    let items_sold = parseInt(r.items_sold).toLocaleString();

    table.querySelector("tbody").insertAdjacentHTML("beforeend", `
      <td>${r.Product_ID}</td>
      <td>${r.Product_name}</td>
      <td>${r.Product_origin}</td>
      <td>${r.Product_price}</td>
      <td>${r.Product_stock}</td>
    `
    );
  }
};