import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { listLocations, listItems, listInventories, getLocation } from './graphql/queries';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { createInventory as createInventoryMutation, updateInventory as updateInventoryMutation, deleteInventory as deleteInventoryMutation} from './graphql/mutations';

export default function ViewInventory()  {
	const initialFormState = { locationInventoryId:''};
	const [locationList, setLocationList] = useState([]);
	const [itemList, setItemList] = useState([]);
	const [invList, setInvList] = useState([]);
	const [filterData, setFilterData] = useState([]);
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
	
	async function getLocation() {
		if(!invFormData) return;
		var id = invFormData.locationInventoryId;
		const apiData = await API.graphql({ query: listInventories });
		setInvList(apiData.data.listInventories.items);
		
		console.log("id = "+ id);
		console.log("locationInventoryId= "+invList[0].locationInventoryId);
		const newInvList = invList.filter(inv => inv.locationInventoryId === id);
		setInvList(newInvList);
		
		//setInvFormData(initialFormState);
	}
	
	
	
	return (
    
      
        <div className="View Inventory">
			
			
			{
				<div>
				<h1>View Inventory</h1>
				<h2>Select a Location</h2>
				
				<select name="locSelect" id="locSelect"
				//				
					onChange={e=> setInvFormData({ ...invFormData, 'locationInventoryId': e.target.value}) }
					>
				<option value='' >Location</option>
				{
			locationList.map((loc) => (
                <option key={loc.id} value={loc.id}>{loc.name}</option>
				))
				}	
				</select>
				<button onClick={() => getLocation()}>Show Inventory</button>
				
				
				<Table size="small">
			<TableHead>
				<TableRow>
					<TableCell>Item Name</TableCell>
					<TableCell>Location</TableCell>
					<TableCell>Quantity</TableCell>
					<TableCell>Unit Price</TableCell>
					<TableCell>Total Value</TableCell>
					<TableCell>Delete Inventory Item?</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
		{
          invList.map((note) => (
            <TableRow key={note.id || note.name}>
              <TableCell>{note.item.name}</TableCell>
			  <TableCell>{note.location.name}</TableCell>
			  <TableCell>{note.quantity}</TableCell>
              <TableCell><p>{`$${note.item.unitPrice}`}</p></TableCell>
			   <TableCell><p>{`$${note.item.unitPrice * note.quantity}`}</p></TableCell>
              <TableCell>Coming soon</TableCell>
            </TableRow>
			
          ))
        }
			</TableBody>
		</Table> 
				
				
				</div>
			
			}
		</div>	
    
  );
}