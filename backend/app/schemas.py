from pydantic import BaseModel

class SalesSchema(BaseModel):

    order_id: int
    product: str
    category: str
    quantity: int
    price_per_unit: float
    total_sale: float

    class Config:
        orm_mode = True