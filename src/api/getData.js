import fetch from '@/config/fetch'

/**
 * 登陆注册
 */

export const login = data => fetch('/user/login', data, 'POST');

export const register = data => fetch('/user/register', data, 'POST');

/**
 * 退出
 */

export const signout = () => fetch('/user/signout');

/**
 * 获取用户信息
 */

export const getAdminInfo = data => fetch('/user/info',data,'GET');

export const getUserInfo = data => fetch('/user/userinfo',data,'GET');
export const changeUserInfo = data => fetch('/user/changeuserinfo', data, 'POST');
export const changePassword= data => fetch('/user/changepassword', data, 'POST');
export const getPassengerInfo= data => fetch('/passenger/getPassengerInfo', data);

export const addPassengerInfo= data => fetch('/passenger/addPassengerInfo', data,'POST');

export const deletePassengerInfo= data => fetch('/passenger/deletePassengerInfo', data);

export const searchTrainSchedule= data => fetch('/trainSchedule/searchTrainSchedule', data);

export const getTrainScheduleList= data => fetch('/trainSchedule/getTrainScheduleList', data);

export const searchTransferSchedule= data => fetch('/trainSchedule/searchTransferSchedule', data);



export const queryTrainTicket= data => fetch('/query/queryTrainTicket', data);


export const queryTrainTicketNum= data => fetch('/query/queryTrainTicketNum', data);

export const queryTransferTrainTicketNum= data => fetch('/query/queryTransferTrainTicketNum', data,'POST');

export const queryTrainTransferTicket= data => fetch('/query/queryTrainTransferTicket', data);

export const orderTrainTicket= data => fetch('/order/orderTrainTicket', data,'POST');

export const getOrderList= data => fetch('/order/getOrderList', data);

export const paySuccess= data => fetch('/order/paySuccess', data,'POST');



/**
 * 获取列车总信息
 */

export const getTrainInfoData = data => fetch('/train/traininfo', data);
/**
 * 搜索列车信息
 */

export const SearchTrainInfoData = data => fetch('/train/searchtraininfo', data);

export const SearchTrainParkingInfo = data => fetch('/train/searchtrainparkingInfo', data);


export const getAllOrderList = data => fetch('/order/getAllOrderList', data);

export const getNotripOrderList = data => fetch('/order/getNotripOrderList', data);

export const getNoPayOrderList = data => fetch('/order/getNoPayOrderList', data);

export const refundTicket = data => fetch('/order/refundTicket', data);


export const getPassengerInfoByNumber = data => fetch('/passenger/getPassengerInfoByNumber', data);


export const ticketChange = data => fetch('/order/ticketChange', data,'POST');
