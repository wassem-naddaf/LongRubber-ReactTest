
import googleLogo from './../assets/images/logo-google.png';
import facebookLogo from './../assets/images/logo-facebook.png';

export default function ThirdPartySign() {
    const doNothing = () => { };

    return (
        <div style={styles.thirdPartyLoginContainer}>
            <button onClick={doNothing} style={styles.button}>
                <img src={facebookLogo} width="30" />
                <span style={styles.span}>Continue with Facebook</span>
            </button>
            <button className="mt-md" onClick={doNothing} style={styles.button}>
                <img src={googleLogo} width="30" />
                <span style={styles.span}>Continue with Google</span>
            </button>
        </div>
    )
}
const styles = {
    thirdPartyLoginContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '350px'
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        border: '2px solid #e2e2e2',
        borderRadius: '29px',
        padding: '10px 20px',
        marginTop: '10px'
    },
    span: {
        width: '100%',
        fontSize: '18px'
    }
}