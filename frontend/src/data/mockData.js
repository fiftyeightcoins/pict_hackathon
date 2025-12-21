export const currentUser = {
  name: "Aditi Rao",
  role: "Bank Analyst",
  branch: "Mumbai Main Branch, MH",
  lastLogin: "21 Dec 2025, 10:42 AM IST"
};

export const transactions = [
  { id: "TXN-UPI-9821", user: "Rajesh Kumar", amount: 45000, location: "Pune, MH", device: "OnePlus 9 Pro", risk: 88, status: "Escalated", type: "UPI" },
  { id: "TXN-CC-4421", user: "Priya Sharma", amount: 1200, location: "Bangalore, KA", device: "iPhone 13", risk: 12, status: "Approved", type: "Credit Card" },
  { id: "TXN-NB-1122", user: "Amit Verma", amount: 150000, location: "Lagos, Nigeria", device: "Unknown Desktop", risk: 95, status: "Blocked", type: "Net Banking" },
  { id: "TXN-UPI-3321", user: "Sneha Gupta", amount: 5000, location: "Delhi, DL", device: "Samsung S21", risk: 45, status: "Verification Pending", type: "UPI" },
  { id: "TXN-DC-7782", user: "Vikram Singh", amount: 2500, location: "Jaipur, RJ", device: "Xiaomi Note 10", risk: 8, status: "Approved", type: "Debit Card" },
];

export const alerts = [
  { id: 1, message: "High-value transfer (> ₹1L) detected from inactive account.", time: "2 mins ago", severity: "High" },
  { id: 2, message: "Multiple failed login attempts for User ID: #8821 (Rohan M.)", time: "15 mins ago", severity: "Medium" },
  { id: 3, message: "New device login detected in unusual location (Russia).", time: "1 hour ago", severity: "Critical" },
];