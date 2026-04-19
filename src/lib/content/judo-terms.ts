export interface JudoTerm {
	it: string;
	jp: string;
	explanation: string;
}

export const JUDO_TERMS: JudoTerm[] = [
	{
		it: 'anca / fianchi',
		jp: 'koshi',
		explanation: 'Koshi (腰) = anca/fianchi. Es: O-goshi (grande lancio d\'anca), Koshi-guruma (ruota d\'anca), Harai-goshi.'
	},
	{
		it: 'gamba / piede',
		jp: 'ashi',
		explanation: 'Ashi (足/脚) = gamba o piede. Es: De-ashi-harai (spazzata del piede avanzante), Ashi-guruma, O-soto-gari.'
	},
	{
		it: 'braccio',
		jp: 'ude',
		explanation: 'Ude (腕) = braccio. Es: Ude-gatame (leva al braccio dritto), Ude-garami (leva al braccio piegato).'
	},
	{
		it: 'mano',
		jp: 'te',
		explanation: 'Te (手) = mano. Le te-waza sono le tecniche di mano/braccio in piedi. Es: Seoi-nage, Tai-otoshi, Kata-guruma.'
	},
	{
		it: 'spalla',
		jp: 'kata',
		explanation: 'Kata (肩) = spalla. Es: Kata-guruma (ruota di spalla), Kata-gatame (immobilizzazione alla spalla).'
	},
	{
		it: 'collo',
		jp: 'kubi',
		explanation: 'Kubi (首) = collo. Es: Kubi-nage (lancio afferrando il collo), O-soto-otoshi.'
	},
	{
		it: 'testa',
		jp: 'atama',
		explanation: 'Atama (頭) = testa. Es: Sumi-gaeshi, tecniche in cui la testa guida il movimento.'
	},
	{
		it: 'ginocchio',
		jp: 'hiza',
		explanation: 'Hiza (膝) = ginocchio. Es: Hiza-guruma (ruota di ginocchio), O-soto-gari che aggancia il ginocchio.'
	},
	{
		it: 'corpo / busto',
		jp: 'tai',
		explanation: 'Tai (体) = corpo/busto. Es: Tai-otoshi (caduta del corpo), tecniche in cui si usa il corpo come leva.'
	},
	{
		it: 'polso',
		jp: 'tekubi',
		explanation: 'Tekubi (手首) = polso. Es: Tekubi-gatame (leva al polso), usata nelle kansetsu-waza avanzate.'
	},
	{
		it: 'ruota',
		jp: 'guruma',
		explanation: 'Guruma (車) = ruota. Il corpo dell\'avversario ruota attorno a un fulcro. Es: O-guruma, Hiza-guruma, Koshi-guruma.'
	},
	{
		it: 'spazzata',
		jp: 'harai',
		explanation: 'Harai/Barai (払) = spazzata pulita. Il piede spazza quello dell\'avversario. Es: De-ashi-harai, Harai-goshi, Sasae-tsurikomi-ashi.'
	},
	{
		it: 'falciata / mietitura',
		jp: 'gari',
		explanation: 'Gari (刈) = falciata verso il basso, come mietere il grano. Es: O-soto-gari, Ko-uchi-gari, O-uchi-gari.'
	},
	{
		it: 'lancio / proiezione',
		jp: 'nage',
		explanation: 'Nage (投) = lancio/proiezione. Le nage-waza sono tutte le tecniche di proiezione in piedi. Es: Seoi-nage, Harai-goshi.'
	},
	{
		it: 'sacrificio del corpo',
		jp: 'sutemi',
		explanation: 'Sutemi (捨身) = sacrificio. Nelle sutemi-waza ci si butta a terra intenzionalmente per proiettare l\'avversario. Es: Tomoe-nage, Yoko-gake.'
	},
	{
		it: 'immobilizzazione',
		jp: 'osae / gatame',
		explanation: 'Osae (抑) = pressare/trattenere; Gatame (固) = immobilizzare. Le osae-waza bloccano l\'avversario a terra. Es: Kesa-gatame, Yoko-shiho-gatame.'
	},
	{
		it: 'strangolamento',
		jp: 'jime / shime',
		explanation: 'Jime/Shime (絞) = stringere/strangolare. Le shime-waza comprimono la carotide o la trachea. Es: Nami-juji-jime, Okuri-eri-jime.'
	},
	{
		it: 'leva articolare',
		jp: 'kansetsu',
		explanation: 'Kansetsu (関節) = articolazione. Le kansetsu-waza agiscono sul gomito in direzione contraria. Es: Ude-gatame, Ude-garami, Juji-gatame.'
	},
	{
		it: 'grande',
		jp: 'o',
		explanation: 'O (大) = grande, con ampio movimento. Es: O-goshi, O-soto-gari, O-uchi-gari, O-guruma.'
	},
	{
		it: 'piccolo',
		jp: 'ko',
		explanation: 'Ko (小) = piccolo, tecnica di precisione con movimento ridotto. Es: Ko-soto-gari, Ko-uchi-gari, Ko-soto-gake.'
	},
	{
		it: 'esterno',
		jp: 'soto',
		explanation: 'Soto (外) = esterno, dall\'esterno. Es: O-soto-gari (falciata esterna), Ko-soto-gari, Ko-soto-gake.'
	},
	{
		it: 'interno',
		jp: 'uchi',
		explanation: 'Uchi (内) = interno, dall\'interno. Es: O-uchi-gari (falciata interna), Ko-uchi-gari, Uchi-mata.'
	},
	{
		it: 'laterale',
		jp: 'yoko',
		explanation: 'Yoko (横) = laterale. Es: Yoko-shiho-gatame (immobilizzazione laterale a quattro punti), Yoko-sutemi-waza.'
	},
	{
		it: 'indietro / posteriore',
		jp: 'ushiro',
		explanation: 'Ushiro (後) = dietro/posteriore. Es: Ushiro-goshi (contro-anca da dietro), Ushiro-kesa-gatame.'
	},
	{
		it: 'trazione e sollevamento',
		jp: 'tsurikomi',
		explanation: 'Tsurikomi (釣込) = trazione verso l\'alto + accompagnamento. Caratterizza tecniche in cui si trascina l\'avversario verso l\'alto mentre lo si gira. Es: Tsurikomi-goshi, Sasae-tsurikomi-ashi.'
	}
];
