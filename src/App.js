import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { listLocations, listItems } from './graphql/queries';
import { createLocation as createLocationMutation, updateLocation as updateLocationMutation, deleteLocation as deleteLocationMutation } from './graphql/mutations';
import { createItem as createItemMutation, updateItem as updateItemMutation, deleteItem as deleteItemMutation } from './graphql/mutations';

const initialFormState = { name: '', unitprice: '' }

function App() {
	
	const [items, setItems] = useState([]);
	const [formData, setFormData] = useState(initialFormState);
	 useEffect(() => {
    getItems();
  }, []);
	
	async function getItems() {
		const apiData = await API.graphql({ query: listItems});
		setItems(apiData.data.listItems.items);
	}
	
	async function createItem() {
		if (!formData.name || !formData.unitPrice) return;
		await API.graphql({ query: createItemMutation, variables: { input: formData } });
    setItems([ ...items, formData ]);
    setFormData(initialFormState);
	}
	
	async function deleteItem({ id }) {
    const newItemsArray = items.filter(item => item.id !== id);
    setItems(newItemsArray);
    await API.graphql({ query: deleteItemMutation, variables: { input: { id } }});
  }
	
	return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
			<h1>Add a new Item</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Item name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'unitprice': e.target.value})}
        placeholder="Item unit price"
        value={formData.unitprice}
      />
      <button onClick={createItem()}>Create Item</button>
      <div style={{marginBottom: 30}}>
		<h1>List of Items</h1>
        {
          items.map(item => (
            <div key={item.id || item.name}>
              <h2>{item.name}</h2>
              <p>{item.unitprice}</p>
              <button onClick={() => deleteItem(item)}>Delete Item</button>
            </div>
          ))
        }
          <p>
            Hey {user.username}, welcome to my app, with auth!
          </p>
          <button onClick={signOut}>Sign out</button>
        </div>
	</div>
      )}
    </Authenticator>
  );
}

export default App;