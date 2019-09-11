export removeHTMLTags = function(HTMLtxt){
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