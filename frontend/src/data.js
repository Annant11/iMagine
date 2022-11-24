const data = {
  products: [{
          _id: 1,
          name: "Apple iPhone 13 Pro",
          category: "phones",
          image: "/images/p1.jpg",
          price: 119900,
          countInStock: 20,
          brand: "Apple",
          rating: 4.2,
          numReviews: 10,
          description: "15 cm (6.1-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel\nCinematic mode adds shallow depth of field and shifts focus automatically in your videos\nPro camera system with new 12MP Telephoto, Wide and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording\n12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording\nA15 Bionic chip for lightning-fast performance\nUp to 22 hours of video playback\nDurable design with Ceramic Shield\nIndustry-leading IP68 water resistance\niOS 15 packs new features to do more with iPhone than ever before\nSupports MagSafe accessories for easy attachment and faster wireless charging",

      },
      {
          _id: 2,
          name: "Apple iPhone 13",
          category: "phones",
          image: "/images/p2.jpg",
          price: 73990,
          countInStock: 20,
          brand: "Apple",
          rating: 4.2,
          numReviews: 10,
          description: "15 cm (6.1-inch) Super Retina XDR display/nCinematic mode adds shallow depth of field and shifts focus automatically in your videos/nAdvanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording/n12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording/nA15 Bionic chip for lightning-fast performance/nUp to 19 hours of video playback/nDurable design with Ceramic Shield/nIndustry-leading IP68 water resistance/niOS 15 packs new features to do more with iPhone than ever before/nSupports MagSafe accessories for easy attachment and faster wireless charging",


      },
      {
          _id: 3,
          name: "Apple iPhone 12 Pro",
          category: "phones",
          image: "/images/p3.jpg",
          price: 109900,
          countInStock: 20,
          brand: "Apple",
          rating: 4.2,
          numReviews: 10,
          description: "6.1-inch (15.5 cm diagonal) Super Retina XDR display\nCeramic Shield, tougher than any smartphone glass\nA14 Bionic chip, the fastest chip ever in a smartphone\nPro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 4x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording\nLiDAR Scanner for improved AR experiences, Night mode portraits\n12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording\nIndustry-leading IP68 water resistance\nSupports MagSafe accessories for easy attach and faster wireless charging\niOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more",

      },
      {
          _id: 4,
          name: "Apple iPhone 12",
          category: "phones",
          image: "/images/p4.jpg",

          price: 57999,
          countInStock: 20,
          brand: "Apple",
          rating: 4.2,
          numReviews: 10,
          description: "6.1-inch (15.5 cm diagonal) Super Retina XDR display\nCeramic Shield, tougher than any smartphone glass\nA14 Bionic chip, the fastest chip ever in a smartphone\nAdvanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording\n12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording\nIndustry-leading IP68 water resistance\nSupports MagSafe accessories for easy attach and faster wireless charging\niOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more",

      },
      {
          _id: 5,
          name: "Apple iPhone 11 Pro",
          category: "phones",
          image: "/images/p5.jpg",
          price: 106600,
          countInStock: 20,
          brand: "Apple",
          rating: 4.2,
          numReviews: 10,
          description: "6.1-inch (15.5 cm diagonal) Super Retina XDR display\nCeramic Shield, tougher than any smartphone glass\nA14 Bionic chip, the fastest chip ever in a smartphone\nAdvanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording\n12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording\nIndustry-leading IP68 water resistance\nSupports MagSafe accessories for easy attach and faster wireless charging\niOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more",

      },
      {
          _id: 6,
          name: "Apple iPhone 11",
          category: "phones",
          image: "/images/p6.jpg",
          price: 49900,
          countInStock: 20,
          brand: "Apple",
          rating: 4.2,
          numReviews: 10,
          description: "6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display\nWater and dust resistant (2 meters for up to 30 minutes, IP68)\nDual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps\n12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo\nFace ID for secure authentication\nA13 Bionic chip with third-generation Neural Engine\nFast-charge capable\niOS 15 packs new features to do more with iPhone than ever before\niOS 14 with redesigned widgets on the Home screen, all-new App Library, App Clips, and more",

      },
      {
          _id: 7,
          name: "Apple iPhone XS",
          category: "phones",
          image: "image/product-7.png",
          price: 45999,
          countInStock: 20,
          brand: "Apple",
          rating: 4.2,
          numReviews: 10,
          description: "\n5.8-inch Super Retina display (OLED) with HDR1\nIP68 dust and water resistant (maximum depth of 2 metres up to 30 minutes)2\n12MP dual cameras with dual OIS and 7MP TrueDepth front camera — Portrait mode, Portrait Lighting, Depth Control and Smart HDR\nFace ID for secure authentication3\nA12 Bionic with next-generation Neural Engine\nWireless charging—works with Qi chargers\niOS 12 with Memoji, Screen Time, Siri Shortcuts, and Group FaceTime",

      },
      {
          _id: 8,
          name: "Apple iPhone XS",
          category: "phones",
          image: "image/product-8.png",
          price: 39999,
          countInStock: 20,
          brand: "Apple",
          rating: 4.2,
          numReviews: 10,
          description: "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display\nWater and dust resistant (1 meter for up to 30 minutes, IP67)\nSingle 12MP Wide camera with Portrait mode, Portrait Lighting, Depth Control, Smart HDR, and 4K video up to 60fps\n7MP TrueDepth front camera system with Portrait mode, Portrait Lighting, Depth Control, and 1080p video\nFace ID for secure authentication\nA12 Bionic with second-generation Neural Engine\nFast-charge capable",

      },
  ],
};

export default data;