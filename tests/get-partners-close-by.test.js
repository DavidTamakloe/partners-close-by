const { getPartnersCloseBy } = require("../utilities");

//test array has 3 offices that are within range and 1 that isn't
const partners = [
  {
    id: 4,
    urlName: "blue-square-360",
    organization: "Blue Square 360",
    customerLocations: "globally",
    willWorkRemotely: true,
    website: "http://www.bluesquare360.com/",
    services:
      "Blue Square 360 provides a professionally managed service covering all areas of a 360° Feedback initiative. We're experienced in supporting projects of all sizes, and always deliver a personal service that provides the level of support you need to ensure your 360 initiative delivers results for the business.",
    offices: [
      {
        location: "Singapore",
        address:
          "Ocean Financial Centre, Level 40, 10 Collyer Quay, Singapore, 049315",
        coordinates: "1.28304,103.85199319999992"
      },
      {
        location: "London, UK",
        address: "St Saviours Wharf, London SE1 2BE",
        coordinates: "51.5014767,-0.0713608999999451"
      }
    ]
  },
  {
    id: 13,
    urlName: "gallus-consulting",
    organization: "Gallus Consulting",
    customerLocations: "across the UK",
    willWorkRemotely: true,
    website: "http://www.gallusconsulting.com/",
    services:
      "We're strategy consultants with a difference - we work with organisations and their leaders to take them from strategy to reality. In our work with leaders we often use 360-degree feedback to identify capability gaps, improve self-awareness, and develop strategic and cultural alignment. Our aim is for believe-able leaders to emerge with the drive, capability and cultural fit to take strategy to reality.",
    offices: [
      {
        location: "Northampton",
        address:
          "Newton House, Northampton Science Park, Moulton Park, Kings Park Road, Northampton, NN3 6LG",
        coordinates: "52.277409,-0.877935999999977"
      },
      {
        location: "London",
        address: "No1 Royal Exchange, London, EC3V 3DG",
        coordinates: "51.5136102,-0.08757919999993646"
      },
      {
        location: "Manchester",
        address: "3 Hardman Square, Spinningfields, Manchester, M3 3EB",
        coordinates: "53.47990859999999,-2.2510892999999896"
      }
    ]
  },
  {
    id: 14,
    urlName: "dwconsulting",
    organization: "Darren Williams Consulting",
    customerLocations: "across Australia",
    willWorkRemotely: true,
    website: "http://www.dwconsulting.com.au/",
    services:
      "We specialize in Leadership Development and Executive Coaching. Ultimately, leadership development is a process of self development and Spidergap 360 is a great tool for raising awareness of our style and impact on others. We can work with you to design and deliver powerful learning opportunitities.",
    offices: [
      {
        location: "Adelaide",
        address: "Adelaide, Australia",
        coordinates: "-34.9284989,138.60074559999998"
      }
    ]
  }
];

/*
 * Verify that the 3 partners are close by and 1 of them,
 * specifically Manchester, is NOT close by
 */
test("gets distance in km from central london", () => {
  const partnersCloseBy = getPartnersCloseBy(partners);

  expect(partnersCloseBy).toHaveLength(3);

  expect(partnersCloseBy).toEqual(
    expect.arrayContaining([
      {
        organization: "Gallus Consulting",
        address: "No1 Royal Exchange, London, EC3V 3DG"
      }
    ])
  );

  expect(partnersCloseBy).toEqual(
    expect.not.arrayContaining([
      {
        organization: "Gallus Consulting",
        address: "3 Hardman Square, Spinningfields, Manchester, M3 3EB"
      }
    ])
  );
});
