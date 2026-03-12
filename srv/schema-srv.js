const cds = require('@sap/cds');

module.exports = cds.service.impl(function () {

  const { Products } = this.entities;

  

  this.before('CREATE', Products, (req) => {

    const { price } = req.data;

    if (price == null || price <= 0) {
      req.reject(400, 'Product price must be greater than 0');
    }

  });
  ``

});