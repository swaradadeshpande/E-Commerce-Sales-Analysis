async function loadDashboard() {

    try {

        const response = await fetch(
            'http://127.0.0.1:8000/dashboard'
        );

        const data = await response.json();

        console.log(data);

        // KPI Cards

        document.getElementById('sales').innerText =
            `₹ ${data.total_sales}`;

        document.getElementById('quantity').innerText =
            data.total_quantity;

        document.getElementById('products').innerText =
            data.total_products;

        // -----------------------------
        // Product Chart
        // -----------------------------

        const productLabels =
            data.top_products.map(item => item.product);

        const productValues =
            data.top_products.map(item => item.sales);

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

        // -----------------------------
        // Category Chart
        // -----------------------------

        const categoryLabels =
            data.category_sales.map(item => item.category);

        const categoryValues =
            data.category_sales.map(item => item.sales);

        new Chart(document.getElementById('categoryChart'), {

            type: 'pie',

            data: {

                labels: categoryLabels,

                datasets: [{
                    data: categoryValues
                }]
            }
        });

    } catch(error) {

        console.error('ERROR:', error);
    }
}

loadDashboard();