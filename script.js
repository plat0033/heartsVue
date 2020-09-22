/**********************************************
 * STARTER CODE
 **********************************************/

/**
 * shuffle()
 * Shuffle the contents of an array
 *   depending the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */
function shuffle (src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  if (typeof src === 'string') {
    return copy.join('')
  }

  return copy
}

const suits = ['clubs', 'diamonds', 'hearts', 'spades']
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

const game = {
  //using the same dec variable to shuffled and be updated by the @click so the hand of a player can be showed
  deck: [],
  players: {
    'Player 1': [],
    'Player 2': [],
    'Player 3': [],
    'Player 4': []
  },
  //a property to know what player is
  jugador: ''
  
}


/**********************************************
 * YOUR CODE BELOW
 **********************************************/

 //1. build deck and deal out cards
 
 /*
 const hand = []

 for (const suit of suits){
   for (const rank of ranks) {
     hand.push({
       suit,
       rank
     })
   }
 }
 
 game.deck = shuffle(hand)
 
 for (let i =0; i<13; i++ ){
   game.players["Player 1"].push(game.deck.pop()) //instead of using 'for', you can use the 'slice' mehod i.e. deck.slice(0,13)
   game.players["Player 2"].push(game.deck.pop()) 
   game.players["Player 3"].push(game.deck.pop())
   game.players["Player 4"].push(game.deck.pop())
 }
*/
const cards =[]

for ( const suit of suits ){
  for (const rank of ranks){ 
    cards.push({ 
      suit,
      rank
    })
  }
}
game.deck=shuffle(cards)

for(let i = 0; i < game.deck.length;i++){
  game.players['Player 1'].push(game.deck[i])
  game.players['Player 2'].push(game.deck[++i])
  game.players['Player 3'].push(game.deck[++i])
  game.players['Player 4'].push(game.deck[++i])
}
 //2. then create the Vue intance
 //

 const app = new Vue ({
  el: '#app',
  data: {
    game
  }

});