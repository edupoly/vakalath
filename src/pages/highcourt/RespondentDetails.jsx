import React, { useState } from 'react';
import FloatingInput from '../../components/floatingInput';

function RespondentDetails({ respondents, setRespondents, editRespondents }) {

    const addRespondent = () => {
        setRespondents([...respondents, { Name: '', Address: '', Age: '' }]);
    };

    const deleteRespondent = (index) => {
        const newDetails = respondents.filter((_, i) => i !== index);
        setRespondents(newDetails);
    };

    const handleChange = (index, field, value) => {
        const newDetails = [...respondents];
        newDetails[index][field] = value;
        setRespondents(newDetails);
        vakalathForm.setFieldValue('Respondents', respondents);
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <label>Respondent</label>
                <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    onClick={addRespondent}
                >
                    + Add Respondent
                </button>
            </div>

            {respondents.map((respondent, i) => (
                <div className="d-flex align-items-center gap-3" key={i}>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 flex-fill">
                        <FloatingInput
                            id={`RespondentName${i + 1}`}
                            name={`RespondentName${i + 1}`}
                            label={`Respondent Name ${i + 1}`}
                            value={respondent.Name}
                            onChange={(e) => handleChange(i, 'name', e.target.value)}
                        />

                        <FloatingInput
                            id={`RespondentAddress${i + 1}`}
                            name={`RespondentAddress${i + 1}`}
                            label={`Respondent's Address ${i + 1}`}
                            value={respondent.Address}
                            onChange={(e) => handleChange(i, 'address', e.target.value)}
                        />

                        <FloatingInput
                            type="number"
                            id={`RespondentAge${i + 1}`}
                            name={`RespondentAge${i + 1}`}
                            label={`Respondent Age ${i + 1}`}
                            value={respondent.Age}
                            onChange={(e) => handleChange(i, 'age', e.target.value)}
                        />
                    </div>
                    {i !== 0 ? <button type="button" className="btn-close" onClick={() => deleteRespondent(i)}></button> : <div className='p-2 ms-2'></div>}
                </div>
            ))}
        </div>
    );
}

export default RespondentDetails;
