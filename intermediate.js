// || Budget Planner
// let monthlyIncome = prompt( "Please enter your MONTHLY INCOME" );
// let monthlyExpenses = prompt( "Please enter your MONTHLY EXPENSES", "Sum of rent, utilities and food" );
// let netIncome = monthlyIncome - monthlyExpenses;
// if ( netIncome >= 0 )
// {
//   console.log( "You are within your budget WHOOP WHOOP!!" );
// } else
// {
//   console.log( "You are over your budget!! Waahhh!!" );
// }

// || Event Scheduler
// let eventDay = prompt( "What is the day of your event?", 'e.g., "Monday"' );
// let availability = prompt( "Are you available on that day?", "Yes or No" );
// if ( availability == "Yes" )
// {
//   console.log( "Users attendance has been confirmed." );
// } else
// {
//   console.log( "User expresses their regret that they cannot attend." );
// }

// || Temperature Converter
// let userTemperature = prompt( "Enter your temperature in Celsius or Fahrenheit", 'e.g., "22C or 22F"' );
// if ( userTemperature.endsWith( "C" ) )
// {
//   let convertedTemperature = ( parseInt( userTemperature ) * 9 / 5 + 32 );
//   let newTemperature = convertedTemperature + "F";
//   console.log( newTemperature );
// } else if ( userTemperature.endsWith( "F" ) )
// {
//   let convertedTemperature = ( ( parseInt( userTemperature ) - 32 ) / ( 9 / 5 ) );
//   let newTemperature = convertedTemperature + "C";
//   console.log( newTemperature );
// }

// || Grocery List Sorter
// const groceryItems = [ "milk", "bread", "apples", "shampoo" ];
// let foodItems = groceryItems.slice( 0, 3 );
// let nonFoodItems = groceryItems.slice( 3 );
// console.log( "Food Items", foodItems );
// console.log( "Non Food Items", nonFoodItems );

// || Trip Cost Calculator
// let tripMilelage = prompt( "Enter the total miles of your trip", '"e.g., 100"' );
// let fuelEfficiency = prompt( "Enter the miles per gallon of your vehicle", '"e.g., 10"' );
// let fuelPrice = prompt( "Enter the current price per gallon for fuel", '"e.g., 12"' );
// let totalTripCost = ( tripMilelage / fuelEfficiency ) * fuelPrice;
// console.log( totalTripCost );