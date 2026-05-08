from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine, SessionLocal
from models import Base
from analytics import get_dashboard_data
from crud import import_csv_to_db

app = FastAPI()

# Enable CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

# Import CSV once

db = SessionLocal()

# Uncomment first time only
# import_csv_to_db(db)

@app.get('/dashboard')

def dashboard():

    return get_dashboard_data(db)