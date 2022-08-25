import { useState, useEffect } from "react";
const Clients = () => {
const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      const response = await fetch();
      setClients(await response.json());
    };
  }, []);

  return (
    <div className="client">
      <h1>Clients page</h1>
      {clients.length === 0 && <h2>Aucun client pour le moment 😫😪😪😯</h2>}
      <ul>
        {clients.map((client) => (
          <li key={client.id}></li>
        ))}
      </ul>
    </div>
  );
};
export default Clients;
