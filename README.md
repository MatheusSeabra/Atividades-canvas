# Atividades-canvas
Retangulo

A primeira linha define o estilo de preenchimento do retângulo para ser uma cor vermelha sólida
A segunda linha usa o método fillRect no objeto de contexto do canvas ctx, que desenha um retângulo nas coordenadas (225, 0)

Circulo

A primeira linha usa o método método beginPath() no objeto de contexto do canvas ctx. Esse método inicia um novo caminho de desenho
A segunda linha usa o método arc() no objeto que desenha um arco de círculo.
A terceira linha usa o método stroke() no objeto que traça o caminho atual com o estilo de traçado atual. Isso cria a borda do círculo.

Linha

A primeira linha move o "cursor" de desenho no canvas. Este será o ponto de partida da linha que será desenhada.
A segunda linha define o ponto final da linha que será desenhada. Isso desenha uma linha reta horizontal da posição inicial para a posição final.
A terceira linha desenha a linha definida acima usando a cor e a largura da linha definidas no contexto.

linha curva

A primeira linha inicia um novo caminho de desenho. Isso é importante porque permite que você comece a desenhar um novo objeto sem interferir com objetos de desenho existentes no canvas.

A segunda linha move o cursor de desenho para a posição (370,280) no canvas. Essa será a posição inicial da curva.

A terceira linha define uma curva quadrática usando os pontos de controle e o ponto final. Isso desenha uma curva com um único ponto de controle que começa na posição inicial e termina na posição final.

A quarta linha desenha a curva definida acima usando a cor e a largura da linha definidas no contexto.

Imagem

A primeira linha define uma função JavaScript chamada "imagem"
A segunda linha usa o objeto "ctx" para chamar a função drawImage, que desenha uma imagem no canvas.

Por fora do javascript no html fiz um botão onclick, assim que for precionado juntara a imagem com os demais itens.