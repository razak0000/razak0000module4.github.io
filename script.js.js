var name=new Array();
names[0]="Razak";
names[1]="Jhon";
names[2]="Peter";
names[3]="Tonio";
names[4]="Ronaldo";
names[5]="Messi";
names[6]="Neymer";
names[7]="Mbappe";
names[8]="Pawan";
names[9]="jim";

for (var i = 0; i < names.length; i++) {
 if(name[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
 console.log("goodbye"+names[i]) 
}
else{
	console.log("hello" + names[i])
}