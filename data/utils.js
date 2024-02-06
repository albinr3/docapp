import { icons, images } from "../constants";

export const contacts = [
    {
        id: '1',
        userName: 'John Doe',
        userImg: images.avatar,
        isOnline: false,
        lastSeen: "2023-08-16T04:52:06.501Z",
        lastMessage: 'How is it going...',
        messageInQueue: 3,
        sentDate: '12/7',
    },
    {
        id: '2',
        userName: 'Marry Lio',
        userImg: images.avatar2,
        isOnline: true,
        lastSeen: "2023-09-01T04:52:06.501Z",
        lastMessage: 'Good morning...',
        messageInQueue: 0,
        sentDate: '12/7',
    },
    {
        id: '3',
        userName: 'Lucia Mu',
        userImg: images.avatar3,
        isOnline: false,
        lastSeen: "2023-08-12T04:52:06.501Z",
        lastMessage: "What's up...",
        messageInQueue: 0,
        sentDate: '12/7',
    },
    {
        id: '4',
        userName: 'Raki Lili',
        userImg: images.avatar4,
        isOnline: true,
        lastSeen: "2023-08-16T04:52:06.501Z",
        lastMessage: 'Send me the link',
        messageInQueue: 0,
        sentDate: 'Today',
    },
    {
        id: '5',
        userName: 'Raki Devine',
        userImg: images.avatar5,
        isOnline: false,
        lastSeen: "2023-08-16T04:52:06.501Z",
        lastMessage: 'We are doing...',
        messageInQueue: 0,
        sentDate: '23/9',
    },
    {
        id: '6',
        userName: 'Aris Yup',
        userImg: images.avatar9,
        isOnline: true,
        lastSeen: "2023-08-16T04:52:06.501Z",
        lastMessage: 'How is it going...',
        messageInQueue: 3,
        sentDate: 'Today',
    },
    {
        id: '7',
        userName: 'Aris Yup',
        userImg: images.avatar6,
        isOnline: true,
        lastSeen: "2023-08-16T04:52:06.501Z",
        lastMessage: 'How is it going...',
        messageInQueue: 3,
        sentDate: '12/7',
    },
    {
        id: '8',
        userName: 'Billy Di',
        userImg: images.avatar7,
        isOnline: true,
        lastSeen: "2023-08-16T04:52:06.501Z",
        lastMessage: 'How is it going...',
        messageInQueue: 3,
        sentDate: '12/7',
    },
    {
        id: '9',
        userName: 'Aris Biu',
        userImg: images.avatar8,
        isOnline: true,
        lastSeen: "2023-08-16T04:52:06.501Z",
        lastMessage: 'How is it going...',
        messageInQueue: 3,
        sentDate: '12/7',
    },
];

export const userScheduleData = [
    {
        id: "1",
        doctorName: "Dr. Alana Rueter",
        doctorAvatar: images.doctor1,
        type: "Dentist Consultation",
        date: "Monday, 26 July",
        startHour: "09:00",
        endHour: "10:00"
    },
    {
        id: "2",
        doctorName: "Dr. Julia Issaya",
        doctorAvatar: images.doctor2,
        type: "Therapist Consultation",
        date: "Monday, 27 July",
        startHour: "09:00",
        endHour: "10:00"
    },
    {
        id: "3",
        doctorName: "Dr. Luca Jeannette",
        doctorAvatar: images.doctor3,
        type: "Ophta Consultation",
        date: "Monday, 27 July",
        startHour: "12:00",
        endHour: "13:00"
    },
    {
        id: "4",
        doctorName: "Dr. Edouard",
        doctorAvatar: images.doctor4,
        type: "Cardio Consultation",
        date: "Monday, 28 July",
        startHour: "12:00",
        endHour: "13:00"
    },
    {
        id: "5",
        doctorName: "Dr. Smith John",
        doctorAvatar: images.doctor5,
        type: "Neuro Consultation",
        date: "Monday, 29 July",
        startHour: "09:00",
        endHour: "10:00"
    },
    {
        id: "6",
        doctorName: "Dr. Abraham Lili",
        doctorAvatar: images.doctor6,
        type: "Dentist Consultation",
        date: "Monday, 30 July",
        startHour: "06:00",
        endHour: "07:00"
    },
    {
        id: "7",
        doctorName: "Dr. Ana Sanchez",
        doctorAvatar: images.doctor7,
        type: "Cardio Consultation",
        date: "Monday, 30 July",
        startHour: "08:00",
        endHour: "09:00"
    },
]

export const specialities = [
    {
        id: "1",
        name: "Allergy",
        icon: icons.allergy
    },
    {
        id: "2",
        name: "Urology",
        icon: icons.urology
    },
    {
        id: "3",
        name: "Pulmo",
        icon: icons.pulmonology
    },
    {
        id: "4",
        name: "Ophtha",
        icon: icons.eye
    },
    {
        id: "5",
        name: "Gastro",
        icon: icons.gastro
    },
    {
        id: "6",
        name: "Cardio",
        icon: icons.cardio
    },
    {
        id: "7",
        name: "Dermatology",
        icon: icons.skin
    },
    {
        id: "8",
        name: "Rhinology",
        icon: icons.rhinology
    },
    {
        id: "9",
        name: "Otology",
        icon: icons.otology
    },
    {
        id: "10",
        name: "Hepatology",
        icon: icons.hepatology
    },
    {
        id: "11",
        name: "Gynecology",
        icon: icons.gynecology
    },
    {
        id: "12",
        name: "Oestology",
        icon: icons.otology
    },
    {
        id: "13",
        name: "Plastic",
        icon: icons.plastic
    },
    {
        id: "14",
        name: "Intestine",
        icon: icons.intestine
    },
    {
        id: "15",
        name: "Pediatric",
        icon: icons.pediatry
    },
    {
        id: "16",
        name: "Naturopato",
        icon: icons.natural
    },
    {
        id: "17",
        name: "Herbal",
        icon: icons.herbal
    },
    {
        id: "18",
        name: "General",
        icon: icons.general
    }
];

export const specialists = [
    {
        id: "1",
        image: images.doctor1 , 
        type: "Profesional Doctor", 
        name: "Dr. Robert Fox", 
        position: "Dentist", 
        rating: 5, 
        numReviews: 49
    },
    {
        id: "2",
        image: images.doctor2 , 
        type: "Profesional Doctor", 
        name: "Dr. Thomas Lina", 
        position: "Dentist", 
        rating: 5, 
        numReviews: 121
    },
    {
        id: "3",
        image: images.doctor3, 
        type: "Profesional Doctor", 
        name: "Dr. Ali Sanchez", 
        position: "Dentist", 
        rating: 5, 
        numReviews: 123
    },
    {
        id: "4",
        image: images.doctor4, 
        type: "Profesional Doctor", 
        name: "Dr. Mariana Dolorez", 
        position: "Dermato", 
        rating: 5, 
        numReviews: 67
    },
    {
        id: "5",
        image: images.doctor5, 
        type: "Profesional Doctor", 
        name: "Dr. Aminata Lita", 
        position: "Dentist", 
        rating: 5, 
        numReviews: 120
    },
    {
        id: "6",
        image: images.doctor6, 
        type: "Profesional Doctor", 
        name: "Dr. Luca Dola", 
        position: "Dentist", 
        rating: 5, 
        numReviews: 98
    },
    {
        id: "7",
        image: images.doctor7, 
        type: "Profesional Doctor", 
        name: "Dr. We Dream", 
        position: "Dentist", 
        rating: 5, 
        numReviews: 79
    }
]

export const keywordsData = [
        { id: '1', keyword: 'Dentist' },
        { id: '2', keyword: 'Cardiologist' },
        { id: '3', keyword: 'Neurologist' },
        { id: '4', keyword: 'Skin Care' },
        { id: '5', keyword: 'Opthtamologist' },
        // Add more keywords as needed
];

export const hospitalKeywordsData = [
    { id: '1', keyword: 'Dentist' },
    { id: '2', keyword: 'Cardiologist' },
    { id: '3', keyword: 'Neurologist' },
    { id: '4', keyword: 'Skin Care' },
    { id: '5', keyword: 'Opthtamologist' },
    // Add more keywords as needed
];
      
export const gallery = [
    { id: '1', image: images.hospital4},
    { id: '2', image: images.hospital5},
    { id: '3', image: images.hospital6},
    { id: '4', image: images.hospital7},
    { id: '5', image: images.hospital2},
    { id: '6', image: images.hospital3},
    { id: '7', image: images.hospital7},
    { id: '8', image: images.hospital8},
    { id: '9', image: images.hospital9},
]

export const hospitalReviews = [
    {
        id: "1",
        image: images.avatar7,
        title: 'Exceptional Medical Care',
        description: 'I received exceptional medical care during my visit to this hospital. The staff was professional, caring, and attentive to my needs. The facilities were clean and well-maintained.',
        date: '15/06/2025',
        num: 5
    },
    {
        id: "2",
        image: images.avatar2,
        title: 'Compassionate Staff',
        description: 'The hospital staff demonstrated great compassion and expertise. They made me feel comfortable and well-informed throughout my stay.',
        date: '10/08/2025',
        num: 5
    },
    {
        id: "3",
        image: images.avatar3,
        title: 'Top-Notch Medical Services',
        description: 'I was impressed by the top-notch medical services provided by this hospital. The doctors and nurses were highly skilled, and the facilities were equipped with the latest technology.',
        date: '05/09/2025',
        num: 5
    },
    {
        id: "4",
        image: images.avatar4,
        title: 'Efficient and Caring',
        description: "The hospital's efficiency and care were outstanding. They promptly attended to my needs and ensured a smooth recovery process.",
        date: '20/09/2025',
        num: 5
    },
    {
        id: "5",
        image: images.avatar5,
        title: 'Peaceful Healing Environment',
        description: "The hospital provided a peaceful and supportive environment for healing. It was a reassuring place to receive medical care.",
        date: '03/10/2025',
        num: 5
    }
]


export const notifications = [
    {
        id: "1",
        avatar: images.doctor1,
        name: 'Dr. Smith',
        message: 'Your appointment is confirmed for 2:00 PM today.',
        time: "2023-07-16T04:52:06.501Z",
    },
    {
        id: "2",
        avatar: images.doctor2,
        name: 'Dr. Johnson',
        message: 'New lab test results are available. Please review them.',
        time: "2023-08-12T04:52:06.501Z",
    },
    {
        id: "3",
        avatar: images.doctor3,
        name: 'Dr. Brown',
        message: 'Reminder: Your follow-up appointment is scheduled for tomorrow.',
        time: "2023-06-16T04:52:06.501Z",
    },
    {
        id: "4",
        avatar: images.doctor4,
        name: 'Dr. Davis',
        message: 'Prescription updated. Check your medication list.',
        time: "2023-08-16T04:52:06.501Z",
    },
    {
        id: "5",
        avatar: images.doctor5,
        name: 'Dr. Wilson',
        message: 'A new message from your primary care physician.',
        time: "2023-08-16T04:52:06.501Z",
    },
    {
        id: "6",
        avatar: images.doctor6,
        name: 'Dr. Patel',
        message: 'Appointment request from Dr. Patel. Confirm?',
        time: "2023-07-16T04:52:06.501Z",
    },
    {
        id: "7",
        avatar: images.doctor7,
        name: 'Dr. Garcia',
        message: 'Your lab test appointment is due in 3 days.',
        time: "2023-06-16T04:52:06.501Z",
    },
];


export const doctorConsultationBookings = [
    {
        id: "1",
        doctorName: 'Dr. Smith',
        doctorAvatar: images.doctor1,
        specialization: 'Cardiologist',
        appointmentDate: '2023-09-15',
        appointmentTime: '10:00 AM',
        address: "Mella street #6, New York",
        status: 'Confirmed',
        transactionId: "#RE20210603",
        price: 100
    },
    {
        id: "2",
        doctorName: 'Dr. Johnson',
        doctorAvatar: images.doctor2,
        specialization: 'Dermatologist',
        appointmentDate: '2023-09-18',
        appointmentTime: '2:30 PM',
        status: 'Pending',
        transactionId: "#RE20240603",
        price: 200
    },
    {
        id: "3",
        doctorName: 'Dr. Brown',
        doctorAvatar: images.doctor3,
        specialization: 'Pediatrician',
        appointmentDate: '2023-09-20',
        appointmentTime: '11:15 AM',
        status: 'Confirmed',
        transactionId: "#RE20210643",
        price: 60
    },
    {
        id: "4",
        doctorName: 'Dr. Davis',
        doctorAvatar: images.doctor4,
        specialization: 'Orthopedic Surgeon',
        appointmentDate: '2023-09-22',
        appointmentTime: '3:45 PM',
        status: 'Canceled',
        transactionId: "#RE20250603",
        price: 120
    },
    {
        id: "5",
        doctorName: 'Dr. Wilson',
        doctorAvatar: images.doctor5,
        specialization: 'Gynecologist',
        appointmentDate: '2023-09-25',
        appointmentTime: '9:30 AM',
        status: 'Confirmed',
        transactionId: "#RE20410603",
        price: 100
    },
];

export const doctorConsultationHistory = [
    {
        id: "1",
        doctorName: 'Dr. Smith',
        doctorAvatar: images.doctor1,
        specialization: 'Cardiologist',
        appointmentDate: '2023-09-15',
        appointmentTime: '10:00 AM',
        status: 'Completed',
        transactionId: "#RE20210603",
        price: 100
    },
    {
        id: "2",
        doctorName: 'Dr. Johnson',
        doctorAvatar: images.doctor2,
        specialization: 'Dermatologist',
        appointmentDate: '2023-09-18',
        appointmentTime: '2:30 PM',
        status: 'Completed',
        transactionId: "#RE20240603",
        price: 200
    },
    {
        id: "3",
        doctorName: 'Dr. Brown',
        doctorAvatar: images.doctor3,
        specialization: 'Pediatrician',
        appointmentDate: '2023-09-20',
        appointmentTime: '11:15 AM',
        status: 'Completed',
        transactionId: "#RE20210643",
        price: 60
    },
    {
        id: "4",
        doctorName: 'Dr. Davis',
        doctorAvatar: images.doctor4,
        specialization: 'Orthopedic Surgeon',
        appointmentDate: '2023-09-22',
        appointmentTime: '3:45 PM',
        status: 'Completed',
        transactionId: "#RE20250603",
        price: 120
    },
    {
        id: "5",
        doctorName: 'Dr. Wilson',
        doctorAvatar: images.doctor5,
        specialization: 'Gynecologist',
        appointmentDate: '2023-09-25',
        appointmentTime: '9:30 AM',
        status: 'Completed',
        transactionId: "#RE20410603",
        price: 100
    },
];

export const messsagesData = [
    {
        id: "1",
        fullName: "Jhon Smith",
        isOnline: false,
        userImg: images.avatar,
        lastSeen: "2023-11-16T04:52:06.501Z",
        lastMessage: 'I love you. see you soon baby',
        messageInQueue: 2,
        lastMessageTime: "12:25 PM",
        isOnline: true,
    },
    {
        id: "2",
        fullName: "Anuska Sharma",
        isOnline: false,
        userImg: images.avatar2,
        lastSeen: "2023-11-18T04:52:06.501Z",
        lastMessage: 'I Know. you are so busy man.',
        messageInQueue: 0,
        lastMessageTime: "12:15 PM",
        isOnline: false
    },
    {
        id: "3",
        fullName: "Virat Kohili",
        isOnline: false,
        userImg: images.avatar3,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Ok, see u soon',
        messageInQueue: 0,
        lastMessageTime: "09:12 PM",
        isOnline: true
    },
    {
        id: "4",
        fullName: "Shikhor Dhaon",
        isOnline: false,
        userImg: images.avatar4,
        lastSeen: "2023-11-18T04:52:06.501Z",
        lastMessage: 'Great! Do you Love it.',
        messageInQueue: 0,
        lastMessageTime: "04:12 PM",
        isOnline: true
    },
    {
        id: "5",
        fullName: "Shakib Hasan",
        isOnline: false,
        userImg: images.avatar5,
        lastSeen: "2023-11-21T04:52:06.501Z",
        lastMessage: 'Thank you !',
        messageInQueue: 2,
        lastMessageTime: "10:30 AM",
        isOnline: true
    },
    {
        id: "6",
        fullName: "Jacksoon",
        isOnline: false,
        userImg: images.avatar6,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Do you want to go out dinner',
        messageInQueue: 3,
        lastMessageTime: "10:05 PM",
        isOnline: false
    },
    {
        id: "7",
        fullName: "Tom Jerry",
        isOnline: false,
        userImg: images.avatar7,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Do you want to go out dinner',
        messageInQueue: 2,
        lastMessageTime: "11:05 PM",
        isOnline: true
    },
    {
        id: "8",
        fullName: "Lucky Luck",
        isOnline: false,
        userImg: images.avatar8,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Can you share the design with me?',
        messageInQueue: 2,
        lastMessageTime: "09:11 PM",
        isOnline: true
    },
    {
        id: "9",
        fullName: "Nate Jack",
        isOnline: false,
        userImg: images.avatar9,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Tell me what you want?',
        messageInQueue: 0,
        lastMessageTime: "06:43 PM",
        isOnline: true
    }
  ]