import { MedalService } from 'src/app/shared/services/medal.service';
import { Observable, of } from 'rxjs';
import { Medal } from 'src/app/shared/models/medal';

export class MockMedalService implements MedalService {
  private readonly mockedMedals: Medal[] = [{
    id: 1,
    name: 'Médaille de la Couronne de Fer',
    description: `L'ordre de la Couronne de fer est un ordre honorifique fondé le 5 juin 1805 à Milan
    par Napoléon Ier, agissant en tant que roi du Royaume d'Italie (1805-1814), sur le modèle de la Légion d'honneur.`,
    imageURL: 'https://cdn.discordapp.com/emojis/490462951254392852.png?v=1&size=32'
  }, {
    id: 2,
    name: 'Ordre du mérite',
    description: `L’ordre national du Mérite est un ordre français qui a été institué le 3 décembre 1963 par le général de Gaulle1.
    Il récompense les mérites distingués, militaires (d'active et de réserve) ou civils, rendus à la nation française.
    Il remplace d'anciens ordres ministériels et coloniaux.`,
    imageURL: 'https://cdn.discordapp.com/emojis/564055533179502603.png?v=1&size=32'
  }, {
    id: 3,
    name: 'Légion d\'Honneur',
    description: `L'ordre national de la Légion d'honneur est l'institution qui, sous l'égide du grand chancelier et du grand maître,
    est chargée de décerner la plus haute décoration honorifique française.
    Instituée le 19 mai 1802 par Napoléon Bonaparte,
    elle récompense depuis ses origines les militaires comme les civils ayant rendu des « services éminents » à la Nation.`,
    imageURL: 'https://cdn.discordapp.com/emojis/490463046150651915.png?v=1&size=32'
  }, {
    id: 4,
    name: 'Grande Croix de la Légion',
    description: `Entre le décret du 10 pluviose An XIII (30 janvier 1805) créant cette grande décoration,
    et l'ordonnance royale du 26 mars 1816 figeant le terme « Grand Croix », les désignations « Grand Aigle » (sous l'Empire)
    ou « Grand Cordon » (sous les Restaurations) ont été utilisées.`,
    imageURL: 'https://cdn.discordapp.com/emojis/490463553807974449.png?v=1&size=32'
  }, {
    id: 5,
    name: 'Médaille d\'argent',
    description: `Décernée aux soldats et officiers ayant fait un geste remarcable pour l'empire.`,
    imageURL: 'https://cdn.discordapp.com/emojis/490464974691631113.png?v=1&size=32'
  }, {
    id: 6,
    name: 'Médaille en chocolat',
    description: `Décernée pour avoir fait quelque chose de sympa.`,
    imageURL: 'https://cdn.discordapp.com/emojis/506176701043179522.png?v=1&size=32'
  }, {
    id: 7,
    name: 'Médaille de reconnaissance de la nation',
    description: `Permet de récompenser les militaires ayant pris part, pendant 90 jours aux opérations en Afrique du Nord`,
    imageURL: 'https://cdn.discordapp.com/emojis/564410499014590474.png?v=1&size=32'
  }, {
    id: 8,
    name: 'Croix de guerre des théâtres extérieurs',
    description: `La croix de guerre des Théâtres d'opérations extérieurs est une décoration française,
    conférée aux militaires et aux civils qui ont obtenu, pour fait de guerre,
    une ou plusieurs citations individuelles au cours d’opérations exécutées sur des théâtres d’opérations extérieurs`,
    imageURL: 'https://cdn.discordapp.com/emojis/564405895325286401.png?v=1&size=32'
  }, {
    id: 9,
    name: 'Croix de la valeur militaire',
    description: `les unités ayant accompli une ou des actions d'éclat en opérations extérieures.
    Elle peut également être attribuée à du personnel civil et militaire étranger
    et à des unités étrangères ayant accompli une action d'éclat au cours d'une mission aux côtés de militaires français`,
    imageURL: 'https://cdn.discordapp.com/emojis/564407531238064129.png?v=1&size=32'
  }, {
    id: 10,
    name: 'Médaille de la résistance',
    description: `Permet de reconnaître les actes remarquables de foi et de courage qui, en France, dans l'Empire et à l'étranger.`,
    imageURL: 'https://cdn.discordapp.com/emojis/564410544325394433.png?v=1&size=32'
  }, {
    id: 11,
    name: 'Médaille des évadés',
    description: `La médaille des évadés est une décoration militaire française,
    attribuée aux évadés français des lieux de détention ennemis depuis 1870`,
    imageURL: 'https://cdn.discordapp.com/emojis/564410521806438400.png?v=1&size=32'
  }, {
    id: 12,
    name: ' Médaille du combattant',
    description: `La croix du combattant est une décoration honorifique française à l'intention des grognard.`,
    imageURL: 'https://cdn.discordapp.com/emojis/564410462179950609.png?v=1&size=32'
  }, {
    id: 13,
    name: 'Médaille d\'honneur du service de sante des armées',
    description: `Il s'agit d'une médaille française d'honneur décernée à titre militaire au auxiliaire.`,
    imageURL: 'https://cdn.discordapp.com/emojis/564404812549193738.png?v=1&size=32'
  }, {
    id: 14,
    name: 'Médaille de sainte Hélène',
    description: `Honore par une disposition spéciale les militaires qui ont combattu sous les drapeaux de la
    France dans les grandes guerres de 1792 à 1815, une médaille commémorative fut accordée à tous les survivants.
    Il appela cette nouvelle décoration « Médaille de Sainte-Hélène »`,
    imageURL: 'https://cdn.discordapp.com/emojis/490462975493144576.png?v=1&size=32'
  }, {
    id: 15,
    name: 'Médaille de l\'Ordre du Lys',
    description: `Le 3 mai, le roi Louis XVIII arrive dans la capitale, accompagné de son frère Charles de France,
    comte d’Artois, futur Charles X. C’est alors que commencent à circuler dans un Paris rassuré
    et apaisé des petites médailles à l’effigie du nouveau roi et à fleurs de lys, suspendues par des rubans blancs.`,
    imageURL: 'https://cdn.discordapp.com/emojis/490478654866980864.png?v=1&size=32'
  }, {
    id: 16,
    name: 'Légion d\'Honneur avec rosace',
    description: `Désigne les excellents chevaliers de la légion.`,
    imageURL: 'https://cdn.discordapp.com/emojis/490464775810318337.png?v=1&size=32'
  }];

  all (): Observable<Medal[]> {
    return of(this.mockedMedals);
  }

  get (id: number): Observable<Medal> {
    const foundMedal = this.mockedMedals.find(medal => medal.id === parseInt(id.toString(), 10));
    if (foundMedal) {
      return of(foundMedal);
    }
    throw new Error('Medal not found with id=' + id);
  }
}
