# Strawberry Matter.

Estudo interativo de um morango cravejado, feito em Three.js r180, WebGL e GLSL. A direção visual é **60% morango / 40% gelatina**: exterior cremoso rosado, inclusões vermelhas orgânicas, aquênios dourados e folhas verdes com nervuras, preservando transmissão de luz e brilho molhado. Um corte longitudinal permite abrir o doce e explorar o morango fresco, o brigadeiro e a casquinha de chocolate branco por dentro.

O briefing completo está em [PROMPT_APRIMORADO.md](PROMPT_APRIMORADO.md).

## Abrir

Com Node.js 20.15 ou superior:

```sh
npm install
npm run dev
```

Abra o endereço HTTP mostrado no terminal, normalmente **http://127.0.0.1:5173**.

Para abrir diretamente a inspeção das duas metades, use **http://127.0.0.1:5173/?cut=open**. O botão **Reunir** permite voltar à fruta inteira.

A cópia de Three.js já está incluída em `vendor/`. Para servir diretamente a raiz, sem instalar Node ou acessar a internet:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abra **http://127.0.0.1:8000**. Mantenha o terminal do servidor aberto. Não abra `index.html` por `file://`; os módulos JavaScript precisam de HTTP.

## Build e testes

```sh
npm run build
npm test
npm run preview
```

`dist/` contém a versão de produção, com Three.js empacotado. Também pode ser servida com `python3 -m http.server 8000 --directory dist`. `npm run vendor` atualiza a cópia local a partir da dependência instalada; esse comando também roda após `npm install`.

Não há CDN, fontes remotas, texturas baixadas em execução ou chamadas a serviços externos. A instalação inicial do npm requer internet caso as dependências ainda não estejam em cache; a versão Python com os arquivos presentes funciona inteiramente offline.

## Interação

- Com o morango inteiro, arraste a superfície com mouse ou toque e solte para observar a inércia. A seleção acompanha a malha deformada e usa captura de ponteiro.
- **Fazer um corte** prepara o corte longitudinal. Deslize sobre a fruta para abrir as duas metades; também é possível usar **Cortar ao meio** ou pressionar Enter com o canvas focado. O gesto confirma um plano longitudinal predefinido, independentemente do ângulo desenhado.
- **Abertura do corte**, de 0 a 100%, controla a separação e a orientação das metades. Arraste o modelo aberto para girar e inspecionar as camadas; a legenda identifica fruta, brigadeiro e cobertura. **Reunir** desfaz o corte; **Novo corte** prepara outro gesto. **Reset** também reúne o doce.
- **Firmness** controla a rigidez; **Internal damping**, a dissipação. As escalas são parâmetros nominais de uma simulação visual, não uma calibração de laboratório.
- **Give it a nudge** aplica um impulso. **Reset** restaura física, material, parâmetros e câmera.
- **Morango / Pistache / Maracujá** mudam a paleta externa, as inclusões, as sementes e a sombra. No corte, o morango central permanece vermelho; os sabores alteram o creme e a casca ao redor. A densidade altera a massa mantendo o volume inicial.
- **− / +** e a roda do mouse ajustam o zoom. **360°** alterna a rotação contínua.
- **½ speed**, **Show mesh** e **Pause** controlam o tempo, a visualização da rede de massas e molas e a integração física. O impulso fica desativado durante a pausa.
- Com o canvas focado pelo teclado: espaço aplica impulso, setas giram, `+` e `−` ajustam o zoom, Enter confirma um corte preparado e Escape solta o arraste ou cancela o preparo do corte. Os controles HTML também são acessíveis pelo teclado.

## Referências do interior

O corte foi orientado por imagens do doce aberto publicadas pelo [Olhar Direto em 26/08/2026](https://www.olhardireto.com.br/conceito/noticias/depois-do-morango-do-amor-morango-cravejado-e-nova-aposta-viral-das-docerias-em-cuiaba) e pela [Tribuna Hoje em 28/08/2026](https://tribunahoje.com/noticias/cidades/2026/08/28/192418-depois-do-amor-agora-o-morango-vem-cravejado-na-sodie-doces), consultadas em 07/09/2026. Elas mostram fruta com miolo claro, recheio cremoso e cobertura branca pontuada por caramelo vermelho. Os arquivos e as observações visuais estão em [references/REFERENCIAS.md](references/REFERENCIAS.md). As fotografias servem de referência e não são carregadas pela experiência.

## Implementação e limites

`src/physics.js` integra 47 massas conectadas por 275 molas, com passo fixo de 1/120 s e até oito subpassos por frame. Molas locais propagam o arraste; forças de retorno distribuídas representam o suporte do espécime. Limites de deslocamento mantêm a estabilidade. A rede aproxima a conservação da forma, sem implementar pressão volumétrica, colisões de corpo mole ou elementos finitos.

`src/geometry.js` gera corpo fechado, relevo superficial, sementes, folhas e 255 inclusões internas. A amostragem determinística permite reproduzir a cena. O shader de vértice interpola os deslocamentos de quatro nós próximos e recalcula as normais por diferenças finitas. Uma malha simplificada atualizada na CPU permite selecionar a superfície em movimento.

`src/materials.js` estende `MeshPhysicalMaterial` com GLSL: variação orgânica da polpa, detalhes das folhas, deformação e uma contribuição aproximada de espalhamento. A transmissão e refração usam o modelo físico em tempo real do Three.js; não há path tracing ou SSS volumétrico exato. O ambiente de estúdio é procedural. A sombra de contato é uma aproximação suave e colorida, deslocada conforme o corpo, sem cálculo físico de cáusticas. A direção 60/40 é perceptiva; não equivale a um slider de transparência.

`src/cutaway.js` apresenta duas metades recortadas por um plano longitudinal fixo. `src/cut-surface.js` fecha cada metade com uma superfície 3D cujo contorno deriva da seção do corpo em `x = 0`. O shader dessas faces distingue fruta vermelha com miolo claro e fibras, brigadeiro cremoso e casca branca com fragmentos de caramelo. Não há corte livre por CSG: o traço do usuário aciona a seção preparada. A abertura é uma animação de inspeção; ambas as metades recebem a deformação da mesma rede física, sem simulação independente de fratura, colisão ou massa de cada pedaço.

A massa inicial é 124,8 g e a densidade nominal é 1,05 g/cm³. O volume de repouso é 118,9 cm³ e permanece constante, inclusive com o corte aberto. Massa e volume continuam se referindo ao espécime original, sem quantificar pedaços. O volume da malha inicial determina a escala entre unidades da cena e metros. A energia exibida aplica `Σ ½ m v²` às velocidades da rede nessa escala, em mJ; ela não contabiliza a animação de abertura nem a rotação de inspeção. Ela é zero em repouso; os valores não são aleatórios.

O renderer usa WebGL2, necessário na versão local do Three.js, e não WebGPU. Navegadores atuais com aceleração gráfica são o alvo. A resolução é limitada e se ajusta após o aquecimento em dispositivos lentos. A preferência por movimento reduzido inicia em meia velocidade, sem rotação automática.

## Verificação realizada

- Seis testes automatizados: cinco verificam repouso e dissipação, propagação local, consistência a 30/120 FPS, parâmetros e estabilidade; o sexto verifica o fechamento das duas faces do corte, o alinhamento com o contorno do corpo e a orientação de triângulos sem degeneração.
- Teste real no navegador dos materiais, impulso, arraste/soltura, pausa, zoom, rotação, meia velocidade, rede e reset.
- Layout conferido em desktop e tela de 390 px, sem rolagem horizontal.
- Corte verificado por gesto real de ponteiro, toque emulado e Enter; abertura ajustável, inspeção durante pausa, troca de sabores, rede nas metades, Reunir e Reset. O arraste de corpo mole continua funcionando após reunir.
- Carregamento local sem requisições externas e sem erros de console.

Documentação usada: [MeshPhysicalMaterial](https://threejs.org/docs/pages/MeshPhysicalMaterial.html), [WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html) e [ShaderMaterial](https://threejs.org/docs/pages/ShaderMaterial.html).
