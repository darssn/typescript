console.log("Météo App");

class Meteo{

   constructor(private _ville:string,private _temperature:number){

   }

   toString(){
       return`${this._ville} - ${this._temperature} °C `;
   }


}

let m = new Meteo('Nantes',12);

console.log(m.toString());