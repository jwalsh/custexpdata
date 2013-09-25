// TODO: Specify the type of these objects if not String 
window.digitalData = { 
  pageIDentifier: "", // 7.2: TODO: Change name: s/ID/Id/ 
  page: {
    pageID: "",
    pageName: "",
    pageCategory: { 
      primaryCategory: "", // Reserved
      subCategory1: "",
      PageType: "" // TODO: s/Page/page/ for nomenclature
     },
    searchTerm: "",
    searchResult: 0,
    destinationURL: window.location.href,
    referringUrl: document.referrer
    attributes: { // TODO: Drop init caps
      SysEnv: "", // Is this a mobile site or page view? 
      Variant: "",
      Version: "1.2.3", // String?
      Breadcrumbs: ""
    },
  },
  product: { 
    productID: { // Is this actually an ID if contains name
      prodID: "",
      productName: "", 
      description: "", // Why not productDescription given name
      productURL: "",
      // Optional
      manufacturer: "",
      sku: ""
      size: ""
    },
    productCategory: {},
    linkedProducts: {},
    attributes: {}
  },
  cart: { 
    cartID: "",
    price: {},
    items: [
      {
        productID: {}, // See above
        productCategory: {},
        quantity: 0,
        price: {},
        linkedProducts: {},
        attributes: {}
      }
    ]

  },
  transaction: {
    transactionID: "",
    profileID: ""
    profileID.address
  }
  event
  component
  user
  version 
}
