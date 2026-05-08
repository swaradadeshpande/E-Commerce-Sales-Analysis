async function loadDashboard() {

    try {

        const response = await fetch(
            'http://127.0.0.1:8000/dashboard'
        );

        const data = await response.json();

        // KPI Data

        document.getElementById('sales').innerText =
            `₹ ${data.total_sales.toLocaleString()}`;

        document.getElementById('quantity').innerText =
            data.total_quantity.toLocaleString();

        document.getElementById('products').innerText =
            data.total_products.toLocaleString();

        // -------------------------
        // Product Chart
        // -------------------------

        const productLabels =
            data.top_products.map(item => item.product);

        const productValues =
            data.top_products.map(item => item.sales);

        new Chart(document.getElementById('productChart'), {

            type: 'bar',

            data: {

                labels: productLabels,

                datasets: [{

                    label: 'Sales',

                    data: productValues,

                    borderRadius: 10,

                    backgroundColor: [
                        '#3b82f6',
                        '#60a5fa',
                        '#2563eb',
                        '#93c5fd',
                        '#1d4ed8'
                    ]
                }]
            },

            options: {

                responsive: true,

                plugins: {

                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                },

                scales: {

                    x: {
                        ticks: {
                            color: 'white'
                        }
                    },

                    y: {
                        ticks: {
                            color: 'white'
                        }
                    }
                }
            }
        });

        // -------------------------
        // Category Chart
        // -------------------------

        const categoryLabels =
            data.category_sales.map(item => item.category);

        const categoryValues =
            data.category_sales.map(item => item.sales);

        new Chart(document.getElementById('categoryChart'), {

            type: 'doughnut',

            data: {

                labels: categoryLabels,

                datasets: [{

                    data: categoryValues,

                    backgroundColor: [
                        '#3b82f6',
                        '#8b5cf6',
                        '#10b981',
                        '#f59e0b',
                        '#ef4444'
                    ]
                }]
            },

            options: {

                responsive: true,

                plugins: {

                    legend: {

                        labels: {
                            color: 'white'
                        }
                    }
                }
            }
        });

    } catch(error) {

        console.error('ERROR:', error);
    }
}

loadDashboard();

// Live Clock

function updateClock() {

    const now = new Date();

    document.getElementById('clock').innerText =
        now.toLocaleString();
}

setInterval(updateClock, 1000);

updateClock();