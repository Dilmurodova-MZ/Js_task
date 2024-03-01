"Use strict"

let numberOfSeries;
function Count_Serials(){
    numberOfSeries = prompt("Nechta serial ko’rdingiz?","")
    while(
        numberOfSeries == "" || 
        numberOfSeries== null ||
        isNaN(numberOfSeries) ||
        numberOfSeries < 0 ){
            numberOfSeries = prompt("Nechta serial ko’rdingiz?")
        }  
    return numberOfSeries;  
}

let seriesDB = {
    "count"   : Count_Serials(),
    "series"  : {},
    "actors " : {},
    "genres  " : [],
    "privat  " : false,  
} 

for(let i=1; i<3; i++){
    let SerialsName = prompt("Oxirgi ko’rgan serialingiz?","")
    let ballShowSerials = prompt("Nechi baxo berasiz?","")
    if(SerialsName != null && SerialsName != "" &&
       ballShowSerials != null && ballShowSerials != ""){
            seriesDB.series[SerialsName] = ballShowSerials;
    }else{
        i--;
    }
}

if(seriesDB.count>=0 && seriesDB.count<=5){
    console.log("Kam serial ko’ripsiz")
}else if(seriesDB.count>5 && seriesDB.count<=10){
    console.log("Siz classik tamoshabin ekansiz")
}else if(seriesDB.count>10){
    console.log("Siz serialchi zvezda ekansiz")
}else{
    alert("Faqat musbat son bilan javob berishiz mumkin")
}


console.log(seriesDB)