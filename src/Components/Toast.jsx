import { Snackbar } from "@mui/joy";


export const Toast = ({ showToast, setShowToast, message, color='success' }) => {
    return (
        <Snackbar
            color={color}
            variant="soft"
            autoHideDuration={5000}
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
