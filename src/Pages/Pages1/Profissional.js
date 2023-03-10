/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Grid from "@mui/material/Grid";
import { Card, Container } from "@mui/material";

/**imagens */
import desktopagina from "../../assets/imagens/desktopagina.png";

import "../Pages1/profissionl.css";
import Formulario from "../../components/Formulario";

export default function Profissional() {
  return (
    <>
      <Container maxWidth="md">
        <Card className="dados_profissional">
          <Grid>
            <Grid sm={12} md={12} lg={12} xs={12}>
              <h1>Sobre o profissional</h1>
              <h4>Dados do profissional</h4>
              <Grid container>
                <Grid sm={5}>
                  <div className="dados_profissional-form">
                    <Formulario />
                  </div>
                </Grid>

                <Grid sm={7}>
                  <div className="dados_profissional-img">
                    <img src={desktopagina} width={480} />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
}
