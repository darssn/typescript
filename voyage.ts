class Sejour{

 
    constructor(private _nom:string,private _prix:number){

    }

    get nom():string{
        return this._nom;
    }

    set nom(nom:string){
        this._nom = nom;
    }

    get prix():number{
        return  this._prix;
    }
    set prix(prix:number){
        this._prix = prix ;
    }

}

class SejourService{

    private _tabSejour:Sejour[] = new Array;
    
    constructor(){
        
        this._tabSejour.push(new Sejour('Paris',200));
        this._tabSejour.push(new Sejour('Marseille',100));
        this._tabSejour.push(new Sejour('Toulouse',50));
    }

    rechercheParNom(nom:string):Sejour|void{

        return this._tabSejour.find(sejour=>nom===sejour.nom);
     
    }
}

const sejourServ = new SejourService();

console.log(sejourServ.rechercheParNom('Paris'));

console.log(sejourServ.rechercheParNom('Montpellier'));