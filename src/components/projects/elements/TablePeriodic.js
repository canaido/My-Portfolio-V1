import React from 'react'
import data from "../../../ElementsLookUp.json"
import { Alert } from 'react-st-modal';

const colorMap = {
    "noble gas": "#c1feff",
    "alkaline earth metal": "#fedead",
    "polyatomic nonmetal": "#FFB5B5",
    "diatomic nonmetal": "#f1ff90",
    "alkali metal": "#ff6666",
    "transition metal": "#ffc0bf",
    "post-transition metal": "#cccccc",
    lanthanide: "#ffbffe",
    metalloid: "#cccc9a",
    "unknown, probably transition metal": "#e8e8e8",
    "unknown, probably post-transition metal": "#e8e8e8",
    "unknown, probably metalloid": "#e8e8e8",
    "unknown, predicted to be noble gas": "#e8e8e8",
    "unknown, but predicted to be an alkali metal": "#e8e8e8",
    "actinide": "#ff99cb ",
}



const TablePeriodic = () => {

    return (
        <div className="">
            <div
                className="periodic-table flex text-center h-auto 
                grid grid-rows-6 gap-0.5 
                max-w-full"
            >
                {data.elements.map((element) =>
                    <button
                        key={element.name}
                        className="text-lg block"
                        style={{
                            gridColumn: element.xpos,
                            gridRow: element.ypos,
                            backgroundColor: colorMap[element.category],
                        }}
                        onClick={async () => {
                            await Alert(
                                `Summary: ${element.summary}`,
                                `Element: ${element.name}`,
                            );
                        }}
                    >
                        <small
                            className="text-xs align-top text-right block font-bold"
                        >
                            {element.number}
                        </small>
                        <strong>
                            {element.symbol}
                        </strong>
                        <small
                            className="hidden xl:block text-xs align-text-bottom text-left  font-light"
                        >
                            {element.name}
                        </small>
                    </button>
                )}
            </div>
            <div className="px-2 py-8">
                <ul className="text-black flex flex-wrap justify-evenly inline-block capitalize text-xl font-bold">
                    <li
                        className="px-2.5 py-2"
                        style={{
                            backgroundColor: "#c1feff",
                        }}
                    >Noble Gas</li>
                    <li
                        className="px-2.5 py-2"
                        style={{
                            backgroundColor: "#fedead",
                        }}>alkaline earth metal</li>
                    <li
                        className="px-2.5 py-2"
                        style={{
                            backgroundColor: "#FFB5B5",
                        }}>polyatomic nonmetal</li>
                    <li
                        className="px-2.5 py-2"
                        style={{
                            backgroundColor: "#f1ff90",
                        }}>Diatomic nonmetal</li>
                    <li
                        className="px-2.5 py-2"
                        style={{
                            backgroundColor: "#ff6666",
                        }}>Alkali Metal</li>
                    <li
                        className="px-2.5 py-2"
                        style={{
                            backgroundColor: "#ffc0bf",
                        }}>transition metal</li>
                    <li
                        className="px-2.5 py-2"
                        style={{
                            backgroundColor: "#cccccc",
                        }}>Post-transition Metal</li>
                    <li
                        className="px-2.5 py-2"
                        style={{
                            backgroundColor: "#cccc9a",
                        }}>metalloid</li>
                    <li
                        className="px-2.5 py-2"
                        style={{
                            backgroundColor: "#e8e8e8",
                        }}>unknown type</li>
                    <li
                        className="px-2.5 py-2"
                        style={{
                            backgroundColor: "#ffbffe",
                        }}>lanthanide</li>
                    <li
                        className="px-2.5 py-2"
                        style={{
                            backgroundColor: "#ff99cb",
                        }}>actinide</li>
                </ul>
            </div>
        </div>
    )
}

export default TablePeriodic
