import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '01b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '071'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '551'),
            routes: [
              {
                path: '/docs/category/conceitos-em-engenharia-de-estruturas',
                component: ComponentCreator('/docs/category/conceitos-em-engenharia-de-estruturas', 'a03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/controle-tecnológico',
                component: ComponentCreator('/docs/category/controle-tecnológico', '203'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/fôrmas-e-escoramento',
                component: ComponentCreator('/docs/category/fôrmas-e-escoramento', '73e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/momento',
                component: ComponentCreator('/docs/category/momento', 'f2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/verificação-da-estabilidade-global',
                component: ComponentCreator('/docs/category/verificação-da-estabilidade-global', '563'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/centro-de-massa/centro_de_massa',
                component: ComponentCreator('/docs/centro-de-massa/centro_de_massa', '05c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/conceitos/coeficiente_de_poisson',
                component: ComponentCreator('/docs/conceitos/coeficiente_de_poisson', '337'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/conceitos/contraventamento',
                component: ComponentCreator('/docs/conceitos/contraventamento', '955'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/conceitos/efeitos-de-segunda-ordem',
                component: ComponentCreator('/docs/conceitos/efeitos-de-segunda-ordem', '648'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/conceitos/elementos_estruturais',
                component: ComponentCreator('/docs/conceitos/elementos_estruturais', 'c48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/conceitos/ensaio-tunel-de-vento',
                component: ComponentCreator('/docs/conceitos/ensaio-tunel-de-vento', 'f6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/conceitos/modulo_de_elasticidade',
                component: ComponentCreator('/docs/conceitos/modulo_de_elasticidade', '563'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/conceitos/momento-de-inercia',
                component: ComponentCreator('/docs/conceitos/momento-de-inercia', 'ac9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/conceitos/tensao',
                component: ComponentCreator('/docs/conceitos/tensao', '182'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/controle-tecnologico/controle-tecnologico-insumos-concreto',
                component: ComponentCreator('/docs/controle-tecnologico/controle-tecnologico-insumos-concreto', 'c49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/forca-cortante-e-movimento-fletor/cabos',
                component: ComponentCreator('/docs/forca-cortante-e-movimento-fletor/cabos', '825'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/forca-cortante-e-movimento-fletor/carga-ditribuida-forca-cortante-e-momento-fletor',
                component: ComponentCreator('/docs/forca-cortante-e-movimento-fletor/carga-ditribuida-forca-cortante-e-momento-fletor', 'cac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/forca-cortante-e-movimento-fletor/cargas-internas-em-membros-estruturais',
                component: ComponentCreator('/docs/forca-cortante-e-movimento-fletor/cargas-internas-em-membros-estruturais', 'b62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/forca-cortante-e-movimento-fletor/equacoes-e-diagramas-de-forca-cortante',
                component: ComponentCreator('/docs/forca-cortante-e-movimento-fletor/equacoes-e-diagramas-de-forca-cortante', 'de6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/forca-cortante-e-movimento-fletor/equacoes-e-diagramas-de-momento-fletor',
                component: ComponentCreator('/docs/forca-cortante-e-movimento-fletor/equacoes-e-diagramas-de-momento-fletor', 'c5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/forca-e-momento-de-uma-forca/diagframa-de-corpo-livre',
                component: ComponentCreator('/docs/forca-e-momento-de-uma-forca/diagframa-de-corpo-livre', '993'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/forca-e-momento-de-uma-forca/equilibrio-de-uma-particula',
                component: ComponentCreator('/docs/forca-e-momento-de-uma-forca/equilibrio-de-uma-particula', '93d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/forca-e-momento-de-uma-forca/forca',
                component: ComponentCreator('/docs/forca-e-momento-de-uma-forca/forca', '32c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/forca-e-momento-de-uma-forca/momento-de-uma-forca',
                component: ComponentCreator('/docs/forca-e-momento-de-uma-forca/momento-de-uma-forca', 'aef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/formas-para-concreto-armado/norma-15696',
                component: ComponentCreator('/docs/formas-para-concreto-armado/norma-15696', 'b55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/formas-para-concreto-armado/presssao-de-concretagem',
                component: ComponentCreator('/docs/formas-para-concreto-armado/presssao-de-concretagem', '602'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/formas-para-concreto-armado/reescoramento',
                component: ComponentCreator('/docs/formas-para-concreto-armado/reescoramento', '421'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/formas-para-concreto-armado/sistemas-de-escoramento',
                component: ComponentCreator('/docs/formas-para-concreto-armado/sistemas-de-escoramento', 'cf5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/formas-para-concreto-armado/sistemas-de-formas',
                component: ComponentCreator('/docs/formas-para-concreto-armado/sistemas-de-formas', 'bbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/formas-para-concreto-armado/solucoes-por-elemento-estrutural',
                component: ComponentCreator('/docs/formas-para-concreto-armado/solucoes-por-elemento-estrutural', '724'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/formas-para-concreto-armado/termos-e-definicoes',
                component: ComponentCreator('/docs/formas-para-concreto-armado/termos-e-definicoes', '3c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/formas-para-concreto-armado/tubos-e-bracadeiras',
                component: ComponentCreator('/docs/formas-para-concreto-armado/tubos-e-bracadeiras', '6ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/momento/momento-de-primeira-ordem',
                component: ComponentCreator('/docs/momento/momento-de-primeira-ordem', '86d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pesquisa-automacao/industria-4-0',
                component: ComponentCreator('/docs/pesquisa-automacao/industria-4-0', '361'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pesquisa-automacao/inteligência-artificial-embarcada',
                component: ComponentCreator('/docs/pesquisa-automacao/inteligência-artificial-embarcada', '3bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pesquisa-automacao/robotica',
                component: ComponentCreator('/docs/pesquisa-automacao/robotica', '4ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pesquisa-automacao/sensores-de-qualidade-e-execucao',
                component: ComponentCreator('/docs/pesquisa-automacao/sensores-de-qualidade-e-execucao', '3e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projetos-estruturais/etapas-do-projeto-estrutural',
                component: ComponentCreator('/docs/projetos-estruturais/etapas-do-projeto-estrutural', 'cb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/verificacao-estabilidade-global/diagrama-momento-curvatura',
                component: ComponentCreator('/docs/verificacao-estabilidade-global/diagrama-momento-curvatura', '2ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/verificacao-estabilidade-global/diagrama-normal-momento-curvatura',
                component: ComponentCreator('/docs/verificacao-estabilidade-global/diagrama-normal-momento-curvatura', '85f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/verificacao-estabilidade-global/grafico-tensao-deformacao-do-concreto-armado',
                component: ComponentCreator('/docs/verificacao-estabilidade-global/grafico-tensao-deformacao-do-concreto-armado', '5a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/verificacao-estabilidade-global/parametros-de-estabilidade-global',
                component: ComponentCreator('/docs/verificacao-estabilidade-global/parametros-de-estabilidade-global', 'e7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
