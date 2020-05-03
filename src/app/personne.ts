export class Personne {
    id :number;
    nom: string;
    prenom : string;
    telephone: number;
    role : 'PATIENT' | 'MEDECIN' ;
    
    public constructor(init?: Partial<Personne>) {
        Object.assign(this, init);
    }
}
