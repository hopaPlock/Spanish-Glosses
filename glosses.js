export let glosses = [
    {
        swedish: 'katten (hane)',
        spanish: 'el gato',
        english: 'the cat'
    },
    {
        swedish: 'hunden (hane)',
        spanish: 'el perro',
        english: 'the dog'
    },
    {
        swedish: 'att tala',
        spanish: 'hablar',
        english: 'to speak'
    },
    {
        swedish: 'jag talar',
        spanish: 'hablo',
        english: 'I speak' 
    },
    {
        swedish: 'fritiden',
        spanish: 'el tiempo libre',
        english: 'the spare time' 
    },
    {
        swedish: 'jag stiger upp',
        spanish: 'me levanto',
        english: 'I speak' 
    },
    {
        swedish: 'sedan',
        spanish: 'luego',
        english: 'I speak' 
    },
    {
        swedish: 'jag går ut',
        spanish: 'salgo',
        english: 'I speak' 
    },
    {
        swedish: 'du gör',
        spanish: 'haces',
        english: 'I speak' 
    },
    {
        swedish: 'jag talar',
        spanish: 'hablo',
        english: 'I speak' 
    }
]

export let verbs = [
    {
        swedish: 'att tala',
        spanish: 'hablar',
        present: {
            jag: {spanish: 'hablo', swedish: 'jag talar'},
            du: {spanish: 'hablas', swedish: 'du talar'},
            han_hon_den_det: {spanish: 'habla', swedish: 'han/hon/den/det talar'},
            vi: {spanish: 'hablamos', swedish: 'vi talar'},
            ni: {spanish: 'habláis', swedish: 'ni talar'},
            de: {spanish: 'hablan', swedish: 'de talar'}
        },
        perfect: {
            jag: {spanish: 'he hablado', swedish: 'jag har talat'},
            du: {spanish: 'has hablado', swedish: 'du har talat'},
            han_hon_den_det: {spanish: 'ha hablado', swedish: 'han/hon/den/det har talat'},
            vi: {spanish: 'hemos hablado', swedish: 'vi har talat'},
            ni: {spanish: 'habéis hablado', swedish: 'ni har talat'},
            de: {spanish: 'han hablado', swedish: 'de har talat'}
        }
    },
    {
        swedish: 'att vara (permanent)',
        spanish: 'ser',
        present: {
            jag: {spanish: 'soy', swedish: 'jag är'},
            du: {spanish: 'eres', swedish: 'du är'},
            han_hon_den_det: {spanish: 'es', swedish: 'han/hon/den/det är'},
            vi: {spanish: 'somos', swedish: 'vi är'},
            ni: {spanish: 'sois', swedish: 'ni är'},
            de: {spanish: 'son', swedish: 'de är'}
        },
        perfect: {
            jag: {spanish: 'he sido', swedish: 'jag har varit'},
            du: {spanish: 'has sido', swedish: 'du har varit'},
            han_hon_den_det: {spanish: 'ha sido', swedish: 'han/hon/den/det har varit'},
            vi: {spanish: 'hemos sido', swedish: 'vi har varit'},
            ni: {spanish: 'habéis sido', swedish: 'ni har varit'},
            de: {spanish: 'han sido', swedish: 'de har varit'}
        }
    },
    {
        swedish: 'att vara (tillfälligt)',
        spanish: 'estar',
        present: {
            jag: {spanish: 'estoy', swedish: 'jag är'},
            du: {spanish: 'estás', swedish: 'du är'},
            han_hon_den_det: {spanish: 'está', swedish: 'han/hon/den/det är'},
            vi: {spanish: 'estamos', swedish: 'vi är'},
            ni: {spanish: 'estáis', swedish: 'ni är'},
            de: {spanish: 'están', swedish: 'de är'}
        },
        perfect: {
            jag: {spanish: 'he estado', swedish: 'jag har varit'},
            du: {spanish: 'has estado', swedish: 'du har varit'},
            han_hon_den_det: {spanish: 'ha estado', swedish: 'han/hon/den/det har varit'},
            vi: {spanish: 'hemos estado', swedish: 'vi har varit'},
            ni: {spanish: 'habéis estado', swedish: 'ni har varit'},
            de: {spanish: 'han estado', swedish: 'de har varit'}
        }
    },
    {
        swedish: 'att ha (hjälpverb)',
        spanish: 'haber',
        present: {
            jag: {spanish: 'he', swedish: 'jag har'},
            du: {spanish: 'has', swedish: 'du har'},
            han_hon_den_det: {spanish: 'ha', swedish: 'han/hon/den/det har'},
            vi: {spanish: 'hemos', swedish: 'vi har'},
            ni: {spanish: 'habéis', swedish: 'ni har'},
            de: {spanish: 'han', swedish: 'de har'}
        },
        perfect: {
            jag: {spanish: 'he habido', swedish: 'jag har haft'},
            du: {spanish: 'has habido', swedish: 'du har haft'},
            han_hon_den_det: {spanish: 'ha habido', swedish: 'han/hon/den/det har haft'},
            vi: {spanish: 'hemos habido', swedish: 'vi har haft'},
            ni: {spanish: 'habéis habido', swedish: 'ni har haft'},
            de: {spanish: 'han habido', swedish: 'de har haft'}
        }
    },
    {
        swedish: 'att ha',
        spanish: 'tener',
        present: {
            jag: {spanish: 'tengo', swedish: 'jag har'},
            du: {spanish: 'tienes', swedish: 'du har'},
            han_hon_den_det: {spanish: 'tiene', swedish: 'han/hon/den/det har'},
            vi: {spanish: 'tenemos', swedish: 'vi har'},
            ni: {spanish: 'tenéis', swedish: 'ni har'},
            de: {spanish: 'tienen', swedish: 'de har'}
        },
        perfect: {
            jag: {spanish: 'he tenido', swedish: 'jag har haft'},
            du: {spanish: 'has tenido', swedish: 'du har haft'},
            han_hon_den_det: {spanish: 'ha tenido', swedish: 'han/hon/den/det har haft'},
            vi: {spanish: 'hemos tenido', swedish: 'vi har haft'},
            ni: {spanish: 'habéis tenido', swedish: 'ni har haft'},
            de: {spanish: 'han tenido', swedish: 'de har haft'}
        }
    },
    {
        swedish: 'att göra',
        spanish: 'hacer',
        present: {
            jag: {spanish: 'hago', swedish: 'jag gör'},
            du: {spanish: 'haces', swedish: 'du gör'},
            han_hon_den_det: {spanish: 'hace', swedish: 'han/hon/den/det gör'},
            vi: {spanish: 'hacemos', swedish: 'vi gör'},
            ni: {spanish: 'hacéis', swedish: 'ni gör'},
            de: {spanish: 'hacen', swedish: 'de gör'}
        },
        perfect: {
            jag: {spanish: 'he hecho', swedish: 'jag har gjort'},
            du: {spanish: 'has hecho', swedish: 'du har gjort'},
            han_hon_den_det: {spanish: 'ha hecho', swedish: 'han/hon/den/det har gjort'},
            vi: {spanish: 'hemos hecho', swedish: 'vi har gjort'},
            ni: {spanish: 'habéis hecho', swedish: 'ni har gjort'},
            de: {spanish: 'han hecho', swedish: 'de har gjort'}
        }
    },
    {
        swedish: 'att kunna',
        spanish: 'poder',
        present: {
            jag: {spanish: 'puedo', swedish: 'jag kan'},
            du: {spanish: 'puedes', swedish: 'du kan'},
            han_hon_den_det: {spanish: 'puede', swedish: 'han/hon/den/det kan'},
            vi: {spanish: 'podemos', swedish: 'vi kan'},
            ni: {spanish: 'podéis', swedish: 'ni kan'},
            de: {spanish: 'pueden', swedish: 'de kan'}
        },
        perfect: {
            jag: {spanish: 'he podido', swedish: 'jag har kunnat'},
            du: {spanish: 'has podido', swedish: 'du har kunnat'},
            han_hon_den_det: {spanish: 'ha podido', swedish: 'han/hon/den/det har kunnat'},
            vi: {spanish: 'hemos podido', swedish: 'vi har kunnat'},
            ni: {spanish: 'habéis podido', swedish: 'ni har kunnat'},
            de: {spanish: 'han podido', swedish: 'de har kunnat'}
        }
    },
    {
        swedish: 'att säga',
        spanish: 'decir',
        present: {
            jag: {spanish: 'digo', swedish: 'jag säger'},
            du: {spanish: 'dices', swedish: 'du säger'},
            han_hon_den_det: {spanish: 'dice', swedish: 'han/hon/den/det säger'},
            vi: {spanish: 'decimos', swedish: 'vi säger'},
            ni: {spanish: 'decís', swedish: 'ni säger'},
            de: {spanish: 'dicen', swedish: 'de säger'}
        },
        perfect: {
            jag: {spanish: 'he dicho', swedish: 'jag har sagt'},
            du: {spanish: 'has dicho', swedish: 'du har sagt'},
            han_hon_den_det: {spanish: 'ha dicho', swedish: 'han/hon/den/det har sagt'},
            vi: {spanish: 'hemos dicho', swedish: 'vi har sagt'},
            ni: {spanish: 'habéis dicho', swedish: 'ni har sagt'},
            de: {spanish: 'han dicho', swedish: 'de har sagt'}
        }
    },
    {
        swedish: 'att tala',
        spanish: 'hablar',
        present: {
            jag: {spanish: 'hablo', swedish: 'jag talar'},
            du: {spanish: 'hablas', swedish: 'du talar'},
            han_hon_den_det: {spanish: 'habla', swedish: 'han/hon/den/det talar'},
            vi: {spanish: 'hablamos', swedish: 'vi talar'},
            ni: {spanish: 'habláis', swedish: 'ni talar'},
            de: {spanish: 'hablan', swedish: 'de talar'}
        },
        perfect: {
            jag: {spanish: 'he hablado', swedish: 'jag har talat'},
            du: {spanish: 'has hablado', swedish: 'du har talat'},
            han_hon_den_det: {spanish: 'ha hablado', swedish: 'han/hon/den/det har talat'},
            vi: {spanish: 'hemos hablado', swedish: 'vi har talat'},
            ni: {spanish: 'habéis hablado', swedish: 'ni har talat'},
            de: {spanish: 'han hablado', swedish: 'de har talat'}
        }
    },
    {
        swedish: 'att vara (permanent)',
        spanish: 'ser',
        present: {
            jag: {spanish: 'soy', swedish: 'jag är'},
            du: {spanish: 'eres', swedish: 'du är'},
            han_hon_den_det: {spanish: 'es', swedish: 'han/hon/den/det är'},
            vi: {spanish: 'somos', swedish: 'vi är'},
            ni: {spanish: 'sois', swedish: 'ni är'},
            de: {spanish: 'son', swedish: 'de är'}
        },
        perfect: {
            jag: {spanish: 'he sido', swedish: 'jag har varit'},
            du: {spanish: 'has sido', swedish: 'du har varit'},
            han_hon_den_det: {spanish: 'ha sido', swedish: 'han/hon/den/det har varit'},
            vi: {spanish: 'hemos sido', swedish: 'vi har varit'},
            ni: {spanish: 'habéis sido', swedish: 'ni har varit'},
            de: {spanish: 'han sido', swedish: 'de har varit'}
        }
    },
    {
        swedish: 'att vara (tillfälligt)',
        spanish: 'estar',
        present: {
            jag: {spanish: 'estoy', swedish: 'jag är'},
            du: {spanish: 'estás', swedish: 'du är'},
            han_hon_den_det: {spanish: 'está', swedish: 'han/hon/den/det är'},
            vi: {spanish: 'estamos', swedish: 'vi är'},
            ni: {spanish: 'estáis', swedish: 'ni är'},
            de: {spanish: 'están', swedish: 'de är'}
        },
        perfect: {
            jag: {spanish: 'he estado', swedish: 'jag har varit'},
            du: {spanish: 'has estado', swedish: 'du har varit'},
            han_hon_den_det: {spanish: 'ha estado', swedish: 'han/hon/den/det har varit'},
            vi: {spanish: 'hemos estado', swedish: 'vi har varit'},
            ni: {spanish: 'habéis estado', swedish: 'ni har varit'},
            de: {spanish: 'han estado', swedish: 'de har varit'}
        }
    },
    {
        swedish: 'att ha (hjälpverb)',
        spanish: 'haber',
        present: {
            jag: {spanish: 'he', swedish: 'jag har'},
            du: {spanish: 'has', swedish: 'du har'},
            han_hon_den_det: {spanish: 'ha', swedish: 'han/hon/den/det har'},
            vi: {spanish: 'hemos', swedish: 'vi har'},
            ni: {spanish: 'habéis', swedish: 'ni har'},
            de: {spanish: 'han', swedish: 'de har'}
        },
        perfect: {
            jag: {spanish: 'he habido', swedish: 'jag har haft'},
            du: {spanish: 'has habido', swedish: 'du har haft'},
            han_hon_den_det: {spanish: 'ha habido', swedish: 'han/hon/den/det har haft'},
            vi: {spanish: 'hemos habido', swedish: 'vi har haft'},
            ni: {spanish: 'habéis habido', swedish: 'ni har haft'},
            de: {spanish: 'han habido', swedish: 'de har haft'}
        }
    },
    {
        swedish: 'att ha',
        spanish: 'tener',
        present: {
            jag: {spanish: 'tengo', swedish: 'jag har'},
            du: {spanish: 'tienes', swedish: 'du har'},
            han_hon_den_det: {spanish: 'tiene', swedish: 'han/hon/den/det har'},
            vi: {spanish: 'tenemos', swedish: 'vi har'},
            ni: {spanish: 'tenéis', swedish: 'ni har'},
            de: {spanish: 'tienen', swedish: 'de har'}
        },
        perfect: {
            jag: {spanish: 'he tenido', swedish: 'jag har haft'},
            du: {spanish: 'has tenido', swedish: 'du har haft'},
            han_hon_den_det: {spanish: 'ha tenido', swedish: 'han/hon/den/det har haft'},
            vi: {spanish: 'hemos tenido', swedish: 'vi har haft'},
            ni: {spanish: 'habéis tenido', swedish: 'ni har haft'},
            de: {spanish: 'han tenido', swedish: 'de har haft'}
        }
    },
    {
        swedish: 'att göra',
        spanish: 'hacer',
        present: {
            jag: {spanish: 'hago', swedish: 'jag gör'},
            du: {spanish: 'haces', swedish: 'du gör'},
            han_hon_den_det: {spanish: 'hace', swedish: 'han/hon/den/det gör'},
            vi: {spanish: 'hacemos', swedish: 'vi gör'},
            ni: {spanish: 'hacéis', swedish: 'ni gör'},
            de: {spanish: 'hacen', swedish: 'de gör'}
        },
        perfect: {
            jag: {spanish: 'he hecho', swedish: 'jag har gjort'},
            du: {spanish: 'has hecho', swedish: 'du har gjort'},
            han_hon_den_det: {spanish: 'ha hecho', swedish: 'han/hon/den/det har gjort'},
            vi: {spanish: 'hemos hecho', swedish: 'vi har gjort'},
            ni: {spanish: 'habéis hecho', swedish: 'ni har gjort'},
            de: {spanish: 'han hecho', swedish: 'de har gjort'}
        }
    },
    {
        swedish: 'att kunna',
        spanish: 'poder',
        present: {
            jag: {spanish: 'puedo', swedish: 'jag kan'},
            du: {spanish: 'puedes', swedish: 'du kan'},
            han_hon_den_det: {spanish: 'puede', swedish: 'han/hon/den/det kan'},
            vi: {spanish: 'podemos', swedish: 'vi kan'},
            ni: {spanish: 'podéis', swedish: 'ni kan'},
            de: {spanish: 'pueden', swedish: 'de kan'}
        },
        perfect: {
            jag: {spanish: 'he podido', swedish: 'jag har kunnat'},
            du: {spanish: 'has podido', swedish: 'du har kunnat'},
            han_hon_den_det: {spanish: 'ha podido', swedish: 'han/hon/den/det har kunnat'},
            vi: {spanish: 'hemos podido', swedish: 'vi har kunnat'},
            ni: {spanish: 'habéis podido', swedish: 'ni har kunnat'},
            de: {spanish: 'han podido', swedish: 'de har kunnat'}
        }
    },
    {
        swedish: 'att säga',
        spanish: 'decir',
        present: {
            jag: {spanish: 'digo', swedish: 'jag säger'},
            du: {spanish: 'dices', swedish: 'du säger'},
            han_hon_den_det: {spanish: 'dice', swedish: 'han/hon/den/det säger'},
            vi: {spanish: 'decimos', swedish: 'vi säger'},
            ni: {spanish: 'decís', swedish: 'ni säger'},
            de: {spanish: 'dicen', swedish: 'de säger'}
        },
        perfect: {
            jag: {spanish: 'he dicho', swedish: 'jag har sagt'},
            du: {spanish: 'has dicho', swedish: 'du har sagt'},
            han_hon_den_det: {spanish: 'ha dicho', swedish: 'han/hon/den/det har sagt'},
            vi: {spanish: 'hemos dicho', swedish: 'vi har sagt'},
            ni: {spanish: 'habéis dicho', swedish: 'ni har sagt'},
            de: {spanish: 'han dicho', swedish: 'de har sagt'}
        }
    },





    {
        swedish: 'att gå/åka',
        spanish: 'ir',
        present: {
            jag: {spanish: 'voy', swedish: 'jag går/åker'},
            du: {spanish: 'vas', swedish: 'du går/åker'},
            han_hon_den_det: {spanish: 'va', swedish: 'han/hon/den/det går/åker'},
            vi: {spanish: 'vamos', swedish: 'vi går/åker'},
            ni: {spanish: 'vais', swedish: 'ni går/åker'},
            de: {spanish: 'van', swedish: 'de går/åker'}
        },
        perfect: {
            jag: {spanish: 'he ido', swedish: 'jag har gått/åkt'},
            du: {spanish: 'has ido', swedish: 'du har gått/åkt'},
            han_hon_den_det: {spanish: 'ha ido', swedish: 'han/hon/den/det har gått/åkt'},
            vi: {spanish: 'hemos ido', swedish: 'vi har gått/åkt'},
            ni: {spanish: 'habéis ido', swedish: 'ni har gått/åkt'},
            de: {spanish: 'han ido', swedish: 'de har gått/åkt'}
        }
    },
    {
        swedish: 'att se',
        spanish: 'ver',
        present: {
            jag: {spanish: 'veo', swedish: 'jag ser'},
            du: {spanish: 'ves', swedish: 'du ser'},
            han_hon_den_det: {spanish: 've', swedish: 'han/hon/den/det ser'},
            vi: {spanish: 'vemos', swedish: 'vi ser'},
            ni: {spanish: 'veis', swedish: 'ni ser'},
            de: {spanish: 'ven', swedish: 'de ser'}
        },
        perfect: {
            jag: {spanish: 'he visto', swedish: 'jag har sett'},
            du: {spanish: 'has visto', swedish: 'du har sett'},
            han_hon_den_det: {spanish: 'ha visto', swedish: 'han/hon/den/det har sett'},
            vi: {spanish: 'hemos visto', swedish: 'vi har sett'},
            ni: {spanish: 'habéis visto', swedish: 'ni har sett'},
            de: {spanish: 'han visto', swedish: 'de har sett'}
        }
    },
    {
        swedish: 'att veta',
        spanish: 'saber',
        present: {
            jag: {spanish: 'sé', swedish: 'jag vet'},
            du: {spanish: 'sabes', swedish: 'du vet'},
            han_hon_den_det: {spanish: 'sabe', swedish: 'han/hon/den/det vet'},
            vi: {spanish: 'sabemos', swedish: 'vi vet'},
            ni: {spanish: 'sabéis', swedish: 'ni vet'},
            de: {spanish: 'saben', swedish: 'de vet'}
        },
        perfect: {
            jag: {spanish: 'he sabido', swedish: 'jag har vetat'},
            du: {spanish: 'has sabido', swedish: 'du har vetat'},
            han_hon_den_det: {spanish: 'ha sabido', swedish: 'han/hon/den/det har vetat'},
            vi: {spanish: 'hemos sabido', swedish: 'vi har vetat'},
            ni: {spanish: 'habéis sabido', swedish: 'ni har vetat'},
            de: {spanish: 'han sabido', swedish: 'de har vetat'}
        }
    },
    {
        swedish: 'att komma',
        spanish: 'venir',
        present: {
            jag: {spanish: 'vengo', swedish: 'jag kommer'},
            du: {spanish: 'vienes', swedish: 'du kommer'},
            han_hon_den_det: {spanish: 'viene', swedish: 'han/hon/den/det kommer'},
            vi: {spanish: 'venimos', swedish: 'vi kommer'},
            ni: {spanish: 'venís', swedish: 'ni kommer'},
            de: {spanish: 'vienen', swedish: 'de kommer'}
        },
        perfect: {
            jag: {spanish: 'he venido', swedish: 'jag har kommit'},
            du: {spanish: 'has venido', swedish: 'du har kommit'},
            han_hon_den_det: {spanish: 'ha venido', swedish: 'han/hon/den/det har kommit'},
            vi: {spanish: 'hemos venido', swedish: 'vi har kommit'},
            ni: {spanish: 'habéis venido', swedish: 'ni har kommit'},
            de: {spanish: 'han venido', swedish: 'de har kommit'}
        }
    },
    {
        swedish: 'att ge',
        spanish: 'dar',
        present: {
            jag: {spanish: 'doy', swedish: 'jag ger'},
            du: {spanish: 'das', swedish: 'du ger'},
            han_hon_den_det: {spanish: 'da', swedish: 'han/hon/den/det ger'},
            vi: {spanish: 'damos', swedish: 'vi ger'},
            ni: {spanish: 'dais', swedish: 'ni ger'},
            de: {spanish: 'dan', swedish: 'de ger'}
        },
        perfect: {
            jag: {spanish: 'he dado', swedish: 'jag har gett'},
            du: {spanish: 'has dado', swedish: 'du har gett'},
            han_hon_den_det: {spanish: 'ha dado', swedish: 'han/hon/den/det har gett'},
            vi: {spanish: 'hemos dado', swedish: 'vi har gett'},
            ni: {spanish: 'habéis dado', swedish: 'ni har gett'},
            de: {spanish: 'han dado', swedish: 'de har gett'}
        }
    },
    {
        swedish: 'att vilja',
        spanish: 'querer',
        present: {
            jag: {spanish: 'quiero', swedish: 'jag vill'},
            du: {spanish: 'quieres', swedish: 'du vill'},
            han_hon_den_det: {spanish: 'quiere', swedish: 'han/hon/den/det vill'},
            vi: {spanish: 'queremos', swedish: 'vi vill'},
            ni: {spanish: 'queréis', swedish: 'ni vill'},
            de: {spanish: 'quieren', swedish: 'de vill'}
        },
        perfect: {
            jag: {spanish: 'he querido', swedish: 'jag har velat'},
            du: {spanish: 'has querido', swedish: 'du har velat'},
            han_hon_den_det: {spanish: 'ha querido', swedish: 'han/hon/den/det har velat'},
            vi: {spanish: 'hemos querido', swedish: 'vi har velat'},
            ni: {spanish: 'habéis querido', swedish: 'ni har velat'},
            de: {spanish: 'han querido', swedish: 'de har velat'}
        }
    },
    {
        swedish: 'att behöva',
        spanish: 'necesitar',
        present: {
            jag: {spanish: 'necesito', swedish: 'jag behöver'},
            du: {spanish: 'necesitas', swedish: 'du behöver'},
            han_hon_den_det: {spanish: 'necesita', swedish: 'han/hon/den/det behöver'},
            vi: {spanish: 'necesitamos', swedish: 'vi behöver'},
            ni: {spanish: 'necesitáis', swedish: 'ni behöver'},
            de: {spanish: 'necesitan', swedish: 'de behöver'}
        },
        perfect: {
            jag: {spanish: 'he necesitado', swedish: 'jag har behövt'},
            du: {spanish: 'has necesitado', swedish: 'du har behövt'},
            han_hon_den_det: {spanish: 'ha necesitado', swedish: 'han/hon/den/det har behövt'},
            vi: {spanish: 'hemos necesitado', swedish: 'vi har behövt'},
            ni: {spanish: 'habéis necesitado', swedish: 'ni har behövt'},
            de: {spanish: 'han necesitado', swedish: 'de har behövt'}
        }
    },
    {
        swedish: 'att tro',
        spanish: 'creer',
        present: {
            jag: {spanish: 'creo', swedish: 'jag tror'},
            du: {spanish: 'crees', swedish: 'du tror'},
            han_hon_den_det: {spanish: 'cree', swedish: 'han/hon/den/det tror'},
            vi: {spanish: 'creemos', swedish: 'vi tror'},
            ni: {spanish: 'creéis', swedish: 'ni tror'},
            de: {spanish: 'creen', swedish: 'de tror'}
        },
        perfect: {
            jag: {spanish: 'he creído', swedish: 'jag har trott'},
            du: {spanish: 'has creído', swedish: 'du har trott'},
            han_hon_den_det: {spanish: 'ha creído', swedish: 'han/hon/den/det har trott'},
            vi: {spanish: 'hemos creído', swedish: 'vi har trott'},
            ni: {spanish: 'habéis creído', swedish: 'ni har trott'},
            de: {spanish: 'han creído', swedish: 'de har trott'}
        }
    }
]

export let timeOfDay = [
    {
        swedish: 'Klockan är ett',
        spanish: 'Es la una'
    },
    {
        swedish: 'Klockan är kvart över ett',
        spanish: 'Es la una y cuarto'
    },
    {
        swedish: 'Klockan är halv två',
        spanish: 'Es la una y media'
    },
    {
        swedish: 'Klockan är kvart i två',
        spanish: 'Son las dos menos cuarto'
    },
    {
        swedish: 'Klockan är två',
        spanish: 'Son las dos'
    },
    {
        swedish: 'Klockan är kvart över två',
        spanish: 'Son las dos y cuarto'
    },
    {
        swedish: 'Klockan är halv tre',
        spanish: 'Son las dos y media'
    },
    {
        swedish: 'Klockan är kvart i tre',
        spanish: 'Son las tres menos cuarto'
    },
    {
        swedish: 'Klockan är tre',
        spanish: 'Son las tres'
    },
    {
        swedish: 'Klockan är kvart över tre',
        spanish: 'Son las tres y cuarto'
    },
    {
        swedish: 'Klockan är halv fyra',
        spanish: 'Son las tres y media'
    },
    {
        swedish: 'Klockan är kvart i fyra',
        spanish: 'Son las cuatro menos cuarto'
    },
    {
        swedish: 'Klockan är fyra',
        spanish: 'Son las cuatro'
    },
    {
        swedish: 'Klockan är kvart över fyra',
        spanish: 'Son las cuatro y cuarto'
    },
    {
        swedish: 'Klockan är halv fem',
        spanish: 'Son las cuatro y media'
    },
    {
        swedish: 'Klockan är kvart i fem',
        spanish: 'Son las cinco menos cuarto'
    },
    {
        swedish: 'Klockan är fem',
        spanish: 'Son las cinco'
    },
    {
        swedish: 'Klockan är kvart över fem',
        spanish: 'Son las cinco y cuarto'
    },
    {
        swedish: 'Klockan är halv sex',
        spanish: 'Son las cinco y media'
    },
    {
        swedish: 'Klockan är kvart i sex',
        spanish: 'Son las seis menos cuarto'
    },
    {
        swedish: 'Klockan är sex',
        spanish: 'Son las seis'
    },
    {
        swedish: 'Klockan är kvart över sex',
        spanish: 'Son las seis y cuarto'
    },
    {
        swedish: 'Klockan är halv sju',
        spanish: 'Son las seis y media'
    },
    {
        swedish: 'Klockan är kvart i sju',
        spanish: 'Son las siete menos cuarto'
    },
    {
        swedish: 'Klockan är sju',
        spanish: 'Son las siete'
    },
    {
        swedish: 'Klockan är kvart över sju',
        spanish: 'Son las siete y cuarto'
    },
    {
        swedish: 'Klockan är halv åtta',
        spanish: 'Son las siete y media'
    },
    {
        swedish: 'Klockan är kvart i åtta',
        spanish: 'Son las ocho menos cuarto'
    },
    {
        swedish: 'Klockan är åtta',
        spanish: 'Son las ocho'
    },
    {
        swedish: 'Klockan är kvart över åtta',
        spanish: 'Son las ocho y cuarto'
    },
    {
        swedish: 'Klockan är halv nio',
        spanish: 'Son las ocho y media'
    },
    {
        swedish: 'Klockan är kvart i nio',
        spanish: 'Son las nueve menos cuarto'
    },
    {
        swedish: 'Klockan är nio',
        spanish: 'Son las nueve'
    },
    {
        swedish: 'Klockan är kvart över nio',
        spanish: 'Son las nueve y cuarto'
    },
    {
        swedish: 'Klockan är halv tio',
        spanish: 'Son las nueve y media'
    },
    {
        swedish: 'Klockan är kvart i tio',
        spanish: 'Son las diez menos cuarto'
    },
    {
        swedish: 'Klockan är tio',
        spanish: 'Son las diez'
    },
    {
        swedish: 'Klockan är kvart över tio',
        spanish: 'Son las diez y cuarto'
    },
    {
        swedish: 'Klockan är halv elva',
        spanish: 'Son las diez y media'
    },
    {
        swedish: 'Klockan är kvart i elva',
        spanish: 'Son las once menos cuarto'
    },
    {
        swedish: 'Klockan är tolv',
        spanish: 'Son las doce'
    },
    {
        swedish: 'Klockan är kvart över tolv',
        spanish: 'Son las doce y cuarto'
    },
    {
        swedish: 'Klockan är halv ett',
        spanish: 'Son las doce y media'
    },
    {
        swedish: 'Klockan är kvart i ett',
        spanish: 'Es la una menos cuarto'
    },
    {
        swedish: 'Klockan är midnatt',
        spanish: 'Es medianoche'
    },
    {
        swedish: 'Klockan är tolv på dagen',
        spanish: 'Es mediodía'
    },
    {
        swedish: 'Klockan är fem över ett',
        spanish: 'Es la una y cinco'
    },
    {
        swedish: 'Klockan är fem i två',
        spanish: 'Son las dos menos cinco'
    },
    {
        swedish: 'Klockan är tio över tre',
        spanish: 'Son las tres y diez'
    },
    {
        swedish: 'Klockan är tio i fyra',
        spanish: 'Son las cuatro menos diez'
    },
    {
        swedish: 'Klockan är tjugo över fem',
        spanish: 'Son las cinco y veinte'
    },
    {
        swedish: 'Klockan är tjugo i sex',
        spanish: 'Son las seis menos veinte'
    },
    {
        swedish: 'Klockan är tjugofem över sju',
        spanish: 'Son las siete y veinticinco'
    },
    {
        swedish: 'Klockan är tjugofem i åtta',
        spanish: 'Son las ocho menos veinticinco'
    },
    {
        swedish: 'Klockan är fem över nio',
        spanish: 'Son las nueve y cinco'
    },
    {
        swedish: 'Klockan är fem i tio',
        spanish: 'Son las diez menos cinco'
    },
    {
        swedish: 'Klockan är tio över elva',
        spanish: 'Son las once y diez'
    },
    {
        swedish: 'Klockan är tio i tolv',
        spanish: 'Son las doce menos diez'
    },
    {
        swedish: 'Klockan är tjugo över ett',
        spanish: 'Es la una y veinte'
    },
    {
        swedish: 'Klockan är tjugo i två',
        spanish: 'Son las dos menos veinte'
    },
    {
        swedish: 'Klockan är tjugofem över tre',
        spanish: 'Son las tres y veinticinco'
    },
    {
        swedish: 'Klockan är tjugofem i fyra',
        spanish: 'Son las cuatro menos veinticinco'
    }
]
   
export let irSentences = [
    {
        swedish: 'jag går till skolan',
        spanish: 'voy a la escuela'
    },
    {
        swedish: 'du går till jobbet',
        spanish: 'vas al trabajo'
    },
    {
        swedish: 'han går till parken',
        spanish: 'va al parque'
    },
    {
        swedish: 'hon går till affären',
        spanish: 'va a la tienda'
    },
    {
        swedish: 'vi går till stranden',
        spanish: 'vamos a la playa'
    },
    {
        swedish: 'ni går till restaurangen',
        spanish: 'vais al restaurante'
    },
    {
        swedish: 'de går till bion',
        spanish: 'van al cine'
    },
    {
        swedish: 'jag går till gymmet',
        spanish: 'voy al gimnasio'
    },
    {
        swedish: 'du går till biblioteket',
        spanish: 'vas a la biblioteca'
    },
    {
        swedish: 'han går hem',
        spanish: 'va a casa'
    },
    {
        swedish: 'hon går till doktorn',
        spanish: 'va al médico'
    },
    {
        swedish: 'vi går till museet',
        spanish: 'vamos al museo'
    },
    {
        swedish: 'ni går till teatern',
        spanish: 'vais al teatro'
    },
    {
        swedish: 'de går till skogen',
        spanish: 'van al bosque'
    },
    {
        swedish: 'jag går till staden',
        spanish: 'voy a la ciudad'
    },
    {
        swedish: 'du går till flygplatsen',
        spanish: 'vas al aeropuerto'
    },
    {
        swedish: 'han går till sjukhuset',
        spanish: 'va al hospital'
    },
    {
        swedish: 'hon går till frisören',
        spanish: 'va a la peluquería'
    },
    {
        swedish: 'vi går till festen',
        spanish: 'vamos a la fiesta'
    },
    {
        swedish: 'ni går till stationen',
        spanish: 'vais a la estación'
    }
]

export let saberSentences = [
    {
        swedish: 'jag vet det',
        spanish: 'lo sé'
    },
    {
        swedish: 'du vet det',
        spanish: 'lo sabes'
    },
    {
        swedish: 'han vet det',
        spanish: 'lo sabe'
    },
    {
        swedish: 'hon vet det',
        spanish: 'lo sabe'
    },
    {
        swedish: 'vi vet det',
        spanish: 'lo sabemos'
    },
    {
        swedish: 'ni vet det',
        spanish: 'lo sabéis'
    },
    {
        swedish: 'de vet det',
        spanish: 'lo saben'
    },
    {
        swedish: 'jag vet mitt namn',
        spanish: 'sé mi nombre'
    },
    {
        swedish: 'du vet ditt namn',
        spanish: 'sabes tu nombre'
    },
    {
        swedish: 'han vet sitt namn',
        spanish: 'sabe su nombre'
    },
    {
        swedish: 'hon vet sitt namn',
        spanish: 'sabe su nombre'
    },
    {
        swedish: 'vi vet vårt namn',
        spanish: 'sabemos nuestro nombre'
    },
    {
        swedish: 'ni vet ert namn',
        spanish: 'sabéis vuestro nombre'
    },
    {
        swedish: 'de vet sina namn',
        spanish: 'saben sus nombres'
    },
    {
        swedish: 'jag vet hur man simmar',
        spanish: 'sé nadar'
    },
    {
        swedish: 'du vet hur man springer',
        spanish: 'sabes correr'
    },
    {
        swedish: 'han vet hur man dansar',
        spanish: 'sabe bailar'
    },
    {
        swedish: 'hon vet hur man skriver',
        spanish: 'sabe escribir'
    },
    {
        swedish: 'vi vet hur man lagar mat',
        spanish: 'sabemos cocinar'
    },
    {
        swedish: 'ni vet hur man spelar',
        spanish: 'sabéis jugar'
    }
]

export let decirSentences = [
    {
        swedish: 'jag säger hej',
        spanish: 'digo hola'
    },
    {
        swedish: 'du säger tack',
        spanish: 'dices gracias'
    },
    {
        swedish: 'han säger hej då',
        spanish: 'dice adiós'
    },
    {
        swedish: 'hon säger ja',
        spanish: 'dice sí'
    },
    {
        swedish: 'vi säger god morgon',
        spanish: 'decimos buenos días'
    },
    {
        swedish: 'ni säger hej till läraren',
        spanish: 'decís hola al profesor'
    },
    {
        swedish: 'de säger nej',
        spanish: 'dicen no'
    },
    {
        swedish: 'jag säger mitt namn',
        spanish: 'digo mi nombre'
    },
    {
        swedish: 'du säger förlåt',
        spanish: 'dices lo siento'
    },
    {
        swedish: 'han säger att han är glad',
        spanish: 'dice que está feliz'
    },
    {
        swedish: 'hon säger sitt namn',
        spanish: 'dice su nombre'
    },
    {
        swedish: 'vi säger hej då till vännerna',
        spanish: 'decimos adiós a los amigos'
    },
    {
        swedish: 'ni säger att det är bra',
        spanish: 'decís que está bien'
    },
    {
        swedish: 'de säger god natt',
        spanish: 'dicen buenas noches'
    },
    {
        swedish: 'jag säger god eftermiddag',
        spanish: 'digo buenas tardes'
    },
    {
        swedish: 'du säger att du är här',
        spanish: 'dices que estás aquí'
    },
    {
        swedish: 'han säger god kväll',
        spanish: 'dice buenas noches'
    },
    {
        swedish: 'hon säger att hon är hemma',
        spanish: 'dice que está en casa'
    },
    {
        swedish: 'vi säger att vi är hungriga',
        spanish: 'decimos que tenemos hambre'
    },
    {
        swedish: 'ni säger att ni är trötta',
        spanish: 'decís que estáis cansados'
    }
]

export let tenerSentences = [
    {
        swedish: 'jag har en katt',
        spanish: 'tengo un gato'
    },
    {
        swedish: 'du har en bok',
        spanish: 'tienes un libro'
    },
    {
        swedish: 'han har en cykel',
        spanish: 'tiene una bicicleta'
    },
    {
        swedish: 'hon har ett hus',
        spanish: 'tiene una casa'
    },
    {
        swedish: 'vi har en bil',
        spanish: 'tenemos un coche'
    },
    {
        swedish: 'ni har en hund',
        spanish: 'tenéis un perro'
    },
    {
        swedish: 'de har en vän',
        spanish: 'tienen un amigo'
    },
    {
        swedish: 'jag har en penna',
        spanish: 'tengo un bolígrafo'
    },
    {
        swedish: 'du har ett äpple',
        spanish: 'tienes una manzana'
    },
    {
        swedish: 'han har en syster',
        spanish: 'tiene una hermana'
    },
    {
        swedish: 'hon har ett jobb',
        spanish: 'tiene un trabajo'
    },
    {
        swedish: 'vi har pengar',
        spanish: 'tenemos dinero'
    },
    {
        swedish: 'ni har vatten',
        spanish: 'tenéis agua'
    },
    {
        swedish: 'de har glass',
        spanish: 'tienen helado'
    },
    {
        swedish: 'jag har en fråga',
        spanish: 'tengo una pregunta'
    },
    {
        swedish: 'du har ett problem',
        spanish: 'tienes un problema'
    },
    {
        swedish: 'han har tid',
        spanish: 'tiene tiempo'
    },
    {
        swedish: 'hon har en vän',
        spanish: 'tiene una amiga'
    },
    {
        swedish: 'vi har en idé',
        spanish: 'tenemos una idea'
    },
    {
        swedish: 'ni har många böcker',
        spanish: 'tenéis muchos libros'
    }
]

export let clothesSentences = [
    {
        swedish: 'jag bär en röd tröja',
        spanish: 'llevo una camiseta roja'
    },
    {
        swedish: 'du har på dig en blå jacka',
        spanish: 'llevas una chaqueta azul'
    },
    {
        swedish: 'han bär svarta byxor',
        spanish: 'lleva unos pantalones negros'
    },
    {
        swedish: 'hon har på sig en vit klänning',
        spanish: 'lleva un vestido blanco'
    },
    {
        swedish: 'vi har på oss gröna skor',
        spanish: 'llevamos unos zapatos verdes'
    },
    {
        swedish: 'ni bär en gul hatt',
        spanish: 'lleváis un sombrero amarillo'
    },
    {
        swedish: 'de bär grå strumpor',
        spanish: 'llevan unos calcetines grises'
    },
    {
        swedish: 'jag har på mig en svart jacka',
        spanish: 'llevo una chaqueta negra'
    },
    {
        swedish: 'du bär en vit skjorta',
        spanish: 'llevas una camisa blanca'
    },
    {
        swedish: 'han har på sig bruna skor',
        spanish: 'lleva unos zapatos marrones'
    },
    {
        swedish: 'hon bär en röd kjol',
        spanish: 'lleva una falda roja'
    },
    {
        swedish: 'vi har på oss blå jeans',
        spanish: 'llevamos unos vaqueros azules'
    },
    {
        swedish: 'ni bär en grön tröja',
        spanish: 'lleváis un jersey verde'
    },
    {
        swedish: 'de har på sig vita skjortor',
        spanish: 'llevan unas camisas blancas'
    },
    {
        swedish: 'jag bär en brun kappa',
        spanish: 'llevo un abrigo marrón'
    },
    {
        swedish: 'du har på dig ett par svarta handskar',
        spanish: 'llevas unos guantes negros'
    },
    {
        swedish: 'han bär en gul tröja',
        spanish: 'lleva una camiseta amarilla'
    },
    {
        swedish: 'hon har på sig en blå kjol',
        spanish: 'lleva una falda azul'
    },
    {
        swedish: 'vi bär gröna hattar',
        spanish: 'llevamos unos sombreros verdes'
    },
    {
        swedish: 'ni har på er röda skor',
        spanish: 'lleváis unos zapatos rojos'
    },
    {
        swedish: 'jag vill bära en röd tröja',
        spanish: 'quiero llevar una camiseta roja'
    },
    {
        swedish: 'du vill ha på dig en blå jacka',
        spanish: 'quieres llevar una chaqueta azul'
    },
    {
        swedish: 'han vill bära svarta byxor',
        spanish: 'quiere llevar unos pantalones negros'
    },
    {
        swedish: 'hon vill ha på sig en vit klänning',
        spanish: 'quiere llevar un vestido blanco'
    },
    {
        swedish: 'vi vill ha på oss gröna skor',
        spanish: 'queremos llevar unos zapatos verdes'
    },
    {
        swedish: 'ni vill bära en gul hatt',
        spanish: 'queréis llevar un sombrero amarillo'
    },
    {
        swedish: 'de vill bära grå strumpor',
        spanish: 'quieren llevar unos calcetines grises'
    },
    {
        swedish: 'jag vill ha på mig en svart jacka',
        spanish: 'quiero llevar una chaqueta negra'
    },
    {
        swedish: 'du vill bära en vit skjorta',
        spanish: 'quieres llevar una camisa blanca'
    },
    {
        swedish: 'han vill ha på sig bruna skor',
        spanish: 'quiere llevar unos zapatos marrones'
    },
    {
        swedish: 'hon vill bära en röd kjol',
        spanish: 'quiere llevar una falda roja'
    },
    {
        swedish: 'vi vill ha på oss blå jeans',
        spanish: 'queremos llevar unos vaqueros azules'
    },
    {
        swedish: 'ni vill bära en grön tröja',
        spanish: 'queréis llevar un jersey verde'
    },
    {
        swedish: 'de vill ha på sig vita skjortor',
        spanish: 'quieren llevar unas camisas blancas'
    },
    {
        swedish: 'jag vill bära en brun kappa',
        spanish: 'quiero llevar un abrigo marrón'
    },
    {
        swedish: 'du vill ha på dig ett par svarta handskar',
        spanish: 'quieres llevar unos guantes negros'
    },
    {
        swedish: 'han vill bära en gul tröja',
        spanish: 'quiere llevar una camiseta amarilla'
    },
    {
        swedish: 'hon vill ha på sig en blå kjol',
        spanish: 'quiere llevar una falda azul'
    },
    {
        swedish: 'vi vill bära gröna hattar',
        spanish: 'queremos llevar unos sombreros verdes'
    },
    {
        swedish: 'ni vill ha på er röda skor',
        spanish: 'queréis llevar unos zapatos rojos'
    },
    {
        swedish: 'jag köper en röd tröja',
        spanish: 'compro una camiseta roja'
    },
    {
        swedish: 'du säljer en blå jacka',
        spanish: 'vendes una chaqueta azul'
    },
    {
        swedish: 'han har svarta byxor',
        spanish: 'tiene unos pantalones negros'
    },
    {
        swedish: 'hon köper en vit klänning',
        spanish: 'compra un vestido blanco'
    },
    {
        swedish: 'vi säljer gröna skor',
        spanish: 'vendemos unos zapatos verdes'
    },
    {
        swedish: 'ni har en gul hatt',
        spanish: 'tenéis un sombrero amarillo'
    },
    {
        swedish: 'de köper grå strumpor',
        spanish: 'compran unos calcetines grises'
    },
    {
        swedish: 'jag har en svart jacka',
        spanish: 'tengo una chaqueta negra'
    },
    {
        swedish: 'du köper en vit skjorta',
        spanish: 'compras una camisa blanca'
    },
    {
        swedish: 'han säljer bruna skor',
        spanish: 'vende unos zapatos marrones'
    },
    {
        swedish: 'hon har en röd kjol',
        spanish: 'tiene una falda roja'
    },
    {
        swedish: 'vi har blå jeans',
        spanish: 'tenemos unos vaqueros azules'
    },
    {
        swedish: 'ni säljer en grön tröja',
        spanish: 'vendéis un jersey verde'
    },
    {
        swedish: 'de har vita skjortor',
        spanish: 'tienen unas camisas blancas'
    },
    {
        swedish: 'jag säljer en brun kappa',
        spanish: 'vendo un abrigo marrón'
    },
    {
        swedish: 'du har ett par svarta handskar',
        spanish: 'tienes unos guantes negros'
    },
    {
        swedish: 'han köper en gul tröja',
        spanish: 'compra una camiseta amarilla'
    },
    {
        swedish: 'hon säljer en blå kjol',
        spanish: 'vende una falda azul'
    },
    {
        swedish: 'vi köper gröna hattar',
        spanish: 'compramos unos sombreros verdes'
    },
    {
        swedish: 'ni har röda skor',
        spanish: 'tenéis unos zapatos rojos'
    },
    {
        swedish: 'jag vill köpa en röd tröja',
        spanish: 'quiero comprar una camiseta roja'
    },
    {
        swedish: 'du vill sälja en blå jacka',
        spanish: 'quieres vender una chaqueta azul'
    },
    {
        swedish: 'han vill ha svarta byxor',
        spanish: 'quiere tener unos pantalones negros'
    },
    {
        swedish: 'hon vill köpa en vit klänning',
        spanish: 'quiere comprar un vestido blanco'
    },
    {
        swedish: 'vi vill sälja gröna skor',
        spanish: 'queremos vender unos zapatos verdes'
    },
    {
        swedish: 'ni vill ha en gul hatt',
        spanish: 'queréis tener un sombrero amarillo'
    },
    {
        swedish: 'de vill köpa grå strumpor',
        spanish: 'quieren comprar unos calcetines grises'
    },
    {
        swedish: 'jag vill ha en svart jacka',
        spanish: 'quiero tener una chaqueta negra'
    },
    {
        swedish: 'du vill köpa en vit skjorta',
        spanish: 'quieres comprar una camisa blanca'
    },
    {
        swedish: 'han vill sälja bruna skor',
        spanish: 'quiere vender unos zapatos marrones'
    },
    {
        swedish: 'hon vill ha en röd kjol',
        spanish: 'quiere tener una falda roja'
    },
    {
        swedish: 'vi vill ha blå jeans',
        spanish: 'queremos tener unos vaqueros azules'
    },
    {
        swedish: 'ni vill sälja en grön tröja',
        spanish: 'queréis vender un jersey verde'
    },
    {
        swedish: 'de vill ha vita skjortor',
        spanish: 'quieren tener unas camisas blancas'
    },
    {
        swedish: 'jag vill sälja en brun kappa',
        spanish: 'quiero vender un abrigo marrón'
    },
    {
        swedish: 'du vill ha ett par svarta handskar',
        spanish: 'quieres tener unos guantes negros'
    },
    {
        swedish: 'han vill köpa en gul tröja',
        spanish: 'quiere comprar una camiseta amarilla'
    },
    {
        swedish: 'hon vill sälja en blå kjol',
        spanish: 'quiere vender una falda azul'
    },
    {
        swedish: 'vi vill köpa gröna hattar',
        spanish: 'queremos comprar unos sombreros verdes'
    },
    {
        swedish: 'ni vill ha röda skor',
        spanish: 'queréis tener unos zapatos rojos'
    }
]

export let freeTimeSentences = [
     // Correr
     {
        swedish: 'jag springer i parken',
        spanish: 'yo corro en el parque'
    },
    {
        swedish: 'du springer varje morgon',
        spanish: 'tú corres todas las mañanas'
    },
    {
        swedish: 'han springer till skolan',
        spanish: 'él corre a la escuela'
    },
    {
        swedish: 'hon springer med sin hund',
        spanish: 'ella corre con su perro'
    },
    {
        swedish: 'vi springer på stranden',
        spanish: 'nosotros corremos en la playa'
    },
    {
        swedish: 'ni springer snabbt',
        spanish: 'vosotros corréis rápido'
    },
    {
        swedish: 'de springer i skogen',
        spanish: 'ellos corren en el bosque'
    },

    // Jugar
    {
        swedish: 'jag spelar fotboll med mina vänner',
        spanish: 'yo juego al fútbol con mis amigos'
    },
    {
        swedish: 'du spelar tennis på helgerna',
        spanish: 'tú juegas al tenis los fines de semana'
    },
    {
        swedish: 'han spelar basket varje dag',
        spanish: 'él juega al baloncesto todos los días'
    },
    {
        swedish: 'hon spelar schack med sin bror',
        spanish: 'ella juega al ajedrez con su hermano'
    },
    {
        swedish: 'vi spelar kort efter middagen',
        spanish: 'nosotros jugamos a las cartas después de la cena'
    },
    {
        swedish: 'ni spelar datorspel på kvällarna',
        spanish: 'vosotros jugáis a los videojuegos por la noche'
    },
    {
        swedish: 'de spelar volleyboll på stranden',
        spanish: 'ellos juegan al voleibol en la playa'
    },

    // Mirar
    {
        swedish: 'jag tittar på en film',
        spanish: 'yo miro una película'
    },
    {
        swedish: 'du tittar på TV varje kväll',
        spanish: 'tú miras la televisión todas las noches'
    },
    {
        swedish: 'han tittar på fotboll på stadion',
        spanish: 'él mira el fútbol en el estadio'
    },
    {
        swedish: 'hon tittar på stjärnorna på natten',
        spanish: 'ella mira las estrellas por la noche'
    },
    {
        swedish: 'vi tittar på en match tillsammans',
        spanish: 'nosotros miramos un partido juntos'
    },
    {
        swedish: 'ni tittar på solnedgången',
        spanish: 'vosotros miráis la puesta de sol'
    },
    {
        swedish: 'de tittar på fåglar i parken',
        spanish: 'ellos miran los pájaros en el parque'
    }
]