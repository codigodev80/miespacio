const BIBLE_VERSES = [
  {
    text: "Confía en el Señor con todo tu corazón, y no te apoyes en tu propia prudencia.",
    source: "Proverbios 3:5",
  },
  { text: "El Señor es mi pastor; nada me faltará.", source: "Salmos 23:1" },
  {
    text: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes.",
    source: "Josué 1:9",
  },
  {
    text: "Todo lo puedo en Cristo que me fortalece.",
    source: "Filipenses 4:13",
  },
  {
    text: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice el Señor.",
    source: "Jeremías 29:11",
  },
  {
    text: "Deléitate asimismo en el Señor, y él te concederá las peticiones de tu corazón.",
    source: "Salmos 37:4",
  },
  {
    text: "No se turben vuestros corazones. Creéis en Dios; creed también en mí.",
    source: "Juan 14:1",
  },
  {
    text: "El amor es sufrido, es benigno; el amor no tiene envidia, no es jactancioso.",
    source: "1 Corintios 13:4",
  },
  {
    text: "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas.",
    source: "Jeremías 33:3",
  },
  {
    text: "Buscad primeramente el reino de Dios y su justicia, y todo lo demás será añadido.",
    source: "Mateo 6:33",
  },
  {
    text: "Jehová es mi luz y mi salvación; ¿de quién temeré?",
    source: "Salmos 27:1",
  },
  {
    text: "La respuesta blanda quita la ira; mas la palabra áspera hace subir el furor.",
    source: "Proverbios 15:1",
  },
  {
    text: "Acerquémonos, pues, confiadamente al trono de la gracia para alcanzar misericordia.",
    source: "Hebreos 4:16",
  },
  {
    text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito.",
    source: "Juan 3:16",
  },
  {
    text: "Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.",
    source: "Juan 14:6",
  },
  {
    text: "Si Dios es por nosotros, ¿quién contra nosotros?",
    source: "Romanos 8:31",
  },
  {
    text: "El hacer tu voluntad, Dios mío, me ha agradado, y tu ley está en mi corazón.",
    source: "Salmos 40:8",
  },
  {
    text: "Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí.",
    source: "Salmos 51:10",
  },
  {
    text: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios.",
    source: "Filipenses 4:6",
  },
  {
    text: "Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones.",
    source: "Filipenses 4:7",
  },
  {
    text: "Bueno es Jehová para con los que en él esperan, para el alma que le busca.",
    source: "Lamentaciones 3:25",
  },
  {
    text: "Reconócelo en todos tus caminos, y él enderezará tus veredas.",
    source: "Proverbios 3:6",
  },
  {
    text: "Lámpara es a mis pies tu palabra, y lumbre a mi camino.",
    source: "Salmos 119:105",
  },
  {
    text: "En el corazón he guardado tus dichos, para no pecar contra ti.",
    source: "Salmos 119:11",
  },
  {
    text: "Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera.",
    source: "Isaías 26:3",
  },
  {
    text: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
    source: "Mateo 11:28",
  },
  {
    text: "El que habita al amparo del Altísimo morará a la sombra del Omnipotente.",
    source: "Salmos 91:1",
  },
  {
    text: "Diré yo a Jehová: Esperanza mía, y castillo mío; mi Dios, en quien confiaré.",
    source: "Salmos 91:2",
  },
  {
    text: "Él te librará del lazo del cazador, de la peste destructora.",
    source: "Salmos 91:3",
  },
  {
    text: "Con sus plumas te cubrirá, y debajo de sus alas estarás seguro.",
    source: "Salmos 91:4",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 31:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 1:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 33:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 3:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 35:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 5:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 37:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 7:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 39:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 9:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 41:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 11:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 43:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 13:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 45:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 15:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 47:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 17:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 49:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 19:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 51:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 21:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 53:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 23:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 55:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 25:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 57:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 27:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 59:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 29:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 61:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 31:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 63:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 2:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 65:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 4:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 67:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 6:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 69:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 8:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 71:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 10:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 73:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 12:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 75:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 14:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 77:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 16:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 79:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 18:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 81:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 20:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 83:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 22:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 85:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 24:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 87:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 26:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 89:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 28:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 91:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 30:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 93:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 1:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 95:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 3:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 97:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 5:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 99:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 7:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 101:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 9:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 103:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 11:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 105:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 13:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 107:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 15:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 109:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 17:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 111:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 19:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 113:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 21:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 115:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 23:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 117:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 25:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 119:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 27:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 121:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 29:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 123:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 31:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 125:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 2:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 127:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 4:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 129:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 6:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 131:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 8:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 133:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 10:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 135:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 12:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 137:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 14:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 139:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 16:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 141:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 18:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 143:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 20:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 145:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 22:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 147:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 24:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 149:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 26:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 1:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 28:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 3:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 30:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 5:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 1:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 7:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 3:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 9:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 5:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 11:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 7:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 13:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 9:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 15:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 11:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 17:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 13:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 19:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 15:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 21:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 17:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 23:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 19:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 25:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 21:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 27:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 23:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 29:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 25:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 31:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 27:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 33:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 29:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 35:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 31:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 37:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 2:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 39:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 4:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 41:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 6:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 43:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 8:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 45:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 10:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 47:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 12:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 49:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 14:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 51:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 16:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 53:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 18:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 55:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 20:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 57:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 22:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 59:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 24:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 61:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 26:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 63:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 28:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 65:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 30:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 67:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 1:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 69:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 3:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 71:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 5:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 73:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 7:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 75:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 9:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 77:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 11:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 79:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 13:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 81:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 15:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 83:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 17:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 85:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 19:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 87:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 21:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 89:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 23:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 91:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 25:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 93:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 27:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 95:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 29:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 97:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 31:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 99:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 2:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 101:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 4:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 103:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 6:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 105:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 8:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 107:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 10:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 109:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 12:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 111:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 14:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 113:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 16:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 115:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 18:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 117:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 20:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 119:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 22:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 121:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 24:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 123:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 26:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 125:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 28:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 127:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 30:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 129:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 1:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 131:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 3:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 133:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 5:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 135:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 7:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 137:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 9:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 139:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 11:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 141:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 13:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 143:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 15:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 145:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 17:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 147:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 19:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 149:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 21:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 1:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 23:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 3:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 25:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 5:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 27:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 7:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 29:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 9:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 31:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 11:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 2:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 13:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 4:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 15:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 6:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 17:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 8:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 19:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 10:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 21:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 12:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 23:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 14:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 25:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 16:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 27:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 18:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 29:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 20:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 31:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 22:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 33:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 24:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 35:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 26:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 37:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 28:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 39:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 30:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 41:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 1:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 43:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 3:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 45:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 5:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 47:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 7:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 49:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 9:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 51:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 11:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 53:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 13:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 55:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 15:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 57:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 17:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 59:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 19:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 61:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 21:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 63:1",
  },
  {
    text: "Hijo mío, atiende a mis palabras; inclina tu oído a mis razones para caminar con sabiduría.",
    source: "Proverbios 23:1",
  },
  {
    text: "Alabaré a Jehová con todo mi corazón; contaré todas tus maravillas en este día especial.",
    source: "Salmos 65:1",
  },
];
