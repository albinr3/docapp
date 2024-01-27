import { images } from "../constants";

export const markers = [
    {
      id: "1",
      coordinate: {
        latitude: 22.6293867,
        longitude: 88.4354486,
      },
      name: "City General Hospital",
       description: "A leading hospital in the city",
        type: "General Hospital",
        image: images.hospital1,
        rating: 4.5,
        reviews: 120,
        specialties: ["Cardiology", "Orthopedics", "Internal Medicine"],
        address: "123 Main Street, City",
        phoneNumber: "+1 (555) 123-4567",
        time: "15 min",
        distance: 1.5
    },
    {
      id: "2",
      coordinate: {
        latitude: 22.6345648,
        longitude: 88.4377279,
      },
      name: "Sunshine Pediatric Hospital",
      description: "Specialized care for children",
      type: "Pediatric Hospital",
      image: images.hospital6,
      rating: 4.8,
      reviews: 90,
      specialties: ["Pediatrics", "Neonatology", "Pediatric Surgery"],
      address: "456 Elm Avenue, Town",
      phoneNumber: "+1 (555) 987-6543",
      time: "35 min",
      distance: 3
    },
    {
      id: "3",
      coordinate: {
        latitude: 22.6281662,
        longitude: 88.4410113,
      },
      name: "Greenfield Medical Center",
        description: "Comprehensive medical services",
        type: "Medical Center",
        image: images.hospital7,
        rating: 4.2,
        reviews: 150,
        specialties: ["Family Medicine", "Dermatology", "Ophthalmology"],
        address: "789 Oak Lane, Suburb",
        phoneNumber: "+1 (555) 321-7890",
        time: "40 min",
        distance: 2.5
    },
    {
      id: "4",
      coordinate: {
        latitude: 22.6341137,
        longitude: 88.4497463,
      },
      name: "Luna Medical Center",
      description: "Amazing medical services",
      type: "Medical Center",
      image: images.hospital4,
      rating: 4.9,
      reviews: 120,
      specialties: ["Family Medicine", "Dermatology", "Ophthalmology"],
      address: "789 Oak Lane, Suburb",
      phoneNumber: "+1 (555) 321-7890",
      time: "10 min",
      distance: 2
    },
    {
      id: "5",
      coordinate: {
        latitude: 22.6292757,
        longitude: 88.444781,
      },
      name: "Greenfield Medical Center",
        description: "Comprehensive medical services",
        type: "Medical Center",
        image: images.hospital5,
        rating: 4.9,
        reviews: 90,
        specialties: ["Family Medicine", "Dermatology", "Ophthalmology"],
        address: "789 Oak Lane, Suburb",
        phoneNumber: "+132 (555) 321-7890",
        time: "15 min",
        distance: 1.5
    },
];

export const mapDarkStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];

  export const mapStandardStyle = [
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
  ];