window.onload=function(){
    var oHead=document.getElementById('h');
    var oP=document.getElementById('p');

    var oHeadT=oHead.offsetTop;

    window.onscroll=function(){
        var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
        if(scrollT>=oHeadT){
            oHead.style.position='fixed';
            oP.style.display='block';
        }else{
            oHead.style.position='';
            oP.style.display='none';
        }
    };
	

}
