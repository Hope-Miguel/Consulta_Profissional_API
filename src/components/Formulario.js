import { Button, Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

export default function Formulario() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="dados_profissional-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1">
          <Grid container>
            <Grid className="mb-5" xs={12}>
              <span className="dados_profissional-label">Name completo</span>{" "}
              <span className="dados_profissional-span">*</span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={12}>
              <input
                className="inputName" type="name"
                {...register("firstName", { required: true })}
              />
            </Grid>
          </Grid>
        </div>

        <div className="mb-1">
          <Grid container>
            <Grid className="mb-5" xs={12}>
              <span className="dados_profissional-label">CPF</span>{" "}
              <span className="dados_profissional-span">*</span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={12}>
              <input type="phone" placeholder="Digite um CPF" {...register("CPF", { required: true })} />
            </Grid>
          </Grid>
        </div>

        <div className="mb-1">
          <Grid container>
            <Grid className="mb-5" xs={12}>
              <span className="dados_profissional-label">Telefone</span>{" "}
              <span className="dados_profissional-span">*</span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={12}>
              <input type="phone" placeholder="(00) 0 0000-0000" {...register("phone", { required: true })} />
            </Grid>
          </Grid>
        </div>

        <div className="mb-1">
          <Grid container>
            <Grid className="mb-5" xs={6}>
              <Grid>
                <Grid className="mb-5" xs={12}>
                  <span className="dados_profissional-label">Estado</span>{" "}
                  <span className="dados_profissional-span">*</span>
                </Grid>
              </Grid>
              <Grid>
                <Grid xs={12}>
                  <select className="dados_profissional-select" {...register("gender")}>
                    <option value="female">seleccione</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={6}>
              <Grid >
                <Grid className="mb-5" xs={12}>
                  <span className="dados_profissional-label">Cidade</span>{" "}
                  <span className="dados_profissional-span">*</span>
                </Grid>
              </Grid>
              <Grid>
                <Grid xs={12}>
                  <select className="dados_profissional-select" {...register("gender")}>
                    <option value="female">seleccione</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Button className="dados_profissional-btn" size="medium" variant="">Proximo</Button>
        </div>
      </form>
    </div>
  );
}
