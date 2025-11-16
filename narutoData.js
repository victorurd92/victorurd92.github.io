const NARUTO_CHARACTERS = [

  {
    id: "naruto",
    nombre: "Naruto Uzumaki",
    equipo: "Equipo Naruto",
    aldea: "Konoha",
    rol: "Protagonista",
    poder: "Modo Sabio + Chakra de Kurama",
    ataque: 96,
    defensa: 90,
    velocidad: 94,
    chakra: 100,
    imagen: "img/naruto.png",
    descripcion: "Modo Sabio combinado con el chakra de Kurama, poder masivo."
  },

  {
    id: "sasuke",
    nombre: "Sasuke Uchiha",
    equipo: "Equipo Naruto",
    aldea: "Konoha",
    rol: "Rival",
    poder: "Eternal Mangekyo Sharingan",
    ataque: 97,
    defensa: 88,
    velocidad: 96,
    chakra: 95,
    imagen: "img/sasuke.png",
    descripcion: "Mangekyō eterno desbloqueado, velocidad y poder extremos."
  },

  {
    id: "sakura",
    nombre: "Sakura Haruno",
    equipo: "Equipo Naruto",
    aldea: "Konoha",
    rol: "Sannin discípula",
    poder: "Sello de Byakugō",
    ataque: 92,
    defensa: 94,
    velocidad: 84,
    chakra: 98,
    imagen: "img/sakura.png",
    descripcion: "Fuerza monstruosa y regeneración avanzada."
  },

  {
    id: "kakashi",
    nombre: "Kakashi Hatake",
    equipo: "Equipo Naruto",
    aldea: "Konoha",
    rol: "Sensei",
    poder: "Kamui mejorado",
    ataque: 95,
    defensa: 90,
    velocidad: 92,
    chakra: 90,
    imagen: "img/kakashi.png",
    descripcion: "Sharigan experto con dominio completo de Kamui."
  },

  {
    id: "hinata",
    nombre: "Hinata Hyuga",
    equipo: "Equipo Naruto",
    aldea: "Konoha",
    rol: "Clan Hyuga",
    poder: "Byakugan avanzado",
    ataque: 86,
    defensa: 86,
    velocidad: 84,
    chakra: 92,
    imagen: "img/hinata.png",
    descripcion: "Gran control del Jūken y percepción aumentada."
  },

  {
    id: "rocklee",
    nombre: "Rock Lee",
    equipo: "Equipo Naruto",
    aldea: "Konoha",
    rol: "Taijutsu",
    poder: "6ta Puerta Interior",
    ataque: 94,
    defensa: 84,
    velocidad: 98,
    chakra: 80,
    imagen: "img/rocklee.png",
    descripcion: "Velocidad brutal al abrir las puertas internas."
  },

  {
    id: "shikamaru",
    nombre: "Shikamaru Nara",
    equipo: "Equipo Naruto",
    aldea: "Konoha",
    rol: "Estratega",
    poder: "Sombras extendidas",
    ataque: 82,
    defensa: 88,
    velocidad: 76,
    chakra: 90,
    imagen: "img/shikamaru.png",
    descripcion: "Una mente capaz de derrotar a enemigos más fuertes."
  },

  {
    id: "gaara",
    nombre: "Gaara",
    equipo: "Equipo Naruto",
    aldea: "Arena",
    rol: "Kazekage",
    poder: "Control perfecto de arena",
    ataque: 94,
    defensa: 100,
    velocidad: 84,
    chakra: 96,
    imagen: "img/gaara.png",
    descripcion: "Escudos de arena casi impenetrables y control absoluto."
  },


  {
    id: "itachi",
    nombre: "Itachi Uchiha",
    equipo: "Akatsuki",
    aldea: "Konoha (ex)",
    rol: "Genjutsu maestro",
    poder: "Edo Tensei + Susanoo",
    ataque: 98,
    defensa: 94,
    velocidad: 98,
    chakra: 96,
    imagen: "img/itachi.png",
    descripcion: "Dominio absoluto del Mangekyō Sharingan."
  },

  {
    id: "kisame",
    nombre: "Kisame Hoshigaki",
    equipo: "Akatsuki",
    aldea: "Kiri",
    rol: "Bestia sin cola",
    poder: "Samehada + chakra monstruoso",
    ataque: 93,
    defensa: 88,
    velocidad: 80,
    chakra: 98,
    imagen: "img/kisame.png",
    descripcion: "Chakra colosal y letal con Samehada."
  },

  {
    id: "deidara",
    nombre: "Deidara",
    equipo: "Akatsuki",
    aldea: "Iwa",
    rol: "Explosivos",
    poder: "C4 Karura",
    ataque: 92,
    defensa: 78,
    velocidad: 92,
    chakra: 90,
    imagen: "img/deidara.png",
    descripcion: "Explosiones a nivel celular, arte mortal."
  },

  {
    id: "hidan",
    nombre: "Hidan",
    equipo: "Akatsuki",
    aldea: "Yugakure",
    rol: "Inmortal",
    poder: "Ritual de Jashin",
    ataque: 88,
    defensa: 90,
    velocidad: 72,
    chakra: 85,
    imagen: "img/hidan.png",
    descripcion: "Inmortal mientras mantenga su ritual activo."
  },

  {
    id: "kakuzu",
    nombre: "Kakuzu",
    equipo: "Akatsuki",
    aldea: "Taki",
    rol: "Multi-elementos",
    poder: "5 corazones",
    ataque: 94,
    defensa: 94,
    velocidad: 80,
    chakra: 95,
    imagen: "img/kakuzu.png",
    descripcion: "Dominio de varias naturalezas con enorme resistencia."
  },

  {
    id: "konan",
    nombre: "Konan",
    equipo: "Akatsuki",
    aldea: "Amegakure",
    rol: "Estratega",
    poder: "Papel explosivo 600B tags",
    ataque: 90,
    defensa: 86,
    velocidad: 94,
    chakra: 94,
    imagen: "img/konan.png",
    descripcion: "Explosiones masivas y movilidad aérea completa."
  },

  {
    id: "obito",
    nombre: "Obito Uchiha",
    equipo: "Akatsuki",
    aldea: "Konoha (ex)",
    rol: "Manipulador",
    poder: "Kamui + Rinnegan",
    ataque: 98,
    defensa: 96,
    velocidad: 96,
    chakra: 98,
    imagen: "img/obito.png",
    descripcion: "Espacio-tiempo, invocaciones y poder increíble."
  },

  {
    id: "madara",
    nombre: "Madara Uchiha",
    equipo: "Akatsuki",
    aldea: "Konoha",
    rol: "Leyenda",
    poder: "Edo Tensei + Susanoo Perfecto",
    ataque: 100,
    defensa: 100,
    velocidad: 98,
    chakra: 100,
    imagen: "img/madara.png",
    descripcion: "El poder más abrumador de la Guerra Ninja."
  },

 
  {
    id: "jiraiya",
    nombre: "Jiraiya",
    equipo: "Sannin",
    aldea: "Konoha",
    rol: "Maestro",
    poder: "Modo Sabio imperfecto",
    ataque: 94,
    defensa: 88,
    velocidad: 86,
    chakra: 95,
    imagen: "img/jiraiya.png",
    descripcion: "Poder inmenso con el modo ermitaño imperfecto."
  },

  {
    id: "tsunade",
    nombre: "Tsunade",
    equipo: "Sannin",
    aldea: "Konoha",
    rol: "Hokage",
    poder: "Byakugō activo",
    ataque: 94,
    defensa: 96,
    velocidad: 82,
    chakra: 98,
    imagen: "img/tsunade.png",
    descripcion: "Regeneración continua y fuerza monstruosa."
  },

  {
    id: "orochimaru",
    nombre: "Orochimaru",
    equipo: "Sannin",
    aldea: "Konoha (ex)",
    rol: "Científico",
    poder: "Cuerpo serpiente inmortal",
    ataque: 92,
    defensa: 90,
    velocidad: 86,
    chakra: 98,
    imagen: "img/orochimaru.png",
    descripcion: "Dominio de jutsus prohibidos y regeneración extrema."
  },

  {
    id: "minato",
    nombre: "Minato Namikaze",
    equipo: "Konoha",
    aldea: "Konoha",
    rol: "4to Hokage",
    poder: "Modo Kurama + Edo Tensei",
    ataque: 98,
    defensa: 94,
    velocidad: 100,
    chakra: 98,
    imagen: "img/minato.png",
    descripcion: "Uno de los ninjas más rápidos de la historia."
  },

  {
    id: "hashirama",
    nombre: "Hashirama Senju",
    equipo: "Fundadores",
    aldea: "Konoha",
    rol: "1er Hokage",
    poder: "Modo Sabio de Madera",
    ataque: 100,
    defensa: 100,
    velocidad: 94,
    chakra: 100,
    imagen: "img/hashirama.png",
    descripcion: "El Dios de los Shinobi, poder mítico."
  },

  {
    id: "tobirama",
    nombre: "Tobirama Senju",
    equipo: "Fundadores",
    aldea: "Konoha",
    rol: "2do Hokage",
    poder: "Suiton absoluto",
    ataque: 96,
    defensa: 92,
    velocidad: 98,
    chakra: 94,
    imagen: "img/tobirama.png",
    descripcion: "Inventor del Hiraishin y técnicas prohibidas."
  },

  {
    id: "killerbee",
    nombre: "Killer Bee",
    equipo: "Jinchūriki",
    aldea: "Kumo",
    rol: "Portador del Hachibi",
    poder: "Modo Jinchūriki maestro",
    ataque: 96,
    defensa: 90,
    velocidad: 92,
    chakra: 98,
    imagen: "img/killerbee.png",
    descripcion: "Control absoluto del 8 colas y excelente espadachín."
  },

  {
    id: "danzo",
    nombre: "Danzo Shimura",
    equipo: "ANBU Raíz",
    aldea: "Konoha",
    rol: "Líder oculto",
    poder: "Izanagi múltiple",
    ataque: 90,
    defensa: 90,
    velocidad: 86,
    chakra: 92,
    imagen: "img/danzo.png",
    descripcion: "Uso letal de varios Sharingan e Izanagi."
  }

];
