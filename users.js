const express = require('express');
const router = express.Router();

// Data dummy (simpan di memori)
let users = [
  { id: 1, name: 'Andi' },
  { id: 2, name: 'Budi' }
];

// GET semua user
router.get('/', (req, res) => {
  res.json(users);
});

// GET user by id
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });
  res.json(user);
});

// POST user baru
router.post('/', (req, res) => {
  const { name } = req.body;
  const newUser = {
    id: users.length + 1,
    name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT (update user)
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });

  user.name = req.body.name;
  res.json(user);
});

// DELETE user
router.delete('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'User tidak ditemukan' });

  const deletedUser = users.splice(index, 1);
  res.json(deletedUser[0]);
});

module.exports = router;