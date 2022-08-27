import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import {
  StyleSheet,
  View,
  Modal,
  Alert,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
const ModalComponent = ({
  isModalVisble,
  promoCode,
  setPromoCode,
  onExistPromoForMe,
  errorPromo,
  setErrorPromo,
  setIsModalVisble
}) => {
  const [showWarning, setShowWarning] = useState(false);
  const [isKeyboardOpened, setIsKeyboardOpened] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
    setValue,
  } = useForm({
    defaultValues: {
      promoCode: '',
    },
  });
  useEffect(() => {
      setShowWarning(isModalVisble);
      const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
        setIsKeyboardOpened(true);
      });
      const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
        setIsKeyboardOpened(false);
      });
      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
  }, []);
  // const onExistPromoForMe = (params) => {
  // }
  const onCancelPromo = () => {
    setShowWarning(false);
    setIsModalVisble(false);
  };
  const onChangeVal = () => {
    setErrorPromo(false);
  };
  return (
    <View style={styles.body}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => setShowWarning(false)}
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>Promo Code {isKeyboardOpened}</Text>
            </View>
            <View style={styles.warning_body}>
              <CustomInput
                control={control}
                name={'promoCode'}
                placeholder={'Enter promo'}
                rules={{
                  required: 'Code Promo Obligatoire',
                  minLength: {
                    value: 3,
                    message: 'Code Promo invalide',
                  },
                }}
                // value={promoCode}
                // setValue={setPromoCode}
                // onChangeValue={onChangeVal}
              />
              {errorPromo ? (
                <Text style={{color: 'red'}}> {errorPromo}</Text>
              ) : null}
              <View
                style={{
                  // flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View style={{width: '45%'}}>
                  <CustomButton
                    text={'Validate'}
                    filled={true}
                    onPress={handleSubmit(onExistPromoForMe)}
                  />
                </View>
                <View style={{width: '45%'}}>
                  <CustomButton
                    text={'Cancel'}
                    level={'DANGER'}
                    onPress={onCancelPromo}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
// isAddAddressToFavoriteModalVisble setIsAddAddressToFavorite
export default ModalComponent;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: 300,
    height: 200,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    paddingHorizontal: 20
  },
  warning_title: {
    paddingTop: 10,
    maxHeight: 50,
    minHeight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray',
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 0},
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  // text: {
  //   fontSize: 24,
  //   marginBottom: 30,
  //   padding: 40,
  // },
});
