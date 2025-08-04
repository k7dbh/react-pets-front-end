// page 1
import * as petService from './services/petService';
import { useEffect, useState } from 'react';
import PetList from "./components/PetList/PetList";
import PetDetail from "./components/PetDetail/PetDetail"

const App = () => { //pets variable setPets method
  const [pets, setPets] = useState([])
  const [selected, setSelected] = useState(null)
  
useEffect(() => {
  const fetchPets = async() => {
    try{
      const fetchedPets = await petService.index()
      setPets(fetchedPets)
    }catch(err){
      console.log(err)
    }
  }
  fetchPets();
}, [])

const handleSelect = (pet) => {
  setSelected(pet)
}

  return(
    <>
    <PetList pets={pets} handleSelect={handleSelect}/>
    <PetDetail selcted={selected}/>
    </> 
  )
}

export default App;