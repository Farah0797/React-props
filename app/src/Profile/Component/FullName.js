function Name({ fullName }) {
    return (
        <div>
        <div style={{ fontFamily:"serif", fontSize:"35px", margin:'40px', marginBottom:'4%'}}>
            {fullName.nom}  {fullName.prenom}
        </div>
        </div>
    )
}

export default Name;