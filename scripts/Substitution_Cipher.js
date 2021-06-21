function Sifrovej(){
    let m_Zobrazeni= new Array();
    let encoded="";
    m_Zobrazeni=["qwert","yuiop","asdfg","hjkl","zxcvb","nm","QWERT","YUIOP","ASDFG","HJKL","ZXCVB","NM"];
    var text=prompt("Zadej text: "); //neni pole, just string?
    for (var i = 0; i < text.length; i++)
	{
        var flag=0;
		for (var j = 0; j < m_Zobrazeni.length; j++)
		{
			var index = m_Zobrazeni[j].indexOf(text.substr(i,1));
			if ( index!= -1) {
                flag=1;
				if (index == m_Zobrazeni[j].length - 1) {
					encoded+=m_Zobrazeni[j][0];
				}
				else {
					encoded+=m_Zobrazeni[j][index+1];
				}
				break;
			}
		}
        if(flag==0){
            encoded+=text.substr(i,1);
        }
	}
    alert(encoded);
}

function Desifrovej(){
    let m_Zobrazeni= new Array();
    let decoded="";
    m_Zobrazeni=["qwert","yuiop","asdfg","hjkl","zxcvb","nm"];
    var text=prompt("Zadej text: "); //neni pole, just string?
    for (var i = 0; i < text.length; i++)
	{
        var flag=0;
		for (var j = 0; j < m_Zobrazeni.length; j++)
		{
			var index = m_Zobrazeni[j].indexOf(text.substr(i,1));
			if ( index!= -1) {
                flag=1;
				if (index == 0) {
					decoded+=m_Zobrazeni[j][m_Zobrazeni[j].length - 1];
				}
				else {
					decoded+=m_Zobrazeni[j][index-1];
				}
				break;
			}
		}
        if(flag==0){
            decoded+=text.substr(i,1);
        }
	}
    alert(decoded);
}