import React from 'react';
//import ColorCard from './ColorCard';

    //const [background, setBackground] = useState([]);

    const RandomHexColorCode = () => {
        const chars = "0123456789abcdef";
        const colorLength = 6;
        let color = "";

        for (let i = 0; i < colorLength; i++) {
            let randomColor = Math.floor(Math.random() * chars.length);
            color += chars.substring(randomColor, randomColor + 1);
        }
        return "#" + color;
    }
    console.log(RandomHexColorCode());
    let backgroundColor = RandomHexColorCode();
    console.log(backgroundColor);

    /* const addColor = () => {
        ColorCard.map((RandomHexColorCode) => {
            let newColor = RandomHexColorCode();
        })
    } */

const ColorPalette = () => {
    return (
        <div className="mx-auto bg-yellow-200">
            <div className="container mx-auto bg-green-500">
                <div className="container py-4 px-4 flex justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btn"
                        onClick={''}
                    >
                        Refresh
                    </button>
                </div>
                <div className="container flex flex-row flex-wrap">
                    
                </div>
            </div>
        </div>
    )
}

export default ColorPalette
