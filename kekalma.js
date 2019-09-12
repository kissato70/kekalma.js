
export default class kekalma {

//**************************** HTML kódeltávolító *************************************************
removeHTMLTags = (HTMLtxt) => {
    if(HTMLtxt)
    {	
         HTMLtxt = HTMLtxt.replace(/&(lt|gt);/g, function (strMatch, p1){
             return (p1 == "lt")? "<" : ">";
        });
        var strTagStrippedText = HTMLtxt.replace(/<\/?[^>]+(>|$)/g, "");
        return strTagStrippedText;
    }
    else return "";
}


//****************************  Ezres szeparátor *************************************************
ezres = (x,sep) => {
	if (sep==null) { sep=' '; }
	x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1"+sep+"$2");
    return x;
}


};

