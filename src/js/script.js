function enviar() {
  let nickname = document.getElementById("nick").value;
  let lvl = document.getElementById("level").value;

  if (nickname === "" || lvl === "") {
    alert("Por favor, preencha os campos.");
  } else {
    lvl = parseInt(lvl, 10);
  }
  if (lvl >= 1 && lvl <= 5) {
    alert(`${nickname}, sua patente é Prata`);
  }
  if (lvl >= 6 && lvl <= 10) {
    alert(`${nickname}, sua patente é Ak`);
  }
  if (lvl >= 11 && lvl <= 15) {
    alert(`${nickname}, sua patente é Ak Cruzada`);
  }
  if (lvl >= 16 && lvl < 19) {
    alert(`${nickname}, sua patente é Supremo`);
  } else if (lvl >= 19) {
    alert(`${nickname}, sua patente é Global`);
  }
}
