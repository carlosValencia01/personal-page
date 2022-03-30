import { useState } from "react";
import html2canvas from "html2canvas";
import "./style.css";
import aliens from "../../../../assets/memes/aliens.jpg";
import fire from "../../../../assets/memes/fire.jpg";
import futurama from "../../../../assets/memes/futurama.jpg";
import matrix from "../../../../assets/memes/matrix.jpg";
import philosoraptor from "../../../../assets/memes/philosoraptor.jpg";
import smart from "../../../../assets/memes/smart.jpg";
import frog from "../../../../assets/memes/frog.jpg";

export const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [image, setImage] = useState("");

  const onChangeImage = (e) => {
    setImage(e.target.value);
  };

  const handleTopTextChange = (e) => {
    setTopText(e.target.value);
  };

  const handleBottomTextChange = (e) => {
    setBottomText(e.target.value);
  };

  const onClickExport = async () => {
    if (image === "") {
      alert("Seleccione una plantilla");
    } else {
      const canvas = await html2canvas(document.querySelector("#meme"));
      const img = canvas.toDataURL("image/png", 1.0);
      // download the image
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    }
  };

  return (
    <div className="myBody">
      <h1 className="mt-3 mb-5">
        <strong>MemeGenerator</strong>
      </h1>
      <div className="form">
        <select
          onChange={onChangeImage}
          className="form-select form-select-lg mb-3 mt-4"
        >
          <option hidden defaultValue="">
            Seleccione una plantilla
          </option>
          <option value={smart}>Smart Guy</option>
          <option value={frog}>Sad frog</option>
          <option value={philosoraptor}>Philosoraptor</option>
          <option value={matrix}>Matrix</option>
          <option value={aliens}>Aliens</option>
          <option value={futurama}>Futurama</option>
          <option value={fire}>Casa en llamas</option>
        </select>

        <input
          className="form-control"
          type="text"
          placeholder="Top text"
          name="topText"
          autoComplete="off"
          value={topText}
          onChange={handleTopTextChange}
        />

        <input
          className="form-control mt-3"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          autoComplete="off"
          value={bottomText}
          onChange={handleBottomTextChange}
        />

        <button
          onClick={onClickExport}
          className="btn btn-primary btn-lg mt-3 mb-3"
        >
          Exportar Imagen
        </button>
      </div>

      <div className="meme" id="meme">
        {image !== "" && (
          <>
            <img src={`${image}`} alt="meme" />
            <span className="topText">{topText}</span>
            <span className="bottomText">{bottomText}</span>
            <p className="watter-mark">
              https://carlosvalencia-dev.netlify.app/apps/meme-generator
            </p>
          </>
        )}
      </div>
    </div>
  );
};
