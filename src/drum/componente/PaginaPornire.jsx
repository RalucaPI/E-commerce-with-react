import { useProgress } from "@react-three/drei";
import { usePlay } from "../context/Play";
import { Link } from 'react-router-dom';
export const PaginaPornire = () => {
  const { progress } = useProgress();
  const { play, setPlay, hasScroll } = usePlay();
   const handleLogoClick = () => {
    closeMobileMenu();
    if (location.pathname !== '/acasă') {
      window.location.href = '/acasă';
    }
  };

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">PawZone🐾</h1>
          <p className="intro__scroll">Derulati pentru a incepe</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Incepeti
          </button>
          <Link to='/acasă' onClick={handleLogoClick} >
            <button className="acasa"  onClick={handleLogoClick}> Acasa
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
