document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        { q: "O que você mais gosta de fazer no tempo livre?", o: { A: "Criar coisas (desenhar, programar, escrever, editar)", B: "Ajudar ou ouvir pessoas", C: "Resolver problemas lógicos", D: "Organizar, planejar ou liderar", E: "Montar, consertar ou explorar coisas" } },
        { q: "Qual matéria você mais gosta na escola?", o: { A: "Artes / Redação", B: "Biologia / Sociologia", C: "Matemática / Física", D: "História / Geografia", E: "Tecnologia / Educação Física" } },
        { q: "Como você prefere trabalhar?", o: { A: "Com criatividade", B: "Com pessoas", C: "Com números e lógica", D: "Tomando decisões", E: "Com as mãos (prático)" } },
        { q: "Quando surge um problema, você…", o: { A: "Pensa em uma solução criativa", B: "Conversa com alguém para entender", C: "Analisa os dados", D: "Assume a liderança", E: "Testa várias soluções na prática" } },
        { q: "O que mais te dá satisfação?", o: { A: "Criar algo novo", B: "Ajudar alguém", C: "Descobrir como algo funciona", D: "Organizar algo", E: "Construir ou consertar algo" } },
        { q: "Em grupo, você costuma ser…", o: { A: "O criativo", B: "O conselheiro", C: "O estrategista", D: "O líder", E: "O executor (faz acontecer)" } },
        { q: "Que tipo de conteúdo você mais assiste?", o: { A: "Arte, design, criatividade, edição", B: "Saúde, psicologia, rotinas sociais", C: "Ciência, tecnologia, lógica", D: "Negócios, política, liderança", E: "DIY, mecânica, eletrônica" } },
        { q: "Qual ambiente de trabalho te agrada mais?", o: { A: "Livre, criativo", B: "Social, com pessoas", C: "Silencioso e analítico", D: "Dinâmico e organizado", E: "Prático e ativo" } },
        { q: "O que mais te motiva?", o: { A: "Expressão pessoal", B: "Impacto na vida dos outros", C: "Conhecimento profundo", D: "Resultados e reconhecimento", E: "Ver o resultado físico do trabalho" } },
        { q: "Se pudesse escolher um curso hoje, seria…", o: { A: "Design, cinema, publicidade", B: "Psicologia, enfermagem, pedagogia", C: "Engenharia, ciência da computação", D: "Direito, administração, marketing", E: "Mecatrônica, elétrica, logística" } },
        { q: "Como seus amigos te veem?", o: { A: "Criativo", B: "Generoso", C: "Inteligente e lógico", D: "Confiante", E: "Habilidoso e prático" } },
        { q: "Como você toma decisões?", o: { A: "Pelo que parece mais inspirador", B: "Pelo impacto emocional", C: "Pela lógica", D: "Pelo objetivo final", E: "Pelo que é mais imediato e prático" } },
        { q: "Que tipo de filme/tema você mais gosta?", o: { A: "Fantasia, arte, animação", B: "Drama, histórias humanas", C: "Ficção científica", D: "Suspense político / negócios", E: "Ação, sobrevivência, aventuras" } },
        { q: "Em um trabalho grande, você prefere…", o: { A: "Criar e inovar", B: "Ajudar o grupo a se entender", C: "Resolver a parte difícil", D: "Planejar tudo", E: "Fazer a parte prática" } },
        { q: "Você se imagina trabalhando:", o: { A: "Criando projetos", B: "Com pessoas", C: "Pesquisando ou analisando", D: "Liderando equipes", E: "Operando máquinas ou ferramentas" } },
        { q: "O que mais te incomoda?", o: { A: "Falta de criatividade", B: "Falta de empatia", C: "Falta de lógica", D: "Desorganização", E: "Ficar parado" } },
        { q: "Qual dessas frases combina mais com você?", o: { A: "“Quero criar algo único.”", B: "“Quero ajudar pessoas.”", C: "“Quero entender o mundo.”", D: "“Quero liderar e crescer.”", E: "“Quero trabalhar com as mãos.”" } },
        { q: "Você prefere aprender…", o: { A: "Fazendo projetos criativos", B: "Observando pessoas", C: "Estudando teoria", D: "Aplicando regras e estratégias", E: "Testando na prática" } },
        { q: "O que te deixa mais animado?", o: { A: "Arte e ideias novas", B: "Conversar e socializar", C: "Resolver desafios", D: "Planejar algo grande", E: "Usar ferramentas / tecnologia" } },
        { q: "Seu objetivo profissional é…", o: { A: "Criar algo original", B: "Melhorar a vida das pessoas", C: "Resolver grandes problemas", D: "Chegar a um cargo alto", E: "Ter uma profissão técnica e prática" } }
    ];

    const profiles = {
        A: {
            title: "Perfil Criativo / Artístico",
            description: "Você tem uma mente inovadora, gosta de se expressar e criar coisas novas. Sua satisfação vem de ver suas ideias ganharem vida.",
            careers: ["Design Gráfico", "Publicidade", "Arquitetura", "Cinema", "Moda", "Artes Plásticas", "Escritor", "Música"]
        },
        B: {
            title: "Perfil Social / Humanitário",
            description: "Você se sente motivado ao ajudar e interagir com outras pessoas. Tem empatia e gosta de causar um impacto positivo na vida dos outros.",
            careers: ["Psicologia", "Enfermagem", "Medicina", "Pedagogia", "Serviço Social", "Recursos Humanos", "Fisioterapia"]
        },
        C: {
            title: "Perfil Analítico / Lógico",
            description: "Você é movido pela curiosidade, pela lógica e pelos dados. Gosta de entender como as coisas funcionam e de resolver problemas complexos.",
            careers: ["Engenharia", "Ciência da Computação", "Física", "Matemática", "Análise de Dados", "Pesquisa Científica", "Economia"]
        },
        D: {
            title: "Perfil Estratégico / Líder",
            description: "Você tem facilidade para organizar, planejar e liderar. Gosta de tomar decisões, gerenciar projetos e buscar resultados concretos.",
            careers: ["Administração", "Direito", "Marketing", "Relações Internacionais", "Gestão de Projetos", "Ciências Políticas", "Logística"]
        },
        E: {
            title: "Perfil Prático / Realizador",
            description: "Você gosta de colocar a mão na massa. Sua motivação vem de construir, consertar, explorar e ver resultados práticos e tangíveis do seu trabalho.",
            careers: ["Mecatrônica", "Engenharia Elétrica", "Educação Física", "Gastronomia", "Geologia", "Agronomia", "Manutenção Industrial"]
        }
    };

    const questionArea = document.getElementById('question-area');
    const resultContainer = document.getElementById('result-container');
    const testHeader = document.querySelector('.test-header');

    let currentQuestionIndex = 0;
    const userAnswers = [];

    function renderCurrentQuestion() {
        if (currentQuestionIndex >= questions.length) {
            calculateResults();
            return;
        }

        const question = questions[currentQuestionIndex];
        const progress = ((currentQuestionIndex) / questions.length) * 100;

        questionArea.innerHTML = `
            <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${progress}%"></div>
            </div>
            <p class="question-counter">Pergunta ${currentQuestionIndex + 1} de ${questions.length}</p>
            <div class="question-block">
                <p>${question.q}</p>
                <div class="options-group">
                    ${Object.keys(question.o).map(key => `
                        <div class="option-item" data-answer="${key}">
                            ${question.o[key]}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        addOptionListeners();
    }

    function addOptionListeners() {
        const options = document.querySelectorAll('.option-item');
        options.forEach(option => {
            option.addEventListener('click', handleAnswer);
        });
    }

    function handleAnswer(event) {
        const selectedAnswer = event.currentTarget.dataset.answer;
        userAnswers.push(selectedAnswer);
        currentQuestionIndex++;
        renderCurrentQuestion();
    }

    function calculateResults() {
        const scores = { A: 0, B: 0, C: 0, D: 0, E: 0 };

        userAnswers.forEach(answer => {
            scores[answer]++;
        });

        // Encontra os perfis com maior pontuação
        const sortedProfiles = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
        
        const primaryProfileKey = sortedProfiles[0];
        const secondaryProfileKey = sortedProfiles[1];

        displayResult(primaryProfileKey, secondaryProfileKey, scores);
    }

    function displayResult(primaryKey, secondaryKey, scores) {
        const primaryProfile = profiles[primaryKey];
        const secondaryProfile = profiles[secondaryKey];

        if (!primaryProfile) return;

        let resultHTML = `
            <h2>Seu perfil principal é: ${primaryProfile.title}</h2>
            <p>${primaryProfile.description}</p>
            <h3>Carreiras sugeridas para você:</h3>
            <ul>
                ${primaryProfile.careers.map(career => `<li>${career}</li>`).join('')}
            </ul>
        `;

        if (secondaryProfile && scores[secondaryKey] > 0) {
            resultHTML += `
                <hr style="margin: 2rem 0;">
                <h2>Seu perfil secundário é: ${secondaryProfile.title}</h2>
                <p>Você também tem afinidade com carreiras como:</p>
                <ul>
                    ${secondaryProfile.careers.slice(0, 4).map(career => `<li>${career}</li>`).join('')}
                </ul>
            `;
        }

        resultContainer.innerHTML = resultHTML;

        // Esconde a área de perguntas e o cabeçalho, e mostra o resultado
        questionArea.classList.add('hidden');
        if (testHeader) {
            testHeader.classList.add('hidden');
        }
        resultContainer.classList.remove('hidden');

        // Rola a página para o topo para ver o resultado
        window.scrollTo(0, 0);
    }

    // Inicialização
    renderCurrentQuestion();
});