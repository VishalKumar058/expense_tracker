const express = require('express');
const app = express();
app.use(express.json());

let transactions = [];
let idCounter = 1;
app.post('/transactions', (req, res) => {
    const { amount, type, category, description } = req.body;
    if (!amount || !type || !category || !description) {
        return res.status(400).json({ error: 'Missing fields' });
    }
    const transaction = { id: idCounter++, amount, type, category, description };
    transactions.push(transaction);
    res.status(201).json(transaction);
});

app.get('/transactions', (req, res) => {
    res.json(transactions);
});

app.put('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { amount, type, category, description } = req.body;
    const transaction = transactions.find(t => t.id === id);
    if (!transaction) {
        return res.status(404).json({ error: 'Transaction not found' });
    }
    if (amount !== undefined) transaction.amount = amount;
    if (type !== undefined) transaction.type = type;
    if (category !== undefined) transaction.category = category;
    if (description !== undefined) transaction.description = description;
    res.json(transaction);
});

app.delete('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = transactions.findIndex(t => t.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Transaction not found' });
    }
    transactions.splice(index, 1);
    res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
