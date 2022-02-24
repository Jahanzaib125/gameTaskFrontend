export default function checkGameOver(playerAttr, enemyAttr, setGameOver) {
  const playerTopPostion = playerAttr[0].offsetTop;
  const playerLeftPosition = playerAttr[0].offsetLeft;

  for (let i = 0; i < enemyAttr.length; i++) {
    if (
      playerLeftPosition < enemyAttr[i].offsetLeft + 25 &&
      playerLeftPosition > enemyAttr[i].offsetLeft - 25 &&
      playerTopPostion < enemyAttr[i].offsetTop + 25 &&
      playerTopPostion > enemyAttr[i].offsetTop - 25
    ) {
      setGameOver(true);
    }
  }
}
