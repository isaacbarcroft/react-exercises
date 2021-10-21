import { useState, useEffect } from "react";


function ContactForm() {
    const [contacts, setContact] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [counter, setCounter] = useState(0)


useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
 }, [contacts]);

    function handleSubmit(event){
        event.preventDefault();
        const newContact = {
            id: counter,
            firstName,
            lastName,
            address,
            number,
        }
        setContact([...contacts, newContact]);
        setCounter(counter + 1); 
        setFirstName('');
        setLastName('');
        setAddress('');
        setNumber('');
        console.log(contacts)
    }

    function handleFirstChange(event){
        setFirstName(event.target.value)
    }

    function handleLastChange(event){
        setLastName(event.target.value)
    }

    function handleAdressChange(event){
        setAddress(event.target.value)
    }

    function handleNumberChange(event){
        setNumber(event.target.value)
    }
    
    const contactsList = contacts.map(contact => 
    <li key={contact.id} style={{}}>
        <p>{contact.firstName}</p>
        <p>{contact.lastName}</p>
        <p>{contact.address}</p>
        <p>{contact.number}</p>
        </li>)

return(
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" value={firstName} name="firstName" placeholder="First Name" onChange={handleFirstChange} />
        <input type="text" value={lastName} name="lastNAme" placeholder="Last Name" onChange={handleLastChange} />
        <input type="text" value={address} name="adress" placeholder="Adress" onChange={handleAdressChange} /> 
        <input type="number" value={number} name="number" placeholder="Phone Number" onChange={handleNumberChange} />   
        <button type="submit">Submit</button>
    </form>
    
    <div>
        <h2>Contacts</h2>
        <ul>
            {contactsList}
        </ul>
    </div>
    </>
)
}



export default ContactForm;