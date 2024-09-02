
export default function NavBar({ handlePrevious, handleNext }) {
    return (
        <div>
            <button onClick={handlePrevious}>Précédent</button>
            <button onClick={handleNext}>Suivant</button>
        </div>
    );
}
