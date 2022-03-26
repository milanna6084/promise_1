// TODO: write your code here
import GameSavingLoader from './gameSavingLoader';
import GameSaving from './gameSaving';

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  const newSaving = new GameSaving(saving);
  console.log(newSaving);
}, (error) => {
  console.error(error.message);
});
