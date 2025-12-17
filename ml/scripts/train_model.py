import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import joblib

# Load data
df = pd.read_csv("../data/pict.csv")

# Feature engineering
df["Hour"] = pd.to_datetime(df["Time"], format="%I:%M %p").dt.hour
df["Fraud"] = ((df["Amount(₹)"] > 4000) & (df["Hour"] <= 5)).astype(int)

# Features & target
X = df[["Amount(₹)", "Hour"]]
y = df["Fraud"]

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = LogisticRegression()
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print("Model Accuracy:", accuracy_score(y_test, y_pred))

# Save model
joblib.dump(model, "../model/fraud_model.pkl")
print("Model saved as fraud_model.pkl")