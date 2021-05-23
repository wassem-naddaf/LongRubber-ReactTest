import React, { useState } from 'react';

import './otp-input.scss';

export default function OTPInput(props) {
    const [verifyCode, setVerifyCode] = useState([]);
    function setCode(idx, val) {
        verifyCode[idx] = val;
        setVerifyCode(verifyCode);
        let stringCode = verifyCode[0] + verifyCode[1] + verifyCode[2] + verifyCode[3];
        props.valueCallback(stringCode);
    }
    return (
        <div className="otp-input">
            <input maxLength="1" value={verifyCode[0]} onChange={e => setCode(0, e.target.value)} />
            <input maxLength="1" value={verifyCode[1]} onChange={e => setCode(1, e.target.value)} />
            <input maxLength="1" value={verifyCode[2]} onChange={e => setCode(2, e.target.value)} />
            <input maxLength="1" value={verifyCode[3]} onChange={e => setCode(3, e.target.value)} />
        </div>
    )
}
