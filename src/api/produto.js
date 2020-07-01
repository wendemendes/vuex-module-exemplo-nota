/**
 * Mocking client-server processing
 */
const _produtos = [
    {"id": 1, "title": "Cerveja", "price": 1.99, "inventory": 2},
    {"id": 2, "title": "Farinha de mandioca", "price": 4.88, "inventory": 10},
    {"id": 3, "title": "Queijo", "price": 19.99, "inventory": 5}
  ]
  
  export default {
    getProdutos (cb) {
      setTimeout(() => cb(_produtos), 100)
    },
  
    buyProdutos (produtos, cb, errorCb) {
      setTimeout(() => {
        // simulate random checkout failure.
        (Math.random() > 0.5 || navigator.webdriver)
          ? cb()
          : errorCb()
      }, 100)
    }
  }
  