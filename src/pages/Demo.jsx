import React from "react";

const Demo = () => {
    const handler = async () => {
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: "testing name 222",
            }),
            credentials: "include",
        };
        try {
            const response = await fetch(
                "http://localhost:1111/api/v1/user",
                options
            );

            const data = await response.json();

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            this is demo page
            <button onClick={handler}>click</button>
        </div>
    );
};

export default Demo;
