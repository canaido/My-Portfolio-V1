import React from 'react'

for (let i = 0; i <= 100; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    document.querySelector('.colorCard').appendChild(colorBox);
}

//<h3>{RandomHexColorCode}</h3>
const ColorCard = ({ RandomHexColorCode }) => {
    return (
        <div className="w-1/5 w-36 border-black flex">
            <div
                className="colorCard w-1/5 w-36 border-black flex"
                style={{ background: { RandomHexColorCode }, }}
            >
            
            </div>
        </div>
    )
}

export default ColorCard
