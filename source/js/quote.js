/* eslint-disable */

const QUOTES = [
  {
    quote: 'То, что отнимает жизнь, возвращает музыка.',
    author: 'Г. Гейне',
  },
  {
    quote: 'В музыке есть прекрасная вещь — когда она попадает в тебя, ты не чувствуешь боли.',
    author: 'Боб Марли',
  },
  {
    quote: 'Всё можно пережить, если подобрать нужную музыку к ней.',
    author: 'Курт Кобейн',
  },
  {
    quote: 'Всё, что отнимает жизнь, возвращает музыка.',
    author: 'Джон Леннон',
  },
  {
    quote: 'Когда заканчиваются слова, начинается музыка.',
    author: 'Жан Кокто',
  },
  {
    quote: 'Музыка может изменить мир, поскольку она способна изменить людей.',
    author: 'Боно',
  },
  {
    quote: 'Музыка должна высекать огонь из людских сердец.',
    author: 'Людвиг Ван Бетховен',
  },
  {
    quote: 'Жизнь, как красивая мелодия, только песни перепутались.',
    author: 'Ганс К. Андерсен',
  },
  {
    quote: 'Когда нельзя что-то выразить речью, обычными словами, на помощь приходит музыка.',
    author: 'Э. Гофман',
  },
  {
    quote: 'Когда я смотрю новости, я понимаю: миром правят те, кто никогда не слушает музыку.',
    author: 'Боб Дилан',
  },
  {
    quote: 'Музыка — это катализатор и материя эмоций.',
    author: 'Тайлер Джозеф',
  },
  {
    quote: 'Музыка — это моя религия. ',
    author: 'Джими Хендрикс',
  },
  {
    quote: 'Музыка – это не только важная часть моей жизни… это моя жизнь! ',
    author: 'Джаред Д. Лето',
  },
  {
    quote: 'Нет занятия более неблагодарного, чем словами описывать музыку. ',
    author: 'Макс Фрай',
  },
  {
    quote: 'Я считаю, что мода и музыка объединены вечным союзом, они всегда вместе.',
    author: 'Леди Гага',
  },
];

const getRandomInteger = (min = 0, max = 1) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const quote = document.querySelector('.quote__text');
const author = document.querySelector('.quote__author');

const randomQuote = getRandomInteger(0, QUOTES.length - 1);
quote.textContent = QUOTES[randomQuote].quote;
author.textContent = QUOTES[randomQuote].author;
