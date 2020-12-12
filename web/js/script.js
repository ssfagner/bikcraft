if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "quote", // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
  });

  new SimpleSlide({
    slide: "portfolio", // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
    nav: true,
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}

new SimpleForm({
  form: ".formphp", // seleção de formulário
  button: "#enviar", // seletor do botao
  erro:
    "<div id = 'form-erro'> <p> Um erro ocorreu, tente para o email contato@bikcraft.com. </p> </div> ", // mensagem de erro de
  sucesso:
    " <div id = 'form-sucesso'> <h2> Formulário enviado com sucesso </h2> <p> Em breve eu entrei em contato com você. </p> </div> ", // mensagem de sucesso
});
