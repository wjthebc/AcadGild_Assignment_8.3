function printTimesTable (number)
  {
    //*iterates 1-10
    for (var i = 1; i < 11; i++)
      {
        //*creates a variable to log
        var calc = (number * i);
        //*logs variable
        console.log(calc);
      }
  }
  //*passes argument through function
  printTimesTable(5);
