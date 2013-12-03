// Validation: Nomenclature should use upcase for abbrevs or acronyms
// Types:
// - Objects are fully defined
// - Arrays are defined for a single instance
// - Strings are defined as empty
// - Numbers are defined as 0
// - Date || String is new Date()
// - ArrayString is [""]
window.digitalData = {
  pageInstanceID: "",
  page: {
    pageInfo: {
      pageID: "",
      pageName: "",
      destinationURL: document.location,
      referringURL: document.referrer,
      sysEnv: "",
      variant: "",
      version: "",
      breadcrumbs: [""],
      author: "",
      issueDate: new Date(),
      effectiveDate: new Date(),
      expiryDate: new Date(),
      language: "",
      industryCodes: "",
      publisher: ""
    },
    category: {
      primaryCategory: "",
      subCategory1: "",
      pageType: ""
    }
  },
  product: [
    {
      productInfo: {
        productID: "",
        productName: "",
        description: "",
        productURL: "",
        productImage: "",
        productThumbnail: "",
        manufacturer: "",
        sky: "",
        color: "",
        size: ""
      },
      category: {
        primaryCategory: "",
        subCategory1: "",
        productType: ""
      },
      linkedProduct: [
        {
          productInfo: {
            productID: "",
            productName: "",
            description: "",
            productURL: "",
            productImage: "",
            productThumbnail: "",
            manufacturer: "",
            sku: "",
            color: "",
            size: ""
          }
        }
      ]
    }
  ],

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
    profileID: "",
    profileID: {
      address: ""
    }
  },
  event: [],
  component: [],
  user: [],
  privacyAccessCategories: {},
  version: ""
};

console.log(digitalData);


$('#user').on('click', function() {
  $(document).trigger('digitalData', digitalData.user);
  $('<div>').html('user').appendTo($('body'));
});

$('#product').on('click', function() {
  $(document).trigger('digitalData', digitalData.product);
  $('<div>').html('product').appendTo($('body'));
});

$('#product').on('click', function() {
  $(document).trigger('digitalData', digitalData.product);
  $('<div>').html('product').appendTo($('body'));
});

$('#simple').on('click', function() {
  $(document).trigger(
    'digitalData',
    {'skey': 'sval'}
  );
  $('<div>').html('simple').appendTo($('body'));
});





