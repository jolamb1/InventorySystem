import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { listLocations, listItems } from './graphql/queries';
import { createLocation as createLocationMutation, updateLocation as updateLocationMutation, deleteLocation as deleteLocationMutation} from './graphql/mutations';
import { createInventory as createInventoryMutation, updateInventory as updateInventoryMutation, deleteInventory as deleteInventoryMutation} from './graphql/mutations';

export default function AddInventory()  {
	const initialFormState = { inventoryItemId:'' , locationInventoryId:'', quantity:'' };
	const [locationList, setLocationList] = useState([]);
	const [itemList, setItemList] = useState([]);
	const [invFormData, setInvFormData] = useState(initialFormState);
	
	
	useEffect(() => {
    fetchLocations();
	getItems();
	}, []);
	
	async function getItems() {
		const apiData = await API.graphql({ query: listItems });
		setItemList(apiData.data.listItems.items);
	}
	
	async function fetchLocations() {
		const apiData = await API.graphql({ query: listLocations });
		setLocationList(apiData.data.listLocations.items);
	}
	
	async function createNewInventory() {
		if (!invFormData.inventoryItemId || !invFormData.quantity) return;
		console.log(invFormData); 
		await API.graphql({ query: createInventoryMutation, variables: { input: invFormData } });
		//setItemList([ ...itemList, invFormData ]);
		setInvFormData(initialFormState);
	}
	
	
	
	return (
    
      
        <div className="AddInventory">
			
			
			{
				<div>
				<h2>Add Inventory</h2>
				
				<select name="locSelect" id="locSelect" value=""
					onChange={e => setInvFormData({ ...invFormData, 'locationInventoryId': e.target.value})}
					>
				<option value='' >Location</option>
				{
			locationList.map((loc) => (
                <option key={loc.id} value={loc.id}>{loc.name}</option>
				))
				}	
				</select>
				
				<select name="itemSelect" id="itemSelect" value=""
					onChange={e => setInvFormData({ ...invFormData, 'inventoryItemId': e.target.value})}>
					<option value='' >Item</option>
					{
						itemList.map((item) => (
							<option key={item.id} value={item.id}>{item.name}</option>
							))
							}
					</select>
					<input
						onChange={e => setInvFormData({ ...invFormData, 'quantity': e.target.value})}
						placeholder="Quantity"
						value={invFormData.quantity}
						/>
					<button onClick={() => createNewInventory()}>Add Inventory</button>
				</div>
			
			}
		</div>	
    
  );
}

