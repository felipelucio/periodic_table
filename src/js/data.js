module.exports = {
  "H": {
    "id": "H",
    "symbol": "H",
    "name": {
      "en": "Hydrogen",
      "pt-BR": "Hidrogênio"
    },
    "atomic_number": 1,
    "weight": { "conventional": 1.008, "standard": [1.00784, 1.00811] },
    "period": 1,
    "group": 1,
    "type": "nonmetal",
    "melting_point": 14.01, // K
    "boiling_point": 20.28, // K
    "triple_point": { 
      "temperature": 13.8033, //K
      "pressure": 7.041e3, //Pa
    },
    "critical_point": {
      "temperature": 32.938, //Pa
      "pressure": 1.2858e6, //Pa
    },
    "allotropes": [
      {
        "id": "default",
        "name": {
          "en": "diatomic",
          "pt-BR": "diatômico"
        },
        "symbol": "H_2",
        "density": 8.988e-5, // At STP, g/cm3
        "heat": {
          "fusion": 0.117e3, // J/mol
          "vaporization": 0.904e3, // J/mol
          "capacity": 28.836, // J/(mol*K)
          "molecular": true
        },
        "sound": {
          "speed": 1310, // m/s
          "at_temp": 300.15, //K
          "state": "gas"
        },
        "thermal": {
          "expansion": null,
          "at_temp": null,
          "conductivity": 0.1805, // W/(m*K)
        },
        "electrical": {
          "resistivity": null, // Ω·m
          "at_temp": null, // K
        },
        "magnetism": {
          "order": "diamagnetic",
          "susceptibility": {
            "molar": -3.98e-6, // cm3/mol
            "at_temp": 298, // K
          }
        },
        "modulus": {
          "young": null, // Pa
          "shear": null,
          "bulk": null
        },
        "hardness": {
          "mohs": null,
          "brinell": null, // Pa (can be an array)
          "vickers": null
        },
      }
    ],
    "vapor_pressures": {
      "1": null, // Pa: K
      "10": null,
      "100": null, 
      "1e3": null,
      "10e3": 15,
      "100e3": 20
    },
    "occurrence": "primordial",
    "electronegativity": 2.20,
    "oxidation_states": ["-1*","+1*"],
    "radius": { 
      "empirical": null,
      "covalent": "31±5", // pm
      "waals": "120"
    },
    "ionization": {
      "1": 1312.0e3 // J/mol (can go up to 20[?])
    },
    "CAS_number": "12385-13-6",
    "discovery": {
      "date": "1766",
      "by": "Henry Cavendish"
    },
    "first_isolation": {
      "date": null,
      "by": null
    },
    "electrons": [1],
    "references": [

    ],
    "isotopes": [
      {
        "id": "H-1",
        "name": {
          "en": "Protium",
          "pt-BR": "Prótio"
        },
        "neutrons": 0,
        "weight": { "standard": 1.00782503207 },
        "abundance": 99.9885,
        "half_life": null,
        "decay": [
          {
            "mode": "stable" 
          }
        ]
      },
      {
        "id": "H-2",
        "name": {
          "en": "Deuterium",
          "pt-BR": "Deutério"
        },
        "neutrons": 1,
        "weight": { "standard": 2.01410177785 },
        "abundance": 0.0115,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "H-3",
        "name": {
          "en": "Tritium",
          "pt-BR": "Trítio"
        },
        "neutrons": 2,
        "weight": { "standard": 3.01604927767 },
        "abundance": 0,
        "half_life": "12.32 y",
        "decay": [
          {
            "mode": "beta_minus",
            "decay_to": "He-3",
            "pct": 100
          }
        ]
      }
    ]
  },
  "He": {
    "id": "He",
    "symbol": "He",
    "name": {
      "en": "Helium",
      "pt-BR": "Hélio"
    },
    "atomic_number": 2,
    "weight": { "standard": 4.0026022 },
    "period": 1,
    "group": 18,
    "type": "noble_gas",
    "melting_point": 0.95,
    "boiling_point": 4.222,
    "triple_point": { 
      "temperature": 2.177, //K
      "pressure": 5.043e3, //Pa
    },
    "critical_point": {
      "temperature": 5.1953, //K
      "pressure": 0.22746e6, //Pa
    },
    "allotropes": [
      {
        "id": "default",
        "name": { "en": "" },
        "symbol": "",
        "density": 0.0001786, // At STP, g/cm3
        "heat": {
          "fusion": 0.0138e3, // J/mol
          "vaporization": 0.0829e3, // J/mol
          "capacity": 20.78, // J/(mol*K)
          "molecular": false
        },
        "sound": {
          "speed": 972, // m/s
          "temperature": 300.15, //K
          "state": "gas"
        },
        "thermal": {
          "conductivity": 0.1513, // W/(m*K)
          "expansion": null,
          "at_temp": null,
        },
        "electrical": {
          "resistivity": null, // Ω·m
          "at_temp": null, // K
        },
        "magnetism": {
          "order": "diamagnetic",
          "susceptibility": {
            "molar": -1.88e-6, // cm3/mol
            "at_temp": 298, // K
          }
        },
        "modulus": {
          "young": null, // Pa
          "shear": null,
          "bulk": null
        },
        "hardness": {
          "mohs": null,
          "brinell": null // Pa
        },
      }
    ],
    "vapor_pressures": {
      "1": null, // Pa: K
      "10": null,
      "100": 1.23, 
      "1e3": 1.67,
      "10e3": 2.48,
      "100e3": 4.21
    },
    "electronegativity": null,
    "oxidation_states": ["0*"],
    "radius": { 
      "covalent": "28",
      "waals": "140"
    },
    "ionization": {
      "1": 2372.3e3, // J/mol
      "2": 5250.5e3
    },
    "occurrence": "primordial",
    "CAS_number": "7440-59-7",
    "discovery": {
      "date": "1868",
      "by": "Pierre Janssen & Norman Lockyer"
    },
    "first_isolation": {
      "date": "1895",
      "by": "William Ramsay, Per Teodor Cleve, Abraham Langlet"
    },
    "electrons": [2],
    "isotopes": [
      {
        "id": "He-3",
        "name": {
          "en": "Helium-3",
          "pt-BR": "Hélio-3",
        },
        "neutrons": 1,
        "weight": { "standard": 3.01602931914 },
        "abundance": 0.000137,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ] 
      },
      {
        "id": "He-4",
        "name": {
          "en": "Helium-4",
          "pt-BR": "Hélio-4",
        },
        "neutrons": 2,
        "weight": { "standard": 4.00260325415 },
        "abundance": 99.9999,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Li": {
    "id": "Li",
    "symbol": "Li",
    "name": {
      "en": "Lithium",
      "pt-BR": "Lítio"
    },
    "atomic_number": 3,
    "weight": { "conventional": 6.94, "standard": [6.938, 6.997] },
    "period": 2,
    "group": 1,
    "type": "alkali_metal",
    "melting_point": 453.69,
    "boiling_point": 1615,
    "triple_point": null,
    "critical_point": {
      "temperature": 3220, //K
      "pressure": 67e6, //Pa
    },
    "allotropes": [
      {
        "id": "default",
        "name": { "en": "" },
        "symbol": "",
        "density": 0.534, // At STP, g/cm3
        "heat": {
          "fusion": 3.00e3, // J/mol
          "vaporization": 136e3, // J/mol
          "capacity": 24.860, // J/(mol*K)
          "molecular": false
        },
        "sound": {
          "speed": 6000, // m/s
          "at_temp": 293.15, //K
          "state": "thin rod"
        },
        "thermal": {
          "expansion": 46e-6, // m/(m*K)
          "at_temp": 298.15, // K 
          "conductivity": 84.8, // W/(m*K)
        },
        "electrical": {
          "resistivity": 92.8e-9, // Ω·m
          "at_temp": 293.15, // K
        },
        "magnetism": {
          "order": "paramagnetic",
          "susceptibility": {
            "molar": 14.2e-6, // cm3/mol
            "at_temp": 298, // K
          }
        },
        "modulus": {
          "young": 4.9e9, // Pa
          "shear": 4.2e9,
          "bulk": 11e9
        },
        "hardness": {
          "mohs": 0.6,
          "brinell": 5e6 // Pa
        },
      }
    ],
    "vapor_pressures": {
      "1": 797, // Pa: K
      "10": 885,
      "100": 995, 
      "1e3": 1144,
      "10e3": 1337,
      "100e3": 1610
    },
    "ionization": {
      "1": 520.2e3, // J/mol
      "2": 7298.1e3,
      "3": 11815.0e3
    },
    "occurrence": "primordial",
    "CAS_number": "7439-93-2",
    "electronegativity": 0.98,
    "oxidation_states": ["+1*"],
    "radius": { 
      "empirical": "152",
      "covalent": "128±7",
      "waals": "182"
    },
    "discovery": {
      "date": "1871",
      "by": "Johan August Arfwedson",
    },
    "first_isolation": {
      "date": "1821",
      "by": "William Thomas Brande"
    },
    "electrons": [2, 1],
    "isotopes": [
      {
        "id": "Li-6",
        "name": {
          "en": "Lithium-6",
          "pt-BR": "Lítio-6",
        },
        "neutrons": 3,
        "weight": { "standard": 6.015122794 },
        "abundance": 7.59,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Li-7",
        "name": {
          "en": "Lithium-7",
          "pt-BR": "Lítio-7",
        },
        "neutrons": 4,
        "weight": { "standard": 7.016004548 },
        "abundance": 92.41,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Be": {
    "id": "Be",
    "symbol": "Be",
    "name": {
      "en": "Beryllium",
      "pt-BR": "Berílio"
    },
    "atomic_number": 4,
    "weight": { "standard": 9.01218315 },
    "period": 2,
    "group": 2,
    "type": "alkaline_earth",
    "melting_point": 1560,
    "boiling_point": 2743,
    "triple_point": null,
    "critical_point": {
      "temperature": null, //K
      "pressure": null, //Pa
    },
    "allotropes": [
      {
        "id": "default",
        "name": { "en": "" },
        "symbol": "",
        "density": 1.85, // At STP, g/cm3
        "heat": {
          "fusion": 12.2e3, // J/mol
          "vaporization": 292e3, // J/mol
          "capacity": 16.443, // J/(mol*K)
          "molecular": false
        },
        "sound": {
          "speed": 12890, // m/s
          "at_temp": 293.15, //K
          "state": "thin rod"
        },
        "thermal": {
          "expansion": 11.3e-6, // m/(m*K)
          "at_temp": 298.15, // K 
          "conductivity": 200, // W/(m*K)
        },
        "electrical": {
          "resistivity": 36e-9, // Ω·m
          "at_temp": 293.15, // K
        },
        "magnetism": {
          "order": "diamagnetic",
          "susceptibility": {
            "molar": -9.0e-6, // cm3/mol
            "at_temp": 298, // K
          }
        },
        "modulus": {
          "young": 287e9, // Pa
          "shear": 132e9,
          "bulk": 130e9
        },
        "hardness": {
          "mohs": 5.5,
          "brinell": [590e6, 1320e6], // Pa
          "vickers": 1670e6,
        },
      }  
    ],
    "vapor_pressures": {
      "1": 1462, // Pa: K
      "10": 1608,
      "100": 1791, 
      "1e3": 2023,
      "10e3": 2327,
      "100e3": 2742
    },
    "ionization": {
      "1": 899.5e3, // J/mol
      "2": 1757.1e3,
      "3": 14848.7e3,
      "4": 21006.6e3
    },
    "occurrence": "primordial",
    "CAS_number": "7440-41-7",
    "electronegativity": 1.57,
    "oxidation_states": ["+1","+2*"],
    "radius": { 
      "empirical": "112",
      "covalent": "96±3",
      "waals": "153"
    },
    "discovery": {
      "date": "1798",
      "by": "Louis Nicolas Vauquelin"
    },
    "first_isolation": {
      "date": "1828",
      "by": "Friedrich Wöhler & Antoine Bussy"
    },
    "electrons": [2, 2],
    "isotopes": [
      {
        "id": "beryllium-7",
        "name": {
          "en": "Beryllium-7",
          "pt-BR": "Berílio-7",
        },
        "neutrons": 3,
        "weight": { "standard": 7.016929828 },
        "abundance": 0,
        "half_life": "53.22 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Li-7"
          }
        ]
      },
      {
        "id": "beryllium-9",
        "name": {
          "en": "Beryllium-9",
          "pt-BR": "Berílio-9",
        },
        "neutrons": 5,
        "weight": { "standard": 9.012182201 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "beryllium-10",
        "name": {
          "en": "Beryllium-10",
          "pt-BR": "Berílio-10",
        },
        "neutrons": 6,
        "weight": { "standard": 10.013533818 },
        "abundance": 0,
        "half_life": "1.51e6 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "B-10"
          }
        ]
      }
    ]
  },
  "B": {
    "id": "B",
    "symbol": "B",
    "name": {
      "en": "Boron",
      "pt-BR": "Boro"
    },
    "atomic_number": 5,
    "weight": { "conventional": 10.81, "standard": [10.806, 10.821] },
    "period": 1,
    "group": 13,
    "type": "metalloid",
    "allotropes": [
      {
        "id": "crystalline",
        "name": {
          "en": "Crystalline",
          "pt-BR": "Cristalino"
        },
        "symbol": "",
        "density": 2.35, // At STP, g/cm3
        "heat": {
          "fusion": 50.2e3, // J/mol
          "vaporization": 508e3, // J/mol
          "capacity": 11.087, // J/(mol*K)
          "molecular": false
        },
        "sound": {
          "speed": 16200, // m/s
          "at_temp": 293.15, //K
          "state": "thin rod"
        },
        "thermal": {
          "expansion": [5e-6, 7e-6], // m/(m*K)
          "at_temp": 298.15, // K 
          "conductivity": 27.4, // W/(m*K)
        },
        "electrical": {
          "resistivity": 1e6, // Ω·m
          "at_temp": 293.15, // K
        },
        "magnetism": {
          "order": "diamagnetic",
          "susceptibility": {
            "molar": -6.7e-6, // cm3/mol
            "at_temp": 298, // K
          }
        },
        "modulus": {
          "young": null, // Pa
          "shear": null,
          "bulk": 184e9
        },
        "hardness": {
          "mohs": 9.5,
          "brinell": null, // Pa
          "vickers": null,
        },     
      }
    ],
    "melting_point": 2345,
    "boiling_point": 4273,
    "triple_point": null,
    "critical_point": {
      "temperature": null, //K
      "pressure": null, //Pa
    },
    "vapor_pressures": {
      "1": 2348, // Pa: K
      "10": 2562,
      "100": 2822, 
      "1e3": 3141,
      "10e3": 3545,
      "100e3": 4072
    },
    "ionization": {
      "1": 800.6e3, // J/mol
      "2": 2427.1e3,
      "3": 3659.7e3,
      "4": 25025.8e3,
      "5": 32826.7e3
    },
    "occurrence": "primordial",
    "CAS_number": "7440-42-8",
    "electronegativity": 2.04,
    "oxidation_states": ["-5","-1","+1","+2","+3*"],
    "radius": { 
      "empirical": "90",
      "covalent": "84±3",
      "waals": "192",
    },
    "discovery": {
      "date": "1808",
      "by": "Joseph Louis Gay-Lussac & Louis Jaques Thénard"
    },
    "first_isolation": {
      "date": "1808",
      "by": "Humpry Davy"
    },
    "electrons": [2, 3],
    "isotopes": [
      {
        "id": "B-10",
        "name": {
          "en": "Boron-10",
          "pt-BR": "Boro-10",
        },
        "neutrons": 5,
        "weight": { "standard": 10.012936992 },
        "abundance": 19.9,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "B-11",
        "name": {
          "en": "Boron-11",
          "pt-BR": "Boro-11",
        },
        "neutrons": 6,
        "weight": { "standard": 11.009305406 },
        "abundance": 80.1,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "C": {
    "id": "C",
    "symbol": "C",
    "name": {
      "en": "Carbon",
      "pt-BR": "Carbono"
    },
    "atomic_number": 6,
    "weight": { "conventional": 12.011, "standard": [12.0096, 12.0116] },
    "period": 2,
    "group": 14,
    "type": "nonmetal",
    "allotropes": [
      {
        "id": "graphite"
        "name": {
          "en": "Graphite",
          "pt-BR": "Grafita"
        },
        "symbol": "",
        "density": 2.267, // At STP, g/cm3
        "heat": {
          "fusion": 117e3, // J/mol
          "vaporization": null, // J/mol
          "capacity": 8.517 // J/(mol*K)
        },
        "sound": {
          "speed": 18350, // m/s
          "at_temp": 293.15, //K
          "state": "thin rod"
        },
        "thermal": {
          "expansion": null, // m/(m*K)
          "at_temp": 298.15, // K 
          "conductivity": [119,165], // W/(m*K)
        },
        "electrical": {
          "resistivity": 7.837e-6, // Ω·m
          "at_temp": 293.15, // K
        },
        "magnetism": {
          "order": "diamagnetic",
          "susceptibility": {
            "molar": -5.9e-6, // cm3/mol
            "at_temp": 298, // K
          }
        },
        "modulus": {
          "young": null, // Pa
          "shear": null,
          "bulk": null,
        },
        "hardness": {
          "mohs": [1,2],
          "brinell": null, // Pa
          "vickers": null,
        },
        "CAS_number": ["7782-42-5"],
      },
    ],
    "melting_point": 3823,
    "boiling_point": 4300,
    "triple_point": {
      "temperature": 4600, //K
      "pressure": 10800e3, //Pa
    },
    "critical_point": {
      "temperature": null, //K
      "pressure": null, //Pa
    },
    "vapor_pressures": null,
    "ionization": {
      "1": 1086.5e3, // J/mol
      "2": 2352.6e3,
      "3": 4620.5e3,
      "4": 6222.7e3,
      "5": 37831e3,
      "6": 47277e3,
    },
    "occurrence": "primordial",
    "electronegativity": 2.55,
    "oxidation_states": ["-4*","-3","-2","-1","0","+1","+2","+3","+4*"],
    "radius": { 
      "covalent": [69,73,76], // pm
      "waals": 170,
    },
    "discovery": {
      "date": "3750 BCE",
      "by": {
        "en": "Egyptians and Sumerians",
        "pt-BR": "Egípicios e Sumérios"
      }
    },
    "recognized": {
      "date": "1789",
      "by": "Antoine Lavoisier"
    },
    "electrons": [2, 4],
    "isotopes": [
      {
        "id": "C-12",
        "name": {
          "en": "Carbon-12",
          "pt-BR": "Carbono-12",
        },
        "neutrons": 6,
        "weight": { "standard": 12 },
        "abundance": 98.93,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "C-13",
        "name": {
          "en": "Carbon-13",
          "pt-BR": "Carbono-13",
        },
        "neutrons": 7,
        "weight": { "standard": 13.00335483778 },
        "abundance": 1.07,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "C-14",
        "name": {
          "en": "Carbon-14",
          "pt-BR": "Carbono-14",
        },
        "neutrons": 8,
        "weight": { "standard": 14.0032419887 },
        "abundance": 0,
        "half_life": "5.7e3 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "N-14"
          }
        ]
      }
    ]
  },
  "N": {
    "id": "N",
    "symbol": "N",
    "name": {
      "en": "Nitrogen",
      "pt-BR": "Nitrogênio"
    },
    "atomic_number": 7,
    "weight": { "conventional": 14.007, "standard": [14.00643, 14.00728] },
    "period": 2,
    "group": 15,
    "type": "nonmetal",
    "allotropes": [
      {
        "id": "dihydrogen"
        "name": {
          "en": "Dihydrogen",
          "pt-BR": "Dihidrogênio"
        },
        "symbol": "H_2",
        "density": 1.251e-3, // At STP, g/cm3
        "heat": {
          "fusion": 0.72e3, // J/mol
          "vaporization": 5.56e3, // J/mol
          "capacity": 29.124 // J/(mol*K)
        },
        "sound": {
          "speed": 353, // m/s
          "at_temp": 293.15, //K
          "state": "gas"
        },
        "thermal": {
          "expansion": null, // m/(m*K)
          "at_temp": 298.15, // K 
          "conductivity": 25.83e-3, // W/(m*K)
        },
        "electrical": {
          "resistivity": null, // Ω·m
          "at_temp": 293.15, // K
        },
        "magnetism": {
          "order": "diamagnetic",
          "susceptibility": {
            "molar": null, // cm3/mol
            "at_temp": 298, // K
          }
        },
        "modulus": {
          "young": null, // Pa
          "shear": null,
          "bulk": null,
        },
        "hardness": {
          "mohs": null,
          "brinell": null, // Pa
          "vickers": null,
        },
        "CAS_number": ["7727-37-9"],
      },
    ],
    "melting_point": 63.05,
    "boiling_point": 77.36,
    "triple_point": {
      "temperature": 61.151, //K
      "pressure": 12.52e3, //Pa
    },
    "critical_point": {
      "temperature": 126.21, //K
      "pressure": 3.39e6, //Pa
    },
    "vapor_pressures": {
      "1": 37,
      "10": 41,
      "100": 46,
      "1e3": 53,
      "10e3": 62,
      "100e3": 77
    },
    "ionization": {
      "1": 1402.3e3, // J/mol
      "2": 2856e3,
      "3": 4578.1e3,
      "4": 7475.0e3,
      "5": 9444.9e3,
      "6": 53266.6e3,
      "7": 64360e3
    },
    "occurrence": "primordial",
    "electronegativity": 3.04,
    "oxidation_states": ["-3*","-2","-1","+1","+2","+3*","+4","+5*"],
    "radius": { 
      "covalent": "71±1",
      "waals": "155",
    },
    "discovery": { 
      "date": "1772",
      "by": "Daniel Rutherford",
    },
    "named": {
      "date": "1790",
      "by": "Jean-Antoine Chaptal"
    },
    "electrons": [2, 5],
    "isotopes": [
      {
        "id": "N-13",
        "name": {
          "en": "Nitrogen-13",
          "pt-BR": "Nitrogênio-13",
        },
        "neutrons": 6,
        "weight": { "standard": 13.005738609 },
        "abundance": 0,
        "half_life": "9.965 min",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "C-13"
          }
        ]
      },
      {
        "id": "N-14",
        "name": {
          "en": "Nitrogen-14",
          "pt-BR": "Nitrogênio-14",
        },
        "neutrons": 7,
        "weight": { "standard": 14.00307400478 },
        "abundance": 99.632,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "N-15",
        "name": {
          "en": "Nitrogen-15",
          "pt-BR": "Nitrogênio-15",
        },
        "neutrons": 8,
        "weight": { "standard": 15.00010889823 },
        "abundance": 0.368,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "O": {
    "id": "O",
    "symbol": "O",
    "name": {
      "en": "Oxygen",
      "pt-BR": "Oxigênio"
    },
    "atomic_number": 8,
    "weight": { "conventional": 15.999, "standard": [15.99903, 15.99977] },
    "period": 2,
    "group": 16,
    "type": "nonmetal",
    "allotropes": [
      {
        "id": "dioxygen"
        "name": {
          "en": "Dioxygen",
          "pt-BR": "Dioxigênio"
        },
        "symbol": "O_2",
        "density": [
          {
            "volumetric": 1.429e-3, // At STP, g/cm3
            "at_temp": 273.15, // K
            "at_pressure": 101.3e3 // Pa
          },
          {
            "volumetric": 1.141,
            "at_temp": 90.118,
            "at_pressure": 101.3e3
          }
        ],
        "heat": {
          "fusion": 0.444e3, // J/mol
          "vaporization": 6.82e3, // J/mol
          "capacity": 29.378 // J/(mol*K)
        },
        "sound": {
          "speed": 330, // m/s
          "at_temp": 293.15, //K
          "state": "gas"
        },
        "thermal": {
          "expansion": null, // m/(m*K)
          "at_temp": 298.15, // K 
          "conductivity": 26.58e-3, // W/(m*K)
        },
        "electrical": {
          "resistivity": null, // Ω·m
          "at_temp": 293.15, // K
        },
        "magnetism": {
          "order": "paramagnetic",
          "susceptibility": {
            "molar": 3449.0e-6, // cm3/mol
            "at_temp": 293, // K
          }
        },
        "modulus": {
          "young": null, // Pa
          "shear": null,
          "bulk": null,
        },
        "hardness": {
          "mohs": null,
          "brinell": null, // Pa
          "vickers": null,
        },
        "CAS_number": ["7782-44-7"],
      },
    ],
    "melting_point": 54.36,
    "boiling_point": 90.188,
    "triple_point": {
      "temperature": 54.361, //K
      "pressure": 0.1463e3, //Pa
    },
    "critical_point": {
      "temperature": 154.581, //K
      "pressure": 5.043e6, //Pa
    },
    "vapor_pressures": {
      "1": null,
      "10": null,
      "100": null,
      "1e3": 61,
      "10e3": 73,
      "100e3": 90
    },
    "ionization": {
      "1": 1313.9e3, // J/mol
      "2": 3388.2e3,
      "3": 5300.3e3,
      "4": 7469.2e3,
      "5": 10989.5e3,
      "6": 13326.5e3,
      "7": 71330e3,
      "8": 84078.0e3,
    },
    "occurrence": "primordial",
    "electronegativity": 3.44,
    "oxidation_states": ["-2*","-1","+1","+2"],
    "radius": { 
      "covalent": "62±2",
      "waals": "152",
    },
    "discovery": {
      "date": "1771",
      "by": "Carl Wilhelm Scheele",
    },
    "named": {
      "date": "1777",
      "Antoine Lavoisier"
    },
    "electrons": [2, 6],
    "isotopes": [
      {
        "id": "O-16",
        "name": {
          "en": "Oxygen-16",
          "pt-BR": "Oxigênio-16",
        },
        "neutrons": 8,
        "weight": { "standard": 15.99491461956 },
        "abundance": 99.757,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "O-17",
        "name": {
          "en": "Oxygen-17",
          "pt-BR": "Oxigênio-17",
        },
        "neutrons": 9,
        "weight": { "standard": 16.999131703 },
        "abundance": 0.038,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "O-18",
        "name": {
          "en": "Oxygen-18",
          "pt-BR": "Oxigênio-18",
        },
        "neutrons": 10,
        "weight": { "standard": 17.999161001 },
        "abundance": 0.205,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "F": {
    "id": "F",
    "symbol": "F",
    "name": {
      "en": "Fluorine",
      "pt-BR": "Flúor"
    },
    "atomic_number": 9,
    "weight": { "standard": 18.9984031636 },
    "period": 2,
    "group": 17,
    "type": "nonmetal",
    "melting_point": 53.5,
    "boiling_point": 85.03,
    "electronegativity": 3.98,
    "oxidation_states": ["-1*"],
    "radius": { 
      "covalent": "64",
      "waals": "135",
    },
    "discovery_date": "1810",
    "discovery_by": "André-Marie Ampère",
    "electrons": [2, 7],
    "isotopes": [
      {
        "id": "F-18",
        "name": {
          "en": "Fluorine-18",
          "pt-BR": "Flúor-18",
        },
        "neutrons": 9,
        "weight": { "standard": 18.000937956 },
        "abundance": "trace",
        "half_life": "109.739 min",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 96.9,
            "decay_to": "O-18"
          },
          {
            "mode": "k_plus",
            "pct": 3.14,
            "decay_to": "O-18"
          }
        ]
      },
      {
        "id": "F-19",
        "name": {
          "en": "Fluorine-19",
          "pt-BR": "Flúor-19",
        },
        "neutrons": 10,
        "weight": { "standard": 18.998403224 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Ne": {
    "id": "Ne",
    "symbol": "Ne",
    "name": {
      "en": "Neon",
      "pt-BR": "Neônio"
    },
    "atomic_number": 10,
    "weight": { "standard": 20.17976 },
    "period": 2,
    "group": 18,
    "type": "noble_gas",
    "melting_point": 24.56,
    "boiling_point": 27.07,
    "electronegativity": null,
    "oxidation_states": ["0*"],
    "radius": { 
      "covalent": "58",
      "waals": "154"
    },
    "discovery_date": "1897",
    "discovery_by": "William Ramsay",
    "electrons": [2, 8],
    "isotopes": [
      {
        "id": "Ne-20",
        "name": {
          "en": "Neon-20",
          "pt-BR": "Neônio-20",
        },
        "neutrons": 10,
        "weight": { "standard": 19.99244017542 },
        "abundance": 90.84,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ne-21",
        "name": {
          "en": "Neon-21",
          "pt-BR": "Neônio-21",
        },
        "neutrons": 11,
        "weight": { "standard": 20.993846684 },
        "abundance": 0.27,
        "half_life": null,
        "decay": [
          { 
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ne-22",
        "name": {
          "en": "Neon-22",
          "en": "Neônio-22",
        },
        "neutrons": 12,
        "weight": { "standard": 21.991385113 },
        "abundance": 9.25,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Na": {
    "id": "Na",
    "symbol": "Na",
    "name": {
      "en": "Sodium",
      "pt-BR": "Sódio"
    },
    "atomic_number": 11,
    "weight": { "standard": 22.989769282 },
    "period": 3,
    "group": 1,
    "type": "alkali_metal",
    "melting_point": 370.87,
    "boiling_point": 1156,
    "electronegativity": 0.93,
    "oxidation_states": ["-1","+1*"],
    "radius": { 
      "empirical": "186",
      "covalent": "166±9",
      "waals": "227",
    },
    "discovery_date": "1807",
    "discovery_by": "Humphry Davy",
    "electrons": [2, 8, 1],
    "isotopes": [
      {
        "id": "Na-22",
        "name": {
          "en": "Sodium-22",
          "pt-BR": "Sódio-22",
        },
        "neutrons": 11,
        "weight": { "standard": 21.994436425 },
        "abundance": 0,
        "half_life": "2.6019 y",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Ne-22"
          }
        ]
      },
      {
        "id": "Na-23",
        "name": {
          "en": "Sodium-23",
          "pt-BR": "Sódio-23",
        },
        "neutrons": 12,
        "weight": { "standard": 22.98976928087 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Mg": {
    "id": "Mg",
    "symbol": "Mg",
    "name": {
      "en": "Magnesium",
      "pt-BR": "Magnésio"
    },
    "atomic_number": 12,
    "weight": { "conventional": 24.305, "standard": [24.304, 24.307] },
    "period": 3,
    "group": 2,
    "type": "alkaline_earth",
    "melting_point": 923,
    "boiling_point": 1363,
    "electronegativity": 1.31,
    "oxidation_states": ["+1","+2*"],
    "radius": { 
      "empirical": "160",
      "covalent": "141±7",
      "waals": "173",
    },
    "discovery_date": "1755",
    "discovery_by": "Joseph Black",
    "electrons": [2, 8, 2],
    "isotopes": [
      {
        "id": "Mg-24",
        "name": {
          "en": "Magnesium-24",
          "pt-BR": "Magnésio-24",
        },
        "neutrons": 12,
        "weight": { "standard": 23.985041699 },
        "abundance": 78.99,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Mg-25",
        "name": {
          "en": "Magnesium-25",
          "pt-BR": "Magnésio-25",
        },
        "neutrons": 13,
        "weight": { "standard": 24.985836917 },
        "abundance": 10,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Mg-26",
        "name": {
          "en": "Magnesium-26",
          "pt-BR": "Magnésio-26",
        },
        "neutrons": 14,
        "weight": { "standard": 25.982592929 },
        "abundance": 11.01,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Al": {
    "id": "Al",
    "symbol": "Al",
    "name": {
      "en": "Aluminium",
      "pt-BR": "Alumínio"
    },
    "atomic_number": 13,
    "weight": { "standard": 26.98153843 },
    "period": 3,
    "group": 13,
    "type": "post_transitional",
    "melting_point": 933.47,
    "boiling_point": 2792,
    "electronegativity": 1.61,
    "oxidation_states": ["-2","-1","+1","+2","+3*"],
    "radius": { 
      "empirical": "143",
      "covalent": "121±4",
      "waals": "184",
    },
    "discovery_date": "1824",
    "discovery_by": "Hans Christian Ørsted",
    "electrons": [2, 8, 3],
    "isotopes": [
      {
        "id": "Al-26",
        "name": {
          "en": "Aluminium-26",
          "pt-BR": "Alumínio-26",
        },
        "neutrons": 13,
        "weight": { "standard": 25.986891692 },
        "abundance": "trace",
        "half_life": "7.16e5 y",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Mg-26"
          }
        ]
      },
      {
        "id": "Al-27",
        "name": {
          "en": "Aluminium-27",
          "pt-BR": "Alumínio-27",
        },
        "neutrons": 14,
        "weight": { "standard": 26.981538627 },
        "abundance": 0,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Si": {
    "id": "Si",
    "symbol": "Si",
    "name": {
      "en": "Silicon",
      "pt-BR": "Silício"
    },
    "atomic_number": 14,
    "weight": { "conventional": 28.085, "standard": [28.084, 28.086] },
    "period": 3,
    "group": 14,
    "type": "metalloid",
    "melting_point": 1687,
    "boiling_point": 3173,
    "electronegativity": 1.90,
    "oxidation_states": ["-4*","-3","-2","-1","+1","+2","+3","+4*"],
    "radius": { 
      "empirical": "111",
      "covalent": "111",
      "waals": "210",
    },
    "discovery_date": "1823",
    "discovery_by": "Jöns Jacob Berzelius",
    "electrons": [2, 8, 4],
    "isotopes": [
      {
        "id": "Si-28",
        "name": {
          "en": "Silicon-28",
          "pt-BR": "Silício-28",
        },
        "neutrons": 14,
        "weight": { "standard": 27.97692653246 },
        "abundance": 92.2297,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Si-29",
        "name": {
          "en": "Silicon-29",
          "pt-BR": "Silício-29",
        },
        "neutrons": 15,
        "weight": { "standard": 28.9764947 },
        "abundance": 4.6832,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Si-30",
        "name": {
          "en": "Silicon-30",
          "pt-BR": "Silício-30",
        },
        "neutrons": 16,
        "weight": { "standard": 29.973770171 },
        "abundance": 3.0872,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Si-32",
        "name": {
          "en": "Silicon-32",
          "pt-BR": "Silício-32",
        },
        "neutrons": 18,
        "weight": { "standard": 31.974148082 },
        "abundance": 0,
        "half_life": "153 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "P-32"
          }
        ]
      }
    ]
  },
  "P": {
    "id": "P",
    "symbol": "P",
    "name": {
      "en": "Phosphorus",
      "pt-BR": "Fósforo"
    },
    "atomic_number": 15,
    "weight": { "standard": 30.9737619985 },
    "period": 3,
    "group": 15,
    "type": "nonmetal",
    "melting_point": 317.3,
    "boiling_point": 553.6,
    "electronegativity": 2.19,
    "oxidation_states": ["-3*","-2","-1","+1","+2","+3*","+4","+5*"],
    "radius": { 
      "covalent": "107±3",
      "waals": "180",
    },
    "discovery_date": "1669",
    "discovery_by": "Hennig Brand",
    "electrons": [2, 8, 5],
    "isotopes": [
      {
        "id": "P-31",
        "name": {
          "en": "Phosphorus-31",
          "pt-BR": "Fósforo-31",
        },
        "neutrons": 16,
        "weight": { "standard": 30.973761629 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "P-32",
        "name": {
          "en": "Phosphorus-32",
          "pt-BR": "Fósforo-32",
        },
        "neutrons": 17,
        "weight": { "standard": 31.973907274 },
        "abundance": "trace",
        "half_life": "14.263 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "S-32"
          }
        ]
      },
      {
        "id": "P-33",
        "name": {
          "en": "Phosphorus-33",
          "pt-BR": "Fósforo-33",
        },
        "neutrons": 18,
        "weight": { "standard": 32.971725543 },
        "abundance": "trace",
        "half_life": "25.34 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "S-33"
          }
        ]
      }
    ]
  },
  "S": {
    "id": "S",
    "symbol": "S",
    "name": {
      "en": "Sulfur",
      "pt-BR": "Enxofre"
    },
    "atomic_number": 16,
    "weight": { "conventional": 32.06, "standard": [32.059, 32.076] },
    "period": 3,
    "group": 16,
    "type": "nonmetal",
    "melting_point": 388.36,
    "boiling_point": 717.87,
    "electronegativity": 2.58,
    "oxidation_states": ["-2*","-1","+1","+2*","+3","+4*","+5","+6*"],
    "radius": { 
      "covalent": "105±3",
      "waals": "180",
    },
    "discovery_date": "2000 BCE",
    "discovery_by": "?",
    "electrons": [2, 8, 6],
    "isotopes": [
      {
        "id": "S-32",
        "name": {
          "en": "Sulfur-32",
          "pt-BR": "Enxofre-32",
        },
        "neutrons": 16,
        "weight": { "standard": 31.972070999 },
        "abundance": 94.93,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "S-33",
        "name": {
          "en": "Sulfur-33",
          "pt-BR": "Enxofre-33",
        },
        "neutrons": 17,
        "weight": { "standard": 32.971458759 },
        "abundance": 0.76,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "S-34",
        "name": {
          "en": "Sulfur-34",
          "pt-BR": "Enxofre-34",
        },
        "neutrons": 18,
        "weight": { "standard": 33.967866902 },
        "abundance": 4.29,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "S-35",
        "name": {
          "en": "Sulfur-35",
          "pt-BR": "Enxofre-35",
        },
        "neutrons": 19,
        "weight": { "standard": 34.969032161 },
        "abundance": "trace",
        "half_life": "85.51 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Cl-35"
          }
        ]
      },
      {
        "id": "S-36",
        "name": {
          "en": "Sulfur-36",
          "pt-BR": "Enxofre-36",
        },
        "neutrons": 18,
        "weight": { "standard": 35.96708076 },
        "abundance": 0.02,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Cl": {
    "id": "Cl",
    "symbol": "Cl",
    "name": {
      "en": "Chlorine",
      "pt-BR": "Cloro"
    },
    "atomic_number": 17,
    "weight": { "conventional": 35.45, "standard": [35.446, 35.457] },
    "period": 3,
    "group": 17,
    "type": "nonmetal",
    "melting_point": 171.6,
    "boiling_point": 239.11,
    "electronegativity": 3.16,
    "oxidation_states": ["-1*","+1*","+2","+3*","+4","+5*","+6","+7*"],
    "radius": { 
      "covalent": "102±4",
      "waals": "175",
    },
    "discovery_date": "1774",
    "discovery_by": "Carl Wilhelm Scheele",
    "electrons": [2, 8, 7],
    "isotopes": [
      {
        "id": "Cl-35",
        "name": {
          "en": "Chlorine-35",
          "pt-BR": "Cloro-35",
        },
        "neutrons": 18,
        "weight": { "standard": 34.968852682 },
        "abundance": 75.78,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Cl-36",
        "name": {
          "en": "Chlorine-36",
          "pt-BR": "Cloro-36",
        },
        "neutrons": 19,
        "weight": { "standard": 35.968306981 },
        "abundance": "trace",
        "half_life": "3.01e5 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 98.1,
            "decay_to": "Ar-36"
          },
          {
            "mode": "k_plus",
            "pct": 1.9,
            "decay_to": "S-36"
          }
        ]
      },
      {
        "id": "Cl-37",
        "name": {
          "en": "Chlorine-37",
          "pt-BR": "Cloro-37",
        },
        "neutrons": 20,
        "weight": { "standard": 36.965902591 },
        "abundance": 24.22,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Ar": {
    "id": "Ar",
    "symbol": "Ar",
    "name": {
      "en": "Argon",
      "pt-BR": "Argônio"
    },
    "atomic_number": 18,
    "weight": { "conventional": 39.948, "standard": [39.792, 39.963] },
    "period": 3,
    "group": 18,
    "type": "noble_gas",
    "melting_point": 83.9,
    "boiling_point": 87.3,
    "oxidation_states": ["0"],
    "electronegativity": null,
    "radius": { 
      "covalent": "106±10",
      "waals": "188",
    },
    "discovery_date": "1894",
    "discovery_by": "Lord Rayleigh & William Ramsay",
    "electrons": [2, 8, 8],
    "isotopes": [
      {
        "id": "Ar-36",
        "name": {
          "en": "Argon-36",
          "pt-BR": "Argônio-36",
        },
        "neutrons": 18,
        "weight": { "standard": 35.967545105 },
        "abundance": 0.3365,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ar-37",
        "name": {
          "en": "Argon-37",
          "pt-BR": "Argônio-37",
        },
        "neutrons": 19,
        "weight": { "standard": 36.96677632 },
        "abundance": "syn",
        "half_life": "35.03 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Cl-37"
          }
        ]
      },
      {
        "id": "Ar-38",
        "name": {
          "en": "Argon-38",
          "pt-BR": "Argônio-38",
        },
        "neutrons": 20,
        "weight": { "standard": 37.962732394 },
        "abundance": 0.0632,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ar-39",
        "name": {
          "en": "Argon-39",
          "pt-BR": "Argônio-39",
        },
        "neutrons": 21,
        "weight": { "standard": 38.964313231 },
        "abundance": "trace",
        "half_life": "269 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "K-39"
          }
        ]
      },
      {
        "id": "Ar-40",
        "name": {
          "en": "Argon-40",
          "pt-BR": "Argônio-40",
        },
        "neutrons": 22,
        "weight": { "standard": 39.96238312251 },
        "abundance": 99.6003,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ar-41",
        "name": {
          "en": "Argon-41",
          "pt-BR": "Argônio-41",
        },
        "neutrons": 23,
        "weight": { "standard": 40.964500611 },
        "abundance": "syn",
        "half_life": "1.8268 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "K-41"
          }
        ]
      },
      {
        "id": "Ar-42",
        "name": {
          "en": "Argon-42",
          "pt-BR": "Argônio-42",
        },
        "neutrons": 24,
        "weight": { "standard": 41.963045736 },
        "abundance": "syn",
        "half_life": "33 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "K-42"
          }
        ]
      }
    ]
  },
  "K": {
    "id": "K",
    "symbol": "K",
    "name": {
      "en": "Potassium",
      "pt-BR": "Potássio"
    },
    "atomic_number": 19,
    "weight": { "standard": 39.09831 },
    "period": 4,
    "group": 1,
    "type": "alkali_metal",
    "melting_point": 336.53,
    "boiling_point": 1032,
    "oxidation_states": ["-1","+1*"],
    "electronegativity": 0.82,
    "radius": { 
      "empirical": "227",
      "covalent": "203±12",
      "waals": "275",
    },
    "discovery_date": "1807",
    "discovery_by": "Hunphry Davy",
    "electrons": [2, 8, 8, 1],
    "isotopes": [
      {
        "id": "K-39",
        "name": {
          "en": "Potassium-39",
          "pt-BR": "Potássio-39",
        },
        "neutrons": 20,
        "weight": { "standard": 38.963706679 },
        "abundance": 93.2581,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "K-40",
        "name": {
          "en": "Potassium-40",
          "pt-BR": "Potássio-40",
        },
        "neutrons": 21,
        "weight": { "standard": 39.963998475 },
        "abundance": 0.0117,
        "half_life": "1.248e9 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 89.28,
            "decay_to": "Ca-40"
          },
          {
            "mode": "k_plus",
            "pct": 10.72,
            "decay_to": "Ar-40"
          },
          {
            "mode": "beta_plus",
            "pct": 0.001,
            "decay_to": "Ar-40"
          }
        ]
      },
      {
        "id": "K-41",
        "name": {
          "en": "Potassium-41",
          "pt-BR": "Potássio-41",
        },
        "neutrons": 22,
        "weight": { "standard": 40.961825762 },
        "abundance": 6.7302,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Ca": {
    "id": "Ca",
    "symbol": "Ca",
    "name": {
      "en": "Calcium",
      "pt-BR": "Cálcio"
    },
    "atomic_number": 20,
    "weight": { "standard": 40.0784 },
    "period": 4,
    "group": 2,
    "type": "alkaline_earth",
    "melting_point": 1115,
    "boiling_point": 1757,
    "oxidation_states": ["+1","+2*"],
    "electronegativity": 1.00,
    "radius": { 
      "empirical": "197",
      "covalent": "176±10",
      "waals": "231",
    },
    "discovery_date": "1808",
    "discovery_by": "Hunphry Davy",
    "electrons": [2, 8, 8, 2],
    "isotopes": [
      {
        "id": "Ca-40",
        "name": {
          "en": "Calcium-40",
          "pt-BR": "Cálcio-40",
        },
        "neutrons": 20,
        "weight": { "standard": 39.962590983 },
        "abundance": 96.941,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ca-41",
        "name": {
          "en": "Calcium-41",
          "pt-BR": "Cálcio-41",
        },
        "neutrons": 21,
        "weight": { "standard": 40.962278062 },
        "abundance": "trace",
        "half_life": "1.02e5 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "K-41"
          }
        ]
      },
      {
        "id": "Ca-42",
        "name": {
          "en": "Calcium-42",
          "pt-BR": "Cálcio-42",
        },
        "neutrons": 22,
        "weight": { "standard": 41.958618014 },
        "abundance": 0.647,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ca-43",
        "name": {
          "en": "Calcium-43",
          "pt-BR": "Cálcio-43",
        },
        "neutrons": 23,
        "weight": { "standard": 42.958766628 },
        "abundance": 0.135,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ca-44",
        "name": {
          "en": "Calcium-44",
          "pt-BR": "Cálcio-44",
        },
        "neutrons": 24,
        "weight": { "standard": 43.955481754 },
        "abundance": 2.086,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ca-45",
        "name": {
          "en": "Calcium-45",
          "pt-BR": "Cálcio-45",
        },
        "neutrons": 25,
        "weight": { "standard": 44.956186566 },
        "abundance": "syn",
        "half_life": "162.67 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Sc-45"
          }
        ]
      },
      {
        "id": "Ca-46",
        "name": {
          "en": "Calcium-46",
          "pt-BR": "Cálcio-46",
        },
        "neutrons": 26,
        "weight": { "standard": 45.953692587 },
        "abundance": 0.004,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ca-47",
        "name": {
          "en": "Calcium-47",
          "pt-BR": "Cálcio-47",
        },
        "neutrons": 27,
        "weight": { "standard": 46.954546006 },
        "abundance": "syn",
        "half_life": "4.5 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Sc-47"
          }
        ]
      },
      {
        "id": "Ca-48",
        "name": {
          "en": "Calcium-48",
          "pt-BR": "Cálcio-48",
        },
        "neutrons": 28,
        "weight": { "standard": 47.952534177 },
        "abundance": 0.187,
        "half_life": "6.4e19 y",
        "decay": [
          {
            "mode": "double_beta_minus",
            "pct": 100,
            "decay_to": "Ti-48"
          }
        ]
      }
    ]
  },
  "Sc": {
    "id": "Sc",
    "symbol": "Sc",
    "name": {
      "en": "Scandium",
      "pt-BR": "Escândio"
    },
    "atomic_number": 21,
    "weight": { "standard": 44.9559085 },
    "period": 4,
    "group": 3,
    "type": "transition_metal",
    "melting_point": 1814,
    "boiling_point": 3103,
    "oxidation_states": ["+1","+2","+3"],
    "electronegativity": 1.36,
    "radius": { 
      "empirical": "162",
      "covalent": "170±7",
      "waals": "211",
    },
    "discovery_date": "1879",
    "discovery_by": "Lars Fredrik Nilson",
    "electrons": [2, 8, 9, 2],
    "isotopes": [
      {
        "id": "Sc-44m2",
        "name": {
          "en": "Scandium-44m2",
          "pt-BR": "Escândio-44m2",
        },
        "neutrons": 23,
        "weight": { "standard": 43.959402752 },
        "abundance": "syn",
        "half_life": "58.61 h",
        "decay": [
          {
            "mode": "internal_convertion",
            "pct": 98.8,
            "decay_to": "Sc-44"
          },
          {
            "mode": "k_plus",
            "pct": 1.2,
            "decay_to": "Ca-44"
          }
        ]
      },
      {
        "id": "Sc-45",
        "name": {
          "en": "Scandium-45",
          "pt-BR": "Escândio-45",
        },
        "neutrons": 24,
        "weight": { "standard": 44.955911909 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sc-46",
        "name": {
          "en": "Scandium-46",
          "pt-BR": "Escândio-46",
        },
        "neutrons": 25,
        "weight": { "standard": 45.95517189 },
        "abundance": "syn",
        "half_life": "83.79 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Ti-46"
          }
        ]
      },
      {
        "id": "Sc-47",
        "name": {
          "en": "Scandium-47",
          "pt-BR": "Escândio-47",
        },
        "neutrons": 26,
        "weight": { "standard": 46.952407508 },
        "abundance": "syn",
        "half_life": "3.3492 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Ti-47"
          }
        ]
      },
      {
        "id": "Sc-48",
        "name": {
          "en": "Scandium-48",
          "pt-BR": "Escândio-48",
        },
        "neutrons": 27,
        "weight": { "standard": 47.952231468 },
        "abundance": "syn",
        "half_life": "43.67 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Ti-48"
          }
        ]
      }
    ]
  },
  "Ti": {
    "id": "Ti",
    "symbol": "Ti",
    "name": {
      "en": "Titanium",
      "pt-BR": "Titânio"
    },
    "atomic_number": 22,
    "weight": { "standard": 47.8671 },
    "period": 4,
    "group": 4,
    "type": "transition_metal",
    "melting_point": 1941,
    "boiling_point": 3560,
    "oxidation_states": ["-2","-1","+1","+2","+3","+4*"],
    "electronegativity": 1.54,
    "radius": { 
      "empirical": "147",
      "covalent": "160±8"
    },
    "discovery_date": "1791",
    "discovery_by": "William Gregor",
    "electrons": [2, 8, 10, 2],
    "isotopes": [
      {
        "id": "Ti-44",
        "name": {
          "en": "Titanium-44",
          "pt-BR": "Titânio-44",
        },
        "neutrons": 22,
        "weight": { "standard": 43.959690069 },
        "abundance": "syn",
        "half_life": "63 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Sc-44"
          }
        ]
      },
      {
        "id": "Ti-46",
        "name": {
          "en": "Titanium-46",
          "pt-BR": "Titânio-46",
        },
        "neutrons": 23,
        "weight": { "standard": 45.952631555 },
        "abundance": 8.25,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ti-47",
        "name": {
          "en": "Titanium-47",
          "pt-BR": "Titânio-47",
        },
        "neutrons": 24,
        "weight": { "standard": 46.951763088 },
        "abundance": 7.44,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ti-48",
        "name": {
          "en": "Titanium-48",
          "pt-BR": "Titânio-48",
        },
        "neutrons": 25,
        "weight": { "standard": 47.947946281 },
        "abundance": 73.72,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ti-49",
        "name": {
          "en": "Titanium-49",
          "pt-BR": "Titânio-49",
        },
        "neutrons": 26,
        "weight": { "standard": 48.947869982 },
        "abundance": 5.41,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ti-50",
        "name": {
          "en": "Titanium-50",
          "pt-BR": "Titânio-50",
        },
        "neutrons": 27,
        "weight": { "standard": 49.944791194 },
        "abundance": 5.18,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "V": {
    "id": "V",
    "symbol": "V",
    "name": {
      "en": "Vanadium",
      "pt-BR": "Vanádio"
    },
    "atomic_number": 23,
    "weight": { "standard": 50.94151 },
    "period": 4,
    "group": 5,
    "type": "transition_metal",
    "melting_point": 2183,
    "boiling_point": 3680,
    "oxidation_states": ["-3","-1","+1","+2","+3","+4","+5"],
    "electronegativity": 1.63,
    "radius": { 
      "empirical": "134",
      "empirical": "153±8",
    },
    "discovery_date": "1830",
    "discovery_by": "Andrés Manuel del Rio",
    "electrons": [2, 8, 11, 2],
    "isotopes": [
      {
        "id": "V-48",
        "name": {
          "en": "Vanadium-48",
          "pt-BR": "Vanádio-48",
        },
        "neutrons": 25,
        "weight": { "standard": 47.952253707 },
        "abundance": "syn",
        "half_life": "15.97350 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Ti-48"
          }
        ]
      },
      {
        "id": "V-49",
        "name": {
          "en": "Vanadium-49",
          "pt-BR": "Vanádio-49",
        },
        "neutrons": 26,
        "weight": { "standard": 48.948516101 },
        "abundance": "syn",
        "half_life": "330 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Ti-49"
          }
        ]
      },
      {
        "id": "V-50",
        "name": {
          "en": "Vanadium-50",
          "pt-BR": "Vanadium-50",
        },
        "neutrons": 27,
        "weight": { "standard": 49.947158485 },
        "abundance": 0.25,
        "half_life": "1.4e17 y",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 83,
            "decay_to": "Ti-50"
          },
          {
            "mode": "beta_minus",
            "pct": 17,
            "decay_to": "Cr-50"
          }
        ]
      },
      {
        "id": "V-51",
        "name": {
          "en": "Vanadium-51",
          "pt-BR": "Vanádio-51",
        },
        "neutrons": 28,
        "weight": { "standard": 50.943959507 },
        "abundance": 99.75,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Cr": {
    "id": "Cr",
    "symbol": "Cr",
    "name": {
      "en": "Chromium",
      "pt-BR": "Crômio"
    },
    "atomic_number": 24,
    "weight": { "standard": 51.99616 },
    "period": 4,
    "group": 6,
    "type": "transition_metal",
    "melting_point": 2180,
    "boiling_point": 2944,
    "oxidation_states": ["-4","-2","-1","+1","+2","+3*","+4","+5","+6"],
    "electronegativity": 1.66,
    "radius": { 
      "empirical": "128",
      "covalent": "139±5",
    },
    "discovery_date": "1794",
    "discovery_by": "Louis Nicolas Vauquelin",
    "electrons": [2, 8, 13, 1],
    "isotopes": [
      {
        "id": "Cr-50",
        "name": {
          "en": "Chromium-50",
          "pt-BR": "Crômio-50",
        },
        "neutrons": 26,
        "weight": { "standard": 49.946044205 },
        "abundance": 4.345,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Cr-51",
        "name": {
          "en": "Chromium-51",
          "pt-BR": "Crômio-51",
        },
        "neutrons": 27,
        "weight": { "standard": 50.944767431 },
        "abundance": "syn",
        "half_life": "27.7025 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "V-51"
          }
        ]
      },
      {
        "id": "Cr-52",
        "name": {
          "en": "Chromium-52",
          "pt-BR": "Crômio-52",
        },
        "neutrons": 28,
        "weight": { "standard": 51.940507472 },
        "abundance": 83.789,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Cr-53",
        "name": {
          "en": "Chromium-53",
          "pt-BR": "Crômio-53",
        },
        "neutrons": 29,
        "weight": { "standard": 52.940649386 },
        "abundance": 9.501,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Cr-54",
        "name": {
          "en": "Chromium-54",
          "pt-BR": "Crômio-54",
        },
        "neutrons": 30,
        "weight": { "standard": 53.938880395 },
        "abundance": 2.365,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Mn": {
    "id": "Mn",
    "symbol": "Mn",
    "name": {
      "en": "Manganese",
      "pt-BR": "Manganês"
    },
    "atomic_number": 25,
    "weight": { "standard": 54.9380432 },
    "period": 4,
    "group": 7,
    "type": "transition_metal",
    "melting_point": 1519,
    "boiling_point": 2334,
    "oxidation_states": ["-3","-2","-1","+1","+2*","+3","+4*","+5","+6","+7*"],
    "electronegativity": 1.55,
    "radius": { 
      "empirical": "127",
      "covalent": ["139±5","161±"],
    },
    "discovery_date": "1774",
    "discovery_by": "Carl Wilhelm Scheele",
    "electrons": [2, 8, 13, 2],
    "isotopes": [
      {
        "id": "Mn-52",
        "name": {
          "en": "Manganese-52",
          "pt-BR": "Manganês-52",
        },
        "neutrons": 27,
        "weight": { "standard": 51.945565464 },
        "abundance": "syn",
        "half_life": "5.591 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Cr-52"
          }
        ]
      },
      {
        "id": "Mn-53",
        "name": {
          "en": "Manganese-53",
          "pt-BR": "Manganês-53",
        },
        "neutrons": 28,
        "weight": { "standard": 52.941290117 },
        "abundance": "trace",
        "half_life": "3.74e6 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Cr-53"
          }
        ]
      },
      {
        "id": "Mn-54",
        "name": {
          "en": "Manganese-54",
          "pt-BR": "Manganês-54",
        },
        "neutrons": 29,
        "weight": { "standard": 53.940358854 },
        "abundance": "syn",
        "half_life": "312.03 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 99.99,
            "decay_to": "Cr-54"
          },
          {
            "mode": "beta_minus",
            "pct": 2.9e-4,
            "decay_to": "Fe-54"
          },
          {
            "mode": "beta_plus",
            "pct": 5.76e-7,
            "decay_to": "Cr-54"
          }
        ]
      },
      {
        "id": "Mn-55",
        "name": {
          "en": "Manganese-55",
          "pt-BR": "Manganês-55",
        },
        "neutrons": 30,
        "weight": { "standard": 54.938045141 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Fe": {
    "id": "Fe",
    "symbol": "Fe",
    "name": {
      "en": "Iron",
      "pt-BR": "Ferro"
    },
    "atomic_number": 26,
    "weight": { "standard": 55.8452 },
    "period": 4,
    "group": 8,
    "type": "transition_metal",
    "melting_point": 1811,
    "boiling_point": 3134,
    "oxidation_states": ["-4","-2","-1","+1","+2*","+3*","+4","+5","+6*","+7"],
    "electronegativity": 1.83,
    "radius": { 
      "empirical": "126",
      "covalent": ["132±3","152±6"],
    },
    "discovery_date": "5000 BCE",
    "discovery_by": "?",
    "electrons": [2, 8, 14, 2],
    "isotopes": [
      {
        "id": "Fe-54",
        "name": {
          "en": "Iron-54",
          "pt-BR": "Ferro-54",
        },
        "neutrons": 28,
        "weight": { "standard": 53.939610501 },
        "abundance": 5.85,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Fe-55",
        "name": {
          "en": "Iron-55",
          "pt-BR": "Ferro-55",
        },
        "neutrons": 29,
        "weight": { "standard": 54.938293357 },
        "abundance": "syn",
        "half_life": "2.737 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Mn-55"
          }
        ]
      },
      {
        "id": "Fe-56",
        "name": {
          "en": "Iron-56",
          "pt-BR": "Ferro-56",
        },
        "neutrons": 30,
        "weight": { "standard": 55.934937475 },
        "abundance": 91.754,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Fe-57",
        "name": {
          "en": "Iron-57",
          "pt-BR": "Ferro-57",
        },
        "neutrons": 31,
        "weight": { "standard": 56.935393969 },
        "abundance": 2.119,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Fe-58",
        "name": {
          "en": "Iron-58",
          "pt-BR": "Ferro-58",
        },
        "neutrons": 32,
        "weight": { "standard": 57.933275558 },
        "abundance": 0.282,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Fe-59",
        "name": {
          "en": "Iron-59",
          "pt-BR": "Ferro-59",
        },
        "neutrons": 33,
        "weight": { "standard": 58.934875464 },
        "abundance": "syn",
        "half_life": "44.459 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Co-59"
          }
        ]
      },
      {
        "id": "Fe-60",
        "name": {
          "en": "Iron-60",
          "pt-BR": "Ferro-60",
        },
        "neutrons": 34,
        "weight": { "standard": 59.934071683 },
        "abundance": "trace",
        "half_life": "2.6e6 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Co-60"
          }
        ]
      }
    ]
  },
  "Co": {
    "id": "Co",
    "symbol": "Co",
    "name": {
      "en": "Cobalt",
      "pt-BR": "Cobalto"
    },
    "atomic_number": 27,
    "weight": { "standard": 58.9331943 },
    "period": 4,
    "group": 9,
    "type": "transition_metal",
    "melting_point": 1768,
    "boiling_point": 3200,
    "oxidation_states": ["-3","-1","+1","+2*","+3*","+4","+5"],
    "electronegativity": 1.88,
    "radius": { 
      "empirical": "125",
      "covalent": ["126±3","150±7"],
    },
    "discovery_date": "1735",
    "discovery_by": "Georg Brandt",
    "electrons": [2, 8, 15, 2],
    "isotopes": [
      {
        "id": "Co-56",
        "name": {
          "en": "Cobalt-56",
          "pt-BR": "Cobalto-56",
        },
        "neutrons": 29,
        "weight": { "standard": 55.939839278 },
        "abundance": "syn",
        "half_life": "77.233 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Fe-56"
          }
        ]
      },
      {
        "id": "Co-57",
        "name": {
          "en": "Cobalt-57",
          "pt-BR": "Cobalto-57",
        },
        "neutrons": 30,
        "weight": { "standard": 56.936291373 },
        "abundance": "syn",
        "half_life": "271.74 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Fe-57"
          }
        ]
      },
      {
        "id": "Co-58",
        "name": {
          "en": "Cobalt-58",
          "pt-BR": "Cobalto-58",
        },
        "neutrons": 31,
        "weight": { "standard": 57.935752814 },
        "abundance": "syn",
        "half_life": "70.86 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Fe-58"
          }
        ]
      },
      {
        "id": "Co-59",
        "name": {
          "en": "Cobalt-59",
          "pt-BR": "Cobalto-59",
        },
        "neutrons": 32,
        "weight": { "standard": 58.933195048 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Co-60",
        "name": {
          "en": "Cobalt-60",
          "pt-BR": "Cobalto-60",
        },
        "neutrons": 33,
        "weight": { "standard": 59.933817059 },
        "abundance": "syn",
        "half_life": "5.2713 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Ni-60"
          }
        ]
      }
    ]
  },
  "Ni": {
    "id": "Ni",
    "symbol": "Ni",
    "name": {
      "en": "Nickel",
      "pt-BR": "Níquel"
    },
    "atomic_number": 28,
    "weight": { "standard": 58.69344 },
    "period": 4,
    "group": 10,
    "type": "transition_metal",
    "melting_point": 1728,
    "boiling_point": 3186,
    "oxidation_states": ["-2","-1","+1","+2*","+3","+4"],
    "electronegativity": 1.91,
    "radius": { 
      "empirical": "124",
      "covalent": "124±4",
      "waals": "163",
    },
    "discovery_date": "1751",
    "discovery_by": "Axel Fredrik Cronstedt",
    "electrons": [2, 8, 16, 2],
    "isotopes": [
      {
        "id": "Ni-56",
        "name": {
          "en": "Nickel-56",
          "pt-BR": "Níquel-56",
        },
        "neutrons": 28,
        "weight": { "standard": 55.942132022 },
        "abundance": "syn",
        "half_life": "6.075 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Fe-56"
          }
        ]
      },
      {
        "id": "Ni-58",
        "name": {
          "en": "Nickel-58",
          "pt-BR": "Níquel-58",
        },
        "neutrons": 29,
        "weight": { "standard": 57.935342907 },
        "abundance": 68.077,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ni-59",
        "name": {
          "en": "Nickel-59",
          "pt-BR": "Níquel-59",
        },
        "neutrons": 30,
        "weight": { "standard": 58.934346705 },
        "abundance": "trace",
        "half_life": "7.6e4 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 99,
            "decay_to": "Co-59"
          },
          {
            "mode": "beta_plus",
            "pct": 1.5e-5,
            "decay_to": "Co-59"
          }
        ]
      },
      {
        "id": "Ni-60",
        "name": {
          "en": "Nickel-60",
          "pt-BR": "Níquel-60",
        },
        "neutrons": 31,
        "weight": { "standard": 59.930786372 },
        "abundance": 26.2231,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ni-61",
        "name": {
          "en": "Nickel-61",
          "pt-BR": "Níquel-61",
        },
        "neutrons": 32,
        "weight": { "standard": 60.931056033 },
        "abundance": 1.1399,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ni-62",
        "name": {
          "en": "Nickel-62",
          "pt-BR": "Níquel-62",
        },
        "neutrons": 33,
        "weight": { "standard": 61.928345115 },
        "abundance": 3.6345,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ni-63",
        "name": {
          "en": "Nickel-63",
          "pt-BR": "Níquel-63",
        },
        "neutrons": 34,
        "weight": { "standard": 62.929669374 },
        "abundance": "syn",
        "half_life": "100.1 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Cu-63"
          }
        ]
      },
      {
        "id": "Ni-64",
        "name": {
          "en": "Nickel-64",
          "pt-BR": "Níquel-64",
        },
        "neutrons": 35,
        "weight": { "standard": 63.927965959 },
        "abundance": 0.9256,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Cu": {
    "id": "Cu",
    "symbol": "Cu",
    "name": {
      "en": "Copper",
      "pt-BR": "Cobre"
    },
    "atomic_number": 29,
    "weight": { "standard": 63.5463 },
    "period": 4,
    "group": 11,
    "type": "transition_metal",
    "melting_point": 1357.77,
    "boiling_point": 3200,
    "oxidation_states": ["-2","+1","+2*","+3","+4"],
    "electronegativity": 1.90,
    "radius": { 
      "empirical": "128",
      "covalent": "132±4",
      "waals": "140",
    },
    "discovery_date": "9000 BCE",
    "discovery_by": "?",
    "electrons": [2, 8, 18, 1],
    "isotopes": [
      {
        "id": "Cu-63",
        "name": {
          "en": "Copper-63",
          "pt-BR": "Cobre-63",
        },
        "neutrons": 34,
        "weight": { "standard": 62.929597474 },
        "abundance": 69.17,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Cu-65",
        "name": {
          "en": "Copper-65",
          "pt-BR": "Cobre-65",
        },
        "neutrons": 36,
        "weight": { "standard": 64.927789485 },
        "abundance": 30.83,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Zn": {
    "id": "Zn",
    "symbol": "Zn",
    "name": {
      "en": "Zinc",
      "pt-BR": "Zinco"
    },
    "atomic_number": 30,
    "weight": { "standard": 65.382 },
    "period": 4,
    "group": 12,
    "type": "transition_metal",
    "melting_point": 692.68,
    "boiling_point": 1180,
    "oxidation_states": ["-2","0","+1","+2*"],
    "electronegativity": 1.65,
    "radius": { 
      "empirical": "134",
      "covalent": "122±4",
      "waals": "139",
    },
    "discovery_date": "1000 BCE",
    "discovery_by": "?",
    "electrons": [2, 8, 18, 2],
    "isotopes": [
      {
        "id": "Zn-64",
        "name": {
          "en": "Zinc-64",
          "pt-BR": "Zinco-64",
        },
        "neutrons": 34,
        "weight": { "standard": 63.929142222 },
        "abundance": 48.63,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Zn-65",
        "name": {
          "en": "Zinc-65",
          "pt-BR": "Zinco-65",
        },
        "neutrons": 35,
        "weight": { "standard": 64.929240984 },
        "abundance": "syn",
        "half_life": "243.66 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Cu-65"
          }
        ]
      },
      {
        "id": "Zn-66",
        "name": {
          "en": "Zinc-66",
          "pt-BR": "Zinco-66",
        },
        "neutrons": 36,
        "weight": { "standard": 65.926033419 },
        "abundance": 27.9,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Zn-67",
        "name": {
          "en": "Zinc-67",
          "pt-BR": "Zinco-67",
        },
        "neutrons": 37,
        "weight": { "standard": 66.927127345 },
        "abundance": 4.1,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Zn-68",
        "name": {
          "en": "Zinc-68",
          "pt-BR": "Zinco-68",
        },
        "neutrons": 38,
        "weight": { "standard": 67.924844154 },
        "abundance": 18.75,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Zn-69",
        "name": {
          "en": "Zinc-69",
          "pt-BR": "Zinco-69",
        },
        "neutrons": 39,
        "weight": { "standard": 68.926550281 },
        "abundance": "syn",
        "half_life": "56.4 min",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Ga-69"
          }
        ]
      },
      {
        "id": "Zn-70",
        "name": {
          "en": "Zinc-70",
          "pt-BR": "Zinco-70",
        },
        "neutrons": 40,
        "weight": { "standard": 69.925319274 },
        "abundance": 0.62,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Ga": {
    "id": "Ga",
    "symbol": "Ga",
    "name": {
      "en": "Gallium",
      "pt-BR": "Gálio"
    },
    "atomic_number": 31,
    "weight": { "standard": 69.7231 },
    "period": 4,
    "group": 13,
    "type": "post_transitional",
    "melting_point": 302.91,
    "boiling_point": 2477,
    "oxidation_states": ["-5","-4","-2","-1","+1","+2","+3*"],
    "electronegativity": 1.81,
    "radius": { 
      "empirical": "135",
      "covalent": "122±3",
      "waals": "187",
    },
    "discovery_date": "1875",
    "discovery_by": "Lecoq de Boisbaudran",
    "electrons": [2, 8, 18, 3],
    "isotopes": [
      {
        "id": "Ga-69",
        "name": {
          "en": "Gallium-69",
          "pt-BR": "Gálio-69",
        },
        "neutrons": 38,
        "weight": { "standard": 68.925573587 },
        "abundance": 60.108,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ga-71",
        "name": {
          "en": "Gallium-71",
          "pt-BR": "Gálio-71",
        },
        "neutrons": 39,
        "weight": { "standard": 70.924701349 },
        "abundance": 39.892,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Ge": {
    "id": "Ge",
    "symbol": "Ge",
    "name": {
      "en": "Germanium",
      "pt-BR": "Germânio"
    },
    "atomic_number": 32,
    "weight": { "standard": 72.6308 },
    "period": 4,
    "group": 14,
    "type": "metalloid",
    "melting_point": 1211.4,
    "boiling_point": 3093,
    "oxidation_states": ["-4*","-3","-2","-1","0","+1","+2*","+3","+4*"],
    "electronegativity": 2.01,
    "radius": { 
      "empirical": "122",
      "covalent": "122",
      "waals": "211",
    },
    "discovery_date": "1886",
    "discovery_by": "Clemens Winkler",
    "electrons": [2, 8, 18, 4],
    "isotopes": [
      {
        "id": "Ge-68",
        "name": {
          "en": "Germanium-68",
          "pt-BR": "Germânio-68",
        },
        "neutrons": 36,
        "weight": { "standard": 67.92809424 },
        "abundance": "syn",
        "half_life": "270.95 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Ga-68"
          }
        ]
      },
      {
        "id": "Ge-70",
        "name": {
          "en": "Germanium-70",
          "pt-BR": "Germânio-70",
        },
        "neutrons": 38,
        "weight": { "standard": 69.924247381 },
        "abundance": 20.84,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ge-71",
        "name": {
          "en": "Germanium-71",
          "pt-BR": "Germânio-71",
        },
        "neutrons": 39,
        "weight": { "standard": 70.924950954 },
        "abundance": "syn",
        "half_life": "11.43 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Ga-71"
          }
        ]
      },
      {
        "id": "Ge-72",
        "name": {
          "en": "Germanium-72",
          "pt-BR": "Germânio-72",
        },
        "neutrons": 40,
        "weight": { "standard": 71.922075815 },
        "abundance": 27.54,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ge-73",
        "name": {
          "en": "Germanium-73",
          "pt-BR": "Germânio-73",
        },
        "neutrons": 41,
        "weight": { "standard": 72.923458945 },
        "abundance": 7.73,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ge-74",
        "name": {
          "en": "Germanium-74",
          "pt-BR": "Germânio-74",
        },
        "neutrons": 42,
        "weight": { "standard": 73.921177767 },
        "abundance": 36.28,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ge-76",
        "name": {
          "en": "Germanium-76",
          "pt-BR": "Germânio-76",
        },
        "neutrons": 44,
        "weight": { "standard": 75.921402557 },
        "abundance": 7.75,
        "half_life": "1.926e21 y",
        "decay": [
          {
            "mode": "double_beta_minus",
            "pct": 100,
            "decay_to": "Se-76"
          }
        ]
      }
    ]
  },
  "As": {
    "id": "As",
    "symbol": "As",
    "name": {
      "en": "Arsenic",
      "pt-BR": "Arsênio"
    },
    "atomic_number": 33,
    "weight": { "standard": 74.9215956 },
    "period": 4,
    "group": 15,
    "type": "metalloid",
    "melting_point": 1090,
    "boiling_point": 887,
    "oxidation_states": ["-3*","-2","-1","+1","+2","+3*","+4","+5*"],
    "electronegativity": 2.18,
    "radius": { 
      "empirical": "119",
      "covalent": "119±4",
      "waals": "185",
    },
    "discovery_date": "300",
    "discovery_by": "?",
    "electrons": [2, 8, 18, 5],
    "isotopes": [
      {
        "id": "As-73",
        "name": {
          "en": "Arsenic-73",
          "pt-BR": "Arsênio-73",
        },
        "neutrons": 40,
        "weight": { "standard": 72.923824844 },
        "abundance": "syn",
        "half_life": "80.30 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Se-76"
          }
        ]
      },
      {
        "id": "As-74",
        "name": {
          "en": "Arsenic-74",
          "pt-BR": "Arsênio-74",
        },
        "neutrons": 41,
        "weight": { "standard": 73.923928692 },
        "abundance": "syn",
        "half_life": "17.77 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 66,
            "decay_to": "Ge-74"
          },
          {
            "mode": "beta_minus",
            "pct": 34,
            "decay_to": "Se-74"
          }
        ]
      },
      {
        "id": "As-75",
        "name": {
          "en": "Arsenic-75",
          "pt-BR": "Arsênio-75",
        },
        "neutrons": 42,
        "weight": { "standard": 74.921596478 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Se": {
    "id": "Se",
    "symbol": "Se",
    "name": {
      "en": "Selenium",
      "pt-BR": "Selênio"
    },
    "atomic_number": 34,
    "weight": { "standard": 78.9718 },
    "period": 4,
    "group": 16,
    "type": "nonmetal",
    "melting_point": 494,
    "boiling_point": 958,
    "oxidation_states": ["-2*","-1","+1","+2*","+3","+4*","+5","+6*"],
    "electronegativity": 2.55,
    "radius": { 
      "empirical": "120",
      "covalent": "120±4",
      "waals": "190",
    },
    "discovery_date": "1817",
    "discovery_by": "Jöns Jakob Berzelius & Johann Gottlieb Gahn",
    "electrons": [2, 8, 18, 6],
    "isotopes": [
      {
        "id": "Se-72",
        "name": {
          "en": "Selenium-72",
          "pt-BR": "Selênio-72",
        },
        "neutrons": 38,
        "weight": { "standard": 71.927112352 },
        "abundance": "syn",
        "half_life": "8.40 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "As-72"
          }
        ]
      },
      {
        "id": "Se-74",
        "name": {
          "en": "Selenium-74",
          "pt-BR": "Selênio-74",
        },
        "neutrons": 40,
        "weight": { "standard": 73.922476436 },
        "abundance": 0.89,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Se-75",
        "name": {
          "en": "Selenium-75",
          "pt-BR": "Selênio-75",
        },
        "neutrons": 41,
        "weight": { "standard": 74.922523368 },
        "abundance": "syn",
        "half_life": "119.779 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "As-75"
          }
        ]
      },
      {
        "id": "Se-76",
        "name": {
          "en": "Selenium-76",
          "pt-BR": "Selênio-76",
        },
        "neutrons": 42,
        "weight": { "standard": 75.919213597 },
        "abundance": 9.37,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Se-77",
        "name": {
          "en": "Selenium-77",
          "pt-BR": "Selênio-77",
        },
        "neutrons": 43,
        "weight": { "standard": 76.919914038 },
        "abundance": 7.63,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Se-78",
        "name": {
          "en": "Selenium-78",
          "pt-BR": "Selênio-78",
        },
        "neutrons": 44,
        "weight": { "standard": 77.91730909 },
        "abundance": 23.77,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Se-79",
        "name": {
          "en": "Selenium-79",
          "pt-BR": "Selênio-79",
        },
        "neutrons": 45,
        "weight": { "standard": 78.918499098 },
        "abundance": "trace",
        "half_life": "3.27e5 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Br-79"
          }
        ]
      },
      {
        "id": "Se-80",
        "name": {
          "en": "Selenium-80",
          "pt-BR": "Selênio-80",
        },
        "neutrons": 46,
        "weight": { "standard": 79.916521271 },
        "abundance": 49.80,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Se-82",
        "name": {
          "en": "Selenium-82",
          "pt-BR": "Selênio-82",
        },
        "neutrons": 48,
        "weight": { "standard": 81.916699401 },
        "abundance": 8.73,
        "half_life": "0.97e20 y",
        "decay": [
          {
            "mode": "double_beta_minus",
            "pct": 100,
            "decay_to": "Kr-82"
          }
        ]
      }
    ]
  },
  "Br": {
    "id": "Br",
    "symbol": "Br",
    "name": {
      "en": "Bromine",
      "pt-BR": "Bromo"
    },
    "atomic_number": 35,
    "weight": { "conventional": 79.904, "standard": [79.901, 79.907] },
    "period": 4,
    "group": 17,
    "type": "nonmetal",
    "melting_point": 265.8,
    "boiling_point": 332,
    "oxidation_states": ["-1*","+1*","+3*","+4","+5*","+7"],
    "electronegativity": 2.96,
    "radius": { 
      "empirical": "120",
      "covalent": "120±3",
      "waals": "185",
    },
    "discovery_date": "1825",
    "discovery_by": "Antoine Jérôme Balard & Carl Jacob Löwig",
    "electrons": [2, 8, 18, 7],
    "isotopes": [
      {
        "id": "Br-79",
        "name": {
          "en": "Bromine-79",
          "pt-BR": "Bromo-79",
        },
        "neutrons": 44,
        "weight": { "standard": 78.918337087 },
        "abundance": 50.69,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Br-81",
        "name": {
          "en": "Bromine-81",
          "pt-BR": "Bromo-81",
        },
        "neutrons": 46,
        "weight": { "standard": 80.916290563 },
        "abundance": 49.31,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Kr": {
    "id": "Kr",
    "symbol": "Kr",
    "name": {
      "en": "Krypton",
      "pt-BR": "Criptônio"
    },
    "atomic_number": 36,
    "weight": { "standard": 83.7982 },
    "period": 4,
    "group": 18,
    "type": "noble_gas",
    "melting_point": 115.79,
    "boiling_point": 119.93,
    "oxidation_states": ["0*","+1","+2"],
    "electronegativity": 3.00,
    "radius": { 
      "covalent": "116±4",
      "waals": "202",
    },
    "discovery_date": "1898",
    "discovery_by": "William Ramsay & Morris Travers",
    "electrons": [2, 8, 18, 8],
    "isotopes": [
      {
        "id": "Kr-78",
        "name": {
          "en": "Krypton-78",
          "pt-BR": "Criptônio-78",
        },
        "neutrons": 42,
        "weight": { "standard": 77.920364783 },
        "abundance": 0.36,
        "half_life": "9.2e21 y",
        "decay": [
          {
            "mode": "double_k_plus",
            "pct": 100,
            "decay_to": "Se-78"
          }
        ]
      },
      {
        "id": "Kr-79",
        "name": {
          "en": "Krypton-79",
          "pt-BR": "Criptônio-79",
        },
        "neutrons": 43,
        "weight": { "standard": 78.920082431 },
        "abundance": "syn",
        "half_life": "35.04 h",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Br-79"
          }
        ]
      },
      {
        "id": "Kr-80",
        "name": {
          "en": "Krypton-80",
          "pt-BR": "Criptônio-80",
        },
        "neutrons": 44,
        "weight": { "standard": 79.916378965 },
        "abundance": 2.28,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Kr-81",
        "name": {
          "en": "Krypton-81",
          "pt-BR": "Criptônio-81",
        },
        "neutrons": 45,
        "weight": { "standard": 80.916592015 },
        "abundance": "trace",
        "half_life": "2.29e5 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Br-81"
          }
        ]
      },
      {
        "id": "Kr-82",
        "name": {
          "en": "Krypton-82",
          "pt-BR": "Criptônio-82",
        },
        "neutrons": 46,
        "weight": { "standard": 81.9134836 },
        "abundance": 11.58,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Kr-83",
        "name": {
          "en": "Krypton-83",
          "pt-BR": "Criptônio-83",
        },
        "neutrons": 47,
        "weight": { "standard": 82.914136099 },
        "abundance": 11.49,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Kr-84",
        "name": {
          "en": "Krypton-84",
          "pt-BR": "Criptônio-84",
        },
        "neutrons": 48,
        "weight": { "standard": 83.911506687 },
        "abundance": 57,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Kr-85",
        "name": {
          "en": "Krypton-85",
          "pt-BR": "Criptônio-85",
        },
        "neutrons": 49,
        "weight": { "standard": 84.912527331 },
        "abundance": "syn",
        "half_life": "10.776 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Rb-85"
          }
        ]
      },
      {
        "id": "Kr-86",
        "name": {
          "en": "Krypton-86",
          "pt-BR": "Criptônio-86",
        },
        "neutrons": 50,
        "weight": { "standard": 85.910610729 },
        "abundance": 17.3,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Rb": {
    "id": "Rb",
    "symbol": "Rb",
    "name": {
      "en": "Rubidium",
      "pt-BR": "Rubídio"
    },
    "atomic_number": 37,
    "weight": { "standard": 85.46783 },
    "period": 5,
    "group": 1,
    "type": "alkali_metal",
    "melting_point": 312.46,
    "boiling_point": 961,
    "oxidation_states": ["-1","+1*"],
    "electronegativity": 0.82,
    "radius": { 
      "empirical": "248",
      "covalent": "220±9",
      "waals": "303",
    },
    "discovery_date": "1861",
    "discovery_by": "Robert Bunsen & Gustav Kirchhoff",
    "electrons": [2, 8, 18, 8, 1],
    "isotopes": [
      {
        "id": "Rb-83",
        "name": {
          "en": "Rubidium-83",
          "pt-BR": "Rubídio-83",
        },
        "neutrons": 46,
        "weight": { "standard": 82.915109701 },
        "abundance": "syn",
        "half_life": "86.2 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Kr-83"
          }
        ]
      },
      {
        "id": "Rb-84",
        "name": {
          "en": "Rubidium-84",
          "pt-BR": "Rubídio-84",
        },
        "neutrons": 47,
        "weight": { "standard": 83.914384821 },
        "abundance": "syn",
        "half_life": "33.1 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 96.2,
            "decay_to": "Kr-84"
          },
          {
            "mode": "beta_minus",
            "pct": 3.8,
            "decay_to": "Sr-84"
          }
        ]
      },
      {
        "id": "Rb-85",
        "name": {
          "en": "Rubidium-85",
          "pt-BR": "Rubídio-85",
        },
        "neutrons": 48,
        "weight": { "standard": 84.911789737 },
        "abundance": 72.17,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Rb-86",
        "name": {
          "en": "Rubidium-86",
          "pt-BR": "Rubídio-86",
        },
        "neutrons": 49,
        "weight": { "standard": 85.911167419 },
        "abundance": "syn",
        "half_life": "18.642 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 99.9948,
            "decay_to": "Sr-86"
          },
          {
            "mode": "k_plus",
            "pct": 0.00052,
            "decay_to": "Kr-86"
          }
        ]
      },
      {
        "id": "Rb-87",
        "name": {
          "en": "Rubidium-87",
          "pt-BR": "Rubídio-87",
        },
        "neutrons": 50,
        "weight": { "standard": 86.909180526 },
        "abundance": 27.83,
        "half_life": "4.923e10 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Sr-87"
          }
        ]
      }
    ]
  },
  "Sr": {
    "id": "Sr",
    "symbol": "Sr",
    "name": {
      "en": "Strontium",
      "pt-BR": "Estrôncio"
    },
    "atomic_number": 38,
    "weight": { "standard": 87.621 },
    "period": 5,
    "group": 2,
    "type": "alkaline_earth",
    "melting_point": 1050,
    "boiling_point": 1655,
    "oxidation_states": ["+1","+2*"],
    "electronegativity": 0.95,
    "radius": { 
      "empirical": "215",
      "covalent": "195±10",
      "waals": "249",
    },
    "discovery_date": "1787",
    "discovery_by": "William Cruickshank",
    "electrons": [2, 8, 18, 8, 2],
    "isotopes": [
      {
        "id": "Sr-82",
        "name": {
          "en": "Strontium-82",
          "pt-BR": "Estrôncio-82",
        },
        "neutrons": 44,
        "weight": { "standard": 81.918401639 },
        "abundance": "syn",
        "half_life": "25.36 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Rb-82"
          }
        ]
      },
      {
        "id": "Sr-83",
        "name": {
          "en": "Strontium-83",
          "pt-BR": "Estrôncio-83",
        },
        "neutrons": 45,
        "weight": { "standard": 82.917556701 },
        "abundance": "syn",
        "half_life": "32.41 h",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Rb-83"
          }
        ]
      },
      {
        "id": "Sr-84",
        "name": {
          "en": "Strontium-84",
          "pt-BR": "Estrôncio-84",
        },
        "neutrons": 46,
        "weight": { "standard": 83.913425275 },
        "abundance": 0.56,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sr-85",
        "name": {
          "en": "Strontium-85",
          "pt-BR": "Estrôncio-85",
        },
        "neutrons": 47,
        "weight": { "standard": 84.912932803 },
        "abundance": "syn",
        "half_life": "64.853 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Rb-85"
          }
        ]
      },
      {
        "id": "Sr-86",
        "name": {
          "en": "Strontium-86",
          "pt-BR": "Estrôncio-86",
        },
        "neutrons": 48,
        "weight": { "standard": 85.909260204 },
        "abundance": 9.86,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sr-87",
        "name": {
          "en": "Strontium-87",
          "pt-BR": "Estrôncio-87",
        },
        "neutrons": 49,
        "weight": { "standard": 86.908877124 },
        "abundance": 7,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sr-88",
        "name": {
          "en": "Strontium-88",
          "pt-BR": "Estrôncio-88",
        },
        "neutrons": 50,
        "weight": { "standard": 87.905612124 },
        "abundance": 82.58,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sr-89",
        "name": {
          "en": "Strontium-89",
          "pt-BR": "Estrôncio-89",
        },
        "neutrons": 51,
        "weight": { "standard": 88.907450675 },
        "abundance": "syn",
        "half_life": "50.57 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Y-89"
          }
        ]
      },
      {
        "id": "Sr-90",
        "name": {
          "en": "Strontium-90",
          "pt-BR": "Estrôncio-90",
        },
        "neutrons": 52,
        "weight": { "standard": 89.907737888 },
        "abundance": "trace",
        "half_life": "28.90 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Y-90"
          }
        ]
      }
    ]
  },
  "Y": {
    "id": "Y",
    "symbol": "Y",
    "name": {
      "en": "Yttrium",
      "pt-BR": "Ítrio"
    },
    "atomic_number": 39,
    "weight": { "standard": 88.905841 },
    "period": 5,
    "group": 3,
    "type": "transition_metal",
    "melting_point": 1799,
    "boiling_point": 3618,
    "oxidation_states": ["+1","+2","+3*"],
    "electronegativity": 1.22,
    "radius": { 
      "empirical": "180",
      "covalent": "190±7"
    },
    "discovery_date": "1794",
    "discovery_by": "Johan Gadolin",
    "electrons": [2, 8, 18, 9, 2],
    "isotopes": [
      {
        "id": "Y-87",
        "name": {
          "en": "Yttrium-87",
          "pt-BR": "Ítrio-87",
        },
        "neutrons": 48,
        "weight": { "standard": 86.91087573 },
        "abundance": "syn",
        "half_life": "79.8 h",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Sr-87"
          }
        ]
      },
      {
        "id": "Y-88",
        "name": {
          "en": "Yttrium-88",
          "pt-BR": "Ítrio-88",
        },
        "neutrons": 49,
        "weight": { "standard": 87.909501146 },
        "abundance": "syn",
        "half_life": "106.616 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Sr-88"
          }
        ]
      },
      {
        "id": "Y-89",
        "name": {
          "en": "Yttrium-89",
          "pt-BR": "Ítrio-89",
        },
        "neutrons": 50,
        "weight": { "standard": 88.905848295 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Y-90",
        "name": {
          "en": "Yttrium-90",
          "pt-BR": "Ítrio-90",
        },
        "neutrons": 51,
        "weight": { "standard": 89.907151886 },
        "abundance": "syn",
        "half_life": "64.053 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Zr-90"
          }
        ]
      },
      {
        "id": "Y-91",
        "name": {
          "en": "Yttrium-91",
          "pt-BR": "Ítrio-91",
        },
        "neutrons": 52,
        "weight": { "standard": 90.907304791 },
        "abundance": "syn",
        "half_life": "58.5 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Zr-91"
          }
        ]
      }
    ]
  },
  "Zr": {
    "id": "Zr",
    "symbol": "Zr",
    "name": {
      "en": "Zirconium",
      "pt-BR": "Zircônio"
    },
    "atomic_number": 40,
    "weight": { "standard": 91.2242 },
    "period": 5,
    "group": 4,
    "type": "transition_metal",
    "melting_point": 2128,
    "boiling_point": 4682,
    "oxidation_states": ["-2","+1","+2","+3","+4*"],
    "electronegativity": 1.33,
    "radius": { 
      "empirical": "160",
      "covalent": "175±7"
    },
    "discovery_date": "1789",
    "discovery_by": "Martin Heinrich Klaproth",
    "electrons": [2, 8, 18, 10, 2],
    "isotopes": [
      {
        "id": "Zr-88",
        "name": {
          "en": "Zirconium-88",
          "pt-BR": "Zircônio-88",
        },
        "neutrons": 48,
        "weight": { "standard": 87.910226904 },
        "abundance": "syn",
        "half_life": "83.4 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Y-88"
          }
        ]
      },
      {
        "id": "Zr-89",
        "name": {
          "en": "Zirconium-89",
          "pt-BR": "Zircônio-89",
        },
        "neutrons": 49,
        "weight": { "standard": 88.9088895 },
        "abundance": "syn",
        "half_life": "78.41 h",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Y-89"
          }
        ]
      },
      {
        "id": "Zr-90",
        "name": {
          "en": "Zirconium-90",
          "pt-BR": "Zircônio-90",
        },
        "neutrons": 50,
        "weight": { "standard": 89.904704416 },
        "abundance": 51.45,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Zr-91",
        "name": {
          "en": "Zirconium-91",
          "pt-BR": "Zircônio-91",
        },
        "neutrons": 51,
        "weight": { "standard": 90.905645767 },
        "abundance": 11.22,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Zr-92",
        "name": {
          "en": "Zirconium-92",
          "pt-BR": "Zircônio-92",
        },
        "neutrons": 52,
        "weight": { "standard": 91.905040847 },
        "abundance": 17.15,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Zr-93",
        "name": {
          "en": "Zirconium-93",
          "pt-BR": "Zircônio-93",
        },
        "neutrons": 53,
        "weight": { "standard": 92.906476006 },
        "abundance": "trace",
        "half_life": "1.53e6 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Nb-93"
          }
        ]
      },
      {
        "id": "Zr-94",
        "name": {
          "en": "Zirconium-94",
          "pt-BR": "Zircônio-94",
        },
        "neutrons": 54,
        "weight": { "standard": 93.906315192 },
        "abundance": 17.38,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Zr-96",
        "name": {
          "en": "Zirconium-96",
          "pt-BR": "Zircônio-96",
        },
        "neutrons": 55,
        "weight": { "standard": 95.908273386 },
        "abundance": 2.80,
        "half_life": "2.0e19 y",
        "decay": [
          {
            "mode": "double_beta_minus",
            "pct": 100,
            "decay_to": "Mo-96"
          }
        ]
      }
    ]
  },
  "Nb": {
    "id": "Nb",
    "symbol": "Nb",
    "name": {
      "en": "Niobium",
      "pt-BR": "Nióbio"
    },
    "atomic_number": 41,
    "weight": { "standard": 92.906371 },
    "period": 5,
    "group": 5,
    "type": "transition_metal",
    "melting_point": 2750,
    "boiling_point": 5017,
    "oxidation_states": ["-3","-1","+1","+2","+3","+4","+5*"],
    "electronegativity": 1.6,
    "radius": { 
      "empirical": "146",
      "covalent": "164±6"
    },
    "discovery_date": "1801",
    "discovery_by": "Charles Hatchett",
    "electrons": [2, 8, 18, 12, 1],
    "isotopes": [
      {
        "id": "Nb-91",
        "name": {
          "en": "Niobium-91",
          "pt-BR": "Nióbio-91",
        },
        "neutrons": 50,
        "weight": { "standard": 90.906996243 },
        "abundance": "syn",
        "half_life": "680 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 99.98,
            "decay_to": "Zr-91"
          },
          {
            "mode": "beta_plus",
            "pct": 0.013,
            "decay_to": "Zr-91"
          }
        ]
      },
      {
        "id": "Nb-92",
        "name": {
          "en": "Niobium-92",
          "pt-BR": "Nióbio-92",
        },
        "neutrons": 51,
        "weight": { "standard": 91.907193888 },
        "abundance": "trace",
        "half_life": "3.47e7 y",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 99.95,
            "decay_to": "Zr-92"
          },
          {
            "mode": "beta_minus",
            "pct": 0.05,
            "decay_to": "Mo-92"
          }
        ]
      },
      {
        "id": "Nb-93",
        "name": {
          "en": "Niobium-93",
          "pt-BR": "Nióbio-93",
        },
        "neutrons": 53,
        "weight": { "standard": 92.906378058 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Nb-94",
        "name": {
          "en": "Niobium-94",
          "pt-BR": "Nióbio-94",
        },
        "neutrons": 54,
        "weight": { "standard": 93.907283888 },
        "abundance": "trace",
        "half_life": "20.3e3 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Mo-94"
          }
        ]
      },
      {
        "id": "Nb-95",
        "name": {
          "en": "Niobium-95",
          "pt-BR": "Nióbio-95",
        },
        "neutrons": 55,
        "weight": { "standard": 94.906835792 },
        "abundance": "syn",
        "half_life": "34.991 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Mo-95"
          }
        ]
      }
    ]
  },
  "Mo": {
    "id": "Mo",
    "symbol": "Mo",
    "name": {
      "en": "Molybdenum",
      "pt-BR": "Molibdênio"
    },
    "atomic_number": 42,
    "weight": { "standard": 95.951 },
    "period": 5,
    "group": 6,
    "type": "transition_metal",
    "melting_point": 2896,
    "boiling_point": 4912,
    "oxidation_states": ["-4","-2","-1","+1","+2","+3","+4*","+5","+6*"],
    "electronegativity": 2.16,
    "radius": { 
      "empirical": "139",
      "covalent": "154±5"
    },
    "discovery_date": "1778",
    "discovery_by": "Carl Wilhelm Scheele",
    "electrons": [2, 8, 18, 13, 1],
    "isotopes": [
      {
        "id": "Mo-92",
        "name": {
          "en": "Molybdenum-92",
          "pt-BR": "Molibdênio-92",
        },
        "neutrons": 50,
        "weight": { "standard": 91.906810991 },
        "abundance": 14.84,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Mo-93",
        "name": {
          "en": "Molybdenum-93",
          "pt-BR": "Molibdênio-93",
        },
        "neutrons": 51,
        "weight": { "standard": 92.90681261 },
        "abundance": "syn",
        "half_life": "4e3 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Nb-93"
          }
        ]
      },
      {
        "id": "Mo-94",
        "name": {
          "en": "Molybdenum-94",
          "pt-BR": "Molibdênio-94",
        },
        "neutrons": 52,
        "weight": { "standard": 93.905088269 },
        "abundance": 9.25,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Mo-95",
        "name": {
          "en": "Molybdenum-95",
          "pt-BR": "Molibdênio-95",
        },
        "neutrons": 53,
        "weight": { "standard": 94.905842129 },
        "abundance": 15.92,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Mo-96",
        "name": {
          "en": "Molybdenum-96",
          "pt-BR": "Molibdênio-96",
        },
        "neutrons": 54,
        "weight": { "standard": 95.904679477 },
        "abundance": 16.68,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Mo-97",
        "name": {
          "en": "Molybdenum-97",
          "pt-BR": "Molibdênio-97",
        },
        "neutrons": 55,
        "weight": { "standard": 96.906021465 },
        "abundance": 9.55,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Mo-98",
        "name": {
          "en": "Molybdenum-98",
          "pt-BR": "Molibdênio-98",
        },
        "neutrons": 56,
        "weight": { "standard": 97.905408169 },
        "abundance": 24.13,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Mo-99",
        "name": {
          "en": "Molybdenum-99",
          "pt-BR": "Molibdênio-99",
        },
        "neutrons": 57,
        "weight": { "standard": 98.90771187 },
        "abundance": "syn",
        "half_life": "2.7489 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Tc-99m"
          }
        ]
      },
      {
        "id": "Mo-100",
        "name": {
          "en": "Molybdenum-100",
          "pt-BR": "Molibdênio-100",
        },
        "neutrons": 58,
        "weight": { "standard": 99.907477336 },
        "abundance": 9.63,
        "half_life": "8.5e18 y",
        "decay": [
          {
            "mode": "double_beta_minus",
            "pct": 100,
            "decay_to": "Ru-100"
          }
        ]
      }
    ]
  },
  "Tc": {
    "id": "Tc",
    "symbol": "Tc",
    "name": {
      "en": "Technetium",
      "pt-BR": "Tecnécio"
    },
    "atomic_number": 43,
    "weight": { "most_stable": 98 },
    "period": 5,
    "group": 7,
    "type": "transition_metal",
    "melting_point": 2430,
    "boiling_point": 4538,
    "oxidation_states": ["-3","+1","+2","+3","+4*","+5","+6","+7*"],
    "electronegativity": 1.9,
    "radius": { 
      "empirical": "136",
      "covalent": "147±7"
    },
    "discovery_date": "1937",
    "discovery_by": "Emilio Sagrè & Carlo Perrier",
    "electrons": [2, 8, 18, 13, 2],
    "isotopes": [
      {
        "id": "Tc-95m",
        "name": {
          "en": "Technetium-95m",
          "pt-BR": "Tecnécio-95m",
        },
        "neutrons": 52,
        "weight": { "standard": 94.907657084 },
        "abundance": "syn",
        "half_life": "61 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 96.12,
            "decay_to": "Mo-95"
          },
          {
            "mode": "internal_convertion",
            "pct": 3.88,
            "decay_to": "Tc-95"
          }
        ]
      },
      {
        "id": "Tc-96",
        "name": {
          "en": "Technetium-96",
          "pt-BR": "Tecnécio-96",
        },
        "neutrons": 53,
        "weight": { "standard": 95.907871383 },
        "abundance": "syn",
        "half_life": "4.28 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Mo-96"
          }
        ]
      },
      {
        "id": "Tc-97",
        "name": {
          "en": "Technetium-97",
          "pt-BR": "Tecnécio-97",
        },
        "neutrons": 54,
        "weight": { "standard": 96.906365358 },
        "abundance": "syn",
        "half_life": "4.21e6 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Mo-97"
          }
        ]
      },
      {
        "id": "Tc-97m",
        "name": {
          "en": "Technetium-97m",
          "pt-BR": "Tecnécio-97m",
        },
        "neutrons": 54,
        "weight": { "standard": 96.906365358 },
        "abundance": "syn",
        "half_life": "91.0 d",
        "decay": [
          {
            "mode": "internal_convertion",
            "pct": 99.66,
            "decay_to": "Tc-97"
          },
          {
            "mode": "k_plus",
            "pct": 0.34,
            "decay_to": "Mo-97"
          }
        ]
      },
      {
        "id": "Tc-98",
        "name": {
          "en": "Technetium-98",
          "pt-BR": "Tecnécio-98",
        },
        "neutrons": 55,
        "weight": { "standard": 97.907215966 },
        "abundance": "syn",
        "half_life": "4.2e6 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Ru-98"
          }
        ]
      },
      {
        "id": "Tc-99",
        "name": {
          "en": "Technetium-99",
          "pt-BR": "Tecnécio-99",
        },
        "neutrons": 56,
        "weight": { "standard": 98.906254747 },
        "abundance": "trace",
        "half_life": "2.111e5 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Ru-99"
          }
        ]
      },
      {
        "id": "Tc-99m",
        "name": {
          "en": "Technetium-99m",
          "pt-BR": "Tecnécio-99m",
        },
        "neutrons": 56,
        "weight": { "standard": 98.906254747 },
        "abundance": "syn",
        "half_life": "6.0067 h",
        "decay": [
          {
            "mode": "internal_convertion",
            "pct": 99.99,
            "decay_to": "Tc-99"
          },
          {
            "mode": "beta_minus",
            "pct": 0.0037,
            "decay_to": "Ru-99"
          },
        ]
      }
    ]
  },
  "Ru": {
    "id": "Ru",
    "symbol": "Ru",
    "name": {
      "en": "Ruthenium",
      "pt-BR": "Rutênio"
    },
    "atomic_number": 44,
    "weight": { "standard": 101.072 },
    "period": 5,
    "group": 8,
    "type": "transition_metal",
    "melting_point": 2607,
    "boiling_point": 4423,
    "oxidation_states": ["-4","-2","+1","+2","+3*","+4*","+5","+6","+7","+8"],
    "electronegativity": 2.20,
    "radius": { 
      "empirical": "134",
      "covalent": "146±7"
    },
    "discovery_date": "1844",
    "discovery_by": "Karl Ernst Claus",
    "electrons": [2, 8, 18, 15, 1],
    "isotopes": [
      {
        "id": "Ru-96",
        "name": {
          "en": "Ruthenium-96",
          "pt-BR": "Rutênio-96",
        },
        "neutrons": 51,
        "weight": { "standard": 95.907597835 },
        "abundance": 5.54,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ru-97",
        "name": {
          "en": "Ruthenium-97",
          "pt-BR": "Rutênio-97",
        },
        "neutrons": 52,
        "weight": { "standard": 96.9075547 },
        "abundance": "syn",
        "half_life": "2.791 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Tc-97m"
          }
        ]
      },
      {
        "id": "Ru-98",
        "name": {
          "en": "Ruthenium-98",
          "pt-BR": "Rutênio-98",
        },
        "neutrons": 53,
        "weight": { "standard": 97.905287132 },
        "abundance": 1.87,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ru-99",
        "name": {
          "en": "Ruthenium-99",
          "pt-BR": "Rutênio-99",
        },
        "neutrons": 54,
        "weight": { "standard": 98.905939302 },
        "abundance": 12.76,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ru-100",
        "name": {
          "en": "Ruthenium-100",
          "pt-BR": "Rutênio-100",
        },
        "neutrons": 55,
        "weight": { "standard": 99.904219476 },
        "abundance": 12.6,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ru-101",
        "name": {
          "en": "Ruthenium-101",
          "pt-BR": "Rutênio-101",
        },
        "neutrons": 56,
        "weight": { "standard": 100.905582087 },
        "abundance": 17.06,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ru-102",
        "name": {
          "en": "Ruthenium-102",
          "pt-BR": "Rutênio-102",
        },
        "neutrons": 57,
        "weight": { "standard": 101.904349312 },
        "abundance": 31.55,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ru-103",
        "name": {
          "en": "Ruthenium-103",
          "pt-BR": "Rutênio-103",
        },
        "neutrons": 58,
        "weight": { "standard": 102.906323847 },
        "abundance": "syn",
        "half_life": "39.26 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Rh-103"
          }
        ]
      },
      {
        "id": "Ru-104",
        "name": {
          "en": "Ruthenium-104",
          "pt-BR": "Rutênio-104",
        },
        "neutrons": 59,
        "weight": { "standard": 103.905432701 },
        "abundance": 18.62,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ru-106",
        "name": {
          "en": "Ruthenium-106",
          "pt-BR": "Rutênio-106",
        },
        "neutrons": 61,
        "weight": { "standard": 105.907329433 },
        "abundance": "syn",
        "half_life": "373.59 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Rh-106"
          }
        ]
      }
    ]
  },
  "Rh": {
    "id": "Rh",
    "symbol": "Rh",
    "name": {
      "en": "Rhodium",
      "pt-BR": "Ródio"
    },
    "atomic_number": 45,
    "weight": { "standard": 102.905492 },
    "period": 5,
    "group": 9,
    "type": "transition_metal",
    "melting_point": 2237,
    "boiling_point": 3968,
    "oxidation_states": ["-3","-1","+1","+2","+3*","+4","+5","+6"],
    "electronegativity": 2.28,
    "radius": { 
      "empirical": "134",
      "covalent": "142±7"
    },
    "discovery_date": "1804",
    "discovery_by": "William Hyde Wollaston",
    "electrons": [2, 8, 18, 16, 1],
    "isotopes": [
      {
        "id": "Rh-99",
        "name": {
          "en": "Rhodium-99",
          "pt-BR": "Ródio-99",
        },
        "neutrons": 54,
        "weight": { "standard": 98.908132104 },
        "abundance": "syn",
        "half_life": "16.1 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Ru-99"
          }
        ]
      },
      {
        "id": "Rh-101",
        "name": {
          "en": "Rhodium-101",
          "pt-BR": "Ródio-101",
        },
        "neutrons": 56,
        "weight": { "standard": 100.906163625 },
        "abundance": "syn",
        "half_life": "3.3 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Ru-101"
          }
        ]
      },
      {
        "id": "Rh-102",
        "name": {
          "en": "Rhodium-102",
          "pt-BR": "Ródio-102",
        },
        "neutrons": 57,
        "weight": { "standard": 101.906843196 },
        "abundance": "syn",
        "half_life": "207.0 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 80,
            "decay_to": "Ru-102"
          },
          {
            "mode": "beta_minus",
            "pct": 20,
            "decay_to": "Pd-102"
          }
        ]
      },
      {
        "id": "Rh-103",
        "name": {
          "en": "Rhodium-103",
          "pt-BR": "Ródio-103",
        },
        "neutrons": 58,
        "weight": { "standard": 102.905504292 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Rh-105",
        "name": {
          "en": "Rhodium-105",
          "pt-BR": "Ródio-105",
        },
        "neutrons": 60,
        "weight": { "standard": 104.905693821 },
        "abundance": "syn",
        "half_life": "35.36 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Pd-105"
          }
        ]
      }
    ]
  },
  "Pd": {
    "id": "Pd",
    "symbol": "Pd",
    "name": {
      "en": "Palladium",
      "pt-BR": "Paládio"
    },
    "atomic_number": 46,
    "weight": { "standard": 106.421 },
    "period": 5,
    "group": 10,
    "type": "transition_metal",
    "melting_point": 1828.05,
    "boiling_point": 3236,
    "oxidation_states": ["0","+1","+2*","+3","+4*"],
    "electronegativity": 2.20,
    "radius": { 
      "empirical": "137",
      "covalent": "139±6",
      "waals": "163"
    },
    "discovery_date": "1802",
    "discovery_by": "William Hyde Wollaston",
    "electrons": [2, 8, 18, 18],
    "isotopes": [
      {
        "id": "Pd-100",
        "name": {
          "en": "Palladium-100",
          "pt-BR": "Paládio-100",
        },
        "neutrons": 54,
        "weight": { "standard": 99.908505886 },
        "abundance": "syn",
        "half_life": "3.36 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Rh-100"
          }
        ]
      },
      {
        "id": "Pd-102",
        "name": {
          "en": "Palladium-102",
          "pt-BR": "Paládio-102",
        },
        "neutrons": 56,
        "weight": { "standard": 101.905608544 },
        "abundance": 1.02,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Pd-103",
        "name": {
          "en": "Palladium-103",
          "pt-BR": "Paládio-103",
        },
        "neutrons": 57,
        "weight": { "standard": 102.906087307 },
        "abundance": "syn",
        "half_life": "16.991 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Rh-103"
          }
        ]
      },
      {
        "id": "Pd-104",
        "name": {
          "en": "Palladium-104",
          "pt-BR": "Paládio-104",
        },
        "neutrons": 58,
        "weight": { "standard": 103.904035834 },
        "abundance": 11.14,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Pd-105",
        "name": {
          "en": "Palladium-105",
          "pt-BR": "Paládio-105",
        },
        "neutrons": 59,
        "weight": { "standard": 104.90508492 },
        "abundance": 22.33,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Pd-106",
        "name": {
          "en": "Palladium-106",
          "pt-BR": "Paládio-106",
        },
        "neutrons": 60,
        "weight": { "standard": 105.903485715 },
        "abundance": 27.33,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Pd-107",
        "name": {
          "en": "Palladium-107",
          "pt-BR": "Paládio-107",
        },
        "neutrons": 61,
        "weight": { "standard": 106.905133481 },
        "abundance": "trace",
        "half_life": "6.5e6 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Ag-107"
          }
        ]
      },
      {
        "id": "Pd-108",
        "name": {
          "en": "Palladium-108",
          "pt-BR": "Paládio-108",
        },
        "neutrons": 62,
        "weight": { "standard": 107.903891701 },
        "abundance": 26.46,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Pd-110",
        "name": {
          "en": "Palladium-110",
          "pt-BR": "Paládio-110",
        },
        "neutrons": 64,
        "weight": { "standard": 109.905153254 },
        "abundance": 11.72,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Ag": {
    "id": "Ag",
    "symbol": "Ag",
    "name": {
      "en": "Silver",
      "pt-BR": "Prata"
    },
    "atomic_number": 47,
    "weight": { "standard": 107.86822 },
    "period": 5,
    "group": 11,
    "type": "transition_metal",
    "melting_point": 1234.93,
    "boiling_point": 2435,
    "oxidation_states": ["-2","-1","+1*","+2","+3"],
    "electronegativity": 1.93,
    "radius": { 
      "empirical": "144",
      "covalent": "145±5",
      "waals": "172"
    },
    "discovery_date": "5000 BCE",
    "discovery_by": "?",
    "electrons": [2, 8, 18, 18, 1],
    "isotopes": [
      {
        "id": "Ag-105",
        "name": {
          "en": "Silver-105",
          "pt-BR": "Prata-105",
        },
        "neutrons": 58,
        "weight": { "standard": 104.906528661 },
        "abundance": "syn",
        "half_life": "41.29 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Pd-105"
          }
        ]
      },
      {
        "id": "Ag-106m",
        "name": {
          "en": "Silver-106m",
          "pt-BR": "Prata-106m",
        },
        "neutrons": 59,
        "weight": { "standard": 105.906668921 },
        "abundance": "syn",
        "half_life": "8.28 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 99.99,
            "decay_to": "Pd-106"
          },
          {
            "mode": "internal_convertion",
            "pct": 4.16e-6,
            "decay_to": "Ag-106"
          }
        ]
      },
      {
        "id": "Ag-107",
        "name": {
          "en": "Silver-107",
          "pt-BR": "Prata-107",
        },
        "neutrons": 60,
        "weight": { "standard": 106.90509682 },
        "abundance": 51.839,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ag-108m",
        "name": {
          "en": "Silver-108m",
          "pt-BR": "Prata-108m",
        },
        "neutrons": 61,
        "weight": { "standard": 107.905955556 },
        "abundance": "syn",
        "half_life": "418 y",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 91.3,
            "decay_to": "Pd-108"
          },
          {
            "mode": "internal_convertion",
            "pct": 8.96,
            "decay_to": "Ag-108"
          }
        ]
      },
      {
        "id": "Ag-108",
        "name": {
          "en": "Silver-108",
          "pt-BR": "Prata-108",
        },
        "neutrons": 61,
        "weight": { "standard": 107.905955556 },
        "abundance": "syn",
        "half_life": "2.37 min",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 97.15,
            "decay_to": "Cd-108"
          },
          {
            "mode": "beta_plus",
            "pct": 2.85,
            "decay_to": "Pd-108"
          }
        ]
      },
      {
        "id": "Ag-109",
        "name": {
          "en": "Silver-109",
          "pt-BR": "Prata-109",
        },
        "neutrons": 62,
        "weight": { "standard": 108.904752292 },
        "abundance": 48.161,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ag-111",
        "name": {
          "en": "Silver-111",
          "pt-BR": "Prata-111",
        },
        "neutrons": 64,
        "weight": { "standard": 110.905291157 },
        "abundance": "syn",
        "half_life": "7.45 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Cd-111"
          }
        ]
      }
    ]
  },
  "Cd": {
    "id": "Cd",
    "symbol": "Cd",
    "name": {
      "en": "Cadmium",
      "pt-BR": "Cádmio"
    },
    "atomic_number": 48,
    "weight": { "standard": 112.4144 },
    "period": 5,
    "group": 12,
    "type": "transition_metal",
    "melting_point": 594.22,
    "boiling_point": 1040,
    "oxidation_states": ["-2","+1","+2*"],
    "electronegativity": 1.69,
    "radius": { 
      "empirical": "151",
      "covalent": "144±9",
      "waals": "158"
    },
    "discovery_date": "1817",
    "discovery_by": "Karl Samuel Leberecht Hermann & Friedrich Stromeyer",
    "electrons": [2, 8, 18, 18, 2],
    "isotopes": [
      {
        "id": "Cd-106",
        "name": {
          "en": "Cadmium-106",
          "pt-BR": "Cádmio-106",
        },
        "neutrons": 58,
        "weight": { "standard": 105.90645941 },
        "abundance": 1.25,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Cd-107",
        "name": {
          "en": "Cadmium-107",
          "pt-BR": "Cádmio-107",
        },
        "neutrons": 59,
        "weight": { "standard": 106.906617928 },
        "abundance": "syn",
        "half_life": "6.50 h",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Ag-107m"
          }
        ]
      },
      {
        "id": "Cd-108",
        "name": {
          "en": "Cadmium-108",
          "pt-BR": "Cádmio-108",
        },
        "neutrons": 60,
        "weight": { "standard": 107.904183683 },
        "abundance": 0.89,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Cd-109",
        "name": {
          "en": "Cadmium-109",
          "pt-BR": "Cádmio-109",
        },
        "neutrons": 61,
        "weight": { "standard": 108.904982293 },
        "abundance": "syn",
        "half_life": "461.4 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Ag-109"
          }
        ]
      },
      {
        "id": "Cd-110",
        "name": {
          "en": "Cadmium-110",
          "pt-BR": "Cádmio-110",
        },
        "neutrons": 62,
        "weight": { "standard": 109.90300207 },
        "abundance": 12.47,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Cd-111",
        "name": {
          "en": "Cadmium-111",
          "pt-BR": "Cádmio-111",
        },
        "neutrons": 63,
        "weight": { "standard": 110.904178107 },
        "abundance": 12.80,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Cd-112",
        "name": {
          "en": "Cadmium-112",
          "pt-BR": "Cádmio-112",
        },
        "neutrons": 64,
        "weight": { "standard": 111.902757809 },
        "abundance": 24.11,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Cd-113",
        "name": {
          "en": "Cadmium-113",
          "pt-BR": "Cádmio-113",
        },
        "neutrons": 65,
        "weight": { "standard": 112.904401662 },
        "abundance": 12.23,
        "half_life": "8.04e15 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "In-113"
          }
        ]
      },
      {
        "id": "Cd-113m",
        "name": {
          "en": "Cadmium-113m",
          "pt-BR": "Cádmio-113m",
        },
        "neutrons": 65,
        "weight": { "standard": 112.904401662 },
        "abundance": "syn",
        "half_life": "14.1 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 99.86,
            "decay_to": "In-113"
          },
          {
            "mode": "internal_convertion",
            "pct": 0.139,
            "decay_to": "Cd-113"
          }
        ]
      },
      {
        "id": "Cd-114",
        "name": {
          "en": "Cadmium-114",
          "pt-BR": "Cádmio-114",
        },
        "neutrons": 66,
        "weight": { "standard": 113.90335854 },
        "abundance": 28.75,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Cd-115",
        "name": {
          "en": "Cadmium-115",
          "pt-BR": "Cádmio-115",
        },
        "neutrons": 67,
        "weight": { "standard": 114.905430969 },
        "abundance": "syn",
        "half_life": "53.46 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "In-115m"
          }
        ]
      },
      {
        "id": "Cd-116",
        "name": {
          "en": "Cadmium-116",
          "pt-BR": "Cádmio-116",
        },
        "neutrons": 68,
        "weight": { "standard": 115.904755809 },
        "abundance": 7.51,
        "half_life": "2.8e19 y",
        "decay": [
          {
            "mode": "double_beta_minus",
            "pct": 100,
            "decay_to": "Sn-116"
          }
        ]
      }
    ]
  },
  "In": {
    "id": "In",
    "symbol": "In",
    "name": {
      "en": "Indium",
      "pt-BR": "Índio"
    },
    "atomic_number": 49,
    "weight": { "standard": 114.8181 },
    "period": 5,
    "group": 13,
    "type": "post_transitional",
    "melting_point": 429.75,
    "boiling_point": 2345,
    "oxidation_states": ["-5","-2","-1","+1","+2","+3*"],
    "electronegativity": 1.78,
    "radius": { 
      "empirical": "167",
      "covalent": "142±5",
      "waals": "193"
    },
    "discovery_date": "1863",
    "discovery_by": "Ferdinand Reich & Hieronymous Theodor Richter",
    "electrons": [2, 8, 18, 18, 3],
    "isotopes": [
      {
        "id": "In-113",
        "name": {
          "en": "Indium-113",
          "pt-BR": "Índio-113",
        },
        "neutrons": 64,
        "weight": { "standard": 112.904057761 },
        "abundance": 4.29,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "In-115",
        "name": {
          "en": "Indium-115",
          "pt-BR": "Índio-115",
        },
        "neutrons": 66,
        "weight": { "standard": 114.903878484 },
        "abundance": 95.71,
        "half_life": "4.41e14 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Sn-115"
          }
        ]
      }
    ]
  },
  "Sn": {
    "id": "Sn",
    "symbol": "Sn",
    "name": {
      "en": "Tin",
      "pt-BR": "Estanho"
    },
    "atomic_number": 50,
    "weight": { "standard": 118.7107 },
    "period": 5,
    "group": 14,
    "type": "post_transitional",
    "melting_point": 505.08,
    "boiling_point": 2875,
    "oxidation_states": ["-4*","-3","-2","-1","+1","+2*","+3","+4*"],
    "electronegativity": 1.96,
    "radius": { 
      "empirical": "140",
      "covalent": "139±4",
      "waals": "217"
    },
    "discovery_date": "3500 BCE",
    "discovery_by": "?",
    "electrons": [2, 8, 18, 18, 4],
    "isotopes": [
      {
        "id": "Sn-112",
        "name": {
          "en": "Tin-112",
          "pt-BR": "Estanho-112",
        },
        "neutrons": 62,
        "weight": { "standard": 111.904818207 },
        "abundance": 0.97,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sn-114",
        "name": {
          "en": "Tin-114",
          "pt-BR": "Estanho-114",
        },
        "neutrons": 64,
        "weight": { "standard": 113.902778869 },
        "abundance": 0.66,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sn-115",
        "name": {
          "en": "Tin-115",
          "pt-BR": "Estanho-115",
        },
        "neutrons": 65,
        "weight": { "standard": 114.903342397 },
        "abundance": 0.34,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sn-116",
        "name": {
          "en": "Tin-116",
          "pt-BR": "Estanho-116",
        },
        "neutrons": 66,
        "weight": { "standard": 115.90174053 },
        "abundance": 14.54,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sn-117",
        "name": {
          "en": "Tin-117",
          "pt-BR": "Estanho-117",
        },
        "neutrons": 67,
        "weight": { "standard": 116.902951656 },
        "abundance": 7.68,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sn-118",
        "name": {
          "en": "Tin-118",
          "pt-BR": "Estanho-118",
        },
        "neutrons": 68,
        "weight": { "standard": 117.901603167 },
        "abundance": 24.22,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sn-119",
        "name": {
          "en": "Tin-119",
          "pt-BR": "Estanho-119",
        },
        "neutrons": 69,
        "weight": { "standard": 118.90330763 },
        "abundance": 8.59,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sn-120",
        "name": {
          "en": "Tin-120",
          "pt-BR": "Estanho-120",
        },
        "neutrons": 70,
        "weight": { "standard": 119.902194676 },
        "abundance": 32.58,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sn-122",
        "name": {
          "en": "Tin-122",
          "pt-BR": "Estanho-122",
        },
        "neutrons": 72,
        "weight": { "standard": 121.903439046 },
        "abundance": 4.63,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sn-124",
        "name": {
          "en": "Tin-124",
          "pt-BR": "Estanho-124",
        },
        "neutrons": 74,
        "weight": { "standard": 123.905273946 },
        "abundance": 5.79,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sn-126",
        "name": {
          "en": "Tin-126",
          "pt-BR": "Estanho-126",
        },
        "neutrons": 76,
        "weight": { "standard": 125.90765328 },
        "abundance": "trace",
        "half_life": "2.30e5 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 66.5,
            "decay_to": "Sb-126m2"
          },
          {
            "mode": "beta_minus",
            "pct": 33.5,
            "decay_to": "Sb-126m1"
          }
        ]
      }
    ]
  },
  "Sb": {
    "id": "Sb",
    "symbol": "Sb",
    "name": {
      "en": "Antimony",
      "pt-BR": "Antimônio"
    },
    "atomic_number": 51,
    "weight": { "standard": 121.7601 },
    "period": 5,
    "group": 15,
    "type": "metalloid",
    "melting_point": 903.78,
    "boiling_point": 1860,
    "oxidation_states": ["-3*","-2","-1","+1","+2","+3*","+4","+5*"],
    "electronegativity": 2.05,
    "radius": { 
      "empirical": "140",
      "covalent": "139±5",
      "waals": "206"
    },
    "discovery_date": "800",
    "discovery_by": "?",
    "electrons": [2, 8, 18, 18, 5],
    "isotopes": [
      {
        "id": "Sb-121",
        "name": {
          "en": "Antimony-121",
          "pt-BR": "Antimônio-121",
        },
        "neutrons": 70,
        "weight": { "standard": 120.903815686 },
        "abundance": 57.21,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sb-123",
        "name": {
          "en": "Antimony-123",
          "pt-BR": "Antimônio-123",
        },
        "neutrons": 72,
        "weight": { "standard": 122.90421397 },
        "abundance": 42.79,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sb-125",
        "name": {
          "en": "Antimony-125",
          "pt-BR": "Antimônio-125",
        },
        "neutrons": 74,
        "weight": { "standard": 124.905253818 },
        "abundance": "syn",
        "half_life": "2.75856 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Te-125m"
          }
        ]
      }
    ]
  },
  "Te": {
    "id": "Te",
    "symbol": "Te",
    "name": {
      "en": "Tellurium",
      "pt-BR": "Telúrio"
    },
    "atomic_number": 52,
    "weight": { "standard": 127.603 },
    "period": 5,
    "group": 16,
    "type": "metalloid",
    "melting_point": 722.66,
    "boiling_point": 1261,
    "oxidation_states": ["-2*","-1","+1","+2*","+3","+4*","+5","+6*"],
    "electronegativity": 2.1,
    "radius": { 
      "empirical": "140",
      "covalent": "138±4",
      "waals": "206"
    },
    "discovery_date": "1782",
    "discovery_by": "Franz-Joseph Müller von Reichenstein",
    "electrons": [2, 8, 18, 18, 6],
    "isotopes": [
      {
        "id": "Te-120",
        "name": {
          "en": "Tellurium-120",
          "pt-BR": "Telúrio-120",
        },
        "neutrons": 68,
        "weight": { "standard": 119.904020222 },
        "abundance": 0.09,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Te-121",
        "name": {
          "en": "Tellurium-121",
          "pt-BR": "Telúrio-121",
        },
        "neutrons": 69,
        "weight": { "standard": 120.904936424 },
        "abundance": "syn",
        "half_life": "19.16 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Sb-121"
          }
        ]
      },
      {
        "id": "Te-122",
        "name": {
          "en": "Tellurium-122",
          "pt-BR": "Telúrio-122",
        },
        "neutrons": 70,
        "weight": { "standard": 121.903043898 },
        "abundance": 2.55,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Te-123",
        "name": {
          "en": "Tellurium-123",
          "pt-BR": "Telúrio-123",
        },
        "neutrons": 71,
        "weight": { "standard": 122.904270029 },
        "abundance": 0.89,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Te-124",
        "name": {
          "en": "Tellurium-124",
          "pt-BR": "Telúrio-124",
        },
        "neutrons": 72,
        "weight": { "standard": 123.902817896 },
        "abundance": 4.74,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Te-125",
        "name": {
          "en": "Tellurium-125",
          "pt-BR": "Telúrio-125",
        },
        "neutrons": 73,
        "weight": { "standard": 124.904430731 },
        "abundance": 7.07,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Te-126",
        "name": {
          "en": "Tellurium-126",
          "pt-BR": "Telúrio-126",
        },
        "neutrons": 74,
        "weight": { "standard": 125.903311696 },
        "abundance": 18.84,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Te-127",
        "name": {
          "en": "Tellurium-127",
          "pt-BR": "Telúrio-127",
        },
        "neutrons": 75,
        "weight": { "standard": 126.905226336 },
        "abundance": "syn",
        "half_life": "9.35 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "I-127"
          }
        ]
      },
      {
        "id": "Te-128",
        "name": {
          "en": "Tellurium-128",
          "pt-BR": "Telúrio-128",
        },
        "neutrons": 76,
        "weight": { "standard": 127.904463056 },
        "abundance": 31.74,
        "half_life": "2.2e24 y",
        "decay": [
          {
            "mode": "double_beta_minus",
            "pct": 100,
            "decay_to": "Xe-128"
          }
        ]
      },
      {
        "id": "Te-129",
        "name": {
          "en": "Tellurium-129",
          "pt-BR": "Telúrio-129",
        },
        "neutrons": 77,
        "weight": { "standard": 128.906598238 },
        "abundance": "syn",
        "half_life": "69.6 min",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "I-129"
          }
        ]
      },
      {
        "id": "Te-130",
        "name": {
          "en": "Tellurium-130",
          "pt-BR": "Telúrio-130",
        },
        "neutrons": 78,
        "weight": { "standard": 129.906224399 },
        "abundance": 34.08,
        "half_life": "8.2e20 y",
        "decay": [
          {
            "mode": "double_beta_minus",
            "pct": 100,
            "decay_to": "Xe-130"
          }
        ]
      }
    ]
  },
  "I": {
    "id": "I",
    "symbol": "I",
    "name": {
      "en": "Iodine",
      "pt-BR": "Iodo"
    },
    "atomic_number": 53,
    "weight": { "standard": 126.904473 },
    "period": 5,
    "group": 17,
    "type": "nonmetal",
    "melting_point": 386.85,
    "boiling_point": 457.4,
    "oxidation_states": ["-1*","+1*","+3*","+4","+5*","+6","+7*"],
    "electronegativity": 2.66,
    "radius": { 
      "empirical": "140",
      "covalent": "139±3",
      "waals": "198"
    },
    "discovery_date": "1811",
    "discovery_by": "Bernard Courtois",
    "electrons": [2, 8, 18, 18, 7],
    "isotopes": [
      {
        "id": "I-127",
        "name": {
          "en": "Iodine-127",
          "pt-BR": "Iodo-127",
        },
        "neutrons": 74,
        "weight": { "standard": 126.904472681 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "I-129",
        "name": {
          "en": "Iodine-129",
          "pt-BR": "Iodo-129",
        },
        "neutrons": 75,
        "weight": { "standard": 128.904987722 },
        "abundance": "trace",
        "half_life": "1.57e7 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Xe-129"
          }
        ]
      },
      {
        "id": "I-131",
        "name": {
          "en": "Iodine-131",
          "pt-BR": "Iodo-131",
        },
        "neutrons": 76,
        "weight": { "standard": 130.906124609 },
        "abundance": "syn",
        "half_life": "8.02070 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Xe-131"
          }
        ]
      }
    ]
  },
  "Xe": {
    "id": "Xe",
    "symbol": "Xe",
    "name": {
      "en": "Xenon",
      "pt-BR": "Xenônio"
    },
    "atomic_number": 54,
    "weight": { "standard": 131.2936 },
    "period": 5,
    "group": 18,
    "type": "noble_gas",
    "melting_point": 161.3,
    "boiling_point": 165.1,
    "oxidation_states": ["0*","+1","+2","+4","+6","+8"],
    "electronegativity": 2.6,
    "radius": { 
      "covalent": "140±9",
      "waals": "216"
    },
    "discovery_date": "1898",
    "discovery_by": "William Ramsay & Morris Travers",
    "electrons": [2, 8, 18, 18, 8],
    "isotopes": [
      {
        "id": "Xe-124",
        "name": {
          "en": "Xenon-124",
          "pt-BR": "Xenônio-124",
        },
        "neutrons": 70,
        "weight": { "standard": 123.905893003 },
        "abundance": 0.095,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Xe-125",
        "name": {
          "en": "Xenon-125",
          "pt-BR": "Xenônio-125",
        },
        "neutrons": 71,
        "weight": { "standard": 124.906395464 },
        "abundance": "syn",
        "half_life": "16.9 h",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "I-125"
          }
        ]
      },
      {
        "id": "Xe-126",
        "name": {
          "en": "Xenon-126",
          "pt-BR": "Xenônio-126",
        },
        "neutrons": 72,
        "weight": { "standard": 125.904273634 },
        "abundance": 0.089,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Xe-127",
        "name": {
          "en": "Xenon-127",
          "pt-BR": "Xenônio-127",
        },
        "neutrons": 73,
        "weight": { "standard": 126.905183723 },
        "abundance": "syn",
        "half_life": "36.345 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "I-127"
          }
        ]
      },
      {
        "id": "Xe-128",
        "name": {
          "en": "Xenon-128",
          "pt-BR": "Xenônio-128",
        },
        "neutrons": 74,
        "weight": { "standard": 127.903531275 },
        "abundance": 1.910,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Xe-129",
        "name": {
          "en": "Xenon-129",
          "pt-BR": "Xenônio-129",
        },
        "neutrons": 75,
        "weight": { "standard": 128.904779435 },
        "abundance": 26.401,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Xe-130",
        "name": {
          "en": "Xenon-130",
          "pt-BR": "Xenônio-130",
        },
        "neutrons": 76,
        "weight": { "standard": 129.903508007 },
        "abundance": 4.071,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Xe-131",
        "name": {
          "en": "Xenon-131",
          "pt-BR": "Xenônio-131",
        },
        "neutrons": 77,
        "weight": { "standard": 130.905082362 },
        "abundance": 21.232,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Xe-132",
        "name": {
          "en": "Xenon-132",
          "pt-BR": "Xenônio-132",
        },
        "neutrons": 78,
        "weight": { "standard": 131.904153457 },
        "abundance": 23.909,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Xe-133",
        "name": {
          "en": "Xenon-133",
          "pt-BR": "Xenônio-133",
        },
        "neutrons": 79,
        "weight": { "standard": 132.905910722 },
        "abundance": "syn",
        "half_life": "5.2475 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Cs-133"
          }
        ]
      },
      {
        "id": "Xe-134",
        "name": {
          "en": "Xenon-134",
          "pt-BR": "Xenônio-134",
        },
        "neutrons": 80,
        "weight": { "standard": 133.905394464 },
        "abundance": 10.436,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Xe-135",
        "name": {
          "en": "Xenon-135",
          "pt-BR": "Xenônio-135",
        },
        "neutrons": 81,
        "weight": { "standard": 134.907227495 },
        "abundance": "syn",
        "half_life": "9.14 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Cs-135"
          }
        ]
      },
      {
        "id": "Xe-136",
        "name": {
          "en": "Xenon-136",
          "pt-BR": "Xenônio-136",
        },
        "neutrons": 82,
        "weight": { "standard": 135.907218794 },
        "abundance": 8.857,
        "half_life": "2.165e21 y",
        "decay": [
          {
            "mode": "double_beta_minus",
            "pct": 100,
            "decay_to": "Ba-136"
          }
        ]
      }
    ]
  },
  "Cs": {
    "id": "Cs",
    "symbol": "Cs",
    "name": {
      "en": "Caesium",
      "pt-BR": "Césio"
    },
    "atomic_number": 55,
    "weight": { "standard": 132.905451966 },
    "period": 6,
    "group": 1,
    "type": "alkali_metal",
    "melting_point": 301.59,
    "boiling_point": 944,
    "oxidation_states": ["-1","+1*"],
    "electronegativity": 0.79,
    "radius": { 
      "empirical": "265",
      "covalent": "244±11",
      "waals": "343"
    },
    "discovery_date": "1860",
    "discovery_by": "Robert Bunsen & Gustav Kirchhoff",
    "electrons": [2, 8, 18, 18, 8, 1],
    "isotopes": [
      {
        "id": "Cs-133",
        "name": {
          "en": "Caesium-133",
          "pt-BR": "Césio-133",
        },
        "neutrons": 78,
        "weight": { "standard": 132.905451932 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Cs-134",
        "name": {
          "en": "Caesium-134",
          "pt-BR": "Césio-134",
        },
        "neutrons": 79,
        "weight": { "standard": 133.906718475 },
        "abundance": "trace",
        "half_life": "2.0652 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 99.99,
            "decay_to": "Ba-134"
          },
          {
            "mode": "k_plus",
            "pct": 3e-4,
            "decay_to": "Xe-134"
          }
        ]
      },
      {
        "id": "Cs-135",
        "name": {
          "en": "Caesium-135",
          "pt-BR": "Césio-135",
        },
        "neutrons": 80,
        "weight": { "standard": 134.905977008 },
        "abundance": "trace",
        "half_life": "2.3e6 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Ba-135"
          }
        ]
      },
      {
        "id": "Cs-137",
        "name": {
          "en": "Caesium-137",
          "pt-BR": "Césio-137",
        },
        "neutrons": 82,
        "weight": { "standard": 136.907089473 },
        "abundance": "trace",
        "half_life": "30.1671 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 95,
            "decay_to": "Ba-137m"
          },
          {
            "mode": "beta_minus",
            "pct": 5,
            "decay_to": "Ba-137"
          }
        ]
      }
    ]
  },
  "Ba": {
    "id": "Ba",
    "symbol": "Ba",
    "name": {
      "en": "Barium",
      "pt-BR": "Bário"
    },
    "atomic_number": 56,
    "weight": { "standard": 137.3277 },
    "period": 6,
    "group": 2,
    "type": "alkaline_earth",
    "melting_point": 1000,
    "boiling_point": 2143,
    "oxidation_states": ["+1","+2*"],
    "electronegativity": 0.89,
    "radius": { 
      "empirical": "222",
      "covalent": "215±11",
      "waals": "268"
    },
    "discovery_date": "1772",
    "discovery_by": "Carl Wilhelm Scheele",
    "electrons": [2, 8, 18, 18, 8, 2],
    "isotopes": [
      {
        "id": "Ba-130",
        "name": {
          "en": "Barium-130",
          "pt-BR": "Bário-130",
        },
        "neutrons": 74,
        "weight": { "standard": 129.906320811 },
        "abundance": 0.106,
        "half_life": "1.6e21 y",
        "decay": [
          {
            "mode": "double_k_plus",
            "pct": 100,
            "decay_to": "Xe-130"
          }
        ]
      },
      {
        "id": "Ba-132",
        "name": {
          "en": "Barium-132",
          "pt-BR": "Bário-132",
        },
        "neutrons": 76,
        "weight": { "standard": 131.905061288 },
        "abundance": 0.10,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ba-133",
        "name": {
          "en": "Barium-133",
          "pt-BR": "Bário-133",
        },
        "neutrons": 77,
        "weight": { "standard": 132.90600749 },
        "abundance": "syn",
        "half_life": "10.51 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Cs-133"
          }
        ]
      },
      {
        "id": "Ba-134",
        "name": {
          "en": "Barium-134",
          "pt-BR": "Bário-134",
        },
        "neutrons": 78,
        "weight": { "standard": 133.904508383 },
        "abundance": 2.42,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ba-135",
        "name": {
          "en": "Barium-135",
          "pt-BR": "Bário-135",
        },
        "neutrons": 79,
        "weight": { "standard": 134.905688591 },
        "abundance": 6.59,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ba-136",
        "name": {
          "en": "Barium-136",
          "pt-BR": "Bário-136",
        },
        "neutrons": 80,
        "weight": { "standard": 135.904575945 },
        "abundance": 7.85,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ba-137",
        "name": {
          "en": "Barium-137",
          "pt-BR": "Bário-137",
        },
        "neutrons": 81,
        "weight": { "standard": 136.905827384 },
        "abundance": 11.23,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ba-138",
        "name": {
          "en": "Barium-138",
          "pt-BR": "Bário-138",
        },
        "neutrons": 82,
        "weight": { "standard": 137.905247237 },
        "abundance": 71.70,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "La": {
    "id": "La",
    "symbol": "La",
    "name": {
      "en": "Lanthanum",
      "pt-BR": "Lantânio"
    },
    "atomic_number": 57,
    "weight": { "standard": 138.905477 },
    "period": 6,
    "group": 3,
    "type": "lanthanoid",
    "melting_point": 1193,
    "boiling_point": 3737,
    "oxidation_states": ["+1","+2","+3*"],
    "electronegativity": 1.10,
    "radius": { 
      "empirical": "187",
      "covalent": "207±8"
    },
    "discovery_date": "1838",
    "discovery_by": "Carl Gustaf Mosander",
    "electrons": [2, 8, 18, 18, 9, 2],
    "isotopes": [
      {
        "id": "La-137",
        "name": {
          "en": "Lanthanum-137",
          "pt-BR": "Lantânio-137",
        },
        "neutrons": 80,
        "weight": { "standard": 136.906493598 },
        "abundance": "syn",
        "half_life": "6e4 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Ba-137"
          }
        ]
      },
      {
        "id": "La-138",
        "name": {
          "en": "Lanthanum-138",
          "pt-BR": "Lantânio-138",
        },
        "neutrons": 81,
        "weight": { "standard": 137.90711193 },
        "abundance": 0.089,
        "half_life": "1.02e11 y",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 66.4,
            "decay_to": "Ba-138"
          },
          {
            "mode": "beta_minus",
            "pct": 33.6,
            "decay_to": "Ce-138"
          }
        ]
      },
      {
        "id": "La-139",
        "name": {
          "en": "Lanthanum-139",
          "pt-BR": "Lantânio-139",
        },
        "neutrons": 82,
        "weight": { "standard": 138.906353267 },
        "abundance": 99.911,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
    ]
  },
  "Ce": {
    "id": "Ce",
    "symbol": "Ce",
    "name": {
      "en": "Cerium",
      "pt-BR": "Cério"
    },
    "atomic_number": 58,
    "weight": { "standard": 140.1161 },
    "period": 6,
    "group": 3,
    "type": "lanthanoid",
    "melting_point": 1071,
    "boiling_point": 3633,
    "oxidation_states": ["+1","+2","+3*","+4*"],
    "electronegativity": 1.12,
    "radius": { 
      "empirical": "181.8",
      "covalent": "204±9"
    },
    "discovery_date": "1803",
    "discovery_by": "Martin Heinrich Klaproth, Jöns Jakob Berzelius & Wilhelm Hisinger",
    "electrons": [2, 8, 18, 19, 9, 2],
    "isotopes": [
      {
        "id": "Ce-134",
        "name": {
          "en": "Cerium-134",
          "pt-BR": "Cério-134",
        },
        "neutrons": 76,
        "weight": { "standard": 133.908924821 },
        "abundance": "syn",
        "half_life": "3.16 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "La-134"
          }
        ]
      },
      {
        "id": "Ce-136",
        "name": {
          "en": "Cerium-136",
          "pt-BR": "Cério-136",
        },
        "neutrons": 78,
        "weight": { "standard": 135.907172422 },
        "abundance": 0.186,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ce-138",
        "name": {
          "en": "Cerium-138",
          "pt-BR": "Cério-138",
        },
        "neutrons": 80,
        "weight": { "standard": 137.905991321 },
        "abundance": 0.251,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ce-139",
        "name": {
          "en": "Cerium-139",
          "pt-BR": "Cério-139",
        },
        "neutrons": 81,
        "weight": { "standard": 138.906652651 },
        "abundance": "syn",
        "half_life": "137.641 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": null,
            "decay_to": "La-139"
          }
        ]
      },
      {
        "id": "Ce-140",
        "name": {
          "en": "Cerium-140",
          "pt-BR": "Cério-140",
        },
        "neutrons": 82,
        "weight": { "standard": 139.905438706 },
        "abundance": 88.449,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ce-141",
        "name": {
          "en": "Cerium-141",
          "pt-BR": "Cério-141",
        },
        "neutrons": 83,
        "weight": { "standard": 140.90827627 },
        "abundance": "syn",
        "half_life": "32.508 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": null,
            "decay_to": "Pr-141"
          }
        ]
      },
      {
        "id": "Ce-142",
        "name": {
          "en": "Cerium-142",
          "pt-BR": "Cério-142",
        },
        "neutrons": 84,
        "weight": { "standard": 141.909244205 },
        "abundance": 11.114,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ce-143",
        "name": {
          "en": "Cerium-143",
          "pt-BR": "Cério-143",
        },
        "neutrons": 85,
        "weight": { "standard": 142.9123863 },
        "abundance": "syn",
        "half_life": "33.039 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Pr-143"
          }
        ]
      },
      {
        "id": "Ce-144",
        "name": {
          "en": "Cerium-144",
          "pt-BR": "Cério-144",
        },
        "neutrons": 86,
        "weight": { "standard": 143.913647336 },
        "abundance": "syn",
        "half_life": "284.91 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Pr-144m"
          }
        ]
      }
    ]
  },
  "Pr": {
    "id": "Pr",
    "symbol": "Pr",
    "name": {
      "en": "Praseodymium",
      "pt-BR": "Praseodímio"
    },
    "atomic_number": 59,
    "weight": { "standard": 140.907661 },
    "period": 6,
    "group": 3,
    "type": "lanthanoid",
    "melting_point": 1204,
    "boiling_point": 3563, 
    "oxidation_states": ["+1","+2","+3*","+4","+5"],
    "electronegativity": 1.13,
    "radius": { 
      "empirical": "182",
      "covalent": "203±7"
    },
    "discovery_date": "1885",
    "discovery_by": "Carl Auer von Welsbach",
    "electrons": [2, 8, 18, 21, 8, 2],
    "isotopes": [
      {
        "id": "Pr-141",
        "name": {
          "en": "Praseodymium-141",
          "pt-BR": "Praseodímio-141",
        },
        "neutrons": 82,
        "weight": { "standard": 140.907652826 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Pr-142",
        "name": {
          "en": "Praseodymium-142",
          "pt-BR": "Praseodímio-142",
        },
        "neutrons": 83,
        "weight": { "standard": 141.910044826 },
        "abundance": "syn",
        "half_life": "19.12 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 99.98,
            "decay_to": "Nd-142"
          },
          {
            "mode": "k_plus",
            "pct": 0.0164,
            "decay_to": "Ce-142"
          }
        ]
      },
      {
        "id": "Pr-143",
        "name": {
          "en": "Praseodymium-143",
          "pt-BR": "Praseodímio-143",
        },
        "neutrons": 84,
        "weight": { "standard": 142.910816928 },
        "abundance": "syn",
        "half_life": "13.57 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Nd-143"
          }
        ]
      }
    ]
  },
  "Nd": {
    "id": "Nd",
    "symbol": "Nd",
    "name": {
      "en": "Neodymium",
      "pt-BR": "Neodímio"
    },
    "atomic_number": 60,
    "weight": { "standard": 144.2423 },
    "period": 6,
    "group": 3,
    "type": "lanthanoid",
    "melting_point": 1294,
    "boiling_point": 3373,
    "oxidation_states": ["+2","+3*","+4"],
    "electronegativity": 1.14,
    "radius": { 
      "empirical": "181",
      "covalent": "201±6"
    },
    "discovery_date": "1885",
    "discovery_by": "Carl Auer von Welsbach",
    "electrons": [2, 8, 18, 22, 8, 2],
    "isotopes": [
      {
        "id": "Nd-142",
        "name": {
          "en": "Neodymium-142",
          "pt-BR": "Neodímio-142",
        },
        "neutrons": 82,
        "weight": { "standard": 141.907723325 },
        "abundance": 27.2,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Nd-143",
        "name": {
          "en": "Neodymium-143",
          "pt-BR": "Neodímio-143",
        },
        "neutrons": 83,
        "weight": { "standard": 142.909814325 },
        "abundance": 12.2,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Nd-144",
        "name": {
          "en": "Neodymium-144",
          "pt-BR": "Neodímio-144",
        },
        "neutrons": 84,
        "weight": { "standard": 143.910087325 },
        "abundance": 23.8,
        "half_life": "2.29e15 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Ce-140"
          }
        ]
      },
      {
        "id": "Nd-145",
        "name": {
          "en": "Neodymium-145",
          "pt-BR": "Neodímio-145",
        },
        "neutrons": 85,
        "weight": { "standard": 144.912573625 },
        "abundance": 8.3,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Nd-146",
        "name": {
          "en": "Neodymium-146",
          "pt-BR": "Neodímio-146",
        },
        "neutrons": 86,
        "weight": { "standard": 145.913116925 },
        "abundance": 17.2,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Nd-148",
        "name": {
          "en": "Neodymium-148",
          "pt-BR": "Neodímio-148",
        },
        "neutrons": 88,
        "weight": { "standard": 147.9168933 },
        "abundance": 5.8,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Nd-150",
        "name": {
          "en": "Neodymium-150",
          "pt-BR": "Neodímio-150",
        },
        "neutrons": 90,
        "weight": { "standard": 149.9208913 },
        "abundance": 5.6,
        "half_life": "6.7e18 y",
        "decay": [
          {
            "mode": "double_beta_minus",
            "pct": 100,
            "decay_to": "Sm-150"
          }
        ]
      }
    ]
  },
  "Pm": {
    "id": "Pm",
    "symbol": "Pm",
    "name": {
      "en": "Promethium",
      "pt-BR": "Promécio"
    },
    "atomic_number": 61,
    "weight": { "most_stable": 145 },
    "period": 6,
    "group": 3,
    "type": "lanthanoid",
    "melting_point": 1373,
    "boiling_point": 3273,
    "oxidation_states": ["+2","+3*"],
    "electronegativity": 1.13,
    "radius": { 
      "empirical": "183",
      "covalent": "199"
    },
    "discovery_date": "1942",
    "discovery_by": "Chien Shiung Wu, Emilio Sagrè & Hans Bethe",
    "electrons": [2, 8, 18, 23, 8, 2],
    "isotopes": [
      {
        "id": "Pm-145",
        "name": {
          "en": "Promethium-145",
          "pt-BR": "Promécio-145",
        },
        "neutrons": 84,
        "weight": { "standard": 144.9127493 },
        "abundance": "trace",
        "half_life": "17.7 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 99.99,
            "decay_to": "Nd-145"
          },
          {
            "mode": "alpha",
            "pct": 2.8e-7,
            "decay_to": "Pr-141"
          }
        ]
      },
      {
        "id": "Pm-146",
        "name": {
          "en": "Promethium-146",
          "pt-BR": "Promécio-146",
        },
        "neutrons": 85,
        "weight": { "standard": 145.9146965 },
        "abundance": "syn",
        "half_life": "5.53 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 66,
            "decay_to": "Nd-146"
          },
          {
            "mode": "beta_minus",
            "pct": 34,
            "decay_to": "Sm-146"
          }
        ]
      },
      {
        "id": "Pm-147",
        "name": {
          "en": "Promethium-147",
          "pt-BR": "Promécio-147",
        },
        "neutrons": 86,
        "weight": { "standard": 146.915138526 },
        "abundance": "trace",
        "half_life": "2.6234 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Sm-147"
          }
        ]
      }
    ]
  },
  "Sm": {
    "id": "Sm",
    "symbol": "Sm",
    "name": {
      "en": "Samarium",
      "pt-BR": "Samário"
    },
    "atomic_number": 62,
    "weight": { "standard": 150.362 },
    "period": 6,
    "group": 3,
    "type": "lanthanoid",
    "melting_point": 1345,
    "boiling_point": 2076,
    "oxidation_states": ["+1","+2","+3*","+4"],
    "electronegativity": 1.17,
    "radius": { 
      "empirical": "180",
      "covalent": "198±8"
    },
    "discovery_date": "1879",
    "discovery_by": "Lecoq de Boisbaudran",
    "electrons": [2, 8, 18, 24, 8, 2],
    "isotopes": [
      {
        "id": "Sm-144",
        "name": {
          "en": "Samarium-144",
          "pt-BR": "Samário-144",
        },
        "neutrons": 82,
        "weight": { "standard": 143.9119993 },
        "abundance": 3.08,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sm-145",
        "name": {
          "en": "Samarium-145",
          "pt-BR": "Samário-145",
        },
        "neutrons": 83,
        "weight": { "standard": 144.9134103 },
        "abundance": "syn",
        "half_life": "340 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Pm-145"
          }
        ]
      },
      {
        "id": "Sm-146",
        "name": {
          "en": "Samarium-146",
          "pt-BR": "Samário-146",
        },
        "neutrons": 84,
        "weight": { "standard": 145.9130414 },
        "abundance": "syn",
        "half_life": "6.8e7 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Nd-142"
          }
        ]
      },
      {
        "id": "Sm-147",
        "name": {
          "en": "Samarium-147",
          "pt-BR": "Samário-147",
        },
        "neutrons": 85,
        "weight": { "standard": 146.914897926 },
        "abundance": 15.00,
        "half_life": "1.06e11 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Nd-143"
          }
        ]
      },
      {
        "id": "Sm-148",
        "name": {
          "en": "Samarium-148",
          "pt-BR": "Samário-148",
        },
        "neutrons": 86,
        "weight": { "standard": 147.914822726 },
        "abundance": 11.25,
        "half_life": "7e15 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Nd-144"
          }
        ]
      },
      {
        "id": "Sm-149",
        "name": {
          "en": "Samarium-149",
          "pt-BR": "Samário-149",
        },
        "neutrons": 87,
        "weight": { "standard": 148.917184726 },
        "abundance": 13.82,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sm-150",
        "name": {
          "en": "Samarium-150",
          "pt-BR": "Samário-150",
        },
        "neutrons": 88,
        "weight": { "standard": 149.917275526 },
        "abundance": 7.37,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sm-151",
        "name": {
          "en": "Samarium-151",
          "pt-BR": "Samário-151",
        },
        "neutrons": 89,
        "weight": { "standard": 150.919932426 },
        "abundance": "syn",
        "half_life": "88.8 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Eu-151"
          }
        ]
      },
      {
        "id": "Sm-152",
        "name": {
          "en": "Samarium-152",
          "pt-BR": "Samário-152",
        },
        "neutrons": 90,
        "weight": { "standard": 151.919732427 },
        "abundance": 26.74,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Sm-153",
        "name": {
          "en": "Samarium-153",
          "pt-BR": "Samário-153",
        },
        "neutrons": 91,
        "weight": { "standard": 152.922097427 },
        "abundance": "syn",
        "half_life": "46.284 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Eu-153"
          }
        ]
      },
      {
        "id": "Sm-154",
        "name": {
          "en": "Samarium-154",
          "pt-BR": "Samário-154",
        },
        "neutrons": 92,
        "weight": { "standard": 153.922209327 },
        "abundance": 22.74,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Eu": {
    "id": "Eu",
    "symbol": "Eu",
    "name": {
      "en": "Europium",
      "pt-BR": "Európio"
    },
    "atomic_number": 63,
    "weight": { "standard": 151.9641 },
    "period": 6,
    "group": 3,
    "type": "lanthanoid",
    "melting_point": 1095,
    "boiling_point": 1800,
    "oxidation_states": ["+1","+2*","+3*"],
    "electronegativity": 1.2,
    "radius": { 
      "empirical": "180",
      "covalent": "198±6"
    },
    "discovery_date": "1896",
    "discovery_by": "Eugène-Anatole Demarçay",
    "electrons": [2, 8, 18, 25, 8, 2],
    "isotopes": [
      {
        "id": "Eu-150",
        "name": {
          "en": "Europium-150",
          "pt-BR": "Európio-150",
        },
        "neutrons": 87,
        "weight": { "standard": 149.9197027 },
        "abundance": "syn",
        "half_life": "36.9 y",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Sm-150"
          }
        ]
      },
      {
        "id": "Eu-151",
        "name": {
          "en": "Europium-151",
          "pt-BR": "Európio-151",
        },
        "neutrons": 88,
        "weight": { "standard": 150.919850226 },
        "abundance": 47.8,
        "half_life": "4.62e18 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Pm-147"
          }
        ]
      },
      {
        "id": "Eu-152",
        "name": {
          "en": "Europium-152",
          "pt-BR": "Európio-152",
        },
        "neutrons": 89,
        "weight": { "standard": 151.921744526 },
        "abundance": "syn",
        "half_life": "13.537 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 72.09,
            "decay_to": "Sm-152"
          },
          {
            "mode": "beta_plus",
            "pct": 0.027,
            "decay_to": "Sm-152"
          },
          {
            "mode": "beta_minus",
            "pct": 27.9,
            "decay_to": "Gd-152"
          }
        ]
      },
      {
        "id": "Eu-153",
        "name": {
          "en": "Europium-153",
          "pt-BR": "Európio-153",
        },
        "neutrons": 90,
        "weight": { "standard": 152.921230326 },
        "abundance": 52.2,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Eu-154",
        "name": {
          "en": "Europium-154",
          "pt-BR": "Európio-154",
        },
        "neutrons": 91,
        "weight": { "standard": 153.922979226 },
        "abundance": "syn",
        "half_life": "8.593 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 99.98,
            "decay_to": "Gd-154"
          },
          {
            "mode": "k_plus",
            "pct": 0.02,
            "decay_to": "Sm-154"
          }
        ]
      },
      {
        "id": "Eu-155",
        "name": {
          "en": "Europium-155",
          "pt-BR": "Európio-155",
        },
        "neutrons": 92,
        "weight": { "standard": 154.922893327 },
        "abundance": "syn",
        "half_life": "4.7611 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Gd-155"
          }
        ]
      }
    ]
  },
  "Gd": {
    "id": "Gd",
    "symbol": "Gd",
    "name": {
      "en": "Gadolinium",
      "pt-BR": "Gadolínio"
    },
    "atomic_number": 64,
    "weight": { "standard": 157.253 },
    "period": 6,
    "group": 3,
    "type": "lanthanoid",
    "melting_point": 1586,
    "boiling_point": 3523,
    "oxidation_states": ["+1","+2","+3*"],
    "electronegativity": 1.20,
    "radius": { 
      "empirical": "180",
      "covalent": "196±6"
    },
    "discovery_date": "1880",
    "discovery_by": "Jean Charles Galissard de Marignac",
    "electrons": [2, 8, 18, 25, 9, 2],
    "isotopes": [
      {
        "id": "Gd-148",
        "name": {
          "en": "Gadolinium-148",
          "pt-BR": "Gadolínio-148",
        },
        "neutrons": 84,
        "weight": { "standard": 147.9181153 },
        "abundance": "syn",
        "half_life": "74.6 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Sm-144"
          },
          {
            "mode": "double_beta_minus",
            "pct": 1e-4,
            "decay_to": "Sm-148"
          }
        ]
      },
      {
        "id": "Gd-150",
        "name": {
          "en": "Gadolinium-150",
          "pt-BR": "Gadolínio-150",
        },
        "neutrons": 86,
        "weight": { "standard": 149.9186597 },
        "abundance": "syn",
        "half_life": "1.79e6 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Sm-146"
          },
          {
            "mode": "double_beta_minus",
            "pct": 1e-4,
            "decay_to": "Sm-150"
          }
        ]
      },
      {
        "id": "Gd-152",
        "name": {
          "en": "Gadolinium-152",
          "pt-BR": "Gadolínio-152",
        },
        "neutrons": 88,
        "weight": { "standard": 151.919791027 },
        "abundance": 0.20,
        "half_life": "1.08e14 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Sm-148"
          }
        ]
      },
      {
        "id": "Gd-154",
        "name": {
          "en": "Gadolinium-154",
          "pt-BR": "Gadolínio-154",
        },
        "neutrons": 90,
        "weight": { "standard": 153.920865627 },
        "abundance": 2.18,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Gd-155",
        "name": {
          "en": "Gadolinium-155",
          "pt-BR": "Gadolínio-155",
        },
        "neutrons": 91,
        "weight": { "standard": 154.922622027 },
        "abundance": 14.80,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Gd-156",
        "name": {
          "en": "Gadolinium-156",
          "pt-BR": "Gadolínio-156",
        },
        "neutrons": 92,
        "weight": { "standard": 155.922122727 },
        "abundance": 20.47,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Gd-157",
        "name": {
          "en": "Gadolinium-157",
          "pt-BR": "Gadolínio-157",
        },
        "neutrons": 93,
        "weight": { "standard": 156.923960127 },
        "abundance": 15.65,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Gd-158",
        "name": {
          "en": "Gadolinium-158",
          "pt-BR": "Gadolínio-158"
        },
        "neutrons": 94,
        "weight": { "standard": 157.924103927 },
        "abundance": 24.84,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Gd-160",
        "name": {
          "en": "Gadolinium-160",
          "pt-BR": "Gadolínio-160",
        },
        "neutrons": 96,
        "weight": { "standard": 159.927054127 },
        "abundance": 21.86,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Tb": {
    "id": "Tb",
    "symbol": "Tb",
    "name": {
      "en": "Terbium",
      "pt-BR": "Térbio"
    },
    "atomic_number": 65,
    "weight": { "standard": 158.9253548 },
    "period": 6,
    "group": 3,
    "type": "lanthanoid",
    "melting_point": 1629,
    "boiling_point": 3503,
    "oxidation_states": ["+1","+2","+3*","+4"],
    "electronegativity": 1.2,
    "radius": { 
      "empirical": "177",
      "covalent": "194±5"
    },
    "discovery_date": "1843",
    "discovery_by": "Carl Gustaf Mosander",
    "electrons": [2, 8, 18, 27, 8, 2],
    "isotopes": [
      {
        "id": "Tb-157",
        "name": {
          "en": "Terbium-157",
          "pt-BR": "Térbio-157",
        },
        "neutrons": 92,
        "weight": { "standard": 156.924024627 },
        "abundance": "syn",
        "half_life": "71 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Gd-157"
          }
        ]
      },
      {
        "id": "Tb-158",
        "name": {
          "en": "Terbium-158",
          "pt-BR": "Térbio-158",
        },
        "neutrons": 93,
        "weight": { "standard": 157.925413128 },
        "abundance": "syn",
        "half_life": "180 y",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 83.4,
            "decay_to": "Gd-158"
          },
          {
            "mode": "beta_minus",
            "pct": 16.6,
            "decay_to": "Dy-158"
          }
        ]
      },
      {
        "id": "Tb-159",
        "name": {
          "en": "Terbium-159",
          "pt-BR": "Térbio-159",
        },
        "neutrons": 94,
        "weight": { "standard": 158.925346827 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Dy": {
    "id": "Dy",
    "symbol": "Dy",
    "name": {
      "en": "Dysprosium",
      "pt-BR": "Disprósio"
    },
    "atomic_number": 66,
    "weight": { "standard": 162.5001 },
    "period": 6,
    "group": 3,
    "type": "lanthanoid",
    "melting_point": 1685,
    "boiling_point": 2840,
    "oxidation_states": ["+1","+2","+3*","+4"],
    "electronegativity": 1.22,
    "radius": { 
      "empirical": "178",
      "covalent": "192±7"
    },
    "discovery_date": "1886",
    "discovery_by": "Lecoq de Boisbaudran",
    "electrons": [2, 8, 18, 28, 8, 2],
    "isotopes": [
      {
        "id": "Dy-154",
        "name": {
          "en": "Dysprosium-154",
          "pt-BR": "Disprósio-154",
        },
        "neutrons": 88,
        "weight": { "standard": 153.9244248 },
        "abundance": "syn",
        "half_life": "3.0e6 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Gd-150"
          },
          {
            "mode": "double_beta_minus",
            "pct": 1e-4,
            "decay_to": "Gd-154"
          }
        ]
      },
      {
        "id": "Dy-156",
        "name": {
          "en": "Dysprosium-156",
          "pt-BR": "Disprósio-156",
        },
        "neutrons": 90,
        "weight": { "standard": 155.9242837 },
        "abundance": 0.056,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Dy-158",
        "name": {
          "en": "Dysprosium-158",
          "pt-BR": "Disprósio-158",
        },
        "neutrons": 92,
        "weight": { "standard": 157.9244094 },
        "abundance": 0.095,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Dy-160",
        "name": {
          "en": "Dysprosium-160",
          "pt-BR": "Disprósio-160",
        },
        "neutrons": 94,
        "weight": { "standard": 159.925197527 },
        "abundance": 2.329,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Dy-161",
        "name": {
          "en": "Dysprosium-161",
          "pt-BR": "Disprósio-161",
        },
        "neutrons": 95,
        "weight": { "standard": 160.926933427 },
        "abundance": 18.889,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Dy-162",
        "name": {
          "en": "Dysprosium-162",
          "pt-BR": "Disprósio-162",
        },
        "neutrons": 96,
        "weight": { "standard": 161.926798427 },
        "abundance": 25.475,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Dy-163",
        "name": {
          "en": "Dysprosium-163",
          "pt-BR": "Disprósio-163",
        },
        "neutrons": 97,
        "weight": { "standard": 162.928731227 },
        "abundance": 24.896,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Dy-164",
        "name": {
          "en": "Dysprosium-164",
          "pt-BR": "Disprósio-164",
        },
        "neutrons": 98,
        "weight": { "standard": 163.929174827 },
        "abundance": 28.260,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Ho": {
    "id": "Ho",
    "symbol": "Ho",
    "name": {
      "en": "Holmium",
      "pt-BR": "Hólmio"
    },
    "atomic_number": 67,
    "weight": { "standard": 164.9303287 },
    "period": 6,
    "group": 3,
    "type": "lanthanoid",
    "melting_point": 1747,
    "boiling_point": 2973,
    "oxidation_states": ["+1","+2","+3*"],
    "electronegativity": 1.23,
    "radius": { 
      "empirical": "176",
      "covalent": "192±7"
    },
    "discovery_date": "1878",
    "discovery_by": "Jacques-Louis Soret",
    "electrons": [2, 8, 18, 29, 8, 2],
    "isotopes": [
      {
        "id": "Ho-163",
        "name": {
          "en": "Holmium-163",
          "pt-BR": "Hólmio-163",
        },
        "neutrons": 96,
        "weight": { "standard": 162.928733927 },
        "abundance": "syn",
        "half_life": "4570 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Dy-163"
          }
        ]
      },
      {
        "id": "Ho-164",
        "name": {
          "en": "Holmium-164",
          "pt-BR": "Hólmio-164",
        },
        "neutrons": 97,
        "weight": { "standard": 163.930233530 },
        "abundance": "syn",
        "half_life": "29 min",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 60,
            "decay_to": "Dy-164"
          },
          {
            "mode": "beta_minus",
            "pct": 40,
            "decay_to": "Er-164"
          }
        ]
      },
      {
        "id": "Ho-165",
        "name": {
          "en": "Holmium-165",
          "pt-BR": "Hólmio-165",
        },
        "neutrons": 98,
        "weight": { "standard": 164.930322127 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ho-166",
        "name": {
          "en": "Holmium-166",
          "pt-BR": "Hólmio-166",
        },
        "neutrons": 99,
        "weight": { "standard": 165.932284227 },
        "abundance": "syn",
        "half_life": "26.83 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Er-166"
          }
        ]
      },
      {
        "id": "Ho-167",
        "name": {
          "en": "Holmium-167",
          "pt-BR": "Hólmio-167",
        },
        "neutrons": 100,
        "weight": { "standard": 166.9331336 },
        "abundance": "syn",
        "half_life": "3.003 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Er-167"
          }
        ]
      }
    ]
  },
  "Er": {
    "id": "Er",
    "symbol": "Er",
    "name": {
      "en": "Erbium",
      "pt-BR": "Érbio"
    },
    "atomic_number": 68,
    "weight": { "standard": 167.2593 },
    "period": 6,
    "group": 3,
    "type": "lanthanoid",
    "melting_point": 1770,
    "boiling_point": 3141,
    "oxidation_states": ["+1","+2","+3*"],
    "electronegativity": 1.24,
    "radius": { 
      "empirical": "176",
      "covalent": "189±6"
    },
    "discovery_date": "1843",
    "discovery_by": "Carl Gustaf Mosander",
    "electrons": [2, 8, 18, 30, 8, 2],
    "isotopes": [
      {
        "id": "Er-160",
        "name": {
          "en": "Erbium-160",
          "pt-BR": "Érbio-160",
        },
        "neutrons": 92,
        "weight": { "standard": 159.92908326 },
        "abundance": "syn",
        "half_life": "28.58 h",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Ho-160"
          }
        ]
      },
      {
        "id": "Er-162",
        "name": {
          "en": "Erbium-162",
          "pt-BR": "Érbio-162",
        },
        "neutrons": 94,
        "weight": { "standard": 161.9287784 },
        "abundance": 0.139,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Er-164",
        "name": {
          "en": "Erbium-164",
          "pt-BR": "Érbio-164",
        },
        "neutrons": 96,
        "weight": { "standard": 163.9292003 },
        "abundance": 1.601,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Er-165",
        "name": {
          "en": "Erbium-165",
          "pt-BR": "Érbio-165",
        },
        "neutrons": 97,
        "weight": { "standard": 164.9307263 },
        "abundance": "syn",
        "half_life": "10.36 h",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Ho-165"
          }
        ]
      },
      {
        "id": "Er-166",
        "name": {
          "en": "Erbium-166",
          "pt-BR": "Érbio-166",
        },
        "neutrons": 98,
        "weight": { "standard": 165.930293127 },
        "abundance": 33.503,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Er-167",
        "name": {
          "en": "Erbium-167",
          "pt-BR": "Érbio-167",
        },
        "neutrons": 99,
        "weight": { "standard": 166.932048227 },
        "abundance": 22.869,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Er-168",
        "name": {
          "en": "Erbium-168",
          "pt-BR": "Érbio-168",
        },
        "neutrons": 100,
        "weight": { "standard": 167.932370227 },
        "abundance": 26.978,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Er-169",
        "name": {
          "en": "Erbium-169",
          "pt-BR": "Érbio-169",
        },
        "neutrons": 101,
        "weight": { "standard": 168.934590427 },
        "abundance": "syn",
        "half_life": "9.392 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Tm-169"
          }
        ]
      },
      {
        "id": "Er-170",
        "name": {
          "en": "Erbium-170",
          "pt-BR": "Érbio-170",
        },
        "neutrons": 102,
        "weight": { "standard": 169.935464330 },
        "abundance": 14.910,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Er-171",
        "name": {
          "en": "Erbium-171",
          "pt-BR": "Érbio-171",
        },
        "neutrons": 103,
        "weight": { "standard": 170.938029830 },
        "abundance": "syn",
        "half_life": "7.516 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Tm-171"
          }
        ]
      },
      {
        "id": "Er-172",
        "name": {
          "en": "Erbium-172",
          "pt-BR": "Érbio-172",
        },
        "neutrons": 104,
        "weight": { "standard": 171.9393565 },
        "abundance": "syn",
        "half_life": "49.3 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Tm-172"
          }
        ]
      }
    ]
  },
  "Tm": {
    "id": "Tm",
    "symbol": "Tm",
    "name": {
      "en": "Thulium",
      "pt-BR": "Túlio"
    },
    "atomic_number": 69,
    "weight": { "standard": 168.9342186 },
    "period": 6,
    "group": 3,
    "type": "lanthanoid",
    "melting_point": 1818,
    "boiling_point": 2223,
    "oxidation_states": ["+2","+3*"],
    "electronegativity": 1.25,
    "radius": { 
      "empirical": "176",
      "covalent": "190±10"
    },
    "discovery_date": "1879",
    "discovery_by": "Per Teodor Cleve",
    "electrons": [2, 8, 18, 31, 8, 2],
    "isotopes": [
      {
        "id": "Tm-167",
        "name": {
          "en": "Thulium-167",
          "pt-BR": "Túlio-167",
        },
        "neutrons": 98,
        "weight": { "standard": 166.932851629 },
        "abundance": "syn",
        "half_life": "9.25 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Er-167"
          }
        ]
      },
      {
        "id": "Tm-168",
        "name": {
          "en": "Thulium-168",
          "pt-BR": "Túlio-168",
        },
        "neutrons": 99,
        "weight": { "standard": 167.9341733 },
        "abundance": "syn",
        "half_life": "93.1 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 99.99,
            "decay_to": "Er-168"
          },
          {
            "mode": "beta_minus",
            "pct": 0.01,
            "decay_to": "Yb-168"
          }
        ]
      },
      {
        "id": "Tm-169",
        "name": {
          "en": "Thulium-169",
          "pt-BR": "Túlio-169",
        },
        "neutrons": 100,
        "weight": { "standard": 168.934213327 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Tm-170",
        "name": {
          "en": "Thulium-170",
          "pt-BR": "Túlio-170",
        },
        "neutrons": 101,
        "weight": { "standard": 169.935801427 },
        "abundance": "syn",
        "half_life": "128.6 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 99.86,
            "decay_to": "Yb-170"
          },
          {
            "mode": "k_plus",
            "pct": 0.14,
            "decay_to": "Er-170"
          }
        ]
      },
      {
        "id": "Tm-171",
        "name": {
          "en": "Thulium-171",
          "pt-BR": "Túlio-171",
        },
        "neutrons": 102,
        "weight": { "standard": 170.936429428 },
        "abundance": "syn",
        "half_life": "1.92 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Yb-171"
          }
        ]
      }
    ]
  },
  "Yb": {
    "id": "Yb",
    "symbol": "Yb",
    "name": {
      "en": "Ytterbium",
      "pt-BR": "Yttérbio"
    },
    "atomic_number": 70,
    "weight": { "standard": 173.0451 },
    "period": 6,
    "group": 3,
    "type": "lanthanoid",
    "melting_point": 1092,
    "boiling_point": 1469,
    "oxidation_states": ["+1","+2","+3*"],
    "electronegativity": 1.1,
    "radius": { 
      "empirical": "176",
      "covalent": "187±8"
    },
    "discovery_date": "1878",
    "discovery_by": "Jean Charles Galissard de Marignac",
    "electrons": [2, 8, 18, 32, 8, 2],
    "isotopes": [
      {
        "id": "Yb-166",
        "name": {
          "en": "Ytterbium-166",
          "pt-BR": "Yttérbio-166",
        },
        "neutrons": 96,
        "weight": { "standard": 165.9338829 },
        "abundance": "syn",
        "half_life": "56.7 h",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Tm-166"
          }
        ]
      },
      {
        "id": "Yb-168",
        "name": {
          "en": "Ytterbium-168",
          "pt-BR": "Yttérbio-168",
        },
        "neutrons": 98,
        "weight": { "standard": 167.9338975 },
        "abundance": 0.126,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Yb-169",
        "name": {
          "en": "Ytterbium-169",
          "pt-BR": "Yttérbio-169",
        },
        "neutrons": 99,
        "weight": { "standard": 168.9351905 },
        "abundance": "syn",
        "half_life": "32.026 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Tm-169"
          }
        ]
      },
      {
        "id": "Yb-170",
        "name": {
          "en": "Ytterbium-170",
          "pt-BR": "Yttérbio-170",
        },
        "neutrons": 100,
        "weight": { "standard": 169.934761826 },
        "abundance": 3.023,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Yb-171",
        "name": {
          "en": "Ytterbium-171",
          "pt-BR": "Yttérbio-171",
        },
        "neutrons": 101,
        "weight": { "standard": 170.936325826 },
        "abundance": 14.216,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Yb-172",
        "name": {
          "en": "Ytterbium-172",
          "pt-BR": "Yttérbio-172",
        },
        "neutrons": 102,
        "weight": { "standard": 171.936381526 },
        "abundance": 21.754,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Yb-173",
        "name": {
          "en": "Ytterbium-173",
          "pt-BR": "Yttérbio-173",
        },
        "neutrons": 103,
        "weight": { "standard": 172.938210826 },
        "abundance": 16.098,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Yb-174",
        "name": {
          "en": "Ytterbium-174",
          "pt-BR": "Yttérbio-174",
        },
        "neutrons": 104,
        "weight": { "standard": 173.938862126 },
        "abundance": 31.896,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Yb-175",
        "name": {
          "en": "Ytterbium-175",
          "pt-BR": "Yttérbio-175",
        },
        "neutrons": 105,
        "weight": { "standard": 174.941276526 },
        "abundance": "syn",
        "half_life": "4.185 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Lu-175"
          }
        ]
      },
      {
        "id": "Yb-176",
        "name": {
          "en": "Ytterbium-176",
          "pt-BR": "Yttérbio-176",
        },
        "neutrons": 106,
        "weight": { "standard": 175.942571728 },
        "abundance": 12.887,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Yb-177",
        "name": {
          "en": "Ytterbium-177",
          "pt-BR": "Yttérbio-177",
        },
        "neutrons": 107,
        "weight": { "standard": 176.945260828 },
        "abundance": "syn",
        "half_life": "1.911 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Lu-177"
          }
        ]
      }
    ]
  },
  "Lu": {
    "id": "Lu",
    "symbol": "Lu",
    "name": {
      "en": "Lutetium",
      "pt-BR": "Lutécio"
    },
    "atomic_number": 71,
    "weight": { "standard": 174.96681 },
    "period": 6,
    "group": 3,
    "type": "lanthanoid",
    "melting_point": 1936,
    "boiling_point": 3675,
    "oxidation_states": ["+1","+2","+3*"],
    "electronegativity": 1.27,
    "radius": { 
      "empirical": "174",
      "covalent": "187±8"
    },
    "discovery_date": "1906",
    "discovery_by": "Carl Auer von Welsbach & Georges Urbain",
    "electrons": [2, 8, 18, 32, 9, 2],
    "isotopes": [
      {
        "id": "Lu-173",
        "name": {
          "en": "Lutetium-173",
          "pt-BR": "Lutécio-173",
        },
        "neutrons": 102,
        "weight": { "standard": 172.938930626 },
        "abundance": "syn",
        "half_life": "1.37 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Yb-173"
          }
        ]
      },
      {
        "id": "Lu-174",
        "name": {
          "en": "Lutetium-174",
          "pt-BR": "Lutécio-174",
        },
        "neutrons": 103,
        "weight": { "standard": 173.940337526 },
        "abundance": "syn",
        "half_life": "3.31 y",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Yb-174"
          }
        ]
      },
      {
        "id": "Lu-175",
        "name": {
          "en": "Lutetium-175",
          "pt-BR": "Lutécio-175",
        },
        "neutrons": 104,
        "weight": { "standard": 174.940771823 },
        "abundance": 97.401,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Lu-176",
        "name": {
          "en": "Lutetium-176",
          "pt-BR": "Lutécio-176",
        },
        "neutrons": 105,
        "weight": { "standard": 175.942686323 },
        "abundance": 2.599,
        "half_life": "38.5e9 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Hf-176"
          }
        ]
      }
    ]
  },
  "Hf": {
    "id": "Hf",
    "symbol": "Hf",
    "name": {
      "en": "Hafnium",
      "pt-BR": "Háfnio"
    },
    "atomic_number": 72,
    "weight": { "standard": 178.492 },
    "period": 6,
    "group": 4,
    "type": "transition_metal",
    "melting_point": 2506,
    "boiling_point": 4876,
    "oxidation_states": ["-2","+1","+2","+3","+4"],
    "electronegativity": 1.3,
    "radius": { 
      "empirical": "159",
      "covalent": "175±10"
    },
    "discovery_date": "1922",
    "discovery_by": "Dirk Coster & George de Havesy",
    "electrons": [2, 8, 18, 32, 10, 2],
    "isotopes": [
      {
        "id": "Hf-172",
        "name": {
          "en": "Hafnium-172",
          "pt-BR": "Háfnio-172",
        },
        "neutrons": 100,
        "weight": { "standard": 171.93944826 },
        "abundance": "syn",
        "half_life": "1.87 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Lu-172"
          }
        ]
      },
      {
        "id": "Hf-174",
        "name": {
          "en": "Hafnium-174",
          "pt-BR": "Háfnio-174",
        },
        "neutrons": 102,
        "weight": { "standard": 173.9400463 },
        "abundance": 0.16,
        "half_life": "2.0e15 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Yb-170"
          }
        ]
      },
      {
        "id": "Hf-176",
        "name": {
          "en": "Hafnium-176",
          "pt-BR": "Háfnio-176",
        },
        "neutrons": 104,
        "weight": { "standard": 175.941408624 },
        "abundance": 5.26,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Hf-177",
        "name": {
          "en": "Hafnium-177",
          "pt-BR": "Háfnio-177",
        },
        "neutrons": 105,
        "weight": { "standard": 176.943220723 },
        "abundance": 18.60,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Hf-178",
        "name": {
          "en": "Hafnium-178",
          "pt-BR": "Háfnio-178",
        },
        "neutrons": 106,
        "weight": { "standard": 177.943698823 },
        "abundance": 27.28,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Hf-178m2",
        "name": {
          "en": "Hafnium-178m2",
          "pt-BR": "Háfnio-178m2",
        },
        "neutrons": 106,
        "weight": { "standard": 173.9400463 },
        "abundance": "syn",
        "half_life": "31 y",
        "decay": [
          {
            "mode": "internal_convertion",
            "pct": 100,
            "decay_to": "Hf-178"
          }
        ]
      },
      {
        "id": "Hf-179",
        "name": {
          "en": "Hafnium-179",
          "pt-BR": "Háfnio-179",
        },
        "neutrons": 107,
        "weight": { "standard": 178.945816123 },
        "abundance": 13.62,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Hf-180",
        "name": {
          "en": "Hafnium-180",
          "pt-BR": "Háfnio-180",
        },
        "neutrons": 108,
        "weight": { "standard": 179.946550023 },
        "abundance": 30.08,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Hf-182",
        "name": {
          "en": "Hafnium-182",
          "pt-BR": "Háfnio-182",
        },
        "neutrons": 110,
        "weight": { "standard": 181.9505547 },
        "abundance": "syn",
        "half_life": "8.90e9 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Ta-182"
          }
        ]
      }
    ]
  },
  "Ta": {
    "id": "Ta",
    "symbol": "Ta",
    "name": {
      "en": "Tantalum",
      "pt-BR": "Tântalo"
    },
    "atomic_number": 73,
    "weight": { "standard": 180.947882 },
    "period": 6,
    "group": 5,
    "type": "transition_metal",
    "melting_point": 3290,
    "boiling_point": 5731,
    "oxidation_states": ["-3","-1","+1","+2","+3","+4","+5*"],
    "electronegativity": 1.5,
    "radius": { 
      "empirical": "146",
      "covalent": "170±8"
    },
    "discovery_date": "1802",
    "discovery_by": "Anders Gustaf Ekeberg",
    "electrons": [2, 8, 18, 32, 11, 2],
    "isotopes": [
      {
        "id": "Ta-177",
        "name": {
          "en": "Tantalum-177",
          "pt-BR": "Tântalo-177",
        },
        "neutrons": 104,
        "weight": { "standard": 176.9444724 },
        "abundance": "syn",
        "half_life": "56.56 h",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Hf-177"
          }
        ]
      },
      {
        "id": "Ta-178",
        "name": {
          "en": "Tantalum-178",
          "pt-BR": "Tântalo-178",
        },
        "neutrons": 105,
        "weight": { "standard": 177.94577816 },
        "abundance": "syn",
        "half_life": "9.31 min",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Hf-178"
          }
        ]
      },
      {
        "id": "Ta-179",
        "name": {
          "en": "Tantalum-179",
          "pt-BR": "Tântalo-179",
        },
        "neutrons": 106,
        "weight": { "standard": 178.945929523 },
        "abundance": "syn",
        "half_life": "1.82 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Hf-179"
          }
        ]
      },
      {
        "id": "Ta-180",
        "name": {
          "en": "Tantalum-180",
          "pt-BR": "Tântalo-180",
        },
        "neutrons": 107,
        "weight": { "standard": 179.947464824 },
        "abundance": "syn",
        "half_life": "8.125 h",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 86,
            "decay_to": "Hf-180"
          },
          {
            "mode": "beta_minus",
            "pct": 14,
            "decay_to": "W-180"
          }
        ]
      },
      {
        "id": "Ta-180m",
        "name": {
          "en": "Tantalum-180m",
          "pt-BR": "Tântalo-180m",
        },
        "neutrons": 107,
        "weight": { "standard": 179.947464824 },
        "abundance": 0.012,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ta-181",
        "name": {
          "en": "Tantalum-181",
          "pt-BR": "Tântalo-181",
        },
        "neutrons": 108,
        "weight": { "standard": 180.947995820 },
        "abundance": 99.988,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ta-182",
        "name": {
          "en": "Tantalum-182",
          "pt-BR": "Tântalo-182",
        },
        "neutrons": 109,
        "weight": { "standard": 181.950151819 },
        "abundance": "syn",
        "half_life": "114.43 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "W-182"
          }
        ]
      },
      {
        "id": "Ta-183",
        "name": {
          "en": "Tantalum-183",
          "pt-BR": "Tântalo-183",
        },
        "neutrons": 110,
        "weight": { "standard": 182.951372619 },
        "abundance": "syn",
        "half_life": "5.1 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "W-183"
          }
        ]
      }
    ]
  },
  "W": {
    "id": "W",
    "symbol": "W",
    "name": {
      "en": "Tungsten",
      "pt-BR": "Tungstênio"
    },
    "atomic_number": 74,
    "weight": { "standard": 183.841 },
    "period": 6,
    "group": 6,
    "type": "transition_metal",
    "melting_point": 3695,
    "boiling_point": 5828,
    "oxidation_states": ["-4","-2","-1","0","+1","+2","+3","+4*","+5","+6*"],
    "electronegativity": 2.36,
    "radius": { 
      "empirical": "139",
      "covalent": "162±7"
    },
    "discovery_date": "1781",
    "discovery_by": "Carl Wilhelm Scheele",
    "electrons": [2, 8, 18, 32, 12, 2],
    "isotopes": [
      {
        "id": "W-180",
        "name": {
          "en": "Tungsten-180",
          "pt-BR": "Tungstênio-180",
        },
        "neutrons": 106,
        "weight": { "standard": 179.9467044 },
        "abundance": 0.12,
        "half_life": "1.8e18 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Hf-176"
          }
        ]
      },
      {
        "id": "W-181",
        "name": {
          "en": "Tungsten-181",
          "pt-BR": "Tungstênio-181",
        },
        "neutrons": 107,
        "weight": { "standard": 180.9481975 },
        "abundance": "syn",
        "half_life": "121.2 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Ta-181"
          }
        ]
      },
      {
        "id": "W-182",
        "name": {
          "en": "Tungsten-182",
          "pt-BR": "Tungstênio-182",
        },
        "neutrons": 108,
        "weight": { "standard": 181.94820429 },
        "abundance": 26.50,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "W-183",
        "name": {
          "en": "Tungsten-183",
          "pt-BR": "Tungstênio-183",
        },
        "neutrons": 109,
        "weight": { "standard": 182.95022309 },
        "abundance": 14.31,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "W-184",
        "name": {
          "en": "Tungsten-184",
          "pt-BR": "Tungstênio-184",
        },
        "neutrons": 110,
        "weight": { "standard": 183.95093129 },
        "abundance": 30.64,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "W-185",
        "name": {
          "en": "Tungsten-185",
          "pt-BR": "Tungstênio-185",
        },
        "neutrons": 111,
        "weight": { "standard": 184.953419310 },
        "abundance": "syn",
        "half_life": "75.1 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Re-185"
          }
        ]
      },
      {
        "id": "W-186",
        "name": {
          "en": "Tungsten-186",
          "pt-BR": "Tungstênio-186",
        },
        "neutrons": 112,
        "weight": { "standard": 185.954364119 },
        "abundance": 28.43,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Re": {
    "id": "Re",
    "symbol": "Re",
    "name": {
      "en": "Rhenium",
      "pt-BR": "Rênio"
    },
    "atomic_number": 75,
    "weight": { "standard": 186.2071 },
    "period": 6,
    "group": 7,
    "type": "transition_metal",
    "melting_point": 3459,
    "boiling_point": 5869,
    "oxidation_states": ["-3","-1","0","+1","+2","+3","+4*","+5","+6","+7"],
    "electronegativity": 1.9,
    "radius": { 
      "empirical": "137",
      "covalent": "151±7"
    },
    "discovery_date": "1908",
    "discovery_by": "Masataka Ogawa",
    "electrons": [2, 8, 18, 32, 13, 2],
    "isotopes": [
      {
        "id": "Re-185",
        "name": {
          "en": "Rhenium-185",
          "pt-BR": "Rênio-185",
        },
        "neutrons": 110,
        "weight": { "standard": 184.952955013 },
        "abundance": 37.4,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Re-187",
        "name": {
          "en": "Rhenium-187",
          "pt-BR": "Rênio-187",
        },
        "neutrons": 112,
        "weight": { "standard": 186.955753115 },
        "abundance": 62.6,
        "half_life": "4.12e10 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": null,
            "decay_to": "Os-187"
          }
        ]
      }
    ]
  },
  "Os": {
    "id": "Os",
    "symbol": "Os",
    "name": {
      "en": "Osmium",
      "pt-BR": "Ósmio"
    },
    "atomic_number": 76,
    "weight": { "standard": 190.233 },
    "period": 6,
    "group": 8,
    "type": "transition_metal",
    "melting_point": 3306,
    "boiling_point": 5285,
    "oxidation_states": ["-4","-2","-1","0","+1","+2","+3","+4*","+5","+6","+7","+8"],
    "electronegativity": 2.2,
    "radius": { 
      "empirical": "135",
      "covalent": "144±4"
    },
    "discovery_date": "1803",
    "discovery_by": "Smithson Tennant",
    "electrons": [2, 8, 18, 32, 14, 2],
    "isotopes": [
      {
        "id": "Os-184",
        "name": {
          "en": "Osmium-184",
          "pt-BR": "Ósmio-184",
        },
        "neutrons": 108,
        "weight": { "standard": 183.952489114 },
        "abundance": 0.02,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Os-185",
        "name": {
          "en": "Osmium-185",
          "pt-BR": "Ósmio-185",
        },
        "neutrons": 109,
        "weight": { "standard": 184.954042314 },
        "abundance": "syn",
        "half_life": "93.6 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Re-185"
          }
        ]
      },
      {
        "id": "Os-186",
        "name": {
          "en": "Osmium-186",
          "pt-BR": "Ósmio-186",
        },
        "neutrons": 110,
        "weight": { "standard": 185.953838215 },
        "abundance": 1.59,
        "half_life": "2.0e15 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": null,
            "decay_to": "W-182"
          }
        ]
      },
      {
        "id": "Os-187",
        "name": {
          "en": "Osmium-187",
          "pt-BR": "Ósmio-187",
        },
        "neutrons": 111,
        "weight": { "standard": 186.955750515 },
        "abundance": 1.96,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Os-188",
        "name": {
          "en": "Osmium-188",
          "pt-BR": "Ósmio-188",
        },
        "neutrons": 112,
        "weight": { "standard": 187.955838215 },
        "abundance": 13.24,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Os-189",
        "name": {
          "en": "Osmium-189",
          "pt-BR": "Ósmio-189",
        },
        "neutrons": 113,
        "weight": { "standard": 188.958147516 },
        "abundance": 16.15,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Os-190",
        "name": {
          "en": "Osmium-190",
          "pt-BR": "Ósmio-190",
        },
        "neutrons": 114,
        "weight": { "standard": 189.958447016 },
        "abundance": 26.26,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Os-191",
        "name": {
          "en": "Osmium-191",
          "pt-BR": "Ósmio-191",
        },
        "neutrons": 115,
        "weight": { "standard": 190.960929716 },
        "abundance": "syn",
        "half_life": "15.4 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Ir-191"
          }
        ]
      },
      {
        "id": "Os-192",
        "name": {
          "en": "Osmium-192",
          "pt-BR": "Ósmio-192",
        },
        "neutrons": 116,
        "weight": { "standard": 191.961480727 },
        "abundance": 40.78,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Os-193",
        "name": {
          "en": "Osmium-193",
          "pt-BR": "Ósmio-193",
        },
        "neutrons": 117,
        "weight": { "standard": 192.964151627 },
        "abundance": "syn",
        "half_life": "30.11 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Ir-191"
          }
        ]
      },
      {
        "id": "Os-194",
        "name": {
          "en": "Osmium-194",
          "pt-BR": "Ósmio-194",
        },
        "neutrons": 118,
        "weight": { "standard": 193.965182128 },
        "abundance": "syn",
        "half_life": "6 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Ir-194"
          }
        ]
      }
    ]
  },
  "Ir": {
    "id": "Ir",
    "symbol": "Ir",
    "name": {
      "en": "Iridium",
      "pt-BR": "Irídio"
    },
    "atomic_number": 77,
    "weight": { "standard": 192.2172 },
    "period": 6,
    "group": 9,
    "type": "transition_metal",
    "melting_point": 2739,
    "boiling_point": 4701,
    "oxidation_states": ["-3","-1","0","+1","+2","+3*","+4*","+5","+6","+7","+8","+9"],
    "electronegativity": 2.20,
    "radius": { 
      "empirical": "136",
      "covalent": "141±6"
    },
    "discovery_date": "1803",
    "discovery_by": "Smithson Tennant",
    "electrons": [2, 8, 18, 32, 15, 2],
    "isotopes": [
      {
        "id": "Ir-188",
        "name": {
          "en": "Iridium-188",
          "pt-BR": "Irídio-188",
        },
        "neutrons": 111,
        "weight": { "standard": 187.9588538 },
        "abundance": "syn",
        "half_life": "41.5 h",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Os-188"
          }
        ]
      },
      {
        "id": "Ir-189",
        "name": {
          "en": "Iridium-189",
          "pt-BR": "Irídio-189",
        },
        "neutrons": 112,
        "weight": { "standard": 188.95871914 },
        "abundance": "syn",
        "half_life": "13.2 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Os-189"
          }
        ]
      },
      {
        "id": "Ir-190",
        "name": {
          "en": "Iridium-190",
          "pt-BR": "Irídio-190",
        },
        "neutrons": 113,
        "weight": { "standard": 189.960546018 },
        "abundance": "syn",
        "half_life": "11.78 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Os-190"
          }
        ]
      },
      {
        "id": "Ir-191",
        "name": {
          "en": "Iridium-191",
          "pt-BR": "Irídio-191",
        },
        "neutrons": 114,
        "weight": { "standard": 190.960594018 },
        "abundance": 37.3,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ir-192",
        "name": {
          "en": "Iridium-192",
          "pt-BR": "Irídio-192",
        },
        "neutrons": 115,
        "weight": { "standard": 191.962605018 },
        "abundance": "syn",
        "half_life": "73.827 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 95.24,
            "decay_to": "Pt-192"
          },
          {
            "mode": "k_plus",
            "pct": 4.76,
            "decay_to": "Os-192"
          }
        ]
      },
      {
        "id": "Ir-192m2",
        "name": {
          "en": "Iridium-192m2",
          "pt-BR": "Irídio-192m2",
        },
        "neutrons": 115,
        "weight": { "standard": 191.962605018 },
        "abundance": "syn",
        "half_life": "241 y",
        "decay": [
          {
            "mode": "internal_convertion",
            "pct": 100,
            "decay_to": "Ir-192"
          }
        ]
      },
      {
        "id": "Ir-193",
        "name": {
          "en": "Iridium-193",
          "pt-BR": "Irídio-193",
        },
        "neutrons": 116,
        "weight": { "standard": 192.962926418 },
        "abundance": 62.7,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Ir-193m",
        "name": {
          "en": "Iridium-193m",
          "pt-BR": "Irídio-193m",
        },
        "neutrons": 116,
        "weight": { "standard": 192.962926418 },
        "abundance": "syn",
        "half_life": "10.53 d",
        "decay": [
          {
            "mode": "internal_convertion",
            "pct": 100,
            "decay_to": "Ir-193"
          }
        ]
      },
      {
        "id": "Ir-194",
        "name": {
          "en": "Iridium-194",
          "pt-BR": "Irídio-194",
        },
        "neutrons": 117,
        "weight": { "standard": 193.965078418 },
        "abundance": "syn",
        "half_life": "19.28 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Pt-194"
          }
        ]
      },
      {
        "id": "Ir-194m2",
        "name": {
          "en": "Iridium-194m2",
          "pt-BR": "Irídio-194m2",
        },
        "neutrons": 117,
        "weight": { "standard": 193.965078418 },
        "abundance": "syn",
        "half_life": "171 d",
        "decay": [
          {
            "mode": "internal_convertion",
            "pct": 100,
            "decay_to": "Ir-194"
          }
        ]
      }
    ]
  },
  "Pt": {
    "id": "Pt",
    "symbol": "Pt",
    "name": {
      "en": "Platinum",
      "pt-BR": "Platina"
    },
    "atomic_number": 78,
    "weight": { "standard": 195.0849 },
    "period": 6,
    "group": 10,
    "type": "transition_metal",
    "melting_point": 2014.4,
    "boiling_point": 4098,
    "oxidation_states": ["-3","-2","-1","+1","+2*","+3","+4*","+5","+6"],
    "electronegativity": 2.28,
    "radius": { 
      "empirical": "139",
      "covalent": "136±5",
      "waals": "175"
    },
    "discovery_date": "1735",
    "discovery_by": "Antonio de Ulloa",
    "electrons": [2, 8, 18, 32, 17, 1],
    "isotopes": [
      {
        "id": "Pt-190",
        "name": {
          "en": "Platinum-190",
          "pt-BR": "Platina-190",
        },
        "neutrons": 112,
        "weight": { "standard": 189.9599326 },
        "abundance": 0.012,
        "half_life": "6.5e11 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Os-186"
          }
        ]
      },
      {
        "id": "Pt-192",
        "name": {
          "en": "Platinum-192",
          "pt-BR": "Platina-192",
        },
        "neutrons": 113,
        "weight": { "standard": 191.961038027 },
        "abundance": 0.782,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Pt-193",
        "name": {
          "en": "Platinum-193",
          "pt-BR": "Platina-193",
        },
        "neutrons": 114,
        "weight": { "standard": 192.962987418 },
        "abundance": "syn",
        "half_life": "50 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Ir-193"
          }
        ]
      },
      {
        "id": "Pt-194",
        "name": {
          "en": "Platinum-194",
          "pt-BR": "PLatina-194",
        },
        "neutrons": 115,
        "weight": { "standard": 193.96268039 },
        "abundance": 32.864,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Pt-195",
        "name": {
          "en": "Platinum-195",
          "pt-BR": "Platina-195",
        },
        "neutrons": 116,
        "weight": { "standard": 194.96479119 },
        "abundance": 33.775,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Pt-196",
        "name": {
          "en": "Platinum-196",
          "pt-BR": "Platina-196",
        },
        "neutrons": 117,
        "weight": { "standard": 195.96495159 },
        "abundance": 25.211,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Pt-198",
        "name": {
          "en": "Platinum-198",
          "pt-BR": "Platina-198",
        },
        "neutrons": 118,
        "weight": { "standard": 197.9678933 },
        "abundance": 7.356,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Au": {
    "id": "Au",
    "symbol": "Au",
    "name": {
      "en": "Gold",
      "pt-BR": "Ouro"
    },
    "atomic_number": 79,
    "weight": { "standard": 196.9665704 },
    "period": 6,
    "group": 11,
    "type": "transition_metal",
    "melting_point": 1337.33,
    "boiling_point": 3129,
    "oxidation_states": ["-3","-2","-1","+1*","+2","+3*","+5"],
    "electronegativity": 2.54,
    "radius": { 
      "empirical": "144",
      "covalent": "136±6",
      "waals": "166"
    },
    "discovery_date": "6000 BCE",
    "discovery_by": "?",
    "electrons": [2, 8, 18, 32, 18, 1],
    "isotopes": [
      {
        "id": "Au-195",
        "name": {
          "en": "Gold-195",
          "pt-BR": "Ouro-195",
        },
        "neutrons": 116,
        "weight": { "standard": 194.965034614 },
        "abundance": "syn",
        "half_life": "186.098 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Pt-195"
          }
        ]
      },
      {
        "id": "Au-196",
        "name": {
          "en": "Gold-196",
          "pt-BR": "Ouro-196",
        },
        "neutrons": 117,
        "weight": { "standard": 195.9665703 },
        "abundance": "syn",
        "half_life": "6.1669 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 93.05,
            "decay_to": "Pt-196"
          },
          {
            "mode": "beta_minus",
            "pct": 6.95,
            "decay_to": "Hg-196"
          }
        ]
      },
      {
        "id": "Au-197",
        "name": {
          "en": "Gold-197",
          "pt-BR": "Ouro-197",
        },
        "neutrons": 118,
        "weight": { "standard": 196.96656876 },
        "abundance": 100,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Au-198",
        "name": {
          "en": "Gold-198",
          "pt-BR": "Ouro-198",
        },
        "neutrons": 119,
        "weight": { "standard": 197.96824236 },
        "abundance": "syn",
        "half_life": "2.69517 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Hg-198"
          }
        ]
      },
      {
        "id": "Au-199",
        "name": {
          "en": "Gold-199",
          "pt-BR": "Ouro-199",
        },
        "neutrons": 120,
        "weight": { "standard": 198.96876526 },
        "abundance": "syn",
        "half_life": "3.139 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Hg-199"
          }
        ]
      }
    ]
  },
  "Hg": {
    "id": "Hg",
    "symbol": "Hg",
    "name": {
      "en": "Mercury",
      "pt-BR": "Mercúrio"
    },
    "atomic_number": 80,
    "weight": { "standard": 200.5923 },
    "period": 6,
    "group": 12,
    "type": "transition_metal",
    "melting_point": 234.32,
    "boiling_point": 692.88,
    "oxidation_states": ["-2","+1","+2*"],
    "electronegativity": 2.00,
    "radius": { 
      "empirical": "151",
      "covalent": "155"
    },
    "discovery_date": "2000 BCE",
    "discovery_by": "?",
    "electrons": [2, 8, 18, 32, 18, 2],
    "isotopes": [
      {
        "id": "Hg-194",
        "name": {
          "en": "Mercury-194",
          "pt-BR": "Mercúrio-194",
        },
        "neutrons": 114,
        "weight": { "standard": 193.96543913 },
        "abundance": "syn",
        "half_life": "444 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Au-194"
          }
        ]
      },
      {
        "id": "Hg-195",
        "name": {
          "en": "Mercury-195",
          "pt-BR": "Mercúrio-195",
        },
        "neutrons": 115,
        "weight": { "standard": 194.96672025 },
        "abundance": "syn",
        "half_life": "10.53 h",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Au-195"
          }
        ]
      },
      {
        "id": "Hg-196",
        "name": {
          "en": "Mercury-196",
          "pt-BR": "Mercúrio-196",
        },
        "neutrons": 116,
        "weight": { "standard": 195.9658333 },
        "abundance": 0.15,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Hg-197",
        "name": {
          "en": "Mercury-197",
          "pt-BR": "Mercúrio-197",
        },
        "neutrons": 117,
        "weight": { "standard": 196.9672133 },
        "abundance": "syn",
        "half_life": "64.14 h",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Au-197"
          }
        ]
      },
      {
        "id": "Hg-198",
        "name": {
          "en": "Mercury-198",
          "pt-BR": "Mercúrio-198",
        },
        "neutrons": 118,
        "weight": { "standard": 197.96676904 },
        "abundance": 10.04,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Hg-199",
        "name": {
          "en": "Mercury-199",
          "pt-BR": "Mercúrio-199",
        },
        "neutrons": 119,
        "weight": { "standard": 198.96827994 },
        "abundance": 16.94,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Hg-200",
        "name": {
          "en": "Mercury-200",
          "pt-BR": "Mercúrio-200",
        },
        "neutrons": 120,
        "weight": { "standard": 199.96832604 },
        "abundance": 23.14,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Hg-201",
        "name": {
          "en": "Mercury-201",
          "pt-BR": "Mercúrio-201",
        },
        "neutrons": 121,
        "weight": { "standard": 200.97030236 },
        "abundance": 13.17,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Hg-202",
        "name": {
          "en": "Mercury-202",
          "pt-BR": "Mercúrio-202",
        },
        "neutrons": 122,
        "weight": { "standard": 201.97064306 },
        "abundance": 29.74,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Hg-203",
        "name": {
          "en": "Mercury-203",
          "pt-BR": "Mercúrio-203",
        },
        "neutrons": 123,
        "weight": { "standard": 202.972872518 },
        "abundance": "syn",
        "half_life": "46.595 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Tl-203"
          }
        ]
      },
      {
        "id": "Hg-204",
        "name": {
          "en": "Mercury-204",
          "pt-BR": "Mercúrio-204",
        },
        "neutrons": 124,
        "weight": { "standard": 203.97349394 },
        "abundance": 6.82,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Tl": {
    "id": "Tl",
    "symbol": "Tl",
    "name": {
      "en": "Thallium",
      "pt-BR": "Tálio"
    },
    "atomic_number": 81,
    "weight": { "conventional": 204.38, "standard": [204.382, 204.385] },
    "period": 6,
    "group": 13,
    "type": "post_transitional",
    "melting_point": 577,
    "boiling_point": 1746,
    "oxidation_states": ["-5","-2","-1","+1*","+2","+3*"],
    "electronegativity": 1.62,
    "radius": { 
      "empirical": "170",
      "covalent": "145±7",
      "waals": "196"
    },
    "discovery_date": "1861",
    "discovery_by": "William Crookes",
    "electrons": [2, 8, 18, 32, 18, 3],
    "isotopes": [
      {
        "id": "Tl-203",
        "name": {
          "en": "Thallium-203",
          "pt-BR": "Tálio-203",
        },
        "neutrons": 122,
        "weight": { "standard": 202.972344214 },
        "abundance": 29.5,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Tl-204",
        "name": {
          "en": "Thallium-204",
          "pt-BR": "Tálio-204",
        },
        "neutrons": 123,
        "weight": { "standard": 203.973863513 },
        "abundance": "syn",
        "half_life": "3.78 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 97.1,
            "decay_to": "Pb-204"
          },
          {
            "mode": "k_plus",
            "pct": 2.9,
            "decay_to": "Hg-204"
          }
        ]
      },
      {
        "id": "Tl-205",
        "name": {
          "en": "Thallium-205",
          "pt-BR": "Tálio-205",
        },
        "neutrons": 124,
        "weight": { "standard": 204.974427514 },
        "abundance": 70.5,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      }
    ]
  },
  "Pb": {
    "id": "Pb",
    "symbol": "Pb",
    "name": {
      "en": "Lead",
      "pt-BR": "Chumbo"
    },
    "atomic_number": 82,
    "weight": { "standard": 207.21 },
    "period": 6,
    "group": 14,
    "type": "post_transitional",
    "melting_point": 660.61,
    "boiling_point": 2022,
    "oxidation_states": ["-4","-2","-1","+1","+2*","+3","+4*"],
    "electronegativity": 1.87,
    "radius": { 
      "empirical": "175",
      "covalent": "146±5",
      "waals": "202",
    },
    "discovery_date": "7000 BCE",
    "discovery_by": "?",
    "electrons": [2, 8, 18, 32, 18, 4],
    "isotopes": [
      {
        "id": "Pb-202",
        "name": {
          "en": "Lead-202",
          "pt-BR": "Chumbo-202",
        },
        "neutrons": 120,
        "weight": { "standard": 201.9721599 },
        "abundance": "syn",
        "half_life": "5.25e4 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 99,
            "decay_to": "Tl-202"
          },
          {
            "mode": "alpha",
            "pct": 1,
            "decay_to": "Hg-198"
          }
        ]
      },
      {
        "id": "Pb-204",
        "name": {
          "en": "Lead-204",
          "pt-BR": "Chumbo-204",
        },
        "neutrons": 122,
        "weight": { "standard": 203.973043613 },
        "abundance": 1.4,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Pb-205",
        "name": {
          "en": "Lead-205",
          "pt-BR": "Chumbo-205",
        },
        "neutrons": 123,
        "weight": { "standard": 204.974481813 },
        "abundance": "trace",
        "half_life": "1.537e7 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 100,
            "decay_to": "Tl-205"
          }
        ]
      },
      {
        "id": "Pb-206",
        "name": {
          "en": "Lead-206",
          "pt-BR": "Chumbo-206",
        },
        "neutrons": 124,
        "weight": { "standard": 205.974465313 },
        "abundance": 24.1,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Pb-207",
        "name": {
          "en": "Lead-207",
          "pt-BR": "Chumbo-207",
        },
        "neutrons": 125,
        "weight": { "standard": 206.975896913 },
        "abundance": 22.1,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Pb-208",
        "name": {
          "en": "Lead-208",
          "pt-BR": "Chumbo-208",
        },
        "neutrons": 126,
        "weight": { "standard": 207.976652113 },
        "abundance": 52.4,
        "half_life": null,
        "decay": [
          {
            "mode": "stable"
          }
        ]
      },
      {
        "id": "Pb-209",
        "name": {
          "en": "Lead-209",
          "pt-BR": "Chumbo-209",
        },
        "neutrons": 127,
        "weight": { "standard": 208.981090119 },
        "abundance": "trace",
        "half_life": "3.253 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Bi-209"
          }
        ]
      },
      {
        "id": "Pb-210",
        "name": {
          "en": "Lead-210",
          "pt-BR": "Chumbo-210",
        },
        "neutrons": 128,
        "weight": { "standard": 209.984188516 },
        "abundance": "trace",
        "half_life": "22.3 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 99.99,
            "decay_to": "Bi-210"
          },
          {
            "mode": "alpha",
            "pct": 1.9e-6,
            "decay_to": "Hg-206"
          }
        ]
      },
      {
        "id": "Pb-211",
        "name": {
          "en": "Lead-211",
          "pt-BR": "Chumbo-211",
        },
        "neutrons": 129,
        "weight": { "standard": 210.988737029 },
        "abundance": "trace",
        "half_life": "36.1 min",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Bi-211"
          }
        ]
      },
      {
        "id": "Pb-212",
        "name": {
          "en": "Lead-212",
          "pt-BR": "Chumbo-212",
        },
        "neutrons": 130,
        "weight": { "standard": 211.991897524 },
        "abundance": "trace",
        "half_life": "10.64 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Bi-212"
          }
        ]
      },
      {
        "id": "Pb-214",
        "name": {
          "en": "Lead-214",
          "pt-BR": "Chumbo-214",
        },
        "neutrons": 132,
        "weight": { "standard": 213.999805426 },
        "abundance": "trace",
        "half_life": "26.8 min",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Bi-214"
          }
        ]
      }
    ]
  },
  "Bi": {
    "id": "Bi",
    "symbol": "Bi",
    "name": {
      "en": "Bismuth",
      "pt-BR": "Bismuto"
    },
    "atomic_number": 83,
    "weight": { "standard": 208.980401 },
    "period": 6,
    "group": 15,
    "type": "post_transitional",
    "melting_point": 544.4,
    "boiling_point": 1837,
    "oxidation_states": ["-3","-2","-1","+1","+2","+3*","+4","+5"],
    "electronegativity": 2.02,
    "radius": { 
      "empirical": "156",
      "covalent": "148±4",
      "waals": "207"
    },
    "discovery_date": "1753",
    "discovery_by": "Claude François Geoffroy",
    "electrons": [2, 8, 18, 32, 18, 5],
    "isotopes": [
      {
        "id": "Bi-207",
        "name": {
          "en": "Bismuth-207",
          "pt-BR": "Bismuto-207",
        },
        "neutrons": 124,
        "weight": { "standard": 206.978470726 },
        "abundance": "syn",
        "half_life": "32.9 y",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Pb-207"
          }
        ]
      },
      {
        "id": "Bi-208",
        "name": {
          "en": "Bismuth-208",
          "pt-BR": "Bismuto-208",
        },
        "neutrons": 125,
        "weight": { "standard": 207.979742225 },
        "abundance": "syn",
        "half_life": "3.68e5 y",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 100,
            "decay_to": "Pb-208"
          }
        ]
      },
      {
        "id": "Bi-209",
        "name": {
          "en": "Bismuth-209",
          "pt-BR": "Bismuto-209",
        },
        "neutrons": 126,
        "weight": { "standard": 208.980398716 },
        "abundance": 100,
        "half_life": "1.9e19 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Tl-205"
          }
        ]
      },
      {
        "id": "Bi-210",
        "name": {
          "en": "Bismuth-210",
          "pt-BR": "Bismuto-210",
        },
        "neutrons": 127,
        "weight": { "standard": 209.984120416 },
        "abundance": "trace",
        "half_life": "5.012 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 99.99,
            "decay_to": "Po-210"
          },
          {
            "mode": "alpha",
            "pct": 1.32e-4,
            "decay_to": "Tl-206"
          }
        ]
      },
      {
        "id": "Bi-210m",
        "name": {
          "en": "Bismuth-210m",
          "pt-BR": "Bismuto-210m",
        },
        "neutrons": 127,
        "weight": { "standard": 209.984120416 },
        "abundance": "syn",
        "half_life": "3.04e6 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Tl-206"
          }
        ]
      }
    ]
  },
  "Po": {
    "id": "Po",
    "symbol": "Po",
    "name": {
      "en": "Polonium",
      "pt-BR": "Polônio"
    },
    "atomic_number": 84,
    "weight": { "most_stable": 209 },
    "period": 6,
    "group": 16,
    "type": "post_transitional",
    "melting_point": 527,
    "boiling_point": 1235,
    "oxidation_states": ["-2*","+2*","+4*","+5","+6"],
    "electronegativity": 2.0,
    "radius": { 
      "empirical": "168",
      "covalent": "140±4",
      "waals": "197"
    },
    "discovery_date": "1898",
    "discovery_by": "Pierre Curie & Marie Curie",
    "electrons": [2, 8, 18, 32, 18, 6],
    "isotopes": [
      {
        "id": "Po-208",
        "name": {
          "en": "Polonium-208",
          "pt-BR": "Polônio-208",
        },
        "neutrons": 124,
        "weight": { "standard": 207.981245719 },
        "abundance": "syn",
        "half_life": "2.898 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Pb-204"
          },
          {
            "mode": "beta_plus",
            "pct": 0.00277,
            "decay_to": "Bi-208"
          }
        ]
      },
      {
        "id": "Po-209",
        "name": {
          "en": "Polonium-209",
          "pt-BR": "Polônio-209",
        },
        "neutrons": 125,
        "weight": { "standard": 208.982430420 },
        "abundance": "syn",
        "half_life": "125.2 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.52,
            "decay_to": "Pb-205"
          },
          {
            "mode": "beta_plus",
            "pct": 0.48,
            "decay_to": "Bi-209"
          }
        ]
      },
      {
        "id": "Po-210",
        "name": {
          "en": "Polonium-210",
          "pt-BR": "Polônio-210",
        },
        "neutrons": 126,
        "weight": { "standard": 209.982873713 },
        "abundance": "trace",
        "half_life": "138.376 d",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Pb-206"
          }
        ]
      }
    ]
  },
  "At": {
    "id": "At",
    "symbol": "At",
    "name": {
      "en": "Astatine",
      "pt-BR": "Ástato"
    },
    "atomic_number": 85,
    "weight": { "most_stable": 210 },
    "period": 6,
    "group": 17,
    "type": "metalloid",
    "melting_point": 575,
    "boiling_point": 610,
    "oxidation_states": ["-1*","+1*","+3","+5","+7"],
    "electronegativity": 2.2,
    "radius": { 
      "empirical": "150",
      "waals": "202"
    },
    "discovery_date": "1940",
    "discovery_by": "Dale R. Corson, Kenneth Ross MacKenzie & Emilio Segrè",
    "electrons": [2, 8, 18, 32, 18, 7],
    "isotopes": [
      {
        "id": "At-209",
        "name": {
          "en": "Astatine-209",
          "pt-BR": "Ástato-209",
        },
        "neutrons": 124,
        "weight": { "standard": 208.9861738 },
        "abundance": "syn",
        "half_life": "5.41 h",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 96,
            "decay_to": "Po-209"
          },
          {
            "mode": "alpha",
            "pct": 4,
            "decay_to": "Bi-205"
          }
        ]
      },
      {
        "id": "At-210",
        "name": {
          "en": "Astatine-210",
          "pt-BR": "Ástato-210",
        },
        "neutrons": 125,
        "weight": { "standard": 209.9871488 },
        "abundance": "syn",
        "half_life": "8.1 h",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 99.8,
            "decay_to": "Po-210"
          },
          {
            "mode": "alpha",
            "pct": 0.18,
            "decay_to": "Bi-206"
          }
        ]
      },
      {
        "id": "At-211",
        "name": {
          "en": "Astatine-211",
          "pt-BR": "Ástato-211",
        },
        "neutrons": 126,
        "weight": { "standard": 210.987496330 },
        "abundance": "syn",
        "half_life": "7.214 h",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 58.2,
            "decay_to": "Po-211"
          },
          {
            "mode": "alpha",
            "pct": 42,
            "decay_to": "Bi-207"
          }
        ]
      }
    ]
  },
  "Rn": {
    "id": "Rn",
    "symbol": "Rn",
    "name": {
      "en": "Radon",
      "pt-BR": "Radônio"
    },
    "atomic_number": 86,
    "weight": { "most_stable": 222 },
    "period": 6,
    "group": 18,
    "type": "noble_gas",
    "melting_point": 202,
    "boiling_point": 211.3,
    "oxidation_states": ["0*","+2","+6"],
    "electronegativity": null,
    "radius": { 
      "waals": "220",
      "covalent": "150"
    },
    "discovery_date": "1899",
    "discovery_by": "Ernest Rutherford & Robert B. Owens",
    "electrons": [2, 8, 18, 32, 18, 8],
    "isotopes": [
      {
        "id": "Rn-210",
        "name": {
          "en": "Radon-210",
          "pt-BR": "Radônio-210",
        },
        "neutrons": 124,
        "weight": { "standard": 209.9896969 },
        "abundance": "syn",
        "half_life": "2.4 h",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Po-206"
          }
        ]
      },
      {
        "id": "Rn-211",
        "name": {
          "en": "Radon-211",
          "pt-BR": "Radônio-211",
        },
        "neutrons": 125,
        "weight": { "standard": 210.9906017 },
        "abundance": "syn",
        "half_life": "14.6 h",
        "decay": [
          {
            "mode": "alpha",
            "pct": 72.6,
            "decay_to": "Po-207"
          },
          {
            "mode": "beta_plus",
            "pct": 27.4,
            "decay_to": "At-211"
          }
        ]
      },
      {
        "id": "Rn-222",
        "name": {
          "en": "Radon-222",
          "pt-BR": "Radônio-222",
        },
        "neutrons": 136,
        "weight": { "standard": 222.017577725 },
        "abundance": "trace",
        "half_life": "3.8235 d",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Po-218"
          }
        ]
      },
      {
        "id": "Rn-224",
        "name": {
          "en": "Radon-224",
          "pt-BR": "Radônio-224",
        },
        "neutrons": 138,
        "weight": { "standard": 224.0240932 },
        "abundance": "syn",
        "half_life": "107 min",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Fr-224"
          }
        ]
      }
    ]
  },
  "Fr": {
    "id": "Fr",
    "symbol": "Fr",
    "name": {
      "en": "Francium",
      "pt-BR": "Frâncio"
    },
    "atomic_number": 87,
    "weight": { "most_stable": 223 },
    "period": 7,
    "group": 1,
    "type": "alkali_metal",
    "melting_point": 300,
    "boiling_point": 950,
    "oxidation_states": ["+1*"],
    "electronegativity": 0.79,
    "radius": { 
      "covalent": "260",
      "waals": "348",
    },
    "discovery_date": "1939",
    "discovery_by": "Marguerite Perey",
    "electrons": [2, 8, 18, 32, 18, 8, 1],
    "isotopes": [
      {
        "id": "Fr-221",
        "name": {
          "en": "Francium-221",
          "pt-BR": "Frâncio-221",
        },
        "neutrons": 134,
        "weight": { "standard": 221.0142555 },
        "abundance": "trace",
        "half_life": "4.9 min",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "At-217"
          },
          {
            "mode": "beta_minus",
            "pct": 0.006,
            "decay_to": "Ra-221"
          },
          {
            "mode": "cluster_decay",
            "pct": 8.79e-11,
            "decay_to": ["Tl-207","C-14"]
          }
        ]
      },
      {
        "id": "Fr-222",
        "name": {
          "en": "Francium-222",
          "pt-BR": "Frâncio-222",
        },
        "neutrons": 135,
        "weight": { "standard": 222.01755223 },
        "abundance": "syn",
        "half_life": "14.2 min",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Ra-222"
          }
        ]
      },
      {
        "id": "Fr-223",
        "name": {
          "en": "Francium-223",
          "pt-BR": "Frâncio-223",
        },
        "neutrons": 136,
        "weight": { "standard": 223.019735926 },
        "abundance": "trace",
        "half_life": "22.00 min",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 99.99,
            "decay_to": "Ra-223"
          },
          {
            "mode": "alpha",
            "pct": 0.006,
            "decay_to": "At-219"
          }
        ]
      }
    ]
  },
  "Ra": {
    "id": "Ra",
    "symbol": "Ra",
    "name": {
      "en": "Radium",
      "pt-BR": "Rádio"
    },
    "atomic_number": 88,
    "weight": { "most_stable": 226 },
    "period": 7,
    "group": 2,
    "type": "alkaline_earth",
    "melting_point": 973,
    "boiling_point": 2010,
    "oxidation_states": ["+2*"],
    "electronegativity": 0.9,
    "radius": { 
      "covalent": "221±2",
      "waals": "283",
    },
    "discovery_date": "1898",
    "discovery_by": "Pierre Curie & Marie Curie",
    "electrons": [2, 8, 18, 32, 18, 8, 2],
    "isotopes": [
      {
        "id": "Ra-223",
        "name": {
          "en": "Radium-223",
          "pt-BR": "Rádio-223",
        },
        "neutrons": 135,
        "weight": { "standard": 223.018502227 },
        "abundance": "trace",
        "half_life": "11.43 d",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Rn-219"
          },
          {
            "mode": "cluster_decay",
            "pct": 6.4e-8,
            "decay_to": ["Pb-209","C-14"]
          }
        ]
      },
      {
        "id": "Ra-224",
        "name": {
          "en": "Radium-224",
          "pt-BR": "Rádio-224",
        },
        "neutrons": 136,
        "weight": { "standard": 224.020211824 },
        "abundance": "trace",
        "half_life": "3.6319 d",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Rn-220"
          },
          {
            "mode": "cluster_decay",
            "pct": 4.3e-9,
            "decay_to": ["Pb-210","C-14"]
          }
        ]
      },
      {
        "id": "Ra-225",
        "name": {
          "en": "Radium-225",
          "pt-BR": "Rádio-225",
        },
        "neutrons": 137,
        "weight": { "standard": 225.0236123 },
        "abundance": "trace",
        "half_life": "14.9 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Ac-225"
          }
        ]
      },
      {
        "id": "Ra-226",
        "name": {
          "en": "Radium-226",
          "pt-BR": "Rádio-226",
        },
        "neutrons": 138,
        "weight": { "standard": 226.025409825 },
        "abundance": "trace",
        "half_life": "1600 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Rn-222"
          },
          {
            "mode": "double_beta_minus",
            "pct": 1e-9,
            "decay_to": "Th-226"
          },
          {
            "mode": "cluster_decay",
            "pct": 2.6e-9,
            "decay_to": ["Pb-212","C-14"]
          }
        ]
      },
      {
        "id": "Ra-228",
        "name": {
          "en": "Radium-228",
          "pt-BR": "Rádio-228",
        },
        "neutrons": 140,
        "weight": { "standard": 228.031070326 },
        "abundance": "trace",
        "half_life": "5.75 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Ac-228"
          }
        ]
      }
    ]
  },
  "Ac": {
    "id": "Ac",
    "symbol": "Ac",
    "name": {
      "en": "Actinium",
      "pt-BR": "Actínio"
    },
    "atomic_number": 89,
    "weight": { "most_stable": 227 },
    "period": 7,
    "group": 3,
    "type": "actinoid",
    "melting_point": 1323,
    "boiling_point": 3473,
    "oxidation_states": ["+2","+3*"],
    "electronegativity": 1.1,
    "radius": { 
      "covalent": "215"
    },
    "discovery_date": "1902",
    "discovery_by": "Friedrich Oskar Giesel",
    "electrons": [2, 8, 18, 32, 18, 9, 2],
    "isotopes": [
      {
        "id": "Ac-225",
        "name": {
          "en": "Actinium-225",
          "pt-BR": "Actínio-225",
        },
        "neutrons": 136,
        "weight": { "standard": 225.0232305 },
        "abundance": "trace",
        "half_life": "10.0 d",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Fr-221"
          },
          {
            "mode": "cluster_decay",
            "pct": 6e-10,
            "decay_to": ["Bi-211","C-14"]
          }
        ]
      },
      {
        "id": "Ac-226",
        "name": {
          "en": "Actinium-226",
          "pt-BR": "Actínio-226",
        },
        "neutrons": 137,
        "weight": { "standard": 226.0260984 },
        "abundance": "syn",
        "half_life": "29.37 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 83,
            "decay_to": "Th-226"
          },
          {
            "mode": "k_plus",
            "pct": 17,
            "decay_to": "Ra-226"
          },
          {
            "mode": "alpha",
            "pct": 0.006,
            "decay_to": "Fr-222"
          }
        ]
      },
      {
        "id": "Ac-227",
        "name": {
          "en": "Actinium-227",
          "pt-BR": "Actínio-227",
        },
        "neutrons": 138,
        "weight": { "standard": 227.027752126 },
        "abundance": "trace",
        "half_life": "21.772 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 98.61,
            "decay_to": "Th-227"
          },
          {
            "mode": "alpha",
            "pct": 1.38,
            "decay_to": "Fr-223"
          }
        ]
      }
    ]
  },
  "Th": {
    "id": "Th",
    "symbol": "Th",
    "name": {
      "en": "Thorium",
      "pt-BR": "Tório"
    },
    "atomic_number": 90,
    "weight": { "standard": 232.03774 },
    "period": 7,
    "group": 3,
    "type": "actinoid",
    "melting_point": 2023,
    "boiling_point": 5093,
    "oxidation_states": ["+1","+2","+3","+4*"],
    "electronegativity": 1.3,
    "radius": { 
      "empirical": "179.8",
      "covalent": "206±6",
    },
    "discovery_date": "1829",
    "discovery_by": "Jöns Jakob Berzelius",
    "electrons": [2, 8, 18, 32, 18, 10, 2],
    "isotopes": [
      {
        "id": "Th-227",
        "name": {
          "en": "Thorium-227",
          "pt-BR": "Tório-227",
        },
        "neutrons": 137,
        "weight": { "standard": 227.027704127 },
        "abundance": "trace",
        "half_life": "18.68 d",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Ra-223"
          }
        ]
      },
      {
        "id": "Th-228",
        "name": {
          "en": "Thorium-228",
          "pt-BR": "Tório-228",
        },
        "neutrons": 138,
        "weight": { "standard": 228.028741124 },
        "abundance": "trace",
        "half_life": "1.9116 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Ra-224"
          },
          {
            "mode": "cluster_decay",
            "pct": 1.3e-11,
            "decay_to": ["Pb-208","O-20"]
          }
        ]
      },
      {
        "id": "Th-229",
        "name": {
          "en": "Thorium-229",
          "pt-BR": "Tório-229",
        },
        "neutrons": 139,
        "weight": { "standard": 229.0317623 },
        "abundance": "trace",
        "half_life": "7.34e3 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Ra-225"
          }
        ]
      },
      {
        "id": "Th-230",
        "name": {
          "en": "Thorium-230",
          "pt-BR": "Tório-230",
        },
        "neutrons": 140,
        "weight": { "standard": 230.033133819 },
        "abundance": 0.02,
        "half_life": "7.538e4 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Ra-226"
          },
          {
            "mode": "cluster_decay",
            "pct": 5.6e-11,
            "decay_to": ["Hg-206","Ne-24"]
          },
          {
            "mode": "spontaneous_fission",
            "pct": 5e-11,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Th-231",
        "name": {
          "en": "Thorium-231",
          "pt-BR": "Tório-231",
        },
        "neutrons": 141,
        "weight": { "standard": 231.036304319 },
        "abundance": "trace",
        "half_life": "25.52 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 99.99,
            "decay_to": "Pa-231"
          },
          {
            "mode": "alpha",
            "pct": 1e-8,
            "decay_to": "Ra-227"
          }
        ]
      },
      {
        "id": "Th-232",
        "name": {
          "en": "Thorium-232",
          "pt-BR": "Tório-232",
        },
        "neutrons": 142,
        "weight": { "standard": 232.038055321 },
        "abundance": 99.98,
        "half_life": "1.405e10 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Ra-228"
          },
          {
            "mode": "double_beta_minus",
            "pct": 1e-9,
            "decay_to": "U-232"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 1.1e-9,
            "decay_to": "many"
          },
          {
            "mode": "cluster_decay",
            "pct": 2.78e-10,
            "decay_to": ["Yb-182","Ne-26","Ne-24"]
          }
        ]
      },
      {
        "id": "Th-234",
        "name": {
          "en": "Thorium-234",
          "pt-BR": "Tório-234",
        },
        "neutrons": 144,
        "weight": { "standard": 234.0436014 },
        "abundance": "trace",
        "half_life": "24.10 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Pa-234,"
          }
        ]
      }
    ]
  },
  "Pa": {
    "id": "Pa",
    "symbol": "Pa",
    "name": {
      "en": "Protactinium",
      "pt-BR": "Protactínio"
    },
    "atomic_number": 91,
    "weight": { "standard": 231.035881 },
    "period": 7,
    "group": 3,
    "type": "actinoid",
    "melting_point": 1845,
    "boiling_point": 4273,
    "oxidation_states": ["+2","+3","+4","+5*"],
    "electronegativity": 1.5,
    "radius": { 
      "empirical": "163",
      "covalent": "200",
    },
    "discovery_date": "1913",
    "discovery_by": "Kasimir Fajans & Oswald Helmuth Göhring",
    "electrons": [2, 8, 18, 32, 20, 9, 2],
    "isotopes": [
      {
        "id": "Pa-229",
        "name": {
          "en": "Protactinium-229",
          "pt-BR": "Protactínio-229",
        },
        "neutrons": 138,
        "weight": { "standard": 229.032096830 },
        "abundance": "syn",
        "half_life": "1.50 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 99.52,
            "decay_to": "Th-229"
          },
          {
            "mode": "alpha",
            "pct": 0.48,
            "decay_to": "Ac-225"
          }
        ]
      },
      {
        "id": "Pa-230",
        "name": {
          "en": "Protactinium-230",
          "pt-BR": "Protactínio-230",
        },
        "neutrons": 139,
        "weight": { "standard": 230.0345414 },
        "abundance": "syn",
        "half_life": "17.4 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 91.6,
            "decay_to": "Th-230"
          },
          {
            "mode": "beta_minus",
            "pct": 8.4,
            "decay_to": "U-230"
          },
          {
            "mode": "alpha",
            "pct": 0.00319,
            "decay_to": "Ac-226"
          }
        ]
      },
      {
        "id": "Pa-231",
        "name": {
          "en": "Protactinium-231",
          "pt-BR": "Protactínio-231",
        },
        "neutrons": 140,
        "weight": { "standard": 231.035884024 },
        "abundance": 100,
        "half_life": "3.276e4 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Ac-227"
          },
          {
            "mode": "cluster_decay",
            "pct": 1.34e-9,
            "decay_to": ["Tl-207","Ne-24"]
          },
          {
            "mode": "spontaneous_fission",
            "pct": 3e-10,
            "decay_to": "many"
          },
          {
            "mode": "cluster_decay",
            "pct": 1e-12,
            "decay_to": ["Pb-208","F-23"]
          }
        ]
      },
      {
        "id": "Pa-232",
        "name": {
          "en": "Protactinium-232",
          "pt-BR": "Protactínio-232",
        },
        "neutrons": 141,
        "weight": { "standard": 232.0385928 },
        "abundance": "syn",
        "half_life": "1.31 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 99.99,
            "decay_to": "U-232"
          },
          {
            "mode": "k_plus",
            "pct": 0.003,
            "decay_to": "Th-232"
          }
        ]
      },
      {
        "id": "Pa-233",
        "name": {
          "en": "Protactinium-233",
          "pt-BR": "Protactínio-233",
        },
        "neutrons": 142,
        "weight": { "standard": 233.040247323 },
        "abundance": "trace",
        "half_life": "26.975 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "U-233"
          }
        ]
      },
      {
        "id": "Pa-234",
        "name": {
          "en": "Protactinium-234",
          "pt-BR": "Protactínio-234",
        },
        "neutrons": 143,
        "weight": { "standard": 234.0433085 },
        "abundance": "trace",
        "half_life": "6.70 h",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 99.99,
            "decay_to": "U-234"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 3e-10,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Pa-234m",
        "name": {
          "en": "Protactinium-234m",
          "pt-BR": "Protactínio-234m",
        },
        "neutrons": 143,
        "weight": { "standard": 234.0433085 },
        "abundance": "trace",
        "half_life": "1.17 min",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 99.83,
            "decay_to": "U-234"
          },
          {
            "mode": "internal_convertion",
            "pct": 0.16,
            "decay_to": "Pa-234"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 1e-10,
            "decay_to": "many"
          }
        ]
      }
    ]
  },
  "U": {
    "id": "U",
    "symbol": "U",
    "name": {
      "en": "Uranium",
      "pt-BR": "Urânio"
    },
    "atomic_number": 92,
    "weight": { "standard": 238.028913 },
    "period": 7,
    "group": 3,
    "type": "actinoid",
    "melting_point": 1408,
    "boiling_point": 4200,
    "oxidation_states": ["+1","+2","+3","+4","+5","+6*"],
    "electronegativity": 1.38,
    "radius": { 
      "empirical": "156",
      "covalent": "196±7",
      "waals": "186",
    },
    "discovery_date": "1789",
    "discovery_by": "Martin Heinrich Klaproth",
    "electrons": [2, 8, 18, 32, 21, 9, 2],
    "isotopes": [
      {
        "id": "U-232",
        "name": {
          "en": "Uranium-232",
          "pt-BR": "Urânio-232",
        },
        "neutrons": 140,
        "weight": { "standard": 232.037156224 },
        "abundance": "syn",
        "half_life": "68.9 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Th-228"
          },
          {
            "mode": "cluster_decay",
            "pct": 8.9e-10,
            "decay_to": ["Pb-208","Ne-24"]
          },
          {
            "mode": "cluster_decay",
            "pct": 5e-12,
            "decay_to": ["Hg-204","Mg-28"]
          },
          {
            "mode": "spontaneous_fission",
            "pct": 1e-12,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "U-233",
        "name": {
          "en": "Uranium-233",
          "pt-BR": "Urânio-233",
        },
        "neutrons": 141,
        "weight": { "standard": 233.039635229 },
        "abundance": "trace",
        "half_life": "1.592e5 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Th-229"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 6e-9,
            "decay_to": "many"
          },
          {
            "mode": "cluster_decay",
            "pct": 7.2e-11,
            "decay_to": ["Pb-209","Ne-24"]
          },
          {
            "mode": "cluster_decay",
            "pct": 1.3e-13,
            "decay_to": ["Hg-205","Mg-28"]
          }
        ]
      },
      {
        "id": "U-234",
        "name": {
          "en": "Uranium-234",
          "pt-BR": "Urânio-234",
        },
        "neutrons": 142,
        "weight": { "standard": 234.040952120 },
        "abundance": 0.005,
        "half_life": "2.455e5 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Th-230"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 1.73e-9,
            "decay_to": "many"
          },
          {
            "mode": "cluster_decay",
            "pct": 1.4e-11,
            "decay_to": ["Hg-206","Mg-28"]
          },
          {
            "mode": "cluster_decay",
            "pct": 9e-12,
            "decay_to": ["Hf-184","Ne-26","Ne-24"]
          }
        ]
      },
      {
        "id": "U-235",
        "name": {
          "en": "Uranium-235",
          "pt-BR": "Urânio-235",
        },
        "neutrons": 143,
        "weight": { "standard": 235.043929920 },
        "abundance": 0.720,
        "half_life": "7.04e8 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Th-231"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 7e-9,
            "decay_to": "many"
          },
          {
            "mode": "cluster_decay",
            "pct": 8e-10,
            "decay_to": ["Hf-186","Ne-26","Ne-24"]
          }
        ]
      },
      {
        "id": "U-236",
        "name": {
          "en": "Uranium-236",
          "pt-BR": "Urânio-236",
        },
        "neutrons": 144,
        "weight": { "standard": 236.0455682 },
        "abundance": "trace",
        "half_life": "2.342e7 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Th-232"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 9.6e-8,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "U-238",
        "name": {
          "en": "Uranium-238",
          "pt-BR": "Urânio-238",
        },
        "neutrons": 146,
        "weight": { "standard": 238.050788220 },
        "abundance": 99.274,
        "half_life": "4.468e9 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Th-234"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 5.45e-5,
            "decay_to": "many"
          },
          {
            "mode": "double_beta_minus",
            "pct": 2.19e-10,
            "decay_to": "Pu-238"
          }
        ]
      }
    ]
  },
  "Np": {
    "id": "Np",
    "symbol": "Np",
    "name": {
      "en": "Neptunium",
      "pt-BR": "Neptúnio"
    },
    "atomic_number": 93,
    "weight": { "most_stable": 237 },
    "period": 7,
    "group": 3,
    "type": "actinoid",
    "melting_point": 917,
    "boiling_point": 4273,
    "oxidation_states": ["+1","+2","+3","+4","+5*","+6","+7"],
    "electronegativity": 1.36,
    "radius": { 
      "empirical": "155",
      "covalent": "190±1"
    },
    "discovery_date": "1940",
    "discovery_by": "Edwin McMillan & Philip H. Abelson",
    "electrons": [2, 8, 18, 32, 22, 9, 2],
    "isotopes": [
      {
        "id": "Np-235",
        "name": {
          "en": "Neptunium-235",
          "pt-BR": "Neptúnio-235",
        },
        "neutrons": 142,
        "weight": { "standard": 235.044063321 },
        "abundance": "syn",
        "half_life": "369.1 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 99.99,
            "decay_to": "U-235"
          },
          {
            "mode": "alpha",
            "pct": 0.0026,
            "decay_to": "Pa-231"
          }
        ]
      },
      {
        "id": "Np-236",
        "name": {
          "en": "Neptunium-236",
          "pt-BR": "Neptúnio-236",
        },
        "neutrons": 143,
        "weight": { "standard": 236.046575 },
        "abundance": "syn",
        "half_life": "1.54e5 y",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 87.3,
            "decay_to": "U-236"
          },
          {
            "mode": "beta_minus",
            "pct": 12.5,
            "decay_to": "Pu-236"
          },
          {
            "mode": "alpha",
            "pct": 0.16,
            "decay_to": "Pa-232"
          }
        ]
      },
      {
        "id": "Np-237",
        "name": {
          "en": "Neptunium-237",
          "pt-BR": "Neptúnio-237",
        },
        "neutrons": 144,
        "weight": { "standard": 237.048173420 },
        "abundance": "trace",
        "half_life": "2.144e6 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Pa-233"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 2e-10,
            "decay_to": "many"
          },
          {
            "mode": "cluster_decay",
            "pct": 4e-12,
            "decay_to": ["Tl-207","Mg-30"]
          }
        ]
      },
      {
        "id": "Np-239",
        "name": {
          "en": "Neptunium-239",
          "pt-BR": "Neptúnio-239",
        },
        "neutrons": 146,
        "weight": { "standard": 239.052939022 },
        "abundance": "trace",
        "half_life": "2.356 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 100,
            "decay_to": "Pu-239"
          }
        ]
      }
    ]
  },
  "Pu": {
    "id": "Pu",
    "symbol": "Pu",
    "name": {
      "en": "Plutonium",
      "pt-BR": "Plutônio"
    },
    "atomic_number": 94,
    "weight": { "most_stable": 244 },
    "period": 7,
    "group": 3,
    "type": "actinoid",
    "melting_point": 913,
    "boiling_point": 3503,
    "oxidation_states": ["+1","+2","+3","+4*","+5","+6","+7"],
    "electronegativity": 1.28,
    "radius": { 
      "empirical": "159",
      "covalent": "187±1"
    },
    "discovery_date": "1940",
    "discovery_by": "Glenn T. Seaborg, Arthur Wahl, Joseph W. Kennedy & Edwin McMillan",
    "electrons": [2, 8, 18, 32, 24, 8, 2],
    "isotopes": [
      {
        "id": "Pu-238",
        "name": {
          "en": "Plutonium-238",
          "pt-BR": "Plutônio-238",
        },
        "neutrons": 144,
        "weight": { "standard": 238.049559920 },
        "abundance": "trace",
        "half_life": "87.7 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "U-234"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 1.9e-7,
            "decay_to": "many"
          },
          {
            "mode": "cluster_decay",
            "pct": 1.4e-14,
            "decay_to": ["Hg-206","Si-32"]
          },
          {
            "mode": "cluster_decay",
            "pct": 6e-15,
            "decay_to": ["Yb-180","Mg-30","Mg-28"]
          }
        ]
      },
      {
        "id": "Pu-239",
        "name": {
          "en": "Plutonium-239",
          "pt-BR": "Plutônio-239",
        },
        "neutrons": 145,
        "weight": { "standard": 239.052163420 },
        "abundance": "trace",
        "half_life": "2.41e4 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "U-235"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 3.1e-10,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Pu-240",
        "name": {
          "en": "Plutonium-240",
          "pt-BR": "Plutônio-240",
        },
        "neutrons": 146,
        "weight": { "standard": 240.053813520 },
        "abundance": "trace",
        "half_life": "6561 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "U-236"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 5.7e-6,
            "decay_to": "many"
          },
          {
            "mode": "cluster_decay",
            "pct": 1.3e-13,
            "decay_to": ["Hg-206","Si-34"]
          }
        ]
      },
      {
        "id": "Pu-241",
        "name": {
          "en": "Plutonium-241",
          "pt-BR": "Plutônio-241",
        },
        "neutrons": 147,
        "weight": { "standard": 241.056851520 },
        "abundance": "syn",
        "half_life": "14.290 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 99.99,
            "decay_to": "Am-241"
          },
          {
            "mode": "alpha",
            "pct": 0.00245,
            "decay_to": "U-237"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 2.4e-14,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Pu-242",
        "name": {
          "en": "Plutonium-242",
          "pt-BR": "Plutônio-242",
        },
        "neutrons": 148,
        "weight": { "standard": 242.058742620 },
        "abundance": "syn",
        "half_life": "3.73e5 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "U-238"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 5.5e-4,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Pu-244",
        "name": {
          "en": "Plutonium-244",
          "pt-BR": "Plutônio-244",
        },
        "neutrons": 150,
        "weight": { "standard": 244.0642045 },
        "abundance": "trace",
        "half_life": "8.00e7 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "U-240"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 0.123,
            "decay_to": "many"
          },
          {
            "mode": "double_beta_minus",
            "pct": 7.3e-9,
            "decay_to": "Cm-244"
          }
        ]
      }
    ]
  },
  "Am": {
    "id": "Am",
    "symbol": "Am",
    "name": {
      "en": "Americium",
      "pt-BR": "Amerício"
    },
    "atomic_number": 95,
    "weight": { "most_stable": 243 },
    "period": 7,
    "group": 3,
    "type": "actinoid",
    "melting_point": 1449,
    "boiling_point": 2284,
    "oxidation_states": ["+2","+3*","+4","+5","+6","+7"],
    "electronegativity": 1.3,
    "radius": { 
      "empirical": "173",
      "covalent": "180±6"
    },
    "discovery_date": "1944",
    "discovery_by": "Glenn T. Seaborg, Ralph A. James, Leon O. Morgan & Albert Ghiorso",
    "electrons": [2, 8, 18, 32, 25, 8, 2],
    "isotopes": [
      {
        "id": "Am-241",
        "name": {
          "en": "Americium-241",
          "pt-BR": "Amerício-241",
        },
        "neutrons": 146,
        "weight": { "standard": 241.056829120 },
        "abundance": "syn",
        "half_life": "432.2 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Np-237"
          },
          {
            "mode": "cluster_decay",
            "pct": 7.4e-10,
            "decay_to": ["Tl-207","Si-34"]
          },
          {
            "mode": "spontaneous_fission",
            "pct": 4.3e-10,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Am-242m1",
        "name": {
          "en": "Americium-242m1",
        },
        "neutrons": 147,
        "weight": { "standard": 242.059549220 },
        "abundance": "syn",
        "half_life": "141 y",
        "decay": [
          {
            "mode": "internal_convertion",
            "pct": 99.54,
            "decay_to": "Am-242"
          },
          {
            "mode": "alpha",
            "pct": 0.46,
            "decay_to": "Np-238"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 1.5e-8,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Am-243",
        "name": {
          "en": "Americium-243",
          "pt-BR": "Amerício-243",
        },
        "neutrons": 148,
        "weight": { "standard": 243.061381125 },
        "abundance": "syn",
        "half_life": "7370 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Np-239"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 3.7e-9,
            "decay_to": "many"
          }
        ]
      }
    ]
  },
  "Cm": {
    "id": "Cm",
    "symbol": "Cm",
    "name": {
      "en": "Curium",
      "pt-BR": "Cúrio"
    },
    "atomic_number": 96,
    "weight": { "most_stable": 247 },
    "period": 7,
    "group": 3,
    "type": "actinoid",
    "melting_point": 1618,
    "boiling_point": 3383,
    "oxidation_states": ["+2","+3*","+4","+5","+6"],
    "electronegativity": 1.3,
    "radius": { 
      "empirical": "174",
      "covalent": "169±3"
    },
    "discovery_date": "1940",
    "discovery_by": "Glenn T. Seaborg, Ralph A. James & Albert Ghiorso",
    "electrons": [2, 8, 18, 32, 25, 9, 2],
    "isotopes": [
      {
        "id": "Cm-242",
        "name": {
          "en": "Curium-242",
          "pt-BR": "Cúrio-242",
        },
        "neutrons": 146,
        "weight": { "standard": 242.058835820 },
        "abundance": "syn",
        "half_life": "160 d",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Pu-238"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 6.33e-6,
            "decay_to": "many"
          },
          {
            "mode": "cluster_decay",
            "pct": 1e-14,
            "decay_to": ["Pb-208","Si-34"]
          },
          {
            "mode": "double_beta_minus",
            "pct": 1e-15,
            "decay_to": "Pu-242"
          }
        ]
      },
      {
        "id": "Cm-243",
        "name": {
          "en": "Curium-243",
          "pt-BR": "Cúrio-243",
        },
        "neutrons": 147,
        "weight": { "standard": 243.061389122 },
        "abundance": "syn",
        "half_life": "29.1 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.71,
            "decay_to": "Pu-239"
          },
          {
            "mode": "k_plus",
            "pct": 0.29,
            "decay_to": "Am-243"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 5.3e-9,
            "half_life": "many"
          }
        ]
      },
      {
        "id": "Cm-244",
        "name": {
          "en": "Curium-244",
          "pt-BR": "Cúrio-244",
        },
        "neutrons": 148,
        "weight": { "standard": 244.062752620 },
        "abundance": "syn",
        "half_life": "18.10 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Pu-240"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 1.34e-4,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Cm-245",
        "name": {
          "en": "Curium-245",
          "pt-BR": "Cúrio-245",
        },
        "neutrons": 149,
        "weight": { "standard": 245.065491222 },
        "abundance": "syn",
        "half_life": "8500 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Pu-241"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 6.1e-7,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Cm-246",
        "name": {
          "en": "Curium-246",
          "pt-BR": "Cúrio-246",
        },
        "neutrons": 150,
        "weight": { "standard": 246.067223722 },
        "abundance": "syn",
        "half_life": "4760 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.97,
            "decay_to": "U-235"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 0.0261,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Cm-247",
        "name": {
          "en": "Curium-247",
          "pt-BR": "Cúrio-247",
        },
        "neutrons": 151,
        "weight": { "standard": 247.0703545 },
        "abundance": "syn",
        "half_life": "1.56e7 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Pu-243"
          }
        ]
      },
      {
        "id": "Cm-248",
        "name": {
          "en": "Curium-248",
          "pt-BR": "Cúrio-248",
        },
        "neutrons": 152,
        "weight": { "standard": 248.0723495 },
        "abundance": "syn",
        "half_life": "3.48e5 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 91.74,
            "decay_to": "Pu-244"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 8.26,
            "decay_to": "many"
          },
          {
            "mode": "double_beta_minus",
            "pct": 1e-10,
            "decay_to": "Cf-248"
          }
        ]
      },
      {
        "id": "Cm-250",
        "name": {
          "en": "Curium-250",
          "pt-BR": "Cúrio-250",
        },
        "neutrons": 154,
        "weight": { "standard": 250.07835712 },
        "abundance": "syn",
        "half_life": "8300 y",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 74,
            "decay_to": "many"
          },
          {
            "mode": "alpha",
            "pct": 18,
            "decay_to": "Pu-246"
          },
          {
            "mode": "beta_minus",
            "pct": 8,
            "decay_to": "Bk-250"
          }
        ]
      }
    ]
  },
  "Bk": {
    "id": "Bk",
    "symbol": "Bk",
    "name": {
      "en": "Berkelium",
      "pt-BR": "Berkélio"
    },
    "atomic_number": 97,
    "weight": { "most_stable": 247 },
    "period": 7,
    "group": 3,
    "type": "actinoid",
    "melting_point": 1323,
    "boiling_point": null,
    "oxidation_states": ["+2","+3*","+4","+5"],
    "electronegativity": 1.3,
    "radius": { 
      "empirical": "170"
    },
    "discovery_date": "1949",
    "discovery_by": "Lawrence Berkeley National Laboratory",
    "electrons": [2, 8, 18, 32, 27, 8, 2],
    "isotopes": [
      {
        "id": "Bk-245",
        "name": {
          "en": "Berkelium-245",
          "pt-BR": "Berkélio-245",
        },
        "neutrons": 148,
        "weight": { "standard": 245.066361625 },
        "abundance": "syn",
        "half_life": "4.94 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 99.88,
            "decay_to": "Cm-245"
          },
          {
            "mode": "alpha",
            "pct": 0.12,
            "decay_to": "Am-241"
          }
        ]
      },
      {
        "id": "Bk-246",
        "name": {
          "en": "Berkelium-246",
          "pt-BR": "Berkélio-246",
        },
        "neutrons": 149,
        "weight": { "standard": 246.068676 },
        "abundance": "syn",
        "half_life": "1.80 d",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 99.8,
            "decay_to": "Cm-246"
          },
          {
            "mode": "alpha",
            "pct": 0.2,
            "decay_to": "Am-242"
          }
        ]
      },
      {
        "id": "Bk-247",
        "name": {
          "en": "Berkelium-247",
          "pt-BR": "Berkélio-247",
        },
        "neutrons": 150,
        "weight": { "standard": 247.0703076 },
        "abundance": "syn",
        "half_life": "1.38e3 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Am-243"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 1e-10,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Bk-248",
        "name": {
          "en": "Berkelium-248",
          "pt-BR": "Berkélio-248",
        },
        "neutrons": 151,
        "weight": { "standard": 248.073098 },
        "abundance": "syn",
        "half_life": "300 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Am-244"
          }
        ]
      },
      {
        "id": "Bk-249",
        "name": {
          "en": "Berkelium-249",
          "pt-BR": "Berkélio-249",
        },
        "neutrons": 152,
        "weight": { "standard": 249.074986728 },
        "abundance": "syn",
        "half_life": "330 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 99.99,
            "decay_to": "Cf-249"
          },
          {
            "mode": "alpha",
            "pct": 0.00145,
            "decay_to": "Am-245"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 4.7e-8,
            "decay_to": "many"
          }
        ]
      }
    ]
  },
  "Cf": {
    "id": "Cf",
    "symbol": "Cf",
    "name": {
      "en": "Californium",
      "pt-BR": "Califórnio"
    },
    "atomic_number": 98,
    "weight": { "most_stable": 251 },
    "period": 7,
    "group": 3,
    "type": "actinoid",
    "melting_point": 1173,
    "boiling_point": null,
    "oxidation_states": ["+2","+3*","+4","+5"],
    "electronegativity": 1.3,
    "radius": null,
    "discovery_date": "1950",
    "discovery_by": "Lawrence Berkeley National Laboratory",
    "electrons": [2, 8, 18, 32, 28, 8, 2],
    "isotopes": [
      {
        "id": "Cf-248",
        "name": {
          "en": "Californium-248",
          "pt-BR": "Califórnio-248",
        },
        "neutrons": 150,
        "weight": { "standard": 248.072185 },
        "abundance": "syn",
        "half_life": "333.5 d",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Cm-244"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 0.0029,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Cf-249",
        "name": {
          "en": "Californium-249",
          "pt-BR": "Califórnio-249",
        },
        "neutrons": 151,
        "weight": { "standard": 249.0748535 },
        "abundance": "syn",
        "half_life": "351 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Cm-245"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 5e-7,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Cf-250",
        "name": {
          "en": "Californium-250",
          "pt-BR": "Califórnio-250",
        },
        "neutrons": 152,
        "weight": { "standard": 250.0764061 },
        "abundance": "syn",
        "half_life": "13.08 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.92,
            "decay_to": "Cm-246"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 0.077,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Cf-251",
        "name": {
          "en": "Californium-251",
          "pt-BR": "Califórnio-251",
        },
        "neutrons": 153,
        "weight": { "standard": 251.079587 },
        "abundance": "syn",
        "half_life": "900 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Cm-247"
          }
        ]
      },
      {
        "id": "Cf-252",
        "name": {
          "en": "Californium-252",
          "pt-BR": "Califórnio-252",
        },
        "neutrons": 154,
        "weight": { "standard": 252.081626 },
        "abundance": "syn",
        "half_life": "2.645 y",
        "decay": [
          {
            "mode": "alpha",
            "pct": 96.9,
            "decay_to": "Cm-248"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 3.09,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Cf-253",
        "name": {
          "en": "Californium-253",
          "pt-BR": "Califórnio-253",
        },
        "neutrons": 155,
        "weight": { "standard": 253.085133 },
        "abundance": "syn",
        "half_life": "17.81 y",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 99.69,
            "decay_to": "Es-253"
          },
          {
            "mode": "alpha",
            "pct": 0.31,
            "decay_to": "Cm-249"
          }
        ]
      },
      {
        "id": "Cf-254",
        "name": {
          "en": "Californium-254",
          "pt-BR": "Califórnio-254",
        },
        "neutrons": 156,
        "weight": { "standard": 254.087323 },
        "abundance": "syn",
        "half_life": "60.5 d",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 99.69,
            "decay_to": "many"
          },
          {
            "mode": "alpha",
            "pct": 0.31,
            "decay_to": "Cm-250"
          },
          {
            "mode": "double_beta_minus",
            "pct": 1e-10,
            "decay_to": "Fm-254"
          }
        ]
      }
    ]
  },
  "Es": {
    "id": "Es",
    "symbol": "Es",
    "name": {
      "en": "Einsteinium",
      "pt-BR": "Einstênio"
    },
    "atomic_number": 99,
    "weight": { "most_stable": 252 },
    "period": 7,
    "group": 3,
    "type": "actinoid",
    "melting_point": 1133,
    "boiling_point": null,
    "oxidation_states": ["+2","+3*","+4"],
    "electronegativity": 1.3,
    "radius": null,
    "discovery_date": "1952",
    "discovery_by": "Lawrence Berkeley National Laboratory",
    "electrons": [2, 8, 18, 32, 29, 8, 2],
    "isotopes": [
      {
        "id": "Es-252",
        "name": {
          "en": "Einsteinium-252",
          "pt-BR": "Einstênio-252",
        },
        "neutrons": 153,
        "weight": { "standard": 252.08298 },
        "abundance": "syn",
        "half_life": "471.7 d",
        "decay": [
          {
            "mode": "alpha",
            "pct": 76,
            "decay_to": "Bk-248"
          },
          {
            "mode": "k_plus",
            "pct": 24,
            "decay_to": "Cf-252"
          },
          {
            "mode": "beta_minus",
            "pct": 0.01,
            "decay_to": "Fm-252"
          }
        ]
      },
      {
        "id": "Es-253",
        "name": {
          "en": "Einsteinium-253",
          "pt-BR": "Einstênio-253",
        },
        "neutrons": 154,
        "weight": { "standard": 253.0848247 },
        "abundance": "syn",
        "half_life": "20.47 d",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Bk-249"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 8.7e-6,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Es-254",
        "name": {
          "en": "Einsteinium-254",
          "pt-BR": "Einstênio-254",
        },
        "neutrons": 155,
        "weight": { "standard": 254.088022 },
        "abundance": "syn",
        "half_life": "275.7 d",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Bk-250"
          },
          {
            "mode": "k_plus",
            "pct": 1e-4,
            "decay_to": "Cf-254"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 3e-6,
            "decay_to": "many"
          },
          {
            "mode": "beta_minus",
            "pct": 1.74e-6,
            "decay_to": "Fm-254"
          }
        ]
      },
      {
        "id": "Es-255",
        "name": {
          "en": "Einsteinium-255",
          "pt-BR": "Einstênio-255",
        },
        "neutrons": 156,
        "weight": { "standard": 255.090273 },
        "abundance": "syn",
        "half_life": "39.8 d",
        "decay": [
          {
            "mode": "beta_minus",
            "pct": 92,
            "decay_to": "Fm-255"
          },
          {
            "mode": "alpha",
            "pct": 8,
            "decay_to": "Bk-251"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 0.0041,
            "decay_to": "many"
          }
        ]
      }
    ]
  },
  "Fm": {
    "id": "Fm",
    "symbol": "Fm",
    "name": {
      "en": "Fermium",
      "pt-BR": "Férmio"
    },
    "atomic_number": 100,
    "weight": { "most_stable": 257 },
    "period": 7,
    "group": 3,
    "type": "actinoid",
    "melting_point": 1800,
    "boiling_point": null,
    "oxidation_states": ["+2","+3*"],
    "electronegativity": 1.3,
    "radius": null,
    "discovery_date": "1952",
    "discovery_by": "Lawrence Berkeley National Laboratory",
    "electrons": [2, 8, 18, 32, 30, 8, 2],
    "isotopes": [
      {
        "id": "Fm-252",
        "name": {
          "en": "Fermium-252",
          "pt-BR": "Férmio-252",
        },
        "neutrons": 152,
        "weight": { "standard": 255.090273 },
        "abundance": "syn",
        "half_life": "25.39 d",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Cf-248"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 0.0023,
            "decay_to": "many"
          },
          {
            "mode": "double_beta_minus",
            "pct": 1e-10,
            "decay_to": "Cf-252"
          }
        ]
      },
      {
        "id": "Fm-253",
        "name": {
          "en": "Fermium-253",
          "pt-BR": "Férmio-253",
        },
        "neutrons": 153,
        "weight": { "standard": 253.085185 },
        "abundance": "syn",
        "half_life": "3.00 d",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 88,
            "decay_to": "Es-253"
          },
          {
            "mode": "alpha",
            "pct": 12,
            "decay_to": "Cf-249"
          }
        ]
      },
      {
        "id": "Fm-255",
        "name": {
          "en": "Fermium-255",
          "pt-BR": "Férmio-255",
        },
        "neutrons": 155,
        "weight": { "standard": 255.089964 },
        "abundance": "syn",
        "half_life": "3.00 d",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Cf-251"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 2.4e-5,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Fm-257",
        "name": {
          "en": "Fermium-257",
          "pt-BR": "Férmio-257",
        },
        "neutrons": 157,
        "weight": { "standard": 257.095106 },
        "abundance": "syn",
        "half_life": "110.5 d",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.79,
            "decay_to": "Cf-253"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 0.21,
            "decay_to": "many"
          }
        ]
      }
    ]
  },
  "Md": {
    "id": "Md",
    "symbol": "Md",
    "name": {
      "en": "Mendelevium",
      "pt-BR": "Mendelévio"
    },
    "atomic_number": 101,
    "weight": { "most_stable": 258 },
    "period": 7,
    "group": 3,
    "type": "actinoid",
    "melting_point": 1100,
    "boiling_point": null,
    "oxidation_states": ["+2","+3*"],
    "electronegativity": 1.3,
    "radius": null,
    "discovery_date": "1955",
    "discovery_by": "Lawrence Berkeley National Laboratory",
    "electrons": [2, 8, 18, 32, 31, 8, 2],
    "isotopes": [
      {
        "id": "Md-257",
        "name": {
          "en": "Mendelevium-257",
          "pt-BR": "Mendelévio-257",
        },
        "neutrons": 156,
        "weight": { "standard": 257.0955424 },
        "abundance": "syn",
        "half_life": "5.52 h",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 84.8,
            "decay_to": "Fm-257"
          },
          {
            "mode": "alpha",
            "pct": 15.2,
            "decay_to": "Es-253"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 1,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Md-258",
        "name": {
          "en": "Mendelevium-258",
          "pt-BR": "Mendelévio-258",
        },
        "neutrons": 157,
        "weight": { "standard": 258.098431 },
        "abundance": "syn",
        "half_life": "51.5 d",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Es-254"
          },
          {
            "mode": "beta_minus",
            "pct": 0.0015,
            "decay_to": "No-258"
          },
          {
            "mode": "beta_plus",
            "pct": 0.0015,
            "decay_to": "Fm-258"
          }
        ]
      },
      {
        "id": "Md-260",
        "name": {
          "en": "Mendelevium-260",
          "pt-BR": "Mendelévio-260",
        },
        "neutrons": 159,
        "weight": { "standard": 260.10365 },
        "abundance": "syn",
        "half_life": "27.8 d",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 85,
            "decay_to": "many"
          },
          {
            "mode": "alpha",
            "pct": 5,
            "decay_to": "Es-256"
          },
          {
            "mode": "k_plus",
            "pct": 5,
            "decay_to": "Fm-260"
          },
          {
            "mode": "beta_minus",
            "pct": 3.5,
            "decay_to": "No-260"
          }
        ]
      }
    ]
  },
  "No": {
    "id": "No",
    "symbol": "No",
    "name": {
      "en": "Nobelium",
      "pt-BR": "Nobélio"
    },
    "atomic_number": 102,
    "weight": { "most_stable": 259 },
    "period": 7,
    "group": 3,
    "type": "actinoid",
    "melting_point": 1100,
    "boiling_point": null,
    "oxidation_states": ["+2*","+3"],
    "electronegativity": 1.3,
    "radius": null,
    "discovery_date": "1966",
    "discovery_by": "Joint Institute for Nuclear Research",
    "electrons": [2, 8, 18, 32, 32, 8, 2],
    "isotopes": [
      {
        "id": "No-253",
        "name": {
          "en": "Nobelium-253",
          "pt-BR": "Nobélio-253",
        },
        "neutrons": 151,
        "weight": { "standard": 253.090564 },
        "abundance": "syn",
        "half_life": "1.62 min",
        "decay": [
          {
            "mode": "alpha",
            "pct": 80,
            "decay_to": "Fm-249"
          },
          {
            "mode": "beta_minus",
            "pct": 20,
            "decay_to": "Md-253"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 1e-3,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "No-254",
        "name": {
          "en": "Nobelium-254",
          "pt-BR": "Nobélio-254",
        },
        "neutrons": 152,
        "weight": { "standard": 254.090956 },
        "abundance": "syn",
        "half_life": "51 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 89.3,
            "decay_to": "Fm-250"
          },
          {
            "mode": "beta_plus",
            "pct": 10,
            "decay_to": "Md-254"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 0.31,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "No-255",
        "name": {
          "en": "Nobelium-255",
          "pt-BR": "Nobélio-255",
        },
        "neutrons": 153,
        "weight": { "standard": 255.093191 },
        "abundance": "syn",
        "half_life": "3.1 min",
        "decay": [
          {
            "mode": "alpha",
            "pct": 61.4,
            "decay_to": "Fm-251"
          },
          {
            "mode": "beta_plus",
            "pct": 38.6,
            "decay_to": "Md-255"
          }
        ]
      },
      {
        "id": "No-257",
        "name": {
          "en": "Nobelium-257",
          "pt-BR": "Nobélio-257",
        },
        "neutrons": 155,
        "weight": { "standard": 257.096888 },
        "abundance": "syn",
        "half_life": "25 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99,
            "decay_to": "Fm-253"
          },
          {
            "mode": "beta_plus",
            "pct": 1,
            "decay_to": "Md-257"
          }
        ]
      },
      {
        "id": "No-259",
        "name": {
          "en": "Nobelium-259",
          "pt-BR": "Nobélio-259",
        },
        "neutrons": 157,
        "weight": { "standard": 259.10103 },
        "abundance": "syn",
        "half_life": "58 min",
        "decay": [
          {
            "mode": "alpha",
            "pct": 75,
            "decay_to": "Fm-255"
          },
          {
            "mode": "k_plus",
            "pct": 25,
            "decay_to": "Md-259"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 1e-4,
            "decay_to": "many"
          }
        ]
      }
    ]
  },
  "Lr": {
    "id": "Lr",
    "symbol": "Lr",
    "name": {
      "en": "Lawrencium",
      "pt-BR": "Lawrêncio"
    },
    "atomic_number": 103,
    "weight": { "most_stable": 266 },
    "period": 7,
    "group": 3,
    "type": "actinoid",
    "melting_point": 1900,
    "boiling_point": null,
    "oxidation_states": ["+3*"],
    "electronegativity": 1.3,
    "radius": null,
    "discovery_date": "1961",
    "discovery_by": "Lawrence Berkeley National Laboratory & Joint Institute for Nuclear Research",
    "electrons": [2, 8, 18, 32, 32, 8, 3],
    "isotopes": [
      {
        "id": "Lr-254",
        "name": {
          "en": "Lawrencium-254",
          "pt-BR": "Lawrêncio-254",
        },
        "neutrons": 151,
        "weight": { "standard": 254.09648 },
        "abundance": "syn",
        "half_life": "13 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 78,
            "decay_to": "Md-250"
          },
          {
            "mode": "beta_plus",
            "pct": 22,
            "decay_to": "No-254"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 0.1,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Lr-255",
        "name": {
          "en": "Lawrencium-255",
          "pt-BR": "Lawrêncio-255",
        },
        "neutrons": 152,
        "weight": { "standard": 255.096562 },
        "abundance": "syn",
        "half_life": "22 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 69,
            "decay_to": "Md-251"
          },
          {
            "mode": "beta_plus",
            "pct": 30,
            "decay_to": "No-255"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 1,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Lr-256",
        "name": {
          "en": "Lawrencium-256",
          "pt-BR": "Lawrêncio-256",
        },
        "neutrons": 153,
        "weight": { "standard": 256.09849 },
        "abundance": "syn",
        "half_life": "27 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 80,
            "decay_to": "Md-252"
          },
          {
            "mode": "beta_plus",
            "pct": 20,
            "decay_to": "No-256"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 0.01,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Lr-259",
        "name": {
          "en": "Lawrencium-259",
          "pt-BR": "Lawrêncio-259",
        },
        "neutrons": 156,
        "weight": { "standard": 259.10290 },
        "abundance": "syn",
        "half_life": "6.2 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 77,
            "decay_to": "Md-255"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 23,
            "decay_to": "many"
          },
          {
            "mode": "beta_plus",
            "pct": 0.5,
            "decay_to": "No-259"
          }
        ]
      },
      {
        "id": "Lr-260",
        "name": {
          "en": "Lawrencium-260",
          "pt-BR": "Lawrêncio-260",
        },
        "neutrons": 157,
        "weight": { "standard": 260.10551 },
        "abundance": "syn",
        "half_life": "2.7 min",
        "decay": [
          {
            "mode": "alpha",
            "pct": 75,
            "decay_to": "Md-256"
          },
          {
            "mode": "beta_plus",
            "pct": 15,
            "decay_to": "No-260"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 10,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Lr-261",
        "name": {
          "en": "Lawrencium-261",
          "pt-BR": "Lawrêncio-261",
        },
        "neutrons": 158,
        "weight": { "standard": 261.10688 },
        "abundance": "syn",
        "half_life": "44 min",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 99.99,
            "decay_to": "many"
          },
          {
            "mode": "alpha",
            "pct": 1e-10,
            "decay_to": "Md-257"
          }
        ]
      },
      {
        "id": "Lr-262",
        "name": {
          "en": "Lawrencium-262",
          "pt-BR": "Lawrêncio-262",
        },
        "neutrons": 159,
        "weight": { "standard": 262.10961 },
        "abundance": "syn",
        "half_life": "216 min",
        "decay": [
          {
            "mode": "beta_plus",
            "pct": 99.99,
            "decay_to": "No-262"
          },
          {
            "mode": "alpha",
            "pct": 1e-10,
            "decay_to": "Md-258"
          }
        ]
      },
      {
        "id": "Lr-266",
        "name": {
          "en": "Lawrencium-266",
          "pt-BR": "Lawrêncio-266",
        },
        "neutrons": 163,
        "weight": { "standard": 266.11983 },
        "abundance": "syn",
        "half_life": "11 h",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 100,
            "decay_to": "many"
          }
        ]
      }
    ]
  },
  "Rf": {
    "id": "Rf",
    "symbol": "Rf",
    "name": {
      "en": "Rutherfordium",
      "pt-BR": "Rutherfórdio"
    },
    "atomic_number": 104,
    "weight": { "most_stable": 267 },
    "period": 7,
    "group": 4,
    "type": "transition_metal",
    "melting_point": null,
    "boiling_point": null,
    "oxidation_states": ["(+2)","(+2*)","+4*"],
    "electronegativity": null,
    "radius": { 
      "empirical": "150",
      "covalent": "157"
    },
    "discovery_date": "1964",
    "discovery_by": "Joint Institute for Nuclear Research & Lawrence Berkeley National Laboratory",
    "electrons": [2, 8, 18, 32, 32, 10, 2],
    "isotopes": [
      {
        "id": "Rf-261",
        "name": {
          "en": "Rutherfordium-261",
          "pt-BR": "Rutherfórdio-261",
        },
        "neutrons": 157,
        "weight": { "standard": 261.10877 },
        "abundance": "syn",
        "half_life": "68 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 76,
            "decay_to": "No-257"
          },
          {
            "mode": "beta_plus",
            "pct": 14,
            "decay_to": "Lr-261"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 10,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Rf-263",
        "name": {
          "en": "Rutherfordium-263",
          "pt-BR": "Rutherfórdio-263",
        },
        "neutrons": 159,
        "weight": { "standard": 263.1125 },
        "abundance": "syn",
        "half_life": "11 min",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 70,
            "decay_to": "many"
          },
          {
            "mode": "alpha",
            "pct": 30,
            "decay_to": "No-259"
          }
        ]
      },
      {
        "id": "Rf-265",
        "name": {
          "en": "Rutherfordium-265",
          "pt-BR": "Rutherfórdio-265",
        },
        "neutrons": 161,
        "weight": { "standard": 265.11668 },
        "abundance": "syn",
        "half_life": "1.1 min",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 100,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Rf-266",
        "name": {
          "en": "Rutherfordium-266",
          "pt-BR": "Rutherfórdio-266",
        },
        "neutrons": 162,
        "weight": { "standard": 266.11817 },
        "abundance": "syn",
        "half_life": "23 s",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 100,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Rf-267",
        "name": {
          "en": "Rutherfordium-267",
          "pt-BR": "Rutherfórdio-267",
        },
        "neutrons": 163,
        "weight": { "standard": 267.12179 },
        "abundance": "syn",
        "half_life": "1.3 h",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 100,
            "decay_to": "many"
          }
        ]
      }
    ]
  },
  "Db": {
    "id": "Db",
    "symbol": "Db",
    "name": {
      "en": "Dubnium",
      "pt-BR": "Dúbnio"
    },
    "atomic_number": 105,
    "weight": { "most_stable": 268 },
    "period": 7,
    "group": 5,
    "type": "transition_metal",
    "melting_point": null,
    "boiling_point": null,
    "oxidation_states": ["(+3)","(+4)","+5*"],
    "electronegativity": null,
    "radius": { 
      "empirical": "139",
      "covalent": "149"
    },
    "discovery_date": "1970",
    "discovery_by": "Lawrence Berkeley National Laboratory & Joint Institute for Nuclear Research",
    "electrons": [2, 8, 18, 32, 32, 11, 2],
    "isotopes": [
      {
        "id": "Db-262",
        "name": {
          "en": "Dubnium-262",
          "pt-BR": "Dúbnio-262",
        },
        "neutrons": 157,
        "weight": { "standard": 262.11407 },
        "abundance": "syn",
        "half_life": "35 s",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 67,
            "decay_to": "many"
          },
          {
            "mode": "alpha",
            "pct": 30,
            "decay_to": "Lr-258"
          },
          {
            "mode": "beta_plus",
            "pct": 3,
            "decay_to": "Rf-262"
          }
        ]
      },
      {
        "id": "Db-263",
        "name": {
          "en": "Dubnium-263",
          "pt-BR": "Dúbnio-263",
        },
        "neutrons": 158,
        "weight": { "standard": 263.11499 },
        "abundance": "syn",
        "half_life": "29 s",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 56,
            "decay_to": "many"
          },
          {
            "mode": "alpha",
            "pct": 37,
            "decay_to": "Lr-259"
          },
          {
            "mode": "beta_plus",
            "pct": 6.9,
            "decay_to": "Rf-263"
          }
        ]
      },
      {
        "id": "Db-266",
        "name": {
          "en": "Dubnium-266",
          "pt-BR": "Dúbnio-266",
        },
        "neutrons": 161,
        "weight": { "standard": 266.12103 },
        "abundance": "syn",
        "half_life": "80 min",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 50,
            "decay_to": "many"
          },
          {
            "mode": "k_plus",
            "pct": 50,
            "decay_to": "Rf-266"
          }
        ]
      },
      {
        "id": "Db-267",
        "name": {
          "en": "Dubnium-267",
          "pt-BR": "Dúbnio-267",
        },
        "neutrons": 162,
        "weight": { "standard": 267.12247 },
        "abundance": "syn",
        "half_life": "4.6 h",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 50,
            "decay_to": "many"
          },
          {
            "mode": "k_plus",
            "pct": 50,
            "decay_to": "Rf-267"
          }
        ]
      },
      {
        "id": "Db-268",
        "name": {
          "en": "Dubnium-268",
          "pt-BR": "Dúbnio-268",
        },
        "neutrons": 163,
        "weight": { "standard": 268.12567 },
        "abundance": "syn",
        "half_life": "30.8 h",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 99.99,
            "decay_to": "many"
          },
          {
            "mode": "k_plus",
            "pct": 1e-4,
            "decay_to": "Rf-268"
          }
        ]
      },
      {
        "id": "Db-270",
        "name": {
          "en": "Dubnium-270",
          "pt-BR": "Dúbnio-270",
        },
        "neutrons": 165,
        "weight": { "standard": 270.13136 },
        "abundance": "syn",
        "half_life": "1.0 h",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 17,
            "decay_to": "many"
          },
          {
            "mode": "alpha",
            "pct": 83,
            "decay_to": "Lr-266"
          },
          {
            "mode": "k_plus",
            "pct": 1e-4,
            "decay_to": "Rf-270"
          }
        ]
      }
    ]
  },
  "Sg": {
    "id": "Sg",
    "symbol": "Sg",
    "name": {
      "en": "Seaborgium",
      "pt-BR": "Seabórgio"
    },
    "atomic_number": 106,
    "weight": { "most_stable": 269 },
    "period": 7,
    "group": 6,
    "type": "transition_metal",
    "melting_point": null,
    "boiling_point": null,
    "oxidation_states": ["0","(+3)","(+4*)","(+5)","+6*"],
    "electronegativity": null,
    "radius": { 
      "empirical": "132",
      "covalent": "143"
    },
    "discovery_date": "1974",
    "discovery_by": "Lawrence Berkeley National Laboratory",
    "electrons": [2, 8, 18, 32, 32, 12, 2],
    "isotopes": [
      {
        "id": "Sg-265",
        "name": {
          "en": "Seaborgium-265",
          "pt-BR": "Seabórgio-265",
        },
        "neutrons": 159,
        "weight": { "standard": 265.12109 },
        "abundance": "syn",
        "half_life": "8 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Rf-261"
          }
        ]
      },
      {
        "id": "Sg-265m",
        "name": {
          "en": "Seaborgium-265m",
          "pt-BR": "Seabórgio-265m",
        },
        "neutrons": 159,
        "weight": { "standard": 265.12109 },
        "abundance": "syn",
        "half_life": "16.2 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Rf-261"
          }
        ]
      },
      {
        "id": "Sg-267",
        "name": {
          "en": "Seaborgium-267",
          "pt-BR": "Seabórgio-267",
        },
        "neutrons": 161,
        "weight": { "standard": 267.12436 },
        "abundance": "syn",
        "half_life": "1.4 m",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 83,
            "decay_to": "many"
          },
          {
            "mode": "alpha",
            "pct": 17,
            "decay_to": "Rf-263"
          }
        ]
      },
      {
        "id": "Sg-269",
        "name": {
          "en": "Seaborgium-269",
          "pt-BR": "Seabórgio-269",
        },
        "neutrons": 163,
        "weight": { "standard": 269.12863 },
        "abundance": "syn",
        "half_life": "14 m",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Rf-265"
          }
        ]
      },
      {
        "id": "Sg-271",
        "name": {
          "en": "Seaborgium-271",
          "pt-BR": "Seabórgio-271",
        },
        "neutrons": 165,
        "weight": { "standard": 271.13393 },
        "abundance": "syn",
        "half_life": "2.4 m",
        "decay": [
          {
            "mode": "alpha",
            "pct": 67,
            "decay_to": "Rf-267"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 33,
            "decay_to": "many"
          }
        ]
      }
    ]
  },
  "Bh": {
    "id": "Bh",
    "symbol": "Bh",
    "name": {
      "en": "Bohrium",
      "pt-BR": "Bóhrio"
    },
    "atomic_number": 107,
    "weight": { "most_stable": 270 },
    "period": 7,
    "group": 7,
    "type": "transition_metal",
    "melting_point": null,
    "boiling_point": null,
    "oxidation_states": ["(+3*)","(+4*)","(+5*)","+7*"],
    "electronegativity": 1.28,
    "radius": { 
      "empirical": "128",
      "covalent": "141"
    },
    "discovery_date": "1981",
    "discovery_by": "Gesellschaft für Schwerionenforschung",
    "electrons": [2, 8, 18, 32, 32, 13, 2],
    "isotopes": [
      {
        "id": "Bh-267",
        "name": {
          "en": "Bohrium-267",
          "pt-BR": "Bóhrio-267",
        },
        "neutrons": 160,
        "weight": { "standard": 267.12750 },
        "abundance": "syn",
        "half_life": "22 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Db-263"
          }
        ]
      },
      {
        "id": "Bh-270",
        "name": {
          "en": "Bohrium-270",
          "pt-BR": "Bóhrio-270",
        },
        "neutrons": 163,
        "weight": { "standard": 270.13336 },
        "abundance": "syn",
        "half_life": "61 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Db-266"
          }
        ]
      },
      {
        "id": "Bh-271",
        "name": {
          "en": "Bohrium-271",
          "pt-BR": "Bóhrio-271",
        },
        "neutrons": 164,
        "weight": { "standard": 271.13526 },
        "abundance": "syn",
        "half_life": "1.5 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Db-267"
          }
        ]
      },
      {
        "id": "Bh-272",
        "name": {
          "en": "Bohrium-272",
          "pt-BR": "Bóhrio-272",
        },
        "neutrons": 165,
        "weight": { "standard": 272.13826 },
        "abundance": "syn",
        "half_life": "8.8 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Db-268"
          }
        ]
      },
      {
        "id": "Bh-274",
        "name": {
          "en": "Bohrium-274",
          "pt-BR": "Bóhrio-274",
        },
        "neutrons": 167,
        "weight": { "standard": 274.14355 },
        "abundance": "syn",
        "half_life": "0.9 min",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Db-270"
          }
        ]
      }
    ]
  },
  "Hs": {
    "id": "Hs",
    "symbol": "Hs",
    "name": {
      "en": "Hassium",
      "pt-BR": "Hássio"
    },
    "atomic_number": 108,
    "weight": { "most_stable": 277 },
    "period": 7,
    "group": 8,
    "type": "transition_metal",
    "melting_point": null,
    "boiling_point": null,
    "oxidation_states": ["(+2*)","(+3)","(+4*)","(+5)","(+6*)","+8*"],
    "electronegativity": 1.28,
    "radius": { 
      "empirical": "126",
      "covalent": "134"
    },
    "discovery_date": "1984",
    "discovery_by": "Gesellschaft für Schwerionenforschung",
    "electrons": [2, 8, 18, 32, 32, 14, 2],
    "isotopes": [
      {
        "id": "Hs-269",
        "name": {
          "en": "Hassium-269",
          "pt-BR": "Hássio-269",
        },
        "neutrons": 161,
        "weight": { "standard": 269.13375 },
        "abundance": "syn",
        "half_life": "9.7 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Sg-265"
          }
        ]
      },
      {
        "id": "Hs-270",
        "name": {
          "en": "Hassium-270",
          "pt-BR": "Hássio-270",
        },
        "neutrons": 162,
        "weight": { "standard": 270.13429 },
        "abundance": "syn",
        "half_life": "10 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Sg-266"
          }
        ]
      },
      {
        "id": "Hs-271",
        "name": {
          "en": "Hassium-271",
          "pt-BR": "Hássio-271",
        },
        "neutrons": 163,
        "weight": { "standard": 270.13429 },
        "abundance": "syn",
        "half_life": "4 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Sg-267"
          }
        ]
      }
    ]
  },
  "Mt": {
    "id": "Mt",
    "symbol": "Mt",
    "name": {
      "en": "Meitnerium",
      "pt-BR": "Meitnério"
    },
    "atomic_number": 109,
    "weight": { "most_stable": 278 },
    "period": 7,
    "group": 9,
    "type": "unknown_type",
    "melting_point": null,
    "boiling_point": null,
    "oxidation_states": ["(+1*)","(+3*)","(+4)","(+6*)","(+8)","(+9)"],
    "electronegativity": null,
    "radius": { 
      "empirical": "128",
      "covalent": "129"
    },
    "discovery_date": "1982",
    "discovery_by": "Gesellschaft für Schwerionenforschung",
    "electrons": [2, 8, 18, 32, 32, 15, 2],
    "isotopes": [
      {
        "id": "Mt-274",
        "name": {
          "en": "Meitnerium-274",
          "pt-BR": "Meitnério-274",
        },
        "neutrons": 165,
        "weight": { "standard": 274.14725 },
        "abundance": "syn",
        "half_life": "0.45 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Bh-270"
          }
        ]
      },
      {
        "id": "Mt-276",
        "name": {
          "en": "Meitnerium-276",
          "pt-BR": "Meitnério-276",
        },
        "neutrons": 167,
        "weight": { "standard": 276.15159 },
        "abundance": "syn",
        "half_life": "0.72 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Bh-272"
          }
        ]
      },
      {
        "id": "Mt-278",
        "name": {
          "en": "Meitnerium-278",
          "pt-BR": "Meitnério-278",
        },
        "neutrons": 169,
        "weight": { "standard": 278.15631 },
        "abundance": "syn",
        "half_life": "7.6 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Bh-274"
          }
        ]
      },
      {
        "id": "Mt-282",
        "name": {
          "en": "Meitnerium-282",
          "pt-BR": "Meitnério-282",
        },
        "neutrons": 173,
        "weight": { "standard": null },
        "abundance": "syn",
        "half_life": "67 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Bh-278"
          }
        ]
      }
    ]
  },
  "Ds": {
    "id": "Ds",
    "symbol": "Ds",
    "name": {
      "en": "Darmstadtium",
      "pt-BR": "Darmstácio"
    },
    "atomic_number": 110,
    "weight": { "most_stable": 281 },
    "period": 7,
    "group": 10,
    "type": "unknown_type",
    "melting_point": null,
    "boiling_point": null,
    "oxidation_states": ["(0*)","(+2*)","(+4)","(+6)","(+8*)"],
    "electronegativity": null,
    "radius": { 
      "empirical": "132",
      "covalent": "128"
    },
    "discovery_date": "1994",
    "discovery_by": "Gesellschaft für Schwerionenforschung",
    "electrons": [2, 8, 18, 32, 32, 17, 1],
    "isotopes": [
      {
        "id": "Ds-279",
        "name": {
          "en": "Darmstadtium-279",
          "pt-BR": "Darmstácio-279",
        },
        "neutrons": 169,
        "weight": { "standard": 279.16010 },
        "abundance": "syn",
        "half_life": "0.18 s",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 90,
            "decay_to": "many"
          },
          {
            "mode": "alpha",
            "pct": 10,
            "decay_to": "Hs-275"
          }
        ]
      },
      {
        "id": "Ds-281",
        "name": {
          "en": "Darmstadtium-281",
          "pt-BR": "Darmstácio-281",
        },
        "neutrons": 171,
        "weight": { "standard": 281.16451 },
        "abundance": "syn",
        "half_life": "9.6 s",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 94,
            "decay_to": "many"
          },
          {
            "mode": "alpha",
            "pct": 6,
            "decay_to": "Hs-277"
          }
        ]
      }
    ]
  },
  "Rg": {
    "id": "Rg",
    "symbol": "Rg",
    "name": {
      "en": "Roentgenium",
      "pt-BR": "Roentgênio"
    },
    "atomic_number": 111,
    "weight": { "most_stable": 282 },
    "period": 7,
    "group": 11,
    "type": "unknown_type",
    "melting_point": null,
    "boiling_point": null,
    "oxidation_states": ["(-1)","(+1)","(+3*)","(+5)"],
    "electronegativity": null,
    "radius": { 
      "empirical": "138",
      "covalent": "121"
    },
    "discovery_date": "1994",
    "discovery_by": "Gesellschaft für Schwerionenforschung",
    "electrons": [2, 8, 18, 32, 32, 17, 2],
    "isotopes": [
      {
        "id": "Rg-279",
        "name": {
          "en": "Roentgenium-279",
          "pt-BR": "Roentgênio-279",
        },
        "neutrons": 168,
        "weight": { "standard": 279.16272 },
        "abundance": "syn",
        "half_life": "0.17 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Mt-275"
          }
        ]
      },
      {
        "id": "Rg-280",
        "name": {
          "en": "Roentgenium-280",
          "pt-BR": "Roentgênio-280",
        },
        "neutrons": 169,
        "weight": { "standard": 280.16514 },
        "abundance": "syn",
        "half_life": "3.6 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 87,
            "decay_to": "Mt-276"
          },
          {
            "mode": "k_plus",
            "pct": 13,
            "decay_to": "Ds-280"
          }
        ]
      },
      {
        "id": "Rg-281",
        "name": {
          "en": "Roentgenium-281",
          "pt-BR": "Roentgênio-281",
        },
        "neutrons": 170,
        "weight": { "standard": 281.16636 },
        "abundance": "syn",
        "half_life": "17 s",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 90,
            "decay_to": "many"
          },
          {
            "mode": "alpha",
            "pct": 10,
            "decay_to": "Mt-277"
          }
        ]
      },
      {
        "id": "Rg-282",
        "name": {
          "en": "Roentgenium-282",
          "pt-BR": "Roentgênio-282",
        },
        "neutrons": 171,
        "weight": { "standard": 282.16912 },
        "abundance": "syn",
        "half_life": "2.1 min",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Mt-278"
          }
        ]
      },
      {
        "id": "Rg-283",
        "name": {
          "en": "Roentgenium-283",
          "pt-BR": "Roentgênio-283",
        },
        "neutrons": 172,
        "weight": { "standard": 283.17054 },
        "abundance": "syn",
        "half_life": "5.1 min",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 100,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Rg-286",
        "name": {
          "en": "Roentgenium-286",
          "pt-BR": "Roentgênio-286",
        },
        "neutrons": 175,
        "weight": { "standard": null },
        "abundance": "syn",
        "half_life": "10.7 min",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Mt-282"
          }
        ]
      }
    ]
  },
  "Cn": {
    "id": "Cn",
    "symbol": "Cn",
    "name": {
      "en": "Copernicium",
      "pt-BR": "Copernício"
    },
    "atomic_number": 112,
    "weight": { "most_stable": 285 },
    "period": 7,
    "group": 12,
    "type": "transition_metal",
    "melting_point": null,
    "boiling_point": null,
    "oxidation_states": ["0*","(+1)","+2*","(+4)"],
    "electronegativity": null,
    "radius": { 
      "empirical": "147",
      "covalent": "122"
    },
    "discovery_date": "1996",
    "discovery_by": "Gesellschaft für Schwerionenforschung",
    "electrons": [2, 8, 18, 32, 32, 18, 2],
    "isotopes": [
      {
        "id": "Cn-283",
        "name": {
          "en": "Copernicium-283",
          "pt-BR": "Copernício-283",
        },
        "neutrons": 171,
        "weight": { "standard": 283.17327 },
        "abundance": "syn",
        "half_life": "4 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 90,
            "decay_to": "Ds-279"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 10,
            "decay_to": "many"
          },
          {
            "mode": "k_plus",
            "pct": 1e-10,
            "decay_to": "Rg-283"
          }
        ]
      },
      {
        "id": "Cn-285",
        "name": {
          "en": "Copernicium-285",
          "pt-BR": "Copernício-285",
        },
        "neutrons": 173,
        "weight": { "standard": 285.17712 },
        "abundance": "syn",
        "half_life": "29 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Ds-281"
          }
        ]
      },
      {
        "id": "Cn-286",
        "name": {
          "en": "Copernicium-286",
          "pt-BR": "Copernício-286",
        },
        "neutrons": 174,
        "weight": { "standard": null },
        "abundance": "syn",
        "half_life": "8.45 s",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 100,
            "decay_to": "many"
          }
        ]
      }
    ]
  },
  "Nh": {
    "id": "Nh",
    "symbol": "Nh",
    "name": {
      "en": "Nihonium",
      "pt-BR": "Nihônio"
    },
    "atomic_number": 113,
    "weight": { "most_stable": 286 },
    "period": 7,
    "group": 13,
    "type": "unknown_type",
    "melting_point": null,
    "boiling_point": null,
    "oxidation_states": ["(-1)","(+1*)","(+3*)","(+5)"],
    "electronegativity": null,
    "radius": { 
      "empirical": "170",
      "covalent": "172-180"
    },
    "discovery_date": "2004",
    "discovery_by": "Riken",
    "electrons": [2, 8, 18, 32, 32, 18, 3],
    "isotopes": [
      {
        "id": "Nh-287",
        "name": {
          "en": "Nihonium-287",
          "pt-BR": "Nihônio-287",
        },
        "neutrons": 165,
        "weight": { "standard": 278.17058 },
        "abundance": "syn",
        "half_life": "1.4 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Rg-274"
          }
        ]
      },
      {
        "id": "Nh-282",
        "name": {
          "en": "Nihonium-282",
          "pt-BR": "Nihônio-282",
        },
        "neutrons": 169,
        "weight": { "standard": 282.17567 },
        "abundance": "syn",
        "half_life": "73 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Rg-278"
          }
        ]
      },
      {
        "id": "Nh-283",
        "name": {
          "en": "Nihonium-283",
          "pt-BR": "Nihônio-283",
        },
        "neutrons": 170,
        "weight": { "standard": 283.17657 },
        "abundance": "syn",
        "half_life": "75 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Rg-279"
          }
        ]
      },
      {
        "id": "Nh-284",
        "name": {
          "en": "Nihonium-284",
          "pt-BR": "Nihônio-284",
        },
        "neutrons": 171,
        "weight": { "standard": 284.17873 },
        "abundance": "syn",
        "half_life": "0.91 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 96.8,
            "decay_to": "Rg-280"
          },
          {
            "mode": "k_plus",
            "pct": 3.2,
            "decay_to": "Cn-284"
          }
        ]
      },
      {
        "id": "Nh-285",
        "name": {
          "en": "Nihonium-285",
          "pt-BR": "Nihônio-285",
        },
        "neutrons": 172,
        "weight": { "standard": 285.17973 },
        "abundance": "syn",
        "half_life": "4.2 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Rg-281"
          }
        ]
      },
      {
        "id": "Nh-286",
        "name": {
          "en": "Nihonium-286",
          "pt-BR": "Nihônio-286",
        },
        "neutrons": 173,
        "weight": { "standard": 286.18221 },
        "abundance": "syn",
        "half_life": "9.5 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Rg-282"
          }
        ]
      },
      {
        "id": "Nh-287",
        "name": {
          "en": "Nihonium-287",
          "pt-BR": "Nihônio-287",
        },
        "neutrons": 174,
        "weight": { "standard": 286.18221 },
        "abundance": "syn",
        "half_life": "5.5 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Rg-283"
          }
        ]
      },
      {
        "id": "Nh-290",
        "name": {
          "en": "Nihonium-290",
          "pt-BR": "Nihônio-290",
        },
        "neutrons": 177,
        "weight": { "standard": null },
        "abundance": "syn",
        "half_life": "2 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Rg-286"
          }
        ]
      }
    ]
  },
  "Fl": {
    "id": "Fl",
    "symbol": "Fl",
    "name": {
      "en": "Flerovium",
      "pt-BR": "Fleróvio"
    },
    "atomic_number": 114,
    "weight": { "most_stable": 289 },
    "period": 7,
    "group": 14,
    "type": "post_transitional",
    "melting_point": null,
    "boiling_point": null,
    "oxidation_states": ["(0)","(+1)","(+2*)","(+4)","(+6)"],
    "electronegativity": null,
    "radius": { 
      "empirical": "180",
      "covalent": "171-177"
    },
    "discovery_date": "1999",
    "discovery_by": "Joint Institute for Nuclear Research & Lawrence Livermore National Laboratory",
    "electrons": [2, 8, 18, 32, 32, 18, 4],
    "isotopes": [
      {
        "id": "Fl-284",
        "name": {
          "en": "Flerovium-284",
          "pt-BR": "Fleróvio-284",
        },
        "neutrons": 170,
        "weight": { "standard": null },
        "abundance": "syn",
        "half_life": "2.5 ms",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 100,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Fl-285",
        "name": {
          "en": "Flerovium-285",
          "pt-BR": "Fleróvio-285",
        },
        "neutrons": 171,
        "weight": { "standard": 285.18364 },
        "abundance": "syn",
        "half_life": "100 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Cn-281"
          }
        ]
      },
      {
        "id": "Fl-286",
        "name": {
          "en": "Flerovium-286",
          "pt-BR": "Fleróvio-286",
        },
        "neutrons": 172,
        "weight": { "standard": 286.18424 },
        "abundance": "syn",
        "half_life": "130 ms",
        "decay": [
          {
            "mode": "spontaneous_fission",
            "pct": 60,
            "decay_to": "many"
          },
          {
            "mode": "alpha",
            "pct": 40,
            "decay_to": "Cn-282"
          }
        ]
      },
      {
        "id": "Fl-287",
        "name": {
          "en": "Flerovium-287",
          "pt-BR": "Fleróvio-287",
        },
        "neutrons": 173,
        "weight": { "standard": 287.18678 },
        "abundance": "syn",
        "half_life": "510 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Cn-283"
          },
          {
            "mode": "k_plus",
            "pct": 1e-4,
            "decay_to": "Nh-287"
          }
        ]
      },
      {
        "id": "Fl-288",
        "name": {
          "en": "Flerovium-288",
          "pt-BR": "Fleróvio-288",
        },
        "neutrons": 174,
        "weight": { "standard": 287.18678 },
        "abundance": "syn",
        "half_life": "0.8 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Cn-284"
          }
        ]
      },
      {
        "id": "Fl-289",
        "name": {
          "en": "Flerovium-289",
          "pt-BR": "Fleróvio-289",
        },
        "neutrons": 175,
        "weight": { "standard": 289.19042 },
        "abundance": "syn",
        "half_life": "2.6 s",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Cn-285"
          }
        ]
      },
      {
        "id": "Fl-290",
        "name": {
          "en": "Flerovium-290",
          "pt-BR": "Fleróvio-290",
        },
        "neutrons": 176,
        "weight": { "standard": null },
        "abundance": "syn",
        "half_life": "19 s",
        "decay": [
          {
            "mode": "k_plus",
            "pct": 99.99,
            "decay_to": "Nh-290"
          },
          {
            "mode": "alpha",
            "pct": 1e-4,
            "decay_to": "Cn-286"
          }
        ]
      }
    ]
  },
  "Mc": {
    "id": "Mc",
    "symbol": "Mc",
    "name": {
      "en": "Moscouvium",
      "pt-BR": "Moscóvio"
    },
    "atomic_number": 115,
    "weight": { "most_stable": 290 },
    "period": 7,
    "group": 15,
    "type": "unknown_type",
    "melting_point": null,
    "boiling_point": null,
    "oxidation_states": ["(+1*)","(+3*)"],
    "electronegativity": null,
    "radius": { 
      "empirical": "187",
      "covalent": "156-158"
    },
    "discovery_date": "2003",
    "discovery_by": "Joint Institute for Nuclear Research & Lawrence Livermore National Laboratory",
    "electrons": [2, 8, 18, 32, 32, 18, 5],
    "isotopes": [
      {
        "id": "Mc-287",
        "name": {
          "en": "Moscouvium-287",
          "pt-BR": "Moscóvio-287",
        },
        "neutrons": 172,
        "weight": { "standard": 287.19070 },
        "abundance": "syn",
        "half_life": "37 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Nh-283"
          }
        ]
      },
      {
        "id": "Mc-288",
        "name": {
          "en": "Moscouvium-288",
          "pt-BR": "Moscóvio-288",
        },
        "neutrons": 173,
        "weight": { "standard": 288.19274 },
        "abundance": "syn",
        "half_life": "164 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Nh-284"
          }
        ]
      },
      {
        "id": "Mc-289",
        "name": {
          "en": "Moscouvium-289",
          "pt-BR": "Moscóvio-289",
        },
        "neutrons": 174,
        "weight": { "standard": 289.19363 },
        "abundance": "syn",
        "half_life": "330 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Nh-285"
          }
        ]
      },
      {
        "id": "Mc-290",
        "name": {
          "en": "Moscouvium-290",
          "pt-BR": "Moscóvio-290",
        },
        "neutrons": 175,
        "weight": { "standard": 290.19598 },
        "abundance": "syn",
        "half_life": "650 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Nh-286"
          }
        ]
      }
    ]
  },
  "Lv": {
    "id": "Lv",
    "symbol": "Lv",
    "name": {
      "en": "Livermorium",
      "pt-BR": "Livermório"
    },
    "atomic_number": 116,
    "weight": { "most_stable": 293 },
    "period": 7,
    "group": 16,
    "type": "unknown_type",
    "melting_point": null,
    "boiling_point": null,
    "oxidation_states": ["(-2)","(+2*)","(+4)"],
    "electronegativity": null,
    "radius": { 
      "empirical": "183",
      "covalent": "162-166"
    },
    "discovery_date": "2000",
    "discovery_by": "Joint Institute for Nuclear Research & Lawrence Livermore National Laboratory",
    "electrons": [2, 8, 18, 32, 32, 18, 6],
    "isotopes": [
      {
        "id": "Lv-290",
        "name": {
          "en": "Livermorium-290",
          "pt-BR": "Livermório-290",
        },
        "neutrons": 174,
        "weight": { "standard": 290.19598 },
        "abundance": "syn",
        "half_life": "15 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Fl-286"
          }
        ]
      },
      {
        "id": "Lv-291",
        "name": {
          "en": "Livermorium-291",
          "pt-BR": "Livermório-291",
        },
        "neutrons": 175,
        "weight": { "standard": 291.20108 },
        "abundance": "syn",
        "half_life": "6.3 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Fl-287"
          }
        ]
      },
      {
        "id": "Lv-292",
        "name": {
          "en": "Livermorium-292",
          "pt-BR": "Livermório-292",
        },
        "neutrons": 176,
        "weight": { "standard": 292.20174 },
        "abundance": "syn",
        "half_life": "18 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Fl-288"
          }
        ]
      },
      {
        "id": "Lv-293",
        "name": {
          "en": "Livermorium-293",
          "pt-BR": "Livermório-293",
        },
        "neutrons": 177,
        "weight": { "standard": 293.20449 },
        "abundance": "syn",
        "half_life": "53 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Fl-289"
          }
        ]
      },
      {
        "id": "Lv-294",
        "name": {
          "en": "Livermorium-294",
          "pt-BR": "Livermório-294",
        },
        "neutrons": 178,
        "weight": { "standard": null },
        "abundance": "syn",
        "half_life": "54 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Fl-290"
          }
        ]
      }
    ]
  },
  "Ts": {
    "id": "Ts",
    "symbol": "Ts",
    "name": {
      "en": "Tennessine",
      "pt-BR": "Tennesso"
    },
    "atomic_number": 117,
    "weight": { "most_stable": 294 },
    "period": 7,
    "group": 17,
    "type": "unknown_type",
    "melting_point": null,
    "boiling_point": null,
    "oxidation_states": ["(-1)","(+1*)","(+3*)","(+5)"],
    "electronegativity": null,
    "radius": { 
      "empirical": "138",
      "covalent": "156-157"
    },
    "discovery_date": "2009",
    "discovery_by": "Joint Institute for Nuclear Research, Lawrence Livermore National Laboratory, Vanderbilt University & Oak Ridge National Laboratory",
    "electrons": [2, 8, 18, 32, 32, 18, 7],
    "isotopes": [
      {
        "id": "Ts-293",
        "name": {
          "en": "Tennessine-293",
          "pt-BR": "Tennesso-293",
        },
        "neutrons": 176,
        "weight": { "standard": 293.20824 },
        "abundance": "syn",
        "half_life": "22 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Mc-289"
          }
        ]
      },
      {
        "id": "Ts-294",
        "name": {
          "en": "Tennessine-294",
          "pt-BR": "Tennesso-294",
        },
        "neutrons": 177,
        "weight": { "standard": 294.21046 },
        "abundance": "syn",
        "half_life": "51 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Mc-290"
          }
        ]
      }
    ]
  },
  "Og": {
    "id": "Og",
    "symbol": "Og",
    "name": {
      "en": "Oganesson",
      "pt-BR": "Oganessônio"
    },
    "atomic_number": 118,
    "weight": { "most_stable": 294 },
    "period": 7,
    "group": 18,
    "type": "unknown_type",
    "melting_point": null,
    "boiling_point": null,
    "oxidation_states": ["(-1)","(0)","(+1)","(+2*)","(+4*)","(+6)"],
    "electronegativity": null,
    "radius": { 
      "covalent": "157"
    },
    "discovery_date": "2002",
    "discovery_by": "Joint Institute for Nuclear Research & Lawrence Livermore National Laboratory",
    "electrons": [2, 8, 18, 32, 32, 10, 8],
    "isotopes": [
      {
        "id": "Os-294",
        "name": {
          "en": "Oganesson-294",
          "pt-BR": "Oganessônio-294",
        },
        "neutrons": 176,
        "weight": { "standard": 294.21392 },
        "abundance": "syn",
        "half_life": "0.7 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 99.99,
            "decay_to": "Lv-290"
          },
          {
            "mode": "spontaneous_fission",
            "pct": 1e-4,
            "decay_to": "many"
          }
        ]
      },
      {
        "id": "Os-295",
        "name": {
          "en": "Oganesson-295",
          "pt-BR": "Oganessônio-295",
        },
        "neutrons": 177,
        "weight": { "standard": 295.21624 },
        "abundance": "syn",
        "half_life": "181 ms",
        "decay": [
          {
            "mode": "alpha",
            "pct": 100,
            "decay_to": "Lv-291"
          }
        ]
      }
    ]
  },
  "lanthanoids": {
    "id": "lanthanoids",
    "symbol": "57-71",
    "name": {
      "en": "Lanthanoids",
      "pt-BR": "Lantanoides"
    },
    "period": 6,
    "group": 3,
    "type": "lanthanoids",
    "melting_point": null,
    "boiling_point": null,
    "electrons": [],
    "classList": ['lanthanoid']
  },
  "actinoids": {
    "id": "actinoids",
    "symbol": "89-103",
    "name": {
      "en": "Actinoids",
      "pt-BR": "Actinoides"
    },
    "period": 7,
    "group": 3,
    "type": "actinoids",
    "melting_point": null,
    "boiling_point": null,
    "electrons": [],
    "classList": ['actinoid']
  },
};
