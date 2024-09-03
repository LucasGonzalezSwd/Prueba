import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');

  const handleCreate = () => {
    if (newItem.trim() !== '') {
      const newItemData = { id: Date.now(), title: newItem };
      setItems([...items, newItemData]);
      setNewItem('');
    }
  };

  const handleEdit = (id, title) => {
    setEditingId(id);
    setEditingTitle(title);
  };

  const handleUpdate = () => {
    setItems(items.map(item => 
      item.id === editingId ? { ...item, title: editingTitle } : item
    ));
    setEditingId(null);
    setEditingTitle('');
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2>Item List pseudo CRUD</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={handleCreate}>Add Item</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editingId === item.id ? (
              <>
                <input
                  type="text"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {item.title}
                <button onClick={() => handleEdit(item.id, item.title)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
