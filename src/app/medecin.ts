import { Personne } from './personne';
import { Consultation } from './consultation';

export class Medecin extends Personne{
    specialite :String
    consultation :Consultation;
}
