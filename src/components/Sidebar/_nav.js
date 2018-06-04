export default {
  items: [
    {
      name: 'Recently Uploaded',
      url: '/dashboard',
      icon: 'icon-clock',
//      badge: {
//        variant: 'info',
//        text: 'NEW'
//      }
    },
    {
      title: true,
      name: 'MIT',
      wrapper: {            // optional wrapper object
        element: "span",      // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ""             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: '3.091',
      url: '/3.091',
      icon: 'fas fa-flask',
      children: [
        {
          name: 'Lecture Notes',
          url: '/3.091/Lecture',
          icon: 'fas fa-flask'
        },
        {
          name: 'Recitation Notes',
          url: '/3.091/Recitation',
          icon: 'fas fa-flask'
        },
        {
          name: 'Crib Sheets',
          url: '/3.091/Crib',
          icon: 'fas fa-flask'
        }
      ]
    },
    {
      name: '6.006',
      url: '/6.006',
      icon: 'fas fa-project-diagram',
      children: [
        {
          name: 'Lecture Notes',
          url: '/6.006/Lecture',
          icon: 'fas fa-project-diagram'
        },
        {
          name: 'Recitation Notes',
          url: '/6.006/Recitation',
          icon: 'fas fa-project-diagram'
        },
        {
          name: 'Crib Sheets',
          url: '/6.006/Crib',
          icon: 'fas fa-project-diagram'
        }
    ]},
      {
      name: '6.009',
      url: '/6.009',
      icon: 'fas fa-code',
      children: [
        {
          name: 'Lecture Notes',
          url: '/6.009/Lecture',
          icon: 'fas fa-code'
        },
        {
          name: 'Tutorial Notes',
          url: '/6.009/Tutorial',
          icon: 'fas fa-code'
        }
    ]},
    {
      name: '6.042',
      url: '/6.042',
      icon: 'fas fa-calculator',
      children: [
        {
          name: 'Textbook Notes',
          url: '/6.042/Textbook',
          icon: 'fas fa-calculator'
        },
        {
          name: 'Problem Sets',
          url: '/6.042/Pset',
          icon: 'fas fa-calculator'
        },
        {
          name: 'Crib Sheets',
          url: '/6.042/Crib',
          icon: 'fas fa-calculator'
        }
      ]
    },
    {
      name: '6.08',
      url: '/6.08',
      icon: 'fas fa-server',
      children: [
        {
          name: 'Lecture Notes',
          url: '/6.08/Lecture',
          icon: 'fas fa-server'
        },
        {
          name: 'Crib Sheets',
          url: '/6.08/Crib',
          icon: 'fas fa-server'
        }
      ]
    },
    {
      name: '7.012',
      url: '/7.012',
      icon: 'fas fa-dna',
      children: [
        {
          name: 'Lecture Notes',
          url: '/7.012/Lecture',
          icon: 'fas fa-dna'
        },
        {
          name: 'Recitation Notes',
          url: '/7.012/Recitation',
          icon: 'fas fa-dna'
        },
        {
          name: 'Problem Sets',
          url: '/7.012/Pset',
          icon: 'fas fa-dna'
        }
      ]
    },
    {
      name: '14.70',
      url: '/icons',
      icon: 'fas fa-map',
      children: [
        {
          name: 'Lecture Notes',
          url: '/14.70/Lecture',
          icon: 'fas fa-map'
        }
      ]
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Buffalo Grove HS'
    },
    {
      name: 'AP Physics 1',
      url: '/APPhysics1',
      icon: 'fas fa-cogs',
    },
    {
      name: 'AP Physics C',
      url: '/APPhysicsC',
      icon: 'fas fa-lightbulb',
    },
    {
      name: 'AP Economics',
      url: '/APEcon',
      icon: 'fas fa-chart-line',
    },
    {
      name: 'AP Calculus BC',
      url: '/APCalcBC',
      icon: 'fas fa-pencil-alt',
    },
    {
      name: 'Multivariable Calc',
      url: '/Calc3',
      icon: 'fas fa-chart-area',
    },
    {
      name: 'Diff Eq',
      url: '/DiffEq',
      icon: 'fas fa-superscript',
    }
  ]
};
