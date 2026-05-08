from sqlalchemy import Column, Integer, String, Float
from database import Base

class Sales(Base):

    __tablename__ = "sales"

    id = Column(Integer, primary_key=True, index=True)

    order_id = Column(Integer)

    product = Column(String(255))

    category = Column(String(255))

    quantity = Column(Integer)

    price_per_unit = Column(Float)

    total_sale = Column(Float)