# Prompt aprimorado — Strawberry Matter

Crie e entregue uma experiência 3D interativa completa, intitulada **Strawberry Matter.**, para estudar a aparência e o movimento de um morango cravejado com acabamento gelatinoso. Permita realizar um corte longitudinal e abrir o modelo para observar suas camadas internas. Use **Three.js com WebGL**, JavaScript e shaders GLSL customizados. O resultado deve parecer uma peça editorial de um laboratório de materiais: composição silenciosa, objeto visualmente convincente, tipografia refinada e controles que realmente alterem a simulação.

Implemente o projeto, execute um servidor local, abra a experiência no navegador e verifique seu funcionamento. Entregue os arquivos organizados, instruções de execução e a URL local. A prioridade é a qualidade perceptível do material, a forma reconhecível do morango e a resposta ao toque. Nenhum botão deve ser meramente decorativo.

## 1. Direção visual e composição

Adote uma prioridade perceptiva de **60% morango e 40% gelatina translúcida**. A identidade da fruta deve prevalecer por meio da silhueta, da polpa rosa cremosa com rubros orgânicos, dos aquênios distinguíveis e das folhas naturalistas. A translucidez e o brilho complementam essa leitura. Esta proporção é uma direção artística avaliada no conjunto, e não um valor literal único de transparência ou de shader.

Use um fundo cinza muito claro, levemente quente, com gradiente discreto e chão quase contínuo ao fundo. Centralize o espécime na área livre da composição, com espaço negativo generoso. A câmera deve mostrar seu volume e sua coroa de folhas em uma perspectiva suave, evitando distorção de grande angular. Posicione o objeto com uma pequena inclinação natural.

No desktop, mantenha o título no canto superior esquerdo, o indicador de execução no superior direito, as estatísticas no inferior esquerdo e o painel no inferior direito. O morango deve ser o elemento dominante e não ficar encoberto pelos controles. Em telas estreitas, reorganize os elementos, preserve uma área útil para arrastar e permita rolagem da interface quando necessário. Evite depender de uma captura de tela com proporção específica.

Não use fotografias do morango como substituto do objeto 3D. A cena deve continuar convincente quando girada e aproximada.

Baseie o interior em imagens recentes do **morango cravejado real**, examinando fotos do doce cortado e registrando fonte, data publicada e data de consulta. As referências deste projeto são o [Olhar Direto, de 26/08/2026](https://www.olhardireto.com.br/conceito/noticias/depois-do-morango-do-amor-morango-cravejado-e-nova-aposta-viral-das-docerias-em-cuiaba), e a [Tribuna Hoje, de 28/08/2026](https://tribunahoje.com/noticias/cidades/2026/08/28/192418-depois-do-amor-agora-o-morango-vem-cravejado-na-sodie-doces), consultadas em 07/09/2026. O registro detalhado está em [references/REFERENCIAS.md](references/REFERENCIAS.md). Preserve a direção 60/40 no acabamento, com uma seção interna reconhecível como fruta, brigadeiro e cobertura de chocolate branco com caramelo.

## 2. Geometria do espécime

Modele um morango estilizado e plausível, com corpo aproximadamente 1,3 a 1,6 vez mais alto que sua largura máxima. O topo deve ser cheio e arredondado; a região inferior deve afinar progressivamente e terminar em uma extremidade arredondada, sem prolongamento estreito ou pontudo. Evite aparência de esfera, cone ou pimentão.

Introduza pequenas assimetrias orgânicas na silhueta. A malha deve ser fechada, ter normais suaves e resolução suficiente para deformações locais sem facetas evidentes na visualização normal. O topo precisa se conectar visualmente à coroa: nenhuma abertura ou haste longa deve deixar as folhas flutuando sobre o corpo.

Distribua pequenas protuberâncias arredondadas que representem os aquênios, as sementes aparentes do morango. Faça-os distinguíveis, com formato oval, coloração natural e discreta inserção na polpa. Varie posição, escala e orientação com uma distribuição determinística irregular, evitando fileiras e espaçamento perfeitamente uniforme. Eles devem acompanhar a deformação da superfície, sem se destacar durante o arraste. A densidade e o relevo precisam reforçar a identidade da fruta e preservar a suavidade gelatinosa.

Crie uma coroa de folhas verdes pontiagudas, com leve curvatura, espessura aparente e orientação variada. Mostre nervura central e nervuras laterais de forma sutil, por geometria ou shader. Acrescente variações naturais de verde e brilho delicado de folha fresca. As folhas devem acompanhar a região superior do morango durante as oscilações, sem atravessamentos grosseiros ou movimentos desconectados.

## 3. Material e shaders

O material inicial tem polpa gelatinosa rosa muito clara, próxima do branco, com transparência leitosa e regiões avermelhadas orgânicas que remetem a morango. Preserve uma base cremosa visível, com translucidez seletiva nas bordas e entre as inclusões. Combine reflexão de superfície, transmissão, absorção dependente da espessura e espalhamento aproximado para transmitir profundidade. A silhueta pode parecer mais saturada e o interior mais cremoso, conforme a iluminação e o caminho da luz.

Use shaders GLSL customizados em uma parte relevante do material, por exemplo para espalhamento aproximado, absorção, irregularidades sutis ou inclusões internas. É aceitável estender o material físico do Three.js para aproveitar seu modelo de iluminação, desde que o código explique as alterações. Não classifique a solução como subsurface scattering volumétrico exato ou renderização de trajetórias se ela usar aproximações em tempo real.

Espalhe flocos e manchas vermelhas em diferentes profundidades dentro do volume. Varie tamanho, forma, orientação, opacidade e saturação. Parte deles deve parecer próxima da superfície, parte deve ficar difusa através da gelatina. Evite pontos organizados em grades, polígonos regulares repetidos e manchas que pareçam apenas uma textura colada externamente. As inclusões devem permanecer dentro do corpo e seguir sua deformação de maneira coerente.

Produza uma superfície brilhante, quase molhada, com reflexos controlados de grandes fontes de estúdio e leve refração ou distorção do que aparece através do material. Mantenha contornos suaves, sem arestas lapidadas, facetas cristalinas ou reflexos fragmentados que dominem a polpa. Equilibre rugosidade, exposição e transmissão para conservar a proporção perceptiva 60/40: a primeira leitura deve ser um morango macio e cremoso com profundidade gelatinosa. Configure corretamente espaço de cor e mapeamento tonal.

## 4. Iluminação e contato com o chão

Use iluminação suave de estúdio: uma fonte principal ampla, preenchimento discreto e iluminação de contorno suficiente para revelar a transparência e a forma. Gere recursos de ambiente proceduralmente ou armazene-os no próprio projeto.

Inclua uma sombra de contato leve, difusa e sutilmente tingida pela cor do material. Uma aproximação artística é aceitável, mas deve acompanhar a posição e o estado do objeto de forma convincente. Evite chão excessivamente reflexivo, sombras pretas duras e brilhos estourados que escondam a geometria.

## 5. Corpo mole e interação

Implemente uma simulação de massa-mola ou rede equivalente de partículas e restrições. O arraste precisa provocar **deformação local primeiro**, seguida pelo restante do corpo com atraso e inércia. Uma rotação ou translação rígida com efeito senoidal global não satisfaz este requisito.

Use raycasting para identificar a região tocada, um plano de arraste consistente com a câmera e influência espacial suave sobre as partículas próximas. Mantenha a captura do ponteiro durante o gesto. Trate soltura fora do canvas, cancelamento, mudança de tamanho e interação por toque. Não inicie arraste quando o usuário manipular um controle da interface.

Ao soltar, preserve a velocidade adquirida: o corpo deve oscilar e gradualmente retornar ao repouso. Use integração com passo fixo, acumulador de tempo, limite de subpassos e proteção contra intervalos grandes após alternar de aba. A simulação deve evitar explosões numéricas e alongamento irreversível durante uso normal. Preserve aproximadamente o volume com restrições adequadas, sem prometer precisão de elementos finitos.

**Firmness** altera a rigidez efetiva e a resistência à deformação. **Internal Damping** altera a dissipação da oscilação. Os dois controles devem ter efeitos distintos, observáveis e limites estáveis. Redimensionar a janela não deve reiniciar o estado físico.

### Corte e exploração do interior

Implemente três estados claros: espécime inteiro, corte preparado e corte aberto. **Fazer um corte** prepara a interação e mostra uma orientação breve para deslizar sobre a fruta. Exiba um traço durante o gesto e confirme o corte quando um movimento suficiente atingir o modelo. Ofereça **Cortar ao meio** como alternativa sem gesto e Enter com o canvas focado. Escape cancela o preparo. O corte é sempre longitudinal, em um plano predefinido: a direção do gesto não cria cortes arbitrários nem exige uma operação CSG livre.

Abra duas metades que revelem faces de seção verdadeiramente integradas ao objeto 3D. Extraia o contorno da seção do próprio corpo em `x = 0`, feche ambas as metades com triângulos corretamente orientados e mantenha as bordas junto à cobertura. O interior deve continuar visível e coerente quando girado, aproximado ou deformado; uma fotografia sobreposta à tela não satisfaz este comportamento.

Na face do corte, represente **três camadas**: morango vermelho ocupando o centro, com miolo claro alongado e fibras finas orgânicas; brigadeiro branco ou levemente bege envolvendo a fruta; e casquinha de chocolate branco com pequenos fragmentos vermelhos de caramelo. Use variações suaves de cor, umidade e rugosidade para diferenciar polpa, creme e cobertura. O miolo permanece preenchido e natural, sem grandes cavidades ou cristais. As espessuras são uma interpretação das referências, não medições da receita.

Após abrir, mostre uma legenda das camadas e um slider **Abertura do corte**, de 0 a 100%, para controlar a separação e a orientação das metades. O arraste passa a girar o modelo para inspeção; zoom e rotação também permanecem disponíveis. **Reunir** restaura o espécime inteiro; **Novo corte** prepara outro gesto; **Reset** também desfaz o corte. Ao mudar entre Morango, Pistache e Maracujá, preserve a fruta central vermelha e altere o creme e a casca ao redor.

Mantenha a simulação visual da rede existente aplicada às duas metades. A separação para inspeção não equivale a uma fratura física: não prometa corpos independentes, colisões entre pedaços ou cálculo de massa por metade. A animação de abertura e os controles de câmera devem continuar disponíveis durante a pausa da integração física e respeitar a preferência por movimento reduzido.

## 6. Interface e comportamento dos controles

Use fontes locais ou fontes do sistema, sem requisições externas. A hierarquia editorial inclui “MATERIAL STUDIES / NO. 002”, o título “Strawberry Matter.” em serifada, com “Matter.” em itálico, e pequenos rótulos de interface em fonte sem serifa ou monoespaçada. Inclua uma instrução discreta sobre arrastar o objeto.

O indicador **LIVE**, no canto superior direito, deve refletir o estado real; quando pausado, apresente uma indicação correspondente. No canto inferior direito, crie um painel arredondado e translúcido com o título **THE SPECIMEN**, contraste legível e estes controles:

- **Morango**, **Pistache** e **Maracujá**: opções com nome, amostra de cor e estado selecionado explícito. Altere a paleta do material e das inclusões, mantendo o corpo e sua continuidade física.
- **Firmness** e **Internal Damping**: sliders rotulados, valores visíveis e operação por teclado.
- **Give it a nudge**: aplica um impulso breve à simulação; respeita o estado de pausa.
- **Reset**: restaura explicitamente material, parâmetros, câmera e estado físico iniciais.
- **Fazer um corte / Cortar ao meio / Reunir**: preparam, confirmam e desfazem o corte longitudinal, com estados acessíveis e instruções breves. Quando aberto, apresente **Abertura do corte** e a legenda das três camadas.
- **− / +**: ajustam o zoom da câmera dentro de limites úteis, sem recortar o espécime.
- **Rotação 360°**: ativa ou interrompe rotação de inspeção suave. Use um estado visual claro e mantenha o arraste compatível com a orientação exibida.
- **½ speed**, **Show mesh** e **Pause**: reduzem o tempo simulado, exibem a malha realmente deformada e suspendem a integração, respectivamente. A interface e a inspeção da câmera continuam responsivas durante a pausa.

Use elementos HTML semânticos sobre o canvas, foco visível, nomes acessíveis e áreas de toque confortáveis. Não dependa apenas de cor para comunicar seleção. Respeite a preferência por movimento reduzido nas animações decorativas.

## 7. Estatísticas honestas

Mostre massa, volume de repouso e energia cinética no canto inferior esquerdo, com unidades e atualização legível. Calcule a energia cinética a partir das massas e velocidades efetivas das partículas, usando `E = Σ ½ mᵢ |vᵢ|²`. Não gere números aleatórios para simular atividade.

Defina uma escala física coerente ou identifique os valores como estimativas da simulação. A massa total deve corresponder à soma das massas simuladas. **Volume de repouso** representa o volume da geometria inicial e permanece constante durante o arraste; não o apresente como volume instantâneo. Se exibir também volume atual, calcule-o separadamente sobre a malha deformada. Atualize os valores dinâmicos sem causar tremulação ou anúncios excessivos para leitores de tela.

Ao abrir o corte, continue apresentando massa e volume de repouso do espécime original. A energia cinética continua sendo a da rede de massas e molas; não inclui os movimentos de abertura ou de inspeção da câmera. Não apresente esses valores como medição de pedaços independentes.

## 8. Entrega técnica e verificação

Use Three.js instalado e empacotado localmente, sem CDN, fontes remotas ou serviços externos. O projeto deve funcionar offline após a instalação e preparação dos arquivos. Forneça `npm run dev`, `npm run build` e uma versão estática preparada que possa ser servida por `python3 -m http.server` a partir da raiz, com caminhos relativos corretos. Nunca instrua a abrir o HTML por `file://`.

Separe cena, material, geometria, simulação e interface em módulos compreensíveis. Ajuste o renderer ao tamanho real do canvas e limite a resolução em dispositivos de alta densidade para equilibrar nitidez e desempenho. Reutilize buffers e evite alocações desnecessárias no loop. Apresente mensagem legível se WebGL não estiver disponível.

Antes de entregar, execute o build e verifique no navegador: carregamento sem erros; ausência de dependências externas; leitura da interface em desktop e celular; aparência do material; arraste local e soltura; estabilidade com valores extremos dos sliders; todos os controles; estatísticas coerentes; pausa, retomada e recuperação após trocar de aba. Abra o resultado no navegador e informe a URL, os comandos de execução e as aproximações relevantes implementadas.

Para o corte, verifique o gesto por mouse e toque, a alternativa por botão e Enter, cancelamento, abertura de 0 a 100%, inspeção por arraste, troca de sabores com a fruta preservada, Reunir e Reset. Execute os seis testes automatizados do projeto: cinco sobre a física e um sobre as faces do corte, incluindo continuidade do contorno e triângulos corretamente orientados e não degenerados. Confirme visualmente no navegador que as três camadas estão legíveis e que a abertura não deixa frestas entre a superfície cortada e a casca.
