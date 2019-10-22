function sleep(seconds) {
   var Time = new Date().getTime();
   while (Time + seconds*1000 >= new Date().getTime()) {
   }
}





function getSelectValue()
        {
            var selectedValue = document.getElementById("textbox2").value;
            a=parseInt(selectedValue);
            return a;
        }

function getSelectValue2()
        {
            var selectedValue = document.getElementById("textbox6").value;
            a=parseInt(selectedValue);
            return a;
        }






function is_leap(year){
	    var leap=0;
	    if (year%4==0)
	    {
	        if (year%400==0 || (year%4==0 && year%100!=0))
	            leap=1;
	    }
	    return leap;
	    
	}



	function daycounter(yearr,isleapp,monthh,dayy)
	{
		var year=parseInt(yearr);
		var isleap=parseInt(isleapp);
		var month=parseInt(monthh);
		var day=parseInt(dayy);
	 var leapyears1 = Math.floor((year - 1) / 4);
	 var leapyears2 = Math.floor((year - 1) / 100);
	 var leapyears3 = Math.floor((year - 1) / 400);
	  
	 var leapyear = leapyears1 - leapyears2 + leapyears3;
	 var Normalyear = year - leapyear;
	 var date=(Normalyear-1)*365+(leapyear+1)*366;
	

	 if (isleap == 0)
	 {
	  if (month == 1)
	   date = date + day;
	  else if (month == 2)
	   date = date + 31 + day;
	  else if (month == 3)
	   date = date + 59 + day;
	  else if (month == 4)
	   date = date + 90 + day;
	  else if (month == 5)
	   date = date + 120 + day;
	  else if (month == 6)
	   date = date + 151 + day;
	  else if (month == 7)
	   date = date + 181 + day;
	  else if (month == 8)
	   date = date + 212 + day;
	  else if (month == 9)
	   date = date + 243 + day;
	  else if (month == 10)
	   date = date + 273 + day;
	  else if (month == 11)
	   date = date + 304 + day;
	  else
	   date = date + 334 + day;
	 }

	 if (isleap == 1)
	 {
	  if (month == 1)
	   date = date + day;
	  else if (month == 2)
	   date = date + 31 + day;
	  else if (month == 3)
	   date = date + 60 + day;
	  else if (month == 4)
	   date = date + 91 + day;
	  else if (month == 5)
	   date = date + 121 + day;
	  else if (month == 6)
	   date = date + 152 + day;
	  else if (month == 7)
	   date = date + 182 + day;
	  else if (month == 8)
	   date = date + 213 + day;
	  else if (month == 9)
	   date = date + 244 + day;
	  else if (month == 10)
	   date = date + 274 + day;
	  else if (month == 11)
	   date = date + 305 + day;
	  else
	   date = date + 335 + day;
	 }

	 return date;
	 
	}


function weekday(date1,date2)
	{     
		var wday = "";
		
	   if (date1>=date2)
	   {
	       
	      if ((date1-date2)%7==0)
	       wday="MONDAY";
	      else if ((date1 - date2) % 7 == 1)
	       wday = "SUNDAY";
	      else if ((date1 - date2) % 7 == 2)
	       wday = "SATURDAY";
	      else if ((date1 - date2) % 7 == 3)
	       wday = "FRIDAY";
	      else if ((date1 - date2) % 7 == 4)
	       wday = "THURSDAY";
	      else if ((date1 - date2) % 7 == 5)
	       wday = "WEDNESDAY";
	      else
	       wday = "TUESDAY";
	   }

	   if (date1<date2)
	   {
	      if ((date2-date1)%7==0)
	       wday="MONDAY";
	      else if ((date2 - date1) % 7 == 1)
	       wday = "TUESDAY";
	      else if ((date2 - date1) % 7 == 2)
	       wday = "WEDNESDAY";
	      else if ((date2 - date1) % 7 == 3)
	       wday = "THURSDAY";
	      else if ((date2 - date1) % 7 == 4)
	       wday = "FRIDAY";
	      else if ((date2 - date1) % 7 == 5)
	       wday = "SATURDAY";
	      else
	        wday = "SUNDAY";
	   }

	   return wday;
	   
	   }




var yeart=2018;
var montht=12;
var dayt=10;
var isleapt=is_leap(yeart);
var datet=daycounter(yeart,isleapt,montht,dayt);





var textbox1=document.getElementById("textbox1");
//var textbox2=document.getElementById("textbox2");
var textbox3=document.getElementById("textbox3");
var button =document.getElementById("button");
var textbox4=document.getElementById("textbox4");

var textbox5=document.getElementById("textbox5");
//var textbox6=document.getElementById("textbox6");
var textbox7=document.getElementById("textbox7");
var button2 =document.getElementById("button2");
var textbox8=document.getElementById("textbox8");


button.addEventListener("click", function(){
	var day1=textbox1.value;
	var month1=getSelectValue();
	var year1=textbox3.value;

	var isleap1=is_leap(parseInt(year1));


if (month1<1 || month1>12)
        {
            textbox4.value=("please recheck ! \n");
            return;
        }
        
 if (month1==1 || month1==3 || month1==5 || month1==7 || month1==8 || month1==10 || month1==12)
    if (day1<1 || day1>31)
        {textbox4.value=("please recheck ! \n");
        return;}


if (month1==4 || month1==6 || month1==9 || month1==11)
    if (day1<1 || day1>30)
        {textbox4.value=("please recheck ! \n");
        return;}


if (month1==2)
    {if (isleap1==0)
        {if (day1<1 || day1>28)
            {textbox4.value=("please recheck ! \n");
        return;}}
        
    else
        {if (day1<1 || day1>29)
            {textbox4.value=("please recheck ! \n");
    return ;}}}





    
    date1=daycounter(year1,isleap1,month1,day1);

    var weekday1=weekday(datet,date1);
	
    textbox4.value="1st DAY is "+weekday1+"\n"


	button2.addEventListener("click", function(){
	var day2=textbox5.value;
	var month2=getSelectValue2()
	var year2=textbox7.value;

	var isleap2=is_leap(parseInt(year2));



	if (month2<1 || month2>12)
        {
            textbox8.value=("please recheck ! \n");
            return;
        }
        
 if (month2==1 || month2==3 || month2==5 || month2==7 || month2==8 || month2==10 || month2==12)
    if (day2<1 || day2>31)
        {textbox8.value=("please recheck ! \n");
        return;}


if (month2==4 || month2==6 || month2==9 || month2==11)
    if (day2<1 || day2>30)
        {textbox8.value=("please recheck ! \n");
        return;}


if (month2==2)
    {if (isleap2==0)
        {if (day2<1 || day2>28)
            {textbox8.value=("please recheck ! \n");
        return;}}
        
    else
        {if (day2<1 || day2>29)
            {textbox8.value=("please recheck ! \n");
    return;}}}



	date2=daycounter(year2,isleap2,month2,day2);

	var weekday2=weekday(datet,date2);

	textbox8.value="2nd DAY is "+weekday2+"\n"

	//sleep(2);

	var comparator="greater";
	year1 = parseInt(year1);
	month1 = parseInt(month1);
	day1 = parseInt(day1);
	year2 = parseInt(year2);
	month2 = parseInt(month2);
	day2 = parseInt(day2);

	    if (year1<year2 || (year1==year2 && month1<month2) || (year1==year2 && month1==month2 && day1<day2))
	        {
	            comparator="less";
	            var yearm=parseInt(year1);
	            var monthm=parseInt(month1);
	            var daym=parseInt(day1);
	            year1 = parseInt(year2);
	            month1 = parseInt(month2);
	            day1 = parseInt(day2);
	            year2 = parseInt(yearm);
	            month2 = parseInt(monthm);
	            day2 = parseInt(daym);
	        }
	    
	    textbox9.value=("1st date is "+comparator+" than 2nd date by "+Math.abs(date1-date2)+" days");


	    if (year1>=year2 && month1>=month2 && day1>=day2)
	    {
	     textbox10.value=("1st date is "+comparator+" than 2nd date by "+(year1 - year2)+" year(s), "+(month1 - month2)+" month(s), "+(day1 - day2)+" day(s)");
	    }
	 else if (year1>=year2 && month1>=month2 && day1<day2)
	         
	     {    var dayd=0;
	         if (month2==1 || month2==3 || month2==5 || month2==7 || month2==8 || month2==10 || month2==12)
	            {dayd=31-day2+day1;}
	         else if (month2==4 || month2==6 || month2==9 || month2==11)
	             {dayd = 30-day2+day1;}
	         else if (month2==2)
	         {
	             if (isleap2==1)
	               {dayd = 29 - day2 + day1;}
	             else
	               {dayd = 28 - day2 + day1;}
	         }
	         if (month1>month2)
	         {
	         textbox10.value=("1st date is "+comparator+" than 2nd date by "+(year1 - year2)+" year(s), "+(month1 - month2-1)+" month(s), "+(dayd)+" day(s)");
	     }
	      if (month1==month2)
	         {
	         textbox10.value=("1st date is "+comparator+" than 2nd date by "+(year1 - year2-1)+" year(s), "+(12+month1 - month2-1)+" month(s), "+(dayd)+" day(s)");
	     }
	     }

	 if (year1>=year2 && month1<month2 && day1>=day2)
	  {
	        textbox10.value=("1st date is "+comparator+" than 2nd date by "+(year1 - year2-1)+" year(s), "+(12+month1 - month2)+" month(s), "+(day1 - day2)+" day(s)");
		    
	  }
	    else if (year1>=year2 && month1<month2 && day1<day2)
	    {    var dayd=0;
	         if (month2==1 || month2==3 || month2==5 || month2==7 || month2==8 || month2==10 || month2==12)
	            {dayd=31-day2+day1;}
	         else if (month2==4 || month2==6 || month2==9 || month2==11)
	             {dayd = 30-day2+day1;}
	         else if (month2==2)
	             {if (isleap2==1)
	                {dayd = 29 - day2 + day1;}
	             else
	                {dayd = 28 - day2 + day1;}}

	         textbox10.value=("1st date is "+comparator+" than 2nd date by "+(year1 - year2-1)+" year(s), "+(12+month1 - month2-1)+" month(s), "+(dayd)+" day(s)");
	    }
	    

});

});

/*


*/




