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
      url: '/components',
      icon: 'fa-address-book-o',
      children: [
        {
          name: 'Lecture Notes',
          url: '/components/buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Recitation Notes',
          url: '/components/social-buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Crib Sheets',
          url: '/components/cards',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: '6.006',
      url: '/components',
      icon: 'fa-gears',
      children: [
        {
          name: 'Lecture Notes',
          url: '/components/forms',
          icon: 'icon-puzzle'
        },
        {
          name: 'Recitation Notes',
          url: '/components/modals',
          icon: 'icon-puzzle'
        },
        {
          name: 'Crib Sheets',
          url: '/components/switches',
          icon: 'icon-puzzle'
        }
    ]},
      {
      name: '6.009',
      url: '/components',
      icon: 'fa-laptop',
      children: [
        {
          name: 'Lecture Notes',
          url: '/components/tables',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tutorial Notes',
          url: '/components/tabs',
          icon: 'icon-puzzle'
        }
    ]},
    {
      name: '6.042',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Textbook Notes',
          url: '/icons/font-awesome',
          icon: 'icon-star'
        },
        {
          name: 'Problem Sets',
          url: '/icons/font-awesome',
          icon: 'icon-star'
        },
        {
          name: 'Crib Sheets',
          url: '/icons/font-awesome',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: '6.08',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Lecture Notes',
          url: '/icons/font-awesome',
          icon: 'icon-star'
        },
        {
          name: 'Crib Sheets',
          url: '/icons/font-awesome',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: '7.012',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Lecture Notes',
          url: '/icons/font-awesome',
          icon: 'icon-star'
        },
        {
          name: 'Recitation Notes',
          url: '/icons/font-awesome',
          icon: 'icon-star'
        },
        {
          name: 'Problem Sets',
          url: '/icons/font-awesome',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: '14.70',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Lecture Notes',
          url: '/icons/font-awesome',
          icon: 'icon-star'
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
      url: '/pages',
      icon: 'icon-star',
    },
    {
      name: 'AP Physics C',
      url: '/pages',
      icon: 'icon-star',
    },
    {
      name: 'AP Economics',
      url: '/pages',
      icon: 'icon-star',
    },
    {
      name: 'AP Calculus BC',
      url: '/pages',
      icon: 'icon-star',
    },
    {
      name: 'Multivariable Calc',
      url: '/pages',
      icon: 'icon-star',
    },
    {
      name: 'Diff Eq',
      url: '/pages',
      icon: 'icon-star',
    }
  ]
};
