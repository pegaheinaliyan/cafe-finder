import React from 'react';

let Data = (props) => {
    return(
        <div id="data">
            <h3>CAFES:</h3>
            {
                Object.entries(props.records).map(array => {
                    let record = array[1];
                    console.log(record,"record")
                    return (
                        <div className="record" key = { record.id}>
                            <p>ID: { record.id}</p>
                            <p>Name: { record.name}</p>  
                            <p>Point: { record.point }</p>
                            <p>LOCATION:</p>
                            <p>latitude: { record.location["latitude"] }</p>
                            <p>longitude: { record.location["longitude"] }</p>
                            <p>Address: { record.address }</p>
                            <p>MENU:</p>
                            <p>tea: { record.menu["tea"]}</p> 
                            <p>coffee: { record.menu["coffee"]}</p> 
                            <p>cake: { record.menu["coffee"]}</p> 
                            <p>---------------------</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Data;