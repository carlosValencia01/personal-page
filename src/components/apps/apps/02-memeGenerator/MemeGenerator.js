import { useState } from "react";
import html2canvas from "html2canvas";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, Typography } from "@mui/material";
import { Select } from "@mui/material";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

import "./style.css";
import aliens from "../../../../assets/memes/aliens.jpg";
import fire from "../../../../assets/memes/fire.jpg";
import futurama from "../../../../assets/memes/futurama.jpg";
import matrix from "../../../../assets/memes/matrix.jpg";
import philosoraptor from "../../../../assets/memes/philosoraptor.jpg";
import smart from "../../../../assets/memes/smart.jpg";
import frog from "../../../../assets/memes/frog.jpg";
//

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
    <>
      <div className="myBody">
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          className="mt-5 mb-5"
        >
          Meme Generator
        </Typography>
        <div className="form">
          <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} className="mt-3">
            <Select
              value={image}
              onChange={onChangeImage}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={smart}>Smart Guy</MenuItem>
              <MenuItem value={frog}>Sad frog</MenuItem>
              <MenuItem value={philosoraptor}>Philosoraptor</MenuItem>
              <MenuItem value={matrix}>Matrix</MenuItem>
              <MenuItem value={aliens}>Aliens</MenuItem>
              <MenuItem value={futurama}>Futurama</MenuItem>
              <MenuItem value={fire}>Casa en llamas</MenuItem>
            </Select>
          </FormControl>

          <TextField
            className="textField mt-4"
            label="Top Text"
            type="text"
            variant="standard"
            name="topText"
            onChange={handleTopTextChange}
          />
          <br />

          <TextField
            className="textField mt-4"
            label="Bottom Text"
            type="text"
            variant="standard"
            name="bottomText"
            onChange={handleBottomTextChange}
          />
          <br />

          <Button
            variant="outlined"
            onClick={onClickExport}
            className="mt-5 mb-3 pt-3 pb-2 ps-5 pe-5"
          >
            Exportar Imagen
          </Button>
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
    </>
  );
};
