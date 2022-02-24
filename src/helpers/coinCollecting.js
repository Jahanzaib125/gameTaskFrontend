export default function coinCollecting(playerAttr, coinAttr, SetCoins) {
  const playerTopPostion = playerAttr[0].offsetTop;
  const playerLeftPosition = playerAttr[0].offsetLeft;

  for (let i = 0; i < coinAttr.length; i++) {
    if (
      playerLeftPosition < coinAttr[i].offsetLeft + 25 &&
      playerLeftPosition > coinAttr[i].offsetLeft - 25 &&
      playerTopPostion < coinAttr[i].offsetTop + 25 &&
      playerTopPostion > coinAttr[i].offsetTop - 25
    ) {
      coinAttr[i].className = '';

      SetCoins((a) => a + 1);
    }
  }
}
