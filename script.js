const getPaises = async()=>{
  const response= await fetch('https://api.covid19api.com/summary');
  const data= response.json();
  const paises= data;
  const miPaisito = paises.Countries.find(Countries => Countries.Country === "Uruguay");
  const casosNuevos= miPaisito.NewConfirmed;
  const totalConfirmado= miPaisito.TotalConfirmed;
  const nuevasMuertes= miPaisito.NewDeaths;
  const totalMuertes= miPaisito.TotalDeaths;

  document.getElementsByClassName("miDiv").innerHTML ("<p>${casosNuevos}</p>");
  document.getElementsByClassName("miDiv").innerHTML('<p>${totalConfirmado}</p>');
 document.getElementsByClassName("miDiv").innerHTML('<p>${nuevasMuertes}</p>');
  document.getElementsByClassName("miDiv").innerHTML('<p>${totalMuertes}</p>');

  await getPaises()

}

  




