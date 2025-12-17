import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load CSV
df = pd.read_csv("../data/pict.csv")

# Convert Time to Hour
df["Hour"] = pd.to_datetime(df["Time"], format="%I:%M %p").dt.hour

# Create Fraud Label
df["Fraud"] = 0
df.loc[
    (df["Amount(₹)"] > 4000) &
    ((df["Hour"] >= 0) & (df["Hour"] <= 5)),
    "Fraud"
] = 1

# Show fraud count
print("Fraud Count:")
print(df["Fraud"].value_counts())

# Box Plot (BEST fraud visualization)
sns.boxplot(x="Fraud", y="Amount(₹)", data=df)
plt.title("Transaction Amount Distribution by Fraud")
plt.xlabel("Fraud (0 = Normal, 1 = Fraud)")
plt.ylabel("Amount (₹)")
#plt.show()
plt.tight_layout()
plt.savefig("../../frontend/public/static/fraud_plot.png")
plt.close()