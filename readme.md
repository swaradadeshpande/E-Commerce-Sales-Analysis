# 📊 E-Commerce Sales Analysis Dashboard

A Full Stack Data Science Web Application for analyzing e-commerce sales data using Python, FastAPI, MySQL, HTML, CSS, JavaScript, and Chart.js.

This project helps businesses visualize:
- Total Sales
- Product Performance
- Category-wise Revenue
- Sales Trends
- KPI Metrics

It combines:
- Data Analysis
- Backend API Development
- Database Integration
- Interactive Frontend Dashboard

---

# 🚀 Features

## 📈 Dashboard Analytics
- Total Sales KPI
- Total Quantity Sold
- Total Products Sold
- Top Selling Products
- Category-wise Sales Analysis

## 📊 Interactive Visualizations
- Bar Charts
- Pie Charts
- Real-time Dashboard Updates

## 🗄️ Database Integration
- MySQL Database
- SQLAlchemy ORM
- CSV Data Import

## ⚡ Backend API
- FastAPI REST API
- JSON-based responses
- High-speed backend

## 🎨 Frontend
- HTML
- CSS
- JavaScript
- Chart.js

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Python | Backend + Data Processing |
| FastAPI | REST API |
| MySQL | Database |
| SQLAlchemy | ORM |
| Pandas | Data Analysis |
| HTML | Frontend Structure |
| CSS | Styling |
| JavaScript | Frontend Logic |
| Chart.js | Data Visualization |

---

# 📂 Project Structure

```bash
E-Commerce-Sales-Analysis/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── crud.py
│   │   ├── analytics.py
│   │   └── __init__.py
│   │
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── ecommerce_sales.csv
│
└── README.md
```

---

# ⚙️ Installation and Setup

# 1️⃣ Clone Repository

```bash
git clone <your-github-repository-link>
```

---

# 2️⃣ Navigate to Project Folder

```bash
cd E-Commerce-Sales-Analysis
```

---

# 3️⃣ Backend Setup

Move to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

# 4️⃣ MySQL Database Setup

Open MySQL and create database:

```sql
CREATE DATABASE ecommerce_dashboard;
```
execute this 
```sql
USE ecommerce_dashboard;

CREATE TABLE sales (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product VARCHAR(255),
    category VARCHAR(255),
    quantity INT,
    price_per_unit FLOAT,
    total_sale FLOAT
);
```
---

# 5️⃣ Configure Database Connection

Open:

```bash
backend/app/database.py
```

Update MySQL credentials:

```python
DATABASE_URL = "mysql+pymysql://root:YOUR_PASSWORD@localhost/ecommerce_dashboard"
```

---

# 6️⃣ Run FastAPI Server

Inside backend folder:

```bash
uvicorn app.main:app --reload
```

Server will start at:

```bash
http://127.0.0.1:8000
```

---

# 7️⃣ Open Frontend

Open:

```bash
frontend/index.html
```

in browser.

---

# 📊 API Endpoint

## Dashboard Data

```http
GET /dashboard
```

### Sample Response

```json
{
  "total_sales": 450000,
  "total_quantity": 1200,
  "total_products": 85,
  "top_products": [
    {
      "product": "Laptop",
      "sales": 150000
    }
  ],
  "category_sales": [
    {
      "category": "Electronics",
      "sales": 250000
    }
  ]
}
```

---

<img width="673" height="336" alt="image" src="https://github.com/user-attachments/assets/b7a8f53a-407f-4819-b9db-0f01a56e0475" />

<img width="673" height="673" alt="image" src="https://github.com/user-attachments/assets/1b5bbc3d-4484-4930-9016-8fba9018fa46" />


# 📈 Visualizations Included

- Product Sales Bar Chart
- Category Sales Pie Chart
- KPI Cards
- Revenue Insights

---

# 🧠 Data Science Concepts Used

- Data Cleaning
- Data Aggregation
- KPI Analysis
- Business Intelligence
- Data Visualization
- Exploratory Data Analysis (EDA)

---


# 📚 Learning Outcomes

Through this project, I learned:
- Full Stack Development
- FastAPI Backend Development
- MySQL Integration
- REST API Creation
- Data Visualization
- Dashboard Design
- Data Analytics Workflow

---

# 👩‍💻 Author

Swarada Deshpande

---


# ⭐ If You Like This Project

Give this repository a ⭐ on GitHub.
