/* LR Cortinas - interacoes do site estatico */
(function () {
  "use strict";
  var FOTOS = [{"url": "./midia/lr-persiana-vista.jpg", "alt": "Sala de TV com cortina wave cinza cobrindo toda a parede de janelas", "caption": "Sala de TV · wave em parede inteira · projeto executado pela LR", "category": "wave"}, {"url": "./midia/lr-wave-vidro-1.jpg", "alt": "Sala de jantar com mesa de madeira maciça e cortina wave translúcida filtrando a luz", "caption": "Sala de jantar · wave translúcida · projeto executado pela LR", "category": "wave"}, {"url": "./midia/lr-wave-vidro-2.jpg", "alt": "Sala de estar clássica com cortinas wave claras em toda a parede de janelas", "caption": "Sala de estar · wave em parede inteira · projeto executado pela LR", "category": "wave"}, {"url": "./midia/lr-wave-vidro-3.jpg", "alt": "Ambiente integrado de estar e jantar com cortinas wave claras ao fundo", "caption": "Estar e jantar integrados · projeto executado pela LR", "category": "wave"}, {"url": "./midia/lr-wave-amplo.jpg", "alt": "Cortina de linho branco em wave cobrindo a parede de ponta a ponta", "caption": "Linho branco · projeto executado pela LR", "category": "wave"}, {"url": "./midia/lr-wave-living.jpg", "alt": "Living com cortina de linho em efeito wave, destacando o trilho Espanha", "caption": "Linho em efeito wave · destaque para o trilho Espanha · projeto executado pela LR", "category": "wave"}, {"url": "./midia/lr-ambiente-jantar.jpg", "alt": "Cortina wave em tecido escuro com caimento marcado em sala de jantar", "caption": "Cortina wave com caimento marcado · projeto executado pela LR", "category": "wave"}, {"url": "./midia/lr-ambiente-comercial.jpg", "alt": "Sala de jantar com pendente circular dourado e cortina wave clara ao lado do painel de madeira", "caption": "Jantar com painel de madeira · projeto executado pela LR", "category": "wave"}, {"url": "./midia/lr-persiana-jantar.jpg", "alt": "Cortina franzida clara iluminada por luz indireta no teto", "caption": "Franzido · projeto executado pela LR", "category": "wave"}, {"url": "./midia/lr-rolo-cozinha.jpg", "alt": "Detalhe de cortina wave instalada em parede curva, mostrando as ondas uniformes do tecido", "caption": "Detalhe de ondas em parede curva · projeto executado pela LR", "category": "wave"}, {"url": "./midia/lr-detalhe-tecido.jpg", "alt": "Sala de estar com sofá escuro e cortina wave clara em tecido leve", "caption": "Tecido leve em sala de estar · projeto executado pela LR", "category": "wave"}, {"url": "./midia/lr-detalhe-trilho.jpg", "alt": "Cortina de linho em ambiente de estar com luz filtrada", "caption": "Linho · projeto executado pela LR", "category": "wave"}, {"url": "./midia/lr-detalhe-acabamento.jpg", "alt": "Detalhe do acabamento superior de uma cortina wave, com ondas alinhadas no trilho", "caption": "Detalhe de acabamento no trilho · projeto executado pela LR", "category": "wave"}, {"url": "./midia/lr-ambiente-estar.jpg", "alt": "Espaço gourmet com cortinas rolô claras nas janelas", "caption": "Espaço gourmet · projeto executado pela LR", "category": "rolo"}, {"url": "./midia/lr-ambiente-varanda.jpg", "alt": "Varanda gourmet com cortinas rolô em tela solar com proteção UV", "caption": "Rolô · tela solar com proteção UV · projeto executado pela LR", "category": "rolo"}, {"url": "./midia/lr-wave-sala-tv.jpg", "alt": "Cozinha com cortina rolô clara instalada sobre a bancada da pia", "caption": "Cozinha · rolô sobre a bancada · projeto executado pela LR", "category": "rolo"}, {"url": "./midia/forn-rolo-quarto.jpg", "alt": "Sala de jantar com mesa de madeira e cortina rolô screen filtrando a luz da cidade", "caption": "Rolô screen em sala de jantar · imagem do fabricante", "category": "rolo"}, {"url": "./midia/forn-rolo-varanda.jpg", "alt": "Sofá claro com almofadas em tons terrosos diante de cortina rolô dourada pelo sol", "caption": "Rolô em luz de fim de tarde · imagem do fabricante", "category": "rolo"}, {"url": "./midia/lr-wave-jantar.jpg", "alt": "Cortina romana bege em pano largo instalada em sala de estar", "caption": "Romana em pano largo · projeto executado pela LR", "category": "romana"}, {"url": "./midia/lr-detalhe-caimento-2.jpg", "alt": "Quarto com cortina romana bege fechada ao lado da cama", "caption": "Quarto · cortina romana · projeto executado pela LR", "category": "romana"}, {"url": "./midia/forn-romana-sala.jpg", "alt": "Sala de estar em tons neutros com cortina romana de linho e poltrona de palhinha", "caption": "Cortina romana em linho · imagem do fabricante", "category": "romana"}, {"url": "./midia/forn-romana-estar.jpg", "alt": "Estar minimalista com cortina romana clara e mesa de centro redonda", "caption": "Romana em ambiente minimalista · imagem do fabricante", "category": "romana"}, {"url": "./midia/forn-persiana-aluminio.jpg", "alt": "Canto de refeições com persiana horizontal de alumínio e vista para o jardim", "caption": "Persiana de alumínio · imagem do fabricante", "category": "persiana"}, {"url": "./midia/forn-persiana-madeira.jpg", "alt": "Sala com sofá verde e persiana horizontal de madeira em janela ampla", "caption": "Persiana de madeira · imagem do fabricante", "category": "persiana"}, {"url": "./midia/forn-celular-estar.jpg", "alt": "Sala de estar com sofá bege, manta e cortina celular clara em janela de madeira", "caption": "Cortina celular em sala de estar · imagem do fabricante", "category": "celular"}];

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    /* ---------- cabecalho: muda ao rolar ---------- */
    var header = document.querySelector("header");
    var logo = header && header.querySelector("img");
    function onScroll() {
      if (!header) return;
      var s = window.scrollY > 24;
      header.classList.toggle("bg-background/90", s);
      header.classList.toggle("backdrop-blur-md", s);
      header.classList.toggle("border-b", s);
      header.classList.toggle("border-border", s);
      header.classList.toggle("py-3", s);
      header.classList.toggle("bg-transparent", !s);
      header.classList.toggle("py-5", !s);
      if (logo) {
        logo.classList.toggle("h-12", s);
        logo.classList.toggle("md:h-14", s);
        logo.classList.toggle("h-14", !s);
        logo.classList.toggle("md:h-16", !s);
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* ---------- menu mobile ---------- */
    var menuBtn = document.getElementById("lr-menu-btn");
    var menu = document.getElementById("lr-menu");
    if (menuBtn && menu) {
      var bars = menuBtn.querySelectorAll("span");
      function setMenu(open) {
        menu.hidden = !open;
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
        menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
        if (bars.length === 3) {
          bars[0].classList.toggle("translate-y-[6px]", open);
          bars[0].classList.toggle("rotate-45", open);
          bars[1].classList.toggle("opacity-0", open);
          bars[2].classList.toggle("-translate-y-[6px]", open);
          bars[2].classList.toggle("-rotate-45", open);
        }
      }
      setMenu(false);
      menuBtn.addEventListener("click", function () {
        setMenu(menu.hidden);
      });
      menu.querySelectorAll("a[href^='#']").forEach(function (a) {
        a.addEventListener("click", function () { setMenu(false); });
      });
    }

    /* ---------- animacoes de entrada ---------- */
    var reveals = document.querySelectorAll(".lr-reveal");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add("is-visible"); });
    }

    /* ---------- duvidas frequentes ---------- */
    var faq = document.getElementById("lr-faq");
    if (faq) {
      var items = Array.prototype.slice.call(faq.children);
      var abertos = items.map(function (it) {
        return it.querySelector("button").getAttribute("aria-expanded") === "true";
      });
      function pintaFaq() {
        items.forEach(function (it, i) {
          var btn = it.querySelector("button");
          var mais = btn.querySelector("span:last-child");
          var painel = it.querySelector("button + div");
          var open = abertos[i];
          btn.setAttribute("aria-expanded", open ? "true" : "false");
          mais.classList.toggle("rotate-45", open);
          painel.classList.toggle("grid-rows-[1fr]", open);
          painel.classList.toggle("opacity-100", open);
          painel.classList.toggle("grid-rows-[0fr]", !open);
          painel.classList.toggle("opacity-0", !open);
        });
      }
      items.forEach(function (it, i) {
        it.querySelector("button").addEventListener("click", function () {
          var estava = abertos[i];
          abertos = abertos.map(function () { return false; });
          abertos[i] = !estava;
          pintaFaq();
        });
      });
      pintaFaq();
    }

    /* ---------- video ---------- */
    var video = document.getElementById("lr-video");
    var playBtn = document.getElementById("lr-video-play");
    if (video && playBtn) {
      playBtn.addEventListener("click", function () {
        playBtn.remove();
        video.setAttribute("controls", "");
        var p = video.play();
        if (p && p.catch) p.catch(function () {});
      });
    }

    /* ---------- galeria: filtros + lightbox ---------- */
    var grid = document.getElementById("lr-grid");
    var filtros = document.getElementById("lr-filtros");
    var lb = document.getElementById("lr-lightbox");
    if (!grid) return;

    var itensDom = Array.prototype.slice.call(grid.querySelectorAll(".lr-item"));
    var categoriaAtiva = "todos";
    var visiveis = FOTOS.map(function (_, i) { return i; });
    var atual = null;

    var CATS = ["todos", "wave", "rolo", "romana", "persiana", "celular"];
    var ativoCls = ["border-nude-deep", "bg-nude/15", "text-navy"];
    var inativoCls = ["border-border", "text-navy-soft", "hover:border-nude/60", "hover:text-navy"];

    function aplicaFiltro(cat) {
      categoriaAtiva = cat;
      visiveis = [];
      itensDom.forEach(function (item, i) {
        var mostra = cat === "todos" || FOTOS[i].category === cat;
        item.style.display = mostra ? "" : "none";
        if (mostra) visiveis.push(i);
      });
      if (filtros) {
        Array.prototype.slice.call(filtros.children).forEach(function (btn, i) {
          var on = CATS[i] === cat;
          ativoCls.forEach(function (c) { btn.classList.toggle(c, on); });
          inativoCls.forEach(function (c) { btn.classList.toggle(c, !on); });
        });
      }
      fechaLightbox();
    }

    if (filtros) {
      Array.prototype.slice.call(filtros.children).forEach(function (btn, i) {
        btn.addEventListener("click", function () { aplicaFiltro(CATS[i] || "todos"); });
      });
    }

    function mostraFoto(pos) {
      if (!lb || !visiveis.length) return;
      atual = ((pos % visiveis.length) + visiveis.length) % visiveis.length;
      var foto = FOTOS[visiveis[atual]];
      var img = document.getElementById("lr-lb-img");
      img.src = foto.url;
      img.alt = foto.alt;
      document.getElementById("lr-lb-cap").textContent = foto.caption;
      lb.hidden = false;
      document.body.style.overflow = "hidden";
    }
    function fechaLightbox() {
      if (!lb) return;
      lb.hidden = true;
      atual = null;
      document.body.style.overflow = "";
    }

    itensDom.forEach(function (item) {
      var btn = item.querySelector("button[data-idx]");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var idx = parseInt(btn.getAttribute("data-idx"), 10);
        var pos = visiveis.indexOf(idx);
        if (pos >= 0) mostraFoto(pos);
      });
    });

    if (lb) {
      lb.addEventListener("click", function (ev) {
        var acao = ev.target.closest("[data-lb]");
        if (acao) {
          ev.stopPropagation();
          var a = acao.getAttribute("data-lb");
          if (a === "close") fechaLightbox();
          if (a === "prev") mostraFoto(atual - 1);
          if (a === "next") mostraFoto(atual + 1);
          return;
        }
        if (!ev.target.closest("figure")) fechaLightbox();
      });
      window.addEventListener("keydown", function (ev) {
        if (lb.hidden) return;
        if (ev.key === "Escape") fechaLightbox();
        if (ev.key === "ArrowRight") mostraFoto(atual + 1);
        if (ev.key === "ArrowLeft") mostraFoto(atual - 1);
      });
    }

    aplicaFiltro("todos");
  });
})();
