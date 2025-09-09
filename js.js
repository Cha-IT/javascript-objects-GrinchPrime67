let informasjonsteknologi1 = {
 spraak: ["HTML", "CSS"],
    LikerFaget: false,
    timetall: 5,
    klasserom: "c14",
    antallElever: 24
};

document.write(informasjonsteknologi1.LikerFaget + "<br>");
document.write(informasjonsteknologi1.spraak + "<br>");
document.write(informasjonsteknologi1.timetall + "<br>");
document.write(informasjonsteknologi1.klasserom + "<br>");
document.write(informasjonsteknologi1.antallElever + "<br>" + "<br>");

//1a
informasjonsteknologi1.spraak.push("JavaScript");
document.write(informasjonsteknologi1.spraak + "<br>");

//1b
informasjonsteknologi1.antallElever = 10;
document.write(informasjonsteknologi1.antallElever + "<br>");

//1c
informasjonsteknologi1.LikerFaget = true;
document.write(informasjonsteknologi1.LikerFaget + "<br>");

//1d 
delete informasjonsteknologi1.timetall;

//1e
for (let i = 0; i < informasjonsteknologi1.spraak.length; i++)
     {
   document.write(informasjonsteknologi1.spraak[i]);
}
document.write("<br>" + "<br>");
//1f
for (let key in informasjonsteknologi1) {
    document.write(key);
}

//1g
document.write("<br>" + "<br>");
for (let key in informasjonsteknologi1) {
    document.write(informasjonsteknologi1[key]);
}
document.write("<br>" + "<br>");