import { Personne } from './personne';
export class Compte {
    id : number 
    email :String
    password :String
     role : 'PATIENT' | 'MEDECIN' 
    message :String 
    personne : Personne 

}
