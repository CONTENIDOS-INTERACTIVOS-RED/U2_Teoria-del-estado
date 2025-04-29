<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3.Funciones del Estado'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4
        .col-12.col-xl-8
          .row.bg-azul.p-4.pb-xl-0.mx-0(data-aos='fade-up')
            .col-2.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
            .col-12.col-xl-10.d-flex
              p.my-auto.pb-xl-4 El <b>Estado</b> es la estructura fundamental de organización social y política, responsable de garantizar el orden, la seguridad y el bienestar de sus ciudadanos. Para cumplir con esta misión, ejerce un conjunto de funciones esenciales que han evolucionado a lo largo del tiempo, adaptándose a los cambios sociales, económicos y políticos.
          .bloque-texto-c.bg-azul-oscuro.p-4
            i.fas.fa-quote-left.text-.mb-4
            h3.mb-2 "El Estado moderno ha evolucionado hacia un esquema más complejo, en el que sus funciones han pasado de ser meramente coercitivas a incluir responsabilidades en el desarrollo económico y social" 
            span.text-small (Villamar Cruz & López Durán, 2018, p. 45)

        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')

      h2 Clasificación de las funciones del Estado
      p.mb-4 Según <b>Villamar Cruz y López Durán (2018)</b>, las funciones del Estado se clasifican en:

      .row.mb-4
        .col-10.col-xl-4.mx-auto
          .d-flex.align-items-start.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-39.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-2.text-bold Seguridad
              span Educación
        .col-10.col-xl-4.mx-auto
          .d-flex.align-items-start.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-40.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-2.text-bold Justicia
              span Salud
        .col-10.col-xl-4.mx-auto
          .d-flex.align-items-start.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-41.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-2.text-bold Administración pública
              span Desarrollo económico

      h2 Funciones Fundamentales del Estado
      p.mb-4 Todo Estado necesita cumplir funciones esenciales para garantizar la convivencia y el bienestar de su población. A continuación, se explorarán tres de esas funciones clave: seguridad, justicia y administración pública, con ejemplos concretos de cómo se implementan en diferentes partes del mundo.

      .row.bg-fondo-slider.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          figure
            .video
              <iframe width="1905" height="748" src="https://www.youtube.com/embed/zkvXxGhm-SI" title="Bienvenida a la asignatura Teoria del Estado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      h2 Funciones complementarias del Estado
      p.mb-4 Estas funciones buscan <b>mejorar la calidad de vida</b> y garantizar la equidad en el acceso a oportunidades como la educación, la salud y el desarrollo económico.

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Educación")
              p Pilar del desarrollo social; el Estado debe garantizar educación gratuita y de calidad. <br><br><b>Colombia:</b> educación pública obligatoria hasta secundaria; programas como ICETEX y estrategias de inclusión. Persisten brechas urbano-rurales. <br><br><b>Finlandia:</b> modelo educativo reconocido mundialmente; autonomía docente, formación especializada y eliminación de exámenes estandarizados para un aprendizaje integral.

            .div(titulo="Salud")
              p Asegura el bienestar físico y mental mediante infraestructura y programas de prevención. <br><br><b>Colombia:</b> sistema mixto con gestión de la ADRES; retos como congestión hospitalaria y acceso limitado en zonas rurales. <br><br><b>Canadá:</b> sistema totalmente público, financiado por impuestos, con cobertura universal y enfoque en prevención y bienestar.

            .div(titulo="Desarrollo económico")
              p Promueve empleo, crecimiento sostenible y distribución equitativa de la riqueza. <br><br><b>Colombia:</b> políticas como “Economía Naranja” e integración a tratados comerciales internacionales. <br><br><b>China:</b> desarrollo planificado por el Estado; políticas industriales y de comercio que han posicionado al país como potencia económica, combinando economía de mercado con control estatal.

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row.mb-4
            .col-12.col-xl-9
              h2 Perspectiva administrativa de las funciones del Estado
              p.mb-4 Desde una <b>perspectiva administrativa</b>, las funciones del Estado se agrupan en tres ramas fundamentales: <b>legislativa, ejecutiva y judicial</b>. Cada una cumple un rol específico dentro del sistema institucional y garantiza el cumplimiento de los principios democráticos mediante un equilibrio de poderes.

              .bloque-texto-c.bg-marron.p-4.mb-4
                i.fas.fa-quote-left.text-.mb-4
                h3.mb-2 "Las funciones públicas deben responder a los principios de eficiencia, legalidad y transparencia, siendo la base de un Estado democrático de derecho"
                span.text-small (Fernández Ruiz, 2024, p. 32).

            .col-3.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')

          p.mb-4 La clasificación de las funciones administrativas del Estado es:

          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-44.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Legislativa
                p.px-1.text-small.mb-0.text-center Elabora y aprueba leyes que regulan la vida social; representa los intereses ciudadanos.
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-45.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Ejecutiva
                p.px-1.text-small.mb-0.text-center Implementa políticas públicas, administra recursos y dirige el funcionamiento del gobierno.
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-46.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Judicial
                p.px-1.text-small.mb-0.text-center Interpreta y aplica las leyes; resuelve conflictos jurídicos y protege los derechos fundamentales.

      h2 Función Legislativa
      p.mb-4 La función legislativa es responsable de la <b>creación y aprobación de leyes</b>, así como del <b>control político del gobierno</b>.

      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Colombia', :icon="require('@/assets/curso/unidad/img-47.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-48.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Colombia
              p(data-aos='fade-up') Congreso de la República: dividido en <b>Senado y Cámara de Representantes</b>. Aprueba leyes, controla políticamente al Ejecutivo, y debate el presupuesto nacional. Puede citar ministros.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Reino Unido', :icon="require('@/assets/curso/unidad/img-47.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-49.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Reino Unido
              p(data-aos='fade-up') Parlamento: compuesto por la <b>Cámara de los Comunes</b> (electa por voto popular) y la <b>Cámara de los Lores</b> (revisión y consulta). El Ejecutivo depende del respaldo parlamentario (<i>parlamentarismo</i>).

      h2 Función Ejecutiva

      p.mb-4 La función ejecutiva se centra en la <b>implementación de políticas públicas</b>, la <b>administración del Estado</b> y la <b>gestión de los recursos públicos</b>.

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Colombia")
              p El <b>Presidente de la República</b> es jefe de Estado y jefe de gobierno, elegido por voto popular. Dirige la política nacional, relaciones exteriores y seguridad. Cuenta con ministros para áreas específicas (salud, educación, economía, etc.).
            .div(titulo="Francia")
              p Sistema <b>semipresidencialista</b>. El <b>Presidente</b> maneja asuntos exteriores y seguridad, mientras que el <b>Primer Ministro</b> lidera la administración interna y responde ante el Parlamento, equilibrando el poder entre Ejecutivo y Legislativo.
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')

      h2 Función Judicial
      p.mb-4 La función judicial vela por la <b>aplicación justa de las leyes</b>, la <b>resolución de disputas</b> y la <b>protección de derechos</b>.

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Colombia
                p Compuesto por la <b>Corte Constitucional</b> (garantiza la supremacía constitucional), la <b>Corte Suprema de Justicia</b> (asuntos penales y civiles) y el <b>Consejo de Estado</b> (litigios administrativos).
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Estados Unidos
                p El <b>Tribunal Supremo</b> interpreta la Constitución y puede declarar inconstitucionales leyes o decisiones del Ejecutivo. El sistema de <i>checks</i> and balances permite que el Judicial limite excesos de los otros poderes, asegurando el equilibrio institucional.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-1.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
        .col-12.col-xl-11
          p Desde la perspectiva administrativa, las funciones legislativa, ejecutiva y judicial del Estado se articulan para garantizar un gobierno democrático, eficaz y transparente. Cada una cumple un papel insustituible en el equilibrio de poderes, asegurando la legalidad, la participación ciudadana y la justicia.

      .row.bg-azul.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto El rol del Estado en el desarrollo social y económico
            p.mb-5(data-aos="fade-up") Se invita a leer el documento El rol del Estado en el desarrollo social y económico , donde se aborda cómo la intervención estatal influye en la equidad, el bienestar y el crecimiento económico de las sociedades modernas.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_El rol del Estado en el desarrollo social y económico.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> El rol del Estado en el desarrollo social y económico
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')


      .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important').mb-5
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=FReumE4uC84") [Vídeo] Aprendizaje Jurídico. (2021). Formas de Estado y sistemas de gobierno.
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.funcionesdel.com/sociedad/funciones_del_estado.html") Funciones del. (s.f.). Funciones del Estado.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Formas de Estado y sistemas de gobierno',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes afirmaciones describe mejor un Estado unitario?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es una unión de Estados soberanos que conservan su independencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se basa en la descentralización total del poder en los gobiernos regionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Posee un único gobierno central que controle la totalidad del territorio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Está compuesto por diversos Estados con autonomía plena y un gobierno común.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la principal diferencia entre un Estado federal y una confederación?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En el Estado federal, los Estados miembros tienen plena soberanía y pueden retirarse libremente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'En la confederación, existe un gobierno central fuerte que rige sobre los Estados miembros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'En el Estado federal, los Estados tienen autonomía en algunas áreas, pero están subordinados a un gobierno central.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'En la confederación, los Estados miembros carecen de independencia política.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'En un sistema parlamentario, ¿quién elige al jefe de gobierno?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El poder judicial', esCorrecta: false },
            {
              id: 'b',
              texto: 'La ciudadanía mediante votación directa',
              esCorrecta: false,
            },
            { id: 'c', texto: 'El parlamento.', esCorrecta: true },
            { id: 'd', texto: 'El jefe de Estado', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una característica distintiva del sistema presidencialista?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El jefe de gobierno es elegido por el parlamento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Existe una clara separación de poderes entre el Ejecutivo y el Legislativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El Presidente puede ser destituido mediante una moción de censura parlamentaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El gobierno se mantiene mientras conserve la confianza del parlamento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes funciones NO corresponden a las funciones fundamentales del Estado?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Seguridad y justicia', esCorrecta: false },
            { id: 'b', texto: 'Administración pública', esCorrecta: false },
            { id: 'c', texto: 'Desarrollo económico.', esCorrecta: true },
            { id: 'd', texto: 'Legislación', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
