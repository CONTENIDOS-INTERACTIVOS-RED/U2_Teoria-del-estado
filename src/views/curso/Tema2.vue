<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Sistemas de Gobierno'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4.mx-0
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo-claro.p-4(data-aos="fade-up")
          p.mb-0 El término gobierno proviene del latín gubernare, que significa “dirigir” o “pilotar”, y a su vez del griego <i>kybernan</i>, utilizado originalmente por los navegantes para referirse al acto de dirigir un barco. Con el tiempo, esta noción fue transferida al ámbito político, para describir la acción de dirigir y administrar un Estado o comunidad política.

      p.mb-4 Desde las primeras civilizaciones, el gobierno ha sido una forma de organización del poder, inicialmente ligado estrechamente a lo religioso. En muchos casos, los gobernantes eran vistos como dioses o representantes de lo divino.

      ImagenInfografica.color-secundario.mb-4.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-28.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='31.8%' y='19%' numero='+')
          .h5.mb-2 Egipto (3100 a.C.)
          p Gobierno teocrático. El faraón concentraba todo el poder religioso y político; no existía división de poderes.
        .tarjeta.bg-white.p-4(x='56.8%' y='19%' numero='+')
          .h5.mb-2 Mesopotamia (3000 a.C.)
          p Autoridad central con funciones legislativas. Ejemplo: el <i>Código de Hammurabi</i>, primera gran compilación legal.
        .tarjeta.bg-white.p-4(x='79.8%' y='19%' numero='+')
          .h5.mb-2 Grecia (siglo V a.C.)
          p Diversidad de formas: en <b>Atenas</b>, democracia directa con participación ciudadana; en <b>Esparta</b>, diarquía militar y religiosa supervisada por un consejo de ancianos.

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
      
          h2 Roma y la institucionalización del poder

          p.mb-4 La civilización romana marcó un hito fundamental en la evolución del gobierno al desarrollar estructuras institucionales complejas que influyeron directamente en los modelos democráticos contemporáneos.

          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-29.svg', style='width: 80px')
                p.text-bold.mb-4.text-center República Romana (509–27 a.C.)
                p.px-1.text-small.mb-0.text-center Sistema con separación de poderes: magistrados electos, Senado legislativo, Asamblea Popular con poder de decisión. Modelo precursor de las democracias modernas.
            .col-10.col-md-8.col-lg-6.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-30.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Imperio Romano (27 a.C.–476 d.C.)
                p.px-1.text-small.mb-0.text-center Monarquía absoluta bajo el emperador, aunque se conservaron instituciones republicanas simbólicas.
      
      h2 Edad Media y modernidad: del feudalismo al absolutismo

      p.mb-4 Durante la Edad Media, el poder político se fragmentó:

      .row.mb-4.bg-morado-oscuro.p-4.py-xl-0(data-aos='fade-up')
        .col-12.col-xl-8.d-flex
          .my-auto.text-white
            p.mb-4 <b>Feudalismo (siglo IX–XV):</b> El rey era una figura simbólica. El poder real se concentraba en los señores feudales, con relaciones de vasallaje como base del sistema. La Iglesia tuvo fuerte influencia política.
            span <b>Monarquías absolutas (siglo XVI–XVIII):</b> Los reyes consolidaron el poder, reclamando autoridad absoluta. Un ejemplo paradigmático es <b>Luis XIV de Francia</b>, quien proclamó: "<i>El Estado soy yo.</i>"
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          h2 Revoluciones, Ilustración y nuevas formas de gobierno

          p.mb-4 El pensamiento ilustrado del siglo XVIII marcó un giro en la concepción del poder y del gobierno:

          .row.mb-4
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Montesquieu
                  p.text-small.px-4.text-center.pb-2 Planteó la <b>separación de poderes</b> (ejecutivo, legislativo, judicial).
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Rousseau
                  p.text-small.px-4.text-center.pb-2 Propuso la <b>soberanía popular</b> como base del poder legítimo.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Locke
                  p.text-small.px-4.text-center.pb-2 Defendió el <b>derecho a la libertad</b> y la propiedad.

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Este pensamiento influyó directamente en dos hechos clave:
          .bg-marron.p-4(data-aos='fade-up')
            p.mb-0 ●	<b>Revolución Francesa (1789):</b> Fin del absolutismo; establecimiento de los principios de la democracia y la república.<br><br>●	<b>Constitución de EE. UU. (1787):</b> Se implementó un modelo presidencialista con separación de poderes, influencia clave para las democracias contemporáneas.

      .row.bg-azul.bg-full-width.py-4.mb-5
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Comparación de los sistemas de gobierno: parlamentarismo, presidencialismo y semipresidencialismo
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Comparación de los sistemas de gobierno , donde se aborda el análisis comparado de los modelos parlamentario, presidencialista y semipresidencialista, con énfasis en su estructura, funcionamiento y efectos sobre la gobernabilidad y la representación democrática.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Comparación de los sistemas de gobierno.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Comparación de los sistemas de gobierno: parlamentarismo, presidencialismo y semipresidencialismo
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=tcgBoRZJIcg") [Vídeo] Canal UNED. (2023). Sistemas de gobierno: Presidencialismo y Parlamentarismo.
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.significados.com/gobierno/") Significados. (s.f.). Gobierno.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


      p
      
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
