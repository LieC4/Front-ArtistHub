

const Button = () => {
    const [showAbout, setShowAbout] = useState(true);
    return (
<div className='divbutton'>
<button onClick={() => setShowAbout(true)} className='-'></button>
<button onClick={() => setShowAbout(false)} className='-'></button>
</div>

)};

export default Button;