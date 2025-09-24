
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  PanResponder,
} from 'react-native';
import { colors } from '../styles/commonStyles';

interface SimpleBottomSheetProps {
  children?: React.ReactNode;
  isVisible?: boolean;
  onClose?: () => void;
}

const SNAP_POINTS = [0, 0.9]; // 0% and 90% of screen height
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const SimpleBottomSheet: React.FC<SimpleBottomSheetProps> = ({
  children,
  isVisible = false,
  onClose,
}) => {
  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setModalVisible(true);
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: SCREEN_HEIGHT * (1 - SNAP_POINTS[1]),
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: SCREEN_HEIGHT,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setModalVisible(false);
      });
    }
  }, [isVisible, translateY, backdropOpacity]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dy) > 10;
      },
      onPanResponderMove: (_, gestureState) => {
        const newTranslateY = Math.max(
          SCREEN_HEIGHT * (1 - SNAP_POINTS[1]) + gestureState.dy,
          SCREEN_HEIGHT * (1 - SNAP_POINTS[1])
        );
        translateY.setValue(newTranslateY);
      },
      onPanResponderRelease: (_, gestureState) => {
        const currentY = SCREEN_HEIGHT * (1 - SNAP_POINTS[1]) + gestureState.dy;
        const threshold = SCREEN_HEIGHT * 0.3;
        
        if (gestureState.dy > threshold || gestureState.vy > 0.5) {
          handleClose();
        } else {
          snapToPoint(SNAP_POINTS[1]);
        }
      },
    })
  ).current;

  const snapToPoint = (point: number) => {
    Animated.timing(translateY, {
      toValue: SCREEN_HEIGHT * (1 - point),
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleBackdropPress = () => {
    console.log('Backdrop pressed, closing bottom sheet');
    handleClose();
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="none"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={handleBackdropPress}>
          <Animated.View
            style={[
              styles.backdrop,
              {
                opacity: backdropOpacity,
              },
            ]}
          />
        </TouchableWithoutFeedback>

        <Animated.View
          style={[
            styles.bottomSheet,
            {
              transform: [{ translateY }],
            },
          ]}
          {...panResponder.panHandlers}
        >
          <View style={styles.handle} />
          <View style={styles.content}>
            {children}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.text,
  },
  bottomSheet: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: SCREEN_HEIGHT * 0.9,
    maxHeight: SCREEN_HEIGHT * 0.9,
    boxShadow: '0px -4px 20px rgba(0, 0, 0, 0.1)',
    elevation: 10,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: colors.border,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  content: {
    flex: 1,
  },
});

export default SimpleBottomSheet;
