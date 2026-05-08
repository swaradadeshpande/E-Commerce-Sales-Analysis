import pandas as pd
import os

from sqlalchemy.orm import Session
from .models import Sales


def import_csv_to_db(db: Session):

    BASE_DIR = os.path.dirname(
        os.path.dirname(
            os.path.dirname(__file__)
        )
    )

    csv_path = os.path.join(
        BASE_DIR,
        "ecommerce_sales.csv"
    )

    print("CSV PATH:", csv_path)

    df = pd.read_csv(csv_path)

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

    print("DATA IMPORTED SUCCESSFULLY")