import Logo from "./extensions/favicon.svg";
import favicon from "./extensions/favicon.svg";

export default {
  config: {
    locales: ["en"],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "DOWNLOAD A CAR",
        "app.components.LeftMenu.navbrand.workplace": "engineered by Outdated",
        "Auth.form.welcome.subtitle": "Welcome to the DOWNLOAD A CAR",
        "Auth.form.username.placeholder": "e.g. outdated",
        "Content Manager": "Content Editor",
        "HomePage.helmet.title": "DOWNLOAD A CAR",
        "Auth.form.email.placeholder": "e.g. outdated@teamparallel.gg",
        "Auth.form.firstname.placeholder": "e.g. Danny",
        "Auth.form.lastname.placeholder": "e.g. Parallel",
        "HomePage.welcome.congrats.content":
          "Welcome to the DOWNLOAD A CAR Backend.",
        "HomePage.welcome.congrats.content.bold": "",
        "Media Library": "Assets",
        "New entry": "New",
        "app.components.MarketplaceBanner.image.alt": "DOWNLOAD A CAR ",
        "Content Type Builder": "Content-Types Builder — DO NOT EDIT",
      },
    },
    auth: {
      logo: Logo,
    },
    head: {
      favicon: favicon,
    },
    menu: {
      logo: Logo,
    },
    head: {},
    tutorials: false,
    notifications: { release: false },
    theme: {
      sizes: {
        borderRadius: "10px",
      },
    },
  },

  bootstrap() {},
};
