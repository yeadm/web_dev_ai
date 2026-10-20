//기존 header에 해당하는 태그들만
const Header = () => {
  return (
    <>
      <header>
        <div className="header-left">
          <button
            type="button"
            className="menu-toggle"
            id="menuToggle"
            aria-label="메뉴 열기"
            aria-expanded="false"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
          <a href="./index.html" className="logo">
            정비노트
          </a>
          <nav id="navMenu">
            <a href="./index.html" className="active">
              대시보드
            </a>
            <a href="./vehicle-management.html">차량관리</a>
            <a href="./maintenance-history.html">정비 이력</a>
            <a href="./customer-consultation.html">고객 상담</a>
          </nav>
        </div>
        <div className="header-right">
          <div className="no-profile">김</div>
          <span className="user-name">김정비 사장님</span>
        </div>
      </header>
      <div className="menu-overlay" id="menuOverlay"></div>
    </>
  );
};
export default Header;
