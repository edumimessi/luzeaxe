# Luz e Axé

Espaço em língua portuguesa sobre as tradições afro-brasileiras e a busca de sentido, criado por Dr. Eduardo D'Angelo Mimessi — médico, CRM-SP 121.217.

Site oficial: <https://luzeaxe.com.br>

Este repositório é a **fonte nomeada** dos cinco princípios que organizam o projeto: ancestralidade, axé, comunidade (egbé), corporeidade e circularidade. Qualquer outro site da Biblioteca Vida e Sentido que utilize esse arcabouço deve creditar as tradições afro-brasileiras e apontar para cá.

---

## Documento reitor

Este repositório aplica o **Caderno-base "Tradições Religiosas Afro-Brasileiras" (Projeto Vida e Sentido, v1.0, agosto de 2026)**, de autoria do Dr. Eduardo D'Angelo Mimessi. O caderno é o fundamento interno; este repositório é a sua execução pública.

Em caso de divergência entre o que está aqui e o caderno, **o caderno prevalece**. As regras dele que puderam virar verificação automática estão em `scripts/validate.mjs`, com referência à seção de origem.

## O problema que este repositório existe para resolver

Um site assim corre um risco específico: misturar, no mesmo parágrafo, **ensinamento tradicional**, **síntese acadêmica**, **interpretação contemporânea** e **reflexão autoral** — e a interpretação do autor acabar lida como doutrina religiosa.

Toda a arquitetura editorial e técnica daqui existe para impedir isso. Cada bloco declara o que é, de qual tradição fala e qual obra o sustenta. O validador bloqueia a publicação quando a separação se perde.

## Recorte declarado

O conteúdo concentra-se na **matriz iorubá do Candomblé Ketu/Nagô**, com referências pontuais ao vocabulário bantu do Candomblé Angola e menções à Umbanda.

Umbanda, Jurema, Tambor de Mina, Xangô do Nordeste, Batuque e Candomblé Jeje aparecem em `tradicoes.html` para que o leitor saiba que existem e que são distintos — não porque o site trate cada um com profundidade. Declarar o recorte é mais honesto do que sugerir cobertura de todas as tradições afro-brasileiras numa única cosmologia.

## Posição do autor

O autor **não é sacerdote, iniciado nem autoridade religiosa** de nenhuma das tradições apresentadas. Escreve como médico, autor e educador, a partir de literatura acadêmica e do pensamento negro brasileiro.

O site **não é iniciático** e **não presta assistência à saúde**.

## Ordem fixa de cada conteúdo

1. **Tradição ou contexto** — Candomblé Ketu, Jeje, Angola, Umbanda, Tambor de Mina, Xangô do Nordeste ou Batuque. Nunca "as religiões afro".
2. **Fonte** — obra, pesquisador ou liderança, com ano.
3. **Síntese educativa** — explicação sem pretensão de autoridade religiosa.
4. **Reflexão autoral** — interpretação do Dr. Eduardo, marcada como tal.
5. **Diálogo existencial proposto pelo autor** — aproximação com a busca de sentido, declarada como proposta.
6. **Aplicação existencial** — proposição e pergunta aberta. Nunca exercício, tarefa ou instrução ritual.
7. **Nota de cuidado** — espiritualidade não substitui assistência médica ou psicológica.

## Princípios editoriais

Verificados por `scripts/validate.mjs`.

1. **Marcar o gênero de cada bloco.** Termo da tradição, síntese educativa, reflexão autoral, diálogo existencial, aplicação existencial. Reflexão contemporânea nunca aparece como doutrina.
2. **Nomear a tradição específica.** Toda afirmação indica de qual matriz fala.
3. **Citar a fonte.** Toda síntese educativa aponta a obra que a sustenta, com ano.
4. **Separar Candomblé de Umbanda.** Egun é do Candomblé; preto-velho é da Umbanda. Reuni-los sob "ancestralidade" apaga duas religiões distintas.
5. **Não revelar nem simular fundamento.** Conhecimento iniciático, feitura, jogo e liturgia interna ficam fora.
6. **Não prescrever prática religiosa.** Nunca oferendas, obrigações, banhos ou qualquer ato de culto.
6b. **Não ser caderno de exercícios.** Sem tarefas, roteiros de semanas ou atividades a cumprir. Prescrever exercícios espirituais a partir de tradições alheias seria assumir autoridade que o autor não tem. Cada leitura termina em proposição e pergunta aberta — o validador rejeita considerações escritas no imperativo.
7. **Não prometer cura.** Água, plantas, música e natureza aparecem no registro cultural e contemplativo, jamais como tratamento. O site nunca opõe espiritualidade a cuidado profissional.
8. **Não ler sofrimento como sinal espiritual.** Adoecimento e perda não são castigo, desequilíbrio de energia nem afastamento do destino pessoal. Leituras assim culpabilizam quem sofre.
9. **Não atribuir frase sem fonte.** Nada de "provérbio africano" genérico nem de "as tradições sabem disso há muito tempo".
10. **Não confundir matrizes.** *Ubuntu* é conceito nguni da África austral, não sinônimo de *egbé* iorubá nem categoria do Candomblé brasileiro.
11. **Não sincretizar sem declarar.** A correspondência entre orixás e santos católicos é história de perseguição, não equivalência teológica.
12. **Manter velado o arcabouço teórico do autor.** Sem vocabulário técnico, escolas ou autores de psicologia e psicoterapia. A tradição nunca é apresentada como ilustração ou versão antiga de teoria alguma.
13. **Nomear o racismo religioso.** Perseguição, criminalização histórica e ataques a terreiros são conteúdo, não nota de rodapé.
14. **Não misturar projeto editorial e assistência médica.** Nenhuma página aponta para a clínica. O validador rejeita o build se um link desses aparecer.

## Estrutura

```
README.md
LICENSE                        MIT para o código; direitos reservados para o conteúdo
docs/
  index.html  devocional.html  principios.html  tradicoes.html
  orixas.html  conceitos.html  vozes.html  metodo-editorial.html
  fontes.html  autor.html  offline.html  404.html
  assets/css/site.css          folha única; nenhum CSS repetido nas páginas
  assets/js/app.js             tema e comportamento comum
  assets/js/devocional.js      leitor da meditação do dia
  assets/data/reflexoes.js     princípios, tradições, meditações, glossário e fontes
  CNAME  robots.txt  sitemap.xml  manifest.webmanifest  sw.js
scripts/build.mjs              gera as páginas estáticas a partir dos dados
scripts/validate.mjs           auditoria editorial e técnica
```

As páginas de conteúdo têm o texto **embutido no HTML**, geradas por `build.mjs`. O site é legível e indexável sem JavaScript, e os dados mantêm fonte única. Só o devocional renderiza no cliente, porque depende da data corrente.

`docs/metodologia.html` e `docs/praticas.html` são apenas redirecionamentos de endereços antigos, e `docs/assets/css/styles.css` é resíduo obsoleto — os três podem ser apagados.

## Identidade visual — "Raízes de Luz"

Índigo profundo como base, dourado envelhecido, marfim para leitura e verde discreto como cor de vida. Linguagem abstrata: círculos concêntricos, raízes e caminhos.

Deliberadamente ausentes: fontes decorativas ditas "tribais", colagens genericamente africanas, símbolos sagrados usados como ornamento e qualquer representação — sobretudo gerada artificialmente — de rituais ou de orixás. Um deslize visual aqui custa mais credibilidade do que dez páginas bem escritas recuperam.

## Conteúdo devocional

Ciclo previsto de 366 meditações; **30 escritas**, seis por princípio, definindo o padrão editorial. As demais devem ser escritas com autoria própria e passar por revisão externa. Enquanto o ciclo não estiver completo, a interface declara que percorre um acervo preliminar; não apresenta a rotação como 366 leituras inéditas.

O calendário fica em `LUZEAXE.CALENDARIO`, com fuso fixado em `America/Sao_Paulo`. A posição anual é explícita e estável: acrescentar uma meditação não pode deslocar silenciosamente as demais. `cicloCompleto` somente pode ser ativado quando as 366 entradas existirem e forem validadas.

Cada leitura também possui uma entrada em `LUZEAXE.INDICE_EDITORIAL`, ligando termo, tradição e fonte. O localizador bibliográfico permanece nulo até conferência direta na edição consultada; página ou capítulo nunca são inferidos nem fabricados.

Os textos ficam em `docs/assets/data/reflexoes.js`, na constante `MEDITACOES`:

| Campo | Gênero |
|---|---|
| `termo`, `idioma`, `traducao` | termo da tradição |
| `tradicao` | matriz de que se fala |
| `fonte` | obra que sustenta a síntese, com ano |
| `contexto` | síntese educativa |
| `reflexao` | reflexão autoral |
| `sentido` | diálogo existencial proposto pelo autor |
| `consideracao` | proposição para reflexão, nunca tarefa nem ritual |
| `pergunta` | registro pessoal |

## Revisão externa — pendência bloqueante

A publicação deste site está condicionada à **revisão por pessoas das tradições tratadas**, preferencialmente lideranças religiosas e pesquisadoras negras. Enquanto não ocorrer, o site permanece como versão preliminar — a tarja no topo de cada página declara isso, e o validador emite aviso.

Registrar aqui, quando houver: quem revisou, em que data, o que foi alterado.

## Desenvolvimento

```bash
node scripts/build.mjs      # reescreve o HTML e o sitemap a partir dos dados
node scripts/validate.mjs   # auditoria; sai com código 1 em caso de erro
python3 -m http.server 8000 --directory docs
```

Sem bundler e sem dependências: os dois scripts usam apenas Node puro.

O validador bloqueia a publicação quando encontra prática ritual prescrita, tradição não nomeada, síntese sem fonte com ano, vocabulário clínico nas práticas, formulação que opõe espiritualidade a tratamento, sofrimento lido como sinal espiritual, citação sem procedência, termo técnico que deve permanecer velado, link para a clínica, link em HTTP, link interno quebrado, CSS embutido nas páginas, página sem nota de cuidado ou service worker devolvendo HTML no lugar de um recurso.

## Publicação

GitHub Pages, branch `main`, pasta `/docs`. Domínio `luzeaxe.com.br` em `docs/CNAME`. Manter **Enforce HTTPS** ativado. Todos os links internos são relativos.

---

Concebido e curado editorialmente pelo Dr. Eduardo D'Angelo Mimessi, desenvolvido com apoio de ferramentas digitais.
