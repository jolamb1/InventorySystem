
import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { listItems } from './graphql/queries';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { createItem as createItemMutation, deleteItem as deleteItemMutation} from './graphql/mutations';

const initialFormState = { name: '', unitPrice: '' }

export default function AddItems() {
	
	const [itemList, setItemList] = useState([]);
	const [formData, setFormData] = useState(initialFormState);
	
	useEffect(() => {
    getItems();
	}, []);
	
	async function getItems() {
		const apiData = await API.graphql({ query: listItems });
		setItemList(apiData.data.listItems.items);
	}

	
	async function createNewItem() {
		if (!formData.name || !formData.unitPrice) return;
		await API.graphql({ query: createItemMutation, variables: { input: formData } });
		setItemList([ ...itemList, formData ]);
		setFormData(initialFormState);
	}
	
	async function deleteItem({ id }) {
    const newItemsArray = itemList.filter(item => item.id !== id);
    setItemList(newItemsArray);
    await API.graphql({ query: deleteItemMutation, variables: { input: { id } }});
  }
	
	
	
	return (
    
      
        <div className="AddItems">
			<h1>Add a new Item</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Item name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'unitPrice': e.target.value})}
        placeholder="Item unit price"
        value={formData.unitPrice}
      />
      <button type="button" onClick={createNewItem} >Create Item</button>
      <div style={{marginBottom: 30}}>
      <h2>List of Items</h2>
		<Table size="small">
			<TableHead>
				<TableRow>
					<TableCell>Item Name</TableCell>
					<TableCell>Unit Price</TableCell>
					<TableCell>Delete Item?</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
		{
          itemList.map((note) => (
            <TableRow key={note.id || note.name}>
              <TableCell>{note.name}</TableCell>
              <TableCell><p>{`$${note.unitPrice}`}</p></TableCell>
              <TableCell><button onClick={() => deleteItem(note)}>Delete Item</button></TableCell>
            </TableRow>
			
          ))
        }
			</TableBody>
		</Table> 
          
        </div>
	</div>
      
   
  );
}