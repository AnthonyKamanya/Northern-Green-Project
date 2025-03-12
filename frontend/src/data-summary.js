let getDataSummary;
export default getDataSummary = async (root) => {

  const response = await fetch(root.dataset.url);
  const data = await response.json();
 
  /* Clear holding html in the table */
  document.getElementById("total_transactions").innerHTML = "";
  document.getElementById("products_sold").innerHTML = "";
  document.getElementById("revenue").innerHTML = "";
  document.getElementById("product_cost").innerHTML = "";
  document.getElementById("gross_profit").innerHTML = "";
  document.getElementById("net_profit").innerHTML = "";

  /* Populate Data */
  for (const r of data) {

    document.getElementById("total_transactions").insertAdjacentHTML("beforeend", `
      ${parseInt(r.total_transactions).toLocaleString()}
    `);

    document.getElementById("products_sold").insertAdjacentHTML("beforeend", `
      ${parseInt(r.products_sold).toLocaleString()}
    `);

    document.getElementById("revenue").insertAdjacentHTML("beforeend", `
      ${r.revenue}
    `);

    document.getElementById("product_cost").insertAdjacentHTML("beforeend", `
      ${r.product_cost}
    `);

    document.getElementById("gross_profit").insertAdjacentHTML("beforeend", `
      ${r.gross_profit}
    `);

    document.getElementById("net_profit").insertAdjacentHTML("beforeend", `
      ${(r.net_profit)}
    `);

  }
};