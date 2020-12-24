import { get, reqM1Service, reqM2Service, reqM3Service, cascadePost } from './request'
// 發送簡訊驗證API
// export const apiAddress = p => post('/WATERVIPSentSMS', p)
// 取得CRM縣市區
// export const getAddrCity = p => post('/Verification/GetAddrCity', p)
// export const getAddrRoad = p => post('/Verification/GetAddrRoad', p)
export const apiAdd = p => get('/api/v1/users/my_address/address_edit_before', p)

// 取得該客戶所有的水產品API
export const getCustWaterProdList = p => reqM1Service('/GetCustWaterProdList', p)
// 4 透過ProductId Base64取得CustId API
export const getCustByEncodeProdcutId = p => reqM1Service('/GetCustByEncodeProdcutId', p)
// 5 透過Line Mid取得CustId API
export const getCustomerByLineMid = p => reqM1Service('/GetCustomerByLineMid', p)
// 取得該客戶某個水產品API
export const getByProductId = p => reqM1Service('/GetCustWaterProdListByProductId', p)
// 更換濾心API
export const updateROFiltert = p => reqM1Service('/UpdateROFiltert', p)
// 取得該客戶之服務經銷商API
export const getMaintenanceDistribution = p => reqM1Service('/GetMaintenanceDistribution', p)
// 15 濾心更換紀錄
export const getFilterChangeHistory = p => reqM1Service('/GetFilterChangeHistory', p)
// 取得預約記錄API
export const getOrderHistory = p => reqM1Service('/GetOrderHistory', p)
// 20 向經銷商預約服務API
export const getCreateFilterOrder = p => reqM3Service('/post.aspx', p)
// 14更換濾心API
export const getUpdateROFilter = p => reqM1Service('/UpdateROFilter', p)
// 解析濾心二維條碼之API
export const getDecodeQRCode = p => reqM2Service('/GetMFNO', p)
// 獲取該用戶所有經銷商信息
export const getMaintenanceDistributionByCustId = p => reqM1Service('/GetMaintenanceDistributionByCustId', p)

// 更改濾芯專人到府/到店取貨教學
export const UpdateCustomerTeachingBuyFilter = p => reqM1Service('/UpdateCustomerTeaching_Buy_Filter', p)
// 更改濾芯專人到府/到店取貨内容教學
export const UpdateCustomerTeachingBuy2Filter = p => reqM1Service('/UpdateCustomerTeaching_Buy2_Filter', p)
// 更新客戶更換濾心教學
export const UpdateCustomerTeachingChangFilter = p => reqM1Service('/UpdateCustomerTeaching_Chang_Filter', p)

// 獲取手機驗證碼
export const getWATERVIPSentSMS = p => reqM1Service('/WATERVIPSentSMS', p)
// 判斷手機驗證碼是否正確
export const getWATERVIPVerifySMS = p => reqM1Service('/WATERVIPVerifySMS', p)
// line註冊提交
export const CreateCustByLINE = p => reqM1Service('/CreateCustByLINE', p)
// 獲取縣市地區級聯
export const getGetAddrCity = p => cascadePost('/GetAddressCity', p)
// 獲取路名級聯
export const GetAddressRoad = p => cascadePost('/GetAddressRoad', p)
// 獲取目前最新活動/兌換商城，與狀態
export const SKAPIGetPHPProductList = p => reqM1Service('/SKAPI_GetPHP_ProductList', p)
// 獲取總點數
export const SKAPIGetMemNowPoint = p => reqM1Service('/SKAPI_GetMemNowPoint', p)
// 使用优惠卷  输入店号
export const SKAPIWRActivityUseStoreNo = p => reqM1Service('/SKAPI_WRActivityUseStoreNo', p)
// 使用优惠卷  输入推薦碼
export const SKAPIChkReferralCode = p => reqM1Service('/SKAPI_ChkReferralCode', p)
