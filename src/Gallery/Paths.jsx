const pathArray = [
  {
    name: "St. Francis close",
    url: "/Images/EscherWorks/B921 St. Francis close.JPG",
    close: "/Images/EscherWorks/B921 St. Francis close.JPG",
    thumb: "/Images/EscherThumbnail/B921 St. Francis close.jpg",
    id: 1
  },
  {
    name: "Tower of Babel",
    url: "/Images/EscherWorks/B118 Tower of Babel close.JPG",
    inframe:"/Images/EscherWorks/B118 Tower of Babel in Frame.JPG",
    close:"/Images/EscherWorks/B118 Tower of Babel close.JPG",
    thumb: "/Images/EscherThumbnail/B118 Tower of Babel close.jpg",
    id: 2
  },
  {
    name: "Self Portrait in Frame",
    inframe:"/Images/EscherWorks/B128 Self Portrait in Frame.JPG",
    url: "/Images/EscherWorks/B128 Self Portrait in Frame.JPG",
    thumb: "/Images/EscherThumbnail/B128 Self Portrait in Frame.jpg",
    id: 3
  },
  {
    name: "Still Life with Mirror",
    url: "/Images/EscherWorks/B248 Still Life with Mirror close.JPG",
    inframe:"/Images/EscherWorks/B248 Still Life with Mirror in Frame.JPG",
    close:"/Images/EscherWorks/B248 Still Life with Mirror close.JPG",
    thumb: "/Images/EscherThumbnail/B248 Still Life with Mirror close.jpg",
    id: 4
  },
  {
    name: "Hell copy of Bosch",
    url: "/Images/EscherWorks/B278 Hell copy of Bosch close.JPG",
    inframe:"/Images/EscherWorks/B278 Hell Copy of Bosch Schene in Frame.JPG",
    close:"/Images/EscherWorks/B278 Hell copy of Bosch close.JPG",
    thumb: "/Images/EscherThumbnail/B278 Hell copy of Bosch close.jpg",
    id: 5
  },
  {
    name: "Development",
    url: "/Images/EscherWorks/B300 Development close.JPG",
    inframe:"/Images/EscherWorks/B300 Development in Frame.JPG",
    close:"/Images/EscherWorks/B300 Development close.JPG",
    thumb: "/Images/EscherThumbnail/B300 Development close.jpg",
    id: 6
  },
  {
    name: "Day and Night in Frame",
    url: "/Images/EscherWorks/B303 Day and Night in Frame.JPG",
    inframe:"/Images/EscherWorks/B303 Day and Night in Frame.JPG",
    thumb: "/Images/EscherThumbnail/B303 Day and Night in Frame.jpg",
    id: 6
  },
  {
    name: "Cycle",
    url: "/Images/EscherWorks/B305 Cycle close.JPG",
    inframe:"/Images/EscherWorks/B305 Cycle in Frame.JPG",
    close:"/Images/EscherWorks/B305 Cycle close.JPG",
    thumb: "/Images/EscherThumbnail/B305 Cycle close.jpg",
    id: 7
  },
  {
    name: "Sky and Water 1",
    url: "/Images/EscherWorks/B306 Sky and Water 1 close.JPG",
    inframe:"/Images/EscherWorks/B306 Sky and Water 1 in Frame.JPG",
    close: "/Images/EscherWorks/B306 Sky and Water 1 close.JPG",
    thumb: "/Images/EscherThumbnail/B306 Sky and Water 1 close.jpg",
    id: 8
  },
  {
    name: "Sky and Water 2",
    url: "/Images/EscherWorks/B308 Sky and Water 2 close.JPG",
    inframe:"/Images/EscherWorks/B308 Sky and Water 2 in Frame.JPG",
    close: "/Images/EscherWorks/B308 Sky and Water 2 close.JPG",
    thumb: "/Images/EscherThumbnail/B308 Sky and Water 2 close.jpg",
    id: 9
  },
  {
    name: "Gravesande Bookplate close",
    url: "/Images/EscherWorks/B322 Gravesande Bookplate close.JPG",
    close: "/Images/EscherWorks/B322 Gravesande Bookplate close.JPG",
    thumb: "/Images/EscherThumbnail/B322 Gravesande Bookplate close.jpg",
    id: 10
  },
  {
    name: "Verbum (Earth, Sky and Water)",
    url: "/Images/EscherWorks/B326 Verbum (Earth, Sky and Water) in Frame.JPG",
    inframe: "/Images/EscherWorks/B326 Verbum (Earth, Sky and Water) in Frame.JPG",
    close: "/Images/EscherWorks/B326 Verbum close.JPG",
    thumb: "/Images/EscherThumbnail/B326 Verbum (Earth, Sky and Water) in Frame.jpg",
    id: 11
  },
  {
    name: "Reptiles",
    url: "/Images/EscherWorks/B327 Reptiles close.JPG",
    inframe:"/Images/EscherWorks/B327 Reptiles in Frame.JPG",
    close:"/Images/EscherWorks/B327 Reptiles close.JPG",
    thumb: "/Images/EscherThumbnail/B327 Reptiles close.jpg",
    id: 12
  },
  {
    name: "Encounter",
    url: "/Images/EscherWorks/B331 Encounter close.JPG",
    inframe:"/Images/EscherWorks/B331 Encounter in Frame.JPG",
    close:"/Images/EscherWorks/B331 Encounter close.JPG",
    thumb: "/Images/EscherThumbnail/B331 Encounter close.jpg",
    id: 13
  },
  {
    name: "Three Spheres 1",
    url: "/Images/EscherWorks/B336 Three Spheres 1 close.JPG",
    inframe:"/Images/EscherWorks/B336 Three Spheres 1 in Frame.JPG",
    close: "/Images/EscherWorks/B336 Three Spheres 1 close.JPG",
    thumb: "/Images/EscherThumbnail/B336 Three Spheres 1 close.jpg",
    id: 14
  },
  {
    name: "Magic Mirror",
    url: "/Images/EscherWorks/B338 Magic Mirror close.JPG",
    inframe:"/Images/EscherWorks/B338 Magic Mirror in Frame.JPG",
    close:"/Images/EscherWorks/B338 Magic Mirror close.JPG",
    thumb: "/Images/EscherThumbnail/B338 Magic Mirror close.jpg",
    id: 15
  },
  {
    name: "Three Spheres 2",
    url: "/Images/EscherWorks/B339 Three Spheres 2 close.JPG",
    inframe:"/Images/EscherWorks/B339 Three Spheres 2 in Frame.JPG",
    close:"/Images/EscherWorks/B339 Three Spheres 2 close.JPG",
    thumb: "/Images/EscherThumbnail/B339 Three Spheres 2 close.jpg",
    id: 16
  },
  {
    name: "Horseman",
    url: "/Images/EscherWorks/B342 Horseman close.JPG",
    inframe:"/Images/EscherWorks/B342 Horseman in Frame.JPG",
    close:"/Images/EscherWorks/B342 Horseman close.JPG",
    thumb: "/Images/EscherThumbnail/B342 Horseman close.jpg",
    id: 17
  },
  {
    name: "Eye in Frame",
    url: "/Images/EscherWorks/B344 Eye in Frame.JPG",
    inframe:"/Images/EscherWorks/B344 Eye in Frame.JPG",
    thumb: "/Images/EscherThumbnail/B344 Eye in Frame.jpg",
    id: 18
  },
  {
    name: "New Year 1947 greeting card close",
    url: "/Images/EscherWorks/B345 New Year 1947 greeting card close.JPG",
    close:"/Images/EscherWorks/B345 New Year 1947 greeting card close.JPG",
    thumb: "/Images/EscherThumbnail/B345 New Year 1947 greeting card close.jpg",
    id: 19
  },
  {
    name: "Other World",
    url: "/Images/EscherWorks/B348 Other World close.JPG",
    inframe:"/Images/EscherWorks/B348 Other World in Frame.JPG",
    close:"/Images/EscherWorks/B348 Other World close.JPG",
    thumb: "/Images/EscherThumbnail/B348 Other World close.jpg",
    id: 20
  },
  {
    name: "Other World in Frame",
    url: "/Images/EscherWorks/B348 Other World in Frame.JPG",
    inframe: "/Images/EscherWorks/B348 Other World in Frame.JPG",
    thumb: "/Images/EscherThumbnail/B348 Other World in Frame.jpg",
    id: 21
  },
  {
    name: "Up and Down",
    url: "/Images/EscherWorks/B352 Up and Down close.JPG",
    inframe:"/Images/EscherWorks/B352 Up and Down in Frame.JPG",
    close:"/Images/EscherWorks/B352 Up and Down close.JPG",
    thumb: "/Images/EscherThumbnail/B352 Up and Down close.jpg",
    id: 22
  },
  {
    name: "Drawing Hands",
    url: "/Images/EscherWorks/B355 Drawing Hands close.JPG",
    inframe:"/Images/EscherWorks/B355 Drawing Hands in Frame.JPG",
    close: "/Images/EscherWorks/B355 Drawing Hands close.JPG",
    thumb: "/Images/EscherThumbnail/B355 Drawing Hands close.jpg",
    id: 23
  },
  {
    name: "Sun and Moon in Frame",
    url: "/Images/EscherWorks/B357 Sun and Moon in Frame.JPG",
    inframe: "/Images/EscherWorks/B357 Sun and Moon in Frame.JPG",
    thumb: "/Images/EscherThumbnail/B357 Sun and Moon in Frame.jpg",
    id: 24
  },
  {
    name: "Birds invitation",
    url: "/Images/EscherWorks/B361 Birds invitation close.JPG",
    inframe:"/Images/EscherWorks/B361 Birds invitation envelop.JPG",
    close:"/Images/EscherWorks/B361 Birds invitation close.JPG",
    thumb: "/Images/EscherThumbnail/B361 Birds invitation close.jpg",
    id: 25
  },
  {
    name: "Horses and Bird invitation close",
    url: "/Images/EscherWorks/B363 Horses and Bird invitation close.JPG",
    close:"/Images/EscherWorks/B363 Horses and Bird invitation close.JPG",
    thumb: "/Images/EscherThumbnail/B363 Horses and Bird invitation close.jpg",
    id: 26
  },
  {
    name: "Double Planetoid close",
    url: "/Images/EscherWorks/B365 Double Planetoid close.JPG",
    inframe: "/Images/EscherWorks/B365 Double Planetoid in Frame.JPG",
    close:"/Images/EscherWorks/B365 Double Planetoid close.JPG",
    thumb: "/Images/EscherThumbnail/B365 Double Planetoid close.jpg",
    id: 27
  },
  {
    name: "Order and Chaos",
    url: "/Images/EscherWorks/B366 Order and Chaos close.JPG",
    inframe:"/Images/EscherWorks/B366 Order and Chaos in Frame.JPG",
    close:"/Images/EscherWorks/B366 Order and Chaos close.JPG",
    thumb: "/Images/EscherThumbnail/B366 Order and Chaos close.jpg",
    id: 28
  },
  {
    name: "Predestination",
    url: "/Images/EscherWorks/B372 Predestination close.JPG",
    inframe:"/Images/EscherWorks/B372 Predestination in Frame.JPG",
    close:"/Images/EscherWorks/B372 Predestination close.JPG",
    thumb: "/Images/EscherThumbnail/B372 Predestination close.jpg",
    id: 29
  },
  {
    name: "Plane Filling 1 close",
    url: "/Images/EscherWorks/B373 Plane Filling 1 close.JPG",
    close:"/Images/EscherWorks/B373 Plane Filling 1 close.JPG",
    thumb: "/Images/EscherThumbnail/B373 Plane Filling 1 close.jpg",
    id: 30
  },
  {
    name: "Curl Up in Frame",
    url: "/Images/EscherWorks/B374 Curl Up in Frame.JPG",
    inframe: "/Images/EscherWorks/B374 Curl Up in Frame.JPG",
    thumb: "/Images/EscherThumbnail/B374 Curl Up in Frame.jpg",
    id: 31
  },
  {
    name: "Fish and Bird close",
    url: "/Images/EscherWorks/B376 Fish and Bird close.JPG",
    close:  "/Images/EscherWorks/B376 Fish and Bird close.JPG",
    thumb: "/Images/EscherThumbnail/B376 Fish and Bird close.jpg",
    id: 32
  },
  {
    name: "Puddle",
    url: "/Images/EscherWorks/B378 Puddle close.JPG",
    inframe:"/Images/EscherWorks/B378 Puddle in Frame .JPG",
    close:"/Images/EscherWorks/B378 Puddle close.JPG",
    thumb: "/Images/EscherThumbnail/B378 Puddle close.jpg",
    id: 33
  },
  {
    name: "Puddle w frame",
    url: "/Images/EscherWorks/B378 Puddle w frame.JPG",
    inframe: "/Images/EscherWorks/B378 Puddle w frame.JPG",
    thumb: "/Images/EscherThumbnail/B378 Puddle w frame.jpg",
    id: 34
  },
  {
    name: "Dragon",
    url: "/Images/EscherWorks/B379 Dragon close.JPG",
    inframe:"/Images/EscherWorks/B379 Dragon in Frame.JPG",
    close: "/Images/EscherWorks/B379 Dragon close.JPG",
    thumb: "/Images/EscherThumbnail/B379 Dragon close.jpg",
    id: 35
  },
  {
    name: "Strens Earth close",
    url: "/Images/EscherWorks/B382 Strens Earth close.JPG",
    close: "/Images/EscherWorks/B382 Strens Earth close.JPG",
    thumb: "/Images/EscherThumbnail/B382 Strens Earth close.jpg",
    id: 36
  },
  {
    name: "to B385 Strens Elements",
    url: "/Images/EscherWorks/B382 Strens Elements all close.JPG",
    iframe:"/Images/EscherWorks/B382 Strens Elements all in Frame.JPG",
    close:"/Images/EscherWorks/B382 Strens Elements all close.JPG",
    thumb: "/Images/EscherThumbnail/B382 Strens Elements all close.jpg",
    id: 37
  },
  {
    name: "Strens Air close",
    url: "/Images/EscherWorks/B383 Strens Air close.JPG",
    close:  "/Images/EscherWorks/B383 Strens Air close.JPG",
    thumb: "/Images/EscherThumbnail/B383 Strens Air close.jpg",
    id: 38
  },
  {
    name: "Strens Fire close",
    url: "/Images/EscherWorks/B384 Strens Fire close.JPG",
    close: "/Images/EscherWorks/B384 Strens Fire close.JPG",
    thumb: "/Images/EscherThumbnail/B384 Strens Fire close.jpg",
    id: 39
  },
  {
    name: "Strens Water close",
    url: "/Images/EscherWorks/B385 Strens Water close.JPG",
    close:  "/Images/EscherWorks/B385 Strens Water close.JPG",
    thumb: "/Images/EscherThumbnail/B385 Strens Water close.jpg",
    id: 40
  },
  {
    name: "Relativity",
    url: "/Images/EscherWorks/B388 Relativity in Frame.JPG",
    iframe:"/Images/EscherWorks/B388 Relativity in Frame.JPG",
    close:"/Images/EscherWorks/B388 Relativity close.JPG",
    thumb: "/Images/EscherThumbnail/B388 Relativity in Frame.jpg",
    id: 41
  },
  {
    name: "Spirals",
    url: "/Images/EscherWorks/B390 Spirals close.JPG",
    inframe:"/Images/EscherWorks/B390 Spirals in Frame.JPG",
    close:"/Images/EscherWorks/B390 Spirals close.JPG",
    thumb: "/Images/EscherThumbnail/B390 Spirals close.jpg",
    id: 42
  },
  {
    name: "Tetrahedral Planetoid",
    url: "/Images/EscherWorks/B395 Tetrahedral Planetoid close.JPG",
    inframe:"/Images/EscherWorks/B395 Tetrahedral Planetoid in Frame.JPG",
    close:"/Images/EscherWorks/B395 Tetrahedral Planetoid close.JPG",
    thumb: "/Images/EscherThumbnail/B395 Tetrahedral Planetoid close.jpg",
    id: 43
  },
  {
    name: "Convex and Concave",
    url: "/Images/EscherWorks/B399 Convex and Concave close.JPG",
    inframe: "/Images/EscherWorks/B399 Convex and Concave in Frame.JPG",
    close:"/Images/EscherWorks/B399 Convex and Concave close.JPG",
    thumb: "/Images/EscherThumbnail/B399 Convex and Concave close.jpg",
    id: 44
  },
  {
    name: "Liberation",
    url: "/Images/EscherWorks/B400 Liberation close.JPG",
    inframe:"/Images/EscherWorks/B400 Liberation in Frame.JPG",
    close:"/Images/EscherWorks/B400 Liberation close.JPG",
    thumb: "/Images/EscherThumbnail/B400 Liberation close.jpg",
    id: 45
  },
  {
    name: "Order and Chaos 2",
    url: "/Images/EscherWorks/B402 order and Chaos 2 close.JPG",
    inframe:"/Images/EscherWorks/B402 Order and Chaos 2 in Frame.JPG",
    close:"/Images/EscherWorks/B402 order and Chaos 2 close.JPG",
    thumb: "/Images/EscherThumbnail/B402 order and Chaos 2 close.jpg",
    id: 46
  },
  {
    name: "Depth",
    url: "/Images/EscherWorks/B403 Depth close.JPG",
    inframe:"/Images/EscherWorks/B403 Depth in Frame.JPG",
    close: "/Images/EscherWorks/B403 Depth close.JPG",
    thumb: "/Images/EscherThumbnail/B403 Depth close.jpg",
    id: 47
  },
  {
    name: "Three Worlds",
    url: "/Images/EscherWorks/B405 Three Worlds close.JPG",
    inframe:"/Images/EscherWorks/B405 Three Worlds in Frame.JPG",
    close:"/Images/EscherWorks/B405 Three Worlds close.JPG",
    thumb: "/Images/EscherThumbnail/B405 Three Worlds close.jpg",
    id: 48
  },
  {
    name: "Swans",
    url: "/Images/EscherWorks/B408 Swans close.JPG",
    inframe: "/Images/EscherWorks/B408 Swans in Frame.JPG",
    close: "/Images/EscherWorks/B408 Swans close.JPG",
    thumb: "/Images/EscherThumbnail/B408 Swans close.jpg",
    id: 49
  },
  {
    name: "Bond of Union in Frame",
    url: "/Images/EscherWorks/B409 Bond of Union in Frame.JPG",
    inframe:  "/Images/EscherWorks/B409 Bond of Union in Frame.JPG",
    thumb: "/Images/EscherThumbnail/B409 Bond of Union in Frame.jpg",
    id: 50
  },
  {
    name: "Print Gallery",
    url: "/Images/EscherWorks/B410 Print Gallery in Frame.JPG",
    inframe:"/Images/EscherWorks/B410 Print Gallery in Frame.JPG",
    close:"/Images/EscherWorks/B410 Print Gallery close.JPG",
    thumb: "/Images/EscherThumbnail/B410 Print Gallery in Frame.jpg",
    id: 51
  },
  {
    name: "Fish Vingnette invitation in Frame",
    url: "/Images/EscherWorks/B414 Fish Vingnette invitation in Frame.JPG",
    inframe: "/Images/EscherWorks/B414 Fish Vingnette invitation in Frame.JPG",
    thumb: "/Images/EscherThumbnail/B414 Fish Vingnette invitation in Frame.jpg",
    id: 52
  },
  {
    name: "Cube with Magic Ribbon",
    url: "/Images/EscherWorks/B415 Cube with Magic Ribbon in Frame.JPG",
    inframe:"/Images/EscherWorks/B415 Cube with Magic Ribbon in Frame.JPG",
    close:"/Images/EscherWorks/B415 Cube with Magic Ribbon close.JPG",
    thumb: "/Images/EscherThumbnail/B415 Cube with Magic Ribbon in Frame.jpg",
    id: 53
  },
  {
    name: "Plane Filling 2",
    url: "/Images/EscherWorks/B422 Plane Filling 2 in Frame.JPG",
    inframe:"/Images/EscherWorks/B422 Plane Filling 2 in Frame.JPG",
    close:"/Images/EscherWorks/B422 Plane Filling 2 close.JPG",
    thumb: "/Images/EscherThumbnail/B422 Plane Filling 2 in Frame.jpg",
    id: 54
  },
  {
    name: "Whirlpools",
    url: "/Images/EscherWorks/B423 Whirlpools in Frame.JPG",
    inframe:"/Images/EscherWorks/B423 Whirlpools in Frame.JPG",
    close:"/Images/EscherWorks/B423 Whirlpools close.JPG",
    thumb: "/Images/EscherThumbnail/B423 Whirlpools in Frame.jpg",
    id: 55
  },
  {
    name: "Whirlpools Proof",
    url: "/Images/EscherWorks/B423 Whirlpools Proof in Frame.JPG",
    inframe:"/Images/EscherWorks/B423 Whirlpools Proof in Frame.JPG",
    close:"/Images/EscherWorks/B423 Whirlpools Proof close.JPG",
    thumb: "/Images/EscherThumbnail/B423 Whirlpools Proof in Frame.jpg",
    id: 56
  },
  {
    name: "Belvvedere",
    inframe:"/Images/EscherWorks/B426 Belvedere in Frame.JPG",
    close: "/Images/EscherWorks/B426 Belvvedere close.JPG",
    url: "/Images/EscherWorks/B426 Belvvedere close.JPG",
    thumb: "/Images/EscherThumbnail/B426 Belvvedere close.jpg",
    id: 57
  },
  {
    name: "Sphere Surface with Fish",
    url: "/Images/EscherWorks/B427 Sphere Surface with Fish in Frame.JPG",
    inframe:"/Images/EscherWorks/B427 Sphere Surface with Fish in Frame.JPG",
    close:"/Images/EscherWorks/B427 Sphere Surface with Fish close.JPG",
    thumb: "/Images/EscherThumbnail/B427 Sphere Surface with Fish in Frame.jpg",
    id: 58
  },
  {
    name: "Sphere Spirals",
    url: "/Images/EscherWorks/B428 Sphere Spirals with Frame.JPG",
    inframe:"/Images/EscherWorks/B428 Sphere Spirals with Frame.JPG",
    close:"/Images/EscherWorks/B428 Sphere Spirals close.JPG",
    thumb: "/Images/EscherThumbnail/B428 Sphere Spirals with Frame.jpg",
    id: 59
  },
  {
    name: "Flatworms in Frame",
    url: "/Images/EscherWorks/B431 Flatworms in Frame.JPG",
    inframe:"/Images/EscherWorks/B431 Flatworms in Frame.JPG",
    thumb: "/Images/EscherThumbnail/B431 Flatworms in Frame.jpg",
    id: 60
  },
  {
    name: "Circle Limit 2 in Frame",
    url: "/Images/EscherWorks/B432 Circle Limit 2 in Frame.JPG",
    inframe:"/Images/EscherWorks/B432 Circle Limit 2 in Frame.JPG",
    close:"/Images/EscherWorks/B432 Circle Limit 2 close.JPG",
    thumb: "/Images/EscherThumbnail/B432 Circle Limit 2 in Frame.jpg",
    id: 61
  },
  {
    name: "Fish and Scales",
    url: "/Images/EscherWorks/B433 Fish and Scales in Frame.JPG",
    inframe: "/Images/EscherWorks/B433 Fish and Scales in Frame.JPG",
    close:"/Images/EscherWorks/B433 Fish and Scales close.JPG",
    thumb: "/Images/EscherThumbnail/B433 Fish and Scales in Frame.jpg",
    id: 62
  },
  {
    name: "Ascending and Descending",
    url: "/Images/EscherWorks/B435 Ascending and Descending close.JPG",
    inframe: "/Images/EscherWorks/B435 Ascending and Descending in Frame.JPG",
    close:"/Images/EscherWorks/B435 Ascending and Descending close.JPG",
    thumb: "/Images/EscherThumbnail/B435 Ascending and Descending close.jpg",
    id: 63
  },
  {
    name: "Circle Limit 4",
    url: "/Images/EscherWorks/B436 Circle Limit 4 close.JPG",
    inframe:"/Images/EscherWorks/B436 Circle Limit 4 in Frame.JPG",
    close:"/Images/EscherWorks/B436 Circle Limit 4 close.JPG",
    thumb: "/Images/EscherThumbnail/B436 Circle Limit 4 close.jpg",
    id: 64
  },
  {
    name: "Moebius Strip 1",
    url: "/Images/EscherWorks/B437 Moebius Strip 1 close.JPG",
    inframe: "/Images/EscherWorks/B437 Moebius Strip 1 in Frame.JPG",
    close: "/Images/EscherWorks/B437 Moebius Strip 1 close.JPG",
    thumb: "/Images/EscherThumbnail/B437 Moebius Strip 1 close.jpg",
    id: 65
  },
  {
    name: "Waterfall",
    url: "/Images/EscherWorks/B439 Waterfall close.JPG",
    inframe: "/Images/EscherWorks/B439 Waterfall in Frame.JPG",
    close:"/Images/EscherWorks/B439 Waterfall close.JPG",
    thumb: "/Images/EscherThumbnail/B439 Waterfall close.jpg",
    id: 66
  },
  {
    name: "Moebiu Strip 2",
    url: "/Images/EscherWorks/B441 Moebiu Strip 2 close.JPG",
    inframe:"/Images/EscherWorks/B441 Moebius Strip 2 in Frame.JPG",
    close:"/Images/EscherWorks/B441 Moebiu Strip 2 close.JPG",
    thumb: "/Images/EscherThumbnail/B441 Moebiu Strip 2 close.jpg",
    id: 67
  },
  {
    name: "Knot single know with burn in Frame",
    url: "/Images/EscherWorks/B444 Knot single know with burn in Frame.JPG",
    inframe:"/Images/EscherWorks/B444 Knot single know with burn in Frame.JPG",
    close:"/Images/EscherWorks/B444 Knots single knot with burn close.JPG",
    thumb: "/Images/EscherThumbnail/B444 Knot single know with burn in Frame.jpg",
    id: 68
  },
  {
    name: "Knots",
    url: "/Images/EscherWorks/B444 Knots close.JPG",
    inframe:"/Images/EscherWorks/B444 Knots in Frame.JPG",
    close:"/Images/EscherWorks/B444 Knots close.JPG",
    thumb: "/Images/EscherThumbnail/B444 Knots close.jpg",
    id: 69
  },
  {
    name: "Knots unique drawing of large knot",
    url: "/Images/EscherWorks/B444 Knots unique drawing of large knot.JPG",
    inframe: "/Images/EscherWorks/B444 Knots unique drawing of large knot.JPG",
    thumb: "/Images/EscherThumbnail/B444 Knots unique drawing of large knot.jpg",
    id: 70
  },
  {
    name: "Knots Wood Block A",
    url: "/Images/EscherWorks/B444 Knots Wood Block A.JPG",
    close: "/Images/EscherWorks/B444 Knots Wood Block A.JPG",
    thumb: "/Images/EscherThumbnail/B444 Knots Wood Block A.jpg",
    id: 71
  },
  {
    name: "Knots Wood Block B",
    url: "/Images/EscherWorks/B444 Knots Wood Block B.JPG",
    close: "/Images/EscherWorks/B444 Knots Wood Block B.JPG",
    thumb: "/Images/EscherThumbnail/B444 Knots Wood Block B.jpg",
    id: 72
  },
  {
    name: "Knots Wood Block C",
    url: "/Images/EscherWorks/B444 Knots Wood Block C.JPG",
    close: "/Images/EscherWorks/B444 Knots Wood Block C.JPG",
    thumb: "/Images/EscherThumbnail/B444 Knots Wood Block C.jpg",
    id: 73
  },
  {
    name: "Knots Wood Blocks 3",
    url: "/Images/EscherWorks/B444 Knots Wood Blocks 3.JPG",
    close:"/Images/EscherWorks/B444 Knots Wood Blocks 3.JPG",
    thumb: "/Images/EscherThumbnail/B444 Knots Wood Blocks 3.jpg",
    id: 74
  },
  {
    name: "Knots Wood Blocks all",
    url: "/Images/EscherWorks/B444 Knots Wood Blocks all.JPG",
    close: "/Images/EscherWorks/B444 Knots Wood Blocks all.JPG",
    thumb: "/Images/EscherThumbnail/B444 Knots Wood Blocks all.jpg",
    id: 75
  },
  {
    name: "Path of Life",
    url: "/Images/EscherWorks/B445 Path of Life close.JPG",
    inframe:"/Images/EscherWorks/B445 Path of Life in Frame.JPG",
    close:"/Images/EscherWorks/B445 Path of Life close.JPG",
    thumb: "/Images/EscherThumbnail/B445 Path of Life close.jpg",
    id: 76
  },
  {
    name: "Symmetry 125",
    url: "/Images/EscherWorks/B445 Symmetry 125 close.JPG",
    inframe:"/Images/EscherWorks/B445 Symmetry 125 in Frame.JPG",
    close:"/Images/EscherWorks/B445 Symmetry 125 close.JPG",
    thumb: "/Images/EscherThumbnail/B445 Symmetry 125 close.jpg",
    id: 77
  },
  {
    name: "Pearl Jam Emek Day and Night 2018 close",
    url: "/Images/EscherWorks/P111 Pearl Jam Emek Day and Night 2018 close.JPG",
    close: "/Images/EscherWorks/P111 Pearl Jam Emek Day and Night 2018 close.JPG",
    thumb: "/Images/EscherThumbnail/P111 Pearl Jam Emek Day and Night 2018 close.jpg",
    id: 78
  },
  {
    name: "Sphere with Fish",
    url: "/Images/EscherWorks/S111 Sphere with Fish.JPG",
    close: "/Images/EscherWorks/S111 Sphere with Fish.JPG",
    thumb: "/Images/EscherThumbnail/S111 Sphere with Fish.jpg",
    id: 79
  },
  {
    name: "Unique Ronda",
    url: "/Images/EscherWorks/U111 Unique Ronda close.JPG",
    inframe:"/Images/EscherWorks/U111 Unique Ronda in Frame.JPG",
    close:"/Images/EscherWorks/U111 Unique Ronda close.JPG",
    thumb: "/Images/EscherThumbnail/U111 Unique Ronda close.jpg",
    id: 80
  },
  // {
  //   name: "St. Francis close",
  //   url: "/Images/EscherWorks/B921 St. Francis close.JPG",
  //   thumb: "/Images/EscherThumbnail/B921 St. Francis close.jpg",
  //   id: 135
  // },
  // {
  //   name: "Tower of Babel",
  //   url: "/Images/EscherWorks/B118 Tower of Babel close.JPG",
  //   inframe:"/Images/EscherWorks/B118 Tower of Babel in Frame.JPG",
  //   close:"/Images/EscherWorks/B118 Tower of Babel close.JPG",
  //   thumb: "/Images/EscherThumbnail/B118 Tower of Babel close.jpg",
  //   id: 136
  // },
  // {
  //   name: "Self Portrait in Frame",
  //   url: "/Images/EscherWorks/B128 Self Portrait in Frame.JPG",
  //   thumb: "/Images/EscherThumbnail/B128 Self Portrait in Frame.jpg",
  //   id: 138
  // },
  // {
  //   name: "Still Life with Mirror",
  //   url: "/Images/EscherWorks/B248 Still Life with Mirror close.JPG",
  //   inframe:"/Images/EscherWorks/B248 Still Life with Mirror in Frame.JPG",
  //   close:"/Images/EscherWorks/B248 Still Life with Mirror close.JPG",
  //   thumb: "/Images/EscherThumbnail/B248 Still Life with Mirror close.jpg",
  //   id: 139
  // },
  // {
  //   name: "Hell copy of Bosch",
  //   url: "/Images/EscherWorks/B278 Hell copy of Bosch close.JPG",
  //   inframe:"/Images/EscherWorks/B278 Hell Copy of Bosch Schene in Frame.JPG",
  //   close:"/Images/EscherWorks/B278 Hell copy of Bosch close.JPG",
  //   thumb: "/Images/EscherThumbnail/B278 Hell copy of Bosch close.jpg",
  //   id: 141
  // },
  // {
  //   name: "Development",
  //   url: "/Images/EscherWorks/B300 Development close.JPG",
  //   inframe:"/Images/EscherWorks/B300 Development in Frame.JPG",
  //   close:"/Images/EscherWorks/B300 Development close.JPG",
  //   thumb: "/Images/EscherThumbnail/B300 Development close.jpg",
  //   id: 143
  // },
  // {
  //   name: "Day and Night in Frame",
  //   url: "/Images/EscherWorks/B303 Day and Night in Frame.JPG",
  //   thumb: "/Images/EscherThumbnail/B303 Day and Night in Frame.jpg",
  //   id: 145
  // },
  // {
  //   name: "Cycle",
  //   url: "/Images/EscherWorks/B305 Cycle close.JPG",
  //   inframe:"/Images/EscherWorks/B305 Cycle in Frame.JPG",
  //   close:"/Images/EscherWorks/B305 Cycle close.JPG",
  //   thumb: "/Images/EscherThumbnail/B305 Cycle close.jpg",
  //   id: 146
  // },
  // {
  //   name: "Sky and Water 1",
  //   url: "/Images/EscherWorks/B306 Sky and Water 1 close.JPG",
  //   inframe:"/Images/EscherWorks/B306 Sky and Water 1 in Frame.JPG",
  //   close: "/Images/EscherWorks/B306 Sky and Water 1 close.JPG",
  //   thumb: "/Images/EscherThumbnail/B306 Sky and Water 1 close.jpg",
  //   id: 148
  // },
  // {
  //   name: "Sky and Water 2",
  //   url: "/Images/EscherWorks/B308 Sky and Water 2 close.JPG",
  //   inframe:"/Images/EscherWorks/B308 Sky and Water 2 in Frame.JPG",
  //   close: "/Images/EscherWorks/B308 Sky and Water 2 close.JPG",
  //   thumb: "/Images/EscherThumbnail/B308 Sky and Water 2 close.jpg",
  //   id: 150
  // },
  // {
  //   name: "Gravesande Bookplate close",
  //   url: "/Images/EscherWorks/B322 Gravesande Bookplate close.JPG",
  //   thumb: "/Images/EscherThumbnail/B322 Gravesande Bookplate close.jpg",
  //   id: 152
  // },
  // {
  //   name: "Verbum (Earth, Sky and Water)",
  //   url: "/Images/EscherWorks/B326 Verbum (Earth, Sky and Water) in Frame.JPG",
  //   inframe: "/Images/EscherWorks/B326 Verbum (Earth, Sky and Water) in Frame.JPG",
  //   close: "/Images/EscherWorks/B326 Verbum close.JPG",
  //   thumb: "/Images/EscherThumbnail/B326 Verbum (Earth, Sky and Water) in Frame.jpg",
  //   id: 153
  // },
  // {
  //   name: "Reptiles",
  //   url: "/Images/EscherWorks/B327 Reptiles close.JPG",
  //   inframe:"/Images/EscherWorks/B327 Reptiles in Frame.JPG",
  //   close:"/Images/EscherWorks/B327 Reptiles close.JPG",
  //   thumb: "/Images/EscherThumbnail/B327 Reptiles close.jpg",
  //   id: 155
  // },
  // {
  //   name: "Encounter",
  //   url: "/Images/EscherWorks/B331 Encounter close.JPG",
  //   inframe:"/Images/EscherWorks/B331 Encounter in Frame.JPG",
  //   close:"/Images/EscherWorks/B331 Encounter close.JPG",
  //   thumb: "/Images/EscherThumbnail/B331 Encounter close.jpg",
  //   id: 157
  // },
  // {
  //   name: "Three Spheres 1",
  //   url: "/Images/EscherWorks/B336 Three Spheres 1 close.JPG",
  //   inframe:"/Images/EscherWorks/B336 Three Spheres 1 in Frame.JPG",
  //   close: "/Images/EscherWorks/B336 Three Spheres 1 close.JPG",
  //   thumb: "/Images/EscherThumbnail/B336 Three Spheres 1 close.jpg",
  //   id: 159
  // },
  // {
  //   name: "Magic Mirror",
  //   url: "/Images/EscherWorks/B338 Magic Mirror close.JPG",
  //   inframe:"/Images/EscherWorks/B338 Magic Mirror in Frame.JPG",
  //   close:"/Images/EscherWorks/B338 Magic Mirror close.JPG",
  //   thumb: "/Images/EscherThumbnail/B338 Magic Mirror close.jpg",
  //   id: 161
  // },
  // {
  //   name: "Three Spheres 2",
  //   url: "/Images/EscherWorks/B339 Three Spheres 2 close.JPG",
  //   inframe:"/Images/EscherWorks/B339 Three Spheres 2 in Frame.JPG",
  //   close:"/Images/EscherWorks/B339 Three Spheres 2 close.JPG",
  //   thumb: "/Images/EscherThumbnail/B339 Three Spheres 2 close.jpg",
  //   id: 163
  // },
  // {
  //   name: "Horseman",
  //   url: "/Images/EscherWorks/B342 Horseman close.JPG",
  //   inframe:"/Images/EscherWorks/B342 Horseman in Frame.JPG",
  //   close:"/Images/EscherWorks/B342 Horseman close.JPG",
  //   thumb: "/Images/EscherThumbnail/B342 Horseman close.jpg",
  //   id: 165
  // },
  // {
  //   name: "Eye in Frame",
  //   url: "/Images/EscherWorks/B344 Eye in Frame.JPG",
  //   thumb: "/Images/EscherThumbnail/B344 Eye in Frame.jpg",
  //   id: 167
  // },
  // {
  //   name: "New Year 1947 greeting card close",
  //   url: "/Images/EscherWorks/B345 New Year 1947 greeting card close.JPG",
  //   thumb: "/Images/EscherThumbnail/B345 New Year 1947 greeting card close.jpg",
  //   id: 168
  // },
  {
    name: "Other World close",
    url: "/Images/EscherWorks/B348 Other World close.JPG",
    inframe:"/Images/EscherWorks/B348 Other World in Frame.JPG",
    close:"/Images/EscherWorks/B348 Other World close.JPG",
    thumb: "/Images/EscherThumbnail/B348 Other World close.jpg",
    id: 81
  },
  {
    name: "Stars in Frame",
    url: "/Images/EscherWorks/B359 Stars in Frame.JPG",
    inframe: "/Images/EscherWorks/B359 Stars in Frame.JPG",
    thumb: "/Images/EscherThumbnail/B359 Stars in Frame.jpg",
    id: 82
  },
  {
    name: "to B385 Strens Elements all",
    url: "/Images/EscherWorks/B382 to B385 Strens Elements all close.JPG",
    inframe:"/Images/EscherWorks/B382 to B385 Strens Elements all in Frame.JPG",
    close:"/Images/EscherWorks/B382 to B385 Strens Elements all close.JPG",
    thumb: "/Images/EscherThumbnail/B382 to B385 Strens Elements all close.jpg",
    id: 83
  },
]



export default pathArray;

