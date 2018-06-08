var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyA1i05BWM83zYm31yDAsP8e7Czrtq5gqMc'
  });

  googleMapsClient.geocode({
    address: '1600 Amphitheatre Parkway, Mountain View, CA'
  }, (err, response) => {
    if (!err) {
      console.log(response.json.results);
    }else{
        console.log(err)
    }
  });


