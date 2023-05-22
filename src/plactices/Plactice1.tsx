export const Plactice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPlactice = () => calcTotalFee(1000);
  return (
    <div>
      <p>引数の型指定</p>
      <button onClick={onClickPlactice}>練習問題一を実行</button>
    </div>
  );
};
