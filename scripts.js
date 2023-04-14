const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 4.93
const euro = 5.45
const bitcoin = 149739.15

const convertValues = () => {
  const inputReais = document.getElementById("input-real").value
  const realValueText = document.getElementById("real-value-text")
  const currencyValueText = document.getElementById("currency-value-text")

  //   realValueText.innerHTML = inputReais

  // currencyValueText.innerHTML = inputReais / dolar

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais)

  if (select.value === "US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar)
  }

  if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro)
  }

  if (select.value === "Bitcoin") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "XBT",
    }).format(inputReais / bitcoin)
  }
}

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name")
  const currencyImg = document.getElementById("currency-img")
  const currencyValueText = document.getElementById("currency-value-text")

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro"
    currencyValueText.innerHTML = "€ 2.000,00"
    currencyImg.src = "./assets/euro.png"
  }

  if (select.value === "US$ Dólar americano") {
    currencyName.innerHTML = "Dólar americano"
    currencyValueText.innerHTML = "US$ 2.000,00"
    currencyImg.src = "./assets/estados-unidos.png"
  }

  if (select.value === "Bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyValueText.innerHTML = "BTC 0.1"
    currencyImg.src = "./assets/bitcoin.png"
  }

  convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)
