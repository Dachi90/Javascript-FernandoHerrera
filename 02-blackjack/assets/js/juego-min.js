const miModulo = (() => {
  'use strict';
  let e = [],
    t = ['C', 'D', 'H', 'S'],
    r = ['A', 'J', 'Q', 'K'],
    a = [],
    l = document.querySelector('#btnPedir'),
    n = document.querySelector('#btnDetener'),
    d = (document.querySelector('#btnNuevo'), document.querySelectorAll('small')),
    o = document.querySelectorAll('.divCartas'),
    s = (t = 2) => {
      (e = i()), (a = []);
      for (let r = 0; r < t; r++) a.push(0);
      d.forEach((e) => (e.innerText = 0)), o.forEach((e) => (e.innerHTML = '')), (l.disabled = !1), (n.disabled = !1);
    },
    i = () => {
      e = [];
      for (let a = 2; a <= 10; a++) for (let l of t) e.push(a + l);
      for (let n of t) for (let d of r) e.push(d + n);
      return _.shuffle(e);
    },
    u = () => {
      if (0 === e.length) throw 'No hay cartas en el deck';
      return e.pop();
    },
    c = (e) => {
      let t = e.substring(0, e.length - 1);
      return isNaN(t) ? ('A' === t ? 11 : 10) : 1 * t;
    },
    $ = (e, t) => ((a[t] = a[t] + c(e)), (d[t].innerText = a[t]), a[t]),
    h = (e, t) => {
      let r = document.createElement('img');
      (r.src = `assets/cartas/${e}.png`), r.classList.add('carta'), o[t].append(r);
    },
    f = () => {
      let [e, t] = a;
      setTimeout(() => {
        t === e ? alert('Nadie gana :(') : e > 21 ? alert('Computadora gana') : t > 21 ? alert('Jugador Gana') : alert('Computadora Gana');
      }, 100);
    },
    b = (e) => {
      let t = 0;
      do {
        let r = u();
        (t = $(r, a.length - 1)), h(r, a.length - 1);
      } while (t < e && e <= 21);
      f();
    };
  return (
    l.addEventListener('click', () => {
      let e = u(),
        t = $(e, 0);
      h(e, 0), t > 21 ? (console.warn('Lo siento mucho, perdiste'), (l.disabled = !0), (n.disabled = !0), b(t)) : 21 === t && (console.warn('21, genial!'), (l.disabled = !0), (n.disabled = !0), b(t));
    }),
    n.addEventListener('click', () => {
      (l.disabled = !0), (n.disabled = !0), b(a[0]);
    }),
    { nuevoJuego: s }
  );
})();
