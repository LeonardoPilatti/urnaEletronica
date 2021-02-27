let etapas = [    /// está tudo dentro de um array;  /// isso é um arquivo json;
  {
    titulo: 'VEREADOR',
    numeros: 5,
    candidatos: [
      {
        numero: '38111',
        nome: 'Darth Vader',
        partido: 'JKR',
        fotos: [
          {url:'38111.jpg', legenda: 'Vereador'}  /// posso colocar ', small: false';
        ]
      },
      {
        numero: '77222',
        nome: 'Smeagol Tolkien',
        partido: 'JRR',
        fotos: [
          {url:'77222.jpg', legenda: 'Vereador'}
        ]
      },
    ]
  },
  {
    titulo: 'Prefeito',
    numeros: 2,
    candidatos: [
      {
        numero: '99',
        nome: 'Albus Dumbledore',
        partido: 'JKR',
        vice: 'Minerva McGonagall',
        fotos: [
          { url: '99.jpg', legenda: 'Prefeito' },
          { url: '99_2.jpg', legenda: 'Vice-Prefeito', small: true }

        ]
      },
      {
        numero: '84',
        nome: 'Mayor of Townsville',
        partido: 'JRR',
        vice: 'Joseph "Joe" Quimby',
        fotos: [
          { url: '84.jpg', legenda: 'Prefeito' },
          { url: '84_2.jpg', legenda: 'Vice-Prefeito', small: true }
        ]
      },
    ]
    }
]