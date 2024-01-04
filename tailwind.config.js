/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html'
  ],
  theme: {
    extend: {
      'height':{
        '100':'100vh',
        'card-sm':'540px',
        'temp':'340px'
      },
      'width':{
        'card-lg':'490px',
        'temp':'340px',
        'lab':'270px'
      },
      
      'borderRadius':{
        'card-sm':'48px',
        'card-border':'66.71px',
        'label':'1389.67px',
        'input-sm':'999px',
        'round':'100%'
      },
      'colors':{
        'sub':'#3F3198',
        'assets':'#3f319880',
        'error':'#ff0000',
        'pass':'',
        'temp-col':'radial-gradient(96.71% 96.71% at 50% 21.83%, #FFF 0%, rgba(255, 255, 255, 0.13) 100%)',
        'back':'radial-gradient(122.94% 61.75% at 50% 0%, #5451AC 0%, rgba(178, 164, 252, 0.00) 100%), #F59660',
      },
      'backgroundColor':{
        'temp-rad-bg':'radial-gradient(96.71% 96.71% at 50% 21.83%, #FFF 0%, rgba(255, 255, 255, 0.13) 100%)',
      },
      'padding':{
        'sm':'16px',
        'inp':'10px 8px',
      },
      'lineHeight':{
        'temp-lg':'80px',
      },

      'fontSize':{
        'sm':'24px',
        'lg':'34px',
        'label-text':'20px',
        'label-text-sm':'15px',
        'temp-lg':'240px'
      },
      'borderWidth':{
        'input':'1px'
      },
      'borderColor':{
        'input':'rgba(0, 0, 0, 0.19)'
      },
      'fontFamily':{
        'head':'Poppins',
        'sub':'Poppins',
        'temp':'IBM Plex Sans Hebrew',
      }
    },
  },
  plugins: [],
}

