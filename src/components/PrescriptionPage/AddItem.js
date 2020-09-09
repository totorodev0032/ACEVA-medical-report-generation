import React from 'react';
import PropTypes from 'prop-types';
import './AddItem.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const AddItem = ({name, startDate,endDate,quantities, onChange, onSubmit}) => (
 <div className = "main_wrapper">
   <form className = "input_form" onSubmit = {onSubmit} >
       <div className = "main_input">
            <input
                type="text"
                className="sub_input"
                placeholder="Item"
                value={name}
                name="name"
                onChange={onChange}
            />
            <button type="submit">Add</button>

       </div>

       <div className = "secondary_input">
            <input
                type="text"
                //  className="form-control"
                placeholder="dd/mm/yyyy"
                value={startDate}
                name= "startDate"
                onChange={onChange}
            />

                <input
                type="text"
                //  className="form-control"
                placeholder="dd/mm/yyyy"
                value={endDate}
                name="endDate"
                onChange={onChange}
            />

                <input
                type="text"
                //  className="form-control"
                placeholder="quant"
                value={quantities}
                name="quantities"
                onChange={onChange}
            />
       </div>
     
     
      
       
       
     
   </form>
 </div>
);

// AddItem.propTypes = {
//  name: PropTypes.string.isRequired,
//  price: PropTypes.string.isRequired,
//  onChange: PropTypes.func.isRequired,
// };

export default AddItem