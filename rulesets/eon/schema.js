// Egenskaper
// Styrka
// Tålighet
// Rörlighet
// Uppfattning
// Vilja
// Psyke
// Visdom
// Utstrålning

const character = {
  egenskaper: {
    styrka: 0,
    tålighet: 0,
    rörlighet: 0,
    uppfattning: 0,
    vilja: 0,
    psyke: 0,
    visdom: 0,
    utstrålning: 0
  },
  färdigheter: {
    STRID: {
      ARMBORST: {
        name: "Armborst",
        value: 0,
        stat: "UPP",
        initial: true
      },
      BÅGE: {
        name: "Båge",
        value: 0,
        stat: "UPP",
        initial: true
      },
      DOLK: {
        name: "Dolk",
        value: 0,
        stat: "RÖR",
        initial: true
      },
      KASTVAPEN: {
        name: "Kastvapen",
        value: 0,
        stat: "UPP",
        initial: true
      },
      KLUBBA: {
        name: "Klubba",
        value: 0,
        stat: "STY",
        initial: true
      },
      KEDJEVAPEN: {
        name: "Kedjevapen",
        value: 0,
        stat: "RÖR",
        initial: true
      },
      SKÖLD: {
        name: "Sköld",
        value: 0,
        stat: "RÖR",
        initial: true
      },
      SLAGSMÅL: {
        name: "Slagsmål",
        value: 0,
        stat: "STY",
        initial: true
      },
      SPJUT: {
        name: "Spjut",
        value: 0,
        stat: "RÖR",
        initial: true
      },
      STAV: {
        name: "STAV",
        value: 0,
        stat: "RÖR",
        initial: true
      },
      SVÄRD: {
        name: "Svärd",
        value: 0,
        stat: "RÖR",
        initial: true
      },
      YXA: {
        name: "Yxa",
        value: 0,
        stat: "STY",
        initial: true
      }
    },
    RÖRELSE: {
      DANSA: {
        name: "Dansa",
        value: 0,
        stat: "RÖR",
        initial: true
      },
      FINGERFÄRDIGHET: {
        name: "Fingerfärdighet",
        value: 0,
        stat: "RÖR",
        initial: true
      },
      GÖMMA: {
        name: "Gömma",
        value: 0,
        stat: "PSY",
        initial: true
      },
      HOPPA: {
        name: "Hoppa",
        value: 0,
        stat: "RÖR",
        initial: true
      },
      KLÄTTRA: {
        name: "Klättra",
        value: 0,
        stat: "RÖR",
        initial: true
      },
      LÅSDYRKNING: {
        name: "Låsdyrkning",
        value: 0,
        stat: "PSY",
        initial: false
      },
      SIMMA: {
        name: "Simma",
        value: 0,
        stat: "TÅL",
        initial: false
      },
      SMYGA: {
        name: "Smyga",
        value: 0,
        stat: "RÖR",
        initial: true
      },
      UNDVIKA: {
        name: "Undvika",
        value: 0,
        stat: "RÖR",
        initial: true
      }
    },
    MYSTIK: {
      CEREMONI: {
        name: "Ceremoni",
        value: 0,
        stat: "VIS",
        initial: false
      },
      FÖRNIMMA: {
        name: "Förnimma",
        value: 0,
        stat: "VIS",
        initial: false
      },
      FÖRVRÄNGA: {
        name: "Förvränga",
        value: 0,
        stat: "VIS",
        initial: false
      },
      KANALISERA: {
        name: "Kanalisera",
        value: 0,
        stat: "VIS",
        initial: false
      }
    },
    SOCIALA: {
      ARGUMENTERA: {
        name: "Argumentera",
        value: 0,
        stat: "PSY",
        initial: true
      },
      BERÄTTARKONST: {
        name: "Berättarkonst",
        value: 0,
        stat: "UTS",
        initial: true
      },
      CHARM: {
        name: "Charm",
        value: 0,
        stat: "UTS",
        initial: true
      },
      DUPERA: {
        name: "Dupera",
        value: 0,
        stat: "UTS",
        initial: true
      },
      GENOMSKÅDA: {
        name: "Genomskåda",
        value: 0,
        stat: "PSY",
        initial: true
      },
      HOVLIV: {
        name: "Hovliv",
        value: 0,
        stat: "PSY",
        initial: false
      },
      INJAGA_FRUKTAN: {
        name: "Injaga fruktan",
        value: 0,
        stat: "PSY",
        initial: true
      },
      LEDARSKAP: {
        name: "Ledarskap",
        value: 0,
        stat: "UTS",
        initial: true
      },
      SKUMRASKAFFÄRER: {
        name: "Skumraskaffärer",
        value: 0,
        stat: "PSY",
        initial: false
      },
      SPEL_DOBBEL: {
        name: "Spel & Dobbel",
        value: 0,
        stat: "PSY",
        initial: true
      },
      SÅNG_MUSIK: {
        name: "Sång & Musik",
        value: 0,
        stat: "UTS",
        initial: true
      }
    },
    KUNSKAP: {
      FILOSOFI: {
        name: "Filosofi",
        value: 0,
        stat: "VIS",
        initial: false
      },
      GEOGRAFI: {
        name: "Geografi",
        value: 0,
        stat: "VIS",
        initial: false
      },
      GIFTER_DROGER: {
        name: "Gifter & Droger",
        value: 0,
        stat: "VIS",
        initial: false
      },
      HANDEL: {
        name: "Handel",
        value: 0,
        stat: "VIS",
        initial: true
      },
      HISTORIA: {
        name: "Historia",
        value: 0,
        stat: "VIS",
        initial: false
      },
      KALKYLERA: {
        name: "Kalkylera",
        value: 0,
        stat: "VIS",
        initial: false
      },
      KIRURGI: {
        name: "Kirurgi",
        value: 0,
        stat: "VIS",
        initial: false
      },
      KRIGFÖRING: {
        name: "Krigföring",
        value: 0,
        stat: "VIS",
        initial: false
      },
      KULTURKÄNNEDOM: {
        name: "Kulturkännedom",
        value: 0,
        stat: "VIS",
        initial: false
      },
      LAGKUNSKAP: {
        name: "Lagkunskap",
        value: 0,
        stat: "VIS",
        initial: false
      },
      LÄKEKONST: {
        name: "Läkekonst",
        value: 0,
        stat: "VIS",
        initial: false
      },
      OCKULTISM: {
        name: "Ockultism",
        value: 0,
        stat: "VIS",
        initial: false
      },
      TEOLOGI: {
        name: "Teologi",
        value: 0,
        stat: "VIS",
        initial: false
      },
      TEORETISK_MAGI: {
        name: "Teoretisk Magi",
        value: 0,
        stat: "VIS",
        initial: false
      },
      UNDERVISA: {
        name: "Undervisa",
        value: 0,
        stat: "VIS",
        initial: false
      }
    },
    VILDMARK: {
      GENOMSÖKA: {
        name: "Genomsöka",
        value: 0,
        stat: "UPP",
        initial: true
      },
      JAKT_FISKE: {
        name: "Jakt & Fiske",
        value: 0,
        stat: "PSY",
        initial: false
      },
      KÖRA_VAGN: {
        name: "Köra Vagn",
        value: 0,
        stat: "RÖR",
        initial: true
      },
      MARSCH: {
        name: "Marsch",
        value: 0,
        stat: "TÅL",
        initial: true
      },
      NATURLÄRA: {
        name: "Naturlära",
        value: 0,
        stat: "PSY",
        initial: false
      },
      NAVIGATION: {
        name: "Navigation",
        value: 0,
        stat: "PSY",
        initial: false
      },
      ORIENTERING: {
        name: "Orientering",
        value: 0,
        stat: "PSY",
        initial: false
      },
      RIDA: {
        name: "Rida",
        value: 0,
        stat: "RÖR",
        initial: true
      },
      SJÖMANNASKAP: {
        name: "Sjömannaskap",
        value: 0,
        stat: "PSY",
        initial: false
      },
      SPEJA: {
        name: "Speja",
        value: 0,
        stat: "UPP",
        initial: true
      },
      SPÅRA: {
        name: "Spåra",
        value: 0,
        stat: "UPP",
        initial: true
      },
      VILDMARKSVANA: {
        name: "Vildmarksvana",
        value: 0,
        stat: "PSY",
        initial: false
      }
    },
    ÖVRIGA: {}
  }
};

module.exports = {
  base: [
    {
      name: "färdigheter",
      value: {
        name: "strid",
        value: [
          {
            name: "Svärd",
            value: 0
          }
        ]
      }
    },
    {d
      name: "grundegenskaper",
      value: [
        {
          name: "styrka",
          value: 0
        }
      ]
    },
    {
      name: "avtrubbning",
      value: [
        {
          name: "utsatthet",
          value: 0
        },
        {
          name: "våld",
          value: 0
        }
      ]
    }
  ]
};
