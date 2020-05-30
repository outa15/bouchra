import { Personne } from './personne'
import { Consultation } from './consultation'

export class Patient extends Personne {
    date_naissance : String 
    lieu_naissance : String
    nationalite :String
    civilite :String
    situation_familial :String
    ville :String
    accompagnateur:String
    lien_familial :String
    profession :String
    adresse :String
    groupe_sanguin :String
    
     consultations: Array<Consultation>;

    public constructor(init?: Partial<Patient>) {
        super(init);
    }
}
