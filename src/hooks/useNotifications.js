import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

// handler de notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const useNotifications = () => {
  useEffect(() => {
    registerForPushNotifications();
  }, []);

  const registerForPushNotifications = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
      const { status: newStatus } = await Notifications.requestPermissionsAsync();
      if (newStatus !== 'granted') {
        console.log('Permissão para notificações negada');
        return;
      }
    }
    console.log('Permissão para notificações concedida');
  };

  const scheduleOrderNotification = async (orderId, status, delaySeconds = 2) => {
    let title, body;

    switch (status) {
      case 'Preparando':
        title = '🍳 Pedido em Preparação';
        body = `Seu pedido #${orderId.slice(-6)} está sendo preparado!`;
        break;
      default:
        title = '📦 Atualização do Pedido';
        body = `Status do pedido #${orderId.slice(-6)}: ${status}`;
    }

    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title,
          body,
          sound: true,
          data: { orderId, status },
        },
        trigger: { seconds: delaySeconds },
      });
      console.log(`Notificação agendada: ${title}`);
    } catch (error) {
      console.error('Erro ao agendar notificação:', error);
    }
  };

  const sendPromotionalNotification = async () => {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: '🎉 Promoção Especial!',
          body: 'Frete grátis em pedidos acima de R$ 30 hoje!',
          sound: true,
        },
        trigger: { seconds: 2 },
      });
      console.log('Notificação promocional enviada');
      return true;
    } catch (error) {
      console.error('Erro ao enviar notificação promocional:', error);
      return false;
    }
  };

  const sendWelcomeNotification = async () => {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: '👋 Bem-vindo ao InfnetFood!',
          body: 'Faça seu primeiro pedido e ganhe 10% de desconto!',
          sound: true,
        },
        trigger: { seconds: 3 },
      });
      console.log('Notificação de boas-vindas enviada');
      return true;
    } catch (error) {
      console.error('Erro ao enviar notificação de boas-vindas:', error);
      return false;
    }
  };

  return {
    scheduleOrderNotification,
    sendPromotionalNotification,
    sendWelcomeNotification,
  };
};