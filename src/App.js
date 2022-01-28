import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { listLocations, getLocation, listItems, } from './graphql/queries';
import AddLocation from './AddLocation';
import AddItems from './AddItems';
import AddInventory from './AddInventory';
import ViewInventory from './ViewInventory';
import { Authenticator } from '@aws-amplify/ui-react';
import { createLocation as createLocationMutation, updateLocation as updateLocationMutation, deleteLocation as deleteLocationMutation} from './graphql/mutations';
import { createInventory as createInventoryMutation, updateInventory as updateInventoryMutation, deleteInventory as deleteInventoryMutation} from './graphql/mutations';


function App() {
	/*const initialFormState = { inventoryItemId:'' , locationInventoryId:'', quantity:'' }
	const [locationList, setLocationList] = useState([]);
	const [itemList, setItemList] = useState([]);
	const [invFormData, setInvFormData] = useState(initialFormState);
	//const [inventoryList, setInventoryList] = useState([]);
	
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
	}*/
	
	
	
	return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
			<ViewInventory />
			<AddInventory />
			<AddItems />
			<AddLocation />
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;