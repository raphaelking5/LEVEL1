function ConvertirEnFrancs()
{
if (isNaN(Form1.Euros.value) == true)
{
alert('Merci de saisir un nombre. Conversion Impossible.');
Form1.Euros.value = '1';
}
else
{
Form1.Francs.value = Form1.Euros.value * 6.55957 ;
}
}

function ConvertirEnEuros()
{
if (isNaN(Form1.Francs.value) == true)
{
alert('Merci de saisir un nombre. Conversion Impossible.');
Form1.Francs.value = Form1.Euros.value * 6.55957 ;
}
else
{
Form1.Euros.value = Form1.Francs.value / 6.55957 ;
}
}