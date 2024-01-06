import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Documento_Grafico = () => {
  useEffect(() => {
    if (typeof window.width !== "undefined") {
      document.getElementById("descargar_pdf").click();
      window.close();
    }
  }, []);

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <object
        data={require("../assets/Docs/FCF0000000003.pdf")}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <br />
        <a
          href={require("../assets/Docs/FCF0000000003.pdf")}
          id="descargar_pdf"
          download="FCF0000000003.pdf"
        >
          <div className="btn-descarga">
          <Button 
            variant="success"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
          >
            {isLoading ? "Descargando…" : "Descargar"}
          </Button>
          </div>
        </a>
      </object>
    </div>
  );
};

export default Documento_Grafico;
