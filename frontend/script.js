async function loadDashboard() {

    const response = await fetch(
        'http://127.0.0.1:8000/dashboard'
    );

    const data = await response.json();

    // KPI

    document.getElementById('sales').innerText =
        `₹ ${data.total_sales}`;

    document.getElementById('quantity').innerText =
        data.total_quantity;

    document.getElementById('products').innerText =
        data.total_products;

    // Product Chart

    const productLabels =
        data.top_products.map(item => item[0]);

    const productValues =
        data.top_products.map(item => item[1]);

    new Chart(document.getElementById('productChart'), {

        type: 'bar',

        data: {
            labels: productLabels,

            datasets: [{
                label: 'Top Products',
                data: productValues,
                borderWidth: 1
            }]
        }
    });

    // Category Chart

    const categoryLabels =
        data.category_sales.map(item => item[0]);

    const categoryValues =
        data.category_sales.map(item => item[1]);

    new Chart(document.getElementById('categoryChart'), {

        type: 'pie',

        data: {
            labels: categoryLabels,

            datasets: [{
                data: categoryValues
            }]
        }
    });
}

loadDashboard();