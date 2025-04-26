<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Estado unitario, compuesto, confederación y federal'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-8
        .d-flex.align-items-start.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-3.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 El término Estado proviene del latín status, que significa “posición” o “condición”. Su uso político comenzó a consolidarse en el siglo XVI con la obra El Príncipe (1532) de Nicolás Maquiavelo, donde emplea el término stato para referirse a la organización política y administrativa de un territorio gobernado por una autoridad. Desde entonces, el concepto ha evolucionado hasta convertirse en el ente político que conocemos hoy: responsable de gestionar el bienestar de sus ciudadanos y de garantizar el orden social.
        span En sociedades primitivas como las tribus nómadas, no existía una noción formal de Estado, aunque sí había estructuras de liderazgo basadas en la autoridad de ancianos o líderes guerreros. Con el desarrollo de la agricultura y el asentamiento de las comunidades, surgieron las primeras formas organizadas de gobierno con funciones específicas. Primeras formas de Estado en la Antigüedad: 
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Egipto (aprox. 3100 a.C.)
              p El faraón concentraba todo el poder político, religioso y militar. El Estado centralizado se encargaba de recaudar tributos, administrar justicia y construir infraestructura.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Mesopotamia (aprox. 3000 a.C.)
              p En ciudades como Sumer y Babilonia, el Estado tenía funciones religiosas y judiciales. El Código de Hammurabi (1750 a.C.) estableció un sistema legal basado en la ley del talión.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Grecia Clásica (siglo V a.C.)
              p Las <i>polis</i> introdujeron la participación ciudadana. En Atenas surgió la democracia directa.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Imperio Romano (siglo I a.C. – siglo V d.C.)
              p Se desarrolló un sistema legal complejo, el <i>Derecho Romano</i>, con principios como la igualdad ante la ley. El Estado asumía funciones judiciales, de infraestructura, defensa y bienestar social.

    h2 Edad Media y Renacimiento

    .row.mb-4
      .col-12.col-xl-8
        .row.mb-4
          .col-2.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
          .col-12.col-xl-10
            span Durante la Edad Media (siglo V–XV), la idea de un Estado centralizado desapareció en gran parte de Europa. En su lugar, se impuso el sistema feudal, caracterizado por la fragmentación del poder entre reyes, señores feudales y la Iglesia. El Estado tenía funciones limitadas, principalmente centradas en la defensa territorial. El Sacro Imperio Romano Germánico ejemplifica esta descentralización, mientras que el papado asumía funciones estatales como la educación y la justicia moral.
        .bg-azul.p-4(data-aos='fade-up')
          span A partir del Renacimiento y, sobre todo, durante la Ilustración, los Estados comenzaron a centralizarse nuevamente. El absolutismo, ejemplificado por Luis XIV de Francia, concentró el poder en la figura del rey, quien asumía funciones económicas, militares y judiciales. Sin embargo, eventos como la Revolución Francesa (1789) y la independencia de las colonias americanas impulsaron la idea del Estado de derecho. Inspirado en Montesquieu, se consolidó la división de poderes (ejecutivo, legislativo y judicial), sentando las bases de las democracias modernas.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

    h2 Formas de Estado

    p.mb-4 Desde las antiguas ciudades-Estado hasta las democracias constitucionales contemporáneas, la organización del poder político ha sido central en la teoría política. Los modelos de Estado han surgido para regular la relación entre el poder central y las entidades territoriales. Comprender estas formas permite analizar el ejercicio del poder y su impacto en la estabilidad institucional y la cohesión social (Aguirre & Montbrun, 2022; Crevari, 2015). A continuación, se presentan los principales modelos:

    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Estado unitario")
            p El poder político se concentra en un solo gobierno central. Las autoridades locales dependen del gobierno central y no tienen autonomía legislativa. Es el modelo más común en el mundo. <br><b>Ejemplos:</b> Francia, Chile, Perú.
          .div(titulo="Estado compuesto")
            p Agrupa distintas entidades territoriales con cierto grado de autonomía, pero sin llegar a formar una federación. Puede incluir reinos, territorios o regiones especiales. Es una categoría intermedia poco frecuente.
          .div(titulo="Confederación")
            p Unión de Estados soberanos que delegan algunas competencias comunes a un órgano central, pero conservan su independencia. Las decisiones del órgano central requieren unanimidad. <br><b>Ejemplos históricos:</b> Confederación Helvética, Confederación de Estados del Sur en EE. UU.
          .div(titulo="Estado federal")
            p Se distribuye el poder entre un gobierno central y entidades federadas (estados, provincias), que poseen autonomía política, administrativa y legislativa. Existe una Constitución común que rige a todos. <br><b>Ejemplos:</b> Estados Unidos, Alemania, Brasil, México.
    
    h2 Transformaciones contemporáneas

    p.mb-4 La globalización y la interdependencia económica han generado nuevas dinámicas en la organización del poder estatal. Las formas tradicionales de Estado han debido adaptarse a fenómenos como:

    .row.mb-4
      .col-10.col-lg-6.col-xl-4.mx-auto
        .bg-morado.p-4.d-flex.h-100(data-aos='fade-up')
          p.text-center.m-auto.text-white Descentralización administrativa
      .col-10.col-lg-6.col-xl-4.mx-auto
        .bg-morado-oscuro.p-4.d-flex.h-100(data-aos='fade-up')
          p.text-center.m-auto.text-white Integración regional (por ejemplo, la Unión Europea)
      .col-10.col-lg-6.col-xl-4.mx-auto
        .bg-morado.p-4.d-flex.h-100(data-aos='fade-up')
          p.text-center.m-auto.text-white Tensiones entre unidad y diversidad cultural o étnica

    .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 110px' src='@/assets/curso/unidad/img-12.png', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 Estos desafíos han generado debates sobre la viabilidad de los modelos existentes y la necesidad de reformarlos para responder a las demandas sociales actuales. Así, el análisis detallado de las diferentes formas de Estado —sus ventajas, limitaciones y evolución— permite comprender cuál es el modelo más adecuado en función del contexto histórico, político y social de cada nación.

    .row.mb-4
      .col-12.col-xl-8
        h2 Estado unitario
        p.mb-4 El <b>Estado unitario</b> es aquel en el que el poder político se encuentra centralizado en un solo gobierno nacional, sin que existan divisiones internas con plena autonomía. Las unidades territoriales (departamentos, regiones, provincias) pueden ejercer ciertas funciones administrativas, pero siempre subordinadas al gobierno central (Crevari, 2015). Esta es una de las formas más antiguas de organización política, utilizada desde civilizaciones antiguas hasta naciones modernas.
        p.mb-4 Este modelo se caracteriza por tener:
        .row.mb-0.bg-azul.p-4(data-aos='fade-up')
          .col-12.col-xl-10.d-flex
            .my-auto
              p.mb-0 ●	Legislación unificada<br>●	Control administrativo centralizado<br>●	Homogeneidad en la aplicación de leyes y políticas
          .col-2.d-none.d-xl-block
      .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')

    p.mb-4 Pese a su estructura centralizada, puede adoptar modalidades de <b>descentralización</b>:
    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3  

        .row.mb-4
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Descentralización política
                p.text-small.px-4.text-center.pb-2 Otorga a ciertos gobiernos regionales la posibilidad de ser elegidos democráticamente y tomar decisiones en asuntos locales.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Descentralización administrativa
                p.text-small.px-4.text-center.pb-2 Transfiere competencias técnicas o de gestión a los gobiernos locales, sin comprometer la autoridad del poder central.

    p.mb-4 Un ejemplo contemporáneo es el <b>Reino Unido</b>, donde Escocia y Gales poseen parlamentos regionales para gestionar asuntos internos, aunque siguen subordinados al gobierno nacional (Aguirre & Montbrun, 2022).

    .row.bg-morado.p-4.py-xl-0.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex
        p.my-auto.text-white Históricamente, este modelo ha predominado en contextos donde la centralización ha sido percibida como garantía de orden, como en el absolutismo del siglo XVIII europeo. En el caso de <b>Colombia</b>, antes de la Constitución de 1991, se vivió un modelo unitario altamente centralizado, con todas las decisiones concentradas en Bogotá, lo cual generó desigualdades regionales y limitó el desarrollo territorial.

    h2 Ejemplos actuales de Estados unitarios: 

    .row.mb-4
      .col-10.col-lg-6.col-xl-4.mx-auto
        .bg-morado.p-4.d-flex.h-100(data-aos='fade-up')
          p.text-center.my-auto.text-white Francia (con descentralización administrativa)
      .col-10.col-lg-6.col-xl-4.mx-auto
        .bg-morado-oscuro.p-4.d-flex.h-100(data-aos='fade-up')
          p.text-center.m-auto.text-white Japón (modelo fuertemente centralizado)
      .col-10.col-lg-6.col-xl-4.mx-auto
        .bg-morado.p-4.d-flex.h-100(data-aos='fade-up')
          p.text-center.m-auto.text-white Colombia (antes de 1991)

    .row.mb-4
      .col-12.col-xl-9
        h2 Estado compuesto
        .bg-amarillo.p-4(data-aos='fade-up').mb-4
          span En contraste con el modelo unitario, el <b>Estado compuesto</b> está formado por la unión de varias entidades territoriales que conservan autonomía en ciertos aspectos, pero que comparten un gobierno central con competencias definidas. Este modelo permite una mayor adaptación a las particularidades regionales y se presenta como una solución para integrar comunidades políticas diversas sin suprimir su identidad (Casas Santero, 2012).
        p.mb-4 Existen dos formas principales de Estado compuesto:

        .row.mb-0
          .col-6
            .bg-marron.p-4(data-aos='fade-up')
              span.text-bold Confederación
          .col-6
            .bg-marron.p-4(data-aos='fade-up')
              span.text-bold Estado federal
      .col-3.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Históricamente, ejemplos de Estados compuestos incluyen:
        .mb-4.bg-azul.p-4(data-aos='fade-up')
          span ●	El <b>Imperio Persa</b>.<br><br>●	El <b>Sacro Imperio Romano Germánico</b>, donde los reyes o príncipes mantenían poder en sus territorios, subordinados al emperador.

        .bg-azul-oscuro.p-4(data-aos='fade-up')
          span El Estado compuesto permite que regiones con diferencias lingüísticas, culturales o económicas conserven un cierto grado de <b>autogestión</b>, aunque ello puede derivar en <b>conflictos de competencias</b> entre niveles de gobierno. Para enfrentar estas tensiones, se han desarrollado mecanismos de cooperación intergubernamental. Un caso relevante es <b>Canadá</b>, donde las relaciones entre el gobierno federal y las provincias han evolucionado mediante acuerdos que permiten la armonización de políticas públicas, especialmente en salud y educación (Mateos y de Cabo, 2015).
    
    h2 Confederación

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-marron.p-4(data-aos="fade-up")
        p.mb-0 La <b>confederación</b> es una forma de Estado compuesto en la que varios Estados soberanos deciden asociarse para alcanzar objetivos comunes sin renunciar a su independencia. A diferencia de otros modelos, el gobierno central en una confederación tiene <b>competencias limitadas</b> y depende de la <b>voluntad de los Estados miembros</b>, que conservan su plena soberanía (Crevari, 2015).
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')

    p.mb-4 Las confederaciones suelen establecerse mediante <b>tratados internacionales</b>, y tienen la particularidad de ser estructuras <b>reversibles</b>, ya que los miembros pueden retirarse libremente, provocando la disolución del sistema. Algunos ejemplos históricos son:

    .row.bg-fondo-1.bg-full-width.py-4.mb-0
      div.px-5.pb-md-3

        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Confederación Helvética (Suiza)
              p.px-1.text-small.mb-0.text-center Modelo estable y duradero.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Estados Unidos bajo los Artículos de la Confederación
              p.px-1.text-small.mb-0.text-center Sistema débil que fue reemplazado por un Estado federal.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Confederación del Rin (1806–1815)
              p.px-1.text-small.mb-0.text-center Organizada por Napoleón; colapsó tras su derrota.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Confederación Peruano-Boliviana (1836–1839)
              p.px-1.text-small.mb-0.text-center Desapareció por conflictos internos y presiones externas 

    .row.bg-morado-oscuro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        p.mb-0.text-white Las <b>ventajas</b> de este modelo incluyen una mayor autonomía para los Estados miembros y cooperación en temas específicos. Sin embargo, su <b>principal desventaja</b> es la falta de cohesión política y la dificultad para implementar decisiones comunes (Aguirre & Montbrun, 2022).

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        h2 Estado federal
        p.mb-4 El <b>Estado federal</b> representa una forma más integrada del Estado compuesto. En este modelo, <b>coexisten dos niveles de gobierno:</b> el central (federal) y el de las <b>entidades federadas</b> (estados, provincias o regiones), ambos con autonomía garantizada por una <b>Constitución común</b>. A diferencia de la confederación, los miembros no pueden separarse unilateralmente (Mateos y de Cabo, 2015).

        .row.mb-4.bg-amarillo.p-4.pb-xl-0(data-aos='fade-up')
          .col-2.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
          .col-12.col-xl-10.d-flex
            p.my-auto Este sistema es especialmente eficaz en países con <b>amplio territorio</b> o gran <b>diversidad cultural y étnica</b>, ya que permite una distribución equilibrada del poder y una administración más eficiente de los recursos.
        span Algunos ejemplos contemporáneos son:

    .row.mb-4
      .col-12.col-xl-8
        .d-flex.align-items-start.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-23.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Estados Unidos 
            span Cada estado tiene su constitución y gobierno, pero todos se rigen por la constitución federal.
        .d-flex.align-items-start.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-24.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Alemania
            span Cuenta con un sistema federal fuerte y una clara división de competencias.
        .d-flex.align-items-start.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-25.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold México
            span Sus estados tienen autonomía en diversos ámbitos legislativos y administrativos.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
    
    p.mb-4 El <b>Estado federal</b> favorece un equilibrio entre <b>unidad y diversidad</b>, permitiendo a las regiones diseñar políticas acordes a sus necesidades locales. No obstante, puede generar <b>conflictos de competencias y desigualdades económicas</b> entre regiones (Chávarri Sidera, 2013).

    p.mb-4 <b>Tabla 1.</b> Formas de estado en algunos países relevantes

    .tabla-a.mb-5
      table
        thead
          tr
            th(width="10%").bg-morado.text-white.text-center País
            th(width="20%").bg-morado.text-white.text-center Tipo de Estado
            th(width="35%").bg-morado.text-white.text-center Implementación
            th(width="35%").bg-morado.text-white.text-center Debates recientes
        tbody
          tr
            td Francia
            td Unitario
            td Siglo XVIII
            td Descentralización administrativa y autonomía regional.
          tr
            td Alemania
            td Federal
            td 1949 (Ley fundamental de Bonn)
            td Equilibrio de competencias entre estados confederados.
          tr
            td Estados Unidos
            td Federal
            td 1787(Constitución)
            td Tensiones entre el gobierno federal y los estados sobre los derechos estatales.
          tr
            td Suiza
            td Confederación
            td 1291 (Confederación Helvética)
            td Relación entre autonomía cantonal y gobierno central.
          tr
            td España
            td Estado Compuesto
            td 1978 (Constitución)
            td Desafíos en la organización autonómica y tensiones independentistas.
          tr
            td México
            td Federal
            td 1917 (Constitución)
            td Distribución de competencias entre el gobierno central y los estados.
          tr
            td Argentina
            td Federal
            td 1853 (Constitución)
            td Reformas constitucionales y centralización fiscal.
          tr
            td Brasil
            td Federal
            td 1988 (Constitución)
            td Desafíos en la descentralización administrativa y control presupuestario.
          tr
            td Colombia
            td Unitario con descentralización
            td 1991 (Constitución)
            td Relación entre el gobierno nacional y las entidades territoriales.
          tr
            td Venezuela
            td Federal
            td 1999 (Constitución)
            td Centralización del poder y reducción de la autonomía de los estados.

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/4LDsTiYWiqw?si=-XnAlH4i1192z1Mt") [Vídeo] AsambleaSenado (2011). Modelo de estado.
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://juspedia.es/apuntes/teoria-estado-constitucional/leccion-8/#estado-unitario-y-estados-compuesto") Juspedia. (s.f.). Lección 8: Estado unitario y Estados compuestos.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

    p

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
