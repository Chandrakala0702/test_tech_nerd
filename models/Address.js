class Address {
  constructor(street, suite, city, zipcode, geo) {
    (this.street = street),
      (this.suite = suite),
      (this.city = city),
      (this.zipcode = zipcode),
      (this.geo = geo);
  }
}

export default Address;