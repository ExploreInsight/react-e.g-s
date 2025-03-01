import React, { useRef, useState } from 'react';
import './Qr.css';
import QRCode from 'react-qr-code';

function Qr() {
    const [qrCode, setQrCode] = useState('');
    const [isInputEmpty, setIsInputEmpty] = useState(true);
    const inputRef = useRef(null); // Reference for input field

    const handleInputChange = () => {
        setIsInputEmpty(!inputRef.current.value.trim());
    };

    const randomGenerator = (e) => {
        e.preventDefault();
        let text = inputRef.current.value.trim(); // Get and trim input value

        if (!text) {
            alert('Please Enter Something');
            return;
        }

        setQrCode(text);
        inputRef.current.value = ''; // Clear input field
        setIsInputEmpty(true); // Disable button after submission
    };

    return (
        <>
            <h1>QR Generator</h1>
            <form onSubmit={randomGenerator}>
                <input 
                    type="text" 
                    placeholder="Enter something" 
                    ref={inputRef} // Attach ref to input
                    onChange={handleInputChange} // Track changes
                />
                <button type="submit" disabled={isInputEmpty}>Generate QR Code</button>
            </form>
            {qrCode && <QRCode id="random-Qr-Generator" value={qrCode} size={300} />}
        </>
    );
}

export default Qr;
