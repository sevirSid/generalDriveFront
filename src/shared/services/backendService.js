import axios from 'axios';
import {useEffect, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Constantes from '../../utils/Constantes';
import {Alert} from 'react-native';
let token = '';
// useEffect(() => {
let isMounted = true;
const getJwtToken = async () => {
  await AsyncStorage.getItem('user_jwt_token').then((value) => {
    token = value;
    return value;
  });
};
if (isMounted) {
  getJwtToken();
}
//   }, []);
export const getLocation = async () => {
  let result;
  await axios
    .get('https://geolocation-db.com/json/')
    .then((value) => {
      result = {
        latitude: value.data.latitude,
        longitude: value.data.longitude,
      };
    })
    .catch((error) => {});
  return result;
};
export const fetchCars = async () => {
  let result = [
    {
      id: 1,
      registrationNumber: 'AQ-445-TG',
      brand: 'Toyota',
      insuranceExpirationDate: '2022-04-05T21:53:57Z',
      modelYear: '2020',
      wheelsNbr: 77745,
      color: 'gold',
      type: 'Garden',
      sellPrice: 83448.0,
      rentPrice: 48576.0,
      documents: [
        'https://images.elite-auto.fr/visuel/MERCEDES/mercedes_22c200amglinesd5b_angularfront.png',
        'https://cdn.autodiscount.fr/cdn-autodiscount/storage/cars/7280/Mercedes_classeC_NEW21_7FIN-std.png?width=600&format=auto&quality=75',
        'https://jeleasemavoiture.com/wp-content/plugins/mu-JLMV/img/cars/MERCEDES-BENZ/CLASSE-C.png',
        'https://img2.freepng.fr/20180612/eub/kisspng-car-2017-mercedes-benz-c-class-2018-mercedes-benz-lowest-price-5b20724f1e7cd9.2114351815288530711249.jpg',
      ],
      bookings: null,
      owner: null,
    },
    {
      id: 2,
      registrationNumber: 'Limousin',
      brand: 'Bacon redundant Multi-tiered',
      insuranceExpirationDate: '2022-04-05T10:51:07Z',
      modelYear: 'Executif',
      wheelsNbr: 65758,
      color: 'silver',
      type: 'backing Producteur',
      sellPrice: 61627.0,
      rentPrice: 96825.0,
      documents: [
        'https://jeleasemavoiture.com/wp-content/plugins/mu-JLMV/img/cars/MERCEDES-BENZ/CLASSE-C.png',
        'https://images.elite-auto.fr/visuel/MERCEDES/mercedes_22c200amglinesd5b_angularfront.png',
        'https://cdn.autodiscount.fr/cdn-autodiscount/storage/cars/7280/Mercedes_classeC_NEW21_7FIN-std.png?width=600&format=auto&quality=75',
        
       
      ],
      bookings: null,
      owner: null,
    },
    {
      id: 3,
      registrationNumber: 'Fresh Beauty',
      brand: 'Account Picardie Berkshire',
      insuranceExpirationDate: '2022-04-06T08:56:24Z',
      modelYear: 'parsing',
      wheelsNbr: 57476,
      color: 'pink',
      type: 'SDD wireless',
      sellPrice: 39549.0,
      rentPrice: 69719.0,
      documents: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRql3dVJhs9aUsCgcKd1TNDnmuEuWhngU3FUhnS1IOjZK3uLxKAK2XdKeaCZaCTQXhF5DU&usqp=CAU',
        'https://images.elite-auto.fr/visuel/MERCEDES/mercedes_22c200amglinesd5b_angularfront.png',
        'https://cdn.autodiscount.fr/cdn-autodiscount/storage/cars/7280/Mercedes_classeC_NEW21_7FIN-std.png?width=600&format=auto&quality=75',
        'https://jeleasemavoiture.com/wp-content/plugins/mu-JLMV/img/cars/MERCEDES-BENZ/CLASSE-C.png',
      ],
      bookings: null,
      owner: null,
    },
    {
      id: 4,
      registrationNumber: 'Centre gold',
      brand: 'c mobile Aquitaine',
      insuranceExpirationDate: '2022-04-06T09:25:06Z',
      modelYear: 'zero',
      wheelsNbr: 15688,
      color: 'gold',
      type: 'copy',
      sellPrice: 90557.0,
      rentPrice: 25156.0,
      documents: [
        'https://images.elite-auto.fr/visuel/MERCEDES/mercedes_22c200amglinesd5b_angularfront.png',
        'https://cdn.autodiscount.fr/cdn-autodiscount/storage/cars/7280/Mercedes_classeC_NEW21_7FIN-std.png?width=600&format=auto&quality=75',
        'https://jeleasemavoiture.com/wp-content/plugins/mu-JLMV/img/cars/MERCEDES-BENZ/CLASSE-C.png',
        'https://img2.freepng.fr/20180612/eub/kisspng-car-2017-mercedes-benz-c-class-2018-mercedes-benz-lowest-price-5b20724f1e7cd9.2114351815288530711249.jpg',
      ],
      bookings: null,
      owner: null,
    },
    {
      id: 5,
      registrationNumber: 'Towels functionalities',
      brand: 'Rustic',
      insuranceExpirationDate: '2022-04-06T01:49:16Z',
      modelYear: 'Gloves copying',
      wheelsNbr: 5501,
      color: 'black',
      type: 'parse Tasty deposit',
      sellPrice: 24743.0,
      rentPrice: 26211.0,
      documents: [
        'https://images.elite-auto.fr/visuel/MERCEDES/mercedes_22c200amglinesd5b_angularfront.png',
        'https://cdn.autodiscount.fr/cdn-autodiscount/storage/cars/7280/Mercedes_classeC_NEW21_7FIN-std.png?width=600&format=auto&quality=75',
        'https://jeleasemavoiture.com/wp-content/plugins/mu-JLMV/img/cars/MERCEDES-BENZ/CLASSE-C.png',
        'https://img2.freepng.fr/20180612/eub/kisspng-car-2017-mercedes-benz-c-class-2018-mercedes-benz-lowest-price-5b20724f1e7cd9.2114351815288530711249.jpg',
      ],
      bookings: null,
      owner: null,
    },
    {
      id: 6,
      registrationNumber: 'Fish networks red',
      brand: 'parsing Laffitte Dominique',
      insuranceExpirationDate: '2022-04-05T11:14:07Z',
      modelYear: 'client-server',
      wheelsNbr: 59250,
      color: 'turquoise',
      type: 'b auxiliary',
      sellPrice: 78049.0,
      rentPrice: 29726.0,
      documents: [
        'https://images.elite-auto.fr/visuel/MERCEDES/mercedes_22c200amglinesd5b_angularfront.png',
        'https://cdn.autodiscount.fr/cdn-autodiscount/storage/cars/7280/Mercedes_classeC_NEW21_7FIN-std.png?width=600&format=auto&quality=75',
        'https://jeleasemavoiture.com/wp-content/plugins/mu-JLMV/img/cars/MERCEDES-BENZ/CLASSE-C.png',
        'https://img2.freepng.fr/20180612/eub/kisspng-car-2017-mercedes-benz-c-class-2018-mercedes-benz-lowest-price-5b20724f1e7cd9.2114351815288530711249.jpg',
      ],
      bookings: null,
      owner: null,
    },
    {
      id: 7,
      registrationNumber: 'Savings c c',
      brand: 'Bangladesh Kong',
      insuranceExpirationDate: '2022-04-05T17:11:14Z',
      modelYear: 'out-of-the-box benchmark',
      wheelsNbr: 16907,
      color: 'orchid',
      type: 'program Re-engineered Unbranded',
      sellPrice: 6801.0,
      rentPrice: 46843.0,
      documents: [
        'https://loremflickr.com/320/240?random=1',
        'https://loremflickr.com/320/240?random=1',
        'https://loremflickr.com/320/240?random=1',
        'https://loremflickr.com/320/240?random=1',
      ],
      bookings: null,
      owner: null,
    },
    {
      id: 8,
      registrationNumber: 'back-end Borders',
      brand: 'Zimbabwe 24/365 Personal',
      insuranceExpirationDate: '2022-04-06T05:30:22Z',
      modelYear: 'deposit États-Unis',
      wheelsNbr: 35646,
      color: 'gold',
      type: 'back Technicien',
      sellPrice: 72573.0,
      rentPrice: 65190.0,
      documents: [
        'https://loremflickr.com/320/240?random=1',
        'https://loremflickr.com/320/240?random=1',
        'https://loremflickr.com/320/240?random=1',
        'https://loremflickr.com/320/240?random=1',
      ],
      bookings: null,
      owner: null,
    },
    {
      id: 9,
      registrationNumber: 'integrated c',
      brand: 'recontextualize Handmade radical',
      insuranceExpirationDate: '2022-04-06T08:28:16Z',
      modelYear: 'Kazakhstan Tasty',
      wheelsNbr: 93505,
      color: 'turquoise',
      type: 'Investment',
      sellPrice: 99814.0,
      rentPrice: 52438.0,
      documents: [
        'https://loremflickr.com/320/240?random=1',
        'https://loremflickr.com/320/240?random=1',
        'https://loremflickr.com/320/240?random=1',
        'https://loremflickr.com/320/240?random=1',
      ],
      bookings: null,
      owner: null,
    },
    {
      id: 10,
      registrationNumber: 'Chips',
      brand: 'Nam',
      insuranceExpirationDate: '2022-04-05T21:55:23Z',
      modelYear: 'Portugal',
      wheelsNbr: 70311,
      color: 'salmon',
      type: 'bluetooth',
      sellPrice: 66076.0,
      rentPrice: 18997.0,
      documents: [
        'https://loremflickr.com/320/240?random=1',
        'https://loremflickr.com/320/240?random=1',
        'https://loremflickr.com/320/240?random=1',
        'https://loremflickr.com/320/240?random=1',
      ],
      bookings: null,
      owner: null,
    },
  ];
  return result;
  await axios
    .get('https://geolocation-db.com/json/')
    .then((value) => {
      result = {
        latitude: value.data.latitude,
        longitude: value.data.longitude,
      };
    })
    .catch((error) => {});
  return result;
};
export const updateFirebaseToken = async (
  tokenToUpdate,
  userPhoneNumber,
  token,
) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}token/${userPhoneNumber}`;
  await axios
    .put(webApiUrl, tokenToUpdate, config(token))
    .then((value) => {
      result = value;
    })
    .catch((error) => {});
  return result;
};
export const existVoucherForMe = async (
  userPhoneNumber,
  voucherCode,
  token,
) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}existvoucherforme/${userPhoneNumber}/${voucherCode}`;
  await axios
    .get(webApiUrl, config(token))
    .then((value) => {
      result = value.data;
    })
    .catch((error) => {});
  return result;
};
export const preProcessVoucher = async (
  userPhoneNumber,
  voucherCode,
  token,
) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}prevoucher/${userPhoneNumber}/${voucherCode}`;
  await axios
    .get(webApiUrl, config(token))
    .then((value) => {
      result = value.data;
    })
    .catch((error) => {});
  return result;
};
export const cancelBooking = async (userPhoneNumber, body, token) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}bstatus/${userPhoneNumber}`;
  await axios
    .put(webApiUrl, body, config(token))
    .then((value) => {
      result = value.data;
    })
    .catch((error) => {});
  return result;
};
export const createBooking = async (userPhoneNumber, booking, token) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}booking/${userPhoneNumber}`;
  await axios
    .post(webApiUrl, booking, config(token))
    .then((value) => {
      if (value) {
        result = value.data;
      }
    })
    .catch((error) => {});
  return result;
};
export const getNearestDrivers = async (userPhoneNumber, body, token) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}nearestdrivers/${userPhoneNumber}`;
  await axios
    .post(webApiUrl, body, config(token))
    .then((value) => {
      if (value) {
        result = value.data;
      }
    })
    .catch((error) => {});
  return result;
};
export const preProcessChange = async (userPhoneNumber, amount, token) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}preprocesschange/${userPhoneNumber}/${amount}`;
  await axios
    .get(webApiUrl, config(token))
    .then((value) => {
      result = value.data;
    })
    .catch((error) => {});
  return result;
};
export const cancelPreProcessChange = async (
  userPhoneNumber,
  amount,
  token,
) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}cancelpreprocesschange/${userPhoneNumber}/${amount}`;
  if (amount) {
    await axios
      .get(webApiUrl, config(token))
      .then((value) => {
        result = value.data;
      })
      .catch((error) => {});
    return result;
  }
};
export const checkUserWallet = async (userPhoneNumber, token) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}balance/${userPhoneNumber}`;
  await axios
    .get(webApiUrl, config(token))
    .then((value) => {
      result = value.data;
    })
    .catch((error) => {});
  return result;
};
export const cancelPromo = async (userPhoneNumber, promoCode, token) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}cancelprevoucher/${userPhoneNumber}/${promoCode}`;
  await axios
    .get(webApiUrl, config(token))
    .then((value) => {
      result = value.data;
    })
    .catch((error) => {});
  return result;
};
export const validatePromo = async (userPhoneNumber, promoCode, token) => {
  let result;

  const webApiUrl = `${Constantes.BASE_URL}prevoucher/${userPhoneNumber}/${promoCode}`;
  await axios
    .get(webApiUrl, config(token))
    .then((value) => {
      if (value) {
        result = value.data;
      }
    })
    .catch((error) => {});
  return result;
};
export const authenticateUser = async (body) => {
  let result;
  const webApiUrl = Constantes.BASE_URL.concat('authenticate');
  await axios
    .post(webApiUrl, body)
    .then((value) => {
      if (value) {
        result = value.data;
      }
    })
    .catch((error) => {});
  return result;
};
export const showAlert = (
  title,
  message,
  cancelText,
  OkText,
  handleCancel,
  handleOk,
) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: cancelText,
        onPress: () => {
          handleCancel();
          return null;
        },
      },
      {
        text: OkText,
        onPress: () => {
          handleOk();
          return null;
        },
      },
    ],
    {cancelable: false},
  );
};
export const userExist = async (userPhoneNumber) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}userexist/${userPhoneNumber}`;
  await axios
    .get(webApiUrl)
    .then((value) => {
      if (value) {
        result = value.data;
      }
    })
    .catch((error) => {
      console.log('@@@@userPhoneNumber...', userPhoneNumber, webApiUrl);

      result = {message: 'No user Found', error: error};
    });
  return result;
};
export const updatePassword = async (bodyForResetPassword) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}psd/${bodyForResetPassword.phoneNumber}`;
  await axios
    .put(webApiUrl, bodyForResetPassword, config(token))
    .then((value) => {
      if (value) {
        result = value.data;
      }
    })
    .catch((error) => {});
  return result;
};
export const createRating = async (body, token) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}review`;
  await axios
    .post(webApiUrl, body, config(token))
    .then((value) => {
      if (value) {
        result = value.data;
      }
    })
    .catch((error) => {});
  return result;
};
export const contactUs = async () => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}about/us`;
  await axios
    .get(webApiUrl)
    .then((value) => {
      if (value) {
        result = value.data;
      }
    })
    .catch((error) => {});
  return result;
};
export const subscription = async (body) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}register`;
  await axios
    .post(webApiUrl, body, {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    })
    .then((value) => {
      if (value) {
        result = value.data;
      }
    })
    .catch((error) => {});
  return result;
};
export const getRides = async (phoneNumber, token) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}trips/${phoneNumber}`;
  await axios
    .get(webApiUrl, config(token))
    .then((value) => {
      if (value) {
        result = value.data;
      }
    })
    .catch((error) => {});
  return result;
};
export const getWallet = async (phoneNumber, token) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}payments/${phoneNumber}`;
  await axios
    .get(webApiUrl, config(token))
    .then((value) => {
      if (value) {
        result = value.data;
      }
    })
    .catch((error) => {});
  return result;
};
export const getVehicleFares = async (phoneNumber, token) => {
  let result;
  // http://localhost:4000/api/admin/vehicletypefares/0760435860
  const webApiUrl = `${Constantes.BASE_URL}vehicletypefares/${phoneNumber}`;
  await axios
    .get(webApiUrl, config(token))
    .then((value) => {
      if (value) {
        result = value.data;
      }
    })
    .catch((error) => {});
  return result;
};
export const updateUser = async (body, phoneNumber, token) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}${phoneNumber}`;
  await axios
    .put(webApiUrl, body, config(token))
    .then((value) => {
      if (value) {
        result = value.data;
      }
    })
    .catch((error) => {});
  return result;
};
export const updateDriverStatus = async (body, phoneNumber, token) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}dstatus/${phoneNumber}`;
  await axios
    .put(webApiUrl, body, config(token))
    .then((value) => {
      if (value) {
        result = value.data;
        console.log(body);
      }
    })
    .catch((error) => {
      console.log(error, webApiUrl, body);
    });

  return result;
};
export const sendDriverPosition = async (body, phoneNumber, token) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}position/${phoneNumber}`;
  await axios
    .post(webApiUrl, body, config(token))
    .then((value) => {
      if (value) {
        console.log('value.data ###########', value.data, webApiUrl);
        console.log('###########', body);
        result = value.data;
      }
    })
    .catch((error) => {
      console.log('###########', webApiUrl, error);
    });
  return result;
};
export const sendToClient = async (body, phoneNumber, token) => {
  let result;
  const webApiUrl = `${Constantes.BASE_URL}pushsocket/${phoneNumber}`;
  console.log('`sd webApiUrl` ###########', webApiUrl);
  console.log('`sd` ###########', body);
  await axios
    .post(webApiUrl, body, config(token))
    .then((value) => {
      if (value) {
        result = value.data;
        console.log(webApiUrl, body, phoneNumber);
      }
    })
    .catch((error) => {
      console.log('Error ###########', webApiUrl, error);
      console.log('Error ###########', body);
    });
  return result;
};
const config = (token) => {
  return {headers: {Authorization: `Bearer ${token}`}};
};
