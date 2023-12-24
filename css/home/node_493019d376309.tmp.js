.tecnologia-bg {
  background: var(--cor-11);
  box-shadow: inset 0 80px var(--cor-0), inset 0 -80px var(--cor-0);
}

.tecnologia-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.tecnologia-img {
  display: flex;
  width: 100%;
  height: 100%;
}
.tecnologia-img img {
  object-fit: cover;
  object-position: left;
}
.tecnologia-conteudo h2 {
  margin-bottom: 32px;
}6
.tecnologia-conteudo > p {
  margin-bottom: 20px;
}
.tecnologia-conteudo {
  padding-top: 160px;
  padding-bottom: 160px;
}
.tecnologia-conteudo > span {
  display: block;
  margin-bottom: 20px;
}

.tecnologia-conteudo a {
  margin-bottom: 80px;
}

.tecnologia-vantagens {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.tecnologia-vantagens div {
  display: flex;
  flex-direction: column;
}

span {
  color: #fff;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  line-height: 36px; /* 150% */
}
.tecnologia-vantagens div img {
  width: 24px;
}

@media (max-width: 800px) {
  .tecnologia-container {
    grid-template-columns: 1fr;
  }
  .tecnologia-conteudo a {
    margin-bottom: 40px;
  }
  .tecnologia-img {
    display: none;
  }
}

@media (max-width: 600px) {
  .tecnologia-vantagens {
    grid-template-columns: 1fr;
  }
}