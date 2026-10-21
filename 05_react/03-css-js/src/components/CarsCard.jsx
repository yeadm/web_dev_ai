/*
tailwindcss
1. npm i tailwindcss @tailwindcss/vite
2.vite.config.js에 tailwinds 관련 코드 추가
3. tailwind.css 추가
4.mainjsx에 tailwind.css import!

*/

//props : 부모(Cars)가 넘겨 주는 값
//카드마다 다른 부분만 props로 받고 모양은 그대로

const CarsCard = ({
  plate,
  fuel,
  name,
  year,
  serviceCount,
  lastDate,
  lastItem,
}) => {
  return (
    // background-color: var(--card-bg)
    // border: 1px solid var(--border)->border
    // border-radius: 14px
    // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02)
    // min-width: 0
    // padding: 16px

    <div className="bg-[var(--card-bg)] 
    border border-[var(--border)] 
    rounded-[14px] 
    shdow{0_1px_3px_rgb(0,0,0,0.02)}]">
      <div className="card-header">
        <span className="plate">{plate}</span>
        <span className="fuel-type">{fuel}</span>
      </div>
      <div className="card-body">
        <p className="car-name">{name}</p>
        <p>
          <span className="car-year">{year}</span>
          <span className="service-count">{serviceCount}</span>
        </p>
      </div>
      <div className="card-footer">
        마지막 정비 <span className="last-service-date">{lastDate}</span>
        <span className="last-service-item">{lastItem}</span>
      </div>
    </div>
  );
};
export default CarsCard;
