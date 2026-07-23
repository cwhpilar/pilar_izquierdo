// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

    /*devToolbar herramientas de la barra de desarrollador */
    devToolbar: {
        // cerramos el menu
        enabled: false,
    },

    /* definimos para la internacionalización i18n */
    i18n: {
        //idioma por defecto en español
        defaultLocale: 'es',

        //definimos locales los directorios que hemos creado
        locales: ['es', 'en'],

        //busca las rutas
        routing: {
            // prefijo boleano true
            prefixDefaultLocale: true,
            // redireccionamiento  boleano true porque false
            redirectToDefaultLocale: true,
        }
    }


});
