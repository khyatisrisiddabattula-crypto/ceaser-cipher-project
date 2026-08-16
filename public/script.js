/* =========================================================
   CAESAR CIPHER — all interactive logic
   ========================================================= */
(function () {
  "use strict";

  var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var mode = "encrypt";

  /* ---------- core algorithm ---------- */
  function caesar(text, shift, decrypt) {
    var s = ((shift % 26) + 26) % 26;
    if (decrypt) s = (26 - s) % 26;
    var out = "";
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      var code = text.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        out += String.fromCharCode(((code - 65 + s) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        out += String.fromCharCode(((code - 97 + s) % 26) + 97);
      } else {
        out += c; // numbers, spaces, punctuation untouched
      }
    }
    return out;
  }

  /* ---------- element refs ---------- */
  var $ = function (id) { return document.getElementById(id); };
  var message = $("message");
  var shiftRange = $("shiftRange");
  var shiftNumber = $("shiftNumber");
  var shiftValue = $("shiftValue");
  var encryptBtn = $("modeEncrypt");
  var decryptBtn = $("modeDecrypt");
  var actionBtn = $("actionBtn");
  var actionLabel = $("actionLabel");
  var outputBox = $("outputBox");
  var outputCard = $("outputCard");
  var copyBtn = $("copyBtn");
  var clearBtn = $("clearBtn");
  var statChars = $("statChars");
  var statLetters = $("statLetters");
  var statShift = $("statShift");
  var alphaTop = $("alphaTop");
  var alphaBottom = $("alphaBottom");
  var mapExample = $("mapExample");
  var toast = $("toast");

  /* ---------- toast ---------- */
  var toastTimer = null;
  function notify(msg, warn) {
    toast.textContent = msg;
    toast.classList.toggle("warn", !!warn);
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2200);
  }

  /* ---------- shift helpers ---------- */
  function currentShift() {
    var v = parseInt(shiftRange.value, 10);
    if (isNaN(v)) v = 0;
    return Math.min(25, Math.max(0, v));
  }

  function setShift(v) {
    v = parseInt(v, 10);
    if (isNaN(v)) v = 0;
    v = ((v % 26) + 26) % 26;
    shiftRange.value = v;
    shiftNumber.value = v;
    shiftValue.textContent = v;
    shiftRange.style.setProperty("--fill", (v / 25) * 100 + "%");
    statShift.textContent = v;
    renderAlphabet(v);
    renderExample(v);
  }

  /* ---------- alphabet visualisation ---------- */
  function renderAlphabet(shift) {
    if (!alphaTop.childNodes.length) {
      for (var i = 0; i < 26; i++) {
        var t = document.createElement("div");
        t.className = "cell";
        t.textContent = ALPHABET[i];
        alphaTop.appendChild(t);
        var b = document.createElement("div");
        b.className = "cell shifted";
        alphaBottom.appendChild(b);
      }
    }
    var effective = mode === "decrypt" ? (26 - shift) % 26 : shift;
    for (var j = 0; j < 26; j++) {
      alphaBottom.children[j].textContent = ALPHABET[(j + effective) % 26];
    }
  }

  function renderExample(shift) {
    var letters = ["A", "B", "C"];
    mapExample.innerHTML = "";
    letters.forEach(function (l) {
      var chip = document.createElement("div");
      chip.className = "map-chip";
      chip.innerHTML =
        "<span>" + l + "</span><span class='to'>&#8594;</span><b>" +
        caesar(l, shift, false) + "</b>";
      mapExample.appendChild(chip);
    });
  }

  /* ---------- stats ---------- */
  function updateStats() {
    var text = message.value;
    statChars.textContent = text.length;
    statLetters.textContent = (text.match(/[a-z]/gi) || []).length;
  }

  /* ---------- mode ---------- */
  function setMode(next) {
    mode = next;
    var isEnc = mode === "encrypt";
    encryptBtn.classList.toggle("active", isEnc);
    decryptBtn.classList.toggle("active", !isEnc);
    actionLabel.textContent = isEnc ? "ENCRYPT MESSAGE" : "DECRYPT MESSAGE";
    renderAlphabet(currentShift());
  }

  /* ---------- process ---------- */
  var busy = false;
  function process() {
    if (busy) return;
    var text = message.value;
    if (!text.trim()) {
      notify("Please enter a message first 💕", true);
      message.focus();
      return;
    }
    busy = true;
    actionBtn.classList.add("loading");
    var original = actionLabel.textContent;
    actionLabel.innerHTML = "<span class='spinner'></span> PROCESSING";

    setTimeout(function () {
      var result = caesar(text, currentShift(), mode === "decrypt");
      outputBox.classList.remove("empty", "reveal");
      void outputBox.offsetWidth;
      outputBox.textContent = result;
      outputBox.classList.add("reveal");
      outputCard.classList.add("glowing");
      setTimeout(function () { outputCard.classList.remove("glowing"); }, 1400);

      actionBtn.classList.remove("loading");
      actionLabel.textContent = original;
      busy = false;
      notify(mode === "encrypt" ? "Message encrypted 🔒" : "Message decrypted 🔓");
    }, 520);
  }

  /* ---------- copy / clear ---------- */
  function copyResult() {
    var text = outputBox.classList.contains("empty") ? "" : outputBox.textContent;
    if (!text.trim()) { notify("Nothing to copy yet", true); return; }
    var done = function () { notify("Result copied to clipboard ✨"); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(fallback);
    } else { fallback(); }
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { notify("Copy failed", true); }
      document.body.removeChild(ta);
    }
  }

  function clearAll() {
    message.value = "";
    outputBox.textContent = "Your result will appear here...";
    outputBox.classList.add("empty");
    updateStats();
    notify("Cleared");
    message.focus();
  }

  /* ---------- events ---------- */
  message.addEventListener("input", updateStats);
  shiftRange.addEventListener("input", function () { setShift(shiftRange.value); });
  shiftNumber.addEventListener("input", function () { setShift(shiftNumber.value); });
  encryptBtn.addEventListener("click", function () { setMode("encrypt"); });
  decryptBtn.addEventListener("click", function () { setMode("decrypt"); });
  actionBtn.addEventListener("click", process);
  copyBtn.addEventListener("click", copyResult);
  clearBtn.addEventListener("click", clearAll);

  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") process();
  });

  var startBtn = $("startBtn");
  if (startBtn) {
    startBtn.addEventListener("click", function () {
      setMode("encrypt");
      setTimeout(function () { message.focus(); }, 500);
    });
  }

  /* ---------- floating background glyphs ---------- */
  (function decorate() {
    var host = document.getElementById("glyphs");
    if (!host) return;
    var chars = ["A", "🔐", "Z", "🔑", "K", "🔒", "M", "✦", "D", "🛡", "X", "★"];
    for (var i = 0; i < chars.length; i++) {
      var el = document.createElement("span");
      el.className = "glyph";
      el.textContent = chars[i];
      el.style.left = Math.random() * 94 + "vw";
      el.style.top = Math.random() * 190 + "vh";
      el.style.animationDelay = (-Math.random() * 12).toFixed(2) + "s";
      host.appendChild(el);
    }
  })();

  /* ---------- scroll entrance ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) en.target.classList.add("in"); });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal-on-scroll").forEach(function (el) { io.observe(el); });

  /* ---------- init ---------- */
  setMode("encrypt");
  setShift(3);
  updateStats();
})();
