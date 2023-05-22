export const Plactice4 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPlactice = () => calcTotalFee(1000);
  return (
    <div>
      <p>設定ファイルを触ってみる</p>
      <button onClick={onClickPlactice}>練習問題４を実行</button>
    </div>
  );
};
