from sqlalchemy.orm import Session
from models import Sales
from sqlalchemy import func

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

    top_products = db.query(
        Sales.product,
        func.sum(Sales.total_sale)
    ).group_by(Sales.product).all()

    # Category Sales

    category_sales = db.query(
        Sales.category,
        func.sum(Sales.total_sale)
    ).group_by(Sales.category).all()

    return {
        "total_sales": total_sales,
        "total_quantity": total_quantity,
        "total_products": total_products,
        "top_products": top_products,
        "category_sales": category_sales
    }