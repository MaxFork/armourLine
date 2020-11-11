import React, { useState, useRef, useEffect } from 'react';

import "./find-vehicle.styles.css"

export default function FindVehicle() {

    const [make, setMake] = useState([
        {id: 1, carName: "Acura"},
        {id: 2, carName: "Audi"},
        {id: 3, carName: "BMW"},
        {id: 6, carName: "Chevrolet"},
        {id: 7, carName: "Chrysler"},
        {id: 8, carName: "Dodge"},
        {id: 10, carName: "Ford"},
        {id: 13, carName: "Honda"},
        {id: 15, carName: "Hyundai"},
        {id: 17, carName: "Jaguar"},
        {id: 18, carName: "Jeep"},
        {id: 19, carName: "Kia"},
        {id: 23, carName: "Mazda"},
        {id: 24, carName: "Mercedes-Benz"},
        {id: 27, carName: "Nissan"},
        {id: 32, carName: "Subaru"},
        {id: 34, carName: "Toyota"},
        {id: 35, carName: "Volkswagen"},
    ]);

    const [model, setModel] = useState([
        {id: "Acura", models: [{id: 1, name: "MDX"},{id: 3, name: "RDX"},{id: 4, name: "TLX"}] },
        {id: "Audi", models: [{id: 1, name: "Q3"},{id: 2, name: "Q4"},{id: 3, name: "Q7"},{id: 4, name: "A4"}]},
        {id: "BMW", models: [{id: 2, name: "3-Series"},{id: 9, name: "X1"}]},
        {id: "Chevrolet", models: [{id: 1, name: "Cruze"}]},
        {id: "Chrysler", models: [{id: 2, name: "300"}]},
        {id: "Dodge", models: [{id: 5, name: "Journey"}]},
        {id: "Ford", models: [{id: 1, name: "Escape"},{id: 2, name: "Explorer"},{id: 3, name: "Fusion"},{id: 1, name: "F150"},{id: 4, name: "Mustang"},]},
        {id: "Honda", models: [{id: 2, name: "Accord"},{id: 3, name: "CR-V"},{id: 4, name: "Civic"},{id: 5, name: "HRV"},{id: 7, name: "Odyssey"},{id: 1, name: "Pilot"},]},
        {id: "Hyundai", models: [{id: 1, name: "Elantra"},{id: 2, name: "Santa Fe"},{id: 3, name: "Sonata"},{id: 4, name: "Tuscon"}]},
        {id: "Jaguar", models: [{id: 1, name: "F-Pace"}]},
        {id: "Jeep", models: [{id: 1, name: "Cherokee"},{id: 2, name: "Compass"},{id: 3, name: "Wrangler 4"}]},
        {id: "Kia", models: [{id: 1, name: "Sportage"},{id: 2, name: "Sorento"}]},
        {id: "Mercedes-Benz", models: [{id: 1, name: "CLA"},{id: 2, name: "GLA"},{id: 2, name: "GLC"}]},
        {id: "Mazda", models: [{id: 1, name: "CX3"},{id: 2, name: "CX5"},{id: 3, name: "CX9"},{id: 4, name: "3"}]},
        {id: "Subaru", models: [{id: 1, name: "WRX"}]},
        {id: "Toyota", models: [{id: 1, name: "Corolla"},{id: 2, name: "Camry"},{id: 2, name: "Sienna"},{id: 3, name: "Matrix"},{id: 4, name: "RAV4"},{id: 5, name: "Venza"},{id: 6, name: "4 Runner"}]},
        {id: "Nissan", models: [{id: 1, name: "Rouge"},{id: 2, name: "Pathfinder"}]},
        {id: "Volkswagen", models: [{id: 1, name: "Jetta"},{id: 2, name: "Passat"}]},
    ])

    const [modelYear, setModelYear] = useState([
        {id: "MDX", makeName:"Acura", year: ["2015"]},
        {id: "RDX", makeName:"Acura", year: ["2013", "2019"]},
        {id: "TLX", makeName:"Acura", year: ["2015"]},
        {id: "F150", makeName:"Ford", year: ["2015"]},
        {id: "Explorer", makeName:"Ford", year: ["2015"]},
        {id: "CRV", makeName:"Honda", year: ["2017"]},
        {id: "Odyssey", makeName:"Honda", year: ["2011", "2018"]},
        {id: "F-Pace", makeName:"Jaguar", year: ["2017"]},
        {id: "Sportage", makeName:"Kia", year: ["2017"]},
        {id: "Sorento", makeName:"Kia", year: ["2016"]},
        {id: "CX9", makeName:"Mazda", year: ["2016"]},
        {id: "WRX", makeName:"Subaru", year: ["2015"]},
        {id: "Pilot", makeName:"Honda", year: ["2016"]},
        {id: "Highlander", makeName: "Toyato", year: ["2014"]},
        {id: "Jetta", makeName:"Volkswagen", year: ["2012", "2013",'2014','2015','2016','2017','2018','2019','2020']},
        {id: "Passat", makeName:"Volkswagen", year: ["2012"]},
        {id: "Sienna", makeName: "Toyota", year: ["2011"]},
        {id: "Venza", makeName: "Toyota", year: ["2009"]},
        {id: "Pathfinder", makeName: "Nissan", year: ["2013"]},
        {id: "Corolla", makeName: "Toyota", year: ["2020"]},
        {id: "Q3",makeName: 'Audi', year: ["2012", "2013",'2014','2015','2016','2017','2018','2019','2020']},
        {id: "A4",makeName: "Audi", year: [""]},
        {id: "Q7", makeName: "Audi", year: [""]},
        {id: "X1", makeName: "BMW", year: ["2016", "2017", "2018", "2019", "2020"]},
        {id: "3-Series",makeName: "BMW", year: ["2017", "2018", "2019", "2020", "2021"]},
        {id: "CLA", makeName: "Mercedes-Benz", year: ["2020"]},
        {id: "GLA", makeName: "Mercedes-Benz", year: ["2014", "2015", "2016", "2017", "2018","2019"]},
        {id: "GLC",makeName: "Mercedes-Benz", year: [""]},
        {id: "Matrix", makeName: "Toyota", year: [""]},
        {id: "Fusion", makeName: "Ford", year: ["2016", "2017", "2018", "2019", "2020"]},
        {id: "Camry", makeName: "Toyota", year: ['2014','2015','2016','2017','2018','2019','2020']},
        {id: "RAV4", makeName: "Toyota", year: [ "2013",'2014','2015','2016','2017','2018','2019','2020']},
        {id: "Pilot", makeName: "Honda", year: ['2016','2017','2018','2019','2020']},
        {id: "Mustang", makeName: "Ford", year: ['2016','2017','2018','2019','2020']},
        {id: "Cruze", makeName: "Chevrolet", year: [""]},
        {id: "300", makeName: "Chrysler", year: [""]},
        {id: "Journey", makeName: "Dodge", year: [""]},
        {id: "Escape", makeName: "Ford", year: ['2015','2016','2017','2018','2019','2020']},
        {id: "Accord", makeName: "Honda", year: ["2013"]},
        {id: "HRV", makeName: "Honda", year: [""]},
        {id: "Civic", makeName: "Honda", year: ['2016','2017','2018','2019']},
        {id: "Elantra", makeName: "Hyundai", year: [""]},
        {id: "Santa Fe", makeName: "Hyundai", year: ["2013",'2014','2015','2016','2017','2018','2019','2020']},
        {id: "Sonata", makeName: "Hyundai", year: ['2015','2016','2017','2018','2020']},
        {id: "Tuscon", makeName: "Hyundai", year: ['2015','2016','2017','2018','2019','2020', "2021"]},
        {id: "Cherokee", makeName: "Jeep", year: [""]},
        {id: "Wrangler 4", makeName: "Jeep", year: [""]},
        {id: "Compass", makeName: "Jeep", year: [""]},
        {id: "3", makeName: "Mazda", year: [""]},
        {id: "CX3", makeName: "Mazda", year: ['2016','2017','2018']},
        {id: "CX5", makeName: "Mazda", year: [""]},
        {id: "Rouge", makeName: "Nissan", year: ['2015','2016','2017','2018','2019','2020']},
        {id: "4 Runner", makeName: "Toyota", year: [""]},
        {id: "Corolla", makeName: "Toyota", year: ['2015','2016','2017','2018','2019']}
    ])

    const [modelStateId, setModelStateId] = useState(null);
    const [modelYearStateId, setModelYearStateId] = useState(null);

    const makeOnChange = (e) => {
        setModelStateId(e.target.value);
    }

    const modelOnChange = (e) => {
        setModelYearStateId(e.target.value);
    }

    return (
        <div className="container-fluid find-vehicle-container py-3">
            <div className="find-vehicle-main-cotainer d-flex flex-column flex-sm-row align-items-center justify-content-center">
                <div className="mx-1 find-vehicle-heading">
                    <h3 className="display-4">Find Your Vehicle Here:</h3>
                </div>
                <div className="select-make mx-1">
                    <select className="custom-select" onChange={makeOnChange} name="make" id="make">
                        <option defaultValue >Select Make</option>
                    {
                        make.map(car => (
                            <option key={car.id} value={car.carName}> {car.carName} </option>
                        ))
                    }
                    </select>   
                </div>
                <div className="select-model mx-1">
                    <select onChange={modelOnChange} className="custom-select" name="model" id="model">
                        <option defaultValue>Select Model</option>
                    {
                        model.map(item => {
                            return item.id === modelStateId ? item.models.map(model => (
                                <option key={model.id} value={model.name}> {model.name} </option>
                            )) : null
                        })
                    }
                    </select>
                </div>
                {/*<div className="select-year mx-1">
                    <select className="custom-select" name="carYear" id="carYear">
                        <option selected>Select Year</option>
                        {
                            modelYear.map(item => {
                                return item.id === modelYearStateId && item.makeName === modelStateId ? 
                                item.year.map((ye,idx) => (
                                    <option key={idx} value={ye}> {ye} </option>
                                )) : null
                            })
                        }
                    </select>
                </div>*/}
            </div>
        </div>
    )
}
