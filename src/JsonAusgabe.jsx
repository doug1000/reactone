
/* Damit aus einer Mysql Tabelle Daten ausgelesen werden können, müssen folgende Schritte getan werden:
1. In PhpMyadmin schauen, in welches Verzeichnis die exportierten .json Files abgelegt werden können. Die Variable heißt 'secure file priv'
2. Die Tabelle Abfrage und als JSON Formatieren: SET @json = (SELECT JSON_ARRAYAGG(JSON_OBJECT('id', id, 'name', name, 'kdnr', kdnr)) FROM test.namen);
3. Das Ergebnis als .json File exportieren: SELECT @json INTO OUTFILE '/var/lib/mysql-files/meineTabelle.json';
## Die beiden Abfragen aus 2. und 3. können auch zusammen im SQL Editor eingetragen werden. */


import React from 'react';
import './JsonAusgabe.css';
import data from './meineTabelle.json';

const TableComponent = () => {
  return (
    <table>
      <title>Tabellenausgabe aus JSON File</title>
      <thead>
        <tr>
          
          <th>id</th>
          <th>Name</th>
          <th>Kdnr</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.kdnr}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
