export const Plactice2 = () => {
  const getcalcTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPlactice = () => {
    console.log(getcalcTotalFee());
  };
  return (
    <div>
      <p>返却時の型指定</p>
      <button onClick={onClickPlactice}>練習問題２を実行</button>
    </div>
  );
};
