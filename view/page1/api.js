/**
 * 存放后端提供接口
 */
export default {
  
  // consultHttp: '/crm/api/tenant/addIntentionPeople',   // 咨询
  consultHttp: '/crm/api/tenant/addIntentionInfo',   // 咨询

  // postVerificationCode: '/crm/intention/addTenantInfo', // 获取验证码
  postVerificationCode: '/crm/api/tenant/getVerificationCode', // 获取验证码

  registerSubmit: '/crm/api/tenant/addTenantInfo',  // 注册
  registerLesseeSubmit: '/server/api-user/tsPreUser/add',  // 注册 租户


}
