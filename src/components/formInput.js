import React from 'react';

function FormInput(props) {

    return (
        <div>
        <label htmlFor={props.answerId}>{props.label}</label>

        <input type="radio" name="answer"
        onChange={(e) => props.onCorrectAnswer(e)}
        required
        />
          
          <input
          type="text"
          name={props.answerId}
          data-id={props.id} 
          id={props.answerId}
          className={props.className}
          value={props.value}
          onChange={(e) => props.handleFormChange(e)}
          required
         />
          
        </div>
    );
}

export default FormInput;