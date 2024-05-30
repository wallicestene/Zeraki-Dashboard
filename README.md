# React + Vite

# Sales Agent Dashboard

## Overview

The Sales Agent Dashboard is a responsive web application designed to facilitate the management of school accounts, invoicing, and collections. It provides data visualization for targets and sign-ups, and it is aimed at streamlining operations for sales agents, enabling them to manage relationships with schools efficiently.

## Features

### 1. Side Navigation
- **Dashboard Module**: Displays dynamic counters for Collections, Sign-ups, Total Revenue, and Bounced Cheques.
- **Schools Module**: Lists schools with options to view detailed information including invoices and collections.

### 2. Dashboard Overview
- **Top Card Metrics**: Provides an overview of key performance indicators.
  - Collections: Total number of collections made.
  - Sign-ups: Total number of new school sign-ups.
  - Total Revenue: Overall revenue collected.
  - Bounced Cheques: Number of cheques that have bounced.

- **Targets Visualization**: Pie charts representing the progress towards signup targets for Zeraki's products.
- **Signups Overview**: Bar graphs representing the distribution of sign-ups across different types of schools for each product.
- **Upcoming Invoices**: Lists upcoming invoices ordered by due date.

### 3. School Management
- **Schools**: Interface to manage and view detailed information on each school.
- **Invoices**: Comprehensive management of invoices per school with enhanced filtering and CRUD capabilities.
- **Collections**: Manage collections per school with capabilities to update invoice statuses based on collection outcomes.

## Installation

### Prerequisites
- Node.js and npm should be installed on your machine.

### Clone the Repository
```bash
git clone https://github.com/yourusername/sales-agent-dashboard.git
cd sales-agent-dashboard
```

### Install Dependencies
```bash
npm install
```

### Running the Application
1. Start the JSON server for the mock backend:
   ```bash
   json-server --watch db.json --port 3030
   ```

2. Start the React application:
   ```bash
   npm run dev
   ```

## Data

### Mock Data Structure
- **Schools**:
  ```json
  {
    "id": "1",
    "name": "Greenfield Primary School",
    "type": "Primary",
    "products": ["Zeraki Analytics", "Zeraki Finance"],
    "county": "Nairobi",
    "registrationDate": "2022-01-15",
    "contact": "contact@greenfieldprimary.co.ke"
  }
  ```

- **Invoices**:
  ```json
  {
    "id": 1,
    "schoolId": 1,
    "item": "Zeraki Analytics",
    "amount": 1000,
    "dueDate": "2023-06-30",
    "paidAmount": 0,
    "balance": 1000,
    "status": "pending"
  }
  ```

- **Collections**:
  ```json
  {
    "id": 1,
    "invoiceId": 1,
    "collectionNumber": "COL001",
    "date": "2023-01-20",
    "status": "Valid",
    "amount": 5000
  }
  ```

- **Metrics**:
  ```json
  {
    "collections": 2,
    "signups": 3,
    "revenue": 12000,
    "bouncedCheques": 0
  }
  ```

- **Pie Chart Data**:
  ```json
  {
    "labels": ["Zeraki Analytics", "Zeraki Finance", "Zeraki Timetable"],
    "datasets": [
      {
        "label": "Targets",
        "data": [100, 80, 60],
        "backgroundColor": ["#11563a", "#b8fadd", "#1acd81"]
      },
      {
        "label": "Achieved",
        "data": [50, 60, 40],
        "backgroundColor": ["#11563aAA", "#b8faddAA", "#1acd81AA"]
      }
    ]
  }
  ```

- **Bar Chart Data**:
  ```json
  {
    "labels": ["Primary", "Secondary", "IGCSE"],
    "datasets": [
      {
        "label": "Zeraki Analytics",
        "data": [30, 20, 10],
        "backgroundColor": "#11563a"
      },
      {
        "label": "Zeraki Finance",
        "data": [25, 15, 5],
        "backgroundColor": "#b8fadd"
      },
      {
        "label": "Zeraki Timetable",
        "data": [20, 10, 10],
        "backgroundColor": "#1acd81"
      }
    ]
  }
  ```

## Deployment

For deploying the application, you can use platforms like Netlify or Vercel. Ensure all necessary environment configurations are properly set up.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
