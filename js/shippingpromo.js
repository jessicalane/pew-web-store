
<p id="freeShip"></p>

<SCRIPT language = 'Javascript'>
	var shiptotal = 999.99;
	var shipCost = '<%=getCartTotal()%>';

	var shipCost = shipCost.slice(1, shipCost.length);
	var shipCost = shipCost.replace(',', '');
	var shipCost = parseFloat(shipCost);

	if(shipCost <= shiptotal) {
		document.getElementById('freeShip').innerHTML = "Thank you for shopping with us!";
	}else {
		document.getElementById('freeShip').innerHTML = "Thanks for shopping with us!";
	}

</SCRIPT>

