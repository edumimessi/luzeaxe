/* Luz e Axé — dados editoriais
 *
 * REGRA DE OURO: cada campo tem um gênero de texto declarado.
 *   termo/idioma/traducao -> termo da tradição
 *   contexto              -> síntese explicativa (campo `tradicao` indica a matriz)
 *   reflexao              -> reflexão autoral do Dr. Eduardo D'Angelo Mimessi
 *   fonte                 -> obra/pesquisador que sustenta a síntese explicativa
 *   sentido               -> DIÁLOGO EXISTENCIAL PROPOSTO PELO AUTOR (nunca doutrina)
 *   consideracao          -> proposição para reflexão (NUNCA tarefa, exercício ou ritual)
 *   pergunta              -> pergunta para registro pessoal
 *
 * Grafias e sentidos variam entre nações, casas e autores. As traduções são
 * aproximações de uso corrente na literatura, não definições fechadas.
 */

window.LUZEAXE = {};

/* ------------------------------------------------------------------ */
/* Cinco princípios                                                    */
/* ------------------------------------------------------------------ */

window.LUZEAXE.PRINCIPIOS = [
  {
    id: 'ancestralidade',
    nome: 'Ancestralidade',
    resumo: 'Ninguém começa do zero. Existir é receber e responder ao que veio antes.',
    descricao:
      'Nas tradições de matriz africana no Brasil, a pessoa é pensada em continuidade com quem a antecedeu. Os mortos não são ausência: seguem tendo lugar, nome e função na vida da comunidade. Essa continuidade sustenta identidade e responsabilidade.',
    tradicao: 'Presente em todas as matrizes tratadas neste site, com formulações distintas.'
  },
  {
    id: 'axe',
    nome: 'Axé',
    resumo: 'A força que faz acontecer — e que precisa circular para não se esgotar.',
    descricao:
      'Àṣẹ, no vocabulário iorubá adotado no Candomblé Ketu, nomeia a força vital que realiza, que dá eficácia à palavra e à ação. Não é energia abstrata: está em pessoas, objetos, alimentos, gestos e lugares, e se mantém pela troca, não pelo acúmulo.',
    tradicao: 'Formulação iorubá (Ketu/Nagô). Tradições Jeje e Angola têm categorias próprias.'
  },
  {
    id: 'egbe',
    nome: 'Comunidade (Egbé)',
    resumo: 'A pessoa se realiza dentro de um corpo coletivo, não apesar dele.',
    descricao:
      'Egbé designa a companhia, o grupo, o conjunto de pertencimento. No terreiro, a casa é família ampliada, com lugares, deveres e afetos definidos. A individualidade não é negada: ela ganha forma dentro da relação.',
    tradicao: 'Termo iorubá. O terreiro como família de santo é comum às matrizes brasileiras.'
  },
  {
    id: 'corporeidade',
    nome: 'Corporeidade',
    resumo: 'O corpo não é obstáculo ao espírito. É onde a vida acontece.',
    descricao:
      'Nas tradições afro-brasileiras o corpo é sede de conhecimento: dança, ritmo, gesto, alimento e vestimenta comunicam o que a palavra sozinha não alcança. Não há oposição entre matéria e espírito como na herança dualista europeia.',
    tradicao: 'Comum às matrizes tratadas. Formulações e liturgias variam por nação e casa.'
  },
  {
    id: 'circularidade',
    nome: 'Circularidade',
    resumo: 'O tempo não é uma linha que abandona: é um ciclo que retorna e ensina.',
    descricao:
      'A experiência do tempo é organizada por retornos — ciclos anuais, gerações, festas que voltam. O passado não fica para trás: reaparece, cobra elaboração e oferece nova oportunidade de resposta.',
    tradicao: 'Comum às matrizes tratadas, com calendários e cosmologias distintos.'
  }
];

/* ------------------------------------------------------------------ */
/* Tradições — nomeadas, não fundidas                                  */
/* ------------------------------------------------------------------ */

window.LUZEAXE.TRADICOES = [
  { nome: 'Candomblé Ketu / Nagô', origem: 'Bahia e expansão nacional · matriz iorubá', lingua: 'Iorubá litúrgico',
    sagrado: 'Orixás; repertórios iorubás/nagôs; linhagens de casa.',
    cautela: 'Não usar como modelo universal de Candomblé.' },
  { nome: 'Candomblé Jeje', origem: 'Bahia, Maranhão e redes relacionadas · matriz ewe-fon', lingua: 'Fon-ewe litúrgico',
    sagrado: 'Voduns; repertórios ewe-fon; casas e nações jeje.',
    cautela: 'Vodum não é apenas outro nome para Orixá.' },
  { nome: 'Candomblé Angola / Congo', origem: 'Bahia, Sudeste e outras regiões · matriz bantu', lingua: 'Kimbundu e kikongo litúrgicos',
    sagrado: 'Inquices (nkisi); repertórios bantu; línguas e linhagens próprias.',
    cautela: 'Evitar traduzir tudo por categorias iorubás. Inquice não é "Orixá bantu".' },
  { nome: 'Umbandas', origem: 'Urbana e nacional, século XX', lingua: 'Português',
    sagrado: 'Orixás em configurações variadas; entidades e linhas; incorporação; caridade.',
    cautela: 'Não existe catecismo único, e o plural é proposital. A relação com Espiritismo e Catolicismo varia entre correntes.' },
  { nome: 'Tambor de Mina', origem: 'Maranhão e Amazônia', lingua: 'Português com termos litúrgicos',
    sagrado: 'Voduns, encantados e famílias de entidades; casas mina-jeje e mina-nagô.',
    cautela: 'A Casa das Minas é referência singular, não resumo de toda a tradição.' },
  { nome: 'Terecô', origem: 'Codó e Maranhão', lingua: 'Português com repertórios locais',
    sagrado: 'Encantados, práticas de cuidado e repertórios locais.',
    cautela: 'Evitar reduzir a "magia" ou tratar como extensão da Mina.' },
  { nome: 'Xangô do Nordeste e tradição Xambá', origem: 'Pernambuco e Alagoas', lingua: 'Português com termos nagô',
    sagrado: 'Cultos a Orixás com histórias e linhagens regionais.',
    cautela: 'O nome Xangô designa também a tradição regional, não apenas a divindade.' },
  { nome: 'Batuque', origem: 'Rio Grande do Sul e países do Prata', lingua: 'Português com termos nagô e jeje',
    sagrado: 'Orixás e nações/linhas próprias do sul.',
    cautela: 'Não confundir com gênero musical nem com o Candomblé baiano.' },
  { nome: 'Jurema Sagrada e Catimbó', origem: 'Nordeste, sobretudo PE, PB e RN', lingua: 'Português',
    sagrado: 'Mestres, mestras, caboclos, encantados e a Jurema como referência sagrada.',
    cautela: 'Possui fortes matrizes indígenas e afro-indígenas. Não é simplesmente "afro".' },
  { nome: 'Jarê', origem: 'Chapada Diamantina, Bahia', lingua: 'Português',
    sagrado: 'Entidades, caboclos e repertórios afro-indígenas regionais.',
    cautela: 'Requer fonte local e revisão específica. Este site não o trata em profundidade.' },
  { nome: 'Omolocô, Quimbanda e campos correlatos', origem: 'Sobretudo Sudeste e Sul', lingua: 'Português',
    sagrado: 'Configurações muito diversas e termos disputados.',
    cautela: 'Não generalizar. Exige pesquisa e validação casa a casa.' }
];

/* ------------------------------------------------------------------ */
/* Aproximações declaradas — o que NÃO se deve confundir               */
/* ------------------------------------------------------------------ */

window.LUZEAXE.DISTINCOES = [
  {
    titulo: 'Ubuntu não é egbé',
    texto:
      'Ubuntu é conceito das línguas nguni da África austral, difundido internacionalmente a partir da África do Sul no século XX. Egbé é termo iorubá da África Ocidental, matriz do Candomblé Ketu. Ambos pensam a pessoa em relação, mas vêm de regiões, línguas e histórias diferentes. Usar um como tradução do outro apaga essa distância.'
  },
  {
    titulo: 'Sincretismo é história, não teologia',
    texto:
      'A correspondência entre orixás e santos católicos nasceu sob perseguição e proibição do culto. É fato histórico com causas concretas. Apresentá-la como equivalência espiritual — "é tudo a mesma coisa" — inverte o sentido do que foi uma estratégia de sobrevivência.'
  },
  {
    titulo: 'A tradição não é ilustração de teoria alguma',
    texto:
      'As cosmologias africanas são anteriores e independentes de qualquer psicologia ou filosofia europeia. Este site não as usa como exemplo, confirmação ou versão antiga de teorias modernas. As reflexões sobre sentido presentes nas meditações são leitura autoral e declarada — não afirmam que a tradição antecipou seja o que for.'
  },
  {
    titulo: 'Conceito público não é fundamento',
    texto:
      'O que este site apresenta está publicado em literatura acadêmica e em obras de autoria de pessoas das próprias tradições. Fundamento, segredo iniciático e liturgia interna não são tratados aqui — nem deveriam ser, por quem não é iniciado.'
  }
];

/* ------------------------------------------------------------------ */
/* Orixás — apresentação introdutória                                  */
/* ------------------------------------------------------------------ */

window.LUZEAXE.COSMOLOGIA = {
  corrente: 'Candomblé Ketu / Nagô (matriz iorubá)',
  fonte: 'SANTOS (1975), VERGER (1981) e PRANDI (2001) — ver Fontes',
  nota:
    'Esta página descreve UMA formulação: a do Candomblé Ketu de matriz iorubá, como registrada nas obras citadas. Não vale para Jeje, Angola, Umbanda, Tambor de Mina, Xangô do Nordeste ou Batuque, que têm cosmologias próprias. Nomes, qualidades, números e atribuições variam por nação, casa e linhagem, e nenhuma apresentação pública esgota o assunto.',
  naoDizemos:
    'Este site não interpreta adoecimento, perda ou sofrimento como sinal espiritual, castigo, desequilíbrio de energia ou afastamento do próprio destino. Leituras desse tipo culpabilizam quem sofre. Sofrimento tem causas concretas — biológicas, psíquicas, sociais e históricas — e pede cuidado, não diagnóstico espiritual.',
  itens: [
    { nome: 'Olodumare', desc: 'Princípio criador supremo e distante, não cultuado diretamente no cotidiano do terreiro.' },
    { nome: 'Òrun e Aiyê', desc: 'O plano do além e o plano dos viventes, pensados em comunicação constante, não em oposição.' },
    { nome: 'Orixás', desc: 'Potências que medeiam a relação entre Òrun e Aiyê, associadas a domínios da natureza e da experiência humana.' },
    { nome: 'Orí', desc: 'A cabeça, entendida como princípio individual: aquilo que cada pessoa é e o destino que lhe cabe elaborar.' },
    { nome: 'Egun', desc: 'No Candomblé Ketu, os ancestrais têm culto próprio, com sacerdócio, espaço e liturgia distintos do culto aos orixás. Egun NÃO é o mesmo que preto-velho: preto-velho é entidade da Umbanda, religião brasileira do século XX, com cosmologia, linguagem e organização próprias. Reunir os dois numa explicação única de "ancestralidade" apaga a diferença entre duas religiões.' },
    { nome: 'Exu', desc: 'Nas tradições nagô, Exu é Orixá: princípio da comunicação, do movimento e da troca. Em Umbandas e Quimbandas, "Exu" nomeia entidades e linhas de outra natureza, que exigem explicação própria — não são a mesma figura. A identificação de Exu com o diabo cristão é distorção colonial, não conteúdo de nenhuma dessas tradições. Demonizar e romantizar são erros simétricos.' }
  ]
};

/* ------------------------------------------------------------------ */
/* Vozes — pensamento negro brasileiro                                 */
/* ------------------------------------------------------------------ */

window.LUZEAXE.VOZES = [
  { nome: 'Abdias do Nascimento', anos: '1914–2011', obra: 'O Genocídio do Negro Brasileiro (1978)', desc: 'Dramaturgo, artista e político. Formulou a crítica ao mito da democracia racial e defendeu as religiões afro-brasileiras como patrimônio civilizatório, não folclore.' },
  { nome: 'Lélia Gonzalez', anos: '1935–1994', obra: 'Por um feminismo afro-latino-americano (coletânea póstuma)', desc: 'Filósofa e antropóloga. Cunhou a noção de amefricanidade e analisou como racismo e sexismo se articulam na formação brasileira.' },
  { nome: 'Beatriz Nascimento', anos: '1942–1995', obra: 'Ensaios reunidos em Uma história feita por mãos negras (2021)', desc: 'Historiadora. Pensou o quilombo como categoria de existência e o corpo negro como território e arquivo de memória.' },
  { nome: 'Muniz Sodré', anos: '1942–', obra: 'O terreiro e a cidade (1988)', desc: 'Comunicólogo. Analisou o terreiro como forma social e cosmológica própria, com lógica espacial e temporal distinta da cidade moderna.' },
  { nome: 'Mãe Stella de Oxóssi', anos: '1925–2018', obra: 'Meu Tempo é Agora (1993)', desc: 'Iyalorixá do Ilê Axé Opô Afonjá. Escreveu em nome próprio sobre a tradição e defendeu o fim do sincretismo como estratégia já desnecessária.' },
  { nome: 'Juana Elbein dos Santos', anos: '1931–2008', obra: 'Os Nàgô e a Morte (1975)', desc: 'Antropóloga. Referência sobre a cosmologia nagô, o culto aos ancestrais e a noção de àṣẹ.' },
  { nome: 'Reginaldo Prandi', anos: '1946–', obra: 'Mitologia dos Orixás (2001)', desc: 'Sociólogo. Reuniu e organizou corpus mitológico e estudou a expansão do Candomblé no Brasil urbano.' },
  { nome: 'Nei Lopes', anos: '1942–', obra: 'Enciclopédia Brasileira da Diáspora Africana (2004)', desc: 'Compositor e pesquisador. Documentou a herança bantu, sistematicamente subestimada frente à matriz iorubá.' }
];

window.LUZEAXE.RACISMO_RELIGIOSO = {
  titulo: 'Racismo religioso',
  paragrafos: [
    'Os cultos de matriz africana foram criminalizados no Brasil. O Código Penal de 1890 enquadrava práticas religiosas afro-brasileiras sob os tipos de curandeirismo, magia e feitiçaria. Terreiros foram invadidos por polícia, objetos sagrados foram apreendidos e passaram a compor acervos de museus policiais.',
    'A exigência de autorização policial para funcionamento de terreiros perdurou em estados brasileiros até a segunda metade do século XX. A perseguição não é passado remoto: ataques a casas de santo, destruição de assentamentos e intimidação de praticantes seguem sendo registrados por delegacias e observatórios de intolerância religiosa.',
    'Nomear isso não é digressão política. Uma parte do que se perdeu do repertório dessas tradições se perdeu por perseguição — e qualquer apresentação pública que omita esse fato apresenta uma tradição sem a história que a moldou.'
  ]
};

/* ------------------------------------------------------------------ */
/* Meditações — 30 de um ciclo previsto de 366                         */
/* ------------------------------------------------------------------ */

window.LUZEAXE.MEDITACOES = [
  /* --- ANCESTRALIDADE ------------------------------------------- */
  {
    n: 1, principio: 'ancestralidade', titulo: 'Você chegou no meio da história',
    termo: 'Ìtàn', idioma: 'Iorubá', traducao: 'narrativa, história transmitida',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'SANTOS, Juana Elbein dos. Os Nàgô e a Morte (1975)',
    contexto: 'Ìtàn nomeia as narrativas que carregam origem, conduta e explicação do mundo. São transmitidas oralmente e continuam sendo ditas porque continuam sendo necessárias.',
    reflexao: 'Nascemos numa conversa que já estava em curso. Antes de qualquer escolha nossa, já havia língua, sobrenome, dívidas, afetos e feridas circulando. Isso não diminui a liberdade — define o material com que ela trabalha.',
    sentido: 'Herdar não é ser determinado. As condições em que se nasce não escolhem por ninguém: elas apenas definem o material com que a liberdade vai trabalhar.',
    consideracao: 'Há nomes de pessoas que existiram antes de nós e sem as quais nossa vida seria outra. Quase nunca os pensamos como parte do que somos.',
    pergunta: 'Que parte da minha história eu não escolhi, mas hoje me cabe responder?'
  },
  {
    n: 2, principio: 'ancestralidade', titulo: 'A travessia que ninguém escolheu',
    termo: 'Kalunga', idioma: 'Kikongo e kimbundu', traducao: 'grande extensão: o mar, a morte, a fronteira entre mundos',
    tradicao: 'Matrizes bantu (Candomblé Angola/Congo)',
    fonte: 'LOPES, Nei. Enciclopédia Brasileira da Diáspora Africana (2004)',
    contexto: 'Kalunga nomeia ao mesmo tempo o oceano e o limite entre vivos e mortos. Na experiência da diáspora, as duas coisas se sobrepuseram: o mar da travessia forçada foi, literalmente, fronteira de morte.',
    reflexao: 'Há sofrimentos que não são pedagógicos. A escravização não ensinou nada a quem a sofreu — foi crime. Reconhecer isso é condição para falar dessas tradições sem transformar dor em lição edificante.',
    sentido: 'Nem todo sofrimento ensina. Há dor que não tem lição, e chamá-la de aprendizado é ofensa a quem a sofreu. Diante da violência histórica, a resposta digna é a memória e a reparação, nunca a resignação.',
    consideracao: 'Nem toda dor tem lição. Reconhecer isso é diferente de conformar-se com ela.',
    pergunta: 'Que verdades desconfortáveis eu evito olhar porque não têm consolo fácil?'
  },
  {
    n: 3, principio: 'ancestralidade', titulo: 'A cabeça que é sua',
    termo: 'Orí', idioma: 'Iorubá', traducao: 'cabeça; princípio individual do destino',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'SANTOS, Juana Elbein dos. Os Nàgô e a Morte (1975)',
    contexto: 'Orí designa a cabeça física e, ao mesmo tempo, o princípio individual de cada pessoa — aquilo que a singulariza e o destino que lhe cabe realizar. É objeto de cuidado próprio dentro da tradição.',
    reflexao: 'Existe algo em cada pessoa que não é redutível à família, à classe ou à época. Reconhecer a herança não anula a singularidade: as duas coisas convivem, e a vida adulta consiste em grande parte em distinguir uma da outra.',
    sentido: 'Há uma tarefa que é de cada um e de mais ninguém. Ninguém vive a minha vida por mim, nem responde por mim ao que ela me pergunta.',
    consideracao: 'Há expectativas que carregamos a vida inteira sem nunca ter examinado se são nossas.',
    pergunta: 'O que em mim é herança e o que é decisão minha?'
  },
  {
    n: 4, principio: 'ancestralidade', titulo: 'O que foi escolhido e o que resta escolher',
    termo: 'Àyànmọ́', idioma: 'Iorubá', traducao: 'aquilo que foi escolhido; destino',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'PRANDI, Reginaldo. Mitologia dos Orixás (2001)',
    contexto: 'Na cosmologia iorubá, o destino não é imposto de fora: há narrativas em que a pessoa escolhe seu quinhão antes de vir ao mundo, e depois esquece a escolha. Viver envolve reencontrar o que já era seu.',
    reflexao: 'Talvez a pergunta útil não seja "o que eu quero da vida", mas "o que eu já sou e ainda não assumi". Muita indecisão é, na verdade, adiamento de um reconhecimento.',
    sentido: 'A pergunta muda de lugar quando deixo de perguntar o que espero da vida e começo a perguntar o que ela espera de mim.',
    consideracao: 'Muita indecisão não é falta de clareza: é adiamento de um reconhecimento que já foi feito.',
    pergunta: 'O que eu já sei e finjo não saber?'
  },
  {
    n: 5, principio: 'ancestralidade', titulo: 'Caráter é o que fica',
    termo: 'Ìwà', idioma: 'Iorubá', traducao: 'caráter, modo de existir',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'SANTOS, Juana Elbein dos. Os Nàgô e a Morte (1975)',
    contexto: 'Ìwà designa o caráter e o modo de ser. Na formulação iorubá, bom caráter é valor central — mais decisivo, em várias narrativas, do que prosperidade ou poder.',
    reflexao: 'Herdamos bens, nomes e traumas. Mas o que efetivamente entregamos adiante é o modo como tratamos as pessoas. Isso não se transmite por documento: transmite-se por convivência.',
    sentido: 'Quando não se pode mudar a situação, resta o modo de enfrentá-la. É a última liberdade — e a mais difícil de tirar de alguém.',
    consideracao: 'O que efetivamente entregamos adiante não são bens nem nomes, mas o modo como tratamos as pessoas — e isso se transmite por convivência, não por documento.',
    pergunta: 'Que herança eu estou construindo sem perceber?'
  },
  {
    n: 6, principio: 'ancestralidade', titulo: 'Saudar antes de pedir',
    termo: 'Ìbà', idioma: 'Iorubá', traducao: 'saudação reverente, reconhecimento de precedência',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'VERGER, Pierre. Orixás (1981)',
    contexto: 'Em contextos iorubás é comum que a fala se abra reconhecendo quem veio antes, antes de tratar do assunto. A ordem importa: primeiro o reconhecimento, depois o pedido.',
    reflexao: 'A cultura em que vivemos treina a começar pela demanda. Inverter essa ordem — reconhecer antes de pedir — muda a qualidade do que se pede e de quem pede.',
    sentido: 'Gratidão não é otimismo forçado. É o reconhecimento factual de que a vida já foi dada antes de qualquer mérito nosso.',
    consideracao: 'A cultura em que vivemos treina a começar pelo pedido. Reconhecer antes de pedir muda a qualidade do que se pede.',
    pergunta: 'A quem eu devo um reconhecimento que nunca formulei?'
  },

  /* --- AXÉ ------------------------------------------------------- */
  {
    n: 7, principio: 'axe', titulo: 'A força que só existe circulando',
    termo: 'Àṣẹ', idioma: 'Iorubá', traducao: 'força vital que realiza; também "que assim seja"',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'SANTOS, Juana Elbein dos. Os Nàgô e a Morte (1975)',
    contexto: 'Àṣẹ nomeia a força que dá eficácia à palavra e à ação. Não é propriedade privada: circula entre pessoas, gestos, alimentos e lugares, e se mantém pela troca.',
    reflexao: 'Aquilo que nos dá vitalidade raramente se acumula. Conhecimento guardado apodrece, afeto não dito seca, capacidade não exercida se atrofia. O que se retém, se perde.',
    sentido: 'A pessoa se realiza quando se dirige a algo ou alguém além de si. O que se investe fora volta transformado; o que se retém, apodrece.',
    consideracao: 'Conhecimento guardado apodrece, afeto não dito seca, capacidade não exercida se atrofia. O que se retém, se perde.',
    pergunta: 'O que eu venho retendo e que só teria valor se circulasse?'
  },
  {
    n: 8, principio: 'axe', titulo: 'O sopro que não é seu',
    termo: 'Ẹ̀mí', idioma: 'Iorubá', traducao: 'sopro, respiração, princípio vital',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'SANTOS, Juana Elbein dos. Os Nàgô e a Morte (1975)',
    contexto: 'Ẹ̀mí designa o sopro vital que anima o corpo. Não é conquista individual: é recebido, e a vida inteira transcorre à custa dele.',
    reflexao: 'Respirar é a prova diária de que dependemos de algo que não fabricamos. Nenhuma autonomia é total. Reconhecer isso não humilha — desarma a exigência de bastar-se.',
    sentido: 'Ninguém se basta. Quem se fecha em si mesmo adoece de vazio, por mais recursos que tenha.',
    consideracao: 'Respirar é a prova diária de que dependemos de algo que não fabricamos.',
    pergunta: 'Onde eu confundo independência com isolamento?'
  },
  {
    n: 9, principio: 'axe', titulo: 'Pessoa é sempre pessoa-com',
    termo: 'Muntu', idioma: 'Kimbundu e línguas bantu', traducao: 'pessoa, ser humano',
    tradicao: 'Matrizes bantu (Candomblé Angola/Congo)',
    fonte: 'LOPES, Nei. Enciclopédia Brasileira da Diáspora Africana (2004)',
    contexto: 'Nas línguas bantu, muntu nomeia a pessoa — e o vocabulário correlato pensa o humano em termos de força, palavra e relação, não de substância isolada.',
    reflexao: 'Somos formados por quem nos formou. Isso não retira responsabilidade: aumenta. Se sou feito de relações, cada relação que sustento está fazendo alguém.',
    sentido: 'Encontrar o outro em sua singularidade — e não usá-lo como meio — é a forma mais plena de estar com alguém.',
    consideracao: 'Se somos feitos de relações, cada relação que sustentamos está formando alguém.',
    pergunta: 'Quem eu estou ajudando a formar sem ter reparado?'
  },
  {
    n: 10, principio: 'axe', titulo: 'A palavra tem peso',
    termo: 'Ọ̀rọ̀', idioma: 'Iorubá', traducao: 'palavra, discurso, assunto',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'SANTOS, Juana Elbein dos. Os Nàgô e a Morte (1975)',
    contexto: 'Em tradições de transmissão oral, a palavra dita carrega consequência: ela não apenas descreve o mundo, participa de constituí-lo. Por isso o cuidado com o que se diz e diante de quem.',
    reflexao: 'Vivemos num tempo de palavra barata — dita rápido, esquecida rápido. Recuperar o peso da palavra é uma disciplina: dizer menos, e responder pelo que se disse.',
    sentido: 'Responsabilidade vem de responder. Quem fala, assume; quem assume, responde. Palavra sem responsabilidade é ruído.',
    consideracao: 'Vivemos num tempo de palavra barata — dita rápido, esquecida rápido. O peso da palavra é uma disciplina, não um dom.',
    pergunta: 'Que palavra eu preciso dizer — ou desdizer?'
  },
  {
    n: 11, principio: 'axe', titulo: 'Bem-estar não é ausência de problema',
    termo: 'Ire', idioma: 'Iorubá', traducao: 'bem, bênção, bem-estar',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'PRANDI, Reginaldo. Mitologia dos Orixás (2001)',
    contexto: 'Ire nomeia o bem em sentido amplo — saúde, filhos, longevidade, prosperidade, paz. É bem concreto, vivido no mundo, e não recompensa póstuma.',
    reflexao: 'Há uma tentação de espiritualizar tudo e desprezar o material. Essas tradições não fazem isso: comer, trabalhar, ter saúde e conviver são valores plenos, não consolações menores.',
    sentido: 'O sentido não começa no sofrimento. Começa no que se faz e no que se recebe do mundo, muito antes de qualquer provação.',
    consideracao: 'Há uma tentação de espiritualizar tudo e desprezar o material. Comer, trabalhar, ter saúde e conviver são bens plenos, não consolações menores.',
    pergunta: 'Que bem concreto eu tenho e trato como se fosse pouco?'
  },
  {
    n: 12, principio: 'axe', titulo: 'O que o peito sabe',
    termo: 'Ẹ̀rí-ọkàn', idioma: 'Iorubá', traducao: 'consciência; literalmente, o testemunho do coração',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'VERGER, Pierre. Orixás (1981)',
    contexto: 'A expressão nomeia a consciência moral como testemunha interna. O coração, nessa formulação, não é sede do sentimentalismo: é sede do julgamento sobre a própria conduta.',
    reflexao: 'Quase sempre sabemos. O problema raramente é ignorância sobre o que é certo — é o custo de fazê-lo. Chamar de dúvida o que é medo atrasa a decisão.',
    sentido: 'Existe em cada um algo que capta, na situação concreta, o que deve ser feito aqui e agora. Chamar de dúvida o que é medo silencia essa voz.',
    consideracao: 'Quase sempre já sabemos o que é certo. O problema costuma ser o custo de fazê-lo.',
    pergunta: 'Em que ponto eu chamo de dúvida o que na verdade é medo?'
  },

  /* --- COMUNIDADE (EGBÉ) ----------------------------------------- */
  {
    n: 13, principio: 'egbe', titulo: 'Pertencer é aceitar ter lugar',
    termo: 'Egbé', idioma: 'Iorubá', traducao: 'companhia, grupo, comunidade',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'SODRÉ, Muniz. O terreiro e a cidade (1988)',
    contexto: 'Egbé designa o conjunto de pertencimento. Na organização do terreiro, cada pessoa ocupa uma posição com deveres e prerrogativas definidos, e essa posição é reconhecida publicamente.',
    reflexao: 'Pertencer de verdade custa: implica aceitar um lugar, deveres e a autoridade de alguém. A cultura contemporânea vende pertencimento sem custo — e por isso entrega comunidades que não sustentam ninguém.',
    sentido: 'Ir além de si não é abstração: realiza-se em compromissos concretos, com pessoas concretas, que limitam nossa disponibilidade.',
    consideracao: 'Pertencer de verdade custa: implica aceitar um lugar, deveres e a autoridade de alguém. Pertencimento sem custo entrega comunidades que não sustentam ninguém.',
    pergunta: 'Onde eu quero os benefícios do vínculo sem os deveres dele?'
  },
  {
    n: 14, principio: 'egbe', titulo: 'A casa que não é de sangue',
    termo: 'Ìdílé', idioma: 'Iorubá', traducao: 'família, linhagem',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'SILVA, Vagner Gonçalves da. Candomblé e Umbanda (2005)',
    contexto: 'No terreiro, a família de santo estabelece parentesco que não depende de laço biológico: há mães, pais, irmãos e filhos por vínculo religioso, com deveres recíprocos reais.',
    reflexao: 'Parentesco escolhido não é parentesco menor. Quem foi malservido pela família de origem costuma descobrir isso tarde, depois de anos supondo que só valia o vínculo de sangue.',
    sentido: 'O que sustenta uma vida não é a origem do vínculo, mas a responsabilidade assumida dentro dele.',
    consideracao: 'Parentesco escolhido não é parentesco menor. Quem foi malservido pela família de origem costuma descobrir isso tarde.',
    pergunta: 'Quem me acolheu sem obrigação de fazê-lo?'
  },
  {
    n: 15, principio: 'egbe', titulo: 'Ter chão',
    termo: 'Ilé', idioma: 'Iorubá', traducao: 'casa, chão, terra',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'SODRÉ, Muniz. O terreiro e a cidade (1988)',
    contexto: 'Ilé nomeia a casa e o chão. O terreiro é lugar físico — árvores, assentamentos, espaços com função definida. A relação com a terra não é metáfora: é territorial, e por isso vulnerável à especulação e ao ataque.',
    reflexao: 'Sentido precisa de endereço. Pessoas sem lugar onde ser reconhecidas adoecem, por mais conectadas que estejam. Lugar não é paisagem: é onde alguém dá pela sua falta.',
    sentido: 'O vazio de sentido tem relação direta com a perda de vínculos estáveis e de lugares de pertencimento. A questão do lugar é também questão de saúde.',
    consideracao: 'Sentido precisa de endereço. Lugar não é paisagem: é onde alguém dá pela nossa falta.',
    pergunta: 'Onde dariam pela minha falta se eu não aparecesse?'
  },
  {
    n: 16, principio: 'egbe', titulo: 'Uma comparação que precisa ser declarada',
    termo: 'Ubuntu', idioma: 'Línguas nguni (África austral)', traducao: 'humanidade; a pessoa é pessoa através de outras pessoas',
    tradicao: 'ATENÇÃO: conceito da África austral, NÃO das tradições afro-brasileiras',
    fonte: 'WILLIAM, Rodney. Apropriação cultural (2019), sobre o risco de fundir matrizes distintas. Ubuntu é conceito nguni da África austral e NÃO é categoria do Candomblé brasileiro.',
    contexto: 'Ubuntu vem das línguas nguni do sul da África e foi difundido internacionalmente a partir do processo sul-africano do século XX. É frequentemente citado no Brasil como se fosse categoria do Candomblé. Não é.',
    reflexao: 'Ubuntu e egbé pensam a pessoa em relação, mas vêm de regiões, línguas e histórias distintas, separadas por milhares de quilômetros. A semelhança é real e a distância também. Dizer as duas coisas é mais honesto do que fundir.',
    sentido: 'A aproximação entre tradições diferentes só é fecunda quando preserva as diferenças. Fusão apressada empobrece os dois lados.',
    consideracao: 'Repetimos frases espirituais cuja origem nunca procuramos. Algumas vêm de lugares muito distantes daqueles a que as atribuímos.',
    pergunta: 'Que ideias eu repito sem saber de onde vieram?'
  },
  {
    n: 17, principio: 'egbe', titulo: 'Amizade é obra, não acaso',
    termo: 'Ọ̀rẹ́', idioma: 'Iorubá', traducao: 'amigo, companheiro',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'SANTOS, Juana Elbein dos. Os Nàgô e a Morte (1975)',
    contexto: 'Nas formulações iorubás sobre convivência, a amizade aparece associada à confiabilidade demonstrada ao longo do tempo, e não à afinidade imediata.',
    reflexao: 'Amizade adulta se constrói por presença repetida em situações sem brilho: mudança, doença, velório, contas. É lá que se descobre quem é amigo.',
    sentido: 'Apreender o outro em sua singularidade exige tempo, e não sobrevive à pressa.',
    consideracao: 'Amizade adulta se constrói por presença repetida em situações sem brilho: mudança, doença, velório, contas.',
    pergunta: 'Que amizade minha está morrendo de negligência e não de conflito?'
  },
  {
    n: 18, principio: 'egbe', titulo: 'Dois mundos que se falam',
    termo: 'Aiyê e Òrun', idioma: 'Iorubá', traducao: 'o mundo dos viventes e o além',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'SANTOS, Juana Elbein dos. Os Nàgô e a Morte (1975)',
    contexto: 'A cosmologia iorubá pensa Aiyê e Òrun em comunicação constante, não em oposição hierárquica. O que se faz aqui repercute lá, e o contrário também.',
    reflexao: 'A separação radical entre sagrado e cotidiano é herança de outra tradição. Aqui, lavar, cozinhar, cuidar e trabalhar não são o oposto do espiritual: são onde ele se dá.',
    sentido: 'O sentido não se reserva para momentos extraordinários. Ele se dá nas tarefas concretas de cada dia, inclusive nas banais.',
    consideracao: 'A separação radical entre o sagrado e o cotidiano é herança de outra tradição. Lavar, cozinhar, cuidar e trabalhar não são o oposto do espiritual.',
    pergunta: 'O que eu desqualifico como "só rotina" e que na verdade sustenta minha vida?'
  },

  /* --- CORPOREIDADE ---------------------------------------------- */
  {
    n: 19, principio: 'corporeidade', titulo: 'O corpo não é obstáculo',
    termo: 'Ara', idioma: 'Iorubá', traducao: 'corpo',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'SODRÉ, Muniz. O terreiro e a cidade (1988)',
    contexto: 'Nas tradições afro-brasileiras o corpo é sede de conhecimento e de relação com o sagrado. Não há a oposição entre carne e espírito que estrutura boa parte da herança filosófica europeia.',
    reflexao: 'Quem foi educado a desconfiar do corpo passa a vida tratando-o como adversário a controlar. Há outra possibilidade: tratá-lo como quem informa.',
    sentido: 'A pessoa é corpo, psiquismo e espírito ao mesmo tempo, sem hierarquia de dignidade entre essas dimensões.',
    consideracao: 'Quem foi educado a desconfiar do corpo passa a vida tratando-o como adversário. Há outra possibilidade: tratá-lo como quem informa.',
    pergunta: 'O que meu corpo vem dizendo que eu venho ignorando?'
  },
  {
    n: 20, principio: 'corporeidade', titulo: 'Caminho se faz com os pés',
    termo: 'Ẹsẹ̀', idioma: 'Iorubá', traducao: 'pé; também "verso" nos corpora orais',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'VERGER, Pierre. Orixás (1981)',
    contexto: 'A mesma palavra nomeia o pé e a unidade dos versos que compõem os corpora orais iorubás. Andar e narrar compartilham a imagem do percurso.',
    reflexao: 'Decisões grandes costumam travar porque tentamos resolvê-las inteiras, de uma vez, sentados. Quase sempre o que falta é o primeiro passo — pequeno, específico, hoje.',
    sentido: 'A vida pergunta em situações concretas, não em abstrações. A resposta também é concreta.',
    consideracao: 'Decisões grandes travam porque tentamos resolvê-las inteiras, sentadas. Quase sempre o que falta é o primeiro passo.',
    pergunta: 'Qual o menor passo real que eu venho adiando por parecer pequeno demais?'
  },
  {
    n: 21, principio: 'corporeidade', titulo: 'A mão que faz',
    termo: 'Ọwọ́', idioma: 'Iorubá', traducao: 'mão',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'LOPES, Nei. Enciclopédia Brasileira da Diáspora Africana (2004)',
    contexto: 'A mão comparece nas formulações iorubás associada ao trabalho e à capacidade de realizar — o que se produz é atribuído a quem põe a mão.',
    reflexao: 'Trabalho manual foi desqualificado no Brasil por razões que têm nome: escravidão e racismo. Recuperar dignidade do fazer com as mãos é também desfazer essa herança.',
    sentido: 'O que se entrega ao mundo pelo trabalho realiza um valor próprio — e nisso não há hierarquia entre o trabalho das mãos e o do pensamento.',
    consideracao: 'O trabalho manual foi desqualificado no Brasil por razões que têm nome: escravidão e racismo.',
    pergunta: 'O que eu produzo que existiria de fato se eu não existisse?'
  },
  {
    n: 22, principio: 'corporeidade', titulo: 'Estar presente é ser visto',
    termo: 'Ojú', idioma: 'Iorubá', traducao: 'olho, rosto, face',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'SODRÉ, Muniz. O terreiro e a cidade (1988)',
    contexto: 'Ojú nomeia o olho e o rosto. Em contextos de convivência iorubá, estar diante de alguém — ser visto e ver — tem peso próprio, distinto do simples estar informado sobre a pessoa.',
    reflexao: 'Saber da vida de alguém pela tela não é conviver. Presença é ficar no mesmo espaço, incluindo o silêncio e o desconforto de não ter o que dizer.',
    sentido: 'O encontro verdadeiro não se dá pela informação sobre o outro, mas pela abertura ao que nele é irrepetível.',
    consideracao: 'Saber da vida de alguém pela tela não é conviver. Presença inclui o silêncio e o desconforto de não ter o que dizer.',
    pergunta: 'De quem eu sei tudo e com quem não convivo há quanto tempo?'
  },
  {
    n: 23, principio: 'corporeidade', titulo: 'Ritmo organiza',
    termo: 'Ìlù', idioma: 'Iorubá', traducao: 'tambor',
    tradicao: 'Candomblé Ketu / matriz iorubá — uso litúrgico não é tratado aqui',
    fonte: 'SILVA, Vagner Gonçalves da. Candomblé e Umbanda (2005)',
    contexto: 'O tambor tem função central e regulada nas tradições de matriz africana. O que se registra aqui é apenas o dado geral de que o ritmo organiza o tempo coletivo — o uso ritual pertence à casa e a quem é da casa.',
    reflexao: 'Corpos se organizam por cadência: sono, refeição, trabalho, descanso. Vidas sem cadência adoecem, mesmo com todos os recursos disponíveis.',
    sentido: 'A estrutura do tempo não é rigidez: é o que torna possível o compromisso. Sem cadência, a intenção não vira ação.',
    consideracao: 'Corpos se organizam por cadência: sono, refeição, trabalho, descanso. Vidas sem cadência adoecem mesmo com todos os recursos disponíveis.',
    pergunta: 'Que cadência minha vida perdeu e faz falta?'
  },
  {
    n: 24, principio: 'corporeidade', titulo: 'Alegria também é matéria séria',
    termo: 'Ìjó', idioma: 'Iorubá', traducao: 'dança',
    tradicao: 'Candomblé Ketu / matriz iorubá — contexto ritual não é tratado aqui',
    fonte: 'SODRÉ, Muniz. O terreiro e a cidade (1988)',
    contexto: 'Nas tradições afro-brasileiras, festa e celebração não são pausa da vida séria: são parte constitutiva da vida comunitária, com função de coesão e de memória.',
    reflexao: 'A cultura do desempenho trata alegria como recompensa a ser merecida depois. Essas tradições a tratam como necessidade — e quem já esteve numa casa em festa entende a diferença.',
    sentido: 'Receber o mundo — beleza, música, afeto — realiza um valor tanto quanto produzir. Não é distração do sentido; é uma de suas formas.',
    consideracao: 'A cultura do desempenho trata alegria como recompensa a ser merecida depois. Há tradições que a tratam como necessidade.',
    pergunta: 'Quando foi a última vez que eu me diverti sem sentir que devia estar fazendo outra coisa?'
  },

  /* --- CIRCULARIDADE --------------------------------------------- */
  {
    n: 25, principio: 'circularidade', titulo: 'O que volta pede outra resposta',
    termo: 'Àtúnwá', idioma: 'Iorubá', traducao: 'retornar, vir de novo',
    tradicao: 'Candomblé Ketu / matriz iorubá — formulações variam entre casas e autores',
    fonte: 'SANTOS, Juana Elbein dos. Os Nàgô e a Morte (1975)',
    contexto: 'Noções de retorno e continuidade entre gerações aparecem em formulações iorubás sobre a relação entre ancestrais e descendentes. As interpretações variam e não devem ser reduzidas a uma doutrina única de reencarnação.',
    reflexao: 'Situações que se repetem na vida de alguém raramente são azar. Costumam ser a mesma pergunta reaparecendo porque a resposta anterior não deu conta.',
    sentido: 'Olhar a própria situação de fora é o que transforma repetição automática em escolha.',
    consideracao: 'Situações que se repetem raramente são azar. Costumam ser a mesma pergunta reaparecendo porque a resposta anterior não deu conta.',
    pergunta: 'O que insiste em voltar porque eu ainda não respondi direito?'
  },
  {
    n: 26, principio: 'circularidade', titulo: 'O ano recomeça',
    termo: 'Ọdún', idioma: 'Iorubá', traducao: 'ano; festa anual',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'VERGER, Pierre. Orixás (1981)',
    contexto: 'A mesma palavra nomeia o ano e a festa que o marca. O tempo coletivo é organizado por celebrações que retornam em ciclo, e não por uma contagem meramente linear.',
    reflexao: 'Datas que voltam nos dão a chance de medir distância: onde eu estava, onde estou. Sem marcos, os anos se confundem e a vida parece não ter tido etapas.',
    sentido: 'O passado não é perda: é celeiro. O que foi vivido está guardado e não pode ser tirado de ninguém.',
    consideracao: 'Datas que voltam dão a chance de medir distância. Sem marcos, os anos se confundem e a vida parece não ter tido etapas.',
    pergunta: 'O que mudou em mim no último ano e eu não tinha percebido?'
  },
  {
    n: 27, principio: 'circularidade', titulo: 'Tempo não é só relógio',
    termo: 'Àkókò', idioma: 'Iorubá', traducao: 'tempo, ocasião, momento oportuno',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'SANTOS, Juana Elbein dos. Os Nàgô e a Morte (1975)',
    contexto: 'A noção de tempo em jogo nas tradições de matriz africana no Brasil inclui o momento adequado — a ocasião — e não apenas a duração medida. Há coisas que só se fazem quando é hora.',
    reflexao: 'Pressa e paciência não são virtudes fixas: dependem de qual é o momento. Boa parte do sofrimento vem de forçar o que não amadureceu, ou adiar o que já estava pronto.',
    sentido: 'Cada situação faz uma pergunta específica. A tarefa é discernir o que esta hora, e não outra, está pedindo.',
    consideracao: 'Pressa e paciência não são virtudes fixas: dependem de qual é o momento. Boa parte do sofrimento vem de forçar o que não amadureceu.',
    pergunta: 'O que já está maduro na minha vida e eu insisto em adiar?'
  },
  {
    n: 28, principio: 'circularidade', titulo: 'Voltar não é retroceder',
    termo: 'Ìpadàbọ̀', idioma: 'Iorubá', traducao: 'regresso, retorno',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'SANTOS, Juana Elbein dos. Os Nàgô e a Morte (1975)',
    contexto: 'Em cosmologias organizadas por ciclos, o retorno não significa perda de progresso: significa reencontrar um ponto já conhecido em outra posição do percurso.',
    reflexao: 'Revisitar a própria história pode ser aprisionamento ou pode ser reencontro. A diferença está em voltar com outros olhos — não para reviver, mas para reler.',
    sentido: 'Separar o que aconteceu da resposta que ainda posso escolher é o que liberta a memória do aprisionamento.',
    consideracao: 'Revisitar a própria história pode ser aprisionamento ou reencontro. A diferença está em voltar com outros olhos.',
    pergunta: 'Que episódio do meu passado eu ainda leio com os olhos de quem eu era?'
  },
  {
    n: 29, principio: 'circularidade', titulo: 'A corrente das gerações',
    termo: 'Ìran', idioma: 'Iorubá', traducao: 'geração, linhagem',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'SANTOS, Juana Elbein dos. Os Nàgô e a Morte (1975)',
    contexto: 'A linhagem organiza pertencimento e transmissão. Saber de quem se descende — por sangue ou por vínculo religioso — situa a pessoa numa sequência com antes e depois.',
    reflexao: 'Estamos no meio de uma corrente. Recebemos de quem não escolhemos e entregamos a quem não vamos conhecer. Isso relativiza a urgência e aumenta a responsabilidade.',
    sentido: 'Viver orientado por algo que ainda não se realizou — e que talvez só se realize depois de nós — é o que dá direção ao presente.',
    consideracao: 'Estamos no meio de uma corrente: recebemos de quem não escolhemos e entregamos a quem não vamos conhecer.',
    pergunta: 'O que eu quero entregar a quem eu não vou conhecer?'
  },
  {
    n: 30, principio: 'circularidade', titulo: 'Paz inteira, não paz de aparência',
    termo: 'Àlàáfíà', idioma: 'Iorubá', traducao: 'paz, saúde, bem-estar completo',
    tradicao: 'Candomblé Ketu / matriz iorubá',
    fonte: 'VERGER, Pierre. Orixás (1981)',
    contexto: 'Àlàáfíà nomeia bem-estar integral: saúde do corpo, paz nas relações e equilíbrio na vida — não a mera ausência de conflito.',
    reflexao: 'Muita paz que buscamos é só evitação: não brigar, não dizer, não olhar. Paz de verdade costuma exigir a conversa que estamos evitando.',
    sentido: 'Certa tensão entre o que sou e o que ainda devo realizar é condição de saúde, não obstáculo a ela. Sentido não é ausência de tensão.',
    consideracao: 'Muita paz que buscamos é evitação: não brigar, não dizer, não olhar. Paz inteira costuma exigir a conversa que se evita.',
    pergunta: 'Onde eu chamo de paz o que é só adiamento?'
  }
];

/* ------------------------------------------------------------------ */
/* Calendário e rastreabilidade editorial                              */
/* ------------------------------------------------------------------ */

/*
 * O acervo ainda não constitui um calendário anual completo. Cada
 * posição é explícita para impedir que a simples inclusão de um texto
 * altere silenciosamente todas as leituras seguintes.
 *
 * Quando existirem 366 meditações revisadas, CICLO_COMPLETO deve passar
 * para true. Até lá, a interface identifica a seleção como leitura do
 * acervo em construção, sem prometer uma leitura inédita por dia.
 */
window.LUZEAXE.CALENDARIO = {
  fuso: 'America/Sao_Paulo',
  totalPrevisto: 366,
  cicloCompleto: false,
  porDiaDoAno: Object.fromEntries(
    window.LUZEAXE.MEDITACOES.map(function (m, indice) {
      return [indice + 1, m.n];
    })
  )
};

/*
 * Índice auditável entre cada meditação e sua referência bibliográfica.
 * O localizador permanece pendente até conferência direta na edição
 * indicada; página ou capítulo jamais devem ser inventados.
 */
window.LUZEAXE.INDICE_EDITORIAL = window.LUZEAXE.MEDITACOES.map(function (m) {
  return {
    meditacao: m.n,
    termo: m.termo,
    tradicao: m.tradicao,
    fonte: m.fonte,
    natureza: 'paráfrase e síntese educativa',
    localizador: null,
    fonteConferida: false,
    revisaoExterna: false
  };
});

/* ------------------------------------------------------------------ */
/* Fontes                                                              */
/* ------------------------------------------------------------------ */

window.LUZEAXE.FONTES = [
  { autor: 'NASCIMENTO, Abdias do', obra: 'O Genocídio do Negro Brasileiro: processo de um racismo mascarado', ed: 'Paz e Terra', ano: '1978' },
  { autor: 'GONZALEZ, Lélia', obra: 'Por um feminismo afro-latino-americano', ed: 'Zahar', ano: '2020' },
  { autor: 'NASCIMENTO, Beatriz', obra: 'Uma história feita por mãos negras', ed: 'Zahar', ano: '2021' },
  { autor: 'SODRÉ, Muniz', obra: 'O terreiro e a cidade: a forma social negro-brasileira', ed: 'Vozes', ano: '1988' },
  { autor: 'SANTOS, Juana Elbein dos', obra: 'Os Nàgô e a Morte: Pàde, Àsèsè e o culto Égun na Bahia', ed: 'Vozes', ano: '1975' },
  { autor: 'SANTOS, Maria Stella de Azevedo (Mãe Stella de Oxóssi)', obra: 'Meu Tempo é Agora', ed: 'Oduduwa', ano: '1993' },
  { autor: 'PRANDI, Reginaldo', obra: 'Mitologia dos Orixás', ed: 'Companhia das Letras', ano: '2001' },
  { autor: 'LOPES, Nei', obra: 'Enciclopédia Brasileira da Diáspora Africana', ed: 'Selo Negro', ano: '2004' },
  { autor: 'SILVA, Vagner Gonçalves da', obra: 'Candomblé e Umbanda: caminhos da devoção brasileira', ed: 'Selo Negro', ano: '2005' },
  { autor: 'VERGER, Pierre', obra: 'Orixás: deuses iorubás na África e no Novo Mundo', ed: 'Corrupio', ano: '1981' },
  { autor: 'BASTIDE, Roger', obra: 'O Candomblé da Bahia: rito nagô', ed: 'Companhia das Letras', ano: '2001' },
  { autor: 'WILLIAM, Rodney', obra: 'Apropriação cultural', ed: 'Pólen', ano: '2019' },
  { autor: 'FERRETTI, Sergio Figueiredo', obra: 'Querebentan de Zomadonu: etnografia da Casa das Minas', ed: 'EDUFMA', ano: '1985' },
  { autor: 'CAPONE, Stefania', obra: 'A busca da África no Candomblé: tradição e poder no Brasil', ed: 'Pallas', ano: '2004' },
  { autor: 'ORTIZ, Renato', obra: 'A morte branca do feiticeiro negro: umbanda e sociedade brasileira', ed: 'Brasiliense', ano: '1991' },
  { autor: 'SLENES, Robert W.', obra: 'Na senzala, uma flor: esperanças e recordações na formação da família escrava', ed: 'Nova Fronteira', ano: '1999' }
];

/* ------------------------------------------------------------------ */
/* Recorte declarado — o que este site cobre e o que não cobre         */
/* ------------------------------------------------------------------ */

window.LUZEAXE.RECORTE = {
  titulo: 'O recorte deste site',
  paragrafos: [
    'O conteúdo publicado aqui concentra-se na matriz iorubá do Candomblé Ketu/Nagô, com referências pontuais ao vocabulário bantu do Candomblé Angola e menções à Umbanda. Esse é o recorte real, e declará-lo é mais honesto do que sugerir cobertura de todas as tradições afro-brasileiras.',
    'Umbanda, Jurema, Tambor de Mina, Xangô do Nordeste, Batuque e Candomblé Jeje aparecem na página Tradições para que o leitor saiba que existem e que são distintos — não porque este site trate cada um com profundidade. Nenhuma delas deve ser lida a partir do que se afirma sobre o Ketu.',
    'Onde o texto fala de "tradições afro-brasileiras" no plural, trata-se de um traço que a literatura registra em mais de uma matriz. Onde a formulação é específica, o campo de matriz indica de qual tradição se fala.'
  ]
};

/* ------------------------------------------------------------------ */
/* Nota de cuidado — obrigatória em todas as páginas                   */
/* ------------------------------------------------------------------ */

window.LUZEAXE.NOTA_CUIDADO = {
  curta: 'Práticas espirituais e comunitárias não substituem avaliação médica ou psicológica.',
  longa:
    'Práticas espirituais e comunitárias podem oferecer pertencimento, consolo e significado. Elas não substituem avaliação médica ou psicológica quando há sofrimento persistente, prejuízo funcional, risco, sintomas físicos importantes ou emergência. O cuidado pode ser construído de modo respeitoso e complementar, com consentimento da pessoa.'
};


/* ------------------------------------------------------------------ */
/* Etiquetas editoriais visíveis                                       */
/* ------------------------------------------------------------------ */

window.LUZEAXE.ETIQUETAS = [
  { id: 'termo',     nome: 'Termo da tradição',   desc: 'Palavra na língua de origem, com idioma e tradução aproximada. Grafias e sentidos variam entre nações, casas e autores.' },
  { id: 'contexto',  nome: 'Tradição / contexto', desc: 'Descrição situada de uma comunidade ou corrente, com região e período quando aplicável.' },
  { id: 'sintese',   nome: 'Síntese histórica',   desc: 'Reconstrução baseada em pesquisa acadêmica, com a obra que a sustenta.' },
  { id: 'voz',       nome: 'Voz da comunidade',   desc: 'Fala autorizada de liderança ou integrante identificado, publicada com consentimento. Nenhum conteúdo deste site recebe esta etiqueta enquanto não houver entrevistas realizadas.' },
  { id: 'autoral',   nome: 'Reflexão autoral',    desc: 'Texto contemporâneo do Dr. Eduardo Mimessi, sem pretensão doutrinária.' },
  { id: 'aplicacao', nome: 'Aplicação existencial', desc: 'Perguntas de reflexão, sem prescrição religiosa nem clínica.' },
  { id: 'saude',     nome: 'Saúde mental',        desc: 'Conteúdo educativo com limites declarados e nota de cuidado obrigatória.' },
  { id: 'alerta',    nome: 'Distinção necessária', desc: 'Aviso sobre confusões correntes que este site recusa.' }
];

/* ------------------------------------------------------------------ */
/* Semáforo de risco editorial                                         */
/* ------------------------------------------------------------------ */

window.LUZEAXE.SEMAFORO = [
  { faixa: 'verde',    publica: 'Sim, com fonte.',
    exemplos: 'História pública, patrimônio, conceitos qualificados, entrevistas autorizadas, bibliografia.' },
  { faixa: 'amarela',  publica: 'Somente após revisão externa.',
    exemplos: 'Mitos, diferenças entre nações, sofrimento, transe, gênero, sacrifício, cura, sincretismo.' },
  { faixa: 'vermelha', publica: 'Não publicar.',
    exemplos: 'Segredos, instruções rituais, diagnóstico espiritual, promessa de cura, imagens não autorizadas, provérbio sem origem.' }
];

/* ------------------------------------------------------------------ */
/* Quatro testes aplicados a cada afirmação                            */
/* ------------------------------------------------------------------ */

window.LUZEAXE.TESTES = [
  { nome: 'Localização',    p: 'Esta afirmação vale para qual tradição, nação, casa, região e período?' },
  { nome: 'Autoridade',     p: 'Quem pode legitimamente dizê-la — liderança, iniciado, pesquisador, documento público ou autor contemporâneo?' },
  { nome: 'Gênero textual', p: 'Trata-se de mito, narrativa ritual, memória, dado histórico, interpretação acadêmica ou reflexão autoral?' },
  { nome: 'Publicabilidade',p: 'Ainda que verdadeira, a informação é pública, respeitosa, necessária e não expõe conhecimento reservado?' }
];

/* ------------------------------------------------------------------ */
/* Formulações proibidas — verificadas pelo validador                  */
/* ------------------------------------------------------------------ */

window.LUZEAXE.NAO_DIZEMOS = {
  saude: [
    'Perder axé significa adoecer.',
    'A doença é um aviso do Orixá ou cobrança do Ori.',
    'O ebó resolve o sofrimento.',
    'O terreiro é terapia.',
    'A incorporação é um valor vivencial máximo.',
    'Ansiedade é excesso de foco que impede o axé de fluir.'
  ],
  equivalencias: [
    'Ori é a missão de vida da pessoa.',
    'Axé é a vontade de sentido.',
    'Olodumare é o suprassentido.',
    'Orixás são arquétipos ou forças psicológicas.'
  ],
  porque:
    'As frases da primeira lista confundem descrição religiosa, aconselhamento clínico e interpretação autoral: induzem culpa, atrasam tratamento e criam expectativa de cura. As da segunda transformam divindades em categorias psicológicas — reduzem uma cosmologia a ilustração de teoria alheia. Este site descreve que pessoas e comunidades compreendem experiências por essas linguagens, sem afirmar causalidade universal nem prescrever resposta ritual.'
};

/* ------------------------------------------------------------------ */
/* Glossário — definições de trabalho, nunca universais                */
/* ------------------------------------------------------------------ */

window.LUZEAXE.GLOSSARIO = [
  { t: 'Axé / àṣẹ', d: 'Termo nagô/iorubá relacionado a potência e eficácia sagrada, transmitida e atualizada em relações e práticas. Não equivale simplesmente a "energia".' },
  { t: 'Aiyê / Ayé', d: 'Mundo da existência vivida em repertórios iorubás; grafia e interpretação variam.' },
  { t: 'Babalawo', d: 'Sacerdote de Ifá em tradições próprias; não é sinônimo de babalorixá.' },
  { t: 'Babalorixá / Ialorixá', d: 'Autoridades sacerdotais em casas de culto aos Orixás; títulos e funções variam.' },
  { t: 'Caboclo', d: 'Categoria de entidades e identidades com sentidos diversos em Umbandas, Mina, Candomblés de Caboclo, Jurema e outros campos.' },
  { t: 'Candomblé', d: 'Conjunto plural de religiões iniciáticas de terreiro, organizado em casas, linhagens e nações.' },
  { t: 'Encantado', d: 'Ser ou entidade presente em tradições como Mina, Terecô e Jurema; não equivale genericamente a espírito de morto.' },
  { t: 'Egungun / Egun', d: 'Termos relacionados a mortos e ancestrais em repertórios iorubás/nagô, com cultos específicos. Não equivalem a Pretos-Velhos.' },
  { t: 'Exu', d: 'Orixá em tradições nagô e nome de entidades e linhas em Umbandas e Quimbandas; exige distinção contextual.' },
  { t: 'Ifá', d: 'Sistema divinatório e corpus oral associado a Orunmilá e a sacerdócios próprios no mundo iorubá e nas diásporas. Não é sinônimo de Candomblé nem se confunde automaticamente com o merindilogun.' },
  { t: 'Inquice / Nkisi', d: 'Ser sagrado em repertórios Angola/Congo e bantu; não reduzir a "Orixá bantu".' },
  { t: 'Itan', d: 'Narrativa ou história em língua iorubá; pode integrar repertórios míticos e divinatórios. Não é livro canônico de todo Candomblé.' },
  { t: 'Jurema', d: 'Planta, referência sagrada e nome de campo religioso afro-indígena nordestino, conforme o contexto.' },
  { t: 'Merindilogun', d: 'Sistema divinatório com dezesseis búzios difundido em tradições de Orixás; não é automaticamente idêntico a Ifá.' },
  { t: 'Nação', d: 'Pertencimento e repertório ritual historicamente constituído; não equivale a nacionalidade moderna.' },
  { t: 'Odu / odù', d: 'Configurações e corpos narrativos em sistemas divinatórios; usos variam entre Ifá e outras práticas.' },
  { t: 'Ori', d: 'Cabeça e princípio pessoal em repertórios iorubás/nagô. Não traduzir automaticamente como alma, ego, missão ou destino fechado.' },
  { t: 'Orixá', d: 'Divindade ou presença sagrada em tradições iorubás e nagô; definições variam e não se reduzem a forças naturais.' },
  { t: 'Orun', d: 'Domínio não visível em repertórios iorubás; não equivale simplesmente ao céu cristão.' },
  { t: 'Pretos-Velhos', d: 'Entidades centrais em muitas Umbandas, associadas a memória, conselho, cuidado e ancestralidade em leituras diversas. Não equivalem ao culto de Egungun nem são ancestrais do Candomblé.' },
  { t: 'Terreiro', d: 'Território religioso e comunitário; também chamado de casa, roça, ilê, tenda ou centro, conforme a tradição. Não é apenas espaço de culto: é território, com implicações fundiárias e patrimoniais concretas.' },
  { t: 'Transe / incorporação', d: 'Categorias para experiências rituais de alteração de consciência e presença espiritual. A terminologia varia e deve ser a da comunidade descrita. Não são, em si, sinal de adoecimento nem devem ser lidas por grade clínica.' },
  { t: 'Umbanda', d: 'Conjunto plural de religiões brasileiras consolidado no século XX, com combinações variáveis de repertórios afro-brasileiros, indígenas, católicos, espíritas e esotéricos.' },
  { t: 'Vodum', d: 'Divindade ou ser sagrado de tradições ewe-fon e Jeje/Mina; não é mero sinônimo de Orixá.' }
];

/* ------------------------------------------------------------------ */
/* Registro de revisão externa                                         */
/* ------------------------------------------------------------------ */

window.LUZEAXE.REVISAO = {
  estado: 'pendente',
  exigencia: 'Publicação autorizada somente após revisão por pessoas das tradições tratadas, com nome, vínculo, data e escopo registrados.',
  registros: []
};
