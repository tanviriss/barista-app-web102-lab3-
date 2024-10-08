import React, { Component, useEffect, useState } from "react";

interface RecipeChoicesProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    choices: string[];
    checked: boolean;
    currentVal?: string;
}

const RecipeChoices: React.FC<RecipeChoicesProps> = ({ handleChange, label, choices, checked, currentVal }) => {
    return (
      <div className="radio-buttons">
        <input
            type="text"
            name={label}
            value={currentVal}
            placeholder="Guess the ingredient..."
            onChange={handleChange}
            className = "textbox"
        />
        {choices &&
        choices.map((choice: string) => (
       <li key={choice}>
  
      {choice}
      
    </li>
))}
      </div>
    );
};

export default RecipeChoices;