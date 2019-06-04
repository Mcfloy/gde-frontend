import { DecorationService } from 'src/app/shared/services/decoration.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Decoration } from 'src/app/shared/models/decoration';

@Injectable()
export class MockDecorationService implements DecorationService {
  private readonly mockedDecorations: Decoration[] = [{
    id: 1,
    description: `Signe d'appartenance aux Grognards (obtenu a partir de fusiller)`,
    imageURL: 'https://cdn.discordapp.com/emojis/490463750202327051.png?v=1&size=32'
  }, {
    id: 2,
    description: `Le triptyque de l'officier des Grognards (sous officier et officier compris)`,
    imageURL: 'https://cdn.discordapp.com/emojis/472025303309484043.png?v=1&size=32'
  }, {
    id: 3,
    description: `Le triptyque de l'officier des Grognards (sous officier et officier compris)`,
    imageURL: 'https://cdn.discordapp.com/emojis/472040303403204608.png?v=1&size=32'
  }, {
    id: 4,
    description: `Le triptyque de l'officier des Grognards (sous officier et officier compris)`,
    imageURL: 'https://cdn.discordapp.com/emojis/473955842182479894.png?v=1&size=32'
  }, {
    id: 5,
    description: `Objet réservé au maréchal`,
    imageURL: 'https://cdn.discordapp.com/emojis/490464157397811202.png?v=1&size=32'
  }, {
    id: 6,
    description: `Insigne du Porte Aigle Major`,
    imageURL: 'https://cdn.discordapp.com/emojis/471424881939185675.png?v=1&size=32'
  }, {
    id: 7,
    description: `Insigne du Porte Aigle Major`,
    imageURL: 'https://cdn.discordapp.com/emojis/490462995177275413.png?v=1&size=32'
  }, {
    id: 8,
    description: `Objet décerné aux chasseurs vétérans`,
    imageURL: 'https://cdn.discordapp.com/emojis/472031121996120064.png?v=1&size=32'
  }, {
    id: 9,
    description: `Collier décerné au chancelier`,
    imageURL: 'https://cdn.discordapp.com/emojis/490463989977841665.png?v=1&size=32'
  }, {
    id: 10,
    description: `Tu es un bon soldat donc tu as le shako d'or ( dans la moyenne garde )`,
    imageURL: 'https://cdn.discordapp.com/emojis/471965653113503745.png?v=1&size=32'
  }, {
    id: 11,
    description: `Tu es le fleuron de la vieille garde (vétéran) bravo a toi`,
    imageURL: 'https://cdn.discordapp.com/emojis/491939960094588928.png?v=1&size=32'
  }, {
    id: 12,
    description: `Tu es un grenadier de la vieille garde`,
    imageURL: 'https://cdn.discordapp.com/emojis/491942669132496896.png?v=1&size=32'
  }, {
    id: 13,
    description: `Tu es flutiste donc tu as ta flûte`,
    imageURL: 'https://cdn.discordapp.com/emojis/490465326912372746.png?v=1&size=32'
  }, {
    id: 14,
    description: `Un tambour pour le tambouriniste`,
    imageURL: 'https://cdn.discordapp.com/emojis/490494881098235906.png?v=1&size=32'
  }, {
    id: 15,
    description: `Tu es un porte étendard`,
    imageURL: 'https://cdn.discordapp.com/emojis/479413424451878913.png?v=1&size=32'
  }, {
    id: 16,
    description: `Tu es un artilleur`,
    imageURL: 'https://cdn.discordapp.com/emojis/490463371087577108.png?v=1&size=32'
  }, {
    id: 17,
    description: `Tu es un bon tirailleur (1ère classe)`,
    imageURL: 'https://cdn.discordapp.com/emojis/471962597391073302.png?v=1&size=32'
  }, {
    id: 18,
    description: `Tu es un tirailleur bravo (2e classe)`,
    imageURL: 'https://cdn.discordapp.com/emojis/490498152848424960.png?v=1&size=32'
  }, {
    id: 19,
    description: `Tu fais parti de l'élite`,
    imageURL: 'https://cdn.discordapp.com/emojis/471444733298868248.png?v=1&size=32'
  }];

  all (): Observable<Decoration[]> {
    return of(this.mockedDecorations);
  }

  get (id: number): Observable<Decoration> {
    const foundDecoration = this.mockedDecorations.find(decoration => decoration.id === parseInt(id.toString(), 10));
    if (foundDecoration) {
      return of(foundDecoration);
    }
    throw new Error('Decoration not found with id=' + id);
  }
}
