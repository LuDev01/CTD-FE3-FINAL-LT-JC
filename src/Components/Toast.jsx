import { Snackbar } from "@mui/joy";


export const Toast = ({ showToast, setShowToast, message, color='success' }) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}    
            color={color}
            variant="soft"
            autoHideDuration={6000}
            open={showToast}
            size='lg'
            onClose={(event, reason) => {
                if (reason === 'clickaway') {
                    return;
                }
                setShowToast("");
            }}
        >
            {message}
        </Snackbar>

    )
}
