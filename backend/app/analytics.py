from sqlalchemy.orm import Session
from sqlalchemy import func
from .models import Sales

def get_dashboard_data(db: Session):

    total_sales = db.query(
        func.sum(Sales.total_sale)
    ).scalar()

    total_quantity = db.query(
        func.sum(Sales.quantity)
    ).scalar()

    total_products = db.query(
        func.count(Sales.product)
    ).scalar()

    # Top Products

    top_products_query = db.query(
        Sales.product,
        func.sum(Sales.total_sale)
    ).group_by(Sales.product).all()

    top_products = []

    for item in top_products_query:

        top_products.append({
            "product": item[0],
            "sales": float(item[1])
        })

    # Category Sales

    category_sales_query = db.query(
        Sales.category,
        func.sum(Sales.total_sale)
    ).group_by(Sales.category).all()

    category_sales = []

    for item in category_sales_query:

        category_sales.append({
            "category": item[0],
            "sales": float(item[1])
        })

    return {
        "total_sales": float(total_sales),
        "total_quantity": int(total_quantity),
        "total_products": int(total_products),
        "top_products": top_products,
        "category_sales": category_sales
    }