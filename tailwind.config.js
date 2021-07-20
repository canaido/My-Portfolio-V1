const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  presets: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    extend: {
      colors: {
        "portfolio":{
          1000:"#B73B50",
          2000:"#D9775A",
          3000:"#EDF3F1",
          4000:"#ECE81A",
          5000:"#22182D",
          6000:"#bfbfbf",
        },
        "todo":{
          1000:"#ecaa61",
          2000:"#4489af",
          3000:"#995a57",
          4000:"#7858a3",
          5000:"#261e2b",
        },
        "weather":{
          1000:"#5cb4ec",
          2000:"#E6B656",
          3000:"#D7CC88",
          4000:"#D23B66",
          5000:"#bfbfbf",
          6000:"#32424e",
        },
        "red": {
          50: "#fff9f9",
      
          100: "#fff3f3",
      
          200: "#ffeeee",
      
          300: "#ffe8e8",
      
          400: "#ffe3e3",
      
          500: "#ffdddd",
      
          600: "#ffd7d7",
      
          700: "#ffd1d1",
      
          800: "#ffcccc",
      
          900: "#ffc6c6",
      
          1000: "#ffc0c0",
      
          1100: "#ffbaba",
      
          1200: "#ffb4b4",
      
          1300: "#ffaeae",
      
          1400: "#ffa8a8",
      
          1500: "#ffa2a2",
      
          1600: "#ff9b9b",
      
          1700: "#ff9595",
      
          1800: "#ff8e8e",
      
          1900: "#ff8787",
      
          2000: "#ff8080",
      
          2100: "#ff7979",
      
          2200: "#ff7272",
      
          2300: "#ff6a6a",
      
          2400: "#ff6161",
      
          2500: "#ff5858",
      
          2600: "#ff4e4e",
      
          2700: "#ff4343",
      
          2800: "#ff3636",
      
          2900: "#ff2424",
      
        },
        "vermillion": {
          50: "#fffaf9",
      
          100: "#fff5f4",
      
          200: "#fff0ee",
      
          300: "#ffebe9",
      
          400: "#ffe6e3",
      
          500: "#ffe1de",
      
          600: "#ffdcd8",
      
          700: "#ffd7d3",
      
          800: "#ffd2cd",
      
          900: "#ffcdc7",
      
          1000: "#ffc8c2",
      
          1100: "#ffc3bc",
      
          1200: "#ffbeb6",
      
          1300: "#ffb8b0",
      
          1400: "#ffb3aa",
      
          1500: "#ffaea4",
      
          1600: "#ffa99d",
      
          1700: "#ffa397",
      
          1800: "#ff9e90",
      
          1900: "#ff9889",
      
          2000: "#ff9282",
      
          2100: "#ff8c7b",
      
          2200: "#ff8674",
      
          2300: "#ff806c",
      
          2400: "#ff7a63",
      
          2500: "#ff735a",
      
          2600: "#ff6c50",
      
          2700: "#ff6545",
      
          2800: "#ff5e38",
      
          2900: "#ff5628",
      
        },
        "gamboge": {
          50: "#fffbfa",
      
          100: "#fff8f5",
      
          200: "#fff5f0",
      
          300: "#fff2eb",
      
          400: "#ffefe6",
      
          500: "#ffece0",
      
          600: "#ffe9db",
      
          700: "#ffe5d6",
      
          800: "#ffe2d1",
      
          900: "#ffdfcb",
      
          1000: "#ffdcc6",
      
          1100: "#ffd9c0",
      
          1200: "#ffd6ba",
      
          1300: "#ffd2b5",
      
          1400: "#ffcfaf",
      
          1500: "#ffcca9",
      
          1600: "#ffc9a2",
      
          1700: "#ffc59c",
      
          1800: "#ffc295",
      
          1900: "#ffbf8f",
      
          2000: "#ffbb88",
      
          2100: "#ffb880",
      
          2200: "#ffb579",
      
          2300: "#ffb170",
      
          2400: "#ffae68",
      
          2500: "#ffab5f",
      
          2600: "#ffa754",
      
          2700: "#ffa449",
      
          2800: "#ffa03b",
      
          2900: "#ff9d2a",
      
        },
        "gold": {
          50: "#fffefa",
      
          100: "#fffdf6",
      
          200: "#fffcf2",
      
          300: "#fffbed",
      
          400: "#fffae9",
      
          500: "#fffae4",
      
          600: "#fff9df",
      
          700: "#fff8db",
      
          800: "#fff7d6",
      
          900: "#fff6d1",
      
          1000: "#fff6cc",
      
          1100: "#fff5c6",
      
          1200: "#fff4c1",
      
          1300: "#fff3bc",
      
          1400: "#fff2b6",
      
          1500: "#fff2b0",
      
          1600: "#fff1aa",
      
          1700: "#fff0a4",
      
          1800: "#ffef9e",
      
          1900: "#ffee97",
      
          2000: "#ffed90",
      
          2100: "#ffed89",
      
          2200: "#ffec81",
      
          2300: "#ffeb78",
      
          2400: "#ffea70",
      
          2500: "#ffe966",
      
          2600: "#ffe85b",
      
          2700: "#ffe84f",
      
          2800: "#ffe741",
      
          2900: "#ffe62e",
      
        },
        "lime_green": {
          50: "#fdfffa",
      
          100: "#fcfff6",
      
          200: "#fafff2",
      
          300: "#f9ffee",
      
          400: "#f7ffea",
      
          500: "#f6ffe5",
      
          600: "#f4ffe1",
      
          700: "#f3ffdc",
      
          800: "#f1ffd7",
      
          900: "#f0ffd3",
      
          1000: "#eeffce",
      
          1100: "#edffc9",
      
          1200: "#ebffc4",
      
          1300: "#eaffbe",
      
          1400: "#e8ffb9",
      
          1500: "#e6ffb3",
      
          1600: "#e5ffad",
      
          1700: "#e3ffa7",
      
          1800: "#e2ffa1",
      
          1900: "#e0ff9a",
      
          2000: "#deff93",
      
          2100: "#dcff8c",
      
          2200: "#dbff84",
      
          2300: "#d9ff7b",
      
          2400: "#d7ff73",
      
          2500: "#d5ff69",
      
          2600: "#d4ff5e",
      
          2700: "#d2ff52",
      
          2800: "#d0ff42",
      
          2900: "#ceff2e",
      
        },
        "chartreuse": {
          50: "#fbfffa",
      
          100: "#f8fff6",
      
          200: "#f5fff2",
      
          300: "#f2ffee",
      
          400: "#efffe9",
      
          500: "#ecffe5",
      
          600: "#e8ffe0",
      
          700: "#e5ffdc",
      
          800: "#e2ffd7",
      
          900: "#deffd2",
      
          1000: "#dbffcd",
      
          1100: "#d7ffc8",
      
          1200: "#d4ffc3",
      
          1300: "#d0ffbe",
      
          1400: "#ccffb8",
      
          1500: "#c8ffb3",
      
          1600: "#c5ffad",
      
          1700: "#c1ffa7",
      
          1800: "#bdffa0",
      
          1900: "#b8ff99",
      
          2000: "#b4ff92",
      
          2100: "#b0ff8b",
      
          2200: "#abff83",
      
          2300: "#a7ff7b",
      
          2400: "#a2ff72",
      
          2500: "#9dff68",
      
          2600: "#98ff5e",
      
          2700: "#92ff51",
      
          2800: "#8cff42",
      
          2900: "#86ff2f",
      
        },
        "harlequin": {
          50: "#fbfffa",
      
          100: "#f7fff6",
      
          200: "#f3fff2",
      
          300: "#efffee",
      
          400: "#eaffea",
      
          500: "#e6ffe5",
      
          600: "#e2ffe1",
      
          700: "#deffdc",
      
          800: "#d9ffd7",
      
          900: "#d5ffd3",
      
          1000: "#d0ffce",
      
          1100: "#cbffc9",
      
          1200: "#c7ffc4",
      
          1300: "#c2ffbf",
      
          1400: "#bcffb9",
      
          1500: "#b7ffb4",
      
          1600: "#b2ffae",
      
          1700: "#acffa8",
      
          1800: "#a6ffa1",
      
          1900: "#a0ff9b",
      
          2000: "#9aff94",
      
          2100: "#93ff8d",
      
          2200: "#8cff85",
      
          2300: "#85ff7d",
      
          2400: "#7dff74",
      
          2500: "#74ff6b",
      
          2600: "#6bff60",
      
          2700: "#60ff53",
      
          2800: "#54ff44",
      
          2900: "#46ff30",
      
        },
        "emerald_green": {
          50: "#fafffa",
      
          100: "#f6fff6",
      
          200: "#f2fff2",
      
          300: "#eeffee",
      
          400: "#eaffea",
      
          500: "#e5ffe6",
      
          600: "#e1ffe1",
      
          700: "#dcffdd",
      
          800: "#d8ffd8",
      
          900: "#d3ffd3",
      
          1000: "#ceffcf",
      
          1100: "#c9ffca",
      
          1200: "#c4ffc5",
      
          1300: "#bfffbf",
      
          1400: "#b9ffba",
      
          1500: "#b4ffb5",
      
          1600: "#aeffaf",
      
          1700: "#a8ffa9",
      
          1800: "#a2ffa3",
      
          1900: "#9bff9d",
      
          2000: "#94ff96",
      
          2100: "#8dff8f",
      
          2200: "#86ff87",
      
          2300: "#7dff7f",
      
          2400: "#74ff77",
      
          2500: "#6bff6d",
      
          2600: "#60ff63",
      
          2700: "#53ff57",
      
          2800: "#44ff48",
      
          2900: "#30ff36",
      
        },
        "sea_green": {
          50: "#fafffb",
      
          100: "#f6fff8",
      
          200: "#f2fff4",
      
          300: "#eefff1",
      
          400: "#eaffed",
      
          500: "#e5ffe9",
      
          600: "#e1ffe6",
      
          700: "#dcffe2",
      
          800: "#d7ffde",
      
          900: "#d3ffda",
      
          1000: "#ceffd6",
      
          1100: "#c9ffd2",
      
          1200: "#c4ffce",
      
          1300: "#bfffca",
      
          1400: "#b9ffc6",
      
          1500: "#b3ffc1",
      
          1600: "#aeffbd",
      
          1700: "#a7ffb8",
      
          1800: "#a1ffb4",
      
          1900: "#9bffaf",
      
          2000: "#94ffaa",
      
          2100: "#8dffa4",
      
          2200: "#85ff9f",
      
          2300: "#7dff99",
      
          2400: "#74ff93",
      
          2500: "#6aff8d",
      
          2600: "#60ff86",
      
          2700: "#53ff7f",
      
          2800: "#43ff77",
      
          2900: "#2fff6f",
      
        },
        "turquoise": {
          50: "#fafffc",
      
          100: "#f6fffa",
      
          200: "#f2fff8",
      
          300: "#eefff6",
      
          400: "#eafff4",
      
          500: "#e5fff2",
      
          600: "#e1fff0",
      
          700: "#dcffee",
      
          800: "#d8ffec",
      
          900: "#d3ffe9",
      
          1000: "#ceffe7",
      
          1100: "#c9ffe5",
      
          1200: "#c4ffe3",
      
          1300: "#bfffe0",
      
          1400: "#b9ffde",
      
          1500: "#b4ffdc",
      
          1600: "#aeffda",
      
          1700: "#a8ffd7",
      
          1800: "#a1ffd5",
      
          1900: "#9bffd2",
      
          2000: "#94ffd0",
      
          2100: "#8dffcd",
      
          2200: "#85ffcb",
      
          2300: "#7dffc8",
      
          2400: "#74ffc5",
      
          2500: "#6affc2",
      
          2600: "#60ffbf",
      
          2700: "#53ffbc",
      
          2800: "#43ffb9",
      
          2900: "#2fffb6",
      
        },
        "cyan": {
          50: "#fbffff",
      
          100: "#f7ffff",
      
          200: "#f3ffff",
      
          300: "#eeffff",
      
          400: "#eaffff",
      
          500: "#e6ffff",
      
          600: "#e1ffff",
      
          700: "#ddffff",
      
          800: "#d8ffff",
      
          900: "#d4ffff",
      
          1000: "#cfffff",
      
          1100: "#caffff",
      
          1200: "#c5ffff",
      
          1300: "#c0ffff",
      
          1400: "#bbffff",
      
          1500: "#b5ffff",
      
          1600: "#afffff",
      
          1700: "#aaffff",
      
          1800: "#a3ffff",
      
          1900: "#9dffff",
      
          2000: "#96ffff",
      
          2100: "#8fffff",
      
          2200: "#87ffff",
      
          2300: "#7fffff",
      
          2400: "#76ffff",
      
          2500: "#6cffff",
      
          2600: "#61ffff",
      
          2700: "#55ffff",
      
          2800: "#45ffff",
      
          2900: "#30ffff",
      
        },
        "cerulean": {
          50: "#fafcff",
      
          100: "#f4f9ff",
      
          200: "#eff7ff",
      
          300: "#eaf4ff",
      
          400: "#e5f2ff",
      
          500: "#e0efff",
      
          600: "#daedff",
      
          700: "#d5eaff",
      
          800: "#cfe8ff",
      
          900: "#cae5ff",
      
          1000: "#c4e3ff",
      
          1100: "#bfe0ff",
      
          1200: "#b9deff",
      
          1300: "#b3dbff",
      
          1400: "#add9ff",
      
          1500: "#a7d6ff",
      
          1600: "#a1d4ff",
      
          1700: "#9bd1ff",
      
          1800: "#94cfff",
      
          1900: "#8dcdff",
      
          2000: "#86caff",
      
          2100: "#7fc8ff",
      
          2200: "#77c5ff",
      
          2300: "#6fc3ff",
      
          2400: "#66c0ff",
      
          2500: "#5dbeff",
      
          2600: "#53bcff",
      
          2700: "#48b9ff",
      
          2800: "#3ab7ff",
      
          2900: "#28b4ff",
      
        },
        "cobalt_blue": {
          50: "#f9f9ff",
      
          100: "#f3f4ff",
      
          200: "#edf0ff",
      
          300: "#e7ebff",
      
          400: "#e0e6ff",
      
          500: "#dae1ff",
      
          600: "#d4dcff",
      
          700: "#ced7ff",
      
          800: "#c8d2ff",
      
          900: "#c2cdff",
      
          1000: "#bcc8ff",
      
          1100: "#b6c3ff",
      
          1200: "#afbeff",
      
          1300: "#a9b9ff",
      
          1400: "#a3b5ff",
      
          1500: "#9cb0ff",
      
          1600: "#96abff",
      
          1700: "#8fa6ff",
      
          1800: "#88a1ff",
      
          1900: "#819cff",
      
          2000: "#7a97ff",
      
          2100: "#7393ff",
      
          2200: "#6b8eff",
      
          2300: "#6389ff",
      
          2400: "#5b84ff",
      
          2500: "#527fff",
      
          2600: "#497aff",
      
          2700: "#3f75ff",
      
          2800: "#3270ff",
      
          2900: "#236bff",
      
        },
        "phthalo_blue": {
          50: "#f8f8ff",
      
          100: "#f1f1ff",
      
          200: "#eaebff",
      
          300: "#e4e4ff",
      
          400: "#ddddff",
      
          500: "#d6d7ff",
      
          600: "#d0d0ff",
      
          700: "#c9caff",
      
          800: "#c3c3ff",
      
          900: "#bcbdff",
      
          1000: "#b5b6ff",
      
          1100: "#afb0ff",
      
          1200: "#a8a9ff",
      
          1300: "#a1a2ff",
      
          1400: "#9a9cff",
      
          1500: "#9495ff",
      
          1600: "#8d8eff",
      
          1700: "#8688ff",
      
          1800: "#7f81ff",
      
          1900: "#787aff",
      
          2000: "#7173ff",
      
          2100: "#6a6cff",
      
          2200: "#6265ff",
      
          2300: "#5b5eff",
      
          2400: "#5356ff",
      
          2500: "#4a4eff",
      
          2600: "#4146ff",
      
          2700: "#383dff",
      
          2800: "#2d33ff",
      
          2900: "#1f27ff",
      
        },
        "indigo": {
          50: "#f8f8ff",
      
          100: "#f2f1ff",
      
          200: "#ebeaff",
      
          300: "#e5e4ff",
      
          400: "#deddff",
      
          500: "#d8d6ff",
      
          600: "#d2d0ff",
      
          700: "#cbc9ff",
      
          800: "#c5c2ff",
      
          900: "#bfbcff",
      
          1000: "#b9b5ff",
      
          1100: "#b2aeff",
      
          1200: "#aca8ff",
      
          1300: "#a6a1ff",
      
          1400: "#a09aff",
      
          1500: "#9993ff",
      
          1600: "#938dff",
      
          1700: "#8d86ff",
      
          1800: "#867fff",
      
          1900: "#8078ff",
      
          2000: "#7a71ff",
      
          2100: "#7369ff",
      
          2200: "#6d62ff",
      
          2300: "#665aff",
      
          2400: "#5f52ff",
      
          2500: "#584aff",
      
          2600: "#5141ff",
      
          2700: "#4a37ff",
      
          2800: "#422bff",
      
          2900: "#3a1dff",
      
        },
        "violet": {
          50: "#faf8ff",
      
          100: "#f5f2ff",
      
          200: "#f0ecff",
      
          300: "#ece5ff",
      
          400: "#e7dfff",
      
          500: "#e3d9ff",
      
          600: "#ded2ff",
      
          700: "#daccff",
      
          800: "#d5c6ff",
      
          900: "#d1bfff",
      
          1000: "#ccb9ff",
      
          1100: "#c8b2ff",
      
          1200: "#c4acff",
      
          1300: "#c0a5ff",
      
          1400: "#bb9fff",
      
          1500: "#b798ff",
      
          1600: "#b392ff",
      
          1700: "#af8bff",
      
          1800: "#ab84ff",
      
          1900: "#a77dff",
      
          2000: "#a376ff",
      
          2100: "#9f6fff",
      
          2200: "#9b67ff",
      
          2300: "#975fff",
      
          2400: "#9457ff",
      
          2500: "#904eff",
      
          2600: "#8c45ff",
      
          2700: "#893bff",
      
          2800: "#852fff",
      
          2900: "#821fff",
      
        },
        "mulberry": {
          50: "#fcf9ff",
      
          100: "#faf3ff",
      
          200: "#f9edff",
      
          300: "#f7e8ff",
      
          400: "#f5e2ff",
      
          500: "#f3dcff",
      
          600: "#f1d6ff",
      
          700: "#efd1ff",
      
          800: "#edcbff",
      
          900: "#ebc5ff",
      
          1000: "#eabfff",
      
          1100: "#e8b9ff",
      
          1200: "#e6b3ff",
      
          1300: "#e5adff",
      
          1400: "#e3a6ff",
      
          1500: "#e1a0ff",
      
          1600: "#e09aff",
      
          1700: "#de93ff",
      
          1800: "#dd8cff",
      
          1900: "#db86ff",
      
          2000: "#da7fff",
      
          2100: "#d877ff",
      
          2200: "#d770ff",
      
          2300: "#d568ff",
      
          2400: "#d45fff",
      
          2500: "#d257ff",
      
          2600: "#d14dff",
      
          2700: "#d042ff",
      
          2800: "#ce35ff",
      
          2900: "#cd24ff",
      
        },
        "orchid": {
          50: "#fff9fe",
      
          100: "#fff4fd",
      
          200: "#ffeffc",
      
          300: "#ffe9fb",
      
          400: "#ffe4fa",
      
          500: "#ffdef9",
      
          600: "#ffd9f8",
      
          700: "#ffd3f7",
      
          800: "#ffcef6",
      
          900: "#ffc8f5",
      
          1000: "#ffc3f5",
      
          1100: "#ffbdf4",
      
          1200: "#ffb7f3",
      
          1300: "#ffb1f2",
      
          1400: "#ffabf1",
      
          1500: "#ffa5f1",
      
          1600: "#ff9ff0",
      
          1700: "#ff98ef",
      
          1800: "#ff92ee",
      
          1900: "#ff8bee",
      
          2000: "#ff84ed",
      
          2100: "#ff7dec",
      
          2200: "#ff75eb",
      
          2300: "#ff6deb",
      
          2400: "#ff65ea",
      
          2500: "#ff5ce9",
      
          2600: "#ff52e9",
      
          2700: "#ff46e8",
      
          2800: "#ff39e7",
      
          2900: "#ff26e7",
      
        },
        "cerise": {
          50: "#fff9fb",
      
          100: "#fff4f8",
      
          200: "#ffeef4",
      
          300: "#ffe9f1",
      
          400: "#ffe3ed",
      
          500: "#ffddea",
      
          600: "#ffd8e7",
      
          700: "#ffd2e3",
      
          800: "#ffcde0",
      
          900: "#ffc7dd",
      
          1000: "#ffc1d9",
      
          1100: "#ffbbd6",
      
          1200: "#ffb5d3",
      
          1300: "#ffafcf",
      
          1400: "#ffa9cc",
      
          1500: "#ffa3c9",
      
          1600: "#ff9dc6",
      
          1700: "#ff96c2",
      
          1800: "#ff8fbf",
      
          1900: "#ff89bc",
      
          2000: "#ff82b9",
      
          2100: "#ff7ab6",
      
          2200: "#ff73b2",
      
          2300: "#ff6baf",
      
          2400: "#ff62ac",
      
          2500: "#ff59a9",
      
          2600: "#ff4fa6",
      
          2700: "#ff44a2",
      
          2800: "#ff379f",
      
          2900: "#ff259c",
      
        },
        "crimson": {
          50: "#fff9f9",
      
          100: "#fff3f4",
      
          200: "#ffeeef",
      
          300: "#ffe8ea",
      
          400: "#ffe3e5",
      
          500: "#ffdde0",
      
          600: "#ffd7db",
      
          700: "#ffd2d6",
      
          800: "#ffccd1",
      
          900: "#ffc6cc",
      
          1000: "#ffc0c7",
      
          1100: "#ffbac1",
      
          1200: "#ffb4bc",
      
          1300: "#ffaeb7",
      
          1400: "#ffa8b2",
      
          1500: "#ffa2ac",
      
          1600: "#ff9ca7",
      
          1700: "#ff95a1",
      
          1800: "#ff8e9c",
      
          1900: "#ff8896",
      
          2000: "#ff8190",
      
          2100: "#ff798b",
      
          2200: "#ff7285",
      
          2300: "#ff6a7e",
      
          2400: "#ff6178",
      
          2500: "#ff5872",
      
          2600: "#ff4f6b",
      
          2700: "#ff4364",
      
          2800: "#ff365c",
      
          2900: "#ff2554",
      
        },
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateX(275px) translateY(-500px) scale(0)'
            },
            '90%': {
              opacity: '1',
              transform: 'translateX(0px) translateY(50px) scale(1)'
            },
            '92%': {
              opacity: '1',
              transform: 'translateX(0px) translateY(-40px) scale(1)'
            },
            '94%': {
              opacity: '1',
              transform: 'translateX(0px) translateY(30px) scale(1)'
            },
            '96%': {
              opacity: '1',
              transform: 'translateX(0px) translateY(-20px) scale(1)'
            },
            '98%': {
              opacity: '1',
              transform: 'translateX(0px) translateY(10px) scale(1)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateX(0px) translateY(0px) scale(1)'
            },
        },
        'fade-in': {
          '0%': {
              opacity: '0'
          },
          '90%': {
            opacity: '0'
        },
          '100%': {
              opacity: '1'
          },
      },
      'fade-in-cap': {
        '0%': {
            opacity: '0'
        },
        '50%': {
          opacity: '0'
      },
        '100%': {
            opacity: '1'
        },
    }
    },
    animation: {
        'fade-in-down': 'fade-in-down 3.0s ease-out',
        'fade-in': 'fade-in 4.0s ease-out',
        'fade-in-cap': 'fade-in 3.5s ease-out',
    }
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      112: '28rem',
      128: '32rem',
      144: '36rem',
      160: '40rem',
      176: '44rem',
      192: '48rem',
      208: '52rem',
      224: '56rem',
      240: '60rem',
      256: '64rem',
      272: '68rem',
      288: '72rem',
      304: '78rem',
      320: '82rem',
      336: '86rem',
      352: '90rem',
      368: '94rem',
      384: '98rem',
      400: '102rem',
      416: '106rem',
      432: '110rem',
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
    },
    backgroundColor: (theme) => theme('colors'),
    backgroundImage: {
      none: 'none',
      'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
    },
    backgroundOpacity: (theme) => theme('opacity'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor'),
    }),
    borderOpacity: (theme) => theme('opacity'),
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      help: 'help',
      'not-allowed': 'not-allowed',
    },
    divideColor: (theme) => theme('borderColor'),
    divideOpacity: (theme) => theme('borderOpacity'),
    divideWidth: (theme) => theme('borderWidth'),
    fill: { current: 'currentColor' },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      0: '0',
      DEFAULT: '1',
    },
    flexShrink: {
      0: '0',
      DEFAULT: '1',
    },
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    gap: (theme) => theme('spacing'),
    gradientColorStops: (theme) => theme('colors'),
    gridAutoColumns: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridAutoRows: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      'span-full': '1 / -1',
    },
    gridColumnEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridColumnStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-full': '1 / -1',
    },
    gridRowStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    gridRowEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    gridTemplateColumns: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
    },
    gridTemplateRows: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
    },
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      full: '100%',
      screen: '100vh',
    }),
    inset: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
      '-full': '-100%',
    }),
    keyframes: {
      spin: {
        to: {
          transform: 'rotate(360deg)',
        },
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(2)',
          opacity: '0',
        },
      },
      pulse: {
        '50%': {
          opacity: '.5',
        },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    maxHeight: (theme) => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      0: '0rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      ...breakpoints(theme('screens')),
    }),
    minHeight: {
      0: '0px',
      full: '100%',
      screen: '100vh',
    },
    minWidth: {
      0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      95: '0.95',
      100: '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    outline: {
      none: ['2px solid transparent', '2px'],
      white: ['2px dotted white', '2px'],
      black: ['2px dotted black', '2px'],
    },
    padding: (theme) => theme('spacing'),
    placeholderColor: (theme) => theme('colors'),
    placeholderOpacity: (theme) => theme('opacity'),
    ringColor: (theme) => ({
      DEFAULT: theme('colors.blue.500', '#3b82f6'),
      ...theme('colors'),
    }),
    ringOffsetColor: (theme) => theme('colors'),
    ringOffsetWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    ringOpacity: (theme) => ({
      DEFAULT: '0.5',
      ...theme('opacity'),
    }),
    ringWidth: {
      DEFAULT: '3px',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      45: '45deg',
      90: '90deg',
      180: '180deg',
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
    },
    skew: {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
    },
    space: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    stroke: {
      current: 'currentColor',
    },
    strokeWidth: {
      0: '0',
      1: '1',
      2: '2',
    },
    textColor: (theme) => theme('colors'),
    textOpacity: (theme) => theme('opacity'),
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },
    transitionDelay: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    transitionDuration: {
      DEFAULT: '150ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      DEFAULT: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    translate: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
      '-full': '-100%',
    }),
    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
    }),
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
    },
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled',
  ],
  variants: {
    accessibility: ['responsive', 'focus-within', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    animation: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundClip: ['responsive'],
    backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    backgroundImage: ['responsive'],
    backgroundOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    borderOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    boxSizing: ['responsive'],
    clear: ['responsive'],
    container: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive', 'group-hover', 'group-focus'],
    divideColor: ['responsive', 'dark'],
    divideOpacity: ['responsive', 'dark'],
    divideStyle: ['responsive'],
    divideWidth: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontWeight: ['responsive'],
    gap: ['responsive'],
    gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
    gridAutoColumns: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridAutoRows: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridColumnStart: ['responsive'],
    gridRow: ['responsive'],
    gridRowEnd: ['responsive'],
    gridRowStart: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridTemplateRows: ['responsive'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    justifyItems: ['responsive'],
    justifySelf: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus-within', 'focus'],
    overflow: ['responsive'],
    overscrollBehavior: ['responsive'],
    padding: ['responsive'],
    placeContent: ['responsive'],
    placeItems: ['responsive'],
    placeSelf: ['responsive'],
    placeholderColor: ['responsive', 'dark', 'focus'],
    placeholderOpacity: ['responsive', 'dark', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
    ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
    ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
    ringOpacity: ['responsive', 'dark', 'focus-within', 'focus'],
    ringWidth: ['responsive', 'focus-within', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    scale: ['responsive', 'hover', 'focus'],
    skew: ['responsive', 'hover', 'focus'],
    space: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    textOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    textOverflow: ['responsive'],
    textTransform: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    transitionDelay: ['responsive'],
    transitionDuration: ['responsive'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    translate: ['responsive', 'hover', 'focus'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive', 'focus-within', 'focus'],
  },
  plugins: [],
}
