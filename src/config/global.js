export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Formas de estado',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'El Estado según Hobbes, Rousseau, Maquiavelo, Montesquieu, Marx, Locke y Kelsen',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Thomas Hobbes: El Estado como garantía del orden',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Jean-Jacques Rousseau: El contrato social y la soberanía popular',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Nicolás Maquiavelo: El Estado como instrumento del poder',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Montesquieu: La separación de poderes.',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Karl Marx: El Estado como instrumento de dominación',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo:
              'John Locke: El gobierno limitado y los derechos naturales.',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Hans Kelsen: El Estado como orden normativo',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Elementos del Estado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'La población: Base Humana',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'El Territorio: Límites físicos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'La Soberanía: Autoridad Suprema',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'El Poder Político: La capacidad de gobernar',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fundamento jurídico y legal del Estado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Evolución del fundamento jurídico del estado',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Principios normativos del estado',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'La Constitución: Base del fundamento jurídico del Estado',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'El Estado de Derecho: garantía de igualdad y justicia',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Crevari, E. L. (2015). Filosofía política y formas de gobierno: un recorrido histórico: ( ed.). Eudeba.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/119791',
    },
    {
      referencia:
        'Aguirre, J. L., & Montbrun, A. (Coords.). (2022). Temas de teoría política contemporánea: Un enfoque sistémico. Comunidad Editora Latinoamericana.',
      link: 'Temas de teoría política contemporánea. Un enfoque sistémico',
    },
    {
      referencia:
        'Mateos y de Cabo, O. (2015). Presente y futuro de los sistemas políticos y los modelos constituciones: un estudio comparado: ( ed.). Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/58062',
    },
    {
      referencia:
        'Chávarri Sidera, P. (2013). Sistemas políticos contemporáneos: ( ed.). UNED - Universidad Nacional de Educación a Distancia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/48584',
    },
    {
      referencia:
        'Villamar Cruz, V. & López Durán, R. (2018). Teoría del estado: ( ed.). IURE Editores.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40258',
    },
    {
      referencia:
        'Fernández Ruiz, J. (2024). Capítulo 2: Las funciones públicas y otras actividades del Estado. En Derecho administrativo del estado de Yucatán (pp. 27-42). Universidad Nacional Autónoma de México, Instituto de Investigaciones Jurídicas.',
      link: '20.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Administración pública',
      significado:
        'Conjunto de instituciones y procesos encargados de gestionar los recursos del Estado y ejecutar políticas gubernamentales.',
    },
    {
      termino: 'Autonomía regional',
      significado:
        'Capacidad de autogobierno de una entidad territorial dentro de un Estado.',
    },
    {
      termino: 'Constitución',
      significado:
        'Norma fundamental que establece la estructura del Estado y los derechos y deberes de los ciudadanos.',
    },
    {
      termino: 'Democracia',
      significado:
        'Sistema de gobierno en el que el poder reside en la ciudadanía, ejercido mediante elecciones libres y periódicas.',
    },
    {
      termino: 'Descentralización',
      significado:
        'Proceso mediante el cual el poder y las funciones del gobierno se distribuyen a niveles administrativos inferiores.',
    },
    {
      termino: 'Desarrollo económico',
      significado:
        'Proceso mediante el cual un país mejora sus condiciones de vida a través del crecimiento productivo y la equidad social.',
    },
    {
      termino: 'Ejecutivo',
      significado:
        'Poder del Estado encargado de implementar políticas y administrar los recursos gubernamentales.',
    },
    {
      termino: 'Entidad estatal',
      significado:
        'Institución pública que forma parte de la estructura administrativa de un país y desempeña funciones específicas.',
    },
    {
      termino: 'Jurisdicción judicial',
      significado:
        'Ámbito de competencia de los tribunales y jueces para interpretar y aplicar la ley en la resolución de conflictos.',
    },
    {
      termino: 'Participación ciudadana',
      significado:
        'Mecanismo mediante el cual los ciudadanos influyen en la toma de decisiones del Estado.',
    },
    {
      termino: 'Proceso legislativo',
      significado:
        'Conjunto de procedimientos a través de los cuales se crean, modifican o derogan leyes dentro de un Estado.',
    },
    {
      termino: 'Seguridad pública',
      significado:
        'Conjunto de políticas y acciones dirigidas a proteger la vida, integridad y bienes de la población.',
    },
    {
      termino: 'Separación de poderes',
      significado:
        'Principio que establece la división de funciones entre los poderes Ejecutivo, Legislativo y Judicial para evitar abusos de autoridad.',
    },
    {
      termino: 'Soberanía',
      significado:
        'Capacidad del Estado para ejercer autoridad suprema sobre su territorio y su población sin interferencias externas.',
    },
    {
      termino: 'Transparencia',
      significado:
        'Principio de gestión estatal que garantiza el acceso a la información y la rendición de cuentas.',
    },
  ],
}
