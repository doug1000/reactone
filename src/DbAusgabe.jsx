import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';




const Abruf = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/Api/getData.php')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h3>Daten direkt aus PHP und Datenbank</h3>
      <table>
        {data.map((item, index) => (
          <tr key={index}><td>{item.id}</td> <td>{item.name} </td><td>{item.kdnr}</td></tr>
        ))}
      </table>
    </div>
  );
};


export default Abruf;
/*

Beispiel für die Integration:
1. React-Komponenten erstellen: Erstelle deine React-Komponenten für das Frontend.

2. PHP-API erstellen: Erstelle PHP-Skripte, die als API dienen. Diese Skripte können Daten aus einer Datenbank abrufen und verarbeiten.

3. Kommunikation über HTTP: Verwende Fetch oder Axios in React, um HTTP-Anfragen an deine PHP-API zu senden.

Ablauf: 
1. Ordner "Api" im html verzeichnis erstellen und Freigeben

  Der Webanwendung Berechtigung geben um auf das Verzeichnis zuzugreifen.
  sudo chown -R www-data:www-data /var/www/html/api
  sudo chmod -R 755 /var/www/html/api

2. PHP Scripte da ablegen

BSP: 

<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


$servername = "localhost";
$username = "root";
$password = "bambule5";
$dbname = "test";

// Verbindung zur Datenbank herstellen
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}

$sql = "SELECT id, name, kdnr FROM namen";
$result = $conn->query($sql);

$data = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} 

$conn->close();

echo json_encode($data);


?>

##Der Datenaustausch erfolg im JSON Format##

3. Axios per sudo npm install Axios

4. Konfigurationsdatei bearbeiten: Bearbeite die Apache2-Konfigurationsdatei, um den neuen Ordner zu bedienen. 
Öffne die Konfigurationsdatei mit einem Texteditor, z.B.
sudo nano /etc/apache2/sites-available/000-default.conf

  Innerhalb des <VirtualHost> Tags das reinkopieren:
  <Directory /var/www/html/Api>
    AllowOverride All
    Require all granted
</Directory>

5. Apache neu starten:
sudo systemctl restart apache2




*/
