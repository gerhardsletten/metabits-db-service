module.exports = {
  navigations: [
    {
      id: 'primary'
    }
  ],
  navigationItems: [
    {
      id: 'navitem-2',
      title: 'Hjem',
      page_id: '/',
      navigation_id: 'primary'
    },
    {
      id: 'navitem-3',
      title: 'Tjenester',
      page_id: '/tjenester',
      navigation_id: 'primary'
    },
    {
      id: 'navitem-4',
      title: 'Referanser',
      page_id: '/referanser',
      navigation_id: 'primary'
    },
    {
      id: 'navitem-5',
      title: 'Teknologi',
      page_id: '/teknologier',
      navigation_id: 'primary'
    },
    {
      id: 'navitem-6',
      title: 'Kontakt oss',
      page_id: '/kontakt-oss',
      navigation_id: 'primary'
    }
  ],
  pages: [
    {
      id: '/',
      title: 'Forside',
      type: 'homepage',
      banner_id: 'banner-1',
      metaField_id: 'meta-1'
    },
    {
      id: '/kontakt-oss',
      title: 'Om Metabits',
      lead: 'Vi i Metabits designer og utvikler nettsider, mobile løsninger og applikasjoner til nett. Vi leverer produkter til både små og store virksomheter. Gjennom dialog og et nært samarbeid finner vi veien til de beste løsningene for hver enkelt kunde.',
      content: '## Vi leverer kvalitet\n\nVårt fokus er å holde et konkurransedyktig prisnivå uten å kompromisse på kvaliteten. Uansett om prosjektet er stort eller lite, mener vi at et godt sluttresultat bare kan oppnås ved kvalitet i alle ledd i arbeidet.\n\n## Tett samarbeid for best mulig produkt\n\nEt godt samarbeid er alfa og omega for å utvikle akkurat de produktene dere ønsker dere. Deres kjennskap til målgruppe, bransje og konkurrenter er like viktig som våre kunnskaper om design og teknologi. Hvis avdelingene i virksomheten som senere skal bruke løsningen, blir involvert i prosjektet fra starten, skaper det både engasjement, eierskap og høy kompetanse.\n\n## Vi kan nettsider og applikasjoner!\n\nVi kjenner eZ Publish og WordPress ut og inn. Vi skriver web applikasjoner i CakePHP og utvikler applikasjoner til iPhone og iPad i Objective-C. Vi har også høy kompetanse innen HTML5 og webteknologi, som spiller en viktig rolle i nesten alt vi gjør.\n\n*Ta gjerne kontakt for et hyggelig samarbeid!*',
      type: 'contact',
      metaField_id: 'meta-2'
    },
    {
      id: '/tjenester',
      title: 'Design og utvikling',
      subTitle: 'Nettsider, mobile sider, apps og webbasert programvare',
      type: 'services'
    },
    {
      id: '/tjenester/design-og-usability',
      title: 'Design og usability',
      subTitle: 'Design av nettsider, apps og web applikasjoner',
      lead: 'Med utgangspunkt i brukervennlighet, et unikt visuelt uttrykk og forretningsmålene deres designer vi nettsider og applikasjoner fra trådskisser til ferdige designskisser. Vi kan designe nettsider og applikasjoner som en del av et fullstendig nettsideprosjekt eller som en egen tjeneste.',
      content: 'Hei verden\n\nEn ny linje',
      type: 'service',
      icon: 'pencil'
    },
    {
      id: '/tjenester/ios-applikasjoner',
      title: 'Mobile applikasjoner',
      subTitle: 'Utvikling av apps for iPhone, iPad og Android',
      lead: 'Med utgangspunkt i brukervennlighet, et unikt visuelt uttrykk og forretningsmålene deres designer vi nettsider og applikasjoner fra trådskisser til ferdige designskisser. Vi kan designe nettsider og applikasjoner som en del av et fullstendig nettsideprosjekt eller som en egen tjeneste.',
      content: 'Hei verden\n\nEn ny linje',
      type: 'service',
      icon: 'mobile'
    },
    {
      id: '/tjenester/webbasert-programvare',
      title: 'Webbasert programvare',
      subTitle: 'Utvikling av applikasjoner med webteknologi',
      lead: 'Vi utvikler fleksible nettsider som er tilpasset deres behov og ønsker, og som er enkle å vedlikeholde. Gjennom verktøy som eZ Publish og WordPress får dere tilgang til en verden av åpen kildekode.',
      content: 'Hei verden\n\nEn ny linje',
      type: 'service',
      icon: 'rocket'
    },
    {
      id: '/tjenester/mobile-nettsider',
      title: 'Mobile nettsider',
      subTitle: 'Responsive nettsider som tilpasser seg mindre skjermer',
      lead: 'Vi utvikler fleksible nettsider som er tilpasset deres behov og ønsker, og som er enkle å vedlikeholde. Gjennom verktøy som eZ Publish og WordPress får dere tilgang til en verden av åpen kildekode.',
      content: 'Hei verden\n\nEn ny linje',
      type: 'service',
      icon: 'globe'
    },
    {
      id: '/tjenester/utvikling-av-nettsider',
      title: 'Utvikling av nettsider',
      subTitle: 'Utvikling av nettsider med eZ Publish og Wordpress',
      lead: 'Vi utvikler fleksible nettsider som er tilpasset deres behov og ønsker, og som er enkle å vedlikeholde. Gjennom verktøy som eZ Publish og WordPress får dere tilgang til en verden av åpen kildekode.',
      content: 'Hei verden\n\nEn ny linje',
      type: 'service',
      icon: 'cog'
    },
    {
      id: '/tjenester/konsulent-oppdrag',
      title: 'Konsulentoppdrag',
      subTitle: 'Unik kompetanse på design, apps og webutvikling',
      lead: 'Vi utvikler fleksible nettsider som er tilpasset deres behov og ønsker, og som er enkle å vedlikeholde. Gjennom verktøy som eZ Publish og WordPress får dere tilgang til en verden av åpen kildekode.',
      content: 'Hei verden\n\nEn ny linje',
      type: 'service',
      icon: 'home'
    },
    {
      id: '/referanser',
      title: 'Referanser',
      subTitle: 'Verktøy for utvikling av nettsider, mobile apps',
      type: 'portfolios'
    },
    {
      id: '/teknologier',
      title: 'Teknologi og verktøy',
      subTitle: 'Verktøy for utvikling av nettsider, mobile apps',
      type: 'techs'
    },
    {
      id: '/teknologier/wordpress',
      title: 'WordPress',
      subTitle: 'Den populære publiseringsløsningen med mange muligheter',
      lead: 'Fra den ble lansert som et blogverktøy på tidlig 2000-tallet, har den utviklet seg til å bli en fullblods publiseringsløsning, som gjennom en plugin-arkitektur og et malsystem åpner opp for skreddersydde løsninger som krever lite ressurser og er enkle å bruke.',
      content: 'Hei verden\n\nEn ny linje',
      type: 'tech',
      icon: 'wordpress'
    }
  ],
  banners: [
    {
      id: 'banner-1',
      title: 'Utvikling av nettsider og applikasjoner',
      lead: 'Planlegger dere en ny nettside eller et redesign av den eksisterende? Ta kontakt for å se hva vi kan gjøre!',
      image: 'https://www.metabits.no/wp-content/uploads/2011/01/banner1_mod.jpg',
      linkText: 'Se referanser',
      uri: '/referanser'
    }
  ],
  metaFields: [
    {
      id: 'meta-1',
      title: 'Metabits - Design og utvikling av nettsider og applikasjoner',
      description: 'Metabits designer og bygger nettsider, webapplikajsoner, mobile apps og nettsider',
      keywords: 'webdesgin, wordpress, ez publish'
    },
    {
      id: 'meta-2',
      title: 'Tjenester innen webdesign og utvikling av applikasjoner'
    }
  ]
}
