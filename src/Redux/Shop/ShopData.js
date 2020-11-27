const ShopData = {
  womens: {
    id: 1,
    title: "womens",
    category: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    items: [
      {
        id: 23,
        name: "Black Sleeves Mens",
        imageUrl: require("../../img/shopImage/avenue1.png"),
        price: 25,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        colors: ["red", "black"],
        size: ["sm", "m", "l", "xl"],
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: require("../../img/shopImage/avenue2.png"),
        price: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        colors: ["rediis", "dark-black"],
        size: ["sm", "m", "l", "xl"],
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: require("../../img/shopImage/avenue3.png"),
        price: 80,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        colors: ["pink", "blue"],
        size: ["sm", "m", "l", "xl"],
      },
    ],
  },

  mens: {
    id: 5,
    title: "mens",
    category: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",

    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: require("../../img/shopImage/avenue4.png"),
        price: 325,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
        colors: ["red", "black", "green", "white", "dark-green"],
        size: ["sm", "m", "l", "xl"],
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: require("../../img/shopImage/avenue5.png"),
        price: 20,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
        colors: ["white", "pink", "grey"],
        size: ["sm", "m", "l", "xl"],
      },
      {
        id: 32,
        name: " White Longsleeve",
        imageUrl: require("../../img/shopImage/avenue6.png"),
        price: 25,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
        colors: ["red", "blue"],
        size: ["sm", "m", "l", "xl"],
      },
    ],
  },
  shoes: {
    id: 6,
    title: "shoes",
    category: "shoes",
    imageUrl: require("../../img/shoesCollection.png"),
    items: [
      {
        id: 61,
        name: "Sports Running Shoes",
        imageUrl: require("../../img/shopImage/runningShoes1.png"),
        price: 155,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
        colors: ["black", "white"],
        size: ["m", "l", "xl"],
      },
      {
        id: 62,
        name: "Mens Casual Shoes",
        imageUrl: require("../../img/shopImage/casualMens.png"),
        price: 425,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
        colors: ["black", "white"],
        size: ["sm", "l", "xl"],
      },
      {
        id: 63,
        name: "Mens Loafer",
        imageUrl: require("../../img/shopImage/loafer1.png"),
        price: 125,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
        colors: ["black", "white"],
        size: ["sm", "l", "xl"],
      },
      {
        id: 64,
        name: "Black Combat",
        imageUrl: require("../../img/shopImage/balckCombat.png"),
        price: 725,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
        colors: ["black", "white"],
        size: ["sm", "l", "xl"],
      },
      {
        id: 65,
        name: "Hiking Shoes",
        imageUrl: require("../../img/shopImage/hikingShoes.png"),
        price: 625,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
        colors: ["black", "white"],
        size: ["sm", "l", "xl"],
      },
      {
        id: 66,
        name: "Timberland",
        imageUrl: require("../../img/shopImage/timberland.png"),
        price: 825,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
        colors: ["black", "white"],
        size: ["sm", "l", "xl"],
      },
      {
        id: 67,
        name: "ladies Boot",
        imageUrl: require("../../img/shopImage/ladiesBoot.png"),
        price: 125,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
        colors: ["black", "white"],
        size: ["sm", "l", "xl"],
      },
    ],
  },
  sports: {
    id: 7,
    title: "sports",
    category: "sports",
    imageUrl: require("../../img/sports.png"),
    items: [
      {
        id: 71,
        name: "Badminton Racket",
        imageUrl: require("../../img/shopImage/badmintonRacket.png"),
        price: 88,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
      },
      {
        id: 72,
        name: "BasketBall",
        imageUrl: require("../../img/shopImage/basketBall.png"),
        price: 110,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
      },
      {
        id: 73,
        name: "Boxing Gloves",
        imageUrl: require("../../img/shopImage/boxingGloves.png"),
        price: 160,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
        colors: ["black", "white", "red"],
        size: ["sm", "l", "xl"],
      },
      {
        id: 74,
        name: "Cricket Bat",
        imageUrl: require("../../img/shopImage/cricketBat.png"),
        price: 75,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
      },
      {
        id: 75,
        name: "Dumbel 2kg",
        imageUrl: require("../../img/shopImage/dumbel2lb.png"),
        price: 125,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
      },
      {
        id: 76,
        name: "GT-Bikes",
        imageUrl: require("../../img/shopImage/gtBikes.png"),
        price: 425,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
      },
      {
        id: 77,
        name: "Mikasa Volleball",
        imageUrl: require("../../img/shopImage/mikasaVolleball.png"),
        price: 55,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
        size: ["sm", "l"],
      },
      {
        id: 78,
        name: "Tennis Racket",
        imageUrl: require("../../img/shopImage/tennisRackect.png"),
        price: 75,
        description:
          " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
      },
    ],
  },
};

export default ShopData;
