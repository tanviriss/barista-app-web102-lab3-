import { useState } from "react"
import RecipeChoices from "./RecipeChoices"
import drinksJson from '../drinks.json'


const BaristaForm = () => {
  const [currentDrink, setCurrentDrink] = useState('')
  const [trueRecipe, setTrueRecipe] = useState<{ temp?: string, milk?: string, syrup?: string, blended?: string }>({})
  const [correct_temp, setCheckedTemperature] = useState('');
  const [correct_syrup, setCheckedSyrup] = useState('');
  const [correct_milk, setCheckedMilk] = useState('');
  const [correct_blended, setCheckedBlended] = useState('');

  const [inputs, setInputs] = useState({
    'temperature': '',
    'milk': '',
    'syrup': '',
    'blended': ''
  });
