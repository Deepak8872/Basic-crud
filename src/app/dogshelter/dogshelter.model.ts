export class Dogshelter{
  id:number=0;
  name:string=""
  bread:string=""
  quality:string=""
  gender:string=""
  dogadopy(){}

}

  export class online extends Dogshelter{
    override dogadopy() {
        alert('online')
    }
  }
  export class offline extends Dogshelter{
    override dogadopy(){
             alert("offline" )}

    }
