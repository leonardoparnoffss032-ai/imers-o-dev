// c:/Users/Parnoff/VSprojects/script.js
// c:/Users/Parnoff/VSprojects/projectAlura.js

// --- Banco de dados de artigos --- //
// Adicionamos 'id' para identificação única e 'content' com o conteúdo do artigo.
const articles = [
    // --- TÓPICOS GERAIS ---
    { 
        id: 1,
        title: 'Como fazer uma Redação nota 1000',
        url: '#',
        tags: ['português', 'redação', 'vestibular', 'enem'],
        content: `
            <h2>Estrutura da Redação do ENEM</h2><p>A redação do ENEM exige uma estrutura dissertativo-argumentativa clara, dividida em introdução, desenvolvimento e conclusão. Na introdução, apresente a tese. No desenvolvimento, use dois ou três parágrafos para defender sua tese com argumentos sólidos. Na conclusão, retome a tese e proponha uma intervenção social detalhada.</p>
            <h3>Principais Regras e Critérios de Correção</h3>
            <ul>
                <li><strong>Respeito aos Direitos Humanos:</strong> Propostas de intervenção que desrespeitem os direitos humanos podem zerar a competência 5.</li>
                <li><strong>Não fugir do tema:</strong> A fuga total ao tema proposto anula a redação.</li>
                <li><strong>Tipo Textual:</strong> O texto deve ser obrigatoriamente dissertativo-argumentativo.</li>
                <li><strong>Mínimo de Linhas:</strong> Redações com menos de 7 linhas são anuladas.</li>
                <li><strong>Não copiar os textos motivadores:</strong> Trechos copiados dos textos de apoio são desconsiderados na contagem de linhas e na avaliação.</li>
            </ul>
            <h3>Confira as Regras Completas</h3>
            <ul>
                <li><a href="https://download.inep.gov.br/publicacoes/institucionais/avaliacoes_e_exames_da_educacao_basica/a_redacao_do_enem_cartilha_do_participante_2023.pdf" target="_blank" rel="noopener noreferrer">Cartilha do Participante - A Redação do Enem (PDF Oficial)</a></li>
                <li><a href="https://querobolsa.com.br/revista/10-regras-da-redacao-enem-para-voce-conquistar-a-nota-1000" target="_blank" rel="noopener noreferrer">10 Regras da Redação do Enem (Quero Bolsa)</a></li>
            </ul>
        `
    },
    {
        id: 2, 
        title: 'O método de estudo Feynman para aprender qualquer coisa', 
        url: '#', 
        tags: ['técnicas de estudo', 'organização', 'aprender'], 
        content: `
            <p>Criado pelo físico vencedor do Prêmio Nobel, Richard Feynman, este método é uma abordagem poderosa para aprender e reter informações complexas. A ideia central é que, se você não consegue explicar algo de forma simples, você não o entendeu de verdade.</p>
            <h3>Os 4 Passos do Método Feynman</h3>
            <ol>
                <li><strong>Escolha um Conceito:</strong> Pegue um pedaço de papel e escreva no topo o nome do conceito que você quer aprender.</li>
                <li><strong>Ensine para uma Criança:</strong> Escreva uma explicação sobre o conceito como se estivesse ensinando para alguém que não sabe nada sobre o assunto. Use linguagem simples e analogias. Evite jargões.</li>
                <li><strong>Identifique as Lacunas e Volte aos Estudos:</strong> Ao tentar simplificar, você inevitavelmente encontrará pontos onde sua explicação é fraca, confusa ou incorreta. Essas são as suas lacunas de conhecimento. Volte ao material original (livros, anotações) e estude esses pontos até conseguir explicá-los de forma simples.</li>
                <li><strong>Revise e Simplifique Ainda Mais:</strong> Leia sua explicação em voz alta. Se ainda parece complicada ou usa muitos termos técnicos, refine-a. Organize suas anotações em uma narrativa coesa e simples.</li>
            </ol>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://pt.wikipedia.org/wiki/Richard_Feynman" target="_blank" rel="noopener noreferrer">Richard Feynman - Biografia na Wikipedia</a></li>
                <li><a href="https://fs.blog/feynman-technique/" target="_blank" rel="noopener noreferrer">Artigo do Farnam Street sobre a técnica (em inglês)</a></li>
            </ul>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.alura.com.br/formacao-desenvolvimento-pessoal" target="_blank" rel="noopener noreferrer">Formação Desenvolvimento Pessoal na Alura</a></li>
                <li><a href="https://www.alura.com.br/curso-online-foco-gerenciamento-tempo" target="_blank" rel="noopener noreferrer">Curso de Foco e Gerenciamento do Tempo na Alura</a></li>
                <li><a href="https://www.coursera.org/learn/aprender" target="_blank" rel="noopener noreferrer">Curso "Aprendendo a Aprender" no Coursera</a></li>
            </ul>
        ` 
    },
    { 
        id: 3, 
        title: 'Atualidades: o que pode cair no vestibular?', 
        url: '#', 
        tags: ['história', 'geografia', 'sociologia', 'vestibular'], 
        content: `
            <h2>Fique de Olho</h2><p>Temas como crises climáticas, tensões geopolíticas (ex: Leste Europeu), avanços em inteligência artificial e questões de desigualdade social são fortes candidatos a aparecerem nas provas.</p>
            <h3>Confira aqui</h3>
            <ul><li><a href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem" target="_blank" rel="noopener noreferrer">Conteúdos para a prova do ENEM (Site Oficial INEP)</a></li></ul>
        ` 
    },
    { 
        id: 4, 
        title: 'Reading Strategies para Vestibulares', 
        url: '#', 
        tags: ['idiomas', 'inglês', 'espanhol', 'leitura'], 
        content: '<h2>Skimming e Scanning</h2><p>Use <strong>Skimming</strong> para ter uma ideia geral do texto e <strong>Scanning</strong> para encontrar informações específicas. Não precisa entender todas as palavras.</p><h3>Cursos Recomendados</h3><ul><li><a href="https://www.alura.com.br/formacao-ingles" target="_blank" rel="noopener noreferrer">Formação Inglês na Alura</a></li><li><a href="https://www.duolingo.com/" target="_blank" rel="noopener noreferrer">Duolingo</a></li></ul>' 
    },

    // --- 1º ANO ---
    // Português e Literatura
    { 
        id: 5, 
        title: 'Funções da linguagem', 
        url: '#', 
        tags: ['português', 'comunicação'], 
        ano: 1, 
        content: `
            <p>As Funções da Linguagem, propostas pelo linguista Roman Jakobson, descrevem os diferentes propósitos que a comunicação pode ter, cada uma focada em um dos elementos do processo de comunicação (emissor, receptor, mensagem, canal, código, contexto).</p>
            <h3>As 6 Funções da Linguagem</h3>
            <ul>
                <li><strong>Função Referencial ou Denotativa:</strong> Foco no contexto. Visa informar de maneira objetiva. Ex: Notícias de jornal.</li>
                <li><strong>Função Emotiva ou Expressiva:</strong> Foco no emissor. Expressa sentimentos e emoções. Ex: Diários, cartas de amor.</li>
                <li><strong>Função Conativa ou Apelativa:</strong> Foco no receptor. Tenta convencer ou dar ordens. Ex: Publicidade, discursos.</li>
                <li><strong>Função Fática:</strong> Foco no canal. Testa ou mantém a comunicação. Ex: "Alô?", "Entende?".</li>
                <li><strong>Função Metalinguística:</strong> Foco no código. A linguagem falando dela mesma. Ex: Dicionários, aulas de gramática.</li>
                <li><strong>Função Poética:</strong> Foco na mensagem. Preocupa-se com a forma e a estética da mensagem. Ex: Poemas, obras literárias.</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://brasilescola.uol.com.br/portugues/funcoes-linguagem.htm" target="_blank" rel="noopener noreferrer">Artigo Completo no Brasil Escola</a></li>
            </ul>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.alura.com.br/formacao-comunicacao-escrita" target="_blank" rel="noopener noreferrer">Formação Comunicação e Escrita na Alura</a></li>
            </ul>
        ` 
    },
    { 
        id: 6, 
        title: 'Gêneros textuais', 
        url: '#', 
        tags: ['português', 'redação'], 
        ano: 1, 
        content: `
            <p>Gêneros textuais são as diferentes formas que um texto pode assumir para cumprir uma função social específica. Eles são flexíveis e adaptam-se às necessidades de comunicação.</p>
            <h3>Exemplos de Gêneros Textuais</h3>
            <ul>
                <li><strong>Narrativos:</strong> Conto, Crônica, Romance, Fábula.</li>
                <li><strong>Descritivos:</strong> Cardápio, Laudo, Anúncio classificado.</li>
                <li><strong>Argumentativos:</strong> Artigo de opinião, Editorial, Resenha crítica.</li>
                <li><strong>Expositivos:</strong> Notícia, Seminário, Verbete de dicionário.</li>
                <li><strong>Injuntivos:</strong> Receita culinária, Manual de instruções, Bula de remédio.</li>
            </ul>
            <p>É importante não confundir com <strong>Tipos Textuais</strong> (narração, descrição, argumentação, exposição, injunção), que são as estruturas que compõem os gêneros.</p>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://www.todamateria.com.br/generos-textuais/" target="_blank" rel="noopener noreferrer">Gêneros Textuais no Toda Matéria</a></li>
            </ul>
        ` 
    },    
    { 
        id: 7, 
        title: 'Morfologia', 
        url: '#', 
        tags: ['português', 'gramática'], 
        ano: 1, 
        content: `
            <p>A Morfologia é a parte da gramática que estuda a estrutura, a formação e a classificação das palavras. Ela analisa as palavras de forma isolada, fora de um contexto de frase.</p>
            <h3>As 10 Classes de Palavras</h3>
            <ul>
                <li><strong>Variáveis:</strong> Substantivo, Artigo, Adjetivo, Numeral, Pronome, Verbo.</li>
                <li><strong>Invariáveis:</strong> Advérbio, Preposição, Conjunção, Interjeição.</li>
            </ul>
            <p>Entender a morfologia é a base para compreender a sintaxe, que estuda a função das palavras na oração.</p>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://mundoeducacao.uol.com.br/gramatica/morfologia.htm" target="_blank" rel="noopener noreferrer">O que é Morfologia? no Mundo Educação</a></li>
            </ul>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.alura.com.br/formacao-comunicacao-escrita" target="_blank" rel="noopener noreferrer">Formação Comunicação e Escrita na Alura</a></li>
            </ul>
        ` 
    },
    { 
        id: 8, 
        title: 'Sintaxe básica (termos da oração)', 
        url: '#', 
        tags: ['português', 'gramática'], 
        ano: 1, 
        content: `
            <p>A Sintaxe estuda a função que as palavras desempenham dentro de uma oração e a relação entre elas. A análise sintática organiza a oração em termos essenciais, integrantes e acessórios.</p>
            <h3>Termos Essenciais da Oração</h3>
            <ul>
                <li><strong>Sujeito:</strong> O ser sobre o qual se declara algo.</li>
                <li><strong>Predicado:</strong> Tudo o que se declara sobre o sujeito.</li>
            </ul>
            <h3>Termos Integrantes e Acessórios</h3>
            <p>Os <strong>termos integrantes</strong> completam o sentido de verbos e nomes (ex: objetos direto e indireto, complemento nominal). Os <strong>termos acessórios</strong> adicionam uma informação extra, mas não são essenciais (ex: adjunto adnominal, adjunto adverbial).</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://www.todamateria.com.br/termos-essenciais-da-oracao-sujeito-e-predicado/" target="_blank" rel="noopener noreferrer">Termos da Oração no Toda Matéria</a></li></ul>
            <h3>Cursos Recomendados</h3>
            <ul><li><a href="https://www.alura.com.br/formacao-comunicacao-escrita" target="_blank" rel="noopener noreferrer">Formação Comunicação e Escrita na Alura</a></li></ul>
        ` 
    },
    { 
        id: 9, 
        title: 'Figuras de linguagem', 
        url: '#', 
        tags: ['português', 'literatura'], 
        ano: 1, 
        content: `
            <p>Figuras de linguagem são recursos expressivos que desviam da linguagem denotativa (literal) para criar efeitos de sentido, expressividade e originalidade.</p>
            <h3>Principais Figuras</h3>
            <ul>
                <li><strong>Metáfora:</strong> Comparação implícita. "A vida é uma nuvem que voa."</li>
                <li><strong>Comparação:</strong> Comparação explícita com conectivo. "Seus olhos são <strong>como</strong> jabuticabas."</li>
                <li><strong>Metonímia:</strong> Troca de uma palavra por outra com relação de proximidade. "Li Machado de Assis" (a obra pelo autor).</li>
                <li><strong>Ironia:</strong> Dizer o contrário do que se pensa. "Que pessoa educada!" (para alguém grosseiro).</li>
                <li><strong>Hipérbole:</strong> Exagero intencional. "Estou morrendo de sede."</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://www.significados.com.br/figuras-de-linguagem/" target="_blank" rel="noopener noreferrer">Figuras de Linguagem no Significados.com.br</a></li></ul>
            <h3>Cursos Recomendados</h3>
            <ul><li><a href="https://www.alura.com.br/formacao-comunicacao-escrita" target="_blank" rel="noopener noreferrer">Formação Comunicação e Escrita na Alura</a></li></ul>
        ` 
    },
    { 
        id: 10, 
        title: 'Trovadorismo, Classicismo, Quinhentismo', 
        url: '#', 
        tags: ['literatura', 'escolas literárias'], 
        ano: 1, 
        content: `
            <h3>Trovadorismo (Idade Média)</h3>
            <p>Primeira manifestação literária da língua portuguesa. Marcada pelas cantigas (poemas cantados) e pelo teocentrismo. Dividem-se em <strong>cantigas líricas</strong> (de amor e de amigo) e <strong>satíricas</strong> (de escárnio e de maldizer).</p>
            <h3>Quinhentismo (1500)</h3>
            <p>Corresponde às primeiras manifestações literárias no Brasil, no contexto das Grandes Navegações. Inclui a <strong>literatura de informação</strong> (cartas e relatos de viajantes, como a Carta de Pero Vaz de Caminha) e a <strong>literatura de catequese</strong> (textos dos jesuítas, como os de José de Anchieta).</p>
            <h3>Classicismo (Século XVI)</h3>
            <p>Movimento que retoma os valores da cultura greco-romana (antropocentrismo, racionalismo, universalismo). Em Portugal, o grande nome é Luís Vaz de Camões, autor de "Os Lusíadas".</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://www.todamateria.com.br/escolas-literarias/" target="_blank" rel="noopener noreferrer">Escolas Literárias no Toda Matéria</a></li></ul>
            <h3>Cursos Recomendados</h3>
            <ul><li><a href="https://www.alura.com.br/formacao-comunicacao-escrita" target="_blank" rel="noopener noreferrer">Formação Comunicação e Escrita na Alura</a></li></ul>
        ` 
    },
    // Matemática
    { 
        id: 11, 
        title: 'Conjuntos Numéricos', 
        url: '#', 
        tags: ['matemática', 'conjuntos'], 
        ano: 1, 
        content: `
            <p>Os conjuntos numéricos agrupam os números de acordo com suas características. Cada conjunto é um subconjunto de um conjunto maior, criando uma hierarquia.</p>
            <h3>Principais Conjuntos</h3>
            <ul>
                <li><strong>Naturais (ℕ):</strong> {0, 1, 2, 3, ...} - Usados para contagem.</li>
                <li><strong>Inteiros (ℤ):</strong> {... -2, -1, 0, 1, 2, ...} - Inclui os números negativos.</li>
                <li><strong>Racionais (ℚ):</strong> Números que podem ser escritos como uma fração (a/b), incluindo dízimas periódicas.</li>
                <li><strong>Irracionais (I):</strong> Números que não podem ser escritos como uma fração exata, como dízimas não periódicas (ex: π, √2).</li>
                <li><strong>Reais (ℝ):</strong> A união de todos os conjuntos anteriores (Racionais + Irracionais).</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://brasilescola.uol.com.br/matematica/conjuntos-numericos.htm" target="_blank" rel="noopener noreferrer">Conjuntos Numéricos no Brasil Escola</a></li>
            </ul>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.alura.com.br/formacao-logica-programacao" target="_blank" rel="noopener noreferrer">Formação Lógica de Programação na Alura</a></li>
            </ul>
        ` 
    },
    { 
        id: 12, 
        title: 'Função Afim (1º Grau)', 
        url: '#', 
        tags: ['matemática', 'funções'], 
        ano: 1, 
        content: `
            <p>Uma função afim, também conhecida como função do 1º grau, é toda função que pode ser escrita na forma <strong>f(x) = ax + b</strong>, onde 'a' e 'b' são números reais e 'a' é diferente de zero.</p>
            <h3>Componentes da Função Afim</h3>
            <ul>
                <li><strong>Coeficiente Angular (a):</strong> Determina a inclinação da reta. Se a > 0, a função é crescente. Se a < 0, a função é decrescente.</li>
                <li><strong>Coeficiente Linear (b):</strong> É o ponto onde a reta corta o eixo y. Corresponde ao valor de f(x) quando x = 0.</li>
            </ul>
            <h3>Exemplo Prático</h3>
            <p>Imagine um taxista que cobra R$ 5,00 de bandeirada (valor fixo) mais R$ 2,00 por quilômetro rodado (valor variável). A função que descreve o preço da corrida é f(x) = 2x + 5, onde 'x' é a quantidade de quilômetros.</p>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.alura.com.br/formacao-data-science" target="_blank" rel="noopener noreferrer">Formação Data Science na Alura (para aplicações práticas de matemática)</a></li>
            </ul>
        ` 
    },
    { 
        id: 13, 
        title: 'Função Quadrática (2º Grau)', 
        url: '#', 
        tags: ['matemática', 'funções'], 
        ano: 1, 
        content: `
            <p>Uma função quadrática, ou do 2º grau, é representada pela fórmula <strong>f(x) = ax² + bx + c</strong>, com 'a' diferente de zero. Seu gráfico é sempre uma parábola.</p>
            <h3>Análise da Parábola</h3>
            <ul>
                <li><strong>Concavidade:</strong> Se 'a' > 0, a parábola é "feliz" (concavidade para cima). Se 'a' < 0, é "triste" (concavidade para baixo).</li>
                <li><strong>Raízes ou Zeros:</strong> São os pontos onde a parábola corta o eixo x. São encontrados usando a <strong>Fórmula de Bhaskara</strong>.</li>
                <li><strong>Vértice:</strong> É o ponto de máximo (se a < 0) ou mínimo (se a > 0) da função. Suas coordenadas são dadas por Xv = -b/2a e Yv = -Δ/4a.</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://mundoeducacao.uol.com.br/matematica/funcao-segundo-grau.htm" target="_blank" rel="noopener noreferrer">Função do 2º Grau no Mundo Educação</a></li></ul>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.alura.com.br/formacao-data-science" target="_blank" rel="noopener noreferrer">Formação Data Science na Alura</a></li>
                <li><a href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-functions-equations" target="_blank" rel="noopener noreferrer">Funções Quadráticas na Khan Academy</a></li>
            </ul>
        ` 
    },
    { 
        id: 14, 
        title: 'Geometria Plana Básica', 
        url: '#', 
        tags: ['matemática', 'geometria'], 
        ano: 1, 
        content: `
            <p>A Geometria Plana estuda as figuras que não possuem volume. É a base para todo o estudo de geometria.</p>
            <h3>Conceitos Fundamentais</h3>
            <ul>
                <li><strong>Polígonos:</strong> Figuras fechadas formadas por segmentos de reta (triângulos, quadriláteros, etc.).</li>
                <li><strong>Perímetro:</strong> A soma das medidas de todos os lados de um polígono.</li>
                <li><strong>Área:</strong> A medida da superfície de uma figura. As fórmulas mais comuns são para quadrados (lado²), retângulos (base x altura) e triângulos ((base x altura)/2).</li>
                <li><strong>Círculo e Circunferência:</strong> A circunferência é a linha que delimita o círculo. Sua área é πr² e seu comprimento é 2πr.</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://brasilescola.uol.com.br/matematica/geometria-plana.htm" target="_blank" rel="noopener noreferrer">Geometria Plana no Brasil Escola</a></li></ul>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.khanacademy.org/math/geometry" target="_blank" rel="noopener noreferrer">Geometria na Khan Academy</a></li>
            </ul>
        ` 
    },
    // Física
    { 
        id: 15, 
        title: 'Cinemática (MRU e MRUV)', 
        url: '#', 
        tags: ['física', 'cinemática'], 
        ano: 1, 
        content: `
            <p>A Cinemática é a parte da Física que estuda o movimento dos corpos sem se preocupar com as causas.</p>
            <h3>Movimento Retilíneo Uniforme (MRU)</h3>
            <p>Ocorre quando um corpo se move em linha reta com <strong>velocidade constante</strong> (aceleração nula). A principal equação é a função horária do espaço:</p>
            <p><strong>S = S₀ + v.t</strong> (O famoso "Sorvete")</p>
            <h3>Movimento Retilíneo Uniformemente Variado (MRUV)</h3>
            <p>Ocorre quando um corpo se move em linha reta com <strong>aceleração constante</strong> (a velocidade muda de forma uniforme). As principais equações são:</p>
            <ul>
                <li><strong>v = v₀ + a.t</strong> (Função horária da velocidade)</li>
                <li><strong>S = S₀ + v₀.t + (a.t²)/2</strong> (Função horária do espaço, "Sorvetão")</li>
                <li><strong>v² = v₀² + 2.a.ΔS</strong> (Equação de Torricelli, útil quando não temos o tempo)</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://www.todamateria.com.br/cinematica/" target="_blank" rel="noopener noreferrer">Cinemática no Toda Matéria</a></li></ul>
            <h3>Cursos Recomendados</h3>
            <ul><li><a href="https://www.khanacademy.org/science/physics" target="_blank" rel="noopener noreferrer">Física na Khan Academy</a></li></ul>
        ` 
    },
    { 
        id: 16, 
        title: 'Vetores', 
        url: '#', 
        tags: ['física', 'grandezas'], 
        ano: 1, 
        content: `
            <p>Na Física, algumas grandezas precisam de mais informações do que apenas um número. Para isso, usamos vetores.</p>
            <h3>Grandezas Escalares vs. Vetoriais</h3>
            <ul>
                <li><strong>Escalares:</strong> Ficam perfeitamente definidas por um valor numérico e uma unidade. Ex: tempo (10 s), massa (5 kg), temperatura (25 °C).</li>
                <li><strong>Vetoriais:</strong> Precisam de um valor numérico (<strong>módulo</strong>), uma <strong>direção</strong> (ex: horizontal, vertical) e um <strong>sentido</strong> (ex: para a direita, para cima) para serem completamente definidas. Ex: velocidade, força, aceleração.</li>
            </ul>
            <p>Operações como soma e subtração de vetores levam em conta tanto o módulo quanto a direção e o sentido, usando regras como a do polígono ou do paralelogramo.</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://brasilescola.uol.com.br/matematica/vetores.htm" target="_blank" rel="noopener noreferrer">Vetores no Brasil Escola</a></li></ul>
        ` 
    },
    { 
        id: 17, 
        title: 'Leis de Newton', 
        url: '#', 
        tags: ['física', 'dinâmica'], 
        ano: 1, 
        content: `
            <p>As Leis de Newton são os três pilares da mecânica clássica, descrevendo a relação entre as forças que atuam sobre um corpo e seu movimento.</p>
            <h3>1ª Lei de Newton: Princípio da Inércia</h3>
            <p>Um corpo em repouso tende a permanecer em repouso, e um corpo em movimento tende a permanecer em movimento com velocidade constante, a menos que uma força externa resultante atue sobre ele. É por isso que você é "jogado para frente" quando um ônibus freia bruscamente.</p>
            <h3>2ª Lei de Newton: Princípio Fundamental da Dinâmica</h3>
            <p>A força resultante (F) sobre um corpo é igual ao produto de sua massa (m) pela sua aceleração (a). A famosa fórmula é <strong>F = m . a</strong>. Isso significa que, para uma mesma força, um corpo com menos massa acelera mais.</p>
            <h3>3ª Lei de Newton: Princípio da Ação e Reação</h3>
            <p>Para toda ação, existe uma reação de mesma intensidade, mesma direção e sentido oposto. Quando você empurra uma parede, a parede "empurra" você de volta com a mesma força.</p>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://mundoeducacao.uol.com.br/fisica/as-tres-leis-newton.htm" target="_blank" rel="noopener noreferrer">Leis de Newton no Mundo Educação</a></li>
            </ul>
        ` 
    },
    { 
        id: 18, 
        title: 'Trabalho e Energia', 
        url: '#', 
        tags: ['física', 'energia'], 
        ano: 1, 
        content: `
            <p>Trabalho e Energia são conceitos centrais na Física, relacionados à capacidade de realizar movimento ou causar transformações.</p>
            <h3>Trabalho (τ)</h3>
            <p>O trabalho de uma força é a medida da energia transferida para um corpo, causando seu deslocamento. A fórmula é <strong>τ = F . d . cos(θ)</strong>, onde F é a força, d é o deslocamento e θ é o ângulo entre a força e o deslocamento.</p>
            <h3>Energia Mecânica</h3>
            <p>É a soma da Energia Cinética com a Energia Potencial.</p>
            <ul>
                <li><strong>Energia Cinética (Ec):</strong> Energia do movimento. <strong>Ec = (m.v²)/2</strong>.</li>
                <li><strong>Energia Potencial (Ep):</strong> Energia armazenada. Pode ser <strong>Gravitacional</strong> (associada à altura, <strong>Epg = m.g.h</strong>) ou <strong>Elástica</strong> (associada a molas, <strong>Epe = (k.x²)/2</strong>).</li>
            </ul><p>Em um sistema conservativo, a energia mecânica total se mantém constante.</p>` 
    },
    { 
        id: 18, 
        title: 'Trabalho e Energia', 
        url: '#', 
        tags: ['física', 'energia'], 
        ano: 1, 
        content: `
            <p>Trabalho e Energia são conceitos centrais na Física, relacionados à capacidade de realizar movimento ou causar transformações.</p>
            <h3>Trabalho (τ)</h3>
            <p>O trabalho de uma força é a medida da energia transferida para um corpo, causando seu deslocamento. A fórmula é <strong>τ = F . d . cos(θ)</strong>, onde F é a força, d é o deslocamento e θ é o ângulo entre a força e o deslocamento.</p>
            <h3>Energia Mecânica</h3>
            <p>É a soma da Energia Cinética com a Energia Potencial.</p>
            <ul>
                <li><strong>Energia Cinética (Ec):</strong> Energia do movimento. <strong>Ec = (m.v²)/2</strong>.</li>
                <li><strong>Energia Potencial (Ep):</strong> Energia armazenada. Pode ser <strong>Gravitacional</strong> (associada à altura, <strong>Epg = m.g.h</strong>) ou <strong>Elástica</strong> (associada a molas, <strong>Epe = (k.x²)/2</strong>).</li>
            </ul><p>Em um sistema conservativo, a energia mecânica total se mantém constante.</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://mundoeducacao.uol.com.br/fisica/trabalho-energia.htm" target="_blank" rel="noopener noreferrer">Trabalho e Energia no Mundo Educação</a></li></ul>
        ` 
    },
    // Química
    { 
        id: 19, 
        title: 'Estrutura Atômica', 
        url: '#', 
        tags: ['química', 'átomos'], 
        ano: 1, 
        content: `
            <p>O átomo é a unidade fundamental da matéria. O estudo de sua estrutura evoluiu ao longo do tempo, com cada modelo atômico contribuindo para nossa compreensão atual.</p>
            <h3>Partículas Fundamentais</h3>
            <ul>
                <li><strong>Prótons:</strong> Carga positiva, localizados no núcleo.</li>
                <li><strong>Nêutrons:</strong> Sem carga, localizados no núcleo.</li>
                <li><strong>Elétrons:</strong> Carga negativa, orbitam o núcleo na eletrosfera.</li>
            </ul>
            <h3>Principais Modelos Atômicos</h3>
            <p><strong>Dalton ("Bola de Bilhar"):</strong> Átomo maciço e indivisível. <strong>Thomson ("Pudim de Passas"):</strong> Esfera positiva com elétrons incrustados. <strong>Rutherford ("Sistema Solar"):</strong> Núcleo pequeno e positivo com elétrons orbitando. <strong>Bohr:</strong> Elétrons em órbitas com níveis de energia definidos.</p>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://brasilescola.uol.com.br/quimica/modelos-atomicos.htm" target="_blank" rel="noopener noreferrer">Evolução dos Modelos Atômicos no Brasil Escola</a></li>
            </ul>
        ` 
    },
    { 
        id: 20, 
        title: 'Tabela Periódica', 
        url: '#', 
        tags: ['química', 'elementos'], 
        ano: 1, 
        content: `
            <p>A Tabela Periódica organiza todos os elementos químicos conhecidos em ordem crescente de número atômico. Ela permite prever as propriedades e o comportamento dos elementos.</p>
            <h3>Organização</h3>
            <ul>
                <li><strong>Períodos (Linhas):</strong> São 7 linhas horizontais. Elementos no mesmo período têm o mesmo número de camadas eletrônicas.</li>
                <li><strong>Grupos ou Famílias (Colunas):</strong> São 18 colunas verticais. Elementos no mesmo grupo têm propriedades químicas semelhantes por terem o mesmo número de elétrons na camada de valência.</li>
            </ul>
            <h3>Propriedades Periódicas</h3>
            <p>São propriedades que variam de forma previsível ao longo da tabela, como <strong>Raio Atômico</strong>, <strong>Energia de Ionização</strong> e <strong>Eletronegatividade</strong>.</p>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://ptable.com/?lang=pt" target="_blank" rel="noopener noreferrer">Ptable - Tabela Periódica Dinâmica</a></li>
            </ul>
        ` 
    },
    { 
        id: 21, 
        title: 'Ligações Químicas', 
        url: '#', 
        tags: ['química', 'ligações'], 
        ano: 1, 
        content: `
            <p>As ligações químicas são as forças que mantêm os átomos unidos para formar moléculas e outras substâncias. O objetivo principal é atingir a estabilidade, geralmente seguindo a Regra do Octeto.</p>
            <h3>Tipos de Ligações</h3>
            <ul>
                <li><strong>Ligação Iônica:</strong> Ocorre entre um metal e um ametal, com a <strong>transferência</strong> de elétrons. Forma íons (cátions e ânions) que se atraem.</li>
                <li><strong>Ligação Covalente:</strong> Ocorre entre ametais, com o <strong>compartilhamento</strong> de pares de elétrons.</li>
                <li><strong>Ligação Metálica:</strong> Ocorre entre metais. Os elétrons da camada de valência formam um "mar de elétrons" que se move livremente entre os cátions metálicos, garantindo a coesão.</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://www.todamateria.com.br/ligacoes-quimicas/" target="_blank" rel="noopener noreferrer">Ligações Químicas no Toda Matéria</a></li></ul>
        ` 
    },
    { 
        id: 22, 
        title: 'Funções Inorgânicas', 
        url: '#', 
        tags: ['química', 'funções'], 
        ano: 1, 
        content: `
            <p>As funções inorgânicas agrupam substâncias com propriedades químicas semelhantes. As quatro principais são ácidos, bases, sais e óxidos.</p>
            <h3>As 4 Funções Principais</h3>
            <ul>
                <li><strong>Ácidos:</strong> Em solução aquosa, liberam íons H+. Têm sabor azedo e reagem com metais. Ex: HCl (ácido clorídrico).</li>
                <li><strong>Bases:</strong> Em solução aquosa, liberam íons OH⁻. Têm sabor adstringente ("que amarra a boca"). Ex: NaOH (hidróxido de sódio).</li>
                <li><strong>Sais:</strong> Compostos iônicos formados pela reação de neutralização entre um ácido e uma base. Ex: NaCl (cloreto de sódio - sal de cozinha).</li>
                <li><strong>Óxidos:</strong> Compostos binários onde o oxigênio é o elemento mais eletronegativo. Ex: CO₂ (dióxido de carbono).</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://brasilescola.uol.com.br/quimica/funcoes-inorganicas.htm" target="_blank" rel="noopener noreferrer">Funções Inorgânicas no Brasil Escola</a></li></ul>
        ` 
    },
    // Geografia
    { 
        id: 23, 
        title: 'Cartografia', 
        url: '#', 
        tags: ['geografia', 'mapas'], 
        ano: 1, 
        content: `
            <p>A Cartografia é a ciência e a arte de representar graficamente a superfície da Terra, ou parte dela, em uma superfície plana, como um mapa.</p>
            <h3>Elementos Fundamentais de um Mapa</h3>
            <ul>
                <li><strong>Título:</strong> Indica o tema ou a área representada.</li>
                <li><strong>Orientação:</strong> Mostra a direção, geralmente com uma rosa dos ventos ou uma seta apontando para o Norte.</li>
                <li><strong>Escala:</strong> Informa a relação de proporção entre a medida no mapa e a medida real no terreno. Pode ser <strong>numérica</strong> (ex: 1:50.000) ou <strong>gráfica</strong>.</li>
                <li><strong>Legenda:</strong> Decodifica os símbolos e as cores usados no mapa.</li>
                <li><strong>Projeção Cartográfica:</strong> A técnica matemática usada para representar a superfície esférica da Terra em um plano. Toda projeção tem distorções. As mais famosas são a de <strong>Mercator</strong> (preserva as formas) e a de <strong>Peters</strong> (preserva as áreas).</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://mundoeducacao.uol.com.br/geografia/cartografia.htm" target="_blank" rel="noopener noreferrer">Cartografia no Mundo Educação</a></li></ul>
        ` 
    },
    { 
        id: 24, 
        title: 'Estrutura da Terra e Relevo', 
        url: '#', 
        tags: ['geografia', 'geologia'], 
        ano: 1, 
        content: `
            <h3>Estrutura Interna da Terra</h3>
            <p>A Terra é dividida em três camadas principais:</p>
            <ul>
                <li><strong>Crosta:</strong> A camada mais externa e fina, onde vivemos. É dividida em placas tectônicas.</li>
                <li><strong>Manto:</strong> Camada intermediária, composta por rocha em estado pastoso (magma). O movimento do manto causa o deslocamento das placas tectônicas.</li>
                <li><strong>Núcleo:</strong> O centro da Terra, dividido em núcleo externo (líquido) e interno (sólido), composto principalmente por ferro e níquel.</li>
            </ul>
            <h3>Agentes Formadores do Relevo</h3>
            <p>O relevo é moldado por duas forças:</p>
            <ul>
                <li><strong>Agentes Internos (Endógenos):</strong> Criam as grandes formas de relevo. Ex: <strong>Tectonismo</strong> (movimento das placas), <strong>Vulcanismo</strong> e <strong>Abalos sísmicos</strong>.</li>
                <li><strong>Agentes Externos (Exógenos):</strong> Modelam o relevo. Ex: <strong>Intemperismo</strong> (desgaste das rochas) e <strong>Erosão</strong> (transporte de sedimentos pela água, vento, gelo).</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://www.todamateria.com.br/placas-tectonicas/" target="_blank" rel="noopener noreferrer">Placas Tectônicas no Toda Matéria</a></li></ul>
        ` 
    },
    { 
        id: 25, 
        title: 'Climatologia e Hidrografia', 
        url: '#', 
        tags: ['geografia', 'clima', 'água'], 
        ano: 1, 
        content: `
            <h3>Climatologia</h3>
            <p>É o estudo dos climas. É importante diferenciar <strong>tempo</strong> (estado momentâneo da atmosfera) de <strong>clima</strong> (padrão do tempo observado ao longo de décadas).</p>
            <p>Os principais fatores que influenciam o clima são: <strong>latitude</strong>, <strong>altitude</strong>, <strong>maritimidade/continentalidade</strong>, <strong>massas de ar</strong> e <strong>correntes marítimas</strong>.</p>
            <h3>Hidrografia</h3>
            <p>É o estudo das águas do planeta (oceanos, rios, lagos, águas subterrâneas). O <strong>Ciclo da Água</strong> é o processo contínuo de evaporação, condensação, precipitação e infiltração. Uma <strong>bacia hidrográfica</strong> é a área drenada por um rio principal e seus afluentes.</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://brasilescola.uol.com.br/geografia/clima.htm" target="_blank" rel="noopener noreferrer">Clima no Brasil Escola</a></li></ul>
        ` 
    },
    // História
    { 
        id: 26, 
        title: 'Pré-história e Antiguidade', 
        url: '#', 
        tags: ['história', 'antiguidade'], 
        ano: 1, 
        content: `
            <h3>Pré-história</h3>
            <p>Período anterior à invenção da escrita. Divide-se em <strong>Paleolítico</strong> (caçadores e coletores, domínio do fogo), <strong>Neolítico</strong> (Revolução Agrícola, sedentarização) e <strong>Idade dos Metais</strong> (desenvolvimento da metalurgia).</p>
            <h3>Antiguidade Oriental</h3>
            <p>Civilizações que se desenvolveram no Oriente Próximo, como <strong>Mesopotâmia</strong> (primeiros códigos de leis, como o de Hamurabi) e <strong>Egito</strong> (sociedade teocrática, pirâmides, escrita hieroglífica).</p>
            <h3>Antiguidade Clássica</h3>
            <p>Berço da cultura ocidental. <strong>Grécia</strong> (criação da democracia, filosofia, teatro) e <strong>Roma</strong> (direito, expansão militar, formação de um vasto império).</p>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://brasilescola.uol.com.br/historiag/grecia-antiga.htm" target="_blank" rel="noopener noreferrer">Grécia Antiga no Brasil Escola</a></li>
            </ul>
        ` 
    },
    { 
        id: 27, 
        title: 'Idade Média', 
        url: '#', 
        tags: ['história', 'feudalismo'], 
        ano: 1, 
        content: `
            <p>Período de mil anos entre a queda do Império Romano do Ocidente (476) e a tomada de Constantinopla (1453). O sistema predominante foi o <strong>Feudalismo</strong>.</p>
            <h3>Características do Feudalismo</h3>
            <ul>
                <li><strong>Poder Descentralizado:</strong> O poder político era fragmentado entre os senhores feudais.</li>
                <li><strong>Sociedade Estamental:</strong> Dividida em clero (os que oram), nobreza (os que guerreiam) e servos (os que trabalham), com pouca mobilidade social.</li>
                <li><strong>Economia Agrária:</strong> A terra era a principal fonte de riqueza, e a produção era voltada para a subsistência.</li>
                <li><strong>Teocentrismo:</strong> A Igreja Católica detinha grande poder espiritual, político e cultural.</li>
            </ul>
            <p>A Baixa Idade Média (sécs. XI-XV) foi marcada pelo renascimento do comércio e das cidades, e pelas Cruzadas.</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://www.todamateria.com.br/feudalismo/" target="_blank" rel="noopener noreferrer">Feudalismo no Toda Matéria</a></li></ul>
        ` 
    },
    { 
        id: 28, 
        title: 'Renascimento e Reformas Religiosas', 
        url: '#', 
        tags: ['história', 'renascimento', 'reforma'], 
        ano: 1, 
        content: `
            <h3>Renascimento Cultural</h3>
            <p>Movimento cultural e artístico (sécs. XIV-XVI) que retomou os valores da Antiguidade Clássica. Características: <strong>Humanismo</strong> (valorização do ser humano), <strong>Antropocentrismo</strong> (homem no centro) e <strong>Racionalismo</strong>. Destaques: Leonardo da Vinci, Michelangelo.</p>
            <h3>Reformas Religiosas (Século XVI)</h3>
            <p>Movimentos que romperam a unidade do cristianismo ocidental. A <strong>Reforma Protestante</strong>, iniciada por Martinho Lutero, criticava práticas da Igreja Católica, como a venda de indulgências. A <strong>Contrarreforma</strong> foi a resposta da Igreja Católica, reafirmando seus dogmas e criando a Companhia de Jesus.</p>
        ` 
    },    
    // Filosofia
    { 
        id: 29, 
        title: 'Filósofos Pré-socráticos', 
        url: '#', 
        tags: ['filosofia', 'grécia'], 
        ano: 1,
        content: `
            <p>Considerados os primeiros filósofos, os pré-socráticos promoveram a transição do pensamento <strong>mítico</strong> (baseado em narrativas de deuses) para o <strong>racional (logos)</strong>. Sua principal investigação era cosmológica, buscando a <strong>arché</strong>: o princípio originário, a substância fundamental de todas as coisas.</p>
            <h3>Principais Pensadores e suas Archés</h3>
            <ul>
                <li><strong>Tales de Mileto:</strong> Considerado o primeiro filósofo, propôs que a <strong>água</strong> era a arché, por sua capacidade de se transformar em sólido, líquido e gasoso.</li>
                <li><strong>Anaximandro:</strong> Definiu a arché como o <strong>ápeiron</strong> (o "ilimitado" ou "indeterminado"), uma substância infinita e eterna da qual tudo se origina e para a qual tudo retorna.</li>
                <li><strong>Heráclito de Éfeso:</strong> Afirmava que a arché era o <strong>fogo</strong>, um elemento em constante transformação. Para ele, a realidade é um fluxo perpétuo ("Tudo flui", <em>panta rhei</em>). A mudança é a única constante, regida pela tensão entre opostos.</li>
                <li><strong>Parmênides de Eleia:</strong> Em oposição a Heráclito, defendia que a mudança é uma ilusão dos sentidos. A única verdade, acessível pela razão, é o <strong>Ser</strong>. "O Ser é, e o não-ser não é". O Ser é uno, eterno, indivisível e imutável.</li>
                <li><strong>Demócrito:</strong> Propôs o <strong>atomismo</strong>, teoria segundo a qual tudo no universo é composto por partículas minúsculas, indivisíveis e eternas chamadas <strong>átomos</strong>, que se movem no vazio.</li>
            </ul>
        `
    },
    { 
        id: 30, 
        title: 'Sócrates, Platão e Aristóteles', 
        url: '#', 
        tags: ['filosofia', 'grécia'], 
        ano: 1,
        content: `
            <p>Este é o trio que fundamenta o pensamento ocidental. Eles deslocaram o foco da filosofia da natureza (cosmologia) para as questões humanas: ética, política, conhecimento e a natureza da realidade.</p>
            <h3>Sócrates (470-399 a.C.)</h3>
            <p>Não deixou obras escritas; conhecemos seu pensamento pelos diálogos de seu discípulo, Platão. Sua filosofia era praticada nas ruas de Atenas. Seu lema era <strong>"Conhece-te a ti mesmo"</strong>. Seu método, o <strong>diálogo</strong>, tinha duas fases:</p>
            <ul>
                <li><strong>Ironia:</strong> Desconstruir as falsas certezas do interlocutor através de perguntas. A famosa frase "Só sei que nada sei" representa o ponto de partida: o reconhecimento da própria ignorância.</li>
                <li><strong>Maiêutica:</strong> A "arte de dar à luz" ideias. Após a desconstrução, Sócrates ajudava a pessoa a encontrar a verdade dentro de si mesma, através da razão.</li>
            </ul>
            <h3>Platão (428-348 a.C.)</h3>
            <p>Discípulo de Sócrates. Para explicar a possibilidade do conhecimento verdadeiro, propôs a <strong>Teoria das Ideias (ou Formas)</strong>. Ele divide a realidade em duas esferas:</p>
            <ul>
                <li><strong>Mundo Sensível:</strong> O mundo que percebemos com nossos sentidos. É um mundo de aparências, sombras, mutável e imperfeito.</li>
                <li><strong>Mundo das Ideias:</strong> O mundo verdadeiro, acessível apenas pela razão. É eterno, imutável e contém as Formas perfeitas de tudo o que existe (a ideia de Justiça, a ideia de Cadeira, etc.). O conhecimento verdadeiro é a lembrança (reminiscência) das Ideias que nossa alma já contemplou. A <strong>Alegoria da Caverna</strong> é a mais famosa ilustração dessa teoria.</li>
            </ul>
            <h3>Aristóteles (384-322 a.C.)</h3>
            <p>Discípulo de Platão, mas um crítico de sua teoria. Para Aristóteles, a realidade está neste mundo, e o conhecimento começa com a experiência sensorial (empirismo). Ele sistematizou vastas áreas do saber. Alguns conceitos-chave:</p>
            <ul>
                <li><strong>Potência e Ato:</strong> Tudo o que existe é um composto de ato (o que a coisa é agora) e potência (o que ela pode vir a ser). Uma semente é uma semente em ato e uma árvore em potência.</li>
                <li><strong>As Quatro Causas:</strong> Para entender qualquer coisa, precisamos conhecer suas quatro causas: <strong>Material</strong> (do que é feita?), <strong>Formal</strong> (qual sua forma ou essência?), <strong>Eficiente</strong> (o que a fez?) e <strong>Final</strong> (qual seu propósito?).</li>
                <li><strong>Ética:</strong> A busca pela felicidade (<em>eudaimonia</em>), que é alcançada através de uma vida virtuosa, guiada pela razão e pela busca do "meio-termo" (evitar os excessos).</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://brasilescola.uol.com.br/filosofia/platao.htm" target="_blank" rel="noopener noreferrer">Platão e a Teoria das Ideias no Brasil Escola</a></li></ul>
        `
    },
    // Sociologia
    { 
        id: 31, 
        title: 'Cultura, Socialização e Ideologia', 
        url: '#', 
        tags: ['sociologia', 'cultura'], 
        ano: 1, 
        content: `
            <p>Estes três conceitos são fundamentais para entender como as sociedades se formam e se mantêm.</p>
            <h3>Cultura</h3>
            <p>É o conjunto de conhecimentos, crenças, arte, moral, leis, costumes e todos os outros hábitos e capacidades adquiridos pelo ser humano como membro de uma sociedade. A cultura é aprendida e compartilhada, e molda nossa visão de mundo.</p>
            <h3>Socialização</h3>
            <p>É o processo pelo qual os indivíduos aprendem e internalizam as normas e valores de sua cultura, tornando-se membros de uma sociedade. A socialização ocorre durante toda a vida, começando com a <strong>socialização primária</strong> (família) e continuando com a <strong>socialização secundária</strong> (escola, amigos, mídia).</p>
            <h3>Ideologia</h3>
            <p>Refere-se a um conjunto de ideias, crenças e valores que justificam e ajudam a manter uma determinada ordem social, política ou econômica. Muitas vezes, a ideologia mascara as contradições e os conflitos de interesse presentes na sociedade, fazendo com que a ordem existente pareça natural e inevitável.</p>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://brasilescola.uol.com.br/sociologia/cultura.htm" target="_blank" rel="noopener noreferrer">Artigo sobre Cultura no Brasil Escola</a></li>
                <li><a href="https://mundoeducacao.uol.com.br/sociologia/ideologia.htm" target="_blank" rel="noopener noreferrer">O que é Ideologia? no Mundo Educação</a></li>
            </ul>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.coursera.org/learn/introducao-sociologia-usp" target="_blank" rel="noopener noreferrer">Introdução à Sociologia (USP) no Coursera</a></li>
            </ul>
        `
    },
    // Biologia
    { 
        id: 32, 
        title: 'Citologia e Histologia', 
        url: '#', 
        tags: ['biologia', 'células', 'tecidos'], 
        ano: 1, 
        content: `
            <h3>Citologia: O Estudo da Célula</h3>
            <p>A Citologia é o ramo da Biologia que estuda as células, as unidades fundamentais da vida. Existem dois tipos básicos de células:</p>
            <ul>
                <li><strong>Células Procariontes:</strong> Simples, sem núcleo definido (o material genético fica disperso no citoplasma) e sem organelas membranosas. Ex: bactérias.</li>
                <li><strong>Células Eucariontes:</strong> Mais complexas, com núcleo individualizado (protegendo o DNA) e diversas organelas membranosas. Ex: células de animais, plantas, fungos e protistas.</li>
            </ul>
            <h4>Principais Organelas Eucariontes e suas Funções:</h4>
            <ul>
                <li><strong>Membrana Plasmática:</strong> Controla a entrada e saída de substâncias (permeabilidade seletiva).</li>
                <li><strong>Núcleo:</strong> Contém o material genético (DNA) e comanda as atividades celulares.</li>
                <li><strong>Mitocôndrias:</strong> Responsáveis pela respiração celular e produção de energia (ATP).</li>
                <li><strong>Ribossomos:</strong> Realizam a síntese de proteínas.</li>
                <li><strong>Retículo Endoplasmático (Liso e Rugoso):</strong> Produção de lipídios, desintoxicação e síntese/transporte de proteínas.</li>
                <li><strong>Complexo de Golgi:</strong> "Empacota" e secreta substâncias.</li>
            </ul>
            <h3>Histologia: O Estudo dos Tecidos</h3>
            <p>A Histologia estuda como as células se organizam para formar os tecidos. No corpo humano, existem quatro tipos principais de tecidos:</p>
            <ul>
                <li><strong>Tecido Epitelial:</strong> Reveste o corpo e os órgãos (pele, mucosas) e forma glândulas.</li>
                <li><strong>Tecido Conjuntivo:</strong> Preenche espaços, sustenta e conecta outros tecidos. É muito diverso (inclui o sangue, ossos, cartilagem, gordura).</li>
                <li><strong>Tecido Muscular:</strong> Responsável pelo movimento, através da contração de suas células.</li>
                <li><strong>Tecido Nervoso:</strong> Forma o cérebro, medula espinhal e nervos, responsável pela transmissão de impulsos nervosos.</li>
            </ul>
        ` 
    },
    { 
        id: 33, 
        title: 'Ecologia Básica', 
        url: '#', 
        tags: ['biologia', 'ecologia'], 
        ano: 1, 
        content: `
            <p>A Ecologia é a ciência que estuda as interações dos seres vivos entre si e com o ambiente em que vivem.</p>
            <h3>Conceitos Fundamentais</h3>
            <ul>
                <li><strong>Ecossistema:</strong> Conjunto formado pelos seres vivos (comunidade) e pelos fatores não vivos (água, luz, solo, temperatura) de uma área, e todas as interações entre eles.</li>
                <li><strong>Comunidade (ou Biocenose):</strong> Conjunto de todas as populações de diferentes espécies que vivem em uma mesma área.</li>
                <li><strong>População:</strong> Grupo de indivíduos da mesma espécie que vivem em uma determinada área.</li>
                <li><strong>Habitat:</strong> O "endereço" de uma espécie, o local onde ela vive.</li>
                <li><strong>Nicho Ecológico:</strong> O "papel" ou a "profissão" de uma espécie no ecossistema. Inclui o que ela come, onde se reproduz, seus hábitos, etc.</li>
            </ul>
            <h3>Cadeias e Teias Alimentares</h3>
            <p>Representam o fluxo de matéria e energia no ecossistema. Uma cadeia alimentar é uma sequência linear, enquanto uma teia alimentar é um conjunto de cadeias interligadas.</p>
            <ul>
                <li><strong>Produtores:</strong> Seres autótrofos (plantas, algas) que produzem seu próprio alimento (base da cadeia).</li>
                <li><strong>Consumidores:</strong> Seres heterótrofos que se alimentam de outros seres vivos (herbívoros, carnívoros, onívoros).</li>
                <li><strong>Decompositores:</strong> Fungos e bactérias que decompõem a matéria orgânica morta, reciclando os nutrientes.</li>
            </ul>
        ` 
    },

    // --- 2º ANO ---
    // Português e Literatura
    { 
        id: 34, 
        title: 'Sintaxe do Período Composto', 
        url: '#', 
        tags: ['português', 'gramática'], 
        ano: 2, 
        content: `
            <p>O período composto é aquele formado por mais de uma oração. As orações se relacionam por coordenação ou subordinação.</p>
            <h3>Período Composto por Coordenação</h3>
            <p>As orações são independentes sintaticamente. Podem ser <strong>assindéticas</strong> (sem conjunção) ou <strong>sindéticas</strong> (com conjunção: aditivas, adversativas, alternativas, conclusivas, explicativas).</p>
            <h3>Período Composto por Subordinação</h3>
            <p>Existe uma oração principal e uma ou mais orações subordinadas, que dependem sintaticamente da principal. As subordinadas podem ser <strong>substantivas</strong>, <strong>adjetivas</strong> ou <strong>adverbiais</strong>.</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://www.portugues.com.br/gramatica/periodo-composto.html" target="_blank" rel="noopener noreferrer">Período Composto no site Português</a></li></ul>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.alura.com.br/formacao-comunicacao-escrita" target="_blank" rel="noopener noreferrer">Formação Comunicação e Escrita na Alura</a></li>
            </ul>
        ` 
    },
    { 
        id: 35, 
        title: 'Coesão e Coerência', 
        url: '#', 
        tags: ['português', 'redação'], 
        ano: 2, 
        content: `
            <p>Coesão e coerência são dois mecanismos fundamentais para a construção de um bom texto. Embora andem juntos, são conceitos diferentes.</p>
            <h3>Coesão Textual</h3>
            <p>Refere-se à ligação gramatical entre as partes de um texto (palavras, frases, parágrafos). É a "costura" do texto, feita por meio de conectivos, pronomes, sinônimos, etc. Garante que o texto flua de maneira clara.</p>
            <h3>Coerência Textual</h3>
            <p>Refere-se à lógica e ao sentido do texto. Um texto é coerente quando suas ideias não são contraditórias e fazem sentido para o leitor. A coerência é o "plano de fundo" lógico que une as partes do texto.</p>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.alura.com.br/formacao-comunicacao-escrita" target="_blank" rel="noopener noreferrer">Formação Comunicação e Escrita na Alura</a></li>
            </ul>
        ` 
    },
    { 
        id: 36, 
        title: 'Barroco e Arcadismo', 
        url: '#', 
        tags: ['literatura', 'escolas literárias'], 
        ano: 2, 
        content: `
            <h3>Barroco (Século XVII)</h3>
            <p>Arte do conflito e do exagero, refletindo as tensões entre a Reforma Protestante e a Contrarreforma Católica. Características: dualismo (fé vs. razão, corpo vs. alma), pessimismo, uso de figuras de linguagem como antítese e paradoxo. No Brasil, destaque para Gregório de Matos (poesia) e Padre Antônio Vieira (sermões).</p>
            <h3>Arcadismo (Século XVIII)</h3>
            <p>Movimento que reage aos excessos do Barroco, buscando a simplicidade, a razão e a harmonia, inspirado nos ideais do Iluminismo. Características: bucolismo (valorização da vida no campo), pastoralismo, uso de pseudônimos, lemas como <em>"Fugere urbem"</em> (fugir da cidade) e <em>"Carpe diem"</em> (aproveitar o dia). No Brasil, destaque para Cláudio Manuel da Costa e Tomás Antônio Gonzaga.</p>
        ` 
    },    
    { 
        id: 37, 
        title: 'Romantismo e Realismo/Naturalismo', 
        url: '#', 
        tags: ['literatura', 'escolas literárias'], 
        ano: 2, 
        content: `
            <h3>Romantismo (Século XIX - 1ª metade)</h3>
            <p>Movimento que valoriza o indivíduo, os sentimentos, a imaginação e a liberdade. Características: subjetivismo, egocentrismo, idealização da mulher e do amor, nacionalismo e escapismo (fuga da realidade). No Brasil, teve 3 gerações na poesia e se destacou no romance com José de Alencar.</p>
            <h3>Realismo/Naturalismo (Século XIX - 2ª metade)</h3>
            <p>Reação ao idealismo romântico, buscando uma representação mais objetiva e crítica da realidade e da sociedade burguesa. O Realismo foca na análise psicológica dos personagens (Machado de Assis). O Naturalismo é uma vertente mais radical, que vê o ser humano como determinado pelo meio, raça e momento (influência do cientificismo), com foco nos aspectos mais degradantes da sociedade (Aluísio Azevedo, "O Cortiço").</p>
        ` 
    },    
    // Matemática
    { 
        id: 38, 
        title: 'Funções Exponenciais e Logarítmicas', 
        url: '#', 
        tags: ['matemática', 'funções'], 
        ano: 2, 
        content: `
            <p>Essas duas funções são inversas uma da outra e são essenciais para modelar diversos fenômenos da natureza e do mercado financeiro.</p>
            <h3>Função Exponencial: f(x) = aˣ</h3>
            <p>Descreve situações de crescimento ou decaimento muito rápido, onde a variável está no expoente. É usada para calcular juros compostos, crescimento populacional e decaimento radioativo.</p>
            <h3>Função Logarítmica: f(x) = logₐ(x)</h3>
            <p>É a operação inversa da exponenciação. Enquanto a exponencial pergunta "a elevado a x dá quanto?", o logaritmo pergunta "a que número preciso elevar 'a' para obter x?". É usada em escalas como pH (acidez) e Richter (terremotos).</p>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://www.todamateria.com.br/funcao-exponencial/" target="_blank" rel="noopener noreferrer">Função Exponencial no Toda Matéria</a></li>
                <li><a href="https://brasilescola.uol.com.br/matematica/funcao-logaritmica.htm" target="_blank" rel="noopener noreferrer">Função Logarítmica no Brasil Escola</a></li>
            </ul>
        ` 
    },
    { 
        id: 39, 
        title: 'Matrizes, Determinantes e Sistemas Lineares', 
        url: '#', 
        tags: ['matemática', 'matrizes', 'álgebra'], 
        ano: 2, 
        content: `
            <h3>Matrizes</h3>
            <p>São tabelas de números organizadas em linhas e colunas, usadas para organizar dados e resolver sistemas. Podem ser somadas, subtraídas e multiplicadas.</p>
            <h3>Determinantes</h3>
            <p>É um número especial associado a cada matriz quadrada. Se o determinante for zero, a matriz não tem inversa. É calculado pela Regra de Sarrus (matrizes 3x3) ou Teorema de Laplace.</p>
            <h3>Sistemas Lineares</h3>
            <p>São conjuntos de equações com múltiplas variáveis. Podem ser resolvidos por métodos como escalonamento ou pela Regra de Cramer, que utiliza determinantes. São a base de muitas aplicações em computação e engenharia.</p>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.alura.com.br/formacao-data-science" target="_blank" rel="noopener noreferrer">Formação Data Science na Alura</a></li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://brasilescola.uol.com.br/matematica/sistemas-lineares.htm" target="_blank" rel="noopener noreferrer">Sistemas Lineares no Brasil Escola</a></li>
            </ul>
        ` 
    },
    { 
        id: 40, 
        title: 'Geometria Espacial', 
        url: '#', 
        tags: ['matemática', 'geometria'], 
        ano: 2, 
        content: `
            <p>A Geometria Espacial estuda os objetos que possuem três dimensões (largura, comprimento e altura), ou seja, que têm volume.</p>
            <h3>Principais Sólidos Geométricos</h3>
            <ul>
                <li><strong>Prismas:</strong> Possuem duas bases poligonais iguais e paralelas (ex: cubo, paralelepípedo).</li>
                <li><strong>Pirâmides:</strong> Possuem uma base poligonal e um vértice fora dela.</li>
                <li><strong>Cilindros:</strong> Possuem duas bases circulares iguais e paralelas.</li>
                <li><strong>Cones:</strong> Possuem uma base circular e um vértice.</li>
                <li><strong>Esfera:</strong> Sólido perfeitamente redondo.</li>
            </ul>
            <p>O foco do estudo é o cálculo da <strong>área da superfície</strong> e do <strong>volume</strong> de cada um desses sólidos.</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://www.todamateria.com.br/geometria-espacial/" target="_blank" rel="noopener noreferrer">Geometria Espacial no Toda Matéria</a></li></ul>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.khanacademy.org/math/geometry" target="_blank" rel="noopener noreferrer">Geometria na Khan Academy</a></li>
            </ul>
        ` 
    },
    { 
        id: 41, 
        title: 'Trigonometria', 
        url: '#', 
        tags: ['matemática', 'trigonometria', 'geometria'], 
        ano: 2, 
        content: `
            <p>A trigonometria estuda as relações entre os lados e os ângulos de um triângulo, especialmente o triângulo retângulo. Essas relações são estendidas para o círculo trigonométrico, permitindo o estudo de funções periódicas.</p>
            <h3>Relações Fundamentais</h3>
            <ul>
                <li><strong>Seno (sen):</strong> Cateto Oposto / Hipotenusa</li>
                <li><strong>Cosseno (cos):</strong> Cateto Adjacente / Hipotenusa</li>
                <li><strong>Tangente (tan):</strong> Cateto Oposto / Cateto Adjacente</li>
            </ul>
            <h3>Círculo Trigonométrico</h3>
            <p>É um círculo de raio 1 que permite definir seno, cosseno e tangente para qualquer ângulo, não apenas os agudos. É a base para o estudo de fenômenos ondulatórios em Física.</p>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://www.todamateria.com.br/trigonometria/" target="_blank" rel="noopener noreferrer">Trigonometria no Toda Matéria</a></li>
            </ul>
        ` 
    },
    // Física
    { 
        id: 42, 
        title: 'Impulso, Quantidade de Movimento e Colisões', 
        url: '#', 
        tags: ['física', 'dinâmica'], 
        ano: 2, 
        content: `
            <h3>Impulso (I)</h3>
            <p>É a grandeza vetorial que mede o efeito de uma força aplicada durante um certo intervalo de tempo. <strong>I = F . Δt</strong>.</p>
            <h3>Quantidade de Movimento (Q)</h3>
            <p>Também chamada de momento linear, é a grandeza vetorial que mede a "dificuldade" de parar um corpo em movimento. <strong>Q = m . v</strong>.</p>
            <h3>Teorema do Impulso</h3>
            <p>O impulso da força resultante sobre um corpo é igual à variação da sua quantidade de movimento: <strong>I = ΔQ</strong>.</p>
            <h3>Conservação da Quantidade de Movimento</h3>
            <p>Em um sistema isolado (sem forças externas), a quantidade de movimento total se conserva. Isso é fundamental para analisar colisões.</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://brasilescola.uol.com.br/fisica/quantidade-movimento-impulso.htm" target="_blank" rel="noopener noreferrer">Impulso e Quantidade de Movimento no Brasil Escola</a></li></ul>
        ` 
    },
    { 
        id: 43, 
        title: 'Gravitação Universal', 
        url: '#', 
        tags: ['física', 'gravitação'], 
        ano: 2, 
        content: `
            <p>Proposta por Isaac Newton, a Lei da Gravitação Universal descreve a força de atração entre dois corpos com massa.</p>
            <p>A fórmula é: <strong>F = G . (M.m)/d²</strong>, onde G é a constante gravitacional, M e m são as massas dos corpos e d é a distância entre seus centros.</p>
            <h3>Leis de Kepler</h3>
            <p>Descrevem o movimento dos planetas ao redor do Sol:</p>
            <ul>
                <li><strong>1ª Lei (Lei das Órbitas):</strong> As órbitas dos planetas são elípticas, com o Sol em um dos focos.</li>
                <li><strong>2ª Lei (Lei das Áreas):</strong> A linha que liga um planeta ao Sol varre áreas iguais em intervalos de tempo iguais. (O planeta se move mais rápido quando está mais perto do Sol).</li>
                <li><strong>3ª Lei (Lei dos Períodos):</strong> A relação entre o quadrado do período de translação (T) e o cubo do raio médio da órbita (R) é constante para todos os planetas do sistema solar: <strong>T²/R³ = k</strong>.</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://mundoeducacao.uol.com.br/fisica/leis-kepler.htm" target="_blank" rel="noopener noreferrer">Leis de Kepler no Mundo Educação</a></li></ul>
        ` 
    },
    { 
        id: 44, 
        title: 'Hidrostática', 
        url: '#', 
        tags: ['física', 'fluidos'], 
        ano: 2, 
        content: `
            <p>É o estudo dos fluidos (líquidos e gases) em repouso.</p>
            <h3>Pressão (p)</h3>
            <p>É a força exercida por unidade de área: <strong>p = F/A</strong>. A pressão em um fluido aumenta com a profundidade (<strong>Teorema de Stevin: p = d.g.h</strong>).</p>
            <h3>Princípio de Pascal</h3>
            <p>Um aumento de pressão exercido em um ponto de um fluido em equilíbrio é transmitido integralmente a todos os pontos do fluido. É o princípio dos elevadores hidráulicos.</p>
            <h3>Princípio de Arquimedes (Empuxo)</h3>
            <p>Todo corpo mergulhado em um fluido recebe uma força vertical para cima, chamada <strong>Empuxo (E)</strong>, cujo módulo é igual ao peso do volume de fluido deslocado: <strong>E = d_fluido . V_submerso . g</strong>.</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://www.todamateria.com.br/hidrostatica/" target="_blank" rel="noopener noreferrer">Hidrostática no Toda Matéria</a></li></ul>
        ` 
    },
    { 
        id: 45, 
        title: 'Termologia (Calorimetria e Dilatação)', 
        url: '#', 
        tags: ['física', 'termologia'], 
        ano: 2, 
        content: `
            <h3>Calorimetria</h3>
            <p>Estuda as trocas de calor. <strong>Calor Sensível</strong> é a quantidade de calor que causa variação de temperatura (<strong>Q = m.c.ΔT</strong>, "que macete"). <strong>Calor Latente</strong> é a quantidade de calor que causa mudança de estado físico (<strong>Q = m.L</strong>, "que moleza").</p>
            <h3>Dilatação Térmica</h3>
            <p>É o aumento das dimensões de um corpo quando sua temperatura aumenta. Pode ser <strong>linear</strong> (em uma dimensão), <strong>superficial</strong> (em duas) ou <strong>volumétrica</strong> (em três).</p>
        ` 
    },    
    // Química
    { 
        id: 46, 
        title: 'Estequiometria', 
        url: '#', 
        tags: ['química', 'cálculos'], 
        ano: 2, 
        content: `
            <p>A estequiometria é a área da química que estuda as relações quantitativas (de massa, mol, volume) entre reagentes e produtos em uma reação química. É a "receita de bolo" da química.</p>
            <h3>Passos Fundamentais</h3>
            <ol>
                <li><strong>Escrever e Balancear a Equação Química:</strong> Garante que a proporção entre as substâncias esteja correta.</li>
                <li><strong>Relacionar as Grandezas:</strong> Converter os dados do problema (ex: massa) para mols, que é a unidade central dos cálculos.</li>
                <li><strong>Usar Regra de Três:</strong> Aplicar a proporção molar da equação balanceada para encontrar a quantidade desejada.</li>
            </ol>
            <p>Conceitos como <strong>massa molar</strong>, <strong>mol</strong> e <strong>número de Avogadro</strong> são essenciais.</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://www.manualdaquimica.com/quimica-geral/calculo-estequiometrico.htm" target="_blank" rel="noopener noreferrer">Cálculo Estequiométrico no Manual da Química</a></li></ul>
        ` 
    },
    { 
        id: 47, 
        title: 'Soluções e Concentração', 
        url: '#', 
        tags: ['química', 'soluções'], 
        ano: 2, 
        content: `
            <p>Uma solução é uma mistura homogênea composta por um <strong>soluto</strong> (substância dissolvida) e um <strong>solvente</strong> (substância que dissolve). A concentração expressa a proporção entre soluto e solvente.</p>
            <h3>Principais Tipos de Concentração</h3>
            <ul>
                <li><strong>Concentração Comum (g/L):</strong> Massa do soluto (g) por volume da solução (L).</li>
                <li><strong>Molaridade (mol/L):</strong> Número de mols do soluto por volume da solução (L). É a mais usada em química.</li>
                <li><strong>Título ou Porcentagem (%):</strong> Relação entre a massa do soluto e a massa total da solução (m/m) ou volume (v/v).</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://brasilescola.uol.com.br/quimica/concentracao-das-solucoes.htm" target="_blank" rel="noopener noreferrer">Concentração de Soluções no Brasil Escola</a></li></ul>
        ` 
    },
    { 
        id: 48, 
        title: 'Termoquímica e Cinética Química', 
        url: '#', 
        tags: ['química', 'reações'], 
        ano: 2, 
        content: `
            <p>Dois campos que estudam as reações químicas sob diferentes perspectivas: energia e velocidade.</p>
            <h3>Termoquímica</h3>
            <p>Estuda o calor (energia) envolvido nas reações. <strong>Reações Exotérmicas</strong> liberam calor (ΔH < 0), enquanto <strong>Reações Endotérmicas</strong> absorvem calor (ΔH > 0). O conceito de <strong>entalpia (H)</strong> é central.</p>
            <h3>Cinética Química</h3>
            <p>Estuda a velocidade das reações e os fatores que a influenciam, como <strong>temperatura</strong>, <strong>concentração</strong>, <strong>pressão</strong>, <strong>superfície de contato</strong> e <strong>catalisadores</strong>. A <strong>energia de ativação</strong> é a energia mínima para que a reação ocorra.</p>
        ` 
    },    
    // Geografia
    { 
        id: 49, 
        title: 'Urbanização e Industrialização', 
        url: '#', 
        tags: ['geografia', 'urbanização'], 
        ano: 2, 
        content: `
            <p>A <strong>Industrialização</strong> e a <strong>Urbanização</strong> são processos interligados que transformaram profundamente as sociedades.</p>
            <h3>Industrialização e Êxodo Rural</h3>
            <p>A Revolução Industrial concentrou as oportunidades de emprego nas cidades, atraindo um grande contingente de trabalhadores do campo. Esse movimento é chamado de <strong>êxodo rural</strong> e é o principal motor da urbanização.</p>
            <h3>Consequências da Urbanização Acelerada</h3>
            <p>Em países de industrialização tardia, como o Brasil, a urbanização ocorreu de forma rápida e desordenada, gerando diversos problemas sociais e ambientais:</p>
            <ul>
                <li><strong>Favelização e Segregação Espacial:</strong> A população de baixa renda é empurrada para áreas periféricas sem infraestrutura adequada.</li>
                <li><strong>Problemas de Mobilidade:</strong> Congestionamentos e transporte público ineficiente.</li>
                <li><strong>Violência Urbana:</strong> Associada à desigualdade e à falta de oportunidades.</li>
                <li><strong>Impactos Ambientais:</strong> Poluição do ar e da água, ilhas de calor e enchentes.</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://mundoeducacao.uol.com.br/geografia/urbanizacao.htm" target="_blank" rel="noopener noreferrer">Urbanização no Mundo Educação</a></li></ul>
        ` 
    },
    { 
        id: 50, 
        title: 'Globalização e Geopolítica', 
        url: '#', 
        tags: ['geografia', 'globalização'], 
        ano: 2, 
        content: `
            <h3>Globalização</h3>
            <p>É o processo de intensificação da integração econômica, política, social e cultural entre os países, impulsionado pela revolução tecnológica nos transportes e nas comunicações (internet). Suas principais características são a formação de um mercado global, a atuação de empresas transnacionais e a difusão de informações e culturas em tempo real.</p>
            <h3>Geopolítica</h3>
            <p>É o estudo das relações de poder no espaço geográfico mundial. A geopolítica analisa como os Estados disputam poder e influência, usando estratégias que envolvem recursos naturais, poder militar, alianças econômicas e posicionamento geográfico. A <strong>Guerra Fria</strong> (EUA vs URSS) e a atual ordem <strong>multipolar</strong>, com a ascensão de novas potências como a China, são exemplos de cenários geopolíticos.</p>
        ` 
    },    
    // História
    { 
        id: 51, 
        title: 'Iluminismo e Revolução Industrial', 
        url: '#', 
        tags: ['história', 'revoluções', 'iluminismo'], 
        ano: 2, 
        content: `
            <h3>Iluminismo (Século XVIII)</h3>
            <p>Movimento intelectual que defendia o uso da <strong>razão</strong> contra o Antigo Regime (absolutismo e mercantilismo). Principais ideias: defesa da liberdade (política e econômica), igualdade jurídica e separação de poderes. Pensadores: John Locke (pai do liberalismo), Montesquieu (separação de poderes), Voltaire (liberdade de expressão) e Rousseau (democracia).</p>
            <h3>Revolução Industrial (A partir de 1760)</h3>
            <p>Conjunto de transformações técnicas e sociais iniciadas na Inglaterra. Marcada pela substituição do trabalho artesanal pela produção em larga escala nas fábricas (maquinofatura), pelo uso do carvão e da máquina a vapor. Criou novas classes sociais: a <strong>burguesia industrial</strong> e o <strong>proletariado</strong> (operários).</p>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://brasilescola.uol.com.br/historiag/iluminismo.htm" target="_blank" rel="noopener noreferrer">Iluminismo no Brasil Escola</a></li>
            </ul>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.alura.com.br/formacao-filosofia" target="_blank" rel="noopener noreferrer">Formação Filosofia na Alura</a></li>
            </ul>
        ` 
    },
    { 
        id: 52, 
        title: 'Revolução Francesa e Independência dos EUA', 
        url: '#', 
        tags: ['história', 'revoluções'], 
        ano: 2, 
        content: `
            <p>Dois dos eventos mais importantes da Era das Revoluções, ambos inspirados por ideais iluministas, mas com causas e consequências distintas.</p>
            <h3>Independência dos EUA (1776)</h3>
            <p>Causada pela insatisfação das Treze Colônias com os impostos e a falta de representação política impostos pela Grã-Bretanha. Liderada pela elite colonial, resultou na criação de uma república federativa baseada nos ideais de liberdade e direitos individuais (para homens brancos e proprietários, inicialmente).</p>
            <h3>Revolução Francesa (1789)</h3>
            <p>Movimento mais radical e complexo, impulsionado pela crise econômica, desigualdade social (divisão em três estados) e a insatisfação popular com o absolutismo monárquico. Passou por várias fases (Monarquia Constitucional, Convenção Nacional, Diretório) e resultou no fim do Antigo Regime na França, espalhando os ideais de "Liberdade, Igualdade e Fraternidade" pela Europa.</p>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://mundoeducacao.uol.com.br/historiageral/revolucao-francesa.htm" target="_blank" rel="noopener noreferrer">Revolução Francesa no Mundo Educação</a></li>
            </ul>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.alura.com.br/formacao-ux-design" target="_blank" rel="noopener noreferrer">Formação UX Design na Alura (para entender como criar narrativas e apresentar informações)</a></li>
            </ul>
        ` 
    },
    { 
        id: 53, 
        title: 'Brasil Colônia', 
        url: '#', 
        tags: ['história', 'brasil'], 
        ano: 2, 
        content: `
            <p>Período que vai da chegada dos portugueses (1500) até a Independência (1822). A economia foi baseada em ciclos, e a sociedade era marcada pela escravidão.</p>
            <h3>Ciclos Econômicos</h3>
            <ul>
                <li><strong>Ciclo do Pau-Brasil:</strong> Exploração predatória da madeira, usando mão de obra indígena (escambo).</li>
                <li><strong>Ciclo do Açúcar (Nordeste):</strong> Baseado no sistema de <strong>plantation</strong> (latifúndio, monocultura, mão de obra escrava africana).</li>
                <li><strong>Ciclo do Ouro (Minas Gerais):</strong> Deslocou o eixo econômico para o Sudeste e aumentou o controle fiscal de Portugal.</li>
            </ul>
            <p>A sociedade colonial era rural, patriarcal e estratificada, com os senhores de engenho no topo e os escravizados na base.</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://www.todamateria.com.br/brasil-colonia/" target="_blank" rel="noopener noreferrer">Brasil Colônia no Toda Matéria</a></li></ul>
        ` 
    },
    // Filosofia
    { 
        id: 54, 
        title: 'Racionalismo vs Empirismo', 
        url: '#', 
        tags: ['filosofia', 'moderna'], 
        ano: 2,
        content: `
            <p>Este foi o grande debate epistemológico da Filosofia Moderna, centrado na questão: qual é a fonte primária do conhecimento humano? A razão ou a experiência?</p>
            <h3>Racionalismo</h3>
            <p>Sustenta que a <strong>razão</strong> é a principal fonte de conhecimento, superior aos sentidos, que são considerados enganosos. Os racionalistas acreditam em <strong>ideias inatas</strong> (conceitos que já nascem conosco, como a ideia de Deus ou de perfeição) e utilizam o método dedutivo, inspirado na matemática, para chegar a verdades universais e necessárias.</p>
            <ul>
                <li><strong>René Descartes:</strong> Buscou um fundamento inabalável para o conhecimento através da dúvida metódica. Sua primeira certeza, "Penso, logo existo" (<em>Cogito, ergo sum</em>), é uma verdade puramente racional.</li>
            </ul>
            <h3>Empirismo</h3>
            <p>Afirma que todo o nosso conhecimento se origina da <strong>experiência sensorial</strong>. A mente, ao nascer, é como uma "tábula rasa" (uma folha em branco), que é preenchida à medida que temos experiências. Não existem ideias inatas; tudo o que sabemos é aprendido através dos sentidos.</p>
            <ul>
                <li><strong>John Locke:</strong> Argumentou que as ideias surgem da sensação (experiência externa) e da reflexão (experiência interna, sobre as operações da mente).</li>
                <li><strong>David Hume:</strong> Levou o empirismo a uma conclusão cética, questionando a validade de conceitos como causalidade e identidade pessoal, argumentando que são apenas hábitos mentais formados pela repetição de experiências.</li>
            </ul>
            <h3>A Síntese de Kant</h3>
            <p><strong>Immanuel Kant</strong> revolucionou a filosofia ao propor uma síntese crítica entre as duas correntes. Ele concordou com os empiristas que "todo conhecimento começa com a experiência", mas acrescentou que a experiência por si só não produz conhecimento. A mente humana não é passiva; ela possui <strong>estruturas a priori</strong> (como as noções de espaço, tempo e causalidade) que organizam e dão forma aos dados brutos dos sentidos. Em suma: a experiência fornece a matéria do conhecimento, e a razão fornece a forma.</p>
        `
    },
    { 
        id: 55, 
        title: 'Contratualistas (Hobbes, Locke, Rousseau)', 
        url: '#', 
        tags: ['filosofia', 'política'], 
        ano: 2,
        content: `
            <p>Os contratualistas são teóricos políticos que buscaram explicar a origem e a legitimidade do Estado e da sociedade civil através da ideia de um <strong>"contrato social"</strong>. Eles imaginam como seria a vida humana em um <strong>"Estado de Natureza"</strong> (uma condição pré-social) para justificar por que as pessoas concordariam em criar um governo.</p>
            <h3>Thomas Hobbes (Leviatã)</h3>
            <ul>
                <li><strong>Estado de Natureza:</strong> Um estado de "guerra de todos contra todos". Movidos por um egoísmo fundamental e pelo desejo de autopreservação, os seres humanos vivem em constante medo e insegurança, sem leis ou moralidade. A vida é "solitária, pobre, sórdida, embrutecida e curta".</li>
                <li><strong>Contrato Social:</strong> Para escapar desse caos, as pessoas abrem mão de <strong>toda</strong> a sua liberdade e a transferem para um soberano absoluto (um rei ou uma assembleia), o <strong>Leviatã</strong>. O objetivo do contrato é garantir a <strong>paz e a segurança</strong>. O poder do soberano é indivisível e inquestionável.</li>
            </ul>
            <h3>John Locke (Pai do Liberalismo)</h3>
            <ul>
                <li><strong>Estado de Natureza:</strong> Diferente de Hobbes, Locke vê o estado de natureza como um lugar onde as pessoas são livres, iguais e dotadas de <strong>direitos naturais</strong> inalienáveis: <strong>vida, liberdade e propriedade</strong>. O problema é que, sem um juiz imparcial, os conflitos sobre esses direitos podem levar a um estado de guerra.</li>
                <li><strong>Contrato Social:</strong> As pessoas consentem em formar um governo para atuar como um juiz neutro e <strong>proteger os direitos naturais</strong> que já possuíam. O poder do governo é limitado e baseado no consentimento dos governados. Se o governo se torna tirânico e viola esses direitos, o povo tem o direito à revolução.</li>
            </ul>
            <h3>Jean-Jacques Rousseau (O Bom Selvagem)</h3>
            <ul>
                <li><strong>Estado de Natureza:</strong> O ser humano é o "bom selvagem", vivendo em um estado de pureza, compaixão (piedade) e liberdade. A sociedade, especialmente com o surgimento da <strong>propriedade privada</strong>, corrompe o homem, gerando desigualdade e vícios.</li>
                <li><strong>Contrato Social:</strong> O contrato social legítimo não é para submeter-se a um soberano, mas para criar uma comunidade política onde cada cidadão se une a todos. Ao obedecer à lei, que é uma expressão da <strong>Vontade Geral</strong> (o bem comum), o indivíduo obedece a si mesmo e, assim, permanece livre. Defende um modelo de democracia direta.</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://mundoeducacao.uol.com.br/filosofia/contratualismo.htm" target="_blank" rel="noopener noreferrer">Contratualismo no Mundo Educação</a></li></ul>
        `
    },
    // Sociologia
    { 
        id: 56, 
        title: 'Trabalho e Capitalismo (Marx)', 
        url: '#', 
        tags: ['sociologia', 'trabalho', 'marx'], 
        ano: 2, 
        content: `
            <p>Para Karl Marx, o trabalho é a atividade fundamental que define o ser humano. No entanto, no sistema capitalista, o trabalho se torna uma fonte de exploração e alienação.</p>
            <h3>Conceitos-Chave</h3>
            <ul>
                <li><strong>Luta de Classes:</strong> A história da sociedade é a história da luta entre classes opostas. No capitalismo, essa luta ocorre entre a <strong>burguesia</strong> (dona dos meios de produção) e o <strong>proletariado</strong> (que vende sua força de trabalho).</li>
                <li><strong>Mais-Valia:</strong> É a diferença entre o valor que o trabalhador produz e o salário que ele recebe. Essa "mais-valia" é a fonte do lucro do capitalista e, para Marx, a essência da exploração.</li>
                <li><strong>Alienação:</strong> No capitalismo, o trabalhador se torna alienado (separado) do produto que fabrica, do processo de trabalho, de sua própria essência humana e dos outros trabalhadores. O trabalho deixa de ser uma forma de realização para se tornar apenas um meio de sobrevivência.</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://brasilescola.uol.com.br/sociologia/karl-marx.htm" target="_blank" rel="noopener noreferrer">Biografia e ideias de Karl Marx no Brasil Escola</a></li>
            </ul>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.alura.com.br/formacao-filosofia" target="_blank" rel="noopener noreferrer">Formação Filosofia na Alura</a></li>
            </ul>
        `
    },
    { 
        id: 57, 
        title: 'Estratificação Social', 
        url: '#', 
        tags: ['sociologia', 'sociedade', 'desigualdade'], 
        ano: 2, 
        content: `
            <p>A estratificação social é a forma como a sociedade se organiza em camadas (ou estratos) hierárquicas, com base em critérios como riqueza, poder e prestígio. Essa divisão cria e perpetua a desigualdade social.</p>
            <h3>Sistemas de Estratificação</h3>
            <ul>
                <li><strong>Escravidão:</strong> Um indivíduo é propriedade de outro. É a forma mais extrema de desigualdade.</li>
                <li><strong>Castas:</strong> Sistema rígido baseado na hereditariedade, sem mobilidade social. Típico da Índia tradicional.</li>
                <li><strong>Estamentos:</strong> Grupos sociais com diferentes direitos e deveres, baseados na honra e tradição. Típico da Europa feudal (clero, nobreza, servos).</li>
                <li><strong>Classes Sociais:</strong> Sistema mais flexível, baseado principalmente na posição econômica. É o sistema característico das sociedades capitalistas e permite alguma mobilidade social.</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://mundoeducacao.uol.com.br/sociologia/desigualdade-social.htm" target="_blank" rel="noopener noreferrer">Artigo sobre Desigualdade Social no Mundo Educação</a></li>
            </ul>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.alura.com.br/formacao-data-science" target="_blank" rel="noopener noreferrer">Formação Data Science na Alura (para analisar dados sociais)</a></li>
            </ul>
        `
    },
    // Biologia
    { 
        id: 58, 
        title: 'Genética (Leis de Mendel)', 
        url: '#', 
        tags: ['biologia', 'genética'], 
        ano: 2, 
        content: `
            <p>A Genética Clássica, ou Mendeliana, estuda a transmissão das características hereditárias. Gregor Mendel, através de seus experimentos com ervilhas, estabeleceu as leis fundamentais da hereditariedade.</p>
            <h3>Conceitos Fundamentais</h3>
            <ul>
                <li><strong>Gene:</strong> Segmento de DNA que codifica uma característica.</li>
                <li><strong>Alelos:</strong> Versões diferentes de um mesmo gene (ex: alelo para semente amarela, alelo para semente verde).</li>
                <li><strong>Genótipo:</strong> A constituição genética de um indivíduo (ex: AA, Aa, aa).</li>
                <li><strong>Fenótipo:</strong> A característica observável, resultante da interação do genótipo com o ambiente (ex: cor da semente).</li>
                <li><strong>Homozigoto:</strong> Indivíduo com dois alelos iguais para um gene (AA ou aa).</li>
                <li><strong>Heterozigoto:</strong> Indivíduo com dois alelos diferentes para um gene (Aa).</li>
            </ul>
            <h3>1ª Lei de Mendel (Lei da Segregação)</h3>
            <p>Cada característica é determinada por um par de fatores (alelos) que se separam (segregam) na formação dos gametas, de modo que cada gameta recebe apenas um fator de cada par.</p>
            <h3>2ª Lei de Mendel (Lei da Segregação Independente)</h3>
            <p>Os fatores (alelos) para duas ou mais características se separam de forma independente uns dos outros durante a formação dos gametas.</p>
        ` 
    },
    { 
        id: 59, 
        title: 'Divisão Celular (Mitose e Meiose)', 
        url: '#', 
        tags: ['biologia', 'células'], 
        ano: 2, 
        content: `
            <p>A divisão celular é o processo pelo qual uma célula se divide para formar novas células. Existem dois tipos principais:</p>
            <h3>Mitose</h3>
            <p>É um processo de divisão em que uma célula-mãe (2n) origina <strong>duas células-filhas geneticamente idênticas</strong> a ela (2n). É fundamental para o crescimento do organismo, a renovação de tecidos e a cicatrização. Suas fases são: Prófase, Metáfase, Anáfase e Telófase.</p>
            <h3>Meiose</h3>
            <p>É um processo de divisão em que uma célula-mãe diploide (2n) origina <strong>quatro células-filhas haploides (n)</strong>, com metade do número de cromossomos. É essencial para a formação de gametas (espermatozoides e óvulos) e esporos. A meiose aumenta a variabilidade genética através do <em>crossing-over</em>. Ocorre em duas etapas: Meiose I (reducional) e Meiose II (equacional).</p>
        ` 
    },
    { 
        id: 60, 
        title: 'Fisiologia Humana (Introdução)', 
        url: '#', 
        tags: ['biologia', 'corpo humano'], 
        ano: 2, 
        content: `
            <p>A Fisiologia Humana estuda o funcionamento do corpo humano, ou seja, como os órgãos e sistemas trabalham em conjunto para manter a vida e a homeostase (equilíbrio interno).</p>
            <h3>Principais Sistemas (Visão Geral)</h3>
            <ul>
                <li><strong>Sistema Digestório:</strong> Processa os alimentos, absorve nutrientes e elimina resíduos.</li>
                <li><strong>Sistema Respiratório:</strong> Realiza as trocas gasosas (absorve O₂ e elimina CO₂).</li>
                <li><strong>Sistema Circulatório (Cardiovascular):</strong> Transporta nutrientes, gases, hormônios e resíduos pelo corpo através do sangue.</li>
                <li><strong>Sistema Excretor (Urinário):</strong> Filtra o sangue e elimina resíduos metabólicos através da urina.</li>
                <li><strong>Sistema Nervoso:</strong> Coordena todas as funções do corpo através de impulsos elétricos.</li>
                <li><strong>Sistema Endócrino:</strong> Regula funções corporais através de hormônios.</li>
            </ul>
            <p>O 2º ano geralmente foca nos sistemas de nutrição (digestório, respiratório, circulatório, excretor), enquanto o 3º ano aprofunda nos sistemas de coordenação e outros.</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://brasilescola.uol.com.br/biologia/fisiologia-humana.htm" target="_blank" rel="noopener noreferrer">Fisiologia Humana no Brasil Escola</a></li></ul>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.coursera.org/browse/health/human-physiology" target="_blank" rel="noopener noreferrer">Cursos de Fisiologia Humana no Coursera</a></li>
            </ul>
        ` 
    },

    // --- 3º ANO ---
    // Português e Literatura
    { 
        id: 61, 
        title: 'Argumentação e Técnicas de Redação (Enem)', 
        url: '#', 
        tags: ['português', 'redação'], 
        ano: 3, 
        content: `
            <p>Uma boa argumentação é a chave para uma redação de destaque. O objetivo é convencer o leitor sobre a validade da sua tese (ponto de vista).</p>
            <h3>Tipos de Argumentos</h3>
            <ul>
                <li><strong>Argumento de Autoridade:</strong> Citação de um especialista ou instituição renomada no assunto.</li>
                <li><strong>Argumento por Exemplificação:</strong> Uso de exemplos concretos (fatos, notícias) para ilustrar a tese.</li>
                <li><strong>Argumento por Comparação:</strong> Comparar situações ou lugares diferentes para reforçar o ponto.</li>
                <li><strong>Argumento de Causa e Consequência:</strong> Explicar os motivos e os efeitos de um determinado problema.</li>
                <li><strong>Alusão Histórica:</strong> Relacionar o tema atual com eventos do passado.</li>
            </ul>
            <p>Na redação do ENEM, é crucial que seus argumentos sustentem a tese e se conectem com a proposta de intervenção na conclusão.</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://querobolsa.com.br/enem/redacao" target="_blank" rel="noopener noreferrer">Guia de Redação do Enem no Quero Bolsa</a></li></ul>
            <h3>Cursos Recomendados</h3>
            <ul><li><a href="https://www.alura.com.br/formacao-comunicacao-escrita" target="_blank" rel="noopener noreferrer">Formação Comunicação e Escrita na Alura</a></li></ul>
        ` 
    },
    { 
        id: 62, 
        title: 'Modernismo (1ª, 2ª e 3ª fase)', 
        url: '#', 
        tags: ['literatura', 'modernismo'], 
        ano: 3, 
        content: `
            <p>O Modernismo no Brasil foi um amplo movimento de ruptura com o passado e de busca por uma identidade cultural brasileira. Começou oficialmente com a Semana de Arte Moderna de 1922.</p>
            <h3>1ª Fase (1922-1930): Fase Heroica</h3>
            <p>Marcada pela destruição dos valores antigos, nacionalismo crítico, valorização do cotidiano e da linguagem coloquial. Destaques: Mário de Andrade, Oswald de Andrade, Manuel Bandeira.</p>
            <h3>2ª Fase (1930-1945): Fase de Consolidação</h3>
            <p>Amadurecimento das ideias de 22. Na poesia, surgem reflexões sobre o destino humano e o tempo (Carlos Drummond de Andrade, Cecília Meireles). No romance, há um forte regionalismo e denúncia social (Graciliano Ramos, Jorge Amado, Rachel de Queiroz).</p>
            <h3>3ª Fase (1945-1960): Geração de 45</h3>
            <p>Busca por uma linguagem mais objetiva e formal, retomando algumas formas clássicas, mas sem abandonar as conquistas modernistas. Destaques: João Cabral de Melo Neto (poesia) e Clarice Lispector e Guimarães Rosa (prosa inovadora).</p>
        ` 
    },    
    { 
        id: 63, 
        title: 'Literatura Contemporânea', 
        url: '#', 
        tags: ['literatura', 'contemporânea'], 
        ano: 3, 
        content: `
            <p>Abrange a produção literária do pós-modernismo (a partir dos anos 60/70) até os dias de hoje. É marcada pela diversidade de estilos e pela mistura de tendências.</p>
            <h3>Características Gerais</h3>
            <ul>
                <li>Mistura de gêneros literários e de linguagens (erudita e popular).</li>
                <li>Engajamento social e político, abordando temas como a ditadura militar, a urbanização e as minorias.</li>
                <li>Uso da metalinguagem (o texto falando sobre o próprio texto).</li>
                <li>Fragmentação e ausência de narrativas lineares.</li>
                <li>Destaques: Poesia Concreta, contistas como Dalton Trevisan e Lygia Fagundes Telles, e a prosa urbana de Rubem Fonseca.</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://www.todamateria.com.br/literatura-contemporanea/" target="_blank" rel="noopener noreferrer">Literatura Contemporânea no Toda Matéria</a></li></ul>
        ` 
    },
    // Matemática
    { 
        id: 64, 
        title: 'Análise Combinatória e Probabilidade', 
        url: '#', 
        tags: ['matemática', 'probabilidade', 'estatística'], 
        ano: 3, 
        content: `
            <h3>Análise Combinatória</h3>
            <p>É a área da matemática que estuda métodos de contagem. Ela nos ajuda a responder perguntas como "de quantas maneiras diferentes posso fazer algo?". Os principais conceitos são <strong>Permutação</strong> (importa a ordem), <strong>Arranjo</strong> (importa a ordem, subconjuntos) e <strong>Combinação</strong> (não importa a ordem).</p>
            <h3>Probabilidade</h3>
            <p>É o estudo das chances de um determinado evento ocorrer. A fórmula básica é: <strong>P(evento) = (Número de casos favoráveis) / (Número total de casos possíveis)</strong>. A análise combinatória é frequentemente usada para calcular esses números.</p>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://brasilescola.uol.com.br/matematica/analise-combinatoria.htm" target="_blank" rel="noopener noreferrer">Análise Combinatória no Brasil Escola</a></li>
            </ul>
        ` 
    },
    { 
        id: 65, 
        title: 'Estatística', 
        url: '#', 
        tags: ['matemática', 'estatística', 'dados'], 
        ano: 3, 
        content: `
            <p>A Estatística é a ciência que coleta, organiza, analisa e interpreta dados para tomar decisões. É fundamental no mundo moderno.</p>
            <h3>Medidas de Tendência Central</h3>
            <ul>
                <li><strong>Média Aritmética:</strong> A soma de todos os valores dividida pelo número de valores.</li>
                <li><strong>Moda:</strong> O valor que aparece com mais frequência em um conjunto de dados.</li>
                <li><strong>Mediana:</strong> O valor central de um conjunto de dados ordenado.</li>
            </ul>
            <h3>Medidas de Dispersão</h3>
            <p>Indicam o quão "espalhados" os dados estão em relação à média. As principais são o <strong>Desvio Padrão</strong> e a <strong>Variância</strong>.</p>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.alura.com.br/formacao-data-science" target="_blank" rel="noopener noreferrer">Formação Data Science na Alura</a></li>
            </ul>
        ` 
    },
    { 
        id: 66, 
        title: 'Geometria Analítica', 
        url: '#', 
        tags: ['matemática', 'geometria', 'álgebra'], 
        ano: 3, 
        content: `
            <p>A Geometria Analítica é a ponte entre a Álgebra e a Geometria. Ela utiliza um sistema de coordenadas (o Plano Cartesiano) para representar figuras geométricas através de equações.</p>
            <h3>Principais Tópicos</h3>
            <ul>
                <li><strong>Estudo do Ponto:</strong> Cálculo da distância entre dois pontos e ponto médio de um segmento.</li>
                <li><strong>Estudo da Reta:</strong> Equação geral e reduzida da reta, coeficiente angular, posições relativas entre retas (paralelas, concorrentes, perpendiculares).</li>
                <li><strong>Estudo da Circunferência:</strong> Equação geral e reduzida da circunferência.</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://mundoeducacao.uol.com.br/matematica/geometria-analitica.htm" target="_blank" rel="noopener noreferrer">Geometria Analítica no Mundo Educação</a></li></ul>
        ` 
    },
    { 
        id: 67, 
        title: 'Polinômios', 
        url: '#', 
        tags: ['matemática', 'álgebra'], 
        ano: 3, 
        content: `
            <p>Um polinômio é uma expressão algébrica formada pela soma de monômios. As funções afim e quadrática são tipos de funções polinomiais de grau 1 e 2, respectivamente.</p>
            <h3>Operações e Teoremas</h3>
            <ul>
                <li><strong>Operações:</strong> Polinômios podem ser somados, subtraídos, multiplicados e divididos (usando o método da chave ou o dispositivo de Briot-Ruffini).</li>
                <li><strong>Raízes de um Polinômio:</strong> São os valores de 'x' para os quais P(x) = 0.</li>
                <li><strong>Teorema do Resto:</strong> O resto da divisão de um polinômio P(x) por (x - a) é igual a P(a).</li>
                <li><strong>Relações de Girard:</strong> Relacionam os coeficientes de um polinômio com a soma e o produto de suas raízes.</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://brasilescola.uol.com.br/matematica/polinomios.htm" target="_blank" rel="noopener noreferrer">Polinômios no Brasil Escola</a></li></ul>
        ` 
    },
    // Física
    { 
        id: 68, 
        title: 'Termodinâmica', 
        url: '#', 
        tags: ['física', 'termologia'], 
        ano: 3, 
        content: `
            <p>A Termodinâmica estuda as relações entre calor, trabalho e energia, especialmente em gases e máquinas térmicas.</p>
            <h3>1ª Lei da Termodinâmica</h3>
            <p>É a lei da conservação de energia aplicada a um sistema termodinâmico. A variação da energia interna (ΔU) de um sistema é igual ao calor (Q) recebido menos o trabalho (τ) realizado por ele: <strong>ΔU = Q - τ</strong>.</p>
            <h3>2ª Lei da Termodinâmica</h3>
            <p>Estabelece limites para a conversão de calor em trabalho e introduz o conceito de entropia (medida da desordem). Uma de suas consequências é que é impossível construir uma máquina térmica com 100% de rendimento.</p>
        ` 
    },    
    { 
        id: 69, 
        title: 'Ondulatória e Óptica Geométrica', 
        url: '#', 
        tags: ['física', 'ondas', 'luz'], 
        ano: 3, 
        content: `
            <h3>Ondulatória</h3>
            <p>Estuda as ondas e seus fenômenos. A equação fundamental é <strong>v = λ . f</strong> (velocidade = comprimento de onda x frequência). Fenômenos importantes incluem <strong>reflexão</strong>, <strong>refração</strong>, <strong>difração</strong> e <strong>interferência</strong>.</p>
            <h3>Óptica Geométrica</h3>
            <p>Estuda a luz tratando-a como raios que se propagam em linha reta. Tópicos principais:</p>
            <ul>
                <li><strong>Espelhos Planos e Esféricos:</strong> Formação de imagens por reflexão.</li>
                <li><strong>Lentes Esféricas:</strong> Formação de imagens por refração (ex: óculos, lupas).</li>
                <li><strong>Refração da Luz:</strong> Mudança na velocidade e direção da luz ao passar de um meio para outro (<strong>Lei de Snell-Descartes</strong>).</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://www.todamateria.com.br/optica-geometrica/" target="_blank" rel="noopener noreferrer">Óptica Geométrica no Toda Matéria</a></li></ul>
        ` 
    },
    { 
        id: 70, 
        title: 'Eletrostática e Eletrodinâmica', 
        url: '#', 
        tags: ['física', 'eletricidade'], 
        ano: 3, 
        content: `
            <h3>Eletrostática</h3>
            <p>Estuda as cargas elétricas em repouso. A <strong>Lei de Coulomb</strong> descreve a força de atração ou repulsão entre cargas. Conceitos como <strong>campo elétrico</strong> e <strong>potencial elétrico</strong> são fundamentais.</p>
            <h3>Eletrodinâmica</h3>
            <p>Estuda as cargas elétricas em movimento (corrente elétrica). A <strong>1ª Lei de Ohm (U = R.i)</strong> relaciona tensão (U), resistência (R) e corrente (i). O estudo de <strong>circuitos elétricos</strong> (associação de resistores em série e paralelo) e o cálculo de <strong>potência elétrica (P = U.i)</strong> são essenciais.</p>
        ` 
    },    
    { 
        id: 71, 
        title: 'Magnetismo e Eletromagnetismo', 
        url: '#', 
        tags: ['física', 'eletricidade'], 
        ano: 3, 
        content: `
            <h3>Magnetismo</h3>
            <p>Estuda os fenômenos relacionados a ímãs e campos magnéticos. Ímãs sempre possuem dois polos (norte e sul), que são inseparáveis. O campo magnético da Terra nos protege de partículas solares.</p>
            <h3>Eletromagnetismo</h3>
            <p>É a unificação da eletricidade e do magnetismo. Uma corrente elétrica pode gerar um campo magnético (experimento de Oersted), e a variação de um campo magnético pode induzir uma corrente elétrica (<strong>Indução Eletromagnética de Faraday</strong>). Esse princípio é a base para o funcionamento de motores e geradores elétricos.</p>
        ` 
    },    
    // Química
    { 
        id: 72, 
        title: 'Química Orgânica Completa', 
        url: '#', 
        tags: ['química', 'orgânica'], 
        ano: 3, 
        content: `
            <p>A Química Orgânica é o ramo da química que estuda os compostos de carbono. Esses compostos são a base da vida e estão presentes em tudo, de plásticos a medicamentos.</p>
            <h3>Principais Funções Orgânicas</h3>
            <ul>
                <li><strong>Hidrocarbonetos:</strong> Compostos apenas de carbono e hidrogênio (Alcanos, Alcenos, Alcinos, Aromáticos).</li>
                <li><strong>Funções Oxigenadas:</strong> Contêm oxigênio (Álcool, Fenol, Éter, Aldeído, Cetona, Ácido Carboxílico, Éster).</li>
                <li><strong>Funções Nitrogenadas:</strong> Contêm nitrogênio (Amina, Amida, Nitrocompostos).</li>
            </ul>
            <p>O estudo se concentra em nomenclatura (dar nomes aos compostos), identificação de funções, isomeria (compostos com mesma fórmula molecular mas estruturas diferentes) e reações orgânicas (adição, substituição, eliminação).</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://www.manualdaquimica.com/quimica-organica" target="_blank" rel="noopener noreferrer">Química Orgânica no Manual da Química</a></li></ul>
        ` 
    },
    { 
        id: 73, 
        title: 'Isomeria e Reações Orgânicas', 
        url: '#', 
        tags: ['química', 'orgânica'], 
        ano: 3, 
        content: `
            <h3>Isomeria</h3>
            <p>É o fenômeno em que dois ou mais compostos diferentes apresentam a mesma fórmula molecular, mas estruturas diferentes. <strong>Isomeria Plana:</strong> Diferenças vistas na fórmula estrutural plana (de função, de cadeia, de posição). <strong>Isomeria Espacial (Estereoisomeria):</strong> Diferenças percebidas apenas na estrutura tridimensional (geométrica cis-trans e óptica).</p>
            <h3>Principais Reações Orgânicas</h3>
            <ul>
                <li><strong>Adição:</strong> Quebra de ligações π (duplas ou triplas) para adicionar novos átomos. Típica de alcenos e alcinos.</li>
                <li><strong>Substituição:</strong> Troca de um átomo ou grupo de átomos por outro. Típica de alcanos e compostos aromáticos.</li>
                <li><strong>Eliminação:</strong> Remoção de átomos de carbonos vizinhos para formar uma ligação dupla. É o oposto da adição.</li>
                <li><strong>Oxidação:</strong> Reações que podem levar à formação de álcoois, aldeídos, cetonas ou ácidos carboxílicos.</li>
            </ul>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://www.todamateria.com.br/reacoes-organicas/" target="_blank" rel="noopener noreferrer">Principais Reações Orgânicas no Toda Matéria</a></li>
            </ul>
        `
    },
    { 
        id: 74, 
        title: 'Eletroquímica e Radioatividade', 
        url: '#', 
        tags: ['química', 'reações'], 
        ano: 3, 
        content: `
            <h3>Eletroquímica</h3>
            <p>Estuda a relação entre reações químicas e energia elétrica. <strong>Pilhas (Células Galvânicas):</strong> Geram eletricidade a partir de uma reação de oxirredução espontânea. <strong>Eletrólise:</strong> Usa eletricidade para forçar a ocorrência de uma reação não espontânea.</p>
            <h3>Radioatividade</h3>
            <p>Fenômeno em que núcleos atômicos instáveis emitem partículas e/ou ondas para se tornarem mais estáveis. <strong>Emissões Principais:</strong> Partícula Alfa (α), Partícula Beta (β) e Radiação Gama (γ). Conceitos importantes incluem <strong>meia-vida</strong> (tempo para metade da amostra decair) e <strong>fissão/fusão nuclear</strong>.</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://brasilescola.uol.com.br/quimica/eletroquimica.htm" target="_blank" rel="noopener noreferrer">Artigo sobre Eletroquímica no Brasil Escola</a></li></ul>
        ` 
    },
    // Geografia
    { 
        id: 75, 
        title: 'Blocos Econômicos e Economia Global', 
        url: '#', 
        tags: ['geografia', 'globalização'], 
        ano: 3, 
        content: `
            <p>Os blocos econômicos são associações de países que estabelecem relações comerciais privilegiadas entre si. São uma característica marcante da globalização.</p>
            <h3>Fases de Integração de um Bloco Econômico</h3>
            <ol>
                <li><strong>Zona de Livre Comércio:</strong> Redução ou eliminação de tarifas alfandegárias entre os membros (Ex: NAFTA, atual USMCA).</li>
                <li><strong>União Aduaneira:</strong> Adota uma Tarifa Externa Comum (TEC) para produtos de países de fora do bloco (Ex: Mercosul).</li>
                <li><strong>Mercado Comum:</strong> Livre circulação de pessoas, serviços e capitais (Ex: União Europeia).</li>
                <li><strong>União Econômica e Monetária:</strong> Adoção de uma moeda única e políticas econômicas unificadas (Ex: Zona do Euro na UE).</li>
            </ol>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://brasilescola.uol.com.br/geografia/blocos-economicos.htm" target="_blank" rel="noopener noreferrer">Blocos Econômicos no Brasil Escola</a></li></ul>
        ` 
    },
    { 
        id: 76, 
        title: 'Meio Ambiente e Questões Agrárias', 
        url: '#', 
        tags: ['geografia', 'ambiente'], 
        ano: 3, 
        content: `
            <h3>Principais Problemas Ambientais Globais</h3>
            <ul>
                <li><strong>Aquecimento Global:</strong> Intensificação do efeito estufa pela emissão de gases (GEE), causando mudanças climáticas.</li>
                <li><strong>Desmatamento:</strong> Principalmente em florestas tropicais como a Amazônia, para expansão da agropecuária e mineração.</li>
                <li><strong>Crise Hídrica:</strong> Escassez e poluição da água doce, um recurso finito e mal distribuído.</li>
                <li><strong>Perda de Biodiversidade:</strong> Extinção de espécies devido à destruição de habitats.</li>
            </ul>
            <h3>Questões Agrárias no Brasil</h3>
            <p>Marcada pela <strong>concentração de terras</strong>, um problema histórico que gera conflitos no campo. O agronegócio moderno, voltado para a exportação (commodities), coexiste com a agricultura familiar, responsável pela maior parte dos alimentos que chegam à mesa dos brasileiros.</p>
            <h3>Para Aprofundar</h3>
            <ul><li><a href="https://mundoeducacao.uol.com.br/geografia/problemas-ambientais.htm" target="_blank" rel="noopener noreferrer">Problemas Ambientais no Mundo Educação</a></li></ul>
        ` 
    },
    // História
    { 
        id: 77, 
        title: 'Brasil Império e República', 
        url: '#', 
        tags: ['história', 'brasil'], 
        ano: 3, 
        content: `
            <h3>Brasil Império (1822-1889)</h3>
            <p>Dividido em Primeiro Reinado, Período Regencial e Segundo Reinado. Marcado pela manutenção da escravidão e da estrutura agrária, pela centralização política (Poder Moderador) e por conflitos como a Guerra do Paraguai. O fim do Império veio com a Proclamação da República, apoiada por militares e pela elite cafeeira.</p>
            <h3>República Velha (1889-1930)</h3>
            <p>Também conhecida como "República do Café com Leite", foi dominada pelas oligarquias de São Paulo e Minas Gerais. Características: voto de cabresto, coronelismo e a política dos governadores.</p>
        ` 
    },    
    { 
        id: 78, 
        title: 'Era Vargas e Ditadura Militar', 
        url: '#', 
        tags: ['história', 'brasil', 'ditadura'], 
        ano: 3, 
        content: `
            <h3>Era Vargas (1930-1945)</h3>
            <p>Getúlio Vargas chega ao poder com a Revolução de 1930. Seu governo foi marcado pelo populismo, pela criação das leis trabalhistas (CLT) e por um forte nacionalismo. A fase mais autoritária foi o <strong>Estado Novo</strong> (1937-1945), uma ditadura com censura e repressão.</p>
            <h3>Ditadura Militar (1964-1985)</h3>
            <p>Iniciada com um golpe militar que depôs o presidente João Goulart. Foi um período de autoritarismo, repressão política, censura e violação dos direitos humanos, especialmente durante os "Anos de Chumbo" (pós-AI-5). Economicamente, houve o "Milagre Econômico", seguido por uma grave crise da dívida externa. O período terminou com a redemocratização.</p>
        ` 
    },    
    { 
        id: 79, 
        title: 'Guerras Mundiais e Guerra Fria', 
        url: '#', 
        tags: ['história', 'guerras', 'século xx'], 
        ano: 3, 
        content: `
            <h3>Guerras Mundiais</h3>
            <p>A <strong>Primeira Guerra Mundial (1914-1918)</strong> foi um conflito de trincheiras motivado por disputas imperialistas e nacionalismos. A <strong>Segunda Guerra Mundial (1939-1945)</strong> foi marcada pelo avanço do totalitarismo (nazifascismo) e pelo Holocausto. Ambos os conflitos redesenharam o mapa político mundial.</p>
            <h3>Guerra Fria (1947-1991)</h3>
            <p>Disputa ideológica, política e militar entre as duas superpotências do pós-guerra: os <strong>Estados Unidos</strong> (capitalismo) e a <strong>União Soviética</strong> (socialismo). Foi marcada pela corrida armamentista e espacial, e por conflitos indiretos (como as guerras da Coreia e do Vietnã). Terminou com a queda do Muro de Berlim e o colapso da URSS.</p>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://mundoeducacao.uol.com.br/historiageral/guerra-fria.htm" target="_blank" rel="noopener noreferrer">Guerra Fria no Mundo Educação</a></li>
            </ul>
        ` 
    },
    // Filosofia
    { 
        id: 80, 
        title: 'Filosofia Contemporânea (Existencialismo, Marxismo)', 
        url: '#', 
        tags: ['filosofia', 'contemporânea'], 
        ano: 3,
        content: `
            <p>A Filosofia Contemporânea (séculos XIX ao XXI) é marcada pela diversidade de correntes e por uma forte crítica à razão, à sociedade industrial e aos valores tradicionais. Ela aborda as angústias e os dilemas do ser humano no mundo moderno.</p>
            <h3>Marxismo</h3>
            <p>Mais que uma filosofia, é uma teoria social, econômica e política desenvolvida por <strong>Karl Marx</strong> e <strong>Friedrich Engels</strong>. Seu método é o <strong>materialismo histórico-dialético</strong>: a história da humanidade é a história da luta de classes, impulsionada pelas contradições nas forças produtivas. Critica o capitalismo por sua natureza exploradora, baseada na extração da <strong>mais-valia</strong>, e por gerar a <strong>alienação</strong> do trabalhador. O objetivo final é a superação do capitalismo e a instauração de uma sociedade comunista. (Veja mais em 'Trabalho e Capitalismo (Marx)').</p>
            <h3>Existencialismo</h3>
            <p>Corrente que coloca a existência humana, a liberdade e a responsabilidade individual no centro da reflexão. O lema principal, de <strong>Jean-Paul Sartre</strong>, é <strong>"a existência precede a essência"</strong>. Isso significa que não nascemos com uma natureza ou um propósito pré-definido; primeiro existimos, e então, através de nossas escolhas e ações, construímos quem somos. Somos "condenados a ser livres", o que gera uma profunda <strong>angústia</strong>, pois somos totalmente responsáveis por nossa própria vida e, em certo sentido, pela humanidade.</p>
            <h3>Escola de Frankfurt e a Teoria Crítica</h3>
            <p>Grupo de pensadores alemães (como <strong>Theodor Adorno</strong>, <strong>Max Horkheimer</strong> e <strong>Herbert Marcuse</strong>) que desenvolveu a <strong>Teoria Crítica</strong>. Eles fizeram uma análise pessimista da sociedade moderna, argumentando que a razão, que deveria ser libertadora (Iluminismo), tornou-se uma ferramenta de dominação (<strong>razão instrumental</strong>). Criticaram a <strong>"Indústria Cultural"</strong>, que transforma a arte e a cultura em mercadorias padronizadas para o consumo de massa, alienando os indivíduos e reforçando a ideologia dominante. (Veja mais em 'Cultura de Massa e Mídia').</p>
            <h3>Pós-modernismo</h3>
            <p>Pensadores como <strong>Michel Foucault</strong> e <strong>Jean-François Lyotard</strong> questionam as "grandes narrativas" (metanarrativas) que prometiam um futuro de progresso e emancipação, como o Iluminismo e o Marxismo. Foucault, por exemplo, analisou como o poder na sociedade moderna não é apenas repressivo, mas também produtivo, moldando os indivíduos através de instituições como escolas, hospitais e prisões (<strong>microfísica do poder</strong>).</p>
        `
    },
    // Sociologia
    { 
        id: 81, 
        title: 'Cultura de Massa e Mídia', 
        url: '#', 
        tags: ['sociologia', 'mídia', 'cultura'], 
        ano: 3, 
        content: `
            <p>A cultura de massa é o conjunto de produtos culturais (filmes, músicas, programas de TV, notícias) produzidos em larga escala para um público amplo e diverso, com o objetivo principal de gerar lucro.</p>
            <h3>Indústria Cultural</h3>
            <p>Este conceito foi criado pelos filósofos da Escola de Frankfurt (Adorno e Horkheimer) para criticar a cultura de massa. Para eles, a mídia transforma a cultura em uma mercadoria como qualquer outra. A <strong>Indústria Cultural</strong> produz arte padronizada, repetitiva e de fácil consumo, que serve para entreter e distrair as pessoas, desencorajando o pensamento crítico e reforçando a ideologia dominante do capitalismo.</p>
            <h3>Efeitos da Mídia</h3>
            <p>A mídia de massa tem um papel central na formação da opinião pública, na definição de padrões de comportamento e na criação de desejos de consumo. Ela pode tanto democratizar o acesso à informação quanto manipular e homogeneizar o pensamento da sociedade.</p>
            <h3>Para Aprofundar</h3>
            <ul>
                <li><a href="https://brasilescola.uol.com.br/sociologia/industria-cultural.htm" target="_blank" rel="noopener noreferrer">O que é Indústria Cultural? no Brasil Escola</a></li>
            </ul>
            <h3>Cursos Recomendados</h3>
            <ul>
                <li><a href="https://www.alura.com.br/formacao-comunicacao" target="_blank" rel="noopener noreferrer">Formação Comunicação na Alura</a></li>
            </ul>
        `
    },
    // Biologia
    { 
        id: 82, 
        title: 'Evolução e Ecologia Avançada', 
        url: '#', 
        tags: ['biologia', 'evolução', 'ecologia'], 
        ano: 3, 
        content: `
            <h3>Teorias Evolutivas</h3>
            <p>A evolução é o processo de mudança nas características hereditárias de populações biológicas ao longo das gerações.</p>
            <ul>
                <li><strong>Lamarckismo:</strong> Baseado na Lei do Uso e Desuso e na Lei da Herança dos Caracteres Adquiridos. Embora incorreta, foi importante por introduzir a ideia de adaptação ao meio.</li>
                <li><strong>Darwinismo:</strong> Proposto por Charles Darwin, baseia-se na <strong>Seleção Natural</strong>. Indivíduos com características mais vantajosas para um determinado ambiente têm mais chances de sobreviver e se reproduzir, passando essas características para seus descendentes.</li>
                <li><strong>Neodarwinismo (Teoria Sintética da Evolução):</strong> É a união do Darwinismo com os conhecimentos da Genética. Explica que a variabilidade genética (matéria-prima da evolução) surge por <strong>mutação</strong> e <strong>recombinação gênica</strong>.</li>
            </ul>
            <h3>Ecologia Avançada</h3>
            <p>Estuda as interações em níveis mais complexos, como os ciclos da matéria e o fluxo de energia nos ecossistemas.</p>
            <ul>
                <li><strong>Ciclos Biogeoquímicos:</strong> Movimento de elementos químicos (como Carbono, Nitrogênio, Água) entre os seres vivos e o ambiente.</li>
                <li><strong>Sucessão Ecológica:</strong> Processo gradual de mudança na composição de uma comunidade ecológica ao longo do tempo.</li>
            </ul>
        ` 
    },
    { 
        id: 83, 
        title: 'Fisiologia Humana Completa', 
        url: '#', 
        tags: ['biologia', 'corpo humano'], 
        ano: 3, 
        content: `
            <p>No 3º ano, o estudo da Fisiologia Humana se aprofunda nos sistemas de coordenação, sustentação, movimento e reprodução.</p>
            <h3>Sistemas de Coordenação e Controle</h3>
            <ul>
                <li><strong>Sistema Nervoso:</strong> Detalha a transmissão do impulso nervoso, a sinapse, e a organização do sistema nervoso central (cérebro, medula) e periférico.</li>
                <li><strong>Sistema Endócrino:</strong> Estuda as principais glândulas (hipófise, tireoide, pâncreas, etc.) e os hormônios que produzem, regulando o metabolismo, crescimento e outras funções.</li>
                <li><strong>Sistema Sensorial:</strong> Foca no funcionamento dos sentidos (visão, audição, tato, paladar, olfato).</li>
            </ul>
            <h3>Outros Sistemas</h3>
            <ul>
                <li><strong>Sistema Esquelético e Muscular:</strong> Sustentação, proteção de órgãos e movimento.</li>
                <li><strong>Sistema Reprodutor:</strong> Estuda a anatomia e fisiologia dos sistemas masculino e feminino, ciclo menstrual e fecundação.</li>
            </ul>
        ` 
    },
    { 
        id: 84, 
        title: 'Imunologia e Microbiologia', 
        url: '#', 
        tags: ['biologia', 'saúde'], 
        ano: 3, 
        content: `
            <h3>Microbiologia</h3>
            <p>É o estudo dos microrganismos, como <strong>vírus</strong>, <strong>bactérias</strong>, <strong>protozoários</strong> e <strong>fungos</strong>. O foco é entender suas características, formas de reprodução e as doenças que podem causar.</p>
            <ul>
                <li><strong>Vírus:</strong> Acelulares, parasitas intracelulares obrigatórios. Ex: Gripe, HIV, COVID-19.</li>
                <li><strong>Bactérias:</strong> Procariontes, podem ser benéficas ou causar doenças. Ex: Tuberculose, Tétano.</li>
            </ul>
            <h3>Imunologia</h3>
            <p>É o estudo do sistema imunológico, nossa defesa contra agentes invasores (patógenos).</p>
            <ul>
                <li><strong>Imunidade Inata:</strong> A primeira linha de defesa, não específica. Ex: barreiras físicas (pele), células como macrófagos.</li>
                <li><strong>Imunidade Adquirida (Adaptativa):</strong> Defesa específica, que gera memória imunológica. Envolve linfócitos B (produção de anticorpos) e linfócitos T.</li>
                <li><strong>Vacinas:</strong> Estimulam a imunidade adquirida de forma artificial, introduzindo um antígeno (agente enfraquecido ou inativado) para que o corpo produza anticorpos e células de memória.</li>
                <li><strong>Soros:</strong> Contêm anticorpos prontos para combater um antígeno de forma imediata (imunização passiva).</li>
            </ul>
        ` 
    }
];

// --- Função para remover acentos de uma string ---
function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// --- Função para deixar a primeira letra maiúscula ---
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// --- Textos Introdutórios por Ano ---
const introTexts = {
    todos: {
        title: "Bem-vindo ao Guia de Estudos!",
        text: "Seu portal para descomplicar o aprendizado. Use a barra de pesquisa acima para encontrar resumos, artigos e dicas sobre qualquer matéria do ensino médio e para o vestibular."
    },
    1: {
        title: "Foco no 1º Ano do Ensino Médio",
        text: "Aqui você encontrará os conceitos fundamentais que formam a base para todo o seu aprendizado. Explore os principais tópicos de Matemática, Física, Química, Biologia e Humanas."
    },
    2: {
        title: "Aprofundando no 2º Ano",
        text: "Nesta fase, os conceitos se aprofundam. Pesquise por temas como Análise Combinatória, Termodinâmica e as grandes Revoluções que moldaram o mundo moderno."
    },
    3: {
        title: "Preparação para o Vestibular - 3º Ano",
        text: "O Terceirão é a reta final! Encontre aqui os conteúdos mais cobrados nos vestibulares e no ENEM, como Eletromagnetismo, Química Orgânica e Evolução."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica da Barra de Busca ---
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results');
    const subjectBrowserContainer = document.getElementById('subject-browser');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const yearFilters = document.querySelectorAll('input[name="ano-filtro"]');

    // Garante que a lógica de busca só rode na página principal
    if (searchForm && searchInput && yearFilters.length > 0) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio do formulário
            performSearch();
        });

        // Adiciona um evento para buscar em tempo real enquanto digita
        searchInput.addEventListener('input', performSearch);
        
        // Adiciona um evento para mudar o texto introdutório ao clicar no filtro
        yearFilters.forEach(filter => {
            filter.addEventListener('change', () => {
                // Se a barra de busca estiver vazia, atualiza a mensagem intro
                if (searchInput.value.trim() === '') {
                    displayIntroMessage(filter.value);
                } else {
                    // Se houver texto, refaz a busca com o novo filtro
                    performSearch();
                }
            });
        });
    }

    function performSearch() {
        // Normaliza o texto da busca (remove acentos e converte para minúsculas)
        const query = removeAccents(searchInput.value.trim().toLowerCase());
        const selectedYear = document.querySelector('input[name="ano-filtro"]:checked').value;
        
        if (!query) {
            displayIntroMessage(selectedYear);
            return;
        }
        
        // 1. Filtra por ano
        const yearFilteredArticles = (selectedYear === 'todos') ? articles : articles.filter(article => !article.ano || article.ano == selectedYear);

        // 2. Filtra pelo texto da busca a partir dos resultados do ano
        const searchResults = yearFilteredArticles.filter(article => {
            const normalizedTitle = removeAccents(article.title.toLowerCase());
            return normalizedTitle.includes(query) || article.tags.some(tag => removeAccents(tag.toLowerCase()).includes(query));
        });

        displayResults(searchResults);
    }

    function displaySubjects() {
        // Pega a primeira tag de cada artigo como a "matéria principal"
        // e agrupa os artigos por matéria.
        const subjects = articles.reduce((acc, article) => {
            const mainSubject = article.tags[0];
            if (!acc[mainSubject]) {
                acc[mainSubject] = [];
            }
            acc[mainSubject].push(article);
            return acc;
        }, {});

        subjectBrowserContainer.innerHTML = `
            <div class="sidebar-menu">
                <div class="menu-item">
                    <a href="projectAlura.html" class="vocational-test-link">
                        🏠 Início
                    </a>
                </div>
                <div class="menu-item"> <!-- Começa fechado por padrão -->
                    <div class="menu-header">Navegue por Matéria <span class="collapsible-icon">▼</span></div>
                    <div class="submenu">
                        ${Object.keys(subjects).sort().map(subject => `
                            <div class="menu-item">
                                <div class="menu-header"><span>${capitalizeFirstLetter(subject)}</span> <span class="collapsible-icon">▼</span></div>
                                <div class="submenu">
                                    <ul>
                                        ${subjects[subject].map(article => `
                                            <li><a href="${article.url}" data-article-id="${article.id}">${article.title}</a></li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="menu-item">
                    <a href="teste-redacao.html" class="vocational-test-link">
                        Praticar Redação
                    </a>
                </div>
                <div class="menu-item">
                    <a href="teste-vocacional.html" class="vocational-test-link">
                        Teste Vocacional
                    </a>
                </div>
            </div>
        `;

        // Adiciona a lógica de clique para todos os cabeçalhos de menu
        const menuHeaders = subjectBrowserContainer.querySelectorAll('.menu-header');
        menuHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const menuItem = header.parentElement;
                const submenu = header.nextElementSibling;
                const parentContainer = menuItem.parentElement;

                // Se for o header principal "Navegue por Matéria", apenas abre/fecha.
                if (parentContainer.classList.contains('sidebar-menu')) {
                    menuItem.classList.toggle('active');
                    submenu.style.maxHeight = menuItem.classList.contains('active') ? submenu.scrollHeight + "px" : null;
                    return;
                }

                // Lógica de Foco para as matérias individuais
                const isFocused = menuItem.classList.contains('focused-item');

                if (isFocused) {
                    // Se já está focado, remove o foco e restaura a visão normal
                    menuItem.classList.remove('focused-item');
                    parentContainer.classList.remove('focused');
                    // Fecha o submenu ao sair do foco
                    menuItem.classList.remove('active');
                    submenu.style.maxHeight = null;
                } else {
                    // Se não está focado, foca no item
                    // Primeiro, remove o foco de qualquer outro item
                    const currentFocused = parentContainer.querySelector('.focused-item');
                    if (currentFocused) {
                        currentFocused.classList.remove('focused-item', 'active');
                        currentFocused.querySelector('.submenu').style.maxHeight = null;
                    }

                    // Adiciona o foco ao item clicado e ao container pai
                    menuItem.classList.add('focused-item');
                    parentContainer.classList.add('focused');
                    // Abre o submenu do item focado
                    menuItem.classList.add('active');
                    submenu.style.maxHeight = submenu.scrollHeight + "px";
                }
            });
        });
    }

    // --- Lógica para exibir artigo ao clicar (agora também no menu lateral) ---
    subjectBrowserContainer.addEventListener('click', (event) => {
        const link = event.target.closest('a[data-article-id]');
        if (link) {
            event.preventDefault();
            const articleId = link.dataset.articleId;
            displayArticle(articleId);
            window.scrollTo(0, 0);

            // Fecha o sidebar em telas pequenas após clicar em um artigo
            if (window.innerWidth < 768) {
                document.body.classList.add('sidebar-closed');
            }
        }
    });

    function displayArticle(articleId) {
        const article = articles.find(a => a.id == articleId);
        if (!article) {
            searchResultsContainer.innerHTML = '<p>Artigo não encontrado.</p>';
            return;
        }

        searchResultsContainer.innerHTML = `
            <section class="article-content">
                <h2>${article.title}</h2>
                <div class="content-body">
                    ${article.content}
                </div>
            </section>
        `;
    }

    function displayIntroMessage(year) {
        // Só executa se o container de resultados existir
        if (!searchResultsContainer) return;
        const intro = introTexts[year];
        // A lógica dos tópicos em destaque foi movida para o rodapé.
        // Agora esta função sempre mostra a mensagem simples.
        searchResultsContainer.innerHTML = `
            <div class="intro-message">
                <h2>${intro.title}</h2>
                <p>${intro.text}</p>
            </div>
        `;
    }

    function displayResults(results) {
        // Limpa resultados anteriores
        if (!searchResultsContainer) return;
        searchResultsContainer.innerHTML = '';

        if (results.length === 0) {
            searchResultsContainer.innerHTML = '<p>Nenhum resultado encontrado para sua busca.</p>';
            return;
        }

        const resultsList = document.createElement('ul');
        resultsList.className = 'article-list';

        results.forEach(article => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = article.url;
            link.dataset.articleId = article.id; // Adiciona o ID do artigo ao link
            link.textContent = article.title;
            listItem.appendChild(link);
            resultsList.appendChild(listItem);
        });

        searchResultsContainer.appendChild(resultsList);
    }

    function displayFeaturedTopics() {
        const container = document.getElementById('featured-topics-container');
        if (!container) return;

        // IDs dos artigos que queremos destacar
        const featuredIds = [1, 38, 2, 3]; 
        const featuredArticles = articles.filter(a => featuredIds.includes(a.id));

        container.innerHTML = `
            <section id="artigos-destaque" class="collapsible">
                <h2 class="collapsible-header">
                    Tópicos em Destaque
                    <span class="collapsible-icon">▲</span>
                </h2>
                <div class="collapsible-content">
                    <ul class="article-list">
                        ${featuredArticles.map(article => `
                            <li><a href="#" data-article-id="${article.id}">${article.title}</a></li>
                        `).join('')}
                    </ul>
                </div>
            </section>
        `;
        addCollapsibleLogic(container.querySelector('#artigos-destaque'));
    }

    // --- Lógica do Sidebar ---
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            document.body.classList.toggle('sidebar-closed');
        });
    }

    // --- Lógica para exibir artigo ao clicar ---
    // Adiciona um listener de clique no container principal para pegar cliques nos links dos artigos
    if (searchResultsContainer) {
        searchResultsContainer.addEventListener('click', (event) => {
        // Verifica se o elemento clicado é um link de artigo
        const link = event.target.closest('a[data-article-id]');
        if (link) {
            event.preventDefault(); // Impede a navegação padrão
            const articleId = link.dataset.articleId;
            displayArticle(articleId);
            window.scrollTo(0, 0); // Rola a página para o topo
        }
        });
    }

    // --- Lógica para pesquisar ao clicar em Tópicos em Destaque ---
    const featuredTopicsContainer = document.getElementById('featured-topics-container');
    if (featuredTopicsContainer) {
        featuredTopicsContainer.addEventListener('click', (event) => {
            const link = event.target.closest('a[data-article-id]');
            if (link) {
                event.preventDefault(); // Impede a navegação padrão
                const articleTitle = link.textContent;
                searchInput.value = articleTitle; // Coloca o título na barra de busca
                performSearch(); // Executa a busca
                window.scrollTo(0, 0); // Rola a página para o topo para ver os resultados
            }
        });
    }


    // --- Lógica para Troca de Tema (Aplicável a todas as páginas) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        const body = document.body;
        const moonIcon = '🌙';
        const sunIcon = '☀️';

        const applyTheme = (theme) => {
            if (theme === 'dark') {
                body.classList.add('dark-mode');
                themeToggleBtn.textContent = sunIcon;
            } else {
                body.classList.remove('dark-mode');
                themeToggleBtn.textContent = moonIcon;
            }
        };

        themeToggleBtn.addEventListener('click', () => {
            const isDarkMode = body.classList.contains('dark-mode');
            const newTheme = isDarkMode ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });

        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            applyTheme(prefersDark ? 'dark' : 'light');
        }
    }
    // --- Lógica para Seção Collapsible ---
    function addCollapsibleLogic(collapsibleSection) {
        if (!collapsibleSection) return;
        const header = collapsibleSection.querySelector('.collapsible-header');
        const content = collapsibleSection.querySelector('.collapsible-content');

        header.addEventListener('click', () => {
            const icon = header.querySelector('.collapsible-icon');
            collapsibleSection.classList.toggle('active');
            if (collapsibleSection.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.textContent = '▼'; // Seta para baixo quando aberto
            } else {
                content.style.maxHeight = null;
                icon.textContent = '▲'; // Seta para cima quando fechado
            }
        });
    }

    // Exibe a lista de matérias ao carregar a página
    if(document.getElementById('subject-browser')) {
        displaySubjects();
    }

    // Exibe os tópicos em destaque no rodapé
    if(document.getElementById('featured-topics-container')) {
        displayFeaturedTopics();
    }

    // Exibe a mensagem inicial padrão ao carregar a página
    if (document.getElementById('search-results')) {
        displayIntroMessage('todos');
    }
});

// --- LÓGICA DA PÁGINA DE REDAÇÃO ---

document.addEventListener('DOMContentLoaded', () => {
    // Verifica se estamos na página de redação pela presença do botão de sortear
    if (!document.body.classList.contains('redacao-container') && !document.getElementById('sortear-tema-btn')) {
        return;
    }

    const temasDeRedacao = [
        { titulo: "Desafios da educação a distância no Brasil", eixo: "Educação" },
        { titulo: "O impacto das fake news no processo eleitoral brasileiro", eixo: "Política/Sociedade" },
        { titulo: "A persistência da violência contra a mulher na sociedade brasileira", eixo: "Sociedade" },
        { titulo: "Caminhos para combater a intolerância religiosa no Brasil", eixo: "Sociedade/Cultura" },
        { titulo: "Os efeitos do consumismo na saúde mental dos jovens", eixo: "Comportamento/Saúde" },
        { titulo: "A importância da preservação do meio ambiente para as futuras gerações", eixo: "Meio Ambiente" },
        { titulo: "Democratização do acesso ao cinema no Brasil", eixo: "Cultura" },
        { titulo: "O estigma associado às doenças mentais na sociedade brasileira", eixo: "Saúde" },
        { titulo: "Mobilidade urbana sustentável como um desafio para as grandes cidades", eixo: "Urbanismo/Meio Ambiente" },
        { titulo: "A inclusão de pessoas com deficiência no mercado de trabalho", eixo: "Sociedade" }
    ];

    const sortearTemaBtn = document.getElementById('sortear-tema-btn');
    const avaliarRedacaoBtn = document.getElementById('avaliar-redacao-btn');
    const textoRedacao = document.getElementById('texto-redacao');
    const temaSorteadoDiv = document.getElementById('tema-sorteado');
    const resultadoSection = document.getElementById('resultado-section');
    const resultadoFeedbackDiv = document.getElementById('resultado-feedback');

    let temaAtual = null;

    function sortearTema() {
        temaAtual = temasDeRedacao[Math.floor(Math.random() * temasDeRedacao.length)];
        temaSorteadoDiv.innerHTML = `
            <h3>${temaAtual.titulo}</h3>
            <p><strong>Eixo temático:</strong> ${temaAtual.eixo}</p>
        `;
        resultadoSection.style.display = 'none'; // Esconde resultados antigos
    }

    function avaliarRedacao() {
        const texto = textoRedacao.value.trim();
        const palavras = texto.split(/\s+/).filter(p => p.length > 0);
        const paragrafos = texto.split('\n').filter(p => p.trim().length > 0);

        if (palavras.length < 100) {
            alert("Sua redação precisa ter no mínimo 100 palavras para ser avaliada.");
            return;
        }

        let notas = { c1: 0, c2: 0, c3: 0, c4: 0, c5: 0 };
        let feedback = [];

        // C1: Domínio da norma culta (simulação básica)
        // Simplesmente damos uma nota base, uma avaliação real é muito complexa.
        notas.c1 = 120 + Math.floor(Math.random() * 41); // Nota entre 120 e 160
        feedback.push(`<strong>Competência 1 (Norma Culta):</strong> Uma análise gramatical completa não é possível aqui. Recomendamos revisar seu texto em um editor como o Google Docs para corrigir erros de ortografia e gramática.`);

        // C2: Compreensão do tema e estrutura dissertativo-argumentativa
        let notaC2 = 0;
        if (paragrafos.length >= 3) {
            notaC2 += 80; // Estrutura mínima
            feedback.push(`<strong>Competência 2 (Tema e Estrutura):</strong> Você estruturou seu texto em ${paragrafos.length} parágrafos, o que é um bom começo para a estrutura dissertativo-argumentativa.`);
        } else {
            feedback.push(`<strong>Competência 2 (Tema e Estrutura):</strong> Seu texto tem poucos parágrafos. Lembre-se da estrutura clássica: introdução, desenvolvimento e conclusão.`);
        }
        // Checagem simples de palavras-chave do tema
        const palavrasTema = temaAtual.titulo.toLowerCase().split(' ');
        const palavrasChaveEncontradas = palavras.filter(p => palavrasTema.includes(p.toLowerCase())).length;
        if (palavrasChaveEncontradas > 2) {
            notaC2 += 80;
        } else {
            notaC2 += 40;
            feedback.push(`<strong>Competência 2 (Tema e Estrutura):</strong> Parece que você usou poucas palavras do tema proposto. Cuidado para não tangenciar ou fugir do tema!`);
        }
        notas.c2 = Math.min(notaC2, 200);

        // C3: Selecionar, relacionar, organizar e interpretar informações
        // Simulação baseada no tamanho do texto
        let notaC3 = 0;
        if (palavras.length > 250) notaC3 = 160;
        else if (palavras.length > 180) notaC3 = 120;
        else notaC3 = 80;
        notas.c3 = notaC3;
        feedback.push(`<strong>Competência 3 (Argumentação):</strong> Com ${palavras.length} palavras, seu texto tem potencial para desenvolver bons argumentos. Lembre-se de usar dados, citações e exemplos para fortalecer sua tese.`);

        // C4: Coesão (uso de conectivos)
        const conectivos = ['portanto', 'entretanto', 'contudo', 'além disso', 'ademais', 'assim', 'dessa forma', 'em suma', 'primeiramente'];
        const conectivosEncontrados = conectivos.filter(c => texto.toLowerCase().includes(c)).length;
        let notaC4 = conectivosEncontrados * 20;
        notas.c4 = Math.min(notaC4, 200);
        feedback.push(`<strong>Competência 4 (Coesão):</strong> Encontramos ${conectivosEncontrados} tipos de conectivos em seu texto. Um bom uso de conectivos entre parágrafos e frases torna a leitura mais fluida.`);

        // C5: Proposta de Intervenção
        const ultimoParagrafo = paragrafos[paragrafos.length - 1] || "";
        const palavrasIntervencao = ['governo', 'sociedade', 'mídia', 'escola', 'ministério', 'criar', 'promover', 'fiscalizar', 'por meio de', 'a fim de'];
        const elementosIntervencao = palavrasIntervencao.filter(p => ultimoParagrafo.toLowerCase().includes(p)).length;
        let notaC5 = 0;
        if (elementosIntervencao >= 4) notaC5 = 200;
        else if (elementosIntervencao >= 3) notaC5 = 160;
        else if (elementosIntervencao >= 2) notaC5 = 120;
        else if (elementosIntervencao > 0) notaC5 = 80;
        else notaC5 = 40;
        notas.c5 = notaC5;
        feedback.push(`<strong>Competência 5 (Proposta de Intervenção):</strong> Sua conclusão parece conter ${elementosIntervencao} dos 5 elementos essenciais (agente, ação, meio, finalidade, detalhamento). Lembre-se de detalhar bem sua proposta!`);

        // Exibir resultados
        const notaFinal = Object.values(notas).reduce((a, b) => a + b, 0);
        
        resultadoFeedbackDiv.innerHTML = `
            <div class="disclaimer" style="background-color: #ffecb3; border-left: 4px solid #ff9800; padding: 1rem; margin-bottom: 1rem;">
                <strong>Atenção:</strong> Esta é uma avaliação automática e simplificada. Ela serve como um guia inicial e <strong>não substitui</strong> a correção de um professor.
            </div>
            <ul>
                <li>${feedback[0]} <strong>Nota Estimada: ${notas.c1}</strong></li>
                <li>${feedback[1]} <strong>Nota Estimada: ${notas.c2}</strong></li>
                <li>${feedback[2]} <strong>Nota Estimada: ${notas.c3}</strong></li>
                <li>${feedback[3]} <strong>Nota Estimada: ${notas.c4}</strong></li>
                <li>${feedback[4]} <strong>Nota Estimada: ${notas.c5}</strong></li>
            </ul>
            <div class="nota-final">
                Nota Final Estimada: ${notaFinal}
            </div>
        `;

        resultadoSection.style.display = 'block';
        resultadoSection.scrollIntoView({ behavior: 'smooth' });
    }

    sortearTemaBtn.addEventListener('click', sortearTema);
    avaliarRedacaoBtn.addEventListener('click', avaliarRedacao);

    // Sortear um tema inicial ao carregar a página
    sortearTema();
});
