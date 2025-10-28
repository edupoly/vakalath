import React, { useEffect, useState } from 'react';
import FloatingInput from '../../components/floatingInput';

function PetitionerDetails({ petitioners, setPetitioners, vakalathForm }) {

    const addPetitioner = () => {
        setPetitioners([...petitioners, { Name: '', Address: '', Age: '' }]);
    };

    const handleChange = (index, field, value) => {
        const updated = [...petitioners];
        updated[index][field] = value;
        setPetitioners(updated);
    };

    const deleteRespondent = (index) => {
        const newDetails = petitioners.filter((_, i) => i !== index);
        setPetitioners(newDetails);
    };

useEffect(()=>{
    if(vakalathForm?.values?.Petitioners){
        setPetitioners([...vakalathForm?.values?.Petitioners])
    }
},[])
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <label>Petitioner</label>
                <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    onClick={addPetitioner}
                >
                    + Add Petitioner
                </button>
            </div>

            {petitioners.map((petitioner, i) => (
                <div className="d-flex align-items-center gap-3" key={i}>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 flex-fill">
                        <FloatingInput
                            id={`PetitionerName${i + 1}`}
                            name={`PetitionerName${i + 1}`}
                            label={`Petitioner Name ${i + 1}`}
                            value={petitioner?.Name}
                            onChange={(e) => handleChange(i, 'Name', e.target.value)}
                        />
                        <FloatingInput
                            id={`PetitionerAddress${i + 1}`}
                            name={`PetitionerAddress${i + 1}`}
                            label={`Petitioner's Address ${i + 1}`}
                            value={petitioner?.Address}
                            onChange={(e) => handleChange(i, 'Address', e.target.value)}
                        />

                        <FloatingInput
                            type="number"
                            id={`PetitionerAge${i + 1}`}
                            name={`PetitionerAge${i + 1}`}
                            label={`Petitioner Age ${i + 1}`}
                            value={petitioner?.Age}
                            onChange={(e) => handleChange(i, 'Age', e.target.value)}
                        />
                    </div>
                    {i !== 0 ? <button type="button" className="btn-close" onClick={() => deleteRespondent(i)}></button> : <div className='p-2 ms-2'></div>}
                </div>
            ))}
        </div>
    );
}

export default PetitionerDetails;
