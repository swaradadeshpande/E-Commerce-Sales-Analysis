import pandas as pd
from sqlalchemy.orm import Session
from models import Sales

def import_csv_to_db(db: Session):

    df = pd.read_csv('../sales_data.csv')

    for _, row in df.iterrows():

        sale = Sales(
            order_id=row['Order_ID'],
            product=row['Product'],
            category=row['Category'],
            quantity=row['Quantity'],
            price_per_unit=row['Price_per_Unit'],
            total_sale=row['Total_Sale']
        )

        db.add(sale)

    db.commit()