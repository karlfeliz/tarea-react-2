import "./Telefono.css";

const PhonesComponent = () => {

    const phones = ["iPhone", "Galaxy", "Redmi", "OnePlus"];
  
    return <div>
      <h2>Teléfonos:</h2>
      
      <ul>
        {phones.map((phone) => {
          return <li key={phone}>{phone}</li>
        })}
      </ul>
      
    </div>
  }
  
  export default PhonesComponent;