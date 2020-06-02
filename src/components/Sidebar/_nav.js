export default {
  items: [
    {
      name: "Home",
      url: "/Home",
      icon: "fas fa-home",
    },
    {
      title: true,
      name: "MIT",
      wrapper: {
        // optional wrapper object
        element: "span", // required valid HTML5 element tag
        attributes: {}, // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "", // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "3.091",
      url: "/3.091",
      icon: "fas fa-flask",
      children: [
        {
          name: "Lecture Notes",
          url: "/3.091/Lecture",
          icon: "fas fa-flask",
        },
        {
          name: "Crib Sheets",
          url: "/3.091/Crib",
          icon: "fas fa-flask",
        },
      ],
    },
    {
      name: "6.006",
      url: "/6.006",
      icon: "fas fa-project-diagram",
      children: [
        {
          name: "Lecture Notes",
          url: "/6.006/Lecture",
          icon: "fas fa-project-diagram",
        },
        {
          name: "Recitation Notes",
          url: "/6.006/Recitation",
          icon: "fas fa-project-diagram",
        },
        {
          name: "Crib Sheets",
          url: "/6.006/Crib",
          icon: "fas fa-project-diagram",
        },
      ],
    },
    {
      name: "6.009",
      url: "/6.009",
      icon: "fas fa-code",
      children: [
        {
          name: "Lecture Notes",
          url: "/6.009/Lecture",
          icon: "fas fa-code",
        },
        {
          name: "Tutorial Notes",
          url: "/6.009/Tutorial",
          icon: "fas fa-code",
        },
      ],
    },
    {
      name: "6.031",
      url: "/6.031",
      icon: "fas fa-laptop",
      children: [
        {
          name: "Reading Notes",
          url: "/6.031/Readings",
          icon: "fas fa-laptop",
        },
        {
          name: "Crib Sheets",
          url: "/6.031/Crib",
          icon: "fas fa-laptop",
        },
      ],
    },
    {
      name: "6.033",
      url: "/6.033",
      icon: "fas fa-sitemap",
      children: [
        {
          name: "Lecture Notes",
          url: "/6.033/Lecture",
          icon: "fas fa-sitemap",
        },
      ],
    },
    {
      name: "6.036",
      url: "/6.036",
      icon: "fas fa-code-branch",
      children: [
        {
          name: "Lecture Notes",
          url: "/6.036/Lecture",
          icon: "fas fa-code-branch",
        },
        {
          name: "Crib Sheets",
          url: "/6.036/Crib",
          icon: "fas fa-code-branch",
        },
      ],
    },
    {
      name: "6.042",
      url: "/6.042",
      icon: "fas fa-calculator",
      children: [
        {
          name: "Textbook Notes",
          url: "/6.042/Textbook",
          icon: "fas fa-calculator",
        },
        {
          name: "Problem Sets",
          url: "/6.042/Pset",
          icon: "fas fa-calculator",
        },
        {
          name: "Crib Sheets",
          url: "/6.042/Crib",
          icon: "fas fa-calculator",
        },
      ],
    },
    {
      name: "6.046",
      url: "/6.046",
      icon: "fas fa-infinity",
      children: [
        {
          name: "Lecture Notes",
          url: "/6.046/Lecture",
          icon: "fas fa-infinity",
        },
        {
          name: "Recitation Notes",
          url: "/6.046/Recitation",
          icon: "fas fa-infinity",
        },
        {
          name: "Crib Sheets",
          url: "/6.046/Crib",
          icon: "fas fa-infinity",
        },
      ],
    },
    {
      name: "6.08",
      url: "/6.08",
      icon: "fas fa-microchip",
      children: [
        {
          name: "Lecture Notes",
          url: "/6.08/Lecture",
          icon: "fas fa-microchip",
        },
        {
          name: "Crib Sheets",
          url: "/6.08/Crib",
          icon: "fas fa-microchip",
        },
      ],
    },
    {
      name: "7.012",
      url: "/7.012",
      icon: "fas fa-dna",
      children: [
        {
          name: "Lecture Notes",
          url: "/7.012/Lecture",
          icon: "fas fa-dna",
        },
        {
          name: "Recitation Notes",
          url: "/7.012/Recitation",
          icon: "fas fa-dna",
        },
      ],
    },
    {
      name: "14.02",
      url: "/14.02",
      icon: "fas fa-donate",
      children: [
        {
          name: "Textbook Notes",
          url: "/14.02/Textbook",
          icon: "fas fa-donate",
        },
        {
          name: "Crib Sheets",
          url: "/14.02/Crib",
          icon: "fas fa-donate",
        },
      ],
    },
    {
      name: "14.70",
      url: "/icons",
      icon: "fas fa-map",
      children: [
        {
          name: "Lecture Notes",
          url: "/14.70/Lecture",
          icon: "fas fa-map",
        },
      ],
    },
    {
      name: "21M.011",
      url: "/21M.011",
      icon: "fas fa-music",
      children: [
        {
          name: "Study Sheets",
          url: "/21M.011/Crib",
          icon: "fas fa-music",
        },
      ],
    },
    {
      divider: true,
    },
    {
      title: true,
      name: "Buffalo Grove HS",
    },
    {
      name: "AP Physics 1",
      url: "/APPhysics1/Home",
      icon: "fas fa-cogs",
    },
    {
      name: "AP Physics C",
      url: "/APPhysicsC/APPhysicsC",
      icon: "fas fa-lightbulb",
    },
    {
      name: "AP Economics",
      url: "/APEcon/APEcon",
      icon: "fas fa-chart-line",
    },
    {
      name: "AP Calculus BC",
      url: "/APCalcBC/APCalcBC",
      icon: "fas fa-pencil-alt",
    },
    {
      name: "Multivariable Calculus",
      url: "/Calc3/Calc3",
      icon: "fas fa-chart-area",
    },
    {
      name: "Differential Equations",
      url: "/DiffEq/DiffEq",
      icon: "fas fa-superscript",
    },
  ],
};
