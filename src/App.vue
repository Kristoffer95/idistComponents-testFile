<template>
  <div id="app" class="w-100vw" style="font-family: 'SF Text', sans-serif;">
    <div class="w-100 h-100vh">
      sfsddfs
      <Sign
      :PrivacyAndTermsData="PrivacyAndTermsData"
      :inputType="inputType"
      :siteData="siteData">
      </Sign>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  data () {
    return {
      siteData: { // continue this...
        name: 'IDIST',
        // image: ''  ==> ADD IMAGE HERE
      },
      PrivacyAndTermsData: [
        {
          checkbox: false,    
          title: 'IDIST Terms of Use',
          boxData: 'IDIST Terms of Use wefweoijfweoijowiejfjweoj weofjweoij fowiejfa jafwejoiajfweojfo waejfoiwejfwioj fwoiejfo wiejfowejoewjfoewjfoewjoi wejfowejojfwifj woejfoewjoewjfoe wjfoewjfoewj oewjoewjfoewjfoejwfjew ojfweojfoajfwe wjfoewjfoewj oewjoewjfoewjfoejwfjew ojfweojfoajfwe wjfoewjfoewj oewjoewjfoewjfoejwfjew ojfweojfoajfwe wjfoewjfoewj oewjoewjfoewjfoejwfjew ojfweojfoajfwe wjfoewjfoewj oewjoewjfoewjfoejwfjew ojfweojfoajfwe wjfoewjfoewj oewjoewjfoewjfoejwfjew ojfweojfoajfwe wjfoewjfoewj oewjoewjfoewjfoejwfjew ojfweojfoajfwe'
        },
        {
          checkbox: false,
          title: 'IDIST Pravacy Policy',
          boxData: 'IDIST Terms of Use wefweoijfweoijowiejfjweoj weofjweoij fowiejfa jafwejoiajfweojfowaejfoiwejfwiojfwo iejfowiejfowe joewjfoe wjfoewjoiwej fowejojfw ifjwoej foewjoewjf oewjfoewjfoew joewjoewj foewjfoejwfjew ojfweojfoajfwe jafwejoiajfweojfowaejfoiwejfwiojfwo iejfowiejfowe joewjfoe wjfoewjoiwej fowejojfw ifjwoej foewjoewjf oewjfoewjfoew joewjoewj foewjfoejwfjew ojfweojfoajfwe jafwejoiajfweojfowaejfoiwejfwiojfwo iejfowiejfowe joewjfoe wjfoewjoiwej fowejojfw ifjwoej foewjoewjf oewjfoewjfoew joewjoewj foewjfoejwfjew'
        },
      ],
      inputType: [
        {
          type: 'email',
          placeholder: 'Email',
          name: 'email',
          icon: 'email',
          error: true
        },
        {
          type: 'password',
          placeholder: 'Password',
          name: 'password',
          icon: 'password',
          error: true
        },
        {
          type: 'text',
          placeholder: 'Full Name',
          name: 'fullname',
          icon: 'user',
          error: true 
        },
        {
          type: 'mobile',
          placeholder: 'Phone',
          name: 'phone',
          icon: 'phone',
          error: true
        }
      ],
    }
  }
}
</script>
