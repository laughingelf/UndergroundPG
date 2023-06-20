import { useState } from "react"

function SawyerLetters() {

    const [functions, setFunctions] = useState(1)

    const alphabetFree = [
        { A: '../sounds/phonic-a.mp3' },
        { B: '../sounds/phonic-b.mp3' },
        { C: '../sounds/phonic-c.mp3' },
        { D: '../sounds/phonic-d.mp3' },
        { E: '../sounds/phonic-d.mp3' },
        { F: '../sounds/phonic-f.mp3' },
        { G: '../sounds/phonic-g.mp3' },
        { H: '../sounds/phonic-h.mp3' },
        { I: '../sounds/phonic-i.mp3' },
        { J: '../sounds/phonic-j.mp3' },
        { K: '../sounds/phonic-k.mp3' },
        { L: '../sounds/phonic-l.mp3' },
        { M: '../sounds/phonic-m.mp3' },
        { N: '../sounds/phonic-n.mp3' },
        { O: '../sounds/phonic-o.mp3' },
        { P: '../sounds/phonic-p.mp3' },
        { Q: '../sounds/phonic-q.mp3' },
        { R: '../sounds/phonic-r.mp3' },
        { S: '../sounds/phonic-s.mp3' },
        { T: '../sounds/phonic-t.mp3' },
        { U: '../sounds/phonic-u.mp3' },
        { V: '../sounds/phonic-v.mp3' },
        { W: '../sounds/phonic-w.mp3' },
        { X: '../sounds/phonic-x.mp3' },
        { Y: '../sounds/phonic-y.mp3' },
        { Z: '../sounds/phonic-z.mp3' }
    ]

    const alphabetSound = [
        { A: '../sounds/a.mp3' },
        { B: '../sounds/b.mp3' },
        { C: '../sounds/c.mp3' },
        { D: '../sounds/d.mp3' },
        { E: '../sounds/e.mp3' },
        { F: '../sounds/f.mp3' },
        { G: '../sounds/g.mp3' }
    ]

    const handleFunctions = (e) => {
        console.log('handling', e.target.value)
        switch (e.target.value) {
            case 'free':
                setFunctions(1)
                break;
            case 'sound':
                setFunctions(2)
                break;
            case 'match':
                setFunctions(3)
                break;
        }
    }

    const handleLetterClick = (letter) => {
        if (functions === 1) {
            alphabetFree.forEach((x) => {
                const key = Object.keys(x)
                const value = Object.values(x)
                if (key == letter) {
                    let soundClip = new Audio(value)
                    soundClip.play()
                    return
                }
            })
        } else if (functions === 2) {
            console.log('setting to sounds')
            alphabetSound.forEach((x) => {
                const key = Object.keys(x)
                const value = Object.values(x)
                if (key == letter) {
                    let soundClip = new Audio(value)
                    soundClip.play()
                    return
                }
            })
        } else if (functions === 3) {
            console.log('setting to matching')
        }
    }

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <>

            <div className="flex justify-center mt-8">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg py-2 px-6 rounded border border-black shadow-xl" value='free' onClick={handleFunctions}>
                    Free Learn
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-2 px-6 rounded mx-4 border border-black shadow-xl" value='sound' onClick={handleFunctions}>
                    Letter Sounds
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600text-white font-bold text-lg py-2 px-6 rounded border border-black shadow-xl" value='match' onClick={handleFunctions}>
                    Matching
                </button>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-8 ml-5 mr-5">
                {Array.from(Array(26), (_, index) => (
                    <button
                        className="p-4 rounded-lg text-white font-bold border border-black shadow-xl"
                        key={index}
                        onClick={() => handleLetterClick(String.fromCharCode(65 + index))}
                        style={{ backgroundColor: getRandomColor() }}
                    >
                        {String.fromCharCode(65 + index)} {String.fromCharCode(97 + index)}
                    </button>
                ))}
            </div>
        </>




    )
}

export default SawyerLetters