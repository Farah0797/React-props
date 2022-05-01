function Bioagraphie({ bio }) {
    return (
        <div style={{ fontFamily: "monospace", fontSize: "20px", color:"#000", }}>
            {bio.quote} <br/>
        </div>
    );
}

export default Bioagraphie;