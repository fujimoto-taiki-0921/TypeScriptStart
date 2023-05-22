export const Plactice3 = () => {
  const getcalcTotalFee = (num: number) => {
    const total = num * 1.1;
    return total;
  };
  const onClickPlactice = () => {
    let total: number = 0;
    total = getcalcTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>変数の型指定</p>
      <button onClick={onClickPlactice}>練習問題３を実行</button>
    </div>
  );
};
