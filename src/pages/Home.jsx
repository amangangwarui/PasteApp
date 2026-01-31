import PasteEditor from "../components/PasteEditor";
import PasteList from "../components/PasteList";

const Home = ({ pastes, addPaste, deletePaste }) => {
  return (
    <div className="container">
      <PasteEditor addPaste={addPaste} />

      <div className="section">
        <PasteList pastes={pastes} deletePaste={deletePaste} />
      </div>
    </div>
  );
};

export default Home;
