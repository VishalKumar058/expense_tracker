# Transaction Manager Backend

A simple Node.js and Express backend for managing financial transactions, with all data stored in memory. Supports adding, fetching, updating, and deleting transactions via RESTful API endpoints.

---

## Features

- **Add a transaction**  
  Create a new transaction with amount, type (credit/debit), category, and description.

- **Fetch all transactions**  
  Retrieve the current list of all transactions.

- **Update a transaction**  
  Modify the details of an existing transaction by its ID.

- **Delete a transaction**  
  Remove a transaction by its ID.

- **In-memory storage**  
  All data is stored in server memory (no database required). Data resets on server restart.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**
