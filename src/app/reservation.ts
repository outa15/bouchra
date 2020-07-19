
import { Patient } from './patient'
import { Medecin } from './medecin'

export class Reservation {
    id : any
    date : Date
    heure :any
    disponibilite :String
    patientt : Patient
    medecinn :Medecin 

    public constructor(init?: Partial<Reservation>) {
        Object.assign(this, init);
    }
}