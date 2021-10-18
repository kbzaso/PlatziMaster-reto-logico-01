function findLongestWord(paragraph) {
  const array = paragraph.split(' ');
  var letterCount = 0;
  var word = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > letterCount) {
      letterCount = array[i].length;
      word = array[i];
    }
  }
  console.log(
    `La palabra más larga es ${word}, que tiene ${letterCount} letras`
  );
}

findLongestWord(
  "Gnaw the corn cob meowing chowing and wowing but why dog in house? i'm the sole ruler of this home and its inhabitants smelly, stupid dogs, inferior furballs time for night-hunt, human freakout, so play with twist ties chase laser or cat ass trophy for relentlessly pursues moth. Stare at ceiling slap owner's face at 5am until human fills food dish get scared by doggo also cucumerro make meme, make cute face or need to chase tail. Chase red laser dot climb leg, or fight an alligator and win rub face on owner swipe at owner's legs yet eat a plant, kill a hand. Chew master's slippers friends are not food where is my slave? I'm getting hungry but kick up litter for who's the baby floof tum, tickle bum, jellybean footies curly toes. Refuse to drink water except out of someone's glass walk on a keyboard blow up sofa in 3 seconds. Sleep."
);
