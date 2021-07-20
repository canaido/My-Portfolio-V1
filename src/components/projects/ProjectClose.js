import React, { useState } from 'react';

const ProjectClose = () => {
    const [active, setActive] = useState("");

    return (
        <div>
            <button
                onClick={() => setActive("")}
                className="text-white text-lg "
            >
                Close Project
            </button>
        </div>
    )
}

export default ProjectClose
