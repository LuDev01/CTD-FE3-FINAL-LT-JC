
import { Button } from "@mui/joy"
import styles from "../styles/error404.module.css"
import { routes } from "../utils/routes"
import { useNavigate } from "react-router-dom";

const Error404 = () => {

  const navigate = useNavigate();
  
  return (
    <>
      <div className={styles["maincontainer"]} >
        <div className={styles["bat"]}>
          <img className={[styles["wing"], styles["leftwing"]]}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png" />
          <img className={styles["body"]}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-body.png" alt="bat" />
          <img className={[styles["wing"], styles["rightwing"]]}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png" />
        </div>
        <div className={styles["bat"]}>
          <img className={[styles["wing"], styles["leftwing"]]}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png" />
          <img className={styles["body"]}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-body.png" alt="bat" />
          <img className={[styles["wing"], styles["rightwing"]]}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png" />
        </div>
        <div className={styles["bat"]} >
          <img className={[styles["wing"], styles["leftwing"]]}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png" />
          <img className={styles["body"]}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-body.png" alt="bat" />
          <img className={[styles["wing"], styles["rightwing"]]}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png" />
        </div>
        <img className={styles["foregroundimg"]}
          src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/HauntedHouseForeground.png" alt="haunted house" />
      </div>
      <h1 className={styles["errorcode"]} >ERROR 404</h1>
      <div className={styles["errortext"]} >Página no encontrada</div>
      
      <Button variant="outlined" sx={{ marginTop: '-180px' }} onClick={() => navigate(routes.home)}  >Regresar</Button>
      
    </>
  )
}

export default Error404
