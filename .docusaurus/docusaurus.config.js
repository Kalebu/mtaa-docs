export default {
  "title": "Mtaa Documentation",
  "tagline": "easy retrieve locations in Tanzania",
  "url": "https://kalebu.github.io",
  "baseUrl": "/mtaa-docs/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/4-2-python-logo-picture_64x64.ico",
  "organizationName": "kalebu",
  "projectName": "mtaa-docs",
  "themeConfig": {
    "navbar": {
      "title": "Mtaa",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/4-2-python-logo-picture.png"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Tutorial",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/kalebu/mtaa",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Documentation",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/mtaa"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/mtaa"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/j_kalebu"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/kalebu/mtaa"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Mtaa, Inc. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/kalebu/Work/Personal/Opensource/docs/mtaa-docs/sidebars.js",
          "editUrl": "https://github.com/Kalebu/mtaa-docs/edit/main/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/Kalebu/mtaa-docs/edit/main//blog/"
        },
        "theme": {
          "customCss": "/home/kalebu/Work/Personal/Opensource/docs/mtaa-docs/src/css/custom.css"
        }
      }
    ],
    [
      "redocusaurus",
      {
        "specs": [
          {
            "spec": "openapi.yaml"
          }
        ]
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};