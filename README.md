# Avaliação Trimestral 1

## Desenvolvimento de Aplicações Web

João Eduardo Montandon

Setor de Informática &mdash; COLTEC/UFMG

**Valor: 9 Pontos**

**Data de Entrega: até 23h59 de 26/04/2018**

## Protótpio da Página Camisete.ria

Você foi contratado para fazer o protótipo do portal de venda de artigos para vestuário `Camisete.ria`. O portal é líder na venda de camisetas humorísticas do país, porém o site atual foi implementado a muito tempo atrás, e por isso esta defasado em vários aspectos.

Você foi contratado para fazer o protótipo da nova versão do portal de compras. Na nova versão, foi pedido que o site seja implementado seguindo as regras mais atuais de design e experiência de usuário. Entre os requisitos especificados, foi pedido expressamente que:

* Suporte nativo a múltiplas telas através de um layout responsivo;
* Uso de figuras e outros componentes de media para valorização do espaço;
* Uso de recursos de animações e transições para melhor experiência de navegação e interação;
* Uso de iconografia para representação das ações na página;
* Código desenvolvido esteja de acordo com os princípios de manutenção e desenvolvimento de software;

Como primeiro protótipo, foi exigido de você a implementação das seguintes páginas:

1. Página Principal
1. Visualização de um item
1. Carrinho de Compras

Os tópicos a seguir descreverão em detalhes o que deverá ser implementado em cada uma das páginas requisitadas acima:

### Página Principal

A página principal deverá exibir a lista de camisetas vendidas pelo portal. Essa página deverá prover suporte para pelo menos três tipos diferentes de telas: (i) [Desktop](imgs/principal_desktop.png); (ii) [Tablet](imgs/principal_tablet.png); (iii) [Mobile](imgs/principal_mobile.png).

Como pode ser observado nas figuras, a página principal deverá conter, pelo menos, os seguintes componentes:

* Carousel com os itens de destaque da página;
* Barra lateral de navegação por seção;
* Barra de busca no topo ocupando a largura da página;
* Menu com logo do portal a esquerda e campos de login e senha para entrar a direita;
* Camisetas deverão ser exibidas em um grid obrigatóriamente com figura, nome da camisa, e preço;
  * Um efeito de zoom deverá ser aplicado a imagem da camisa quando usuário estiver passando mouse sobre ela.

*Dica: Explore ao máximo os recursos providos pelo bootstrap para fazer implementar esse protótipo corretamente.*

### Visualização de Um Item

Essa página deverá ser exibida quando o usuário clicar em um item específico dos itens presentes na página principal. A página deverá suportar dois tipos diferentes de tela: (i) [Desktop](imgs/item_desktop.png) e; (ii) [Mobile](imgs/item_mobile.png).

Essa página deverá conter os seguintes itens, obrigatóriamente:

* Painel para exibição da imagem da camisa escolhida;
* Campo para seleção de cores da camisa;
* Campo para escolha do tamanho da camisa (P, M, G, GG);
* Campo para escolha do tipo da camisa (Masculino, Feminino, Infantil);
* Campo para fornecimento do frete e cálculo do tempo de entrega;
* Seção de detalhes do produto;

### Carrinho de Compras

A página de carrinho de compras deverá listar os itens selecionados pelo usuário na tela anterior. Essa página deverá prover suporte a dois tipos diferentes de telas: (i) [Desktop](imgs/carrinho_desktop.png); (ii) [Mobile](imgs/carrinho_mobile.png). A principal diferença entre as duas está no espaço ocupado por cada um dos componentes: no layout mobile o layout deverá ser totalmente verticalizado.

Os seguintes componentes deverão estar presentes obrigatóriamente:

* Texto de destaque informando ao usuário que ele está perto de concluir as compras;
* Seção para listagem dos itens que estão sendo escolhidos pelo usuário;
* Espaço para fornecimento dos dados pessoais;
* Espaço para fornecimento dos dados de pagamento;

*OBS: Atenção ao comportamento de determinados componentes, que irão desaparecer e/ou modificar de acordo com o layout selecionado*

## Forma de Entrega

O trabalho deverá ser entregue no formato de pull request. Os arquivos do trabalho deverão estar dentro de uma pasta com o nome do aluno.