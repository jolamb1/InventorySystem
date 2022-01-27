
import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { listLocations } from './graphql/queries';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { createLocation as createLocationMutation, updateLocation as updateLocationMutation, deleteLocation as deleteLocationMutation} from './graphql/mutations';

const initialFormState = { name: '' }

export default function AddLocation() {
	
	const [locationList, setLocationList] = useState([]);
	const [formData, setFormData] = useState(initialFormState);
	
	useEffect(() => {
    getLocations();
	}, []);
	
	async function getLocations() {
		const apiData = await API.graphql({ query: listLocations });
		setLocationList(apiData.data.listLocations.items);
	}

	
	async function createNewLocation() {
		if (!formData.name) return;
		await API.graphql({ query: createLocationMutation, variables: { input: formData } });
		setLocationList([ ...locationList, formData ]);
		setFormData(initialFormState);
	}
	
	async function deleteLocation({ id }) {
    const newLocArray = locationList.filter(loc => loc.id !== id);
    setLocationList(newLocArray);
    await API.graphql({ query: deleteLocationMutation, variables: { input: { id } }});
  }
	
	
	
	return (
    
      
        <div className="AddLocations">
			<h1>Add a new Location</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Location name"
        value={formData.name}
      />
      <button type="button" onClick={createNewLocation} >Create Location</button>
      <div style={{marginBottom: 30}}>
      <h2>List of Locations</h2>
		<Table size="small">
			<TableHead>
				<TableRow>
					<TableCell>Location Name</TableCell>
					<TableCell>Delete Item?</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
		{
          locationList.map((loc) => (
            <TableRow key={loc.id || loc.name}>
              <TableCell>{loc.name}</TableCell>
              <TableCell><button onClick={() => deleteLocation(loc)}>Delete Item</button></TableCell>
            </TableRow>
			
          ))
        }
			</TableBody>
		</Table> 
          
        </div>
	</div>
      
   
  );
}