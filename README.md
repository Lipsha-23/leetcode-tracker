# 💡 LeetCode Tracker & DSA Progress Analyzer

This is a full-stack project that helps users track their LeetCode submission history and visualize DSA progress with an intuitive dashboard. 
It uses web scraping to fetch data, stores it in MongoDB, and displays it using React and Chart.js.

## ⚙️ Tech Stack

- **Frontend**: React.js, Chart.js, Axios
- **Backend**: Node.js, Express.js, Cheerio
- **Database**: MongoDB (local)
- **Others**: CSS for styling, REST API for data flow

---

## 🔧 How It Works

### 📦 Backend

- Built using **Node.js + Express**
- Scrapes submission data from LeetCode using **Cheerio**
- Stores scraped data in **MongoDB**
- REST API endpoints:
  - `POST /api/register`: Register username and trigger scraping
  - `GET /api/submissions/:username`: Fetch submission history

### 💻 Frontend

- Built using **React**
- Users enter their LeetCode username to start
- Sends username to backend via `axios`
- Fetches submission data and renders:
  - 📊 **Chart** using `react-chartjs-2`
  - 📋 **Table** with recent problems

### 📈 Dashboard Overview

- Interactive **bar chart** showing daily submission counts
- Clean **table** displaying:
  - Problem title
  - Submission status (Accepted/Rejected)
  - Date of submission
- Logout button to reset the user session
- Responsive layout and loading states

---
