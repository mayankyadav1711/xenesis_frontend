import React, { useEffect, useState } from 'react';
// import style from './countup.module.css';

const AnimatedAlpha = ({ requiredAlphabets }) => {
    const [displayedAlphabets, setDisplayedAlphabets] = useState([]);

    useEffect(() => {
        const animationFrames = [];
        setDisplayedAlphabets(requiredAlphabets.map(() => ''));

        const animateAlphabet = (index) => {
            animationFrames[index] = requestAnimationFrame(() => {
                setDisplayedAlphabets((prevAlphabets) => {
                    const currentCharCode = prevAlphabets[index] ? prevAlphabets[index].charCodeAt(0) : 'A'.charCodeAt(0);
                    const targetCharCode = requiredAlphabets[index].charCodeAt(0);

                    const nextAlphabet =
                        currentCharCode < targetCharCode ? String.fromCharCode(currentCharCode + 1) : requiredAlphabets[index];

                    return Object.assign([...prevAlphabets], { [index]: nextAlphabet });
                });

                if (displayedAlphabets[index] !== requiredAlphabets[index]) {
                    animateAlphabet(index);
                }
            });
        };

        requiredAlphabets.forEach((_, index) => {
            setTimeout(() => {
                animateAlphabet(index);
            }, (index + 1) * 100);
        });

        return () => {
            animationFrames.forEach((id) => cancelAnimationFrame(id));
        };
    }, [requiredAlphabets]);

    return (
        <div className="text-center">
            {displayedAlphabets.map((alphabet, index) => (
                <p key={index} className="text-heading2 font-bold mx-2 inline-block">
                    {alphabet}
                </p>
            ))}
        </div>
    );
};

export default AnimatedAlpha;
