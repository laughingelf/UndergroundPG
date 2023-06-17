

function SawyerLetters() {

    const handleLetterClick = (letter) => {
        console.log('Letter', letter)
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




    )
}

export default SawyerLetters